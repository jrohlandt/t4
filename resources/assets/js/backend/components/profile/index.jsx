import React from 'react';
import Ajax from '../../core/Helpers/AjaxHelper.js';

import { CSSTransition } from 'react-transition-group';

class ProfileShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            profile: {
                first_name: '',
                last_name: '',
                email: '',

            }

        }

    }

    componentDidMount() {
        Ajax.get('/app/profile')
            .then(res => {
                console.log(res.profile);
                this.setState({profile: res.profile});
            })
            .catch(err => console.error(err));
    }

    render() {
        const profile = this.state.profile;
        return (
            <div>
                First name: {profile.first_name}
                Last name: {profile.last_name}
            </div>
        )
    }
}

export default ProfileShow;