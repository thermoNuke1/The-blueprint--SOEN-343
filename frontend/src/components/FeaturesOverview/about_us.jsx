import React from "react";
import './AboutUs.css'; // Ensure this imports the CSS

const AboutUs = () => {
  return (
    <section className="page-section" id="about">
      <div className="container">
        <div className="text-center">
          <h1 className="section-heading">Our Story</h1>
         <br></br>
        </div>
        <ul className="timeline">
          <li>
            <div className="timeline-image">
              <img
                className="rounded-circle img-fluid"
                src="https://images.pexels.com/photos/93398/pexels-photo-93398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="..."
              />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>2009-2011</h4>
                <h4 className="subheading">Our Humble Beginnings</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                  ut voluptatum eius sapiente, totam reiciendis temporibus qui
                  quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
                  dolore laudantium consectetur!
                </p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <img
                className="rounded-circle img-fluid"
                src="https://images.pexels.com/photos/6868800/pexels-photo-6868800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="..."
              />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>March 2011</h4>
                <h4 className="subheading">An Agency is Born</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                  ut voluptatum eius sapiente, totam reiciendis temporibus qui
                  quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
                  dolore laudantium consectetur!
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-image">
              <img
                className="rounded-circle img-fluid"
                src="https://images.pexels.com/photos/4226269/pexels-photo-4226269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="..."
              />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>December 2015</h4>
                <h4 className="subheading">Transition to Full Service</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                  ut voluptatum eius sapiente, totam reiciendis temporibus qui
                  quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
                  dolore laudantium consectetur!
                </p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <img
                className="rounded-circle img-fluid"
                src="https://images.pexels.com/photos/3799761/pexels-photo-3799761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="..."
              />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>July 2020</h4>
                <h4 className="subheading">Phase Two Expansion</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                  ut voluptatum eius sapiente, totam reiciendis temporibus qui
                  quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
                  dolore laudantium consectetur!
                </p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <h4>
                Be Part
                <br />
                Of Our
                <br />
                Story!
              </h4>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutUs;
