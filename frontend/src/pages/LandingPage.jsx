import React from "react";
import thumbnailImage from "../assets/thumbnail-ProductStore.png";
import { Link } from "react-router-dom";
import { Box, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { IndianRupee, Pencil, Trash2 } from "lucide-react";

const LandingPage = () => {
  // Custom CSS styles
  const styles = {
    container: {
      fontFamily: "Inter, sans-serif",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 20px",
      color: "#333",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 0",
      borderBottom: "1px solid #E5E7EB",
    },
    logo: {
      fontSize: "28px",
      fontWeight: "700",
      color: "#4F46E5",
    },
    nav: {
      display: "flex",
      gap: "16px",
      alignItems: "center",
    },
    navLink: {
      color: "#4B5563",
      textDecoration: "none",
      fontSize: "16px",
      fontWeight: "500",
      padding: "8px 12px",
      borderRadius: "6px",
      transition: "background-color 0.2s",
    },
    loginButton: {
      color: "#4F46E5",
      border: "2px solid #4F46E5",
      padding: "8px 20px",
      borderRadius: "6px",
      fontWeight: "600",
      cursor: "pointer",
      backgroundColor: "transparent",
      transition: "all 0.2s",
    },
    signupButton: {
      backgroundColor: "#4F46E5",
      color: "white",
      border: "none",
      padding: "10px 22px",
      borderRadius: "6px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "background-color 0.2s",
    },
    hero: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "80px 0 100px",
      gap: "40px",
    },
    heroContent: {
      flex: "1",
      maxWidth: "600px",
    },
    heroImage: {
      flex: "1",
      display: "flex",
      justifyContent: "center",
    },
    image: {
      maxWidth: "100%",
      borderRadius: "8px",
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    },
    heading: {
      fontSize: "48px",
      fontWeight: "800",
      color: "white",
      marginBottom: "24px",
      lineHeight: "1.1",
      textShadow: "3px 3px 10px  black",
    },
    subheading: {
      fontSize: "20px",
      color: "#4B5563",
      marginBottom: "32px",
      lineHeight: "1.6",
    },
    buttonGroup: {
      display: "flex",
      gap: "16px",
    },
    primaryButton: {
      backgroundColor: "#4F46E5",
      color: "white",
      border: "none",
      padding: "14px 32px",
      fontSize: "16px",
      borderRadius: "6px",
      cursor: "pointer",
      fontWeight: "600",
      transition: "background-color 0.2s",
    },
    secondaryButton: {
      backgroundColor: "white",
      color: "#4F46E5",
      border: "2px solid #4F46E5",
      padding: "12px 30px",
      fontSize: "16px",
      borderRadius: "6px",
      cursor: "pointer",
      fontWeight: "600",
      transition: "all 0.2s",
    },
    features: {
      padding: "80px 0",
      backgroundColor: "#F9FAFB",
    },
    sectionTitle: {
      textAlign: "center",
      fontSize: "36px",
      fontWeight: "700",
      marginBottom: "16px",
      color: "#111827",
    },
    sectionSubtitle: {
      textAlign: "center",
      fontSize: "18px",
      color: "#6B7280",
      marginBottom: "64px",
      maxWidth: "700px",
      margin: "0 auto 64px",
    },
    featureGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "32px",
    },
    featureCard: {
      backgroundColor: "white",
      padding: "32px",
      borderRadius: "8px",
      boxShadow:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      transition: "transform 0.3s",
    },
    featureIcon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "60px",
      height: "60px",
      borderRadius: "12px",
      backgroundColor: "#EEF2FF",
      color: "#4F46E5",
      fontSize: "24px",
      marginBottom: "24px",
    },
    featureTitle: {
      fontSize: "20px",
      fontWeight: "700",
      marginBottom: "16px",
      color: "#111827",
    },
    featureText: {
      color: "#6B7280",
      lineHeight: "1.6",
    },
    howItWorks: {
      padding: "80px 0",
    },
    steps: {
      display: "flex",
      justifyContent: "space-between",
      margin: "60px 0",
      position: "relative",
    },
    step: {
      textAlign: "center",
      width: "220px",
      zIndex: "1",
    },
    stepNumber: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "48px",
      height: "48px",
      borderRadius: "50%",
      backgroundColor: "#4F46E5",
      color: "white",
      fontSize: "20px",
      fontWeight: "700",
      margin: "0 auto 20px",
    },
    stepTitle: {
      fontSize: "18px",
      fontWeight: "700",
      marginBottom: "12px",
      color: "#111827",
    },
    stepText: {
      color: "#6B7280",
      fontSize: "15px",
    },
    stepConnector: {
      position: "absolute",
      top: "24px",
      left: "15%",
      width: "70%",
      height: "2px",
      backgroundColor: "#E5E7EB",
      zIndex: "0",
    },
    exampleSection: {
      padding: "80px 0",
      backgroundColor: "#F9FAFB",
    },
    exampleCard: {
      display: "flex",
      backgroundColor: "white",
      borderRadius: "8px",
      overflow: "hidden",
      boxShadow:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      maxWidth: "900px",
      margin: "0 auto",
    },
    exampleImage: {
      flex: "0 0 40%",
      background: "#EEF2FF",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    exampleContent: {
      flex: "1",
      padding: "32px",
    },
    exampleProductTitle: {
      fontSize: "20px",
      fontWeight: "700",
      marginBottom: "12px",
    },
    examplePrice: {
      fontSize: "18px",
      fontWeight: "700",
      color: "#4F46E5",
      marginBottom: "16px",
    },
    exampleDescription: {
      color: "#6B7280",
      fontSize: "15px",
      lineHeight: "1.6",
      marginBottom: "20px",
    },
    exampleMeta: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderTop: "1px solid #E5E7EB",
      paddingTop: "16px",
    },
    exampleDate: {
      fontSize: "14px",
      color: "#6B7280",
    },
    cta: {
      textAlign: "center",
      padding: "100px 0",
      backgroundColor: "#EEF2FF",
    },
    ctaTitle: {
      fontSize: "36px",
      fontWeight: "800",
      marginBottom: "24px",
      color: "#111827",
    },
    ctaText: {
      fontSize: "18px",
      color: "#4B5563",
      marginBottom: "40px",
      maxWidth: "600px",
      margin: "0 auto 40px",
    },
    ctaButton: {
      backgroundColor: "#4F46E5",
      color: "white",
      border: "none",
      padding: "16px 40px",
      fontSize: "18px",
      borderRadius: "6px",
      cursor: "pointer",
      fontWeight: "600",
      transition: "background-color 0.2s",
    },
    footer: {
      backgroundColor: "#111827",
      color: "#E5E7EB",
      padding: "60px 0 30px",
    },
    footerContainer: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 20px",
    },
    footerTop: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "40px",
    },
    footerColumn: {
      flex: "1",
      maxWidth: "250px",
    },
    footerLogo: {
      fontSize: "24px",
      fontWeight: "700",
      marginBottom: "16px",
      color: "white",
    },
    footerText: {
      color: "#9CA3AF",
      lineHeight: "1.6",
      fontSize: "14px",
    },
    footerTitle: {
      fontSize: "16px",
      fontWeight: "600",
      marginBottom: "20px",
      color: "white",
    },
    footerLinks: {
      listStyle: "none",
      padding: "0",
      margin: "0",
    },
    footerLink: {
      marginBottom: "12px",
    },
    footerLinkAnchor: {
      color: "#9CA3AF",
      textDecoration: "none",
      transition: "color 0.2s",
      fontSize: "14px",
    },
    copyright: {
      borderTop: "1px solid #374151",
      paddingTop: "20px",
      textAlign: "center",
      color: "#9CA3AF",
      fontSize: "14px",
    },
    "@media (max-width: 768px)": {
      hero: {
        flexDirection: "column",
        textAlign: "center",
        padding: "60px 0",
      },
      heroContent: {
        maxWidth: "100%",
      },
      featureGrid: {
        gridTemplateColumns: "1fr",
      },
      steps: {
        flexDirection: "column",
        alignItems: "center",
        gap: "40px",
      },
      step: {
        width: "100%",
        maxWidth: "300px",
      },
      stepConnector: {
        display: "none",
      },
      exampleCard: {
        flexDirection: "column",
      },
      exampleImage: {
        height: "200px",
      },
      footerTop: {
        flexDirection: "column",
        gap: "40px",
      },
      footerColumn: {
        maxWidth: "100%",
      },
    },
  };

  return (
    <div>
      {/* Header */}
      <div style={styles.container}>
        <header style={styles.header}>
          <div style={styles.logo}>ProductSaver</div>
          <nav style={styles.nav}>
            <a href="#features" style={styles.navLink}>
              Features
            </a>
            <a href="#how-it-works" style={styles.navLink}>
              How It Works
            </a>
            <a href="#examples" style={styles.navLink}>
              Examples
            </a>
            <Link to={"/login"}>
              <button style={styles.loginButton}>Log In</button>
            </Link>
            <Link to={"/signup"}>
              <button style={styles.signupButton}>Sign Up</button>
            </Link>
          </nav>
        </header>
      </div>

      {/* Hero Section */}
      <div style={styles.container}>
        <section style={styles.hero}>
          <div style={styles.heroContent}>
            <h1 style={styles.heading}>
              Save Now, Buy Later with ProductSaver
            </h1>
            <p style={styles.subheading}>
              Never lose track of your wishlist items again. Save product
              photos, details, prices, and purchase links in one place to buy
              when you're ready.
            </p>
            <div style={styles.buttonGroup}>
              <Link to="/signup">
                <button style={styles.primaryButton}>
                  Get Started for Free
                </button>
              </Link>
              <Link to="/how-it-works">
                <button style={styles.secondaryButton}>How It Works</button>
              </Link>
            </div>
          </div>
          <div style={styles.heroImage}>
            <img
              src={thumbnailImage}
              alt="ProductSaver dashboard preview"
              style={styles.image}
            />
          </div>
        </section>
      </div>

      {/* Features Section */}
      <section id="features" style={styles.features}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Everything You Need</h2>
          <p style={styles.sectionSubtitle}>
            ProductSaver helps you organize and keep track of all the products
            you're interested in buying later.
          </p>
          <div style={styles.featureGrid}>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>📸</div>
              <h3 style={styles.featureTitle}>Save Product Images</h3>
              <p style={styles.featureText}>
                Keep visual references of every product you like. Our platform
                preserves high-quality images so you can remember exactly what
                caught your eye.
              </p>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>📝</div>
              <h3 style={styles.featureTitle}>Detailed Information</h3>
              <p style={styles.featureText}>
                Store product names, descriptions, prices, and any other details
                you want to remember about items you're interested in
                purchasing.
              </p>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>🔗</div>
              <h3 style={styles.featureTitle}>Purchase Links</h3>
              <p style={styles.featureText}>
                Save direct links to Amazon and other retailers so you can
                quickly find and buy products when you're ready, without
                searching all over again.
              </p>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>📊</div>
              <h3 style={styles.featureTitle}>Price Tracking</h3>
              <p style={styles.featureText}>
                See price history for your saved items and get notified when
                prices drop on the products you're waiting to purchase.
              </p>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>📱</div>
              <h3 style={styles.featureTitle}>Access Anywhere</h3>
              <p style={styles.featureText}>
                Your saved products sync across all your devices. Access your
                wishlist from your phone, tablet, or computer whenever
                inspiration strikes.
              </p>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>🔍</div>
              <h3 style={styles.featureTitle}>Smart Organization</h3>
              <p style={styles.featureText}>
                Create categories, add tags, and use our powerful search to keep
                your product collection organized and easy to navigate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" style={styles.howItWorks}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>How ProductSaver Works</h2>
          <p style={styles.sectionSubtitle}>
            Save products for future purchase in three simple steps.
          </p>
          <div style={styles.steps}>
            <div style={styles.stepConnector}></div>
            <div style={styles.step}>
              <div style={styles.stepNumber}>1</div>
              <h3 style={styles.stepTitle}>Find a Product</h3>
              <p style={styles.stepText}>
                Discover something you like while browsing online shops or
                marketplaces.
              </p>
            </div>
            <div style={styles.step}>
              <div style={styles.stepNumber}>2</div>
              <h3 style={styles.stepTitle}>Save Details</h3>
              <p style={styles.stepText}>
                Add the product image, name, price, description, and purchase
                link to ProductSaver.
              </p>
            </div>
            <div style={styles.step}>
              <div style={styles.stepNumber}>3</div>
              <h3 style={styles.stepTitle}>Buy When Ready</h3>
              <p style={styles.stepText}>
                Return to your saved items when you're ready to make a purchase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Example Section */}
      <section id="examples" style={styles.exampleSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>See ProductSaver in Action</h2>
          <p style={styles.sectionSubtitle}>
            Here's an example of how your saved products will look in our
            platform.
          </p>
          {/* {"example card"} */}
          <Box
            style={{ margin: "10px", width: "40%" }}
            shadow="lg"
            rounded="lg"
            overflow="hidden"
            transition="all 0.3s"
            _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
            //   bg={bg}
          >
            <a href={"https://www.amazon.in/Logitech-Lightspeed-Headphones-Suspension-Drivers-White/dp/B08NTBL1R6/ref=sr_1_17?crid=26OBA9JNIB7OX&dib=eyJ2IjoiMSJ9.3fvm5X8hMSP5LJ4XXpzBwbm4L5pG4iygkwWJOguUJg3G1cJ1evwbPvc62A7HPQzLciIutgm6otEdAo5p00cvzqpsoLrIzurf-lLv451ke_acO2zNVBBJWKW4te36dHPr7Dc8-Ng9wnZRWw9OdPP2NYA2hEKNrr4ueP0W9DW0b10-H8WULnmIgEVXHHazdiVwTS2JNqElChytWdPLMdQOnONxBkqJLchszQkha1jvO6I.4x719xP4SbhTmnYAhH7eUQ8WxMi_41dTg8k0yonFRJ8&dib_tag=se&keywords=gaming%2Bheadphones%2Bwireless&qid=1746030885&sprefix=gaming%2Bh%2Caps%2C300&sr=8-17&th=1"} target="_blank">
              <Image
                src={"https://f.media-amazon.com/images/I/71RSZdY7pJL._SX679_.jpg"}
                alt={"Premium Wireless Noise-Cancelling Headphones"}
                h="230px"
                w="full"
                objectFit="cover"
              />
            </a>

            <Box p={4}>
              <HStack className="flex justify-between">
                <div>
                  <Heading as="h3" size="lg" fontWeight={"bold"} mb={2}>
                    {"Premium Wireless Noise-Cancelling Headphones"}
                  </Heading>

                  <Text fontWeight="bold" fontSize="xl" mb={4}>
                    <IndianRupee size={18} style={{ display: "inline" }} />
                    {"15,895"}
                  </Text>

                  <p className="description">{"Logitech G733 Lightspeed Bluetooth Wireless On Ear Headphones with Mic Gaming with Suspension Headband, Lightsync RGB, Blue Vo!Ce Mic Technology and Pro-G Audio Drivers-White"}</p>
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
      <section style={styles.cta}>
        <div style={styles.container}>
          <h2 style={styles.ctaTitle}>
            Start Saving Your Favorite Products Today
          </h2>
          <p style={styles.ctaText}>
            Join thousands of smart shoppers who use ProductSaver to organize
            their wishlists and make better purchasing decisions.
          </p>
          <Link to={"/signup"}>
            <button style={styles.ctaButton}>Sign Up for Free</button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          <div style={styles.footerTop}>
            <div style={styles.footerColumn}>
              <div style={styles.footerLogo}>ProductSaver</div>
              <p style={styles.footerText}>
                The smart way to save products now and buy them later when
                you're ready.
              </p>
            </div>
            <div style={styles.footerColumn}>
              <h3 style={styles.footerTitle}>Product</h3>
              <ul style={styles.footerLinks}>
                <li style={styles.footerLink}>
                  <a href="#features" style={styles.footerLinkAnchor}>
                    Features
                  </a>
                </li>
                <li style={styles.footerLink}>
                  <a href="#examples" style={styles.footerLinkAnchor}>
                    Examples
                  </a>
                </li>
                <li style={styles.footerLink}>
                  <a href="#" style={styles.footerLinkAnchor}>
                    Pricing
                  </a>
                </li>
                <li style={styles.footerLink}>
                  <a href="#" style={styles.footerLinkAnchor}>
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div style={styles.footerColumn}>
              <h3 style={styles.footerTitle}>Company</h3>
              <ul style={styles.footerLinks}>
                <li style={styles.footerLink}>
                  <a href="#" style={styles.footerLinkAnchor}>
                    About Us
                  </a>
                </li>
                <li style={styles.footerLink}>
                  <a href="#" style={styles.footerLinkAnchor}>
                    Contact
                  </a>
                </li>
                <li style={styles.footerLink}>
                  <a href="#" style={styles.footerLinkAnchor}>
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div style={styles.footerColumn}>
              <h3 style={styles.footerTitle}>Legal</h3>
              <ul style={styles.footerLinks}>
                <li style={styles.footerLink}>
                  <a href="#" style={styles.footerLinkAnchor}>
                    Privacy Policy
                  </a>
                </li>
                <li style={styles.footerLink}>
                  <a href="#" style={styles.footerLinkAnchor}>
                    Terms of Service
                  </a>
                </li>
                <li style={styles.footerLink}>
                  <a href="#" style={styles.footerLinkAnchor}>
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div style={styles.copyright}>
            © {new Date().getFullYear()} ProductSaver. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
