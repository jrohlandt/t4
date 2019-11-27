import AxiosHelper from './AxiosHelper';
import FakeAxiosHelper from './FakeAxiosHelper';

let AjaxHelper = AxiosHelper;
if (process.env.NODE_ENV === 'development') {
    AjaxHelper = FakeAxiosHelper;
}

export default AjaxHelper;
