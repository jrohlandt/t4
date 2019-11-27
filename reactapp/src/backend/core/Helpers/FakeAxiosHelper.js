import { generateRandomInt } from './IntHelper';

const delay = 1000;

const tasks = [
	{
		id: 2,
		description: null,
		label_id: null,
		project_id: null,
		start_time: "2019-11-10 09:20:51",
		end_time: "2019-11-10 09:21:13",
		created_at: "2019-11-10 07:20:52",
		updated_at: "2019-11-10 07:21:13",
	},
	{
		id: 3,
		description: null,
		label_id: null,
		project_id: null,
		start_time: "2019-11-10 10:20:51",
		end_time: "2019-11-10 10:21:13",
		created_at: "2019-11-10 08:20:52",
		updated_at: "2019-11-10 08:21:13",
	},
];

let projects = [];
let day = 1;
for (let i=1; i < 20; i++) {
	day++;
	projects.push({
		id: i,
		client_id: generateRandomInt(1, 3),
		color_id: generateRandomInt(1, 9),
		name: i === 5 ? `Veryveryverylongprojectname this is` : `This is project ${i}`,
		created_at: `2019-11-${day} 07:19:21`,
		updated_at: `2019-11-${day} 07:19:21`,
	});
}

const clients = [
	{
		id: 1,
		name: "client 1",
		created_at: "2019-11-10 07:18:10",
		updated_at: "2019-11-10 07:18:10",
	},
	{
		id: 2,
		name: "client 2",
		created_at: "2019-11-10 07:18:10",
		updated_at: "2019-11-10 07:18:10",
	},
	{
		id: 3,
		name: "client 3",
		created_at: "2019-11-10 07:18:10",
		updated_at: "2019-11-10 07:18:10",
	}
];

const labels = [
	{
		id: 1,
		name: "development",
		created_at: "2019-11-10 07:20:32",
		updated_at: "2019-11-10 07:20:45",	
	},
	{
		id: 2,
		name: "Research",
		created_at: "2019-11-10 07:20:32",
		updated_at: "2019-11-10 07:20:45",	
	},
	{
		id: 4,
		name: "Meeting",
		created_at: "2019-11-10 07:20:32",
		updated_at: "2019-11-10 07:20:45",	
	},
];

const colors = [
	{
		id: 1,
		'name': 'green', 
		'value': '171, 47%, 52%', 
		'order': 1
	},
	{
		id: 2,
		'name': 'red', 
		'value': '359, 100%, 62%', 
		'order': 2
	},
	{
		id: 3,
		'name': 'yellow', 
		'value': '40, 92%, 58%', 
		'order': 3
	},
	{
		id: 4,
		'name': 'blue', 
		'value': '201, 97%, 36%', 
		'order': 4
	},
	{
		id: 5,
		'name': 'orange', 
		'value': '13, 97%, 55%', 
		'order': 5
	},
	{
		id: 6,
		'name': 'pink', 
		'value': '351, 76%, 68%', 
		'order': 6
	},
	{
		id: 7,
		'name': 'purple', 
		'value': '307, 21%, 48%', 
		'order': 7
	},
	{
		id: 8,
		'name': 'turquoise', 
		'value': '187, 52%, 65%', 
		'order': 8
	},
	{
		id: 9,
		'name': 'grey', 
		'value': '240, 6%, 67%', 
		'order': 9
	},
];

// function delayPromise(duration) {
// 	return function(...args){
// 		return new Promise(function(resolve, reject) {
// 			setTimeout(function() {
// 				resolve(...args);
// 			}, duration);
// 		});
// 	};
// }

export default {

	/**
	 * Send a Get request.
	 *
	 * @param {object} data
	 */
	get(url, urlencode=true) {

		let response = [];
		switch(url) {
			case 'app/tasks':
			case '/app/tasks':
			case '/app/tasks/':

					response['tasks'] = tasks;
					break;
			case '/app/projects':
				response['projects'] = projects.map((p) => {
					p.client = clients.filter(c => c.id === p.client_id)[0];
					p.color = colors.filter(c => c.id === p.color_id)[0];
					return p;
				});
				break;
			case '/app/clients':
				response['clients'] = clients;
				break;
			case '/app/labels':
				response['labels'] = labels;
				break;
			case '/app/colors':
				response['colors'] = colors;
				break;
			default:
				return Promise.reject(`FakeAjaxHelper error: ${url} not found`);
		}

		return new Promise(function(resolve, reject) {
			setTimeout(function() {
				resolve(response);
			}, delay);
		});
	},

	/**
	 * Send a POST request.
	 *
	 * @param {object} data
	 */
	post(url, data, urlencode=true ) {
		let response = [];
		switch(url) {
			// case '/app/tasks':
			// case '/app/tasks/':
			// 		response['tasks'] = tasks;
			// 		break;
			case '/app/projects':
				let p = data;
				p.id = generateRandomInt(5000, 10000);
				p.client = clients.filter(c => c.id === p.client_id)[0];
				p.color = colors.filter(c => c.id === p.color_id)[0];
				response['project'] = p;
				break;
			case '/app/clients':
				let c = data;
				c.id = generateRandomInt(5000, 10000);
				response['client'] = c;
				break;
			case '/app/labels':
				let l = data;
				l.id = generateRandomInt(5000, 10000);
				response['label'] = l;
				break;
			default:
				return Promise.reject(`FakeAjaxHelper error: Method POST ${url} not found`);
		}

		return new Promise(function(resolve, reject) {
			setTimeout(function() {
				resolve(response);
			}, delay);
		});
	},

	/**
	 * Send a PUT request.
	 *
	 * @param {object} data
	 */
	put(url, data, urlencode=true ) {
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
				resolve([]);
			}, delay);
		});
	},

	/**
	 * Send a DELETE request.
	 *
	 * @param {object} data
	 */
	delete(url, data, urlencode=true ) {
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
				resolve([]);
			}, delay);
		});
	},

};
