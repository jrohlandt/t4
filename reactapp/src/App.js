import React from 'react';
// import logo from './logo.svg';
import './backend/styles/app.scss';

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import Timer from "./backend/components/tasks";
import Reports from "./backend/components/reports";
import Projects from "./backend/components/projects";
import Clients from "./backend/components/clients";
import Labels from "./backend/components/labels";

import { FaClock, FaChartBar, FaRegFolder, FaUser, FaTags, FaSignOutAlt, FaPowerOff } from 'react-icons/fa';

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
                  <FaClock size={20} />
                  <span>Timer</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                    to="/app/reports"
                    activeClassName="left-nav-active"
                >
                  <FaChartBar size={20} />
                  <span>Reports</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                    to="/app/projects"
                    activeClassName="left-nav-active"
                >
                  <FaRegFolder size={20} />
                  <span>Projects</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                    to="/app/clients"
                    activeClassName="left-nav-active"
                >
                  <FaUser size={20} />
                  <span>Clients</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                    to="/app/labels"
                    activeClassName="left-nav-active"
                >
                  <FaTags size={20} />
                  <span>Labels</span>
                </NavLink>
              </li>
            </ul>
          </nav>
          <div onClick={logout} className="sidenav-sign-out">
            <div>Sign Out</div>
            <span className="sign-out-icon"><FaSignOutAlt size={20} /></span>
            <span className="power-out-icon"><FaPowerOff size={20} /></span>
          </div>
        </aside>
        <main>
          <Route exact path="/app" component={Timer} />
          <Route path="/app/reports" component={Reports} />
          <Route path="/app/projects" component={Projects} />
          <Route path="/app/clients" component={Clients} />
          <Route path="/app/labels" component={Labels} />
        </main>
      </div>
    </Router>
);
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
