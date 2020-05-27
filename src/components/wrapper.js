import React from 'react'
import Contact from './contact'
import Portfolio from './portfolio'
import Main from './main'
import '../index.css'

const Wrapper = () => (
        <div>
        <section className="hero nav-header is-small">
          <div className="hero-body">
            <div className="container">
              <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="para-border has-nectarine-border skew-5-left">
                  <div className="reverse-skew-5-left">
                    <h1 className="is-size-1-desktop is-size-2-tablet is-size-2-mobile has-text-weight-bold title">
                      Kevin Hall
                    </h1>
                    <h6 className="title is-size-5">Full Stack Software Developer</h6>
                  </div>
                </div>
                <div className="navbar navbar-end title">
                  <a className="navbar-item" href="index.html">
                    Home
                  </a>
                  <a className="navbar-item" href="projects.html">
                    Projects
                  </a>
                  <a className="navbar-item" href="contact.html">
                    Contact
                  </a>
                </div></nav>
            </div>
          </div>
        </section>
    <Main />
    <Portfolio />
    <Contact />
      <footer className="footer">
        <div className="content">
          <p className="title has-text-centered">
            ©2020 Kevin Hall
          </p>
        </div>
      </footer>
        </div>
      );

  export default Wrapper