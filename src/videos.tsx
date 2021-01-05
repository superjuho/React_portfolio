import * as React from "react"
import {useEffect} from "react"
import { Link } from "react-router-dom"
import "./Videostyle.css"
import backArrow from "./static/backArrow.png"
import EspooProjekti from "./static/videos/videoprojekti.mp4"
import Rick from "./static/videos/Rickschanez.mp4"
import VideoRojekti from "./static/videos/Kuinkatutustuauusiinihmisiin_1_1.mp4"

const VideoPage = () => { 
    useEffect (() =>{
    
    },[])

    return (
        <>  <div className="videoBody">
                <div className="header">
                    <h1>Juho Puurunen Portfolio</h1>
                </div>
                <Link to="/">
                    <div className="backSpace">
                        <img className="backArrow" src={backArrow} alt="backArrow"/>
                        <p className="back">BACK</p>
                    </div>
                </Link>
                <div className="videoContainer">
                    <div className="videoItem">
                    <video className="video" preload="auto" controls>
                        <source src={EspooProjekti} type="video/mp4"/>
                    </video>
                    <div className="description">
                        Videoproject for city of Espoo to promote sport event for young kids.
                    </div>
                    </div>
                    <div className="videoItem">
                    <video className="video" preload="auto" loop autoPlay muted>
                        <source src={Rick} type="video/mp4"/>
                    </video>
                    <div className="description">
                        Made with After Effects to seamless loop
                    </div>
                    </div>
                    <div className="videoItem">
                    <video className="video" preload="auto" controls>
                        <source src={VideoRojekti} type="video/mp4"/>
                    </video>
                    <div className="description">
                        Short film I directed & shot. Edited using Premiere.
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoPage
