import React from 'react'
import '../index.css'
import TrackTVGif from './images/TrackTV.gif'
import WeTriviaGif from './images/WeTrivia.gif'

const Portfolio = () => (
<div>
        <section className="hero">
          <div className="hero-body">
            <div className="container projects">
              <h2 className="is-size-1">Projects</h2> <br />
              <div className="notification">
                <div className="columns is-centered">
                  <div className="column is-one-third">
                    <figure className="image borderEffect">
                      <img src={TrackTVGif} alt="" id="track-tv" /></figure>
                  </div>
                  <div className="column">
                    <div className="track-tv-bio borderEffect"> 
                    <h2 className="is-size-2 is-centered">Track TV</h2>
                      <br />
                      <p>Track TV is a one-stop hub for all your favorite TV shows, or any new shows you are
                        interested in starting. Using Track TV to keep a log of your current shows means spending
                        less time hunting down details and more time enjoying your curated and scheduled watchlist.
                      </p> <br />
                    <div className="buttons is-centered">
                      <button className="button is-rounded" onclick="window.location.href='https://yankidank.github.io/TV-Tracker/';">
                        <span>Deployed</span>
                      </button>
                      <button className="button is-rounded" onclick="window.location.href='https://github.com/yankidank/TV-Tracker';">
                      <i class="fab fa-github"></i>
                      </button>
                    </div>
                    </div>
                    </div>
                </div>
                <br />
                <div className="columns is-centered">
                  <div className="column is-one-third">
                    <figure className="image borderEffect">
                      <img src={WeTriviaGif} alt="" id="track-tv" /></figure>
                  </div>
                  <div className="column">
                    <div className="we-trivia-bio borderEffect">
                        
                        <h2 className="is-size-2 is-centered">WeTrivia</h2>

                      <br />
                      <p>WeTrivia is a fun, fast-paced trivia competition for you and your friends to test your knowledge in a variety of interesting
                        subjects. Challenge other players to beat your high score, and share your experiences using an innovative chat feature as you play.
                      </p> <br />
                    <div className="buttons is-centered">
                      <button className="button is-rounded" onclick="window.location.href='https://intense-earth-41726.herokuapp.com/';">
                        <span>Deployed</span>
                      </button>
                      <button className="button is-rounded" onclick="window.location.href='https://github.com/nickrayj45/WeTrivia';">
                      <i class="fab fa-github"></i>
                      </button>
                    </div></div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  );

  export default Portfolio