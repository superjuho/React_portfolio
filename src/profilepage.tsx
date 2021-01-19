import * as React from "react"
import { Link } from 'react-router-dom'
import {useEffect, useState, useCallback, useLayoutEffect} from "react"
import { gsap } from "gsap"
import "./styles.css"
import TextPlugin from 'gsap/TextPlugin'
import Tooltip from '@material-ui/core/Tooltip'
import { makeStyles } from '@material-ui/core/styles'
import Linkedin from "./static/Linkedin.png"
import GitHub from "./static/githubLogo.png"
import codeLogo from "./static/codeLogo.png"
import Creativecloud from "./static/Creativecloud.png"
import CsharpLogo from "./static/CsharpLogo.png"
import CSSLogo from "./static/CSSLogo.png"
import HTML5Logo from "./static/HTML5Logo.png"
import javascriptLogo from "./static/javascripL.png"
import GSAPLogo from "./static/GSAPLogo.png"
import NodeCGLogo from "./static/NodeCGLogo.png"
import NodejsLogo from "./static/NodejsLogo.png"
import reactLogo from "./static/reactLogo.png"
import SassLogo from "./static/SassLogo.png"
import TypeScritLogo from "./static/TypeScritLogo.png"
import SQL_Logo from "./static/SQL_Logo.png"
import UnityLogo from "./static/UnityLogo.png"
import UnRealLogo from "./static/UnrealLogo.png"
import IllustratorLogo from "./static/IllustratorLogo.png"
import AdobePremiereLogo from "./static/AdobePremiereLogo.png"
import AdobeXDLogo from "./static/AdobeXDLogo.png"
import AfterEffectsLogo from "./static/AfterEffectsLogo.png"
import PhotoshopLogo from "./static/PhotoshopLogo.png"
import { isBrowser, isMobile } from 'react-device-detect'
/* import marvin from "./static/photos/Marvin_martian_vector.png"
import aiDownload from "./static/ai_download.png" */



gsap.registerPlugin(TextPlugin)

let CodeShown: boolean = false
let AdobeShown: boolean = false
let CodeClicked: boolean = false
let AdobeClicked: boolean = false
let PopUpShown: boolean = false

const tl = gsap.timeline()


const getAge = (dateString: string) => {
  const today = new Date()
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear()
  const m = today.getMonth() - birthDate.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--
  }
  return age
}

const viewSize = window.matchMedia("(max-width: 1024px)")



const profileText = `I am a ${getAge("1993/08/31")} years old Media Technology engineering student at Metropolia University of Applied Sciences.
\n
My interests are games, video productions, photography, web design, programming in general and arts & cooking.
I plan to graduate in June 2022, and hopefully get a job that exploits my hobbies. 
\n
This is my portfolio; hope you enjoy your stay.`

const aboutDropDown = () => {
  if(viewSize.matches) {
    const aboutDrop = document.querySelector(".aboutDrop")
    tl.from([aboutDrop], 1, {height: 0, opacity: 0 })
    tl.to([aboutDrop], 1, {height: "300px", opacity: 1 })
  }
}

const aboutDropUp = () => {
  if(viewSize.matches) {
    const aboutDrop = document.querySelector(".aboutDrop")
    tl.from([aboutDrop], 1, {height: "300px", opacity: 1 })
    tl.to([aboutDrop], 1, {height: 0, opacity: 0 })
  }
}

