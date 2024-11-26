
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
       
            <Hero></Hero>
            <Carousel></Carousel>
            <FeaturesOverview></FeaturesOverview>
            <AwesomeComponentsSection></AwesomeComponentsSection>
            <AboutUs></AboutUs>
            <MeetTeam></MeetTeam>
            <Carousel></Carousel>

        </div>
    </>
    );
}

export default Homepage;