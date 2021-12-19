import React, { useEffect, useRef } from 'react';
import './styleHome.css'
import Asset2 from './assets/Asset2.svg'
import Asset3 from './assets/asAsset 3.svg'
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
    let bubble1Anim1 = useRef(null)
    let bubble1Anim2 = useRef(null)

    useEffect(() => {
        bubble1Anim(bubble1Anim1, bubble1Anim2)
    }, [])

    let bubble2Anim1 = useRef(null)
    let bubble2Anim2 = useRef(null)

    useEffect(() => {
        bubble2Anim(bubble2Anim1, bubble2Anim2)
    }, [])

    let bubble3Anim1 = useRef(null)
    let bubble3Anim2 = useRef(null)

    useEffect(() => {
        bubble3Anim(bubble3Anim1, bubble3Anim2)
    }, [])

    let bubble4Anim1 = useRef(null)
    let bubble4Anim2 = useRef(null)

    useEffect(() => {
        bubble4Anim(bubble4Anim1, bubble4Anim2)
    }, [])

    let bubble5Anim1 = useRef(null)

    useEffect(() => {
        bubble5Anim(bubble5Anim1)
    }, [])

    let bubble6Anim1 = useRef(null)

    useEffect(() => {
        bubble6Anim(bubble6Anim1)
    }, [])

    let bubble7Anim1 = useRef(null)

    useEffect(() => {
        bubble7Anim(bubble7Anim1)
    }, [])
    let bubble8Anim1 = useRef(null)

    useEffect(() => {
        bubble8Anim(bubble8Anim1)
    }, [])

    let bubble9Anim1 = useRef(null)

    useEffect(() => {
        bubble9Anim(bubble9Anim1)
    }, [])


    let bubble11Anim1 = useRef(null)

    useEffect(() => {
        bubble11Anim(bubble11Anim1)
    }, [])

    let bubble12Anim1 = useRef(null)

    useEffect(() => {
        bubble12Anim(bubble12Anim1)
    }, [])

    let bubble14Anim1 = useRef(null)

    useEffect(() => {
        bubble14Anim(bubble14Anim1)
    }, [])

    let bubble15Anim1 = useRef(null)

    useEffect(() => {
        bubble15Anim(bubble15Anim1)
    }, [])

    let contentLeft = useRef(null)
    let contentRight = useRef(null)

    useEffect(() => {
        initAnim(contentLeft, contentRight)
    }, [])

    let toloc = (id) => {
        window.location.hash = id
    }


    return (


        <section id="homesect" class="slide1 text-white">
            <div class=" w-full h-full flex  flex-wrap">

                {/* <!-- Section Left --> */}
                <div class="w-full lg:w-1/2 flex flex-col ">



                    <div id="slide-1-content-left" className="contentLeft" ref={(el) => (contentLeft = el)} class="flex flex-col justify-center lg:justify-start my-auto pt-8 lg:pt-0 px-8 lg:px-24 lg:px-32 ">
                        <h1 class="text-center lg:text-left text-6xl lg:text-4xl">Welcome! My name is <span>Shav Vimalendiran</span> and I'm an AI & Data Scientist at Apollo SaturnF1.
                        </h1>


                    </div>

                </div>

                {/* <!-- Image Section --> */}
                <div id="illustration" className="contentRight" ref={(el) => (contentRight = el)} class="w-1/2">
                    <div class=" absolute object-fit w-full h-full hidden lg:block">

                    <NavLink to="/Portfolio" activeClassName="" onClick={() => toloc("portfoliosect")}>
                        <div class="flex flex-row sizebub pos-bub-1 " id="bubble1parent">

                            <img className="bubble1Anim1" ref={(el) => (bubble1Anim1 = el)} id="bubble1main" class="w-full h-full  absolute bubble1" src={mainBubble} alt="mainBubble1" />

                            <svg className="bubble1Anim2" ref={(el) => (bubble1Anim2 = el)} id='icon1' fill="white" class="w-full h-full" viewBox="0 0 512 512" >




                                <path d="M486.716,60.05H25.284C11.372,60.05,0,71.427,0,85.333v341.333c0,13.906,11.372,25.284,25.284,25.284h461.432 c13.9,0,25.284-11.377,25.284-25.284V85.333C512,71.427,500.616,60.05,486.716,60.05z M493.037,426.666 c0,3.426-2.901,6.321-6.321,6.321H25.284c-3.432,0-6.321-2.895-6.321-6.321V85.333c0-3.426,2.888-6.321,6.321-6.321h461.432 c3.42,0,6.321,2.895,6.321,6.321V426.666z"/>

                                <path d="M437.172,382.747L298.11,212.088c-1.789-2.213-4.456-3.477-7.294-3.496c-2.838-0.019-5.518,1.22-7.333,3.413 L195.767,317.25l-36.927-42.218c-1.826-2.086-4.507-3.28-7.282-3.236c-2.775,0.044-5.404,1.308-7.175,3.457L55.889,382.711 c-3.331,4.039-2.755,10.012,1.296,13.343c4.039,3.325,10.012,2.75,13.343-1.296l81.382-98.835l36.902,42.161 c1.826,2.092,4.469,3.275,7.244,3.243c2.775-0.037,5.398-1.277,7.175-3.413l87.444-104.941l131.793,161.747 c3.306,4.064,9.285,4.672,13.343,1.365S440.477,386.799,437.172,382.747z"/>

                                <path d="M398.222,123.259c-24.444,0-44.247,19.81-44.247,44.247c0,24.438,19.804,44.247,44.247,44.247 c24.444,0,44.247-19.81,44.247-44.247S422.665,123.259,398.222,123.259z M398.222,192.79c-13.95,0-25.284-11.34-25.284-25.284 c0-13.944,11.333-25.284,25.284-25.284c13.937,0,25.284,11.34,25.284,25.284C423.506,181.45,412.16,192.79,398.222,192.79z"/>
                            </svg>


                        </div> </NavLink>


                        <NavLink to="/Contact" activeClassName="" onClick={() => toloc("contactsect")}>
                        <div id='bubble' class=" flex flex-row  sizebub pos-bub-2 " id="bubble2parent">

                            <img className="bubble2Anim1" ref={(el) => (bubble2Anim1 = el)} id="bubble2main" class="w-full h-full  absolute bubble2" src={mainBubble} alt="mainBubble1" />



                            <svg className="bubble2Anim2" ref={(el) => (bubble2Anim2 = el)} id='icon2' fill="white" class="w-full h-full" viewBox="0 0 512 512" >
                            <path d="M485.743,85.333H26.257C11.815,85.333,0,97.148,0,111.589V400.41c0,14.44,11.815,26.257,26.257,26.257h459.487 c14.44,0,26.257-11.815,26.257-26.257V111.589C512,97.148,500.185,85.333,485.743,85.333z M475.89,105.024L271.104,258.626 c-3.682,2.802-9.334,4.555-15.105,4.529c-5.77,0.026-11.421-1.727-15.104-4.529L36.109,105.024H475.89z M366.5,268.761 l111.59,137.847c0.112,0.138,0.249,0.243,0.368,0.368H33.542c0.118-0.131,0.256-0.23,0.368-0.368L145.5,268.761 c3.419-4.227,2.771-10.424-1.464-13.851c-4.227-3.419-10.424-2.771-13.844,1.457l-110.5,136.501V117.332l209.394,157.046 c7.871,5.862,17.447,8.442,26.912,8.468c9.452-0.02,19.036-2.6,26.912-8.468l209.394-157.046v275.534L381.807,256.367 c-3.42-4.227-9.623-4.877-13.844-1.457C363.729,258.329,363.079,264.534,366.5,268.761z"/>
                            </svg>

                        </div> </NavLink>


                        <NavLink to="/TechStack"  activeClassName="" onClick={() => toloc("Techsect")}>
                        <div class="  flex flex-row  sizebub pos-bub-3 "  id="bubble3parent">

                            <img className="bubble3Anim1" ref={(el) => (bubble3Anim1 = el)} id="bubble3main" class="w-full h-full bubble3 absolute" src={mainBubble} alt="mainBubble1" />




                            <svg className="bubble3Anim2" ref={(el) => (bubble3Anim2 = el)} id='icon3' fill="white" class="w-full h-full" viewBox="0 0 512 512" >
                                <path d="M60.235,198.777C26.98,198.777,0,225.745,0,259.012c0,33.262,26.98,60.235,60.235,60.235 c33.268,0.001,60.235-26.973,60.235-60.235C120.47,225.744,93.503,198.777,60.235,198.777z M60.235,301.177 c-23.245,0-42.165-18.92-42.165-42.165c0-23.246,18.92-42.165,42.165-42.165s42.165,18.92,42.165,42.165 S83.48,301.177,60.235,301.177z" />

                                <path d="M349.365,24.095c-33.268,0-60.236,26.967-60.236,60.235c0,33.262,26.968,60.235,60.236,60.235 s60.235-26.973,60.235-60.235C409.601,51.062,382.634,24.095,349.365,24.095z M349.365,126.496 c-23.245,0-42.165-18.92-42.165-42.165c0-23.246,18.92-42.165,42.165-42.165c23.245,0,42.165,18.92,42.165,42.165 C391.531,107.577,372.611,126.496,349.365,126.496z"/>

                                <path d="M355.389,361.413c-33.256,0-60.235,26.967-60.235,60.235c0,33.262,26.98,60.235,60.235,60.235 c33.268,0,60.235-26.973,60.235-60.235C415.624,388.381,388.657,361.413,355.389,361.413z M355.389,463.813 c-23.245,0-42.165-18.92-42.165-42.165c0-23.245,18.92-42.165,42.165-42.165c23.245,0,42.165,18.92,42.165,42.165 C397.553,444.892,378.633,463.813,355.389,463.813z"/>

                                <path d="M451.765,192.754c-30.19,0-55.116,22.233-59.483,51.2h-61.555c-4.482-38.984-37.551-69.271-77.74-69.271 c-13.354,0-25.919,3.361-36.918,9.252l-30.413-50.694c15.216-10.933,25.166-28.744,25.166-48.912 c0-33.262-26.967-60.235-60.235-60.235c-33.256,0-60.235,26.973-60.235,60.235c0,33.256,26.98,60.235,60.235,60.235	c6.626,0,12.974-1.108,18.944-3.084l31.708,52.845c-16.252,14.354-26.558,35.279-26.558,58.664 c0,26.383,13.083,49.658,33.081,63.849l-32.214,53.682c-5.964-1.975-12.312-3.084-18.938-3.084 c-33.256,0-60.235,26.973-60.235,60.235c0,33.256,26.98,60.235,60.235,60.235c33.268,0,60.235-26.98,60.235-60.235 c0-20.173-9.951-37.984-25.166-48.912l31.931-53.218c9.071,3.68,18.974,5.753,29.377,5.753c40.189,0,73.258-30.286,77.74-69.271 h61.555c4.367,28.967,29.293,51.2,59.483,51.2c33.268,0,60.235-26.98,60.235-60.235C512,219.727,485.033,192.754,451.765,192.754z M150.589,126.495c-23.246,0-42.165-18.921-42.165-42.165s18.92-42.165,42.165-42.165c23.246,0,42.165,18.92,42.165,42.165 S173.835,126.495,150.589,126.495z M198.778,427.671c-0.001,23.246-18.921,42.165-42.165,42.165s-42.165-18.92-42.165-42.165 c0-23.245,18.92-42.165,42.165-42.165S198.778,404.425,198.778,427.671z M252.988,313.224c-33.214,0-60.235-27.022-60.235-60.235 s27.022-60.235,60.235-60.235c33.213,0,60.235,27.022,60.235,60.235S286.203,313.224,252.988,313.224z M451.765,295.154 c-23.245,0-42.165-18.92-42.165-42.165c0-23.246,18.92-42.165,42.165-42.165c23.245,0,42.165,18.92,42.165,42.165 C493.93,276.235,475.009,295.154,451.765,295.154z"/>
                            </svg>



                        </div> </NavLink>

                        <NavLink to="/AboutMe" activeClassName="" onClick={() => toloc("AboutSect")}>
                        <div class="  flex flex-row  sizebub pos-bub-4 " id="bubble4parent">

                            <img className="bubble4Anim1" ref={(el) => (bubble4Anim1 = el)} id="bubble4main" class="w-full h-full  bubble4 absolute" src={mainBubble} alt="mainBubble1" />

           
                            <svg className="bubble4Anim2" ref={(el) => (bubble4Anim2 = el)} id='icon4' fill="white" class="w-full h-full" viewBox="0 0 512 512" >
                            <path d="M315.03,265.947c47.547-22.256,80.556-70.383,80.563-126.353C395.586,62.5,333.099,0.007,255.993,0 c-77.092,0.007-139.586,62.494-139.592,139.593c0.007,55.97,33.017,104.097,80.556,126.353 C91.261,292.322,12.939,387.866,12.932,501.753c0,2.698,1.092,5.335,2.999,7.248c1.906,1.914,4.549,2.999,7.248,2.999h465.642 c2.698,0,5.335-1.093,7.248-2.999s2.999-4.549,2.999-7.248C499.061,387.866,420.739,292.322,315.03,265.947z M171.783,223.803 c-21.566-21.587-34.874-51.297-34.881-84.218c0.007-32.913,13.315-62.623,34.881-84.21c21.581-21.566,51.297-34.874,84.21-34.881 c32.913,0.007,62.63,13.315,84.218,34.881c21.566,21.587,34.874,51.297,34.881,84.21c-0.007,32.921-13.315,62.63-34.881,84.218 c-21.587,21.566-51.304,34.874-84.218,34.881C223.079,258.678,193.362,245.37,171.783,223.803z M300.807,283.694l-29.238,43.858 h-29.478l-24.955-44.923c12.625-2.227,25.597-3.449,38.864-3.449C271.35,279.179,286.332,280.737,300.807,283.694z M33.686,491.507v-0.001c2.602-57.405,26.895-109.083,64.932-147.141c26.738-26.738,60.226-46.625,97.682-57.028l28.951,52.103 L193.56,491.507H33.686z M214.499,491.505l29.894-143.46h24.655l35.858,143.46H214.499z M326.036,491.505l-37.949-151.794 l33.747-50.628c34.977,10.814,66.265,30.018,91.541,55.28c38.037,38.058,62.33,89.73,64.932,147.141H326.036z"/>
                            </svg>


                        </div> </NavLink>

                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="object-fit w-full h-screen hidden lg:block" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 302.4 266.88">
                        <defs>
                            <clipPath id="bb630e36-eb7b-419c-be25-1ff393064b5c">
                                <circle cx="125.97" cy="56.96" r="39.61" style={{ fill: "none" }} />
                            </clipPath>
                            <clipPath id="a5caab1e-e08d-42aa-bbb0-fab6346f41f4">
                                <rect x="81.35" y="12.34" width="89.24" height="89.24" style={{ fill: "none" }} />
                            </clipPath>
                            <clipPath id="b92a3f7d-b0d0-4785-9f42-509385dbf4bb" transform="translate(5.05 5.02)">
                                <circle cx="141.02" cy="132.71" r="53.29" style={{ fill: "none" }} />
                            </clipPath>
                            <clipPath id="eaece23f-472e-44d5-924e-3f82631c47c1" transform="translate(5.05 5.02)">
                                <rect x="82.76" y="74.42" width="116.55" height="116.58" style={{ fill: "none" }} />
                            </clipPath>
                            <clipPath id="a2e5ab2e-98c7-44a1-96f5-7c5d6cafe8c1" transform="translate(5.05 5.02)">
                                <circle cx="208.03" cy="131.41" r="29.38" style={{ fill: "none" }} />
                            </clipPath>
                            <clipPath id="afcd7789-494e-4797-94bc-053ac8408190" transform="translate(5.05 5.02)">
                                <rect x="173.64" y="97.02" width="68.78" height="68.78" style={{ fill: "none" }} />
                            </clipPath>
                            <clipPath id="ead91274-6277-49f4-adde-014dc9fc3ecb" transform="translate(5.05 5.02)">
                                <circle cx="96.21" cy="190.59" r="38.24" style={{ fill: "none" }} />
                            </clipPath>
                            <clipPath id="f56dc1bd-e6c1-4656-b78e-5579643caf8c" transform="translate(5.05 5.02)">
                                <rect x="52.95" y="147.34" width="86.52" height="86.5" style={{ fill: "none" }} />
                            </clipPath>
                            <clipPath id="ab593b6e-c654-4a7d-9fa9-d77d58073eab" transform="translate(5.05 5.02)">
                                <circle cx="202.3" cy="53.72" r="6.11" style={{ fill: "none" }} />
                            </clipPath>
                            <clipPath id="b1a15e22-f370-4c5f-9226-6b6f7d1c2b7e" transform="translate(5.05 5.02)">
                                <rect x="191.19" y="42.62" width="22.22" height="22.22" style={{ fill: "none" }} />
                            </clipPath>
                            <clipPath id="ef3958a2-412a-4f24-9c2b-e28cd6e099f2" transform="translate(5.05 5.02)">
                                <circle cx="208.05" cy="68.54" r="12.36" style={{ fill: "none" }} />
                            </clipPath>
                            <clipPath id="b671e4a1-a526-47ce-99a5-a3f78261f1b0" transform="translate(5.05 5.02)">
                                <rect x="190.69" y="51.18" width="34.72" height="34.72" style={{ fill: "none" }} />
                            </clipPath>
                            <clipPath id="e1f94fd5-e8dd-4154-a8fb-96e4b94fae9d" transform="translate(5.05 5.02)">
                                <circle cx="173.24" cy="204.66" r="8.21" style={{ fill: "none" }} />
                            </clipPath>
                            <clipPath id="b6dbe08e-f00e-48ee-92b0-7f9ca9311791" transform="translate(5.05 5.02)">
                                <rect x="160.03" y="191.45" width="26.42" height="26.41" style={{ fill: "none" }} />
                            </clipPath>
                            <clipPath id="e843966a-0f71-4ee6-833b-1428ad798fae" transform="translate(5.05 5.02)">
                                <circle cx="50.15" cy="92.09" r="14.66" style={{ fill: "none" }} />
                            </clipPath>
                            <clipPath id="bb63bc3f-f444-4db8-b975-4ecf8cd4d8ac" transform="translate(5.05 5.02)">
                                <rect x="30.49" y="72.43" width="39.32" height="39.32" style={{ fill: "none" }} />
                            </clipPath>
                            <clipPath id="a6e539fb-1373-43c5-a9fc-830e50c11563" transform="translate(5.05 5.02)">
                                <circle cx="273.13" cy="248.04" r="8.43" style={{ fill: "none" }} />
                            </clipPath>
                            <clipPath id="e7102751-cffc-469b-93dd-04a703b88b3f" transform="translate(5.05 5.02)">
                                <rect x="259.71" y="234.61" width="26.86" height="26.86" style={{ fill: "none" }} />
                            </clipPath>
                            <clipPath id="ab98e40e-35ed-4023-a9cc-cbf16348126d" transform="translate(5.05 5.02)">
                                <circle cx="279.66" cy="231.91" r="12.6" style={{ fill: "none" }} />
                            </clipPath>
                            <clipPath id="bedf93e2-2f3c-41a8-bf96-b737d9b454c4" transform="translate(5.05 5.02)">
                                <rect x="262.06" y="214.31" width="35.19" height="35.21" style={{ fill: "none" }} />
                            </clipPath>
                            <clipPath id="f329aa81-4401-443a-8edd-eda867cf3faf" transform="translate(5.05 5.02)">
                                <circle cx="42.2" cy="239.03" r="5.98" style={{ fill: "none" }} />
                            </clipPath>
                            <clipPath id="ab868cb3-2278-4a94-8c9a-3d2e8e6682e5" transform="translate(5.05 5.02)">
                                <rect x="31.22" y="228.05" width="21.95" height="21.96" style={{ fill: "none" }} />
                            </clipPath>
                            <clipPath id="a8b3c531-4800-4fa7-8e6b-7c93af7ac366" transform="translate(5.05 5.02)">
                                <circle cx="263.59" cy="14.13" r="9.38" style={{ fill: "none" }} />
                            </clipPath>
                            <clipPath id="b34c1b5b-dc78-465b-9f5f-d9b9896d3657" transform="translate(5.05 5.02)">
                                <rect x="249.21" y="-0.25" width="28.76" height="28.76" style={{ fill: "none" }} />
                            </clipPath>
                            <clipPath id="a37c5fb9-3f04-481e-b0a7-dd2b391e79f1" transform="translate(5.05 5.02)">
                                <circle cx="17.32" cy="136.67" r="17.32" style={{ fill: "none" }} />
                            </clipPath>
                            <clipPath id="fc997408-5ede-40c0-a675-a15b1046eb37" transform="translate(5.05 5.02)">
                                <rect x="-4.99" y="114.36" width="44.62" height="44.63" style={{ fill: "none" }} />
                            </clipPath>
                            <clipPath id="e416c6fc-9e73-4ffa-b311-731ce35f3208" transform="translate(5.05 5.02)">
                                <circle cx="259.21" cy="145.84" r="9.77" style={{ fill: "none" }} />
                            </clipPath>
                            <clipPath id="f6e009af-8eb6-4b07-ab1f-8e0f9e8ebf45" transform="translate(5.05 5.02)">
                                <rect x="244.44" y="131.06" width="29.55" height="29.55" style={{ fill: "none" }} />
                            </clipPath>
                            <clipPath id="a175f790-81a9-4634-b0ce-5161332adf56" transform="translate(5.05 5.02)">
                                <circle cx="53.05" cy="6.7" r="6.7" style={{ fill: "none" }} />
                            </clipPath>
                            <clipPath id="aebeb1e5-e234-4597-8d0d-525ee31aa038" transform="translate(5.05 5.02)">
                                <rect x="41.35" y="-5" width="23.41" height="23.41" style={{ fill: "none" }} />
                            </clipPath>
                        </defs>
                        <title>Bubbles</title>
                        <g id="ef94a1c8-e1ca-4a3e-9847-994abd739408" data-name="Layer 2">
                            <g id="bcbaf18a-14bd-45a0-aa43-22a3a58337d6" data-name="Layer 1">


                                <g id="bubble5" className="bubble5Anim1" ref={(el) => (bubble5Anim1 = el)} data-name="11">
                                    <g style={{ clipPath: "url(#ab593b6e-c654-4a7d-9fa9-d77d58073eab)" }}>
                                        <g style={{ clipPath: "url(#b1a15e22-f370-4c5f-9226-6b6f7d1c2b7e)" }}>
                                            <image width="48" height="47" transform="translate(195.84 47.52) scale(0.48)"
                                                xlinkHref="data:image/png;base64,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" />
                                        </g>
                                    </g>
                                </g>
                                <g id="bubble6" className="bubble6Anim1" ref={(el) => (bubble6Anim1 = el)} data-name="10">
                                    <g style={{ clipPath: "url(#ef3958a2-412a-4f24-9c2b-e28cd6e099f2)" }}>
                                        <g style={{ clipPath: "url(#b671e4a1-a526-47ce-99a5-a3f78261f1b0)" }}>
                                            <image width="74" height="73" transform="translate(195.36 56.16) scale(0.48)"
                                                xlinkHref="data:image/png;base64,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" />
                                        </g>
                                    </g>
                                </g>
                                <g id="bubble7" className="bubble7Anim1" ref={(el) => (bubble7Anim1 = el)} data-name="9">
                                    <g style={{ clipPath: "url(#e1f94fd5-e8dd-4154-a8fb-96e4b94fae9d)" }}>
                                        <g style={{ clipPath: "url(#b6dbe08e-f00e-48ee-92b0-7f9ca9311791)" }}>
                                            <image width="56" height="56" transform="translate(164.64 196.32) scale(0.48)"
                                                xlinkHref="data:image/png;base64,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" />
                                        </g>
                                    </g>
                                </g>
                                <g id="bubble8" className="bubble8Anim1" ref={(el) => (bubble8Anim1 = el)} data-name="8">
                                    <g style={{ clipPath: "url(#e843966a-0f71-4ee6-833b-1428ad798fae)" }}>
                                        <g style={{ clipPath: "url(#bb63bc3f-f444-4db8-b975-4ecf8cd4d8ac)" }}>
                                            <image width="82" height="83" transform="translate(35.52 77.28) scale(0.48)"
                                                xlinkHref="data:image/png;base64,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" />
                                        </g>
                                    </g>
                                </g>
                                <g id="bubble9" className="bubble9Anim1" ref={(el) => (bubble9Anim1 = el)} data-name="7">
                                    <g style={{ clipPath: "url(#a6e539fb-1373-43c5-a9fc-830e50c11563)" }}>
                                        <g style={{ clipPath: "url(#e7102751-cffc-469b-93dd-04a703b88b3f)" }}>
                                            <image width="57" height="57" transform="translate(264.48 239.52) scale(0.48)"
                                                xlinkHref="data:image/png;base64,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" />
                                        </g>
                                    </g>
                                </g>
                                <g id="bubble11" className="bubble11Anim1" ref={(el) => (bubble11Anim1 = el)} data-name="5">
                                    <g style={{ clipPath: "url(#f329aa81-4401-443a-8edd-eda867cf3faf)" }}>
                                        <g style={{ clipPath: "url(#ab868cb3-2278-4a94-8c9a-3d2e8e6682e5)" }}>
                                            <image width="47" height="47" transform="translate(36 232.8) scale(0.48)"
                                                xlinkHref="data:image/png;base64,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" />
                                        </g>
                                    </g>
                                </g>
                                <g id="bubble12" className="bubble12Anim1" ref={(el) => (bubble12Anim1 = el)} data-name="4">
                                    <g style={{ clipPath: "url(#a8b3c531-4800-4fa7-8e6b-7c93af7ac366)" }}>
                                        <g style={{ clipPath: "url(#b34c1b5b-dc78-465b-9f5f-d9b9896d3657)" }}>
                                            <image width="61" height="61" transform="translate(253.92 4.32) scale(0.48)"
                                                xlinkHref="data:image/png;base64,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" />
                                        </g>
                                    </g>
                                </g>
                                <g id="bubble14" className="bubble14Anim1" ref={(el) => (bubble14Anim1 = el)} data-name="2">
                                    <g style={{ clipPath: "url(#e416c6fc-9e73-4ffa-b311-731ce35f3208)" }}>
                                        <g style={{ clipPath: "url(#f6e009af-8eb6-4b07-ab1f-8e0f9e8ebf45)" }}>
                                            <image width="63" height="63" transform="translate(249.12 135.84) scale(0.48)"
                                                xlinkHref="data:image/png;base64,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" />
                                        </g>
                                    </g>
                                </g>
                                <g id="bubble15" className="bubble15Anim1" ref={(el) => (bubble15Anim1 = el)} data-name="1">
                                    <g style={{ clipPath: "url(#a175f790-81a9-4634-b0ce-5161332adf56)" }}>
                                        <g style={{ clipPath: "url(#aebeb1e5-e234-4597-8d0d-525ee31aa038)" }}>
                                            <image width="50" height="49" transform="translate(46.08) scale(0.48)"
                                                xlinkHref="data:image/png;base64,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" />
                                        </g>
                                    </g>
                                </g>


                            </g>
                        </g>
                    </svg>




                </div>
            </div>

            <img class="squiggle1 lg:object-cover" src={Asset2} alt="squiggle line1"></img>

            <img class="squiggle2 lg:object-cover" src={Asset2} alt="squiggle line2"></img>

            <img class="dots object-fit lg:transform rotate-90" src={Asset3} alt="dots"></img>



            <NavLink to="/AboutMe" activeClassName="current" onClick={() => toloc("AboutSect")}>
                <svg id="downarow" class=" w-16 lg:w-8  mb-10 -mr-1 mt-80 animate-bounce" viewBox="0 0 20 20" fill="white">
                    <path fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"></path>
                </svg> </NavLink>

        </section>
    )


}

export default Home;