const codesShow = () => { // this shows the code and engine logos
  if(!CodeShown && !viewSize.matches && window.innerWidth) {
    CodeShown = true
    const codes = document.querySelector(".codes")
    tl.to([codes], 1, {width: "70%"})
  } else if (!CodeShown && window.innerWidth < 1025 && window.innerWidth > 421) {
    CodeShown = true
    const codes = document.querySelector(".codes")
    const adobes = document.querySelector(".adobes")
    const profileElement = document.querySelector(".profile")
    const aboutElement = document.querySelector(".sideDiv") 
    tl.to([profileElement, aboutElement], 1, {opacity: 0})
    tl.to([adobes], .5, {left: "200px"})
    tl.to([codes], 1, {height: "70vh", width: "140px",})
  } else if (!CodeShown && window.innerWidth < 421) {
    CodeShown = true
    const codes = document.querySelector(".codes")
    const adobes = document.querySelector(".adobes")
    const profileElement = document.querySelector(".profile")
    const aboutElement = document.querySelector(".sideDiv") 
    tl.to([profileElement, aboutElement], 1, {opacity: 0})
    tl.to([adobes], .5, {left: "200px"})
    tl.to([codes], 1, {height: "70vh", width: "90px"})
  }
}

const hideCodes = () => { // this hides the code and engine logos
  if(CodeShown && !viewSize.matches) {
    CodeShown = false
    const codes = document.querySelector(".codes")
    tl.to([codes], 1, {width: "70px"})
  } else if (CodeShown && window.innerWidth < 1025 && window.innerWidth > 421) {
    CodeShown = false
    const codes = document.querySelector(".codes")
    const adobes = document.querySelector(".adobes")
    tl.to([codes], 1, {height: "70px", width: "70px"})
    tl.to([adobes], .5, {left: "100px"})
    const profileElement = document.querySelector(".profile")
    const aboutElement = document.querySelector(".sideDiv") 
    tl.to([profileElement, aboutElement], 1, {opacity: 1})
  } else if (CodeShown && window.innerWidth < 421) {
    CodeShown = false
    const codes = document.querySelector(".codes")
    const adobes = document.querySelector(".adobes")
    tl.to([codes], 1, {height: "40px", width: "40px"})
    tl.to([adobes], .5, {left: "100px"})
    const profileElement = document.querySelector(".profile")
    const aboutElement = document.querySelector(".sideDiv") 
    tl.to([profileElement, aboutElement], 1, {opacity: 1})
  }
}

const adobeShow = () => { // this shows the adobe logos
  if(!AdobeShown && !viewSize.matches) {
    AdobeShown = true
    const adobes = document.querySelector(".adobes")
    tl.to([adobes], 1, {width: "50%"})
  } else if(!AdobeShown && window.innerWidth < 1025 && window.innerWidth > 421) {
    console.log("pieni ikkuna")
    AdobeShown = true
    const adobes = document.querySelector(".adobes")
    const profileElement = document.querySelector(".profile")
    const aboutElement = document.querySelector(".sideDiv") 
    tl.to([profileElement, aboutElement], 1, {opacity: 0})
    tl.to([adobes], 1, {height: "60vh"})
  } else if (!AdobeShown && window.innerWidth < 421) {
    console.log("Tosi pieni ikkuna")
    AdobeShown = true
    const adobes = document.querySelector(".adobes")
    const profileElement = document.querySelector(".profile")
    const aboutElement = document.querySelector(".sideDiv") 
    tl.to([profileElement, aboutElement], 1, {opacity: 0})
    tl.to([adobes], 1, {height: "60vh"})
  }
} 

const hideAdobe = () => { // this hides the Adobe logos 
  if(AdobeShown && !viewSize.matches) {
    AdobeShown = false
    const adobes = document.querySelector(".adobes")
    tl.to([adobes], 1, {width: "100px"})
  } else if(AdobeShown && window.innerWidth < 1025 && window.innerWidth > 421) {
    AdobeShown = false
    const adobes = document.querySelector(".adobes")
    tl.to([adobes], 1, {height: "70px"})
    const profileElement = document.querySelector(".profile")
    const aboutElement = document.querySelector(".sideDiv") 
    tl.to([profileElement, aboutElement], 1, {opacity: 1})
  } else if (AdobeShown && window.innerWidth < 421) {
    AdobeShown = false
    const adobes = document.querySelector(".adobes")
    tl.to([adobes], 1, {height: "50px"})
    const profileElement = document.querySelector(".profile")
    const aboutElement = document.querySelector(".sideDiv") 
    tl.to([profileElement, aboutElement], 1, {opacity: 1})
  }
}

