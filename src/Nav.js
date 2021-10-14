import React { useState, useEffect } from 'react'
import "./Nav.css"

function Nav() {
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleShow(true);
            }else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/0" alt="Netflix Logo">
            <img className="nav__avatar" src="https://pbs.twimg.com/profile_images/124-11999041155" alt="Netflix Logo">
            
        </div>
    )
}

export default Nav
