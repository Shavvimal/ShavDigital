import React, { useEffect, useRef } from 'react';
import './style.css'
import { } from "./assets/animate.js"
import mainBubble from './assets/Bubble_main.svg'
import { NavLink } from 'react-router-dom';


const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const postData = {
            "name": e.target.name.value,
            "email": e.target.email.value,
            "message": e.target.messageShav.value
        };

        const options = {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: { "Content-Type": "application/json" }
        };

        fetch('/api/*', options)
            .then(r => r.json())
            .then(() => e.target.reset())
            .catch(console.warn)
    };

    let toloc = (id) => {
        window.location.hash = id
    }

    return (
        <>    <a id="contactsect" ></a>
            <div class="w-full flex-col bg-svg rounded-t-full py-10 mt-20 ">

                <div id="contact-card" class=" absolute container border shadow-xl m-1 w-5/6 lg:w-2/3 rounded-xl overflow-hidden mt-10 m-auto bg-white  relative">
                    <div class="container-content p-10 lg:p-20">

                        <h1 class="bodyheadercol text-left text-4xl font-extrabold">Contact Me</h1>
                        <h2 class="text-left text-2xl py-3 italic" > Please drop a message to say hello and get in touch! I‘d love to hear from you.  </h2>


                        <form class="flex flex-col " onSubmit={handleSubmit}>

                            <div class="flex flex-col pt-4">
                                <label htmlFor="name" class="text-left text-xl">Name:</label>
                                <input class=" text-xl shadow border rounded-md w-full py-2 px-3 text-gray-700 mt-1 leading-tight  outline-none focus:outline-none focus-within:border-blue-400 transition-all duration-500
                        focus:border" name="name" type="text" placeholder="Shav" />
                            </div>

                            <div class="flex flex-col pt-6">
                                <label htmlFor="email" class="text-left text-xl">Email:</label>
                                <input class=" text-xl shadow border rounded-md w-full py-2 px-3 text-gray-700 mt-1 leading-tight  outline-none focus:outline-none focus-within:border-blue-400 transition-all duration-500
                        focus:border" name="email" type="email" placeholder="Shav@example.com" />
                            </div>



                            <div class="flex flex-col pt-6 ">
                                <label htmlFor="messageShav" class="text-left text-xl">Message:</label>
                                <textarea class=" h-96 text-xl shadow border rounded-md w-full py-2 px-3 text-gray-700 mt-1 leading-tight  outline-none focus:outline-none focus-within:border-blue-400 transition-all duration-500
                        focus:border" name="messageShav" type="text" placeholder="Hello!" />
                            </div>

                            <input class=" text-white bg-custom rounded-full focus:bg-purple-700 w-auto px-28 font-bold text-lg mx-auto p-2 mt-8" name="message" type="submit" value="Get In Touch" />


                        </form>

                        <div class="flex flex-row justify-around mt-10 mb-2 lg:mb-0 ">
                        <a id="icon1contact" href="https://www.linkedin.com/in/shavvimalendiran/"> 
                                <div class=" relative mx-auto w-full h-full  flex flex-row parentBubbleContact">

                                    <img class="w-1/2 h-1/2 ContactBubble" src={mainBubble} alt="mainBubble1" />

                                    <svg class="w-1/2 h-1/2 iconContact" fill="#8553FE" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>

                                </div>
                                <div class="techWord flex justify-center">
                                    <h3 class=" border-2 px-3 py-1 border-black rounded-full text-sm text-center  font-medium  text-black">LinkedIn</h3></div>
                            </a>


                            <a id="icon2contact" href="mailto:shavhugan@gmail.com?subject=Hello%20Shav&body=Hi%20Shav," >
                                <div class=" relative mx-auto w-full h-full  flex flex-row parentBubbleContact">

                                    <img class="w-1/2 h-1/2 ContactBubble" src={mainBubble} alt="mainBubble1" />

                                    <svg class="w-1/2 h-1/2 iconContact" fill="#8553FE" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" /></svg>

                                </div>
                                <div class="techWord flex justify-center">
                                    <h3 class=" border-2 px-3 py-1 border-black rounded-full text-sm text-center  font-medium  text-black">Email</h3></div>
                            </a>

                            <a id="icon3contact" href="https://github.com/Shavvimal">
                                <div class="relative mx-auto w-full h-full  flex flex-row parentBubbleContact">

                                    <img class="w-1/2 h-1/2 ContactBubble" src={mainBubble} alt="mainBubble1" />

                                    <svg class="w-1/2 h-1/2 iconContact" fill="#8553FE" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>

                                </div>

                                <div class="techWord flex justify-center">
                                    <h3 class=" border-2 px-3 py-1 border-black rounded-full text-sm text-center  font-medium  text-black">GitHub</h3></div>

      
                            </a>

                            
                        </div>

                    </div> </div>


                    <div class="text-white w-auto  border-white mx-10 flex flex-row justify-around mb-10">
                    <NavLink exact to="/" activeClassName="current" onClick={() => toloc("homesect")}>Home</NavLink>
                    <NavLink to="/AboutMe" activeClassName="current" onClick={() => toloc("AboutSect")}>About Me</NavLink>
                    <NavLink to="/TechStack" activeClassName="current" onClick={() => toloc("Techsect")}>Tech Stack</NavLink>
                    <NavLink to="/Portfolio" activeClassName="current" onClick={() => toloc("portfoliosect")}>Portfolio</NavLink>
                    <NavLink to="/Contact" activeClassName="current" onClick={() => toloc("contactsect")}>Contact Me</NavLink>
                </div>
                <div class="text-white w-auto border-t-2 border-white mx-20 flex flex-row justify-between px-6 lg:px-16 pt-6">
                    <p class="mt-5"> © 2021 Shav Vimalendiran </p>
                    <svg class="w-12 h-12" fill="white" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"><path d="M19.56,11.85l4.24-1.39c-.21-.55-3.28.32-3.81.47a62.26,62.26,0,0,0-7.09,2.59c-1.09.54-2.18,1-3.25,1.63-.41-.42-1.56-.92-1.39-1.82.37-1.9,7.2-6.16,9.83-6.11h0c-.22,1.11-2.25,3-3.33,4l.08.12c1.05.2,4-2.41,4.21-3.16a3.62,3.62,0,0,0-.56-2.66c1.23-.83,3.16-3,1.21-4.5A2.89,2.89,0,0,0,18.29.39C19.49,1,20.23,1.93,19.77,3,19,4.62,16.26,4.69,14.28,5.26A17.89,17.89,0,0,0,7.76,8.71c-.89.73-2.4,2.33-1.71,4,.59,1.43,2.41,2.46,2.67,2.9-1.94.74-7.93,4.31-8.46,6A1.91,1.91,0,0,0,1,23.22c1,.82,3.4,0,4.44-.29,3.06-1,9.05-3.62,4.68-7.2h0C12.87,14.05,16.26,13,19.56,11.85ZM1.26,21.3a35.61,35.61,0,0,1,5.12-3.61l2.38-1.37C8.76,18,2.74,21,1.26,21.3Z" /></svg>
                </div>

            </div>



        </>
    )


}

export default Contact;
