import React, { useEffect, useRef } from 'react';
import Lottie from 'react-lottie';
import animationData from './assets/lottie';
import './styleHome.css'
import Asset2 from './assets/Asset2.svg'
import Asset3 from './assets/asAsset 3.svg'
import office from './assets/office.svg'
import mainBubble from './assets/Bubble_main.svg'
import { NavLink } from 'react-router-dom';
import {
    bubble1Anim,
    bubble2Anim,
    bubble3Anim,
    bubble4Anim,
    bubble5Anim,
    bubble6Anim,
    bubble7Anim,
    bubble8Anim,
    bubble9Anim,
    bubble11Anim,
    bubble12Anim,
    bubble14Anim,
    bubble15Anim,
    initAnim
} from "./assets/animateHome.js";
import portfolio from "./assets/Icons/image.svg";
import stack from "./assets/Icons/network.svg";
import contact from "./assets/Icons/telegram.svg";
import aboutme from "./assets/Icons/user.svg";



let toloc = (id) => {
    window.location.hash = id
}


const Home = () => {





    let contentLeft = useRef(null)
    let contentRight = useRef(null)

    useEffect(() => {
        initAnim(contentLeft, contentRight)
    }, [])

    let toloc = (id) => {
        window.location.hash = id
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,

    };

    return (


        <section id="homesect" class="slide1 text-white">
            <div class=" w-full h-full flex  flex-wrap">

                {/* <!-- Section Left --> */}
                <div class="w-full lg:w-1/2 flex flex-col ">



                    <div id="slide-1-content-left" className="contentLeft" ref={(el) => (contentLeft = el)} class="flex flex-col justify-center lg:justify-start my-auto pt-8 lg:pt-0 px-8 lg:px-24 lg:px-32 ">
                        <h1 class="text-center lg:text-left text-3xl lg:text-4xl">We are a <span> Data-driven Marketing Agency </span> specialising in PPC.

                        </h1>
                        <h2><span>ShavDigital</span> is a trusted pioneer in pay-per-click (PPC) advertising management.We assist you with our PPC management services to achieve your digital marketing objectives.Reap benefits of improved brand visibility, fresh traffic, and reduced costs with personalized PPC services.</h2>

                        <div class="text-left"><button className="border-2 rounded-full py-2 my-10 hover:bg-purple-500 hover:bg-opacity-40  px-10" >Get in touch!</button> </div>

                    </div>

                </div>

                {/* <!-- Image Section --> */}
                <div id="illustration" className="contentRight" ref={(el) => (contentRight = el)} class="w-1/2">
                    <div class=" absolute object-fit w-full h-full hidden lg:block">

                        <div id="lottie" >
                            <Lottie classname="cursor-pointer"
                                options={defaultOptions}
                                isClickToPauseDisabled={true}
                            /></div>


                        <div id='bubble' class="  sizebub pos-bub-2 " id="bubble2parent">

                            <p className="bubble2Anim1" id="bubble2main" class="w-full h-full  absolute bubble2 text-white" > Knows which ads are working </p>

                            <svg className="bubble2Anim2" id='icon2' fill="white" class="w-full h-full" viewBox="0 0 256 256" >
                                <path d="M 23.866 0 c -0.262 0 -0.52 0.104 -0.712 0.298 L 0.288 23.48 c -0.384 0.39 -0.384 1.015 0 1.404 l 22.866 23.183 c 0.285 0.29 0.718 0.376 1.091 0.223 c 0.375 -0.154 0.621 -0.52 0.621 -0.925 l 0 -22.175 C 59.77 25.725 88 54.144 88 89 c 0 0.552 0.447 1 1 1 s 1 -0.448 1 -1 c 0 -36.292 -29.668 -65.817 -66.134 -65.817 c -0.552 0 -1 0.447 -1 1 l 0 20.745 L 2.405 24.183 L 22.866 3.438 l 0 10.039 c 0 0.553 0.448 1 1 1 s 1 -0.447 1 -1 l 0 -12.477 c 0 -0.405 -0.245 -0.771 -0.621 -0.925 C 24.123 0.024 23.994 0 23.866 0 z" />
                            </svg>

                        </div>


                        <div id='bubble' class="  sizebub pos-bub-3 " id="bubble3parent">

                            <p className="bubble2Anim1" id="bubble3main" class="w-full h-full  absolute bubble3 text-white">Increasing Email Open Rates </p>

                            <svg className="bubble2Anim2" id='icon3' fill="white" class="w-full h-full" viewBox="0 0 256 256" >
                                <path d="M 23.866 0 c -0.262 0 -0.52 0.104 -0.712 0.298 L 0.288 23.48 c -0.384 0.39 -0.384 1.015 0 1.404 l 22.866 23.183 c 0.285 0.29 0.718 0.376 1.091 0.223 c 0.375 -0.154 0.621 -0.52 0.621 -0.925 l 0 -22.175 C 59.77 25.725 88 54.144 88 89 c 0 0.552 0.447 1 1 1 s 1 -0.448 1 -1 c 0 -36.292 -29.668 -65.817 -66.134 -65.817 c -0.552 0 -1 0.447 -1 1 l 0 20.745 L 2.405 24.183 L 22.866 3.438 l 0 10.039 c 0 0.553 0.448 1 1 1 s 1 -0.447 1 -1 l 0 -12.477 c 0 -0.405 -0.245 -0.771 -0.621 -0.925 C 24.123 0.024 23.994 0 23.866 0 z" />
                            </svg>

                        </div>


                        <div id='bubble' class="  sizebub pos-bub-1 " id="bubble1parent">

                            <p className="bubble2Anim1" id="bubble1main" class="w-full h-full  absolute bubble1 text-white"> Can see where sales are coming from</p>

                            <svg className="bubble2Anim2" id='icon1' fill="white" class="w-full h-full" viewBox="0 0 256 256" >
                                <path d="M 23.866 0 c -0.262 0 -0.52 0.104 -0.712 0.298 L 0.288 23.48 c -0.384 0.39 -0.384 1.015 0 1.404 l 22.866 23.183 c 0.285 0.29 0.718 0.376 1.091 0.223 c 0.375 -0.154 0.621 -0.52 0.621 -0.925 l 0 -22.175 C 59.77 25.725 88 54.144 88 89 c 0 0.552 0.447 1 1 1 s 1 -0.448 1 -1 c 0 -36.292 -29.668 -65.817 -66.134 -65.817 c -0.552 0 -1 0.447 -1 1 l 0 20.745 L 2.405 24.183 L 22.866 3.438 l 0 10.039 c 0 0.553 0.448 1 1 1 s 1 -0.447 1 -1 l 0 -12.477 c 0 -0.405 -0.245 -0.771 -0.621 -0.925 C 24.123 0.024 23.994 0 23.866 0 z" />
                            </svg>

                        </div>








                    </div>

                </div>
            </div>

            <img class="squiggle1 lg:object-cover" src={Asset2} alt="squiggle line1"></img>

            <img class="squiggle2 lg:object-cover" src={Asset2} alt="squiggle line2"></img>

            <img class="dots object-fit lg:transform rotate-90" src={Asset3} alt="dots"></img>



            <NavLink to="/AboutMe" activeClassName="current" onClick={() => toloc("AboutSect")}>
                <svg id="downarow" class=" w-8  mb-10 -mr-1 mt-80 animate-bounce" viewBox="0 0 20 20" fill="white">
                    <path fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"></path>
                </svg> </NavLink>

        </section>
    )


}

export default Home;
