import React from "react"

const FirstSection = props => {
    return(
        <div class="home-slide home-slide--intro is-active pattern-home" data-cursor-type="big" data-cursor-text="scroll">
                        <div class="container-fluid desktop">
                            <div class="row no-gutters justify-content-center align-items-center">
                                <div class="col-sm-10">
                                    <h2 class="txt--p2" data-aos={ 'fade-right'}  style={{opacity: "1", transform: "matrix(1, 0, 0, 1, 0, 0)"}}>Codewave is a <u>'design thinking led digital
                                            transformation'</u> company.

                                    </h2>
                                    <h1 class="title--title2" style={{fontSize: "8em",opacity: "1",fontWeight:"600",color:"#2b2b2b"}}>What you need is <br /> not design of tech, but <br /> <span
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

                                    <h2 class="txt--p2" style={{ transform: "matrix(1, 0, 0, 1, 0, 0)"}}>Codewave is a 'design thinking led digital transformation'
                                        company.</h2>
                                    <h1 class="title--title2 mb_40" >What you need is not design
                                        of tech, but <span style={{color:"#EC3C63"}}>design of value.</span></h1>


                                    <picture class="home-slide__bg-image" style={{opacity: "0.9"}}>
                                        {/* <!-- <source media="(max-width:576px)" data-srcset="https://res.cloudinary.com/image/upload/c_scale,w_300/v1579974653/codewave-customers-strip_tgwmhf_1_sxaobj.png, https://res.cloudinary.com/image/upload/c_scale,w_450/v1579974653/codewave-customers-strip_tgwmhf_1_sxaobj.png 2x">     --> */}
                                        <img data-src="https://res.cloudinary.com/image/upload/c_scale,w_300/v1579974653/codewave-customers-strip_tgwmhf_1_sxaobj.png"
                                            class="lazyload" width="100%"/>
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
                  
    )
}
export default FirstSection;