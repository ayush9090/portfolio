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
              <small>2+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>100+ Worlwide</small>
            </article>
            <article className="about__card">
              <BsFolderCheck className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
            I am a highly motivated and skilled professional with 1 year of
            working experience in .NET development. With a strong foundation in
            .NET and expertise in JavaScript (including Node.js and React),
            Python, HTML/CSS, and vanilla JavaScript, I possess a versatile
            skill set that allows me to develop robust and efficient web
            applications.
          </p>{" "}
          <p>
            Throughout my career, I have successfully delivered projects by
            leveraging my solid understanding of software development principles
            and my ability to adapt to new technologies. I thrive in
            collaborative environments and excel at problem-solving and
            troubleshooting complex technical issues.
          </p>{" "}
          <p>
            Passionate about continuous learning, I am committed to staying
            updated with the latest industry trends and emerging technologies. I
            have a keen eye for detail, ensuring high-quality code and
            delivering exceptional user experiences. My goal is to contribute my
            skills and knowledge to a dynamic organization that values
            innovation, teamwork, and professional growth.
          </p>{" "}
          <p>
            I am actively seeking new opportunities in the field of software
            development where I can apply my expertise, expand my skill set, and
            make a meaningful impact. Let's connect and explore potential
            collaborations or exciting career prospects
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