const profile = () => {
   // This function writes the profile description to the front site
  const cursor = document.getElementById('cursor');
  gsap.fromTo([cursor], {autoAlpha: 0, x:-10}, {autoAlpha: 1, duration: 1, repeat: -1, ease: "steps(12)"});
  gsap.to("#text", {text: profileText, duration: 8, delay: 2, ease: "none"})
}

const popUp =() => {
  if (!viewSize.matches && !PopUpShown) {
  const popup = document.getElementById("PopupDesc");
  if(popup) {
    popup.classList.toggle("show");
    PopUpShown = true;
  }
  
  } else if (viewSize.matches && !PopUpShown) {
    const popupText = document.querySelector(".popuptext")
    if(popupText && isMobile) {
      popupText.innerHTML = `Here are some of languages and programs I use and know, since you are on mobile. 
    You wont get full experience. First click on code or CC to see all and by holding on a logo you get more information.`
    } else if (popupText && !isMobile) {
      popupText.innerHTML = `Here are some of languages and programs I use and know.`
    }
    const popup = document.getElementById("PopupDesc");
    if(popup) {
      popup.classList.toggle("show");
    PopUpShown = true;}
    
  }
}

const closepopUp = () => {
  if (PopUpShown) {
    const popup = document.getElementById("PopupDesc");
    if(popup) {popup.classList.toggle("show");
    PopUpShown = false;}
  }
}

const handleCodes = async () => {
  if (!CodeClicked && !CodeShown && !AdobeShown) {
    codesShow()
    CodeClicked = true;
  } else if (!CodeClicked && !CodeShown && AdobeShown) {
    await hideAdobe()
    AdobeClicked = false;
    codesShow()
    CodeClicked = true;
  } else if (CodeClicked && CodeShown && !AdobeShown) {
    hideCodes()
    CodeClicked = false;
  }
}

const handleAdobes = async () => {
  if (!AdobeClicked && !CodeShown && !AdobeShown) {
    adobeShow()
    AdobeClicked = true;
  } else if (!AdobeClicked && CodeShown && !AdobeShown) {
    await hideCodes()
    CodeClicked = false;
    adobeShow()
    AdobeClicked = true;
  } else if (AdobeClicked && !CodeShown && AdobeShown) {
    hideAdobe()
    AdobeClicked = false;
  }
}

const useStyles = makeStyles(theme => ({
  arrow: {
    "&:before": {
      border: "1px transparent rgba(25, 60, 99, 0.8)"
    },
    color: "rgba(25, 60, 99, 0.8)"
  },
  tooltip: {
    backgroundColor: "rgba(25, 60, 99, 0.8)",
    border: "1px transparent rgba(25, 60, 99, 0.8)",
    color: "#f5f5f5",
    fontSize: '.8rem',
  }
}));


  

 /* return (
      <>
                <img className="adobelogo" src={IllustratorLogo} alt="IlluLogo" onClick={onOk}/>
          <DraggableModal visible={visible} onOk={onOk} onCancel={onCancel}>
          <div className="modalHeader">
                      <p className="headText">Drawn with mouse using Adobe Illustrator</p>
                        <p className="modalClose">X</p>
                    </div>
                    <div className="modalBody">
                        <img className="marvin" src={marvin}/>
                        <div className="modalFooter">
                          <p>Download ai.file press 🠞</p>
                          <a href="http://users.metropolia.fi/~juhopuur/jQuerystuff/Portfolio/images/Marvin_martian.ai">
                            <img src={aiDownload} className="aiDownload"/>
                            </a>
                        </div>
                    </div>
          </DraggableModal>
      </>
  )
} */


