import React, { useState } from "react";
import { Home, AboutMe, TechStack, Portfolio, Contact } from "./pages";
import {
  Blog,
  BlogDetail,
  BlogNav,
  Category,
  BlogList,
  CategoryChapter,
} from "./blog";
import { Header, Modal, Aside, Layout } from "./layout";
import { Switch, Route } from "react-router-dom";
import "./styles/app.css";

function App() {
  const [ModalClose, setModalClose] = useState(false);

  const handleModalClose = () => {
    setModalClose(!ModalClose);
  };

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Switch>
        <Layout>
          <Route exact path="/">
            <Aside />
            <Home />
            <AboutMe />
            <TechStack />
            <Portfolio />
            <Contact />
            {/* <Modal isItOpen={ModalClose} updateOpen={handleModalClose} /> */}
          </Route>
          <Route exact path="/blog">
            <Blog />
            <BlogList />
          </Route>
          <Route exact path="/blog/category/:category">
            <Category />
          </Route>
          <Route exact path="/blog/category/:category/:chapter">
            <CategoryChapter />
          </Route>
          <Route exact path="/blog/:slug">
            <BlogDetail />
          </Route>
        </Layout>
      </Switch>
    </>
  );
}

export default App;
