// import CustomNavBar from '../../components/Navbar/navbar';
import Hero from '../../components/Hero/hero';
import FeaturesOverview from '../../components/FeaturesOverview/featuresoverview';
// import Footer from '../../components/Footer/footer';

function Homepage() {
    return (
    <>
        <div className="homepage-container">
            {/* <CustomNavBar></CustomNavBar> */}
            <Hero></Hero>
            <FeaturesOverview></FeaturesOverview>
            {/* <Footer></Footer> */}
        </div>
    </>
    );
}

export default Homepage;