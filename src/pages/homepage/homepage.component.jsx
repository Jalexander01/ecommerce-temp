import React from "react";
import "./homepage.styles.scss";

const HomePage = () => (
    <div className="homepage">
        <div className="directory-menu">
            <di className="menu-item">
                <div className="content">
                    <h1 className='title'> HATS</h1>
                    <span className='subtitle'>CLEARANCE SALE!</span>
                </div>
            </di>
            <di className="menu-item">
                <div className="content">
                    <h1> JACKETS</h1>
                    <span>CLEARANCE SALE!</span>
                </div>
            </di>
            <di className="menu-item">
                <div className="content">
                    <h1> WOMEN</h1>
                    <span>CLEARANCE SALE!</span>
                </div>
            </di>
            <di className="menu-item">
                <div className="content">
                    <h1> MENS</h1>
                    <span>CLEARANCE SALE!</span>
                </div>
            </di>
        </div>
    </div>
);

export default HomePage;
