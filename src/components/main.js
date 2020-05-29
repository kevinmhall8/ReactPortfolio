import React from 'react'
import '../index.css'
import ProfilePic from './images/profilepic.jpg'

const Main = () => (
  
        <section className="hero">
          <div className="hero-body">
                <h2 className="is-size-1">About Me</h2>
            <div className="container notification bio-and-pic">
              <div className="columns">
              <div className="column bio is-two-thirds"> <div className="borderEffect">
                <p className="bio-text ">Thanks for visiting my profile! <br /> I am a full stack developer with experience in web development, media studies
                  and media production. Currently I am attending ULCA Extension's Full Stack Web Development
                  Program. <br /> I look forward to being a part of your next web development project!</p>
                  <br />
                  <div className="buttonsList">
                  <button className="button is-rounded aboutButtons" a href="https://github.com/kevinmhall8"><i class="fab fa-github"></i></button>
                  <button className="button is-rounded aboutButtons linkedin"><i class="fab fa-linkedin"></i></button>
                  <button className="button is-rounded aboutButtons">Resume</button>
                  </div>
                </div>
                </div>
                <div className="column profile-pic">
                  <img id="mug" className="borderEffect" src={ProfilePic} alt="pic"/>
                  </div>
              </div>
              {/* <div className="columns">
              <h2 className="is-size-2 is-centered">Education</h2>
              <div className="column is-half">
                <h2 className="is-size-2 is-centered">UCLA Extension</h2>

              </div>
              <div className="column is-half">
                <h2>UCLA School of Theater, Film and Television</h2>
              </div>
              </div> */}
            </div>
          </div>
        </section>
      );

      export default Main