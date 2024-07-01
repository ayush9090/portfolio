import React from 'react'
import './about.css'
import ME from '../../assests/me-about.jpg'
import {CgWorkAlt} from 'react-icons/cg'
import {FiUsers} from 'react-icons/fi'
import {BsFolderCheck} from 'react-icons/bs'
const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <CgWorkAlt className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <BsFolderCheck className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>{" "}
          <p>
            With over 3 years of immersive experience in software development,
            I've meticulously honed my craft in crafting high-impact web
            applications. My journey spans across dynamic industries within
            software development firms, where I've meticulously sculpted my
            skills to optimize performance, elevate user engagement, and
            streamline project delivery.
          </p>{" "}
          <p>
            During my tenure at Saviom Software, I orchestrated ExpressJs
            projects with finesse, shaping the landscape of CRM web application
            development. My contributions were instrumental in architecting an
            interactive dashboard adorned with pie charts and bar graphs,
            amplifying functionality and garnering rave reviews from users.
            Notably, my leadership in spearheading cross-functional teams led to
            a remarkable 20% surge in user engagement.
          </p>{" "}
          <p>
            At the Indian Institute of Hardware Technology, I led by example,
            leveraging cutting-edge technologies like Express.js and React.js to
            sculpt seamless user experiences. My initiatives didn't just stop at
            development; I engineered solutions that optimized query efficiency
            by an impressive 20% and slashed page loading times by half, setting
            new standards of excellence.
          </p>{" "}
          <p>
            Blessed with a versatile skill set spanning JavaScript, Python,
            React.js, Express.js, and more, I thrive in dynamic environments,
            catalyzing innovation and fostering collaboration. My agile mindset,
            coupled with a relentless pursuit of excellence, positions me as a
            catalyst for transformative change.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About