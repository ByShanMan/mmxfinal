import React from 'react';
import TDashTabs from './TDashTabs';
import Header2 from './Header2';
import Footer2 from './Footer2';

export default function TDashApp() {
    return (
        <div className="App">
            <Header2 />
            <TDashTabs />
            <Footer2 />
        </div>
    )
}