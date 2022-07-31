import React, { useEffect, useState } from 'react'

import './About.css'
import ScrollButton from '../ScrollButton/ScrollButton'

const About = () => {
  return (
    <div className="about">
    <ScrollButton/>

      <div className="intro">
        <h4 className="itro-h">INTRODUCTION</h4>
        My name is Varad Kedarrao Kulkarni. An independent and self-motivated graduate with proven and tested Multitasking, problem solving and communucation skills. I am currently in last year of engineering. I am pursuing my B.Tech. degree from Government College of Engineering, Aurangabad. I love coding and developing new applications.
      </div>

      <br />

      <div className="educational-details">
        <h4 className="edu-h">EDUCATIONAL DETAILS</h4>
        <li>School name :- Pioneers Secondary School, Aurangabad</li>
        <li>10th marks :- 90.8% (From SSC)</li>
        <li>Junior college name :- Kulbhushan Junior College, Aurangabad</li>
        <li>12th marks :- 70.3% (From HSC)</li>
        <li>College name :- Government College of Engineering, Aurangabad</li>
        <li>Current CGPA :- 7.9</li>
      </div>

      <br />

      <div className="experience">
        <h4 className="exp-h">WORK EXPERIENCE</h4>
        <li>I have done internship in Java development. In this internship I typically test the Java swing application and created some classes to interact with the database. During my internship I also create testing report and some bugs in the application. Certificate, stipent and lots of knowledge are the perks of my internship.</li>
        <li>In have training in ReactJS to create a full stack web application also. In this training I study the fundamentals of HTML, CSS, Javascript, ReactJS. Also I do Stackoverflow clone project in this training also. </li>
        <li>I am leader of mini project group in our college during third year. In this we create a simple web app for e-commerce in which I handle the backend word using java servlet and AWS RDS mysql database. </li>
      </div>

      <br />

      <div className="achievements">
        <h4 className="ach-h">ACHIEVEMENTS AND FAVOURITE ACTIVITIES</h4>
        I like to create logics, solve problems. That is why I like to do backent programming. My favourite activities include learning new things. From this I like to learn topcs related to the mental and physical limits of the man or some inspiring stories of great persons. As a art I like to draw paintings.
        <p>I qualified GATE exam in first attempt in my third year. I have 3 stars in <a target="_blank" href="https://www.codechef.com/users/triple_123">codechef</a> and 5 stars in <a target="_blank" href="https://www.hackerrank.com/Varad_Kulkarni">hackerrank</a> in JAVA and 4 stars in MYSQL.</p>
      </div>

      <div className="fav-subs">
        <h4>FAVOURITE SUBJECTS</h4>
        <li>Object Oriented Programming</li>
        <li>Data Structures</li>
        <li>Database Management System</li>
        <li>Operrating System</li>
      </div>

      <div className="skills">
        <h4>SKILLS</h4>
        <li>JAVA</li>
        <li>Problem Solving</li>
        <li>Data Structures</li>
        <li>Mathematics</li>
      </div>

      <div className="certification"></div>

    </div>
  )
}

export default About