import React, { Component } from "react"
import { Helmet } from "react-helmet"

import "../css/styles.css"


class Footer extends Component{
    render(){
        return(
    <div>
    
    <div class="footer">
    <div class="container-fluid">
        <div class="row justify-content-center no-gutters">
            <div class="col-sm-12 col-md-6 col-lg-5 footerImgClasses">
                
                <a href="https://clutch.co/profile/codewave-technologies#review-130383" target="_blank">
                    <img style={{paddingRight : "40px"}} data-src="https://res.cloudinary.com/image/upload/c_scale,w_120/v1563693063/developers_india_2019_o5ouk1.png" class="lazyload"/>
                </a>
                <a href="https://www.accesswire.com/432215/Codewave-Wins-the-Red-Herring-Top-100-Asia-Award-2015" target="_blank">
                    <img style={{paddingRight : "20px"}} data-src="https://res.cloudinary.com/image/upload/c_scale,w_120/v1563693973/red-herring-Asia_Winner-codewave-technology-awards-asia-india_jtasie.jpg" class="lazyload" style={{marginTop : "10px"}}/>
                </a>
                <a href="https://www.goodfirms.co/company/codewave" target="_blank">
                    <img style={{paddingRight : "20px"},{height : "130px"}} data-src="https://goodfirms.s3.amazonaws.com/badges/normal-badge/app-development.svg" class="lazyload"/>
                </a>
            </div>
        </div>

        <div class="row justify-content-center no-gutters">
            

            <div class="col-sm-4 col-md-4 col-lg-3">
                <div class="txt--p6">© 2020 Codewave Technologies. </div>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-5">
                <div class="txt--p6"><a href="./privacy-policy" data-cursor-type="medium" data-cursor-text="">Privacy Policy</a> · <a href="./cookie-policy" data-cursor-type="medium" data-cursor-text="">Cookie Policy</a> · <a href="./terms-and-conditions" data-cursor-type="medium" data-cursor-text="">Terms and conditions</a></div>

            </div>


        </div>
    </div>
</div>
<div class="cookies">
    <div class="cookies__content">
        <p>We use cookies to improve your browsing experience. You consent to our <a href="./cookie-policy" data-cursor-type="medium" data-cursor-text="">cookies policy</a> if you continue to use this website.</p>
        <button data-cursor-type="medium" data-cursor-text="" class="cookies__button">Accept</button>
        <button class="cookies__close-btn" data-cursor-type="medium" data-cursor-text="">
            {/* <svg width="13px" height="13px" viewBox="0 0 13 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square">
                    <g transform="translate(-1512.000000, -759.000000)" stroke="#FFFFFF" stroke-width="2">
                        <g transform="translate(1334.000000, 742.000000)">
                            <g transform="translate(179.000000, 18.000000)">
                                <path d="M5.60286131,-1.34450711 L5.60286131,12.5502297" transform="translate(5.602861, 5.602861) rotate(-315.000000) translate(-5.602861, -5.602861) "></path>
                                <path d="M5.60286131,-1.34450711 L5.60286131,12.5502297" transform="translate(5.602861, 5.602861) rotate(-45.000000) translate(-5.602861, -5.602861) "></path>
                            </g>
                        </g>
                    </g>
                </g>
            </svg> */}
        </button>
    </div>

</div>
<div class="overlay"></div>
</div>         
        )
    }
}


export default Footer;