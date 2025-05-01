import { applyStyles } from "../utils/applyStyles";
import React, { useEffect, useState } from "react";

const Footer = () => {


  return (
    <footer style={applyStyles("footer")}>
      <div style={applyStyles("footerContainer")}>
        <div style={applyStyles("footerTop")}>
          <div style={applyStyles("footerColumn")}>
            <div style={applyStyles("footerLogo")}>ProductSaver</div>
            <p style={applyStyles("footerText")}>
              The smart way to save products now and buy them later when you're
              ready.
            </p>
          </div>
          <div style={applyStyles("footerColumn")}>
            <h3 style={applyStyles("footerTitle")}>Product</h3>
            <ul style={applyStyles("footerLinks")}>
              <li style={applyStyles("footerLink")}>
                <a href="#features" style={applyStyles("footerLinkAnchor")}>
                  Features
                </a>
              </li>
              <li style={applyStyles("footerLink")}>
                <a href="#examples" style={applyStyles("footerLinkAnchor")}>
                  Examples
                </a>
              </li>
              <li style={applyStyles("footerLink")}>
                <a href="#" style={applyStyles("footerLinkAnchor")}>
                  Pricing
                </a>
              </li>
              <li style={applyStyles("footerLink")}>
                <a href="#" style={applyStyles("footerLinkAnchor")}>
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div style={applyStyles("footerColumn")}>
            <h3 style={applyStyles("footerTitle")}>Company</h3>
            <ul style={applyStyles("footerLinks")}>
              <li style={applyStyles("footerLink")}>
                <a href="#" style={applyStyles("footerLinkAnchor")}>
                  About Us
                </a>
              </li>
              <li style={applyStyles("footerLink")}>
                <a href="#" style={applyStyles("footerLinkAnchor")}>
                  Contact
                </a>
              </li>
              <li style={applyStyles("footerLink")}>
                <a href="#" style={applyStyles("footerLinkAnchor")}>
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div style={applyStyles("footerColumn")}>
            <h3 style={applyStyles("footerTitle")}>Legal</h3>
            <ul style={applyStyles("footerLinks")}>
              <li style={applyStyles("footerLink")}>
                <a href="#" style={applyStyles("footerLinkAnchor")}>
                  Privacy Policy
                </a>
              </li>
              <li style={applyStyles("footerLink")}>
                <a href="#" style={applyStyles("footerLinkAnchor")}>
                  Terms of Service
                </a>
              </li>
              <li style={applyStyles("footerLink")}>
                <a href="#" style={applyStyles("footerLinkAnchor")}>
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div style={applyStyles("copyright")}>
          © {new Date().getFullYear()} ProductSaver. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
