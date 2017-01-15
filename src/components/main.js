import React, { Component } from 'react'

//Holds the NavBar
export default class Main extends Component {
  render() {
    return (
      <div>
          <section id="header">

            <div className="img-container">
              <img src="/assets/images/headerlogo.png" className="logo img-responsive"/>
            </div>

            <div className="video-overlay"></div>
            <div className="video-wrap">
              <video width="300" height="150" className="bg-video"  autoPlay="autoplay" loop="loop" muted="">
                <source src="/assets/video/Indian-Pedestrian.mp4" type="video/mp4" />
                <source src="/assets/video/Indian-Pedestrian.ogv" type="video/ogg" />
                <source src="/assets/video/Indian-Pedestrian.webm" type="video/webm" />
                Your browser doesn't support HTML5 video. Here's a <a href="#">link</a> to download the video.
              </video>
            </div>
            <div className="bounce">
            </div>
          </section>

          <section id="about">

            <div className="row about-header sepia-overlay">
              <div className="col-md-12">
                <div>
                  <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>
                </div>
              </div>
            </div>
            <div className="row about-content">
              <div className="col-md-4">
                <i className="fa fa-users fa-5x" aria-hidden="true"></i>
                <div className="about-text">
                  <p>
                    Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <i className="fa fa-university fa-5x" aria-hidden="true"></i>
                <div className="about-text">
                  <p>
                    Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <i className="fa fa-puzzle-piece fa-5x" aria-hidden="true"></i>
                <div className="about-text">
                  <p>
                    Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>


            </div>

          </section>

          <section id="event">
            <div className="row">
              <div className="col-md-6 event-image">
              </div>
              <div className="col-md-6 event-content">
                <div id="google-map">
                </div>

                <div className="event-information">
                  <h2 className="event-title">Black Code Collective Monthly Meet Up</h2>
                  <span className="event-location">1015 7th Street NW </span><br />
                  <span className="event-state">Washington, DC</span><br />
                  <span className="event-time">6:30 - 8:30 p.m.</span>

                  <p className="event-description">
                    Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan tincidunt.
                    Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan tincidunt.
                  </p>


                </div>

                <a>
                  <div className="btn-container" href="">
                    <span className="rsvp-btn">RSVP</span>
                  </div>
                </a>


              </div>
            </div>

          </section>

          <section id="organizers">
            <div className="row">
              <div className="col-md-12 organizers-header">
                <p>ORGANIZERS</p>
              </div>
              <div className="row ">
                <div className="col-md-2 organizers-item lb">
                  <p>Lougenia<br />Bailey</p>
                </div>
                <div className="col-md-2 organizers-item sh">
                  <p>Stephon<br />Harris</p>
                </div>
                <div className="col-md-2 organizers-item ea" >
                  <p>Emmanuel<br />Apu</p>
                </div>
                <div className="col-md-2 organizers-item md">
                  <p>Malick<br />Diarra</p>
                </div>
                <div className="col-md-2 organizers-item tp">
                  <p>Taylor<br />Poindexter</p>
                </div>
              </div>
            </div>
          </section>

          <section id="contact">
            <div className="row">
              <div className="col-md-3">

              </div>
              <div className="col-md-6 contact-section">
                <div className="row">
                  <div className="col-md-12">
                    <p className="contact-text">
                      To become more involve with the community...
                    </p>
                  </div>
                  <div className="contact-link-container">
                    <a className="contact-link" href="">
                      Join the Community!
                    </a>
                  </div>

                </div>


              </div>
              <div className="col-md-3">

              </div>
            </div>
          </section>

          <section id="sponsors">
            <div className="sponsors-overlay">

                <div className="row sponsors-header">
                  <div className="col-md-12">
                    <p>Our Sponsors...</p>
                  </div>
                </div>

                <div className="sponsors-section">
                  <div className="row">
                        <div className="col-md-3">
                        </div>
                        <div className="col-md-3">
                          <img src="./assets/images/ecmclabs.png" className="sponsor-images" />
                        </div>
                        <div className="col-md-3">
                          <img src="./assets/images/excellaconsulting.png" className="sponsor-images" />
                        </div>
                        <div className="col-md-3">
                        </div>
                  </div>

                </div>

            </div>
          </section>

          <footer>

            <div className="footer-container">
              <div className="sm-container">
                <span>Follow Us!</span>
                <a href="https://www.meetup.com/Black-Code-Collective/" className="sm-icons"><i className="fa fa-meetup fa-2x"></i></a>
                <a href="https://twitter.com/blkCodeCollctve" className="sm-icons"><i className="fa fa-twitter fa-2x"></i></a>
                <a href="https://github.com/blkCodeCollctve" className="sm-icons"><i className="fa fa-github fa-2x"></i></a>
              </div>
            </div>

          </footer>

    </div>
    );
  }
}
