import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import React from 'react';
import './meet_team.css';

const teamsData = [
  {
    id: 1,
    image: '../assets/sano.png',
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com/in/mohamed-sanoko-96445a272/',
    name: 'Mohamed Sanoko',
    designation: 'CEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  },
  {
    id: 2,
    image: '../assets/SydneyCampbell.png',
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com/in/sydney-campbell-666b69270/',
    name: 'Sydney Campbell',
    designation: 'Software Engineering Manager',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  },
  {
    id: 3,
    image: '../assets/carlo.png',
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Carlo',
    designation: 'Lead Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  },
  {
    id: 4,
    image: '../assets/jeremy.png',
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com/in/jeremy-crete-9b41192b3/',
    name: 'Jeremy Crete',
    designation: 'UX Designer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  },
  {
    id: 5,
    image: '../assets/adam_2.png',
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com/in/adam-tsatas/',
    name: 'Adam Tsatas',
    designation: 'Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  },
  {
    id: 6,
    image: '../assets/mid.png',
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com/in/midhurshaannadarajah/',
    name: 'Midhurshaan NadarajahView',
    designation: 'Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  },
 
];

function MeetTeam() {
  return (
    <section id="meet-team" className="block team-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Meet Our Team</h2>
          <div className="subtitle">Our talented experts</div>
        </div>
        <Row>
          {
            teamsData.map(team => (
              <Col sm={2} key={team.id}>
                <div className="team-member">
                  <div className="image">
                    <Image src={team.image} />
                    <div className="overlay">
                      <div className="socials">
                        <ul>
                          <li><a href={team.fbLink}><i className="fab fa-facebook-f"></i></a></li>
                          <li><a href={team.twitterLink}><i className="fab fa-twitter"></i></a></li>
                          <li><a href={team.linkedinLink}><i className="fab fa-linkedin-in"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <h3>{team.name}</h3>
                    <span className="designation">{team.designation}</span>
                    <p>{team.description}</p>
                  </div>
                </div>
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>
  );
}

export default MeetTeam;
