import React, { useEffect, useRef, useState } from 'react';
import './style.css'
import { NavLink } from 'react-router-dom';
import { } from "./assets/animate.js"
import { Card } from '../../components';
import { Switch, Route } from 'react-router-dom';


const Portfolio = () => {

  const shuffle = (arr) => {
    let c = arr.length, rand;
    while (0 !== c) {
      rand = Math.floor(Math.random() * c);
      c--;
      [arr[c], arr[rand]] = [
        arr[rand], arr[c]];
    }
    return arr;
  }


  const [WebCards, setWebCards] = useState(

    [{ Name: "Fact-Ori", Description: "Fact-ori is a community fact sharing site that allows users to post and share interesting facts. The site has a range of functionality for users, including posting anonymous fact entries, add gifs from giphy in an entry using the giphy API, view other peoples' entries, react to other peoples’ entries with an emoji & comment on other people’s entries.", gifurl: "https://res.cloudinary.com/shavcloud/image/upload/v1629204297/ezgif-2-1e3493f6f1dc_yl4bin.gif", repoLink: "https://github.com/Shavvimal/Fact-Ori", siteLink: "https://fact-ory.netlify.app/", arrayOfWords: ["HTML", "JavaScript", "Tailwind CSS", "Node.js", "Express", "Docker"], graphic: false },
    { Name: "The Treasury", Description: "The Treasury allows users to track their investment portfolio, with their chosen stocks, monitoring the individual price changes, returning their profit/loss on their investments, trace the movement of their individual holdings and get a general idea of how their portfolio is doing. It uses Authentication and Authorization and a login page. ", gifurl: "https://res.cloudinary.com/shavcloud/image/upload/v1629204296/ezgif-2-f31a7e2a6834_gbmlom.gif", repoLink: "https://github.com/Shavvimal/Galic-NaN", siteLink: "https://the-treasury.netlify.app/", arrayOfWords: ["Bcrypt", "JWT", "JavaScript", "Express", "Node.js", "Docker", "SQL", "AWS", "Tailwind CSS", "Greensock"], graphic: false },
    { Name: "Anonymous Blog site", Description: "This site was a 23-hour code challenge practice clone of telegra.ph, with a minimalistic front-end. PostgreSQL is used in cojunction with a database API served on an AWS EC2 instance as a backend to store posts. The site allows users simply to post anonymously, and using AWS circumvents the issue of alternatives like Heroku going to sleep.", gifurl: "https://res.cloudinary.com/shavcloud/image/upload/v1629204293/ezgif-3-9a21da11874e_jts6gr.gif", repoLink: "https://github.com/Shavvimal/LAP_2_Code_Challenge_Parent", siteLink: "https://anon-blog.netlify.app/", arrayOfWords: ["Amazon", "AWS", "PostgreSQL", "Node.js", "Express", "Docker"], graphic: false },
    { Name: "Quizzo", Description: "Quizzo is a fast-paced, online trivia game for all the family. Quizzo is intended as an app where Players are able to choose a level and topic for their trivia game, before they battle it out to reach the top ranks of the leader board. The basic premise of Quizzo is speed. In Quizzo, players have to think on their feet to answer trivia before the time allocated for each question runs out.", gifurl: "https://res.cloudinary.com/shavcloud/image/upload/v1629484643/ezgif.com-gif-maker_10_sd9ltw.gif", repoLink: "https://github.com/Shavvimal/Quizzo_Client", siteLink: "https://quizzo-o.netlify.app/", arrayOfWords: ["Socket.io", "React", "Redux", "React Testing Library", "Docker", "SQL", "AWS", "Tailwind CSS"], graphic: false }]

  )


  const renderWebCards = () => shuffle(WebCards).map((t) => <Card key={t.Name} siteName={t.Name} description={t.Description} gifurl={t.gifurl} repoLink={t.repoLink} siteLink={t.siteLink} arrayOfWords={t.arrayOfWords} graphic={t.graphic} />)





  const [GraphicsCards, setGraphicsCards] = useState(

    [{ Name: "Galaxy Girl", Description: "This was my first ever digital painting using a graphics tablet. This was a really fun piece to make while learning all the basics of working in a new and different medium. ", gifurl: "https://res.cloudinary.com/shavcloud/image/upload/v1629206631/ezgif.com-gif-maker_8_pglph5.gif", repoLink: "https://www.deviantart.com/shavgraphics/art/Galaxy-Girl-847582040", siteLink: "https://youtu.be/jUyj_YXad_k", arrayOfWords: ["Adobe PhotoShop"], graphic: true },
    { Name: "Zuko on the Beach", Description: "After rewatching one of my favorite shows of all time, Avatar: The Last Airbender, I decided to do a fanart of my favorite scarred Prince - Prince Zuko.", gifurl: "https://res.cloudinary.com/shavcloud/image/upload/v1629206463/ezgif.com-gif-maker_7_layonw.gif", repoLink: "https://www.deviantart.com/shavgraphics/art/Zuko-868343159", siteLink: "https://youtu.be/2audU-MHQ3Q", arrayOfWords: ["Adobe PhotoShop"], graphic: true },
    ]

  )



  const renderGraphicsCards = () => shuffle(GraphicsCards).map((t) => <Card key={t.Name} siteName={t.Name} description={t.Description} gifurl={t.gifurl} repoLink={t.repoLink} siteLink={t.siteLink} arrayOfWords={t.arrayOfWords} graphic={t.graphic} />)





  return (<><a class="mb-10" id="portfoliosect" ></a>



    <div id="portfolio" class="flex flex-col justify-center md:justify-start pt-8 md:pt-12 px-8 md:px-24  lg:px-44 h-auto ">
      <h1 class="bodyheadercol text-left text-4xl font-extrabold">A Trusted Ad Management Company</h1>
      <h2 class="text-left text-2xl py-3 italic" > Just a few simple steps to get started </h2>
      <p class="text-left text-xl"> As a prominent PPC management company, we enable your business to reach successful heights with our diverse paid ad marketing services.
      </p>
      <div id="banner" className="w-full py-4 px-10 rounded-full m-4 text-center text-white gradientTech mx-auto"> Strict NDA Terms | No Additional Charges | Cost-effective Service | Flexible Models</div>
      <div class="grid grid-cols-3 gap-8 w-full text-center mx-auto px-40" id="grid">
        <div className="flex flex-col"><div > <h1 className="gradientTech rounded-full text-white py-2 mx-10" > 1 </h1></div>
          <h2>Define your goals</h2>
          <p>We help you clearly define realistic marketing goals & budgets</p>
        </div>

        <div className="flex flex-col"><div > <h1 className="gradientTech rounded-full text-white py-2 mx-10" > 2 </h1></div>
          <h2>Grow your audience</h2>
          <p>We dramatically increase your website traffic, grow your email lists and segment customer data</p>
        </div>

        <div className="flex flex-col"><div > <h1 className="gradientTech rounded-full text-white py-2 mx-10" > 3 </h1></div>
          <h2>Exceed your expectations</h2>
          <p>Your growing audience enables us to utilise data to improve targeting and increase profitability of your advertising</p>
        </div>
      </div>
    </div>


  </>
  )


}

export default Portfolio;
