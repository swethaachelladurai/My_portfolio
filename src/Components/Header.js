import React from "react";
import "./Header.css";
import data from "./json/content.json"
function Header(){
    return(
        <div>
            <section className="home" id="home">
                <div className="max-width"> 
                    <div className="home-container">
                        <img src="/all/png.png" alt="pic"></img>
                        <div className = "vertical"></div>
                        <div className="content">
                        <div className="text1">Hello! Myself</div>
                        <div className="text2">Swethaa Chelladurai</div>
                        <div className="text3">I'm an <span>UI/UX Designer.</span></div>
                        {data[3].map((data) => {
                            return (
                            <div>
                                <a href={data.file} download={data.file}>
                                    <button>Resume &nbsp;&nbsp;<i className="fa fa-arrow-down"></i></button></a>
                            </div>
                            
                            );
                        })}
                        </div>
                    </div>
                </div>
            </section>
            <div className="rect" id="about"></div>
            <div className="rect1"></div>
        </div>
    )
}
export default Header;