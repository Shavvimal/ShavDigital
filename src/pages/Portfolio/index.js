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
      <h1 class="bodyheadercol text-left text-4xl font-extrabold">My Portfolio</h1>
      <h2 class="text-left text-2xl py-3 italic" > Please feel free to check out some of my work! </h2>
      <div class="">
        <NavLink to="/Portfolio/Web" activeClassName="current  ">Web</NavLink>
        <NavLink to="/Portfolio/Graphic" activeClassName="current">Graphic</NavLink> </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 w-auto h-auto pt-8 p-4 ">
        <Switch>
          <Route exact path="/">{renderWebCards()}</Route>
          <Route path="/AboutMe">{renderWebCards()}</Route>
          <Route path="/TechStack">{renderWebCards()}</Route>
          <Route path="/Contact">{renderWebCards()}</Route>


          <Route exact path="/Portfolio">

            {renderWebCards()}

          </Route>

          <Route path="/Portfolio/Web">

            {renderWebCards()}

          </Route>
          <Route path="/Portfolio/Graphic">

            {renderGraphicsCards()}


          </Route>
        </Switch>

      </div>

    </div>


  </>
  )


}

export default Portfolio;
