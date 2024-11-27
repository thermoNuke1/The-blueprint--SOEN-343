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
    description: 'Driving innovation and strategic vision to lead the company towards growth and excellence.'
  },
  {
    id: 2,
    image: '../assets/SydneyCampbell.png',
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com/in/sydney-campbell-666b69270/',
    name: 'Sydney Campbell',
    designation: 'Software Engineering Manager',
    description: 'Leading development teams to deliver high-quality software solutions efficiently.'
  },
  {
    id: 3,
    image: '../assets/carlo.png',
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Carlo',
    designation: 'Lead Developer',
    description: 'Overseeing the architecture and development of cutting-edge applications and systems.'
  },
  {
    id: 4,
    image: '../assets/jeremy.png',
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com/in/jeremy-crete-9b41192b3/',
    name: 'Jeremy Crete',
    designation: 'UX Designer',
    description: 'Crafting intuitive user experiences that enhance product usability and engagement.'
  },
  {
    id: 5,
    image: '../assets/adam_2.png',
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com/in/adam-tsatas/',
    name: 'Adam Tsatas',
    designation: 'Developer',
    description: 'Building robust and scalable applications through innovative coding practices.'
  },
  {
    id: 6,
    image: '../assets/mid.png',
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com/in/midhurshaannadarajah/',
    name: 'Midhurshaan Nadarajah',
    designation: 'Developer',
    description: 'Focusing on delivering clean, efficient, and effective software solutions.'
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