const ProfilePage = () => {

  let classes = useStyles();
  
  useEffect (() =>{
    window.oncontextmenu = function(event: MouseEvent) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    };
    window.addEventListener('resize', function() {
      window.location.reload();
    });
    profile()
    popUp()
  },[])

  return (
    <>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap')
    </style>
    <title>Juho Puurunen</title>
    <header>
          <h2 className="title">Juho Puurunen Portfolio</h2>
    </header>
    <div className="profile">
      <span id="text">
      </span>
      <span id="cursor">|</span>
      
      <br/>
    </div>
        <div className="sideDiv">
          <h3 className="about" onMouseEnter={() => aboutDropDown()} onMouseLeave={() => aboutDropUp()}>About</h3>
          <div className="aboutDrop">
            {!isMobile && isBrowser ?
            <Link to="/cv" className="text">Curriculum Vitae</Link>
          : <a href="./static/JuhoPuurunen_Resume2020.pdf" download>Curriculum Vitae</a>  
          }
            <p className="text">juho.puurune@gmail.com</p>
            <p className="text">juho.puurunen@metropolia.fi</p>
            <p className="text">0400 771526</p>
            <a href="https://www.linkedin.com/in/juho-puurunen-133648194/">
              <img className="LinkedinLogo" src={Linkedin} alt="Linkedin"/>
            </a>
            <br/>
            <a href="http://www.github.com/superjuho">
            <img className="GithubLogo" src={GitHub} alt="Github"/>
            </a>
          </div>
        </div>
        <div className="stuff" onMouseEnter={() => closepopUp()}>
        <span className="popuptext" id="PopupDesc">Here are some of languages and programs I use and know</span>
        </div>
        <div className="codes">
            <img className="codeLogo" src={codeLogo} alt="CodeLogo" onClick={() => handleCodes() } onMouseEnter={() => closepopUp()}/>
            {window.innerWidth < 1025 &&
            <div className="dummyLogo">
            </div>
            }
            <Tooltip title="Systematically awesome style sheets were used making this sites layout" placement="top" arrow classes={{ arrow: classes.arrow, tooltip: classes.tooltip}}>
              <img className="logo" src={SassLogo} alt="CSSLogo"/>
            </Tooltip>
            <Tooltip title="Cascading style sheets 3" placement="top" arrow classes={{ arrow: classes.arrow, tooltip: classes.tooltip}}>
              <img className="logo" src={CSSLogo} alt="CSSLogo"/>
            </Tooltip>
            <Tooltip title="HyperText Markup Language" placement="top" arrow classes={{ arrow: classes.arrow, tooltip: classes.tooltip}}>
              <img className="logo" src={HTML5Logo} alt="HTML5Logo"/>
            </Tooltip>
            <Tooltip title="JavaScript is my most used programming language" placement="top" arrow classes={{ arrow: classes.arrow, tooltip: classes.tooltip}}>
              <img className="logo" src={javascriptLogo} alt="javascriptLogo"/>
              </Tooltip>
            <Tooltip title="TypeScript is designed for development of large applications and transcompiles to JavaScript. I made this portfolio using typescript." placement="top" arrow classes={{ arrow: classes.arrow, tooltip: classes.tooltip}}>
              <img className="logo" src={TypeScritLogo} alt="TypeScriptLogo"/>
              </Tooltip>
            <Tooltip title="I have used React.js with couple of projects. This portfolio was build using React.js with TypeScript" placement="top" arrow classes={{ arrow: classes.arrow, tooltip: classes.tooltip}}>
              <img className="logo" src={reactLogo} alt="RactLogo"/>
              </Tooltip>
            <Tooltip title="Structured Query Language, I know fundamentals. But have wished for more projects that have deeper SQL" placement="top" arrow classes={{ arrow: classes.arrow, tooltip: classes.tooltip}}>
              <img className="logo" src={SQL_Logo} alt="SQL_Logo"/>
              </Tooltip>
            <Tooltip title="I have done broadcast graphics using NodeCG in live streams" placement="top" arrow classes={{ arrow: classes.arrow, tooltip: classes.tooltip}}>
              <img className="logo" src={NodeCGLogo} alt="NodeCGLogo"/>
              </Tooltip>
            <Tooltip title="Node.js lets developers use JavaScript to write command line tools and for server-side scripting" placement="top" arrow classes={{ arrow: classes.arrow, tooltip: classes.tooltip}}>
              <img className="logo" src={NodejsLogo} alt="NodejsLogo"/>
              </Tooltip>
            <Tooltip title="Freakishly robust. HTML5 javascript animation built for professionals. Animation in this portfolio is done with GSAP" placement="top" arrow classes={{ arrow: classes.arrow, tooltip: classes.tooltip}}>
              <img className="logo" src={GSAPLogo} alt="GSAPLogo"/>
            </Tooltip>
            <Link to="/valhalladenied">
            <Tooltip title="C# is programming language I've used making games with unity. Click here if you want to test play one." placement="top" arrow classes={{ arrow: classes.arrow, tooltip: classes.tooltip}}>
              <img className="logo" src={CsharpLogo} alt="GSAPLogo"/></Tooltip>
               </Link>
            <Link to="/valhalladenied">
              <Tooltip title="Unity is a engine for making games for almost any platform. Click here if you want to test play one of my games" placement="top" arrow classes={{ arrow: classes.arrow, tooltip: classes.tooltip}}> 
              <img className="logo" src={UnityLogo} alt="UnityLogo"/>
              </Tooltip>
            </Link>
            <Tooltip title="Unreal is epic game engine I like to use." placement="top" arrow classes={{ arrow: classes.arrow, tooltip: classes.tooltip}}>
              <img className="logo" src={UnRealLogo} alt="UnRealLogo"/>
            </Tooltip>
        </div>
          <div className="adobes">
            <img className="CreativeCloudLogo" src={Creativecloud} alt="CreativeCloudLogo" onClick={ () => handleAdobes()} onMouseEnter={() => closepopUp()}/>
            <Link to="/photography" className="adobeLink">
              <Tooltip title="I've used photoshop since middle school, here you can see couple of my photos" placement="top" arrow classes={{ arrow: classes.arrow, tooltip: classes.tooltip}}>
                <img className="adobelogo" src={PhotoshopLogo} alt="PhotoshopLogo"/>
              </Tooltip>
           </Link>
           
         
             <Tooltip title="I like to use Illustration for logos, here's just one sketch tho" placement="top" arrow classes={{ arrow: classes.arrow, tooltip: classes.tooltip}}>
             <img className="adobelogo" src={IllustratorLogo} alt="IlluLogo" />
              </Tooltip>
            

            <a href="https://xd.adobe.com/view/d624d181-2010-48ce-9807-75b3863473a3-8377/?fullscreen" className="adobeLink">
              <Tooltip title="Adobe XD is great for UX design, from here you can see my latest mockup for a client" placement="top" arrow classes={{ arrow: classes.arrow, tooltip: classes.tooltip}}>
                <img className="adobelogo" src={AdobeXDLogo} alt="XDLogo"/>
              </Tooltip>
            </a>
           <Link to="/videos" className="adobeLink">
              <Tooltip title="Premiere is a video editing tool that I mostly use. Here you can get to my videos" placement="top" arrow classes={{ arrow: classes.arrow, tooltip: classes.tooltip}}>
                <img className="adobelogo" src={AdobePremiereLogo} alt="PremiereLogo"/>
              </Tooltip>
          </Link>
          <Link to="/videos" className="adobeLink">
              <Tooltip title="After Effects is a special effect and animation tool I use. Here you can get to my videos" placement="top" arrow classes={{ arrow: classes.arrow, tooltip: classes.tooltip}}>
                <img className="adobelogo" src={AfterEffectsLogo} alt="AfterEffectsLogo"/>
              </Tooltip>
          </Link>
          </div>
    </>
    
  )
}

export default ProfilePage;
