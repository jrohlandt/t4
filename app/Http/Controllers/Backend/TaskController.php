<?php

declare(strict_types=1);

namespace App\Http\Controllers\Backend;

use App\Helpers\CsvParser\Exceptions\InvalidCsvFileException;
use App\Helpers\CsvParser\Exceptions\InvalidDateException;
use App\Helpers\CsvParser\Exceptions\InvalidValidationRule;
use App\Helpers\TaskImportHelper;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use App\Task;
use App\Http\Requests\TaskRequest;
use Illuminate\Support\Facades\Log;

class TaskController extends Controller
{
    private $task;

    public function __construct(Task $task)
    {
        $this->task = $task;
    }

    /**
     * Display a listing of the resource.
     * @param $request
     * @return \Illuminate\Http\JsonResponse or \Illuminate\View\View
     */
    public function index(Request $request)
    {
        if (!$request->ajax())
            return view('backend.index');

        return response()->json(['tasks' => Auth::user()->recentTasks()]);
    }

    // Get Active Task
    public function active(): JsonResponse
    {
        $task = auth()->user()->activeTask();
        if (is_null($task)) {
            return response()->json(['message' => 'No active task', 'task' => null]);
        }

        return response()->json(['message' => 'success', 'task' => $task]);
    }

    // Store
    public function store(TaskRequest $request): JsonResponse
    {
        $data = $request->validated();

        if ($request->filled('start_time') ) {
            // Don't use the time sent from the client.
            $data['start_time'] = Carbon::now();
        }

        $task = auth()->user()->tasks()->create($data);

        return response()->json(['message' => 'success', 'task' => $task]);
    }

    // Update
    public function update(TaskRequest $request, int $id): JsonResponse
    {
        $data = $request->validated();
        $task = auth()->user()->tasks()->findOrFail($id);

        if (!$task->start_time && $request->filled('start_time') ) {
            // Don't use the time sent from the client.
            $data['start_time'] = Carbon::now();
        }

        if (!$task->end_time && $request->filled('end_time') ) {
            // Don't use the time sent from the client.
            $data['end_time'] = Carbon::now();
        }

        $task->update($data);

        return response()->json(['message' => 'success']);
    }

    // Destroy
    public function destroy(int $id): JsonResponse
    {
        $task = auth()->user()->tasks()->findOrFail($id);
        $this->authorize('delete', $task);
        $task->delete();
        return response()->json(['message' => 'success']);
    }

    public function import()
    {
        return view('backend.csvimport');
    }

    public function csvImport(Request $request)
    {
        if (!$request->file('csv_file')) {
            return redirect()->back()->withErrors('No File');
        }

        try {

            $helper = new TaskImportHelper(Auth::user());
            $parsedArray = $helper->parseCsvIntoArray($request->file('csv_file')->getPathName());
            $processed = $helper->process($parsedArray);

            foreach($processed as $task) {
                auth()->user()->tasks()->create($task);
            }

            return redirect()->route('app.tasks.import')->with(['success' => 'Contacts imported successfully']);

        } catch(InvalidCsvFileException $e) {
            Log::error($e->getMessage());
            $error = 'Invalid CSV File';
        } catch(InvalidValidationRule $e) {
            Log::error($e->getMessage());
            $error = 'Invalid Validation rule';
        } catch(InvalidDateException $e) {
            Log::error($e->getMessage());
            $error = 'Invalid Validation rule';
        } catch(\Exception $e) {
            Log::error($e->getMessage());
            $error = 'An unknown error occurred.';
        }

        return redirect()->back()->withErrors($error);
    }
}
