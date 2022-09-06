import React from "react";
import style from "./CoursesSection.module.css";

const SectionDescription = (props) => {
  return (
    <>
    <h1>A broad selection of courses</h1>

    <h3>
        Choose from 204,000 online video courses with new additions published
        every month
    </h3>

    <div id={style.tabsHeaders}>
       <h4 className={`${style.tabutton}`}>Python </h4>
       <h4 className={`${style.tabutton}`}>Excel </h4>
       <h4 className={`${style.tabutton}`}>Web Development</h4>
       <h4 className={`${style.tabutton}`}>JavaScript </h4>
       <h4 className={`${style.tabutton}`}>DataScience </h4>
       <h4 className={`${style.tabutton}`}>AWS Certification </h4>
       <h4 className={`${style.tabutton}`}>Drawing </h4>
      
    </div>
    <div className={`${style.coursesborder}`}>

      <h2>Expand your career opportunities with Python</h2>
      <p className={`${style.paragraphdescr}`}>
      Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language.
       Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning.
        You’ll learn how to build everything from games to sites to apps. 
        Choose from a range of courses that will appeal to both beginners and advanced developers alike.
      </p>
      <button className={`${style.explorebtn}`}>Explore Python</button>
      {props.children}
    </div>
    </>
  );
};

export default SectionDescription;
