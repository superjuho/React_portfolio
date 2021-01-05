import * as React from "react"
import {useEffect} from "react"
import { Link } from 'react-router-dom'
import "./photostyle.css"
import backArrow from "./static/backArrow.png"
import img1 from "./static/photos/_MG_0002.jpeg"
import img7 from "./static/photos/_MG_0016.jpeg"
import img8 from "./static/photos/_MG_0035_2.jpeg"
import img9 from "./static/photos/_MG_0050.jpeg"
import img5 from "./static/photos/_MG_0061.jpeg"
import img6 from "./static/photos/_MG_0067.jpeg"
import img2 from "./static/photos/_MG_0102.jpeg"
import img3 from "./static/photos/_MG_0132.jpeg"
import img4 from "./static/photos/oscar.png"


const PhotoPage = () => { 
    useEffect (() =>{
    
    },[])

    return (
        <>   <div className="photoBody">
            <div className="header"> 
                <h1>Juho Puurunen Portfolio</h1>
            </div>
            <Link to="/">
                    <div className="backSpace">
                        <img className="backArrow" src={backArrow} alt="backArrow"/>
                        <p className="back">BACK</p>
                    </div>
                </Link>
            <div className="pictureContainer">
                
                    <img className="widePicture" src={img1}/>
                
                
                    <img className="longPicture" src={img2}/>
                
                
                    <img className="longPicture" src={img3}/>
                
               
                    <img className="longPicture" src={img4}/>
                
               
                    <img className="widePicture" src={img7}/>
                
                
                    <img className="longPicture" src={img8}/>
               
                
                    <img className="widePicture" src={img9}/>
                
                
                    <img className="widePicture" src={img5}/>
                
                
                    <img className="widePicture" src={img6}/>
                
            </div>
        </div> 
        </>
    )
}

export default PhotoPage