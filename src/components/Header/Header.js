import React from "react";
import "./Header.css";
const Header = (props) => (
    <div className="head">
        <header className="mainH">
            <h1>Memory Game</h1>
            <p>To earn points select an image, but do not select the same image twice</p>
        </header>
        <nav className="scoreBoard">
            <div className="row">
                <div className="col-sm-4">
                    <p id="message">{props.message}</p>
                </div>
                <div className="col-sm-4">
                </div>
                <div className="col-sm-4">
                    <p id="scores">Current Score: {props.score}</p>
                    <p id="scores">Top Score: {props.topScore}</p>

                </div>
            </div>
        </nav>
    </div>
);
export default Header;