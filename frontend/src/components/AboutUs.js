import React from "react";
import Card from 'react-bootstrap/Card';

function AboutUs() {
    return (
        <div className="aboutus">
            <h2>ABOUT US</h2>
            <Card className="card shadow" style={{ backgroundColor: 'rgb(237, 235, 235)' }}>
                <Card.Body>
                    <h4>About Our Blood Bank</h4>

                    <p>Welcome to Our Blood Bank Management System, where the gift of life flows through every drop of blood we collect and distribute. Founded with a passion for saving lives and serving our community, we have been a trusted partner in healthcare for [number of years] years.</p>

                    <p>Our Mission</p>
                    <p>At Our Blood Bank Management System, our mission is clear: to ensure a safe and sustainable blood supply for our community. Every day, we work tirelessly to meet the critical needs of patients and hospitals, providing life-saving blood products when and where they are needed most.</p>

                    <p>Why Choose Our Blood Bank Management System</p>
                    <ul>
                        <li><strong>Commitment to Safety:</strong> We prioritize safety above all else. Our state-of-the-art facilities and rigorous screening processes ensure that every unit of blood we collect is safe and free from contaminants.</li>
                        <li><strong>Community Focus:</strong> We are deeply rooted in our community, and our donors are the heart of our organization. We rely on the generosity of volunteers who selflessly give their blood to save lives.</li>
                        <li><strong>Quality Care:</strong> Our dedicated team of healthcare professionals and volunteers is committed to delivering the highest quality care at every step of the blood donation and distribution process.</li>
                        <li><strong>Innovation:</strong> We continually invest in cutting-edge technology and best practices to improve our operations, ensuring we can meet the evolving needs of our healthcare partners.</li>
                    </ul>

                    <p>Our Impact</p>
                    <p>Over the years, Our Blood Bank Management System has made a significant impact on our community. We have provided countless units of blood to hospitals, helping patients recover from surgeries, accidents, and life-threatening illnesses. Our donors, supporters, and partners have made this life-saving work possible.</p>

                    <p>Get Involved</p>
                    <p>We invite you to be a part of our mission to save lives. Whether you're a regular donor, a volunteer, or a corporate partner, your involvement makes a difference. Together, we can ensure that no one in our community goes without the life-saving blood they need.</p>

                    <p>Thank you for choosing Our Blood Bank Management System as your partner in health and hope. Together, we are saving lives, one donation at a time.</p>
                </Card.Body>
            </Card>
        </div>
    );
}

export default AboutUs;
