import setting from "./Assets/setting.svg";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Assets/logo.svg";
import upload from "./Assets/upload.svg";

export default function Themaincontent() {
    let [api, setApi] = useState([]);
    let [search, setSearch] = useState("");
    let [click, setClick] = useState("");
    let navigate = useNavigate();
    let change = (e) => {
        setSearch(e.target.value);
    };

    let clickk = (text)=>{
        setSearch(text);
        console.log(text);
    }
   

    

    useEffect(() => {
        let api = fetch(`https://pixabay.com/api/?key=46193687-1ee9f7465fd5eeca96a352d5f&q=${search}&image_type=photo`)
        api.then(res => res.json()).then(val => setApi(val.hits));
    },[search]);
    return(
        <>
            <nav>
                <h1>
                    <img src={Logo} alt="Website Logo" style={{height: "38px", marginLeft: "39px", marginTop: "5px"}} />
                </h1>
                <ul>
                    <div id="navbar-section">
                        <li className="nav-item"><button>Explore</button></li>
                        <Link to={"/login"}><li className="nav-item"><button>Login</button></li></Link>
                        <Link to={"/signup"}><li className="nav-item"><button>Join</button></li></Link>
                        <li className="nav-item" style={{marginRight:"26px"}}>
                            <button><img src={upload} alt="Upload" style={{height:"19px"}}/> Upload</button>
                        </li>
                    </div>
                </ul>
            </nav>
            <div className="header-background-image"></div>
            <div className="main-content-wrapper">
                <h1 className="main-title">Stunning royalty-free images & royalty-free stock</h1>
                <h3 className="main-subtitle">Over 5 million+ high-quality stock images, videos, and music shared by our talented community.</h3>

                <input type="text" placeholder="Search for all images on Pixabay" onChange={change} className="search-input" required/>
                
                <select name="imageType" id="image-type-selector">
                    <option value="">All Images</option>
                    <option value="photo">Photos</option>
                    <option value="vector">Vectors</option>
                </select>
            </div>

            <div className="navigation-buttons">
                {/* <button className="btn-style">Home</button>
                <button className="btn-style">Photos</button>
                <button className="btn-style">Illustrations</button>
                <button className="btn-style">Vector</button>
                <button className="btn-style">Videos</button>
                <button className="btn-style">Music</button>
                <button className="btn-style">Sound Effects</button> */}
                {/* <button className="btn-style">GIFS</button> */}
            </div> 
            <br /> 

            <div className="suggestion-buttons">
                <button className="btn-style1" onClick={()=>clickk("background")}>Background</button>
                <button className="btn-style1" onClick={()=>clickk("wallpaper")}>Wallpaper</button>
                <button className="btn-style1" onClick={()=>clickk("flower")}>Flowers</button>
                <button className="btn-style1" onClick={()=>clickk("flower")}>Woman</button>
                <button className="btn-style1" onClick={()=>clickk("landscape")}>Landscape</button>
                <button className="btn-style1" onClick={()=>clickk("people")}>People</button>
                <button className="btn-style1" onClick={()=>clickk("money")}>Money</button>
                <button className="btn-style1" onClick={()=>clickk("sea")}>Sea</button>
                <button className="btn-style1" onClick={()=>clickk("travel")}>Travel</button>
                <button className="btn-style1" onClick={()=>clickk("school")}>School</button>
                <button className="btn-style1" onClick={()=>clickk("house")}>House</button>
                <span style={{borderRight:"0.5px solid #00000085", marginLeft:"450px"}}></span>
                <button className="btn-style1" style={{marginLeft:"20px", border:"none"}}>
                    <img style={{height: "18px", marginBottom: "-4px"}} src={setting} alt="Settings" />
                </button>
                <button className="btn-style1">Editors Choice</button>
            </div>

            <div>
                <div id="image-display-container">
                    {api.filter(x => x.tags.toLowerCase().includes(search))
                    .map(x => (
                        <>
                        <div style={{height:"400px", width:"330px"}} id="lastDiv" key={x.id}>
                            <img src={x.webformatURL} alt={x.tags} className="result-image" style={{height:"100%", width:"100%", borderRadius:"10px"}} ></img>
                            <button id="butto" onClick={()=>navigate("/nextpage",{state:{x}})}>view details</button>
                            
                        </div>
                       
                        </>
                    ))}
                </div>
            </div>
        </>
    );
}
