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
            {/* <div className='container-fluid pl-3 pe-5'><img src="../../assets/chat-box.png" className="float-end pl-3 img-fluid" alt="Bootstrap Themes" width="75" height="25" loading="lazy"></img></div> */}
            {/* <Footer></Footer> */}
        </div>
    </>
    );
}

export default Homepage;