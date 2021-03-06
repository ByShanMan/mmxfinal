import './Dashboard.css';
import clsx from 'clsx';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { useState } from 'react';
import ProgressTracker from './SubComponents/ProgressTracker';
import StudentProfiles from './SubComponents/StudentProfiles';
import HelpRequests from './SubComponents/HelpRequests';
import ProjectSubmissions from './SubComponents/ProjectSubmissions';


const Dashboard = () => {
    const [open, setOpen] = useState(true);
    const [large, setLarge] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
        setLarge(false);
    }

    const handleDrawerClose = () => {
        setOpen(false);
        setLarge(true);
    }

    return (

        <div className = 'dashboard-wrapper'>


            <Router>

                <div className = {clsx('drawer-wrapper', {
                                ['drawer-open']: open,
                                ['drawer-close']: !open,
                })} >

                    
                    <div id = 'teacher-photo-wrap'>
                        <img id = 'teacher-photo' src="avatar.png" />
                    </div>

                    <div className = 'drawer-nav'>

                        <NavLink to = "/ProgressTracker.js" style = {{width: '100%', textDecoration: 'none', margin: '1.5% auto'}} activeStyle = {{backgroundColor: '#B2E4FA', borderRadius: '10px'}} >
                            <div className = 'nav-buttons'>
                                <img className = {clsx('nav-icons', {
                                                ['iconsLarge']: !large,
                                                ['iconsLarge']: large,
                                })} src ="progresslight.png" />
                                <h2 className = {clsx('nav-text', {
                                                ['hidden']: !large,
                                                ['hidden']: large,
                                })} >PROGRESS TRACKER</h2>
                            </div>
                        </NavLink>

                        <NavLink to = "/StudentProfiles.js" style = {{width: '100%', textDecoration: 'none', margin: '2.5% auto'}} activeStyle = {{backgroundColor: '#B2E4FA', borderRadius: '10px'}} >
                            <div className = 'nav-buttons'>
                                <img className = {clsx('nav-icons', {
                                                ['iconsLarge']: !large,
                                                ['iconsLarge']: large,
                                })} src ="graduatelight.png" />
                                <h2 className = {clsx('nav-text', {
                                                ['hidden']: !large,
                                                ['hidden']: large,
                                })} >STUDENT PROFILES</h2>
                            </div>
                        </NavLink>

                        <NavLink to = "/HelpRequests.js" style = {{width: '100%', textDecoration: 'none', margin: '2.5% auto'}} activeStyle = {{backgroundColor: '#B2E4FA', borderRadius: '10px'}} >
                            <div className = 'nav-buttons'>
                                <img className = {clsx('nav-icons', {
                                                ['iconsLarge']: !large,
                                                ['iconsLarge']: large,
                                })} src ="iconlight.png" />
                                <h2 className = {clsx('nav-text', {
                                                ['hidden']: !large,
                                                ['hidden']: large,
                                })} >STUDENT REQUESTS</h2>
                            </div>
                        </NavLink>

                        <NavLink to = "/ProjectSubmissions.js" style = {{width: '100%', textDecoration: 'none', margin: '2.5% auto'}} activeStyle = {{backgroundColor: '#B2E4FA', borderRadius: '10px'}} >
                            <div className = 'nav-buttons'>
                                <img className = {clsx('nav-icons', {
                                                ['iconsLarge']: !large,
                                                ['iconsLarge']: large,
                                })} src ="submitlight.png" />
                                <h2 className = {clsx('nav-text', {
                                                ['hidden']: !large,
                                                ['hidden']: large,
                                })} >PROJECT SUBMISSIONS</h2>
                            </div>
                        </NavLink>
                        <NavLink to = "" style = {{width: '100%', textDecoration: 'none', margin: '2.5% auto'}} activeStyle = {{backgroundColor: '#B2E4FA', borderRadius: '10px'}} >
                            <div className = 'nav-buttons'>
                                <img className = {clsx('nav-icons', {
                                                ['iconsLarge']: !large,
                                                ['iconsLarge']: large,
                                })} src ="librarylight.png" />
                                <h2 className = {clsx('nav-text', {
                                                ['hidden']: !large,
                                                ['hidden']: large,
                                })} >PROJECT LIBRARY</h2>
                            </div>
                        </NavLink>
                    </div>

                    <a onClick = { handleDrawerClose } className = {clsx('carets', {
                                                    ['hidden']: !large,
                                                    ['hidden']: large,
                    })} >
                        <div id = 'left-button'>
                            <img id = 'caret-left' src ="opencaretl.png" />
                        </div>
                    </a>

                    <a onClick = { handleDrawerOpen } className = {clsx('carets', {
                                                    ['hidden']: large,
                                                    ['hidden']: !large,
                    })} >
                        <div id = 'right-button'>
                            <img id = 'caret-left' src ="opencaretr.png" />
                        </div>
                    </a>
                    <div className = {clsx('bottom-nav', {
                                    ['bottom-flex']: open,
                                    ['bottom-flex']: !open,
                    })} >

                            <a href = '#' className = 'bottom-links'>
                                <img className = 'bottom-img' src ="profileicon.png" />
                                <p className = {clsx('bottom-text', {
                                            ['hidden']: !large,
                                            ['hidden']: large,
                                })} >Profile</p>
                            </a>

                            <a href = '#' className = 'bottom-links'>
                                <img className = 'bottom-img' src ="settingsicon.png" />
                                <p className = {clsx('bottom-text', {
                                            ['hidden']: !large,
                                            ['hidden']: large,
                                })} >Settings</p>
                            </a>

                            <a href = '#' className = 'bottom-links'>
                                <img className = 'bottom-img' src ="logouticon.png" />
                                <p className = {clsx('bottom-text', {
                                            ['hidden']: !large,
                                            ['hidden']: large,
                                })} >Logout</p>
                            </a>
                    </div>
                </div>
                <div className = 'dash-wrap'>
                    <div className = 'inlay'>

                            <Switch>
                                    
                                    <Route exact path = '/ProgressTracker.js'>
                                        <ProgressTracker />
                                    </Route>

                                    <Route exact path = '/StudentProfiles.js'>
                                        <StudentProfiles />
                                    </Route>

                                    <Route exact path = '/StudentRequests.js'>
                                        <HelpRequests />
                                    </Route>

                                    <Route exact path = '/ProjectSubmissions.js'>
                                        <ProjectSubmissions />
                                    </Route>


                            </Switch>
                    </div>
                </div>


                    
            </Router>

        </div>

    )
}

export default Dashboard;
