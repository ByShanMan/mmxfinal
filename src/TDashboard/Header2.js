import React from 'react';
import './HeaderStyle.css';

function Header2() {
    return (
        <div className="header2">
            <div className="headerLogo">
                <a href="/">
                    <img src="starlogo.png" alt="logo" />
                </a>
            </div>
            <div className="header-centre">
            </div>
            <div className="header-flags">
                <img id="lang" src="lang.png" alt="language" />
                <img id="maori-flag" src="maoriflag.png" alt="Maori flag" />
                <img id="nz-flag" src="nzflag.png" alt="nz flag"/>
            </div>
        </div>
    );
}

export default Header2;