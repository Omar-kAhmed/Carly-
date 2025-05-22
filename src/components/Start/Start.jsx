import React, { useEffect } from "react";
import "./start.css";

function Start() {
    let rotation = 20;

    useEffect(() => {
        const btn = document.querySelector(".engine");
        const wrap = document.getElementById("wrapper");

        // Toggle active class on button click
        const toggleActive = () => {
            btn.classList.toggle("active");
        };

        // Rotate the wrapper on arrow up/down keys
        const handleKeyDown = (e) => {
            if (e.keyCode === 38) { // Up arrow
                rotation += 5;
                wrap.style.transform = `rotateX(${rotation}deg) translateY(-110px)`;
            } else if (e.keyCode === 40) { // Down arrow
                rotation -= 5;
                wrap.style.transform = `rotateX(${rotation}deg) translateY(-110px)`;
            }
        };

        // Attach event listeners
        btn.addEventListener("click", toggleActive);
        window.addEventListener("keydown", handleKeyDown);

        // Cleanup event listeners on component unmount
        return () => {
            btn.removeEventListener("click", toggleActive);
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <div id="wrapper">
            <div className="outer-black">
                <div className="outer-iron">
                    <div className="glare"></div>
                    <div className="inner-black">
                        <div className="inner-black-2">
                            <div className="inner-black-3">
                                <button className="engine">
                                    <div className="light"></div>
                                    <span>Engine<br /></span>
                                    <span>Start<br />Stop<br /></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Start;
