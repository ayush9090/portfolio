import React from 'react'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent work</h5>
      <h2>portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <h3>This is a portfolio1 item title</h3>
          <a href="httt://github.com" className="btn">
            Github
          </a>
          <a href="httt://github.com" className="btn btn-primary">
            Live demo
          </a>
        </article>
      </div>
    </section>
  );
}

export default Portfolio