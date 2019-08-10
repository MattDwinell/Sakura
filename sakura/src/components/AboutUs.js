    
import React from "react";

export default class AboutUs extends React.Component {
    goToRegister(){
      window.location.assign("/register");  
    };
    render(){
        return(
            <div className="about-us">
                <h2>Find your plant mate</h2>
                <p className="lead">Come on in and start planting... All you need to do is sign up!</p>
                <div className="text-center">
                    <button className="btn btn-primary btn-lg mr-2" onClick={this.goToRegister}>Register</button>
                    <h3>About Us:</h3>
                    <p className="lead">We looked around for a way to make technology bring people together, while doing something good for the world, and came upon this. Many people have an inclination to garden, but are frustrated at the lack of available space to do so. As urbanization continues to increase the percentage of the population that live in apartments and other small-unit structures, it will become ever more important to find spaces in which to garden. Sakura aims to provide a partial solution to this problem: we cannot create the space for you, but we can link those who want to garden to those who simply don’t have the time, or energy to manage a garden. Instead of letting those plots turn to weeds, why not grow wonderful produce?</p>
                    <h3> Disclaimer/Privacy statement:</h3>
                    <p className="lead">Sakura brings great people together to grow great things. But we’re not responsible for anything that happens outside of the scope of this website—that’s up to you. We use your information entirely to help with finding a proper match, and do not disclose that information to third parties. A full disclaimer of our terms and privacy policy can be found here:</p>
                    <p className="lead">Sakura was developed by Matthew Dwinell, Katie Humburg, and Suraj Patel. All rights reserved.</p>
                </div>
            </div>
        );
    }
}