import React from "react";
import thumbnailImage from "../assets/thumbnail-ProductStore.png";
import { Link } from "react-router-dom";
import { Box, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { IndianRupee, Pencil, Trash2 } from "lucide-react";
import { useState, useEffect } from 'react';
import { applyStyles } from "../utils/applyStyles";
import Footer from "../components/Footer";

const LandingPage = () => {



  return (
    <div>
      {/* Header */}
      <div style={applyStyles("container")}
      >
        <header style={applyStyles("header")}>
          <div style={applyStyles("logo")}>ProductSaver</div>
          <nav style={applyStyles("nav")}>
            <a href="#features" style={applyStyles("navLink")}>
              Features
            </a>
            <a href="#how-it-works" style={applyStyles("navLink")}>
              How It Works
            </a>
            <a href="#examples" style={applyStyles("navLink")}>
              Examples
            </a>
            <Link to={"/login"}>
              <button style={applyStyles("loginButton")}>Log In</button>
            </Link>
            <Link to={"/signup"}>
              <button style={applyStyles("signupButton")}>Sign Up</button>
            </Link>
          </nav>
        </header>
      </div>

      {/* Hero Section */}
      <div style={applyStyles("container")}>
        <section style={applyStyles("hero")}>
          <div style={applyStyles("heroContent")}>
            <h1 style={applyStyles("heading")}>
              Save Now, Buy Later with ProductSaver
            </h1>
            <p style={applyStyles("subheading")}>
              Never lose track of your wishlist items again. Save product
              photos, details, prices, and purchase links in one place to buy
              when you're ready.
            </p>
            <div style={applyStyles("buttonGroup")}>
              <Link to="/signup">
                <button style={applyStyles("primaryButton")}>
                  Get Started for Free
                </button>
              </Link>
              <Link to="/how-it-works">
                <button style={applyStyles("secondaryButton")}>How It Works</button>
              </Link>
            </div>
          </div>
          <div style={applyStyles("heroImage")}>
            <img
              src={thumbnailImage}
              alt="ProductSaver dashboard preview"
              style={applyStyles("image")}
            />
          </div>
        </section>
      </div>

      {/* Features Section */}
      <section id="features" style={applyStyles("features")}>
        <div style={applyStyles("container")}>
          <h2 style={applyStyles("sectionTitle")}>Everything You Need</h2>
          <p style={applyStyles("sectionSubtitle")}>
            ProductSaver helps you organize and keep track of all the products
            you're interested in buying later.
          </p>
          <div style={applyStyles("featureGrid")}>
            <div style={applyStyles("featureCard")}>
              <div style={applyStyles("featureIcon")}>📸</div>
              <h3 style={applyStyles("featureTitle")}>Save Product Images</h3>
              <p style={applyStyles("featureText")}>
                Keep visual references of every product you like. Our platform
                preserves high-quality images so you can remember exactly what
                caught your eye.
              </p>
            </div>
            <div style={applyStyles("featureCard")}>
              <div style={applyStyles("featureIcon")}>📝</div>
              <h3 style={applyStyles("featureTitle")}>Detailed Information</h3>
              <p style={applyStyles("featureText")}>
                Store product names, descriptions, prices, and any other details
                you want to remember about items you're interested in
                purchasing.
              </p>
            </div>
            <div style={applyStyles("featureCard")}>
              <div style={applyStyles("featureIcon")}>🔗</div>
              <h3 style={applyStyles("featureTitle")}>Purchase Links</h3>
              <p style={applyStyles("featureText")}>
                Save direct links to Amazon and other retailers so you can
                quickly find and buy products when you're ready, without
                searching all over again.
              </p>
            </div>
            <div style={applyStyles("featureCard")}>
              <div style={applyStyles("featureIcon")}>📊</div>
              <h3 style={applyStyles("featureTitle")}>Price Tracking</h3>
              <p style={applyStyles("featureText")}>
                See price history for your saved items and get notified when
                prices drop on the products you're waiting to purchase.
              </p>
            </div>
            <div style={applyStyles("featureCard")}>
              <div style={applyStyles("featureIcon")}>📱</div>
              <h3 style={applyStyles("featureTitle")}>Access Anywhere</h3>
              <p style={applyStyles("featureText")}>
                Your saved products sync across all your devices. Access your
                wishlist from your phone, tablet, or computer whenever
                inspiration strikes.
              </p>
            </div>
            <div style={applyStyles("featureCard")}>
              <div style={applyStyles("featureIcon")}>🔍</div>
              <h3 style={applyStyles("featureTitle")}>Smart Organization</h3>
              <p style={applyStyles("featureText")}>
                Create categories, add tags, and use our powerful search to keep
                your product collection organized and easy to navigate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" style={applyStyles("howItWorks")}>
        <div style={applyStyles("container")}>
          <h2 style={applyStyles("sectionTitle")}>How ProductSaver Works</h2>
          <p style={applyStyles("sectionSubtitle")}>
            Save products for future purchase in three simple steps.
          </p>
          <div style={applyStyles("steps")}>
            <div style={applyStyles("stepConnector")}></div>
            <div style={applyStyles("step")}>
              <div style={applyStyles("stepNumber")}>1</div>
              <h3 style={applyStyles("stepTitle")}>Find a Product</h3>
              <p style={applyStyles("stepText")}>
                Discover something you like while browsing online shops or
                marketplaces.
              </p>
            </div>
            <div style={applyStyles("step")}>
              <div style={applyStyles("stepNumber")}>2</div>
              <h3 style={applyStyles("stepTitle")}>Save Details</h3>
              <p style={applyStyles("stepText")}>
                Add the product image, name, price, description, and purchase
                link to ProductSaver.
              </p>
            </div>
            <div style={applyStyles("step")}>
              <div style={applyStyles("stepNumber")}>3</div>
              <h3 style={applyStyles("stepTitle")}>Buy When Ready</h3>
              <p style={applyStyles("stepText")}>
                Return to your saved items when you're ready to make a purchase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Example Section */}
      <section id="examples" style={applyStyles("exampleSection")}>
        <div style={applyStyles("myContainer")}>
          <h2 style={applyStyles("sectionTitle")}>See ProductSaver in Action</h2>
          <p style={applyStyles("sectionSubtitle")}>
            Here's an example of how your saved products will look in our
            platform.
          </p>
          {/* {"example card"} */}
          <Box
            style={applyStyles("myExampleCard")}
            shadow="lg"
            rounded="lg"
            overflow="hidden"
            transition="all 0.3s"
            _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
          >
            <a href={"https://www.amazon.in/Logitech-Lightspeed-Headphones-Suspension-Drivers-White/dp/B08NTBL1R6/ref=sr_1_17?crid=26OBA9JNIB7OX&dib=eyJ2IjoiMSJ9.3fvm5X8hMSP5LJ4XXpzBwbm4L5pG4iygkwWJOguUJg3G1cJ1evwbPvc62A7HPQzLciIutgm6otEdAo5p00cvzqpsoLrIzurf-lLv451ke_acO2zNVBBJWKW4te36dHPr7Dc8-Ng9wnZRWw9OdPP2NYA2hEKNrr4ueP0W9DW0b10-H8WULnmIgEVXHHazdiVwTS2JNqElChytWdPLMdQOnONxBkqJLchszQkha1jvO6I.4x719xP4SbhTmnYAhH7eUQ8WxMi_41dTg8k0yonFRJ8&dib_tag=se&keywords=gaming%2Bheadphones%2Bwireless&qid=1746030885&sprefix=gaming%2Bh%2Caps%2C300&sr=8-17&th=1"} target="_blank">
              <Image
                title="www.amazon.in"
                src={"https://f.media-amazon.com/images/I/71RSZdY7pJL._SX679_.jpg"}
                alt={"Premium Wireless Noise-Cancelling Headphones"}
                h="auto"
                w="full"
                objectFit="cover"
              />
            </a>

            <Box p={4}>
              <HStack className="flex justify-between text-gray-500">
                <div>
                  <Heading as="h3" size="lg" fontWeight={"bold"} mb={2}>
                    {"Premium Wireless Noise-Cancelling Headphones"}
                  </Heading>

                  <Text fontWeight="bold" fontSize="xl" mb={4}>
                    <IndianRupee size={18}  style={{display: "inline"}} />
                    {"15,895.00"}
                  </Text>

                  <p className="description">Logitech G733 Lightspeed Bluetooth Wireless On Ear Headphones with Mic Gaming with Suspension Headband, Lightsync RGB, Blue Vo!Ce Mic Technology and Pro-G Audio Drivers-White</p>
                </div>
              </HStack>
              <br />
              <hr
                style={{
                  width: "100%",
                  marginBottom: "20px",
                  borderBottom: "1px solid #6a7282",
                  borderRadius: "4px",
                  opacity: "0.5",
                }}
              />
              <div className="flex justify-between">
                <div>
                  <button
                    title="Edit"
                    style={{
                      backgroundColor: "#51a2ff",
                      padding: "7px 15px",
                      borderRadius: "5px",
                      margin: "5px",
                    }}
                    className="cursor-pointer"
                    // onClick={() => navigate("/update", { state: { product } })}
                  >
                    <Pencil />
                  </button>
                  <button
                    title="Delete"
                    style={{
                      backgroundColor: "#e94444",
                      padding: "7px 15px",
                      borderRadius: "5px",
                      margin: "5px",
                    }}
                    className="cursor-pointer"
                    // onClick={() => handleDeleteProduct(product._id)}
                  >
                    <Trash2 />
                  </button>
                </div>
                <div className="timeDetail flex flex-col text-sm text-gray-500">
                  <span>Created: April 25, 2025</span>
                  <span>Updated: April 30, 2025</span>
                </div>
              </div>
            </Box>
          </Box>
        </div>
      </section>

      {/* CTA Section */}
      <section style={applyStyles("cta")}>
        <div style={applyStyles("container")}>
          <h2 style={applyStyles("ctaTitle")}>
            Start Saving Your Favorite Products Today
          </h2>
          <p style={applyStyles("ctaText")}>
            Join thousands of smart shoppers who use ProductSaver to organize
            their wishlists and make better purchasing decisions.
          </p>
          <Link to={"/signup"}>
            <button style={applyStyles("ctaButton")}>Sign Up for Free</button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
