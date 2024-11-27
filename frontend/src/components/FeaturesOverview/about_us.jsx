import React from "react";
import './AboutUs.css'; 

const AboutUs = () => {
  return (
    <div id = "about-us">
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
                <h4>May 2018</h4>
                <h4 className="subheading">Our Humble Beginnings</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                We were just a group of overenthusiastic, caffeine-fueled students who thought, "Hey, we should totally start a company!" We didn't really have a business plan, 
                but we did have a lot of ideas.
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
                <h4>March 2020</h4>
                <h4 className="subheading">An Agency is Born</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                We thought we had it all figured out... until 2020 happened. Everything went digital, and our "face-to-face" meetings became virtual. Suddenly, Zoom was our best friend, and pajama pants were our new business attire. We learned how to "mute" and "unmute" like professionals
                . And let's not forget our new skill: making awkward small talk in the Zoom waiting room.
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
                <h4>May 2023</h4>
                <h4 className="subheading">Transition to Full Service</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                In May 2023, we completed our transition to full service, expanding our operations to offer a more robust and reliable experience for our customers. Despite the challenges posed by the pandemic, we successfully adapted to the new normal. Our team quickly embraced hybrid work setups, balancing the flexibility of remote work with the benefits of in-person collaboration. We refined our processes, enhanced our service offerings, and ensured our systems were ready for the growing demand.
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
                <h4>November 2024</h4>
                <h4 className="subheading">Today</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                Fast forward to November 2024, and we continue to innovate and push boundaries in our industry. We’ve solidified our position as leaders in our field, consistently offering exceptional service and delivering on our promises. With a dedicated team and a focus on excellence, we are shaping the future of our industry, constantly evolving to meet the needs of our customers. Today, we’re more committed than ever to providing the best possible experience and growing alongside our community.
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
    </div>
  );
};

export default AboutUs;
