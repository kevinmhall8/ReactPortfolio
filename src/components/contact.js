import React from 'react'
import '../index.css'

const Contact = () => (
  
        <section className="hero">
          <div className="hero-body">
                  <h2 className="is-size-1">Contact</h2>
            <div className="columns is-centered">
              <div className="column is-half">
                <div id="contact" class="contact fancy-border">
                  <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                      <input className="input" type="text" />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control has-icons-left has-icons-right">
                      <input className="input" type="email" />
                      <span className="icon is-small is-left">
                        <i className="fas fa-envelope" />
                      </span>
                      <span className="icon is-small is-right">
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Message</label>
                    <div className="control">
                      <textarea className="textarea" defaultValue={""} />
                    </div>
                  </div>                          
                  <div className="field is-grouped">
                    <div className="control">
                      <button className="button is-rounded">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div></div></section>
      );

export default Contact