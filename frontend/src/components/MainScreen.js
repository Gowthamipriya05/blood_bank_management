import React from "react";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import NavBar from "./NavBar";
import Card from 'react-bootstrap/Card';
import RequestBloodImage from "../pictures/request blood.png"; // Import the image
import DonateBloodImage from "../pictures/donate blood.jpg";
import "./MainScreen.css";

function MainScreen() {
    return (
        <div className="mainscreendiv" style={{paddingBottom:15, paddingTop:15}}>
            <NavBar />
            <span className="requestblood">
                <span className="requestbloodimage">
                    {/* Use the imported image */}
                    <img src={RequestBloodImage} alt="Request Blood" />
                </span>
                <button className="requestbloodbutton" onClick={() => window.location.href = "/patientlogin"}>
                  Request Blood
                </button>

            </span>
            <span className="donateblood">
                <span className="donatebloodimage">
                    {/* Use the imported "Donate Blood" image */}
                    <img src={DonateBloodImage} alt="Donate Blood" />
                </span>
                <button className="donatebloodbutton" onClick={() => window.location.href = "/donarlogin"}>
                  Donate Blood
                </button>
            </span>
            <h4 className="headingwhydonate" >Why we need to donate blood</h4>
                <Card className="card shadow" style={{backgroundColor:'rgb(237, 235, 235)'}}>
                    <Card.Body>
                        <p className="ppara">Blood donation is a community responsibility.</p>
                        <p className="aboutuspara">While you're reading this, a local patient needs blood.</p>
                        <p className="aboutuspara">Blood is needed every two seconds.</p> 

                        <p className="aboutuspara">About one in seven people entering a hospital needs blood. </p>

                        <p className="aboutuspara">Blood is always needed for treatment of accident victims, cancer patients,hemophiliacs and surgery patients.  
                            Blood cannot be manufactured.</p>

                        <p className="aboutuspara">Only 37 percent of our country's population is eligible to give blood, and less than 10 percent of those who can donate actually do donate annually.
                        </p>
                        <p className="aboutuspara">What if everyone eligible to donate became complacent and decided they didn't need to donate because someone else would?
                        </p>
                        <p className="aboutuspara">What if there wasn't enough donated blood available when you, a loved one - anyone - needed it?
                        </p>
                        <p className="aboutuspara">Our blood supply comes from caring donors like you. It takes about one hour of your time. When you give blood, it gives someone another smile, another hug, another chance. It is the gift of life.</p>		
	                    <p className="ppara">Be a Hero. Donate Blood.</p>

                    </Card.Body>
                </Card>
                <h4 className="headingwhydonate">Our Recent Events</h4>
                <Card className="card shadow" style={{backgroundColor:'rgb(237, 235, 235)'}}>
                     <Card.Body style={{height :200 }}>
                      <p className="aboutuspara">Blood campagin at NITDelhi </p>
                     </Card.Body> 
                </Card>
            <ContactUs />
        </div>
    );
}

export default MainScreen;
