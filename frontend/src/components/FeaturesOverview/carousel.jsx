import React from "react";
import "./carousel.css";
import { useNavigate } from "react-router-dom";
import deliveryImage from './delivery4.jpg';  
import deliveryImage2 from './delivery2.webp';
import deliveryImage3 from './delivery3.png';

const Carousel = () => { 
    const navigate = useNavigate();

    return (
        <div>
            <div id="myCarousel" class="carousel slide mb-6 team-block" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" style={{ backgroundImage: `url(${deliveryImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div class="container">
                            <div class="carousel-caption text-start">
                                <h1>It Starts with the Click of a Button</h1>
                                <p class="opacity-75">Join Deltra and watch your life change.</p>
                                <p><a class="btn btn-lg btn-primary" href="/signup">Sign up today</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" style={{ backgroundImage: `url(${deliveryImage2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div class="container">
                            <div class="carousel-caption">
                                <h1>A New Beginning Starts Here</h1>
                                <p>The More Knowledgable you Become, the Happier we Stay.</p>
                                <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" style={{ backgroundImage: `url(${deliveryImage3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div class="container">
                            <div class="carousel-caption text-end">
                                <h1>A Group of Students with a Big Idea..</h1>
                                <p>We All Started Somewhere, Yet our Story is One to Here.</p>
                                <p><a class="btn btn-lg btn-primary" href="#">Our story</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Carousel;
