import React from 'react'

import "./Projects.css"

import stack_overflow_clone from "../../assets/stackoverflow-clone.png"
import ecart_img from "../../assets/e_commerce_site.png"
import employee1 from "../../assets/Emp_Add_emp_success.png"
import notepad2 from "../../assets/Notepad-3.png"
import calci from "../../assets/Calculator_Swing.png"
import todos from "../../assets/todos_list.png"
import ScrollButton from '../ScrollButton/ScrollButton'

const Projects = () => {
  return (
    <div className="projects">
      <ScrollButton/>

      <button type="button" class="btn btn-danger btn-floating btn-lg" id="btn-back-to-top">
        <i class="fas fa-arrow-up"></i>
      </button>

      <div className="e-commerce-webapp">
        <h3>I. E-COMMERCE WEBSITE</h3>
        <img src={ecart_img} alt="e-commerce-website img" className="e-com-img img-fluid" />
        <h5>What is e-shopping?</h5>
        <li>Online shopping is something that most of us take for granted these days. We enjoy the convenience and other benefits of shopping online.</li>
        <li>However it wasn’t that long ago that we couldn’t shop online from home at all. Online shopping didn’t even develop until the mid-1990’s.</li>
        <li>When we remember that, we realize that we’re still in the early stages of online shopping. </li>
        <li>We’re still learning what works, what doesn’t    and how we can improve this great shopping option so that it’s even better in the future than it is today.</li> <br />

        <h5>Goals</h5>
        <li>Manage Products In Various Categories,</li>
        <li>Maintain Admin Panel</li>
        <li>User Profiles</li>
        <li>Feedback And Response </li> <br />

        See full power point presentation<a href="https://docs.google.com/presentation/d/1Qe-xIR555QUEjJ10606Qg5Wp-HHDHrDH/edit?usp=sharing&ouid=113090242034712433633&rtpof=true&sd=true" target="_blank" className='link-a'> here</a>


      </div >

      <div className="stack-overflow-clone">
        <h3>II. STACK OVERFLOW CLONE</h3>
        <img src={stack_overflow_clone} alt="stackoverflow clone img" className="stack-img img-fluid" />
        <h5>What is stack-overflow?</h5>
        <li>It is website where we can upload a question to get our answer.</li>
        <li>answer is given by different users</li><br />

        <h5>Features</h5>
        <li>User can create new account for login</li>
        <li>User can upload question or give answer</li>
        <li>User can upvote or downvote question</li>
        <li>User can edit his profile</li>
        <li>User can see others profile also</li> <br />

        See website <a href="https://stack-overflow-clone-varad.netlify.app/" target="_blank" className='link-a'> here</a>
      </div>

      <div className="employee-management-system">
        <h3>III. EMPLOYEE MANAGEMENT SYSTEM</h3>
        <div className="emp-img">
          <img src={employee1} alt="employee-management-system img" className="emp-img-1 img-fluid" />
          {/* <img src={employee2} alt="employee-management-system img" className="emp-img-2"/> */}
        </div>

        <h5>Overview</h5>
        <li>This is employee management system for admin.</li>
        <li>Here, admin can add, update, remove or view employee details.</li>
        <li>Admin only login if he/she have proper username or password.</li>
        <li>For this I use java swings, Mysql and Vscode as editor.</li> <br />

        See full power point presentation<a href="https://docs.google.com/presentation/d/1aua2j8hm8oFxB5TjPnRPx9_R-YHdsQh3/edit?usp=sharing&ouid=113090242034712433633&rtpof=true&sd=true" target="_blank" className='link-a'> here</a>
      </div>

      <div className="notepad">
        <h3>IV. NOTEPAD</h3>
        <div className="notepad-img">
          {/* <img src={notepad1} alt="notepad img" className="notepad-img-1"/> */}
          <img src={notepad2} alt="notepad img" className="notepad-img-2 img-fluid" />
        </div>
        <h5>Overview</h5>
        <li>To create notepad I use Java swing framework.</li>
        <li>Notepad is still a awesome thing to use and to build also.</li>
        <li>Here, I use File I/O streams to open file.</li>
        <li>Also, in this I create Copy, paste and cut options.</li>
        <li>Thus, this is simple notepad with open menu.</li><br />

        See full power point presentation<a href="https://docs.google.com/presentation/d/1megUaa4iqoN9bSXWJhQU7ihESgFVMu1Q/edit?usp=sharing&ouid=113090242034712433633&rtpof=true&sd=true" target="_blank" className='link-a'> here</a>

      </div>

      <div className="calculator">
        <h3>V. CALCULATOR</h3>
        <img src={calci} alt="calculator img" className="calc-img img-fluid" />
        <h5>Overview</h5>
        <li>Still calculator is important in various places like while conduction test, to calculate prizes and many more.</li>
        <li>Here, we use swing framework to create calculator.</li>
        <li>In calculator I just use basic operations like Addition, Substraction, Multiplication and division.</li><br />
        See full power point presentation<a href="https://docs.google.com/presentation/d/1APhzVpGAv1PCeCQ_h5uOyC83oexZM1sY/edit?usp=sharing&ouid=113090242034712433633&rtpof=true&sd=true" target="_blank" className='link-a'> here</a>
      </div>

      <div className="todos-list">
        <h3>VI. TODO'S LIST</h3>
        <img src={todos} alt="todo's-list img" className="todos-img img-fluid" />
        <h5>Overview</h5>
        <li>In today’s busy world we need to track out works and have to made future plans.</li>
        <li>Not everytime we will recognize all works.</li>
        <li>We have solution on this problem, Create a todos list at anytime and just track all your works.</li><br />
        See full power point presentation<a href="https://docs.google.com/presentation/d/1lBL64c29hls_lkOXuLTSS6m_bK5f5YfX/edit?usp=sharing&ouid=113090242034712433633&rtpof=true&sd=true" target="_blank" className='link-a'> here</a>
      </div>

    </div >
  )
}

export default Projects