
import Hero from '../../components/Hero/hero';
import FeaturesOverview from '../../components/FeaturesOverview/featuresoverview';
import AwesomeComponentsSection from '../../components/FeaturesOverview/more_features';
import Carousel from '../../components/FeaturesOverview/carousel';
import AboutUs from '../../components/FeaturesOverview/about_us';
import MeetTeam from '../../components/FeaturesOverview/meet_team';

function Homepage() {
  

  return (
    <>
      <div className="homepage-container">
        <Hero />
        <AwesomeComponentsSection  id="services"/>
        <AboutUs id="about-us" />
        <MeetTeam id="meet-team"/>
        <Carousel />
      </div>
    </>
  );
}

export default Homepage;
