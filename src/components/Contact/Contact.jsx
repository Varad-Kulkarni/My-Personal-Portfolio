import React from 'react'

import './Contact.css'

const Contact = () => {
  return (
    <div>
    <footer>
        <div className="footer-content">
            <h3>CONTACT US</h3>
            <p>This is personal portfolio website designed by me with help of the reactJS. For more contacts refer following.</p>
            <ul className="socials">
                <li><a href="https://www.facebook.com/varad.kulkarni.3701" target="_blank"><i className="fa fa-facebook"></i></a></li>
                <li><a href="https://twitter.com/Varadku69896818" target="_blank"><i className="fa fa-twitter"></i></a></li>
                <li><a href = "mailto: kulkarnivarad963@gmail.com" target="_blank"><i className="fa fa-envelope"/></a></li>
                <li><a href="https://www.linkedin.com/in/varad-k-kulkarni" target="_blank"><i className="fa fa-linkedin-square"></i></a></li>
            </ul>
        </div>

    </footer>
    </div>
  )
}

export default Contact