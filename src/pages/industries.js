import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Layout from "../components/layout"


const CommonBanner = styled.div`
background-image: ${props => `url(${props.image})`};
background-color: ${props => props.bgcolor}
`

// markup
const IndustriesPage = () => {
    //     const [index,setIndex]=useState();
    //     const handleScroll = event =>{
    //         if(index>=0){
    //         if (event.deltaY < 0)
    //         {
    //         console.log('scrolling up');
    //         setIndex(index + 1)
    //         }
    //         else if (event.deltaY > 0)
    //         {
    //         console.log('scrolling down');
    //         setIndex(index - 1)

    //         }
    //     }
    //         // if(event)
    //     }
    //     useEffect(()=>{
    //         if(index!=0){
    //         let section1 = document.getElementById("main");
    //         section1.classList.add("main-transform")
    //         console.log("section1",section1)
    //         console.log(index)
    //         }

    //     },[index])
    //     useEffect(() => {
    //         window.addEventListener("wheel", handleScroll);
    //         return () => window.removeEventListener("wheel", handleScroll);
    //       });
    return (
        <Layout>
            <div id="app">
                <div class="app-container" data-namespace="about">

                    <div class="content-wrapper scrollable" data-scrollbar>
                        <div class="main">
                            <div class="logo--mobile ">
                                <a href="/" data-section="0" class=" is-current ">
                                    <img width="140px"
                                        data-src="https://res.cloudinary.com/image/upload/c_scale,w_140/v1566712787/codewave-logo-2x_tl2pvw.png"
                                        class="lazyload" />
                                </a>
                            </div>
                            <div class="work-detail">

                                <CommonBanner
                                    image="https://codewave.gumlet.com/image/upload/q_90/v1576684937/Agriculture-banner_d5ghmp.jpg"
                                    className="module module--header"
                                    bgcolor="#F1C545"
                                />

                                {/* <div class="module module--header"
                            // style="background-color:#F1C545;background-image: url(https://codewave.gumlet.com/image/upload/q_90/v1576684937/Agriculture-banner_d5ghmp.jpg);"
                            data-text-color="#fff" data-bg-color="#fff">


                            <div class="module module--title" data-text-color="#fff" data-bg-color="#fff">
                                <div class="container-fluid" 
                                // style="    margin-top: 60px;"
                                >
                                    <div class="row no-gutters justify-content-center">
                                        <div class="col-sm-8 col-md-8">




                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                            </div>
                            <div class="work-content" id="work-content">
                                <div class="module module--title" data-text-color="#000" data-bg-color="#fff">
                                    <div class="container-fluid">
                                        <div class="row no-gutters justify-content-center">
                                            <div class="col-sm-10 col-md-8">
                                                <h1 class="title--title1 mob-title-med title--title1New"
                                                // style="font-size:52px;"
                                                >Smart precision
                                                    farming for better crop health & predictability of income. <span

                                                    // style="font-size:52px;color:#b9b9b9;"
                                                    > Enabling farmers, Agricultural
                                                        organizations digitize processes and intelligently supply to meet demand
                                                        variations.</span>
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="module module--intro" data-bg-color="#efefef" data-text-color="#000">
                                <div class="container-fluid">
                                    <div class="row no-gutters justify-content-center">

                                        <div class="col-sm-10 col-md-8">
                                            <div class="work__intro mobile-margin-fix-30">
                                                <div class="txt--p3"
                                                    style={{ marginTop: "-80px" }}

                                                >
                                                    <p>
                                                        Cognitive computing is fuelling innovation across the agricultural
                                                        sector, on-field and off-field. Codewave enables agricultural
                                                        enterprises harness data to choose the right crop to grow at the right
                                                        farm at the right time - for best utilizing season’s climatic conditions
                                                        and soil fertility, for maximizing crop health and nutritional value,
                                                        minimizing rejections at the ‘retail’ end and delivering high consumer
                                                        impact. </p>
                                                </div>
                                                <div class="txt--p3"
                                                    data-anim="text-line-to-line-nested">
                                                    <p>Our approach towards developing solutions for agriculture enterprises
                                                        starts with understanding the organization’s goals and pain points you
                                                        are trying to address. After proper comprehension of the problem our
                                                        team of design and tech consultants identify the right solutions and
                                                        articulate a roadmap for the development of the same in alignment with
                                                        your vision and overall strategy. Exploitation of information and
                                                        intelligence on the edge/cloud infrastructure enable you to remotely
                                                        manage crops and machinery health which in-turn increases net farm
                                                        yield, improves machine life and boosts your enterprise net revenue.
                                                    </p>


                                                </div>
                                            </div>

                                        </div>





                                    </div>
                                </div>
                            </div>


                            <div class="module module--intro" data-bg-color="#efefef" data-text-color="#000"
                            // style="margin-top:-30px;"
                            >
                                <div class="container-fluid">
                                    <div class="row no-gutters justify-content-center">
                                        <div class="col-sm-5 col-md-4">
                                            <div class="work__client txt--p5">
                                                <span class="txt--p6 normalHead{"
                                                >Our offerings for Agritech :</span>

                                                <p className="mt_20">- AI/ML solutions for crop health/disease early
                                                    detection</p>
                                                <p className="mt_20">- Crop growth monitoring systems design &
                                                    development </p>
                                                <p className="mt_20"
                                                >- Farm management systems & data analytics</p>
                                                <p className="mt_20"
                                                >- Farming and irrigation - robotic automation
                                                    solutions</p>
                                                <p className="mt_20"
                                                >- Farm-to-Table traceability solutions with
                                                    blockchain</p>
                                                <p className="mt_20"
                                                >- Seed-to-Sale management solutions</p>
                                                <p className="mt_20"
                                                >- Livestock management software solutions</p>
                                                <p className="mt_20"
                                                >- Analytics Solutions for Smart Precision Farming
                                                </p>
                                                <p className="mt_20"
                                                >- Agri Machinery Health Monitoring Solutions</p>
                                                <p className="mt_20"
                                                >- Enterprise solutions for workforce management</p>
                                            </div>


                                        </div>
                                        <div class="col-sm-1 col-md-1"></div>
                                        <div class="col-sm-6 col-md-3">
                                            <div class="work__intro">
                                                <div class="txt--p3" data-anim="text-line-to-line-nested">
                                                    <p>Incorporating blockchain into your digital strategy enables you and other
                                                        businesses in your ecosystem trace products from their source to
                                                        consumption, which builds your brand’s credibility. Livestock management
                                                        software tools today empower farmers to efficiently utilize resources
                                                        and establish a robust system for real-time monitoring and
                                                        administration of livestock feeding, movement & produce. </p>

                                                    <p><img data-src="https://res.cloudinary.com/image/upload/v1576684935/Agriculture-small_rjqgw7.png"
                                                        alt="Agritech trends and synergetic industries" width="80%"
                                                        class="lazyload" /></p>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>

                            <div class="module works" data-bg-color="#efefef" data-text-color="#000">
                                <div class="container-fluid">

                                    <div class="row no-gutters justify-content-end padding_on_top ">
                                        <h2 class="title--title4 is-visible mr_30 mb_50" 
                                            // style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);margin-bottom:50px;margin-right:30px;"
                                            >
                                            <span class="title__number"></span>Success stories</h2>
                                        <div class="col-sm-1"></div>
                                    </div>

                                    <div class="row no-gutters padding_on_top">

                                        <div class="col-sm-2"></div>
                                        <div class="col-sm-3 col-md-3">
                                            <a href="https://play.google.com/store/apps/details?id=com.cloverFarmer"
                                                target="_blank" class="work-item is-visible"
                                            >



                                                <div class="txt--p3">
                                                    <img class="lazyload mobcenter" data-anim="mask-works" data-cursor-type="big"
                                                        data-cursor-text="view" data-speed="-0.05"
                                                        data-src="https://res.cloudinary.com/image/upload/q_90/v1576684936/Agriculture-casestudy1_uu1bq1.jpg"
                                                        // style="transform-origin: center 50% 0px; transform: matrix(1, 0, 0, 1, 0, 0);"
                                                        alt="codewave agritech casestudy: clover ventures - farmer and agronomist app for tracking plant growth" />
                                                </div>

                                            </a>


                                        </div>
                                        <div class="col-sm-3 col-md-3">


                                            <a href="https://nativecircle.in" target="_blank" data-anim="mask-works"
                                                class="work-item is-visible" data-cursor-type="big" data-cursor-text="view"
                                                data-speed="0" >


                                                <div class=" txt--p3" >
                                                    <img class=" lazyload mobcenter" data-anim="mask-works" data-cursor-type="big"
                                                        data-cursor-text="view" data-speed="0"
                                                        data-src="https://res.cloudinary.com/image/upload/q_95/v1576684937/Agriculture-casestudy2_wyef01.jpg"
                                                        // style="transform-origin: center 50% 0px; transform: matrix(1, 0, 0, 1, 0, 0);"
                                                        alt="codewave agritech casestudy - native circle - farming ecommerce site webapp" />
                                                </div>
                                            </a>


                                        </div>
                                        <div class="col-sm-3 col-md-3">

                                            <a href="https://www.agrify.com/" rel="nofollow" target="_blank" data-anim="mask-works"
                                                class="work-item is-visible" data-cursor-type="big" data-cursor-text="view"
                                                data-speed="0.05"  >

                                                <div class=" txt--p3">
                                                    <img class=" lazyload mobcenter" data-anim="mask-works" data-cursor-type="big"
                                                        data-cursor-text="view" data-speed="0.05"
                                                        data-src="https://res.cloudinary.com/image/upload/q_95/v1576684936/Agriculture-casestudy3_nuwdyw.jpg"
                                                        // style="transform-origin: center 50% 0px; transform: matrix(1, 0, 0, 1, 0, 0);"
                                                        alt="codewave agritech casestudy: plant growth tracking iot app, task management and growth analytics" />
                                                </div>
                                            </a>

                                        </div>

                                    </div>

                                </div>
                            </div>







                            <div class="module" data-bg-color="#2F345C" data-text-color="#fff">
                                <div class="container-fluid">
                                    <div class="row no-gutters padding_on_top" style={{marginTop:"-30px;"}}>
                                        <div class="col-sm-2"></div>
                                        <div class="col-sm-5 col-md-8">
                                            <h3 class="title--title5" ><span class="title__number"></span>Today, your
                                                digital strategy could involve participation and integration of multiple industries and
                                                cross-pollination of ideas and offerings. </h3>

                                            <div class="txt--p3"  style={{marginTop:"30px"}}>
                                                <p> There’s high levels of integration, collaboration and interoperability made possible
                                                    with technologies like Blockchain. Also, fluctuation in demand for one industry could
                                                    impact others. For example, rising demand for food delivery at the door, increased the
                                                    demand for 2-wheeler transport to solve the ‘last-mile-connectivity’ problem and the
                                                    demand for fractional ownership of bikes. </p>

                                                <p>Multi-industry collaborations or cross-domain integrations are becoming the new norm, to
                                                    thrive in today’s “Intelligence first” era, businesses need to embrace this change and
                                                    exploit advanced digital technologies to participate in consistently delivering maximum
                                                    consumer value.</p>



                                                <a href="/contact/">
                                                    <u>
                                                    Speakto our Cross industry experts to help you navigate gen-z mind
                                                    </u>&#x27F6;
                                                </a>
                                                {/* <u>
                                <a class="magnetize" 
                            data-cursor-type="medium" data-cursor-text
                                    // style="cursor: none; transform: matrix(1, 0, 0, 1, 0, 0);"
                                     href="../contact/">
                                         Speak
                                    to our Cross industry experts to help you navigate gen-z mind</u> &#x27F6;</a> */}
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>








                            <div class="about__phrase"
                            // style="margin-top:40px;"
                            >
                                <div>Trave - Digital Transformation - Design Thinking - Architecture - IoT</div>
                            </div>




                            <div class="lets-talk">
                                <div class="container-fluid">
                                    <div class="row justify-content-center align-items-center no-gutters">
                                        <div class="col-sm-8">
                                            <h4 class="txt--p5">What excites us is openness, opportunity & human transformation. </h4>
                                            <h4 class="txt--p5">We believe every project is an opportunity to celebrate authenticity in
                                                people, free flow of influence shaping outcomes and our ability to come together as one team
                                                to make ideas happen.</h4>
                                            <a href="/about"><button data-cursor-type="medium" data-cursor-text=""
                                                class="download__button">Learn more about our story and culture &#x27F6;</button></a>
                                            <br /><br /><br /><br /><br />
                                            <h5><a href="/contact" class="title--title1" data-cursor-type="big"
                                                data-cursor-text="">Contact us
                                                <svg class="lets-talk__arrow" viewBox="0 0 62 62" version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <g transform="translate(5.000000, 5.000000)" stroke="#000000" stroke-width="15">
                                                            <g>
                                                                <polyline
                                                                    transform="translate(37.000000, 37.000000) rotate(-315.000000) translate(-37.000000, -37.000000) "
                                                                    points="20 3 54 37 20 71"></polyline>
                                                                <path d="M55,23.5 L-8,23.5"
                                                                    transform="translate(23.500000, 23.500000) rotate(-315.000000) translate(-23.500000, -23.500000) ">
                                                                </path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg></a></h5>
                                        </div>
                                    </div>
                                    <div class="row justify-content-center no-gutters">
                                        <div class="col-sm-12 col-md-6 col-lg-12"
                                        // style="opacity: 0.9;margin-top:45px;"
                                        >

                                            <a href="https://clutch.co/profile/codewave-technologies#review-130383" target="_blank">
                                                <img
                                                    // style="padding-right:40px;width:165px"
                                                    data-src="https://res.cloudinary.com/image/upload/c_scale,w_120/v1563693063/developers_india_2019_o5ouk1.png"
                                                    class="lazyload" />
                                            </a>
                                            <a href="https://www.accesswire.com/432215/Codewave-Wins-the-Red-Herring-Top-100-Asia-Award-2015"
                                                target="_blank">
                                                <img
                                                    // style="padding-right:20px;"
                                                    data-src="https://res.cloudinary.com/image/upload/c_scale,w_120/v1563693973/red-herring-Asia_Winner-codewave-technology-awards-asia-india_jtasie.jpg"
                                                    class="lazyload"
                                                // style="margin-top:10px;"
                                                />
                                            </a>
                                            <a href="https://www.goodfirms.co/company/codewave" target="_blank">
                                                <img
                                                    // style="padding-right:20px;height:130px;"
                                                    data-src="https://goodfirms.s3.amazonaws.com/badges/normal-badge/app-development.svg"
                                                    class="lazyload" />
                                            </a>
                                            <a href="https://topdevelopers.biz/topdeveloper/android-app-developers-companies/"
                                                target="_blank">
                                                <img
                                                    // style="padding-right:20px;height:130px;"
                                                    data-src="https://res.cloudinary.com/image/upload/c_scale,h_130,w_160/v1591871732/codewave-website/Top-Android.png"
                                                    class="lazyload" />
                                            </a>
                                            <a href="https://www.topdevelopers.co/directory/mobile-app-developers" target="_blank">
                                                <img
                                                    // style="padding-right:20px;position: relative;top: 30px;"
                                                    data-src="https://res.cloudinary.com/image/upload/c_scale,h_190,w_190/v1594210568/codewave-website/Badges-Mobile-App-Developers-2020.png"
                                                    class="lazyload" alt="Top Mobile App Developers" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="footer">
                                <div class="container-fluid">
                                    <div class="row justify-content-center no-gutters">
                                        <div class="col-sm-4 col-md-4 col-lg-3">
                                            <div class="txt--p6">© 2020 Codewave Technologies. </div>
                                        </div>
                                        <div class="col-sm-6 col-md-6 col-lg-5">
                                            <div class="txt--p6"><a href="/privacy-policy" data-cursor-type="medium"
                                                data-cursor-text="">Privacy Policy</a> · <a href="/cookie-policy"
                                                    data-cursor-type="medium" data-cursor-text="">Cookie Policy</a> · <a
                                                        href="../terms-and-conditions" data-cursor-type="medium" data-cursor-text="">Terms and
                                                    conditions</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>


                </Layout>
)}

export default IndustriesPage
