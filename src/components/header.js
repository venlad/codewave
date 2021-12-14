import React, { Component } from "react"
import { Helmet } from "react-helmet"
import "../css/styles.css"
import "../css/homePage.css"
import "../css/mystyle.css"
import btnPlay from "../images/btn-play.svg"
import Cursor from "./cursor/cursor"
// import AnimatedCursor from "react-animated-cursor"
class Header extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
            isMenuOpen:false
        };
        this.scriptLoaded = this.scriptLoaded.bind(this);
        this.menuToggle=this.menuToggle.bind(this);
      }

      componentDidMount() {
        const script = document.createElement("script");
        script.src = "https://cdn.gumlet.com/gumlet.js/2.0/gumlet.min.js";
        script.async = true;
        script.onload = () => this.scriptLoaded();
        
        document.body.appendChild(script);
        

        }
        
        menuToggle(){
            this.setState({isMenuOpen:!this.state.isMenuOpen});
            // console.log(this.state.isMenuOpen)
            
                let temp = document.getElementById("test")
                var animationDelay = 0.4;
                for(let i = 0; i < temp.children.length; i++){

                    temp.children[i].className = "right_nav_animation"
                    // temp.children[i].style['animation-delay'] = animationDelay * i + 's';
                    // temp.children[i].style['opacity']= "1";
                    console.log(temp.children[i])
                    temp.children[i].style['animation-delay'] = animationDelay * i + 's';
                }
                // temp.children.map((item,index)=>{
                //     console.log(item)
                // })

                
                console.log(temp.children.length)
            
        }

        scriptLoaded(){
        window.GUMLET_CONFIG = {
        hosts: [{
        current: "res.cloudinary.com",
        gumlet: "codewave.gumlet.com"
        }],
        lazy_load: true
        };
        window.gumlet.init(window.GUMLET_CONFIG);
        }
        

    render(){
        return(
            
    <div className="w-100">
        <head>
        <script async type="text/javascript" src="js/app.js"></script>

        </head>
        <Cursor/>
    
   <div class="logo">
    <a href="#" onclick= "window.location.href = window.location.origin;"  data-section="0" class="magnetize  is-current " data-dist="5" data-cursor-type="medium" data-cursor-text="">
        <img width="140px" data-src="https://res.cloudinary.com/image/upload/v1586590814/codewave-website/codewave-website-logo.png" class="lazyload"/>

    </a>
</div>
<div class="works-button-web work-button-new" >
        <a target="_blank" href="https://works.codewave.com" data-section="4"  data-dist="5" data-cursor-type="medium" data-cursor-text="" >
            Works
        </a>
    </div>
    <div class="works-button-mob" >
        <a target="_blank" href="https://works.codewave.com" data-section="4"  data-dist="5" data-cursor-type="medium" data-cursor-text="" 
        // style="margin-left: 5px;color:black;cursor: none; transform: matrix(1, 0, 0, 1, 0, 0); color: black;"
        >
            Works
        </a>
    </div>
<div class="say-hello">
    <a href="./contact" data-section="4" class="magnetize" data-dist="5" data-cursor-type="medium" data-cursor-text="">
        Contact
    </a>
</div>

<div class={this.state.isMenuOpen?"toggle magnetize is-open":"toggle  magnetize"} data-dist="5" data-cursor-type="medium" 
data-cursor-text="" onClick={this.menuToggle}>
    <p className="mainMenu">MENU</p>
    <div>
        <div></div>
        <div></div>
        
    </div>
            </div>
            <div className={this.state.isMenuOpen?"nav d-block ":"nav " }>
            <div className="nav__bg nav-bg-animation"></div>
            <div className="nav__container">
                <div className="logo--mobile logo--mobile--white">
             <a href="/" data-section="0" className=" is-current ">
               
                <picture>
       
        <img data-src="https://res.cloudinary.com/codewave-technologies/image/upload/c_scale,w_142/v1566712787/codewave-logo-2x_tl2pvw.png" className="lazyload" width="100%"/> </picture>
            </a>
        </div>      <div className="nav__primary right_nav_animation"> 
                        <ul id="test" >
                        <li>
                            <a href="./services" data-section="4" data-cursor-type="big" data-cursor-text="" className="">
                                <div className="number-mask"><div>01.</div></div>Services x.o</a>
                        </li>
                         <li>
                            <a href="./industries" data-section="3" data-cursor-type="big" data-cursor-text="" className="">
                                <div className="number-mask"><div>02.</div></div>Cross-industry
                            </a>
                        </li>
                         <li>
                            <a target="_blank" href="https://casestudies.codewave.com" data-section="1" data-cursor-type="big" data-cursor-text="" className="">
                                <div className="number-mask">
                                    <div>03.</div>
                                </div>Casestudies
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://insights.codewave.com" data-section="2" data-cursor-type="big" data-cursor-text="" className="">
                                <div className="number-mask">
                                    <div>04.</div>
                                </div>Insights
                            </a>
                        </li>
                       
                         <li>
                            <a href="./careers" data-section="2" data-cursor-type="big" data-cursor-text="" className="">
                                <div className="number-mask">
                                    <div>05.</div>
                                </div>Join us
                            </a>
                        </li>
                       
                        
                        <li>
                            <a href="./contact" data-section="4" data-cursor-type="big" data-cursor-text="" className="">
                                <div className="number-mask"><div>06.</div></div>Contact us</a>
                        </li>
                    </ul>
                </div>
                <div className="nav__secondary nav__secondary-MR nav-animation "
                
                >
                   <h4 className="title--title6 title--title6-header">Top market needs</h4>
                    <ul>
                        
                        <li>
                            <a href="./services/design-thinking"  data-cursor-type="medium" data-cursor-text="">Design-thinking.</a>
                        </li>
                        <li>
                            <a href="./services/customer-journey-redesign-cx-improvement" data-cursor-type="medium" data-cursor-text="">Customer Journey design.</a>
                        </li>
                         <li>
                             <a href="./services/digital-business-transformation" data-cursor-type="medium" data-cursor-text="">Digital innovation.</a>
                        </li>
                        <li>
                            <a href="./services/data-strategy-analytics-and-predictive-intelligence" data-cursor-type="medium" data-cursor-text=""> Analytics & predictions.</a>
                        </li>
                        <li>
                            <a href="./services/cloud-web-mobility" data-cursor-type="medium" data-cursor-text="">Serverless Web & Mobile.</a>
                        </li>
                         <li>
                            <a href="./services/iot-sensing-tech-and-edge-tech" data-cursor-type="medium" data-cursor-text="">IoT & Edge AI.</a>
                        </li>
                        <li>
                            <a href="./services/artificial-intelligence-and-machine-learning" data-cursor-type="medium" data-cursor-text="">Enterprise AI/ML.</a>
                        </li>
                        <li>
                            <a href="./services/blockchain-implementation" data-cursor-type="medium" data-cursor-text="">Blockchain.</a>
                        </li>
                        <li>
                            <a href="./services/process-automation" data-cursor-type="medium" data-cursor-text="">Process Automation.</a>
                        </li>
                       
                    </ul>
        
                </div>
        
                <div className="nav__secondary nav-animation">
                   <h4 className="title--title6 title--title6-header" style={{marginTop: "50px"}}>Industry ecosystems</h4>
                    <ul>
                        
                        <li>
                            <a href="./industries/education"  data-cursor-type="medium" data-cursor-text="">Education.</a>
                        </li>
                        <li>
                            <a href="./industries/healthcare" data-cursor-type="medium" data-cursor-text="">Healthcare.</a>
                        </li>
                         <li>
                             <a href="./industries/fintech" data-cursor-type="medium" data-cursor-text="">Finance & banking.</a>
                        </li>
                        <li>
                            <a href="./industries/agriculture" data-cursor-type="medium" data-cursor-text="">Agriculture.</a>
                        </li>
        
                        <li>
                            <a href="./industries/transport" data-cursor-type="medium" data-cursor-text="">Transportation.</a>
                        </li>
                         <li>
                            <a href="./industries/travel-hospitality" data-cursor-type="medium" data-cursor-text="">Travel & hospitality.</a>
                        </li>
                        <li>
                            <a href="./industries/energy" data-cursor-type="medium" data-cursor-text="">Energy.</a>
                        </li>
                        <li>
                            <a href="./industries/retail" data-cursor-type="medium" data-cursor-text="">Retail & food.</a>
                        </li>
                        <li>
                            <a href="./industries/insurance" data-cursor-type="medium" data-cursor-text="">Insurance.</a>
                        </li>
                        <li>
                            <a href="https://casestudies.codewave.com/category/more/" data-cursor-type="medium" data-cursor-text="">More..</a>
                        </li>
                       
                       
                    </ul>
        
                </div>
                <div className="nav__secondary nav-animation">
        
                   <h4 className="title--title6 title--title6-header" style={{marginTop: "20px"}}>Culture & DNA</h4>
                    <ul>
                        
                        <li>
                            <a href="./about" data-cursor-type="medium" data-cursor-text="">The purpose.</a>
                        </li>
                        <li>
                            <a target="_blank" href="https://res.cloudinary.com/codewave-technologies/image/upload/v1575216128/codewave-employee-handbook_qzos5o.pdf" data-cursor-type="medium" data-cursor-text="">Culture guide.</a>
                        </li>
                        <li>
                            <a href="./the-survival-manual" data-cursor-type="medium" data-cursor-text="">Survival manual.</a>
                        </li>
                        <li>
                            <a href="./peerly" target="_blank" data-cursor-type="medium" data-cursor-text="">Peerly.</a>
                        </li>
                        <li>
                            <a href="./customer-journey" data-cursor-type="medium" data-cursor-text="">Project journeys.</a>
                        </li>
                        <li>
                            <a href="./leadership-cafe" data-cursor-type="medium" data-cursor-text="">Leadership-café.</a>
                        </li>
                        
                         <li>
                            <a href="./growing-as-a-leader-at-codewave" data-cursor-type="medium" data-cursor-text="">Growing as a leader.</a>
                        </li>
                        <li>
                            <a href="https://insights.codewave.com/why-organisation-as-social-network-is-the-future/" target="_blank" data-cursor-type="medium" data-cursor-text="">Org as a social network.</a>
                        </li>
        
                        
                        
                        
                        <li>
                            <a href="https://medium.com/codewave" style={{float: "left"}} target="_blank" data-cursor-type="medium" data-cursor-text=""><img data-src="https://res.cloudinary.com/image/upload/c_scale,w_30/v1579333663/medium_geo6zf.png" style={{float: "left"}} data-cursor-type="medium" data-cursor-text="" className="lazyload"/></a>
                            <a href="https://www.linkedin.com/company/codewave-inc" style={{float: "left",marginLeft: "30px"}} target="_blank" data-cursor-type="medium" data-cursor-text=""><img data-src="https://res.cloudinary.com/image/upload/c_scale,w_30/v1579333662/linkedin_qyquet.png" data-cursor-type="medium" data-cursor-text="" style={{float: "left"}} className="lazyload"/></a>
                        </li>
                         <li>
                            
                        </li>
                    </ul>
                    
                </div>
            </div>
            
        </div> 

        </div>
        )
    }
}

export default Header;