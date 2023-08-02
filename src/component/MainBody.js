import React from 'react';
import { NavLink } from 'react-router-dom';
const Frame1 = () => {
  return (
    <div className="leftFrame1">
      <h1 className="quote">
        "Turning ideas into beautifully designed and functional digital experiences."
      </h1>
      <div className="login">
          <NavLink to="/login">Login</NavLink>
        </div>
      <div className="Register login">
        <NavLink to="/signup">Register</NavLink></div>
    </div>
  );
};

const HTML1 = () => {
  return (
    <div className="html1">
    </div>

  );
};

const CSS1 = () => {
  return (
    <div className="css1">
    </div>
  );
};

const JavaScript1 = () => {
  return (
    <div className="javascript1">
    </div>
  );
};

const Frame2 = () => {
  return (
    <div className="main2">
      <div>
        <a href="https://www.w3schools.com/js/DEFAULT.asp">
          <img className="im1" src={"./images/image.png"} alt="" />
        </a>
      </div>
      <div className="content">
        <p>
        <b>HTML, or Hypertext Markup Language,</b> is a markup language for the web that defines the structure of web pages
        It is one of the most basic building blocks of every website, so it's crucial to learn if you want to have a career in web development.
        In this article, I will walk you through what HTML is about in detail, how it does things on web pages, and we'll also touch on a really cool part of HTML
        </p>
        {/* Add more content here */}
      </div>
    </div>
  );
};

const CSSFrame = () => {
  return (
    <div className="main1">
      <div>
        <a href="https://www.w3schools.com/Css/">
          <img className="im2" src={"./images/css.webp"} alt="" />
        </a>
      </div>
      <div className="content">
        <p>
          <b>CSS</b> stands for Cascading Style Sheets.It is a style sheet
          language which is used to describe the look and formatting of a
          document written in markup language.It provides an additional feature
          to HTML. It is generally used with HTML to change the style of web
          pages and user interfaces.It can also be used with any kind of XML
          documents including plain XML, SVG and XUL.
        </p>
        {/* Add more content here */}
      </div>
    </div>
  );
};

const JavaScriptFrame = () => {
  return (
    <div className="main">
      <div>
        <a href="https://www.w3schools.com/js/default.asp">
          <img className="img3" src={"./images/java1.png.webp"} alt="" />
        </a>
      </div>
      <div className="content">
        <p>
        <b>JavaScript </b>is a high-level, interpreted programming language primarily used to add interactivity and dynamic behavior to websites. It was created by Brendan Eich while he was working at Netscape and was first released in 1995. JavaScript is now one of the most widely used programming languages and is supported by all major web browsers.
        </p>
        {/* Add more content here */}
      </div>
    </div>
  );
};

const Footer = ()=>{
  return(
    <div className='footer1'>
       
          <div className='alignment'>
              <h1>Contact Us</h1>
              Email:<br></br>
              dream125group6@gmail.com
            </div>
            <div>
              <h1>Follow Us</h1>
              <a href="#" class="footer2">Linked In</a><br></br>
              <a href="#" class="footer2">GitHub</a>
          </div>
          <div className='alignment'>
            <h1>OnlineEditor</h1>
              Designed By Dream125 Group6<br></br>
              
              <a href="#top" class="footer2">Goto Top</a>
          </div>
        </div>
      
  );
};


const App1 = () => {
  return (
    <div className="mainContainer">
      <div className="frame1Container">
        <Frame1 />
        <div className="rightFrame1">
          <h1></h1>
          <HTML1 />
          <CSS1 />
          <JavaScript1 />
        </div>
      </div>
      <hr />
      <Frame2 />
      <hr />
      <CSSFrame />
      <hr />
      <JavaScriptFrame />
      <Footer/>
    </div>
  );
};

export default App1;