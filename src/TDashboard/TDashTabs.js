import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./TDashTabs.css";
import HelpRequests from './SubComponents/HelpRequests';
import ProgressTracker from './SubComponents/ProgressTracker';
import StudentProfiles from './SubComponents/StudentProfiles';
import ProjectSubmissions from './SubComponents/ProjectSubmissions';
import ProjectLibrary from "./SubComponents/ProjectLibrary";


export default function TDashTabs() {
    const [showAll, showIcons] = useState(false);

    const tabControl = () => {
        if (showAll === true) {
            showIcons(false);
        } else {
            showIcons(true);
        }
    }

    const [activeButton, setActiveButton] = useState("t1");

    const handleClick = (e) => {
        setActiveButton(e.target.value)
        console.log(activeButton)
    }

    var loadDisplay;
    if (activeButton === "t1") {
        loadDisplay = <ProgressTracker />
    } else if (activeButton === "t2") {
        loadDisplay = <StudentProfiles />
    } else if (activeButton === "t3") {
        loadDisplay = <HelpRequests />
    } else if (activeButton === "t4") {
        loadDisplay = <ProjectSubmissions />
    } else if (activeButton === "t5") {
        loadDisplay = <ProjectLibrary />
    }

    return (
        <div className="tdb-edge-wrap">
            <div className="tdb-display-area">
                <div className={showAll === false ? "tabs-showAll" : "active-reveal"}>
                    <div className={showAll === true ? "tabs-showIcons" : "hide-reveal"}>
                        <div className="avatar-on-tabs"></ div>

                        <button value="t1" onClick={handleClick} className={activeButton === "t1" ? "active-tab-select" : "select-tab1"} />
                        <button value="t2" onClick={handleClick} className={activeButton === "t2" ? "active-tab-select" : "select-tab2"} />
                        <button value="t3" onClick={handleClick} className={activeButton === "t3" ? "active-tab-select" : "select-tab3"} />
                        <button value="t4" onClick={handleClick} className={activeButton === "t4" ? "active-tab-select" : "select-tab4"} />
                        <button value="t5" onClick={handleClick} className={activeButton === "t5" ? "active-tab-select" : "select-tab5"} />

                        <div className={showAll === true ? "switch-chevronR" : "move-arrow"} onCLick={tabControl}>
                            <img src="iconopenright.png" alt="click to open" />
                        </ div>

                        <div className="tabs-tiny-links">
                            <link className="link" to="Login Page">
                                <img src="openprofile.png" alt="click to open profile" />
                            </ link>
                            <img src="opensettings.png" />
                            <link className="link" to="Student Project Page">
                                <img src="logout.png" alt="open project page" />
                            </ link>
                        </ div>

                    </div>
                    <div className="avatar-area">
                        <img src="avatar.png" alt="click for Avatar" />
                    </div>
                    <button value="t1" onClick={handleClick} className={activeButton === "t1" ? "active" : ""} style={{ fontSize: "10px" }}>
                        <img src="t1" alt="" onClick={handleClick} className={activeButton === "t1" ? "progressdark.png" : "progresslight.png"} />
                        Progress Tracker</button>
                    <button value="t2" onClick={handleClick} className={activeButton === "t2" ? "active" : ""} style={{ fontSize: "10px" }}>
                        <img src="t2" alt="" onClick={handleClick} className={activeButton === "t2" ? "graduatedark.png" : "graduatelight.png"} />
                        Student Profiles</button>
                    <button value="t3" onClick={handleClick} className={activeButton === "t3" ? "active" : ""} style={{ fontSize: "10px" }}>
                        <img src="t3" alt="" onClick={handleClick} className={activeButton === "t3" ? "icondark.png" : "iconlight.png"} />
                        Help Requests</button>
                    <button value="t4" onClick={handleClick} className={activeButton === "t4" ? "active" : ""} style={{ fontSize: "10px" }}>
                        <img src="t4" alt="" onClick={handleClick} className={activeButton === "t4" ? "submitdark.png" : "submitlight.png"} />
                        Project Submission</button>
                    <button value="t5" onClick={handleClick} className={activeButton === "t5" ? "active" : ""} style={{ fontSize: "10px" }}>
                        <img src="t5" alt="" onClick={handleClick} className={activeButton === "t5" ? "librarylight.png" : "librarylight.png"} />
                        Project Library</button>

                    <div className="dash-tiny-links">
                        <link className="link" to=" ">
                            <div className="tiny-link-card">
                                <img src="openprofile.png" alt="" />
                                <div>Profile</div>
                            </div>
                        </link>
                    </div>
                    <div classname="tiny-link-card">
                        <img src="opensettings.png" alt="" />
                        <div>Settings</div>
                    </div>
                    <link className="link" to=" ">
                        <div className="tiny-link-card">
                            <img src="logout.png" alt="" />
                            <div>Logout</div>
                        </div>
                    </link>

                </div>
            </div>

            <div className={showAll === true ? "move-arrow" : "switch-chevronL"} onCLick={tabControl}>
                <img src="opencaretl.png" alt="open" />
            </div>

            <div className="tdb-display">
                <div className="btn-group">
                    <button className="take-btn"></button>
                    <button className="help-btn"></button>
                    <button className="more-btn"></button>
                </div>
                {loadDisplay}
            </div>
        </div>
 )
}
