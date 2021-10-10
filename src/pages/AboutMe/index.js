import React, { useEffect, useRef } from 'react';
import './style.css'
import { } from "./assets/animate.js"
import mainBubble from './assets/Bubble_main.svg'
import myFace2 from './assets/face.svg'
import words from './assets/Portfolio-Words1.svg'
import CV from './assets/CV.pdf'
import download from './assets/download.svg'
import {
    bubble1Anim,
    bubble2Anim,
    bubble3Anim,
    bubble4Anim,
    bubble1AnimWords
} from "./assets/animate.js"


const AboutMe = () => {



    let bubble1Anim1 = useRef(null)

    useEffect(() => {
        bubble1Anim(bubble1Anim1)
    }, [])

    let bubble2Anim1 = useRef(null)

    useEffect(() => {
        bubble2Anim(bubble2Anim1)
    }, [])




    let bubble3Anim1 = useRef(null)

    useEffect(() => {
        bubble3Anim(bubble3Anim1)
    }, [])

    let bubble4Anim1 = useRef(null)

    useEffect(() => {
        bubble4Anim(bubble4Anim1)
    }, [])

    let bubble4Anim1Words = useRef(null)

    useEffect(() => {
        bubble1AnimWords(bubble4Anim1Words)
    }, [])


    return (

        <div id="AboutSect" class="raleway mt-12">

            <div class="w-full flex flex-col lg:flex-row flex-wrap">
                {/*  <!-- Section Left --> */}
                <div class="w-full pt-10 bg-red lg:w-2/3 flex flex-col">

                    <div id="left" class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-44">
                        <h1 class="bodyheadercol text-left text-4xl font-extrabold">Not all advertising is profitable</h1>
                        <h2 class="text-left text-2xl py-3 italic" > Unfocused ads are shown to the wrong audience, resulting in wasted time, opportunities and money </h2>
                        <p class="text-left text-xl"> At ShavDigital, we use Data to increase the profitability of your ads, by delivering the right message at the right place, to the right people at the right time, driving more Traffic, Leads & Sales to your website. As a prominent PPC management company, we enable your business to reach successful heights with our diverse paid ad marketing services.
                        </p>


                    </div>
                </div>
                {/* <!-- Section Right--> */}
                <div class="lg:w-1/3 w-full py-20 mt-14 lg:my-auto overflow-hidden">


                    <div class="relative mx-auto w-96 h-full">

                        <div className="bubble3Anim1" ref={(el) => (bubble3Anim1 = el)}>
                            <img id="bubble3mainFace" class="w-full h-full  absolute " src={mainBubble} alt="mainBubble1" />
                            <img id="placeholderBubble3" class="h-1 " src={download} alt="mainBubble1" />
                        </div>

                        <div className="bubble4Anim1" ref={(el) => (bubble4Anim1 = el)}>
                            <img id="bubble4mainFace" class="w-full h-full  absolute" src={mainBubble} alt="mainBubble1" />
                            <img id="placeholderBubble4" class="h-1" src={download} />
                        </div>

                        <div className="bubble1Anim1" ref={(el) => (bubble1Anim1 = el)}>
                            <img id="bubble2mainFace" class="absolute w-full h-full  " src={mainBubble} alt="mainBubble2" />
                            <img id="myFace" class="rounded-full border myFace" src={myFace2} alt="MyFace" />

                            <div className="bubble4Anim1Words" ref={(el) => (bubble4Anim1Words = el)} >

                                <img id="words" class="rounded-full border myFace absolute" src={words} alt="MyFace" />

                            </div>

                        </div>

                        <div className="bubble2Anim1" ref={(el) => (bubble2Anim1 = el)} id="downloadParent">
                            <img id="bubble1mainFace" class="w-full h-full  absolute " src={mainBubble} alt="mainBubble1" />
                            <a href="mailto:shavhugan@gmail.com?subject=Hello%20Shav&body=Hi%20Shav,">

                                <svg id='downloadFace' fill="white" class="w-1 h-1" viewBox="0 0 512 512" >
                                    <path d="M485.743,85.333H26.257C11.815,85.333,0,97.148,0,111.589V400.41c0,14.44,11.815,26.257,26.257,26.257h459.487 c14.44,0,26.257-11.815,26.257-26.257V111.589C512,97.148,500.185,85.333,485.743,85.333z M475.89,105.024L271.104,258.626 c-3.682,2.802-9.334,4.555-15.105,4.529c-5.77,0.026-11.421-1.727-15.104-4.529L36.109,105.024H475.89z M366.5,268.761 l111.59,137.847c0.112,0.138,0.249,0.243,0.368,0.368H33.542c0.118-0.131,0.256-0.23,0.368-0.368L145.5,268.761 c3.419-4.227,2.771-10.424-1.464-13.851c-4.227-3.419-10.424-2.771-13.844,1.457l-110.5,136.501V117.332l209.394,157.046 c7.871,5.862,17.447,8.442,26.912,8.468c9.452-0.02,19.036-2.6,26.912-8.468l209.394-157.046v275.534L381.807,256.367 c-3.42-4.227-9.623-4.877-13.844-1.457C363.729,258.329,363.079,264.534,366.5,268.761z" />
                                </svg>
                            </a>
                        </div>

                    </div>
                </div>




            </div></div>

    )


}

export default AboutMe;
