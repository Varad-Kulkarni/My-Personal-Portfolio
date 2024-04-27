import React from 'react'

import './About.css'
import experienceIcon from '../../assets/icons/Experience_icon.gif'
import educationIcon from '../../assets/icons/Education_icon.png'
import achievementsIcon from '../../assets/icons/Achievements_icon.png'

const About = () => {
  return (
    <div>
      <div className="experience">
        <h1 className="h1-heading">Experience <img src={experienceIcon} /></h1>
        <div className='left-line'>
          <ul>
            <li><h3>Software Engineer at <span className='siemens-name'>Siemens</span> </h3>
                <h6>(07/2023 – current)</h6>
              <ul>
                <li><b>Completed 3+ features</b> end-to-end for inplace project.</li>
                <li><b>Given release presentations</b> about new features to customers with completion of all pre-release activities</li>
                <li>Given demo presentations about tasks/features to architects/managers.</li>
                <li>Documented all new changes for reference of customers.</li>
                <li>Completed some tasks with <b>optimal algorithms/logic</b> approved by architect</li>
                <li>For our project we use languages like <b>python</b> and <b>ansible</b></li>
                <li>We use platforms like <b>AWS, harshicorp vault, jfrog</b> and <b>ansible-tower</b></li>
              </ul>
            </li>
          </ul>

          <ul>
            <li><h3>Software Engineer at <span className='pratiti-name'>Pratiti Technologies</span></h3>
            <h6>(01/2023 – current)</h6>
              <ul>
                <li><b>Working at client-side (Siemens)</b> on project.</li>
                <li>Done training on <b>C#, C++</b> and <b>web development</b> when I have graduate engineer trainee here</li>
                <li>Completed daily assignments given in the training</li>
                <li><b>Completed project (library management system)</b> as given after training and implement suggestions after review of project.</li>
              </ul>
            </li>
          </ul>

          <ul>
            <li><h3>Intern React developer at <span className='shardings-name'>Shardings</span></h3>
            <h6>(10/2022 – 11/2022)</h6>
              <ul>
                <li>Created <b>react native</b> currency converter application.</li>
                <li>Attending daily meetings.</li>
                <li>Here we use <b>google cloud platform</b> for our application</li>
              </ul>
            </li>
          </ul>

          <ul>
            <li><h3>Intern Java developer at <span className='vderive-name'>VDerive</span></h3>
            <h6>(03/2022 – 03/2022)</h6>
              <ul>
                <li>Manually <b>test the application</b> and fixed the bugs in application.</li>
                <li>Created <b>UML diagram</b> of application.</li>
                <li>Created <b>testing document</b> for application</li>
                <li><b>Created a java class</b> to handle input/output in CSV file using given methods.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="education">
        <h1 className="h1-heading">Education <img src={educationIcon} /></h1>
        <div className="left-line">
          <ul>
            <li><b>B. Tech</b> in <b>computer science and engineering</b> (2019 – 2023) 
              <p><b>Government college of engineering, Aurangabad (CGPA = 8.1)</b></p></li>
            <li>High school education in science (2017 – 2019) 
              <p>Kulbhushan Junior College, Aurangabad. <b>(MHT-CET percentile = 96.96%)</b></p></li>
            <li>School education 
              <p>in Pioneers secondary school with <b>10th percentage of 90.8%</b>.</p></li>
          </ul>
        </div>
      </div>

      <div className="achievements">
        <h1 className="h1-heading">Achievements <img src={achievementsIcon} /></h1>
        <div className="left-line">
          <ul>
            <li>Had <b>1600+ contest rating</b> on leetcode. (<a href="https://leetcode.com/u/Varad_Kulkarni3/">leetcode profile</a>)</li>
            <li>Handled leader works as mini project and main project group leader</li>
            <li>Have 5 stars in JAVA and 4 stars in MYSQL in hackerrank. (<a href="https://www.hackerrank.com/profile/Varad_Kulkarni">hackerrank profile</a>)</li>
            <li>Solved 29+ contests on codechef and have reached 3 stars on codechef. (<a href='https://www.codechef.com/users/triple_123' >codechef profile</a>)</li>
            <li>I have qualified GATE exam in first attempt in 3rd year</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About