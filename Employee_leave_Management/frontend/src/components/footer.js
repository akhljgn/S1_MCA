// src/components/Footer.js

import React from 'react';
import './footer.css'; // Import custom CSS file for the footer

function Footer() {
  return (
    <footer>
    <div class="container1">
        <div class="row row-pb-md">
        <div class="col-md-4 fh5co-widget">
            <h3>About OffTheClock</h3>
            <p>OFFTheClock is a comprehensive leave management system designed to simplify employee leave requests, track absences, and streamline HR processes. It ensures smooth communication between employees and managers while maintaining transparency in leave management.</p>
            <p><a class="btn btn-primary" href="#">Connect with us</a></p>
        </div>
        <div class="col-md-8 linkss">
            
            <div class="col-md-4 col-sm-4 col-xs-6">
            <ul class="fh5co-footer-links">
                <h3>Legal Links</h3>
                <li><a href="#">Privacy policy</a></li>
                <li><a href="#">Terms and conditions</a></li>
                <li><a href="#">Cookie policy</a></li>
                <li><a href="#">Compilance information</a></li>
            </ul>
            </div>

            <div class="col-md-4 col-sm-4 col-xs-6">
            <ul class="fh5co-footer-links">
                <h3>Social links</h3>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
            </ul>
            </div>

            <div class="col-md-4 col-sm-4 col-xs-6">
            <ul class="fh5co-footer-links">
                <h3>Contact us</h3>
                <p>Email: <a href="mailto:support@offtheclock.com">support@offtheclock.com</a></p>
                <p>Phone: +1 800-123-4567</p>
                <p>Address: 1234 Corporate Blvd, Suite 567, City, State, 12345</p>
            </ul>
            </div>
        </div>
        </div>

        <div class="footer-bottom">
        <p>&copy; 2025 OFFTheClock. All rights reserved.</p>
        </div>

    </div>
    </footer>
  );
}

export default Footer;
