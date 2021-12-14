import React, { useEffect, useState } from 'react'

import Layout from "../components/layout"
import FirstSection  from "../components/home/firstSection"

// markup
const IndexPage = () => {

  return (
    <Layout>
      <div id="app">
        <div class="app-container" data-namespace="home" >
          <div class="content-wrapper home">
            <div class="logo--mobile logo--mobile--black">
              <a href="/" data-section="0" class=" is-current ">
                <img data-src="https://res.cloudinary.com/image/upload/c_scale,w_140/codewave-logo-2x_tl2pvw.png"
                  class="lazyload" />
              </a>
            </div>
            <div class="main" id="main">
            <div class="home-slide home-slide--intro is-active pattern-home" data-cursor-type="big" data-cursor-text="scroll" data-scroll="0">
                        <div class="container-fluid desktop">
                            <div class="row no-gutters justify-content-center align-items-center">
                                <div class="col-sm-10">
                                    <h2 class="txt--p2" 
                                    data-aos="fade-up"
                                    data-aos-delay="200"  
                                    data-aos-duration="600"
                                    >Codewave is a <u>'design thinking led digital
                                            transformation'</u> company.

                                    </h2>
                                    <h1 class="title--title2"
                                    data-aos="fade-up"
                                    data-aos-delay="400"  
                                    data-aos-duration="600"
                                    style={{fontSize: "8em",fontWeight:"600",color:"#2b2b2b"}}>What you need is <br /> not design of tech, but <br /> <span
                                            style={{fontWeight:"600",color:"#006EFF"}}>design of value.</span></h1>
                                    <p class="title--title2" style={{opacity: "0.9",marginTop:"50px"}}>
                                        <img
                                            data-src="https://res.cloudinary.com/image/upload/v1579974653/codewave-customers-strip_tgwmhf_1_sxaobj.png"
                                            class="lazyload" width="80%"/></p>
                                </div>
                            </div>

                        </div>


                        <div class="container-fluid mobile">
                            <div class="row no-gutters  align-items-center">
                                <div class="col-xs-0 col-sm-2"></div>

                                <div class="col-xs-5 col-sm-6">

                                    <h2 class="txt--p2" 
                                    data-aos="fade-up"
                                    data-aos-delay="200"  
                                    data-aos-duration="600"
                                    style={{ transform: "matrix(1, 0, 0, 1, 0, 0)"}}>Codewave is a 'design thinking led digital transformation'
                                        company.</h2>
                                    <h1 class="title--title2 mb_40"
                                    data-aos="fade-up"
                                    data-aos-delay="400"  
                                    data-aos-duration="600"
                                    >What you need is not design
                                        of tech, but <span style={{color:"#EC3C63"}}>design of value.</span></h1>


                                    <picture class="home-slide__bg-image " style={{opacity: "0.9"}} >
                                        {/* <!-- <source media="(max-width:576px)" data-srcset="https://res.cloudinary.com/image/upload/c_scale,w_300/v1579974653/codewave-customers-strip_tgwmhf_1_sxaobj.png, https://res.cloudinary.com/image/upload/c_scale,w_450/v1579974653/codewave-customers-strip_tgwmhf_1_sxaobj.png 2x">     --> */}
                                        <img data-src="https://res.cloudinary.com/image/upload/c_scale,w_300/v1579974653/codewave-customers-strip_tgwmhf_1_sxaobj.png"
                                            class="lazyload mb_mob_40" width="100%"/>
                                    </picture>
                                </div>
                            </div>
                        </div>


                        <div class="breadcrumb">
                            <a href="/" class="explore magnetize" data-dist="5" data-cursor-type="medium"
                                data-cursor-text="">
                                <svg width="12px" height="109px" viewBox="0 0 12 109" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g transform="translate(-1612.000000, -877.000000)">
                                            <rect fill="#FFFFFF" x="1612" y="877" width="12" height="108"></rect>
                                            <path
                                                d="M1605.02,896.204 L1603.34,897.276 C1602.908,896.444 1602.444,896.092 1601.788,896.092 C1601.18,896.092 1600.716,896.524 1600.716,897.116 C1600.716,899.068 1605.5,898.812 1605.5,902.14 C1605.5,904.332 1604.06,905.628 1601.916,905.628 C1599.884,905.628 1598.412,904.204 1598.06,902.492 L1599.74,901.436 C1600.076,902.636 1600.748,903.708 1601.964,903.708 C1602.828,903.708 1603.42,903.276 1603.42,902.252 C1603.42,900.396 1598.732,900.764 1598.732,897.212 C1598.732,895.516 1600.028,894.172 1601.788,894.172 C1603.276,894.172 1604.412,894.908 1605.02,896.204 Z M1612.65022,902.604 L1614.42622,903.324 C1613.81822,904.844 1612.55422,905.628 1610.76222,905.628 C1608.13822,905.628 1606.82622,903.74 1606.82622,901.468 C1606.82622,899.196 1608.13822,897.308 1610.76222,897.308 C1612.55422,897.308 1613.81822,898.092 1614.42622,899.612 L1612.65022,900.332 C1612.23422,899.484 1611.65822,899.004 1610.76222,899.004 C1609.51422,899.004 1608.90622,900.044 1608.90622,901.468 C1608.90622,902.892 1609.51422,903.932 1610.76222,903.932 C1611.65822,903.932 1612.23422,903.452 1612.65022,902.604 Z M1617.83244,905.5 L1615.84844,905.5 L1615.84844,897.436 L1617.83244,897.436 L1617.83244,898.748 C1618.40844,897.804 1619.30444,897.308 1620.21644,897.308 C1620.56844,897.308 1620.87244,897.372 1621.19244,897.468 L1620.82444,899.308 C1620.58444,899.164 1620.32844,899.084 1619.99244,899.084 C1618.84044,899.084 1617.83244,900.028 1617.83244,902.636 L1617.83244,905.5 Z M1621.86267,901.468 C1621.86267,899.132 1623.36667,897.308 1625.95867,897.308 C1628.55067,897.308 1630.05467,899.132 1630.05467,901.468 C1630.05467,903.804 1628.55067,905.628 1625.95867,905.628 C1623.36667,905.628 1621.86267,903.804 1621.86267,901.468 Z M1623.94267,901.468 C1623.94267,902.796 1624.67867,903.932 1625.95867,903.932 C1627.23867,903.932 1627.97467,902.796 1627.97467,901.468 C1627.97467,900.14 1627.23867,899.004 1625.95867,899.004 C1624.67867,899.004 1623.94267,900.14 1623.94267,901.468 Z M1631.74889,894.172 L1633.73289,894.172 L1633.73289,905.5 L1631.74889,905.5 L1631.74889,894.172 Z M1635.49111,894.172 L1637.47511,894.172 L1637.47511,905.5 L1635.49111,905.5 L1635.49111,894.172 Z"
                                                class="fill" fill="#000000" fill-rule="nonzero"
                                                transform="translate(1617.767556, 899.900000) rotate(-90.000000) translate(-1617.767556, -899.900000) ">
                                            </path>
                                            <polygon class="fill" fill="#000000" fill-rule="nonzero"
                                                transform="translate(1618.589844, 963.500000) rotate(-90.000000) translate(-1618.589844, -963.500000) "
                                                points="1639.17969 963 1639.17969 964 1598 964 1598 963"></polygon>
                                            <path
                                                d="M1619.00797,984.300866 L1618.29605,984.305744 L1618.64954,983.942433 L1619.00797,984.300866 Z M1620.8787,981.651325 L1621.59543,982.348675 L1618.6593,985.366405 L1615.64645,982.353553 L1616.35355,981.646447 L1618.64954,983.942433 L1620.8787,981.651325 Z"
                                                class="fill" fill="#000000" fill-rule="nonzero"></path>
                                        </g>
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
              <div class="home-slides">

                        <div class="home-slide" id="sec1" data-color="#fff" data-rotation="0" data-x="0" data-y="0">

                            <a target="_blank" href="/services/">
                                <div class="home-slide__left" data-cursor-type="big" data-cursor-text="WATCH">
                                    <div class="home-slide__left-mask">
                                        <div class="home-slide__bg lazyload"
                                            // style="background-image:url(https://res.cloudinary.com/codewave-technologies/image/upload/c_scale,h_480,q_85/v1606745907/Banner-office-vibe-clutch-banner-top-app-development-company_mhqtrk.jpg);   
                                            //  background-size: contain !important;"
                                            >
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <div class="home-slide__subtitle global-impact-mobile"
                                // style={{width: "35%",marginTop:"-80px",marginLeft:"-80px"}} 
                                data-cursor-type="big"
                                data-cursor-text="View">
                                <h1 class="txt--global">Global Impact</h1>
                                <p>HELO</p>
                                <h4 class="txt--p5">Our 
                                {/* <span style="  text-decoration: underline;">'design thinking led
                                        digitization'</span>  */}
                                        practice has touched and transformed businesses globally -
                                    Startups, SMEs and Corporations alike. Journey with our customers are carefully
                                    designed for need identification, challenge articulation, vision / strategic
                                    alignment, progressive elaboration and agile execution. </h4>
                                


                                <div><img
                                        data-src="https://res.cloudinary.com/codewave-technologies/image/upload/v1608967260/Awards-strip-2x-crisp_lwbym3.png"class="lazyload mob-100-width"
                                        alt="codewave - awards, award winning design thinking led digital transformation company from bangalore, India"
                                        class="lazyload" 
                                        // style="marginLeft: -25px;width: 100%;"
                                        /></div>
                            </div>


                        </div>

                        <div class="home-slide" data-color="#0f2ead" data-rotation="0" data-x="0" data-y="0">
                            <a href="https://toppscholars.com" target="_blank">
                                <div class="home-slide__left" data-cursor-type="big" data-cursor-text="Visit site">
                                    <div class="home-slide__left-mask">
                                        <div class="home-slide__bg lazyload"
                                            // style="background-image:url(https://res.cloudinary.com/codewave-technologies/image/upload/codewave-website/uploads/home/toppscholars-bg.svg);"
                                            >
                                            <svg class="home-slide__big-shape" viewBox="0 0 250 502" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                // style="transform: translate(0%, 0%) rotate(0deg);"
                                                >
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <g transform="translate(-118.000000, -35.000000)" fill="#07145F">
                                                        <path
                                                            d="M242.829132,160.970868 L493.629132,160.970868 C493.629132,298.85332 381.342147,410.629132 242.829132,410.629132 C104.316116,410.629132 -7.97086835,298.85332 -7.97086835,160.970868 L242.829132,160.970868 Z"
                                                            id="Combined-Shape-Copy-12"
                                                            transform="translate(242.829132, 285.800000) scale(-1, 1) rotate(90.000000) translate(-242.829132, -285.800000) ">
                                                        </path>
                                                    </g>
                                                </g>
                                            </svg>

                                            <picture class="home-slide__bg-image">
                                               
                                                <img data-src="https://res.cloudinary.com/image/upload/codewave-website/uploads/home/topp1.png"
                                                    class="lazyload"/>
                                            </picture>

                                        </div>
                                        <div class="home-slide__title">
                                            <h3 class="title--title3 m-b-0 home-slide__title-mask">Online Adaptive<br />
                                                Learning. <br /><span
                                                    class="title--title3 m-b-0 home-slide__title-mask home-black-sec-bg-mobile"
                                                    // style="font-size: 32px;background:#000;color:white;padding-left:10px; padding-right:10px;"
                                                    >Live:
                                                    100k requests served daily</span></h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="home-slide__subtitle">
                                    <h4 class="txt--p5"><span>Web, Android and iOS applications </span>
                                        <span>EdTech</span></h4>
                                </div>
                                <div class="home-slide__title" data-cursor-type="big" data-cursor-text="Visit site">
                                    <h3 class="title--title3 m-b-0 home-slide__title-nomask">Online Adaptive<br />
                                        Learning. <br /><span
                                            class="title--title3 m-b-0 home-slide__title-mask home-black-sec-bg-mobile"
                                            // style="font-size: 32px;background:#000;color:white;padding-left:10px; padding-right:10px;"
                                            >Live:
                                            100k requests served daily</span></h3>
                                </div>



                            </a>
                        </div>
                        <div class="home-slide" data-color="#a4d23c" data-rotation="45" data-x="28" data-y="-10">
                            <a href="https://casestudies.codewave.com/design-and-development-of-ride-sharing-app-uber-for-x/"
                                target="_blank">
                                <div class="home-slide__left" data-cursor-type="big" data-cursor-text="READ MORE">
                                    <div class="home-slide__left-mask">
                                        <div class="home-slide__bg lazyload"
                                            // style="background-image:url(https://res.cloudinary.com/codewave-technologies/image/upload/c_scale,w_395/v1579975176/vroom-bg_p4zf7g.png);"
                                            >
                                            <svg class="home-slide__big-shape" viewBox="0 0 250 502" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                // style="transform: translate(28%, -10%) rotate(45deg);"
                                                >
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <g transform="translate(-118.000000, -35.000000)" fill="#333">
                                                        <path
                                                            d="M242.829132,160.970868 L493.629132,160.970868 C493.629132,298.85332 381.342147,410.629132 242.829132,410.629132 C104.316116,410.629132 -7.97086835,298.85332 -7.97086835,160.970868 L242.829132,160.970868 Z"
                                                            id="Combined-Shape-Copy-12"
                                                            transform="translate(242.829132, 285.800000) scale(-1, 1) rotate(90.000000) translate(-242.829132, -285.800000) ">
                                                        </path>
                                                    </g>
                                                </g>
                                            </svg>

                                            <picture class="home-slide__bg-image">
                                               <img data-src="https://res.cloudinary.com/image/upload/codewave-website/uploads/home/vroom-mobile-app-codewave-case-studies.png"
                                                    class="lazyload"/>
                                            </picture>

                                        </div>
                                        <div class="home-slide__title">
                                            <h3 class="title--title3 m-b-0 home-slide__title-mask">Peer to peer<br />
                                                ride sharing.<br /><span
                                                    class="title--title3 m-b-0 home-slide__title-mask home-black-sec-bg-mobile"
                                                    // style="font-size: 32px;background:#000;color:white;padding-left:10px; padding-right:10px;"
                                                    >Launched,
                                                    scaled to 500k+ users </span></h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="home-slide__subtitle">
                                    <h4 class="txt--p5"><span>Ride sharing, HyperLocal delivery</span>
                                        <span>Transportation</span></h4>
                                </div>
                                <div class="home-slide__title" data-cursor-type="big" data-cursor-text="READ MORE">
                                    <h3 class="title--title3 m-b-0 home-slide__title-nomask">Peer to peer<br />
                                        ride sharing.<br /><span
                                            class="title--title3 m-b-0 home-slide__title-mask home-black-sec-bg-mobile"
                                            // style="font-size: 32px;background:#000;color:white;padding-left:10px; padding-right:10px;"
                                            >Launched,
                                            scaled to 500k+ users</span></h3>
                                </div>

                            </a>
                        </div>
                        <div class="home-slide" data-color="#facc48" data-rotation="150" data-x="75" data-y="-5">
                            <a href="https://finzy.com" target="_blank">
                                <div class="home-slide__left" data-cursor-type="big" data-cursor-text="Visit site">
                                    <div class="home-slide__left-mask">
                                        <div class="home-slide__bg lazyload"
                                            // style="background-image:url(https://res.cloudinary.com/codewave-technologies/image/upload/codewave-website/uploads/home/finzy-codewave-case-studies-bg.svg);"
                                            >
                                            <svg class="home-slide__big-shape" viewBox="0 0 250 502" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                // style="transform: translate(75%, -5%) rotate(150deg);"
                                                >
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <g transform="translate(-118.000000, -35.000000)" fill="#facc48">
                                                        <path
                                                            d="M242.829132,160.970868 L493.629132,160.970868 C493.629132,298.85332 381.342147,410.629132 242.829132,410.629132 C104.316116,410.629132 -7.97086835,298.85332 -7.97086835,160.970868 L242.829132,160.970868 Z"
                                                            id="Combined-Shape-Copy-12"
                                                            transform="translate(242.829132, 285.800000) scale(-1, 1) rotate(90.000000) translate(-242.829132, -285.800000) ">
                                                        </path>
                                                    </g>
                                                </g>
                                            </svg>

                                            <picture class="home-slide__bg-image">

                                                <img data-src="https://res.cloudinary.com/image/upload/codewave-website/uploads/home/finzy-p2p-lending-marketplace-built-by-codewave.png"
                                                    class="lazyload"/>
                                            </picture>

                                        </div>
                                        <div class="home-slide__title">
                                            <h3 class="title--title3 m-b-0 home-slide__title-mask">Peer to peer<br />lending.<br /><span
                                                    class="title--title3 m-b-0 home-slide__title-mask  home-black-sec-bg-mobile"
                                                    // style="font-size: 32px;background:#000;color:white;padding-left:10px; padding-right:10px;"
                                                    >Loans
                                                    $1mn+/yr, automated lending</span></h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="home-slide__subtitle">
                                    <h4 class="txt--p5"><span>Alternate financing, Smart Online Lending</span>
                                        <span>Fintech</span></h4>
                                </div>
                                <div class="home-slide__title" data-cursor-type="big" data-cursor-text="Visit site">
                                    <h3 class="title--title3 m-b-0 home-slide__title-nomask">Peer to peer<br />
                                        lending.<br /><span
                                            class="title--title3 m-b-0 home-slide__title-mask  home-black-sec-bg-mobile"
                                            // style="font-size: 32px;background:#000;color:white;padding-left:10px; padding-right:10px;"
                                            >Loans
                                            $1mn+/yr, automated lending</span></h3>
                                </div>

                            </a>
                        </div>
                        <div class="home-slide" data-color="#efa940" data-rotation="180" data-x="64" data-y="-3">
                            <a href="https://www.sana.io" target="_blank">
                                <div class="home-slide__left" data-cursor-type="big" data-cursor-text="Visit Site">
                                    <div class="home-slide__left-mask">
                                        <div class="home-slide__bg lazyload"
                                            // style="background-image:url(https://res.cloudinary.com/codewave-technologies/image/upload/w_395/v1576956235/sana-smart-mask-codewave-case-study-iot_oreflx_1aff894b5a0261a30da05e77b36f0e92_tc4kck.jpg);"
                                            >
                                            <svg class="home-slide__big-shape" viewBox="0 0 250 502" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                // style="transform: translate(64%, -3%) rotate(180deg);"
                                                >
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <g transform="translate(-118.000000, -35.000000)"
                                                        fill="rgba(255, 255, 255, 0.3)">
                                                        <path
                                                            d="M242.829132,160.970868 L493.629132,160.970868 C493.629132,298.85332 381.342147,410.629132 242.829132,410.629132 C104.316116,410.629132 -7.97086835,298.85332 -7.97086835,160.970868 L242.829132,160.970868 Z"
                                                            id="Combined-Shape-Copy-12"
                                                            transform="translate(242.829132, 285.800000) scale(-1, 1) rotate(90.000000) translate(-242.829132, -285.800000) ">
                                                        </path>
                                                    </g>
                                                </g>
                                            </svg>

                                            <picture class="home-slide__bg-image">
                                               
                                                <img data-src="https://res.cloudinary.com/image/upload/v1564456953/sana-app-codewave-case-studies_ygme1u.png"
                                                    class="lazyload"/>
                                            </picture>

                                        </div>
                                        <div class="home-slide__title">
                                            <h3 class="title--title3 m-b-0 home-slide__title-mask">Smart <br />
                                                Sensing tech. <br /><span
                                                    class="title--title3 m-b-0 home-slide__title-mask home-black-sec-bg-mobile"
                                                    // style="font-size: 32px;background:#000;color:white;padding-left:10px; padding-right:10px;"
                                                    >In
                                                    trial: 200 users for FDA approval</span></h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="home-slide__subtitle">
                                    <h4 class="txt--p5"><span>Tablet application</span> <span>Healthcare, IoT</span>
                                    </h4>
                                </div>
                                <div class="home-slide__title" data-cursor-type="big" data-cursor-text="Visit Site">
                                    <h3 class="title--title3 m-b-0 home-slide__title-nomask">Smart<br />
                                        Sensing tech. <br /><span
                                            class="title--title3 m-b-0 home-slide__title-mask home-black-sec-bg-mobile"
                                            // style="font-size: 32px;background:#000;color:white;padding-left:10px; padding-right:10px;"
                                            >In
                                            trial: 200 users for FDA approval</span></h3>
                                </div>

                            </a>
                        </div>


                        <div class="home-slide" data-color="#aaa" data-rotation="220" data-x="64" data-y="-3">
                            <a href="https://casestudies.codewave.com/making-baby-warmers-smarter/" target="_blank">
                                <div class="home-slide__left" data-cursor-type="big" data-cursor-text="Read more">
                                    <div class="home-slide__left-mask">
                                        <div class="home-slide__bg lazyload"
                                            // style="background-image:url(https://res.cloudinary.com/codewave-technologies/image/upload/w_395/v1564456316/embrance-smart-baby-warmer-iot-codewave-casestudy_zzy71r.jpg);"
                                            >
                                            <svg class="home-slide__big-shape" viewBox="0 0 250 502" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                // style="transform: translate(64%, -3%) rotate(180deg);"
                                                >
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <g transform="translate(-118.000000, -35.000000)"
                                                        fill="rgba(255, 238, 181, 0.2)">
                                                        <path
                                                            d="M242.829132,160.970868 L493.629132,160.970868 C493.629132,298.85332 381.342147,410.629132 242.829132,410.629132 C104.316116,410.629132 -7.97086835,298.85332 -7.97086835,160.970868 L242.829132,160.970868 Z"
                                                            id="Combined-Shape-Copy-12"
                                                            transform="translate(242.829132, 285.800000) scale(-1, 1) rotate(90.000000) translate(-242.829132, -285.800000) ">
                                                        </path>
                                                    </g>
                                                </g>
                                            </svg>

                                            <picture class="home-slide__bg-image">
                                                <source media="(min-width: 1441px)"
                                                    data-srcset="https://res.cloudinary.com/image/upload/codewave-website/uploads/home/embrace.png, uploads/home/embrace.png 2x"/>
                                                <source media="(min-width:1281px) and (max-width: 1640px)"
                                                    data-srcset="uploads/home/embrace.png, uploads/home/embrace.png 2x"/>
                                                <source media="(min-width:1025px) and (max-width: 1280px)"
                                                    data-srcset="uploads/home/embrace.png, uploads/home/embrace.png 2x"/>
                                                <source media="(min-width:577px) and (max-width: 1024px)"
                                                    data-srcset="uploads/home/embrace.png, uploads/home/embrace.png 2x"/>
                                                <source media="(max-width:576px)"
                                                    data-srcset="uploads/home/embrace.png, uploads/home/embrace.png 2x"/>
                                                <img data-src="https://res.cloudinary.com/image/upload/codewave-website/uploads/home/embrace.png"
                                                    class="lazyload"/>
                                            </picture>

                                        </div>
                                        <div class="home-slide__title">
                                            <h3 class="title--title3 m-b-0 home-slide__title-mask">Internet of <br /> medical things. <br /><span
                                                    class="title--title3 m-b-0 home-slide__title-mask home-black-sec-bg-mobile"
                                                    // style="font-size: 32px;background:#000;color:white;padding-left:10px; padding-right:10px;"
                                                    >300k+
                                                    babies served in 22 countries</span></h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="home-slide__subtitle">
                                    <h4 class="txt--p5"><span>Edge, Cloud based apps</span> <span>Healthcare, IoT</span>
                                    </h4>
                                </div>
                                <div class="home-slide__title" data-cursor-type="big" data-cursor-text="Read more">
                                    <h3 class="title--title3 m-b-0 home-slide__title-nomask">Internet of<br />
                                        medical things. <br /><span
                                            class="title--title3 m-b-0 home-slide__title-mask home-black-sec-bg-mobile"
                                            // style="font-size: 32px;background:#000;color:white;padding-left:10px; padding-right:10px;"
                                            >300k+
                                            babies served in 22 countries</span></h3>
                                </div>

                            </a>
                        </div>

                        <div class="home-shape">
                            <div>
                                <div>
                                    <div>
                                        <svg viewBox="0 0 250 502" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <g transform="translate(-118.000000, -35.000000)" fill="#ffeeb5">
                                                    <path
                                                        d="M242.829132,160.970868 L493.629132,160.970868 C493.629132,298.85332 381.342147,410.629132 242.829132,410.629132 C104.316116,410.629132 -7.97086835,298.85332 -7.97086835,160.970868 L242.829132,160.970868 Z"
                                                        id="Combined-Shape-Copy-12"
                                                        transform="translate(242.829132, 285.800000) scale(-1, 1) rotate(90.000000) translate(-242.829132, -285.800000) ">
                                                    </path>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="pagination">
                            <div class="pagination__number pagination__number--first">01.</div>
                            <div class="pagination__bar-wrapper">
                                <div class="pagination__bar"></div>
                            </div>
                            <div class="pagination__number pagination__number--last">06.</div>
                        </div>
                    </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
