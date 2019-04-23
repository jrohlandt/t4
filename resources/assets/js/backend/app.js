import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import Timer from './components/tasks';
import Reports from './components/reports';
import Projects from './components/projects';
import Clients from './components/clients';
import Labels from './components/labels';
import ProfileShow from './components/profile/index.jsx';

import FaClock from 'react-icons/lib/fa/clock-o';
import FaBarChart from 'react-icons/lib/fa/bar-chart';
import FaFolderO from 'react-icons/lib/fa/folder-o';
import FaUser from 'react-icons/lib/fa/user';
import FaTags from 'react-icons/lib/fa/tags';
import FaSignOut from 'react-icons/lib/fa/sign-out';
import FaPowerOff from 'react-icons/lib/fa/power-off';
import FaGroup from 'react-icons/lib/fa/group';

const logout = () => window.location = '/logout';

const App = () => (
    <Router>
        <div id="wrapper">
            <aside id="sidebar-left">
                <div>
                    <h3>T4</h3>
                </div>
                <nav>
                    <ul>
                        <li>
                            <NavLink 
                                exact
                                to="/app"
                                activeClassName="left-nav-active"
                            >
                            <FaClock size={20} style={{marginBottom: '5px'}}/>                            
                            <span>Timer</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/app/reports"
                                activeClassName="left-nav-active"
                            >
                            <FaBarChart size={20} style={{marginBottom: '5px'}}/>
                            <span>Reports</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/app/projects"
                                activeClassName="left-nav-active"
                            >
                            <FaFolderO size={20} style={{marginBottom: '5px'}}/>                            
                            <span>Projects</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/app/clients"
                                activeClassName="left-nav-active"
                            >
                            <FaGroup size={20} style={{marginBottom: '5px'}}/>
                            <span>Clients</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/app/labels"
                                activeClassName="left-nav-active"
                            >
                            <FaTags size={20} style={{marginBottom: '5px'}}/>                                                        
                            <span>Labels</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="app/profile" activeClassName="left-nav-active" >
                                <FaUser size={20} style={{maginBottom: '5px'}}/>
                                <span>Profile</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div onClick={logout} className="sidenav-sign-out">
                    <div>Sign Out</div> 
                    <span className="sign-out-icon"><FaSignOut size={20} /></span>
                    <span className="power-out-icon"><FaPowerOff size={20} /></span>
                </div>
            </aside>
            <main>
                <Route exact path="/app" component={Timer} />
                <Route path="/app/reports" component={Reports} />
                <Route path="/app/projects" component={Projects} />
                <Route path="/app/clients" component={Clients} />
                <Route path="/app/labels" component={Labels} />
                <Route path="/app/profile" component={ProfileShow} />
            </main>
        </div>
    </Router>
);


render(<App />, document.getElementById('app'));