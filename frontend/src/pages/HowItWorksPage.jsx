import React from 'react';
import { Link } from 'react-router-dom';
import howitworks from "../assets/howitworks.png"
import howitworks2 from "../assets/howitworks2.png"

const HowItWorksPage = () => {
  // Custom CSS styles
  const styles = {
    container: {
      fontFamily: 'Inter, sans-serif',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
      color: '#333',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 0',
      borderBottom: '1px solid #E5E7EB',
    },
    logo: {
      fontSize: '28px',
      fontWeight: '700',
      color: '#4F46E5',
      textDecoration: 'none',
    },
    nav: {
      display: 'flex',
      gap: '16px',
      alignItems: 'center',
    },
    navLink: {
      color: '#4B5563',
      textDecoration: 'none',
      fontSize: '16px',
      fontWeight: '500',
      padding: '8px 12px',
      borderRadius: '6px',
      transition: 'background-color 0.2s',
    },
    activeNavLink: {
      color: '#4F46E5',
      fontWeight: '600',
    },
    loginButton: {
      color: '#4F46E5',
      border: '2px solid #4F46E5',
      padding: '8px 20px',
      borderRadius: '6px',
      fontWeight: '600',
      cursor: 'pointer',
      backgroundColor: 'transparent',
      transition: 'all 0.2s',
    },
    signupButton: {
      backgroundColor: '#4F46E5',
      color: 'white',
      border: 'none',
      padding: '10px 22px',
      borderRadius: '6px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
    },
    pageHeader: {
      textAlign: 'center',
      padding: '80px 0 40px',
    },
    pageTitle: {
      fontSize: '42px',
      fontWeight: '800',
      color: 'white',
      marginBottom: '20px',
    },
    pageDescription: {
      fontSize: '18px',
      color: '#4B5563',
      maxWidth: '700px',
      margin: '0 auto',
      lineHeight: '1.6',
    },
    processOverview: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '40px 0 80px',
      position: 'relative',
    },
    processStep: {
      width: '30%',
      textAlign: 'center',
      padding: '20px',
      backgroundColor: '#F3F4F6',
      borderRadius: '8px',
      position: 'relative',
      zIndex: '1',
    },
    processArrow: {
      position: 'absolute',
      top: '50%',
      left: '33%',
      width: '30%',
      height: '2px',
      backgroundColor: '#D1D5DB',
      zIndex: '0',
    },
    processArrow2: {
      position: 'absolute',
      top: '50%',
      left: '66%',
      width: '30%',
      height: '2px',
      backgroundColor: '#D1D5DB',
      zIndex: '0',
    },
    arrowHead: {
      position: 'absolute',
      right: '-6px',
      top: '-4px',
      width: '0',
      height: '0',
      borderTop: '5px solid transparent',
      borderBottom: '5px solid transparent',
      borderLeft: '10px solid #D1D5DB',
    },
    stepNumber: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: '#4F46E5',
      color: 'white',
      fontSize: '18px',
      fontWeight: '700',
      marginBottom: '16px',
    },
    stepTitle: {
      fontSize: '20px',
      fontWeight: '700',
      marginBottom: '12px',
      color: '#111827',
    },
    stepDescription: {
      color: '#4B5563',
      fontSize: '16px',
      lineHeight: '1.5',
    },
    detailedStepsSection: {
      padding: '60px 0',
    },
    stepDetail: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '80px',
      gap: '40px',
    },
    stepDetailReverse: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '80px',
      gap: '40px',
      flexDirection: 'row-reverse',
    },
    stepContent: {
      flex: '1',
    },
    stepImage: {
      flex: '1',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    },
    stepDetailNumber: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '36px',
      height: '36px',
      borderRadius: '50%',
      backgroundColor: '#EEF2FF',
      color: '#4F46E5',
      fontSize: '16px',
      fontWeight: '700',
      marginBottom: '12px',
    },
    stepDetailTitle: {
      fontSize: '28px',
      fontWeight: '700',
      marginBottom: '16px',
      color: 'white',
    },
    stepDetailDescription: {
      color: '#4B5563',
      fontSize: '17px',
      lineHeight: '1.7',
      marginBottom: '24px',
    },
    featureList: {
      padding: '0',
      margin: '0 0 24px 0',
      listStyle: 'none',
    },
    featureItem: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '12px',
    },
    featureIcon: {
      color: '#4F46E5',
      marginRight: '12px',
      fontSize: '20px',
    },
    featureText: {
      color: '#4B5563',
      fontSize: '16px',
      lineHeight: '1.5',
    },
    tipBox: {
      backgroundColor: '#EEF2FF',
      border: '1px solid #C7D2FE',
      borderRadius: '8px',
      padding: '16px 20px',
      marginTop: '24px',
    },
    tipTitle: {
      fontSize: '16px',
      fontWeight: '700',
      color: '#4F46E5',
      marginBottom: '8px',
      display: 'flex',
      alignItems: 'center',
    },
    tipText: {
      color: '#4B5563',
      fontSize: '15px',
      lineHeight: '1.6',
    },
    faqSection: {
      padding: '80px 0',
      backgroundColor: '#F9FAFB',
    },
    faqTitle: {
      fontSize: '32px',
      fontWeight: '700',
      textAlign: 'center',
      marginBottom: '40px',
      color: '#111827',
    },
    faqGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '24px',
    },
    faqItem: {
      backgroundColor: 'white',
      borderRadius: '8px',
      padding: '24px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    },
    faqQuestion: {
      fontSize: '18px',
      fontWeight: '700',
      marginBottom: '12px',
      color: '#111827',
    },
    faqAnswer: {
      color: '#4B5563',
      fontSize: '16px',
      lineHeight: '1.6',
    },
    cta: {
      textAlign: 'center',
      padding: '80px 0',
      backgroundColor: '#EEF2FF',
    },
    ctaTitle: {
      fontSize: '32px',
      fontWeight: '800',
      marginBottom: '24px',
      color: '#111827',
    },
    ctaText: {
      fontSize: '18px',
      color: '#4B5563',
      marginBottom: '40px',
      maxWidth: '600px',
      margin: '0 auto 40px',
      lineHeight: '1.6',
    },
    ctaButton: {
      backgroundColor: '#4F46E5',
      color: 'white',
      border: 'none',
      padding: '16px 40px',
      fontSize: '18px',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: '600',
      transition: 'background-color 0.2s',
    },
    footer: {
      backgroundColor: '#111827',
      color: '#E5E7EB',
      padding: '60px 0 30px',
    },
    footerContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
    },
    footerTop: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '40px',
    },
    footerColumn: {
      flex: '1',
      maxWidth: '250px',
    },
    footerLogo: {
      fontSize: '24px',
      fontWeight: '700',
      marginBottom: '16px',
      color: 'white',
    },
    footerText: {
      color: '#9CA3AF',
      lineHeight: '1.6',
      fontSize: '14px',
    },
    footerTitle: {
      fontSize: '16px',
      fontWeight: '600',
      marginBottom: '20px',
      color: 'white',
    },
    footerLinks: {
      listStyle: 'none',
      padding: '0',
      margin: '0',
    },
    footerLink: {
      marginBottom: '12px',
    },
    footerLinkAnchor: {
      color: '#9CA3AF',
      textDecoration: 'none',
      transition: 'color 0.2s',
      fontSize: '14px',
    },
    copyright: {
      borderTop: '1px solid #374151',
      paddingTop: '20px',
      textAlign: 'center',
      color: '#9CA3AF',
      fontSize: '14px',
    },
    '@media (max-width: 768px)': {
      processOverview: {
        flexDirection: 'column',
        gap: '40px',
        alignItems: 'center',
      },
      processStep: {
        width: '80%',
      },
      processArrow: {
        display: 'none',
      },
      processArrow2: {
        display: 'none',
      },
      stepDetail: {
        flexDirection: 'column',
      },
      stepDetailReverse: {
        flexDirection: 'column',
      },
      faqGrid: {
        gridTemplateColumns: '1fr',
      },
      footerTop: {
        flexDirection: 'column',
        gap: '40px',
      },
    }
  };

  // Light bulb icon for tips
  const TipIcon = () => (
    <span style={{marginRight: '8px', fontSize: '20px'}}>💡</span>
  );

  // Check mark icon for feature list
  const CheckIcon = () => (
    <span style={styles.featureIcon}>✓</span>
  );

  return (
    <div>
      {/* Header */}
      <div style={styles.container}>
        <header style={styles.header}>
          <a href="/" style={styles.logo}>ProductSaver</a>
          <nav style={styles.nav}>
            <a href="/" style={styles.navLink}>Home</a>
            <a href="/how-it-works" style={{...styles.navLink, ...styles.activeNavLink}}>How It Works</a>
            <Link to={'/login'}>
            <button style={styles.loginButton}>Log In</button>
            </Link>
            <Link to={'/signup'}>
            <button style={styles.signupButton}>Sign Up</button>
            </Link>
          </nav>
        </header>
      </div>

      {/* Page Header */}
      <div style={styles.container}>
        <div style={styles.pageHeader}>
          <h1 style={styles.pageTitle}>How ProductSaver Works</h1>
          <p style={styles.pageDescription}>
            Learn how to use ProductSaver to save products now and buy them later when you're ready, 
            all while keeping track of prices, details, and purchase links.
          </p>
        </div>
      </div>

      {/* Process Overview */}
      <div style={styles.container}>
        <div style={styles.processOverview}>
          <div style={styles.processStep}>
            <div style={styles.stepNumber}>1</div>
            <h3 style={styles.stepTitle}>Find Products</h3>
            <p style={styles.stepDescription}>
              Discover products you love while browsing online shops and marketplaces.
            </p>
          </div>
          <div style={styles.processArrow}>
            <div style={styles.arrowHead}></div>
          </div>
          <div style={styles.processStep}>
            <div style={styles.stepNumber}>2</div>
            <h3 style={styles.stepTitle}>Save Details</h3>
            <p style={styles.stepDescription}>
              Add all product information to ProductSaver for future reference.
            </p>
          </div>
          <div style={styles.processArrow2}>
            <div style={styles.arrowHead}></div>
          </div>
          <div style={styles.processStep}>
            <div style={styles.stepNumber}>3</div>
            <h3 style={styles.stepTitle}>Buy When Ready</h3>
            <p style={styles.stepDescription}>
              Purchase items at your convenience using saved links and information.
            </p>
          </div>
        </div>
      </div>

      {/* Detailed Steps Section */}
      <div style={styles.container}>
        <div style={styles.detailedStepsSection}>
          {/* Step 1 */}
          <div style={styles.stepDetail}>
            <div style={styles.stepContent}>
              <div style={styles.stepDetailNumber}>1</div>
              <h2 style={styles.stepDetailTitle}>Find Products You're Interested In</h2>
              <p style={styles.stepDetailDescription}>
                As you browse online retailers like Amazon, eBay, Best Buy, or any other online store, 
                you'll find products that catch your eye but you're not ready to buy right away. 
                ProductSaver helps you keep track of these items without having to purchase them immediately.
              </p>
              <ul style={styles.featureList}>
                <li style={styles.featureItem}>
                  <CheckIcon />
                  <span style={styles.featureText}>
                    Browse any online retailer or marketplace
                  </span>
                </li>
                <li style={styles.featureItem}>
                  <CheckIcon />
                  <span style={styles.featureText}>
                    Discover products through social media, blogs, or friends' recommendations
                  </span>
                </li>
                <li style={styles.featureItem}>
                  <CheckIcon />
                  <span style={styles.featureText}>
                    Research items you're interested in purchasing in the future
                  </span>
                </li>
              </ul>
              <div style={styles.tipBox}>
                <div style={styles.tipTitle}>
                  <TipIcon />
                  Pro Tip
                </div>
                <p style={styles.tipText}>
                  Use our browser extension to quickly save products while browsing. One click captures all the 
                  essential information without interrupting your shopping experience.
                </p>
              </div>
            </div>
            <div style={styles.stepImage}>
              <img 
                src="https://images.yourstory.com/cs/1/ecb6f7c0-c89f-11e9-8d3c-8385efb8d0a0/Online_Store1566908316631.jpg?mode=crop&crop=faces&ar=16%3A9&format=auto&w=1920&q=75" 
                alt="Browsing products online" 
                style={{width: '100%', height: 'auto'}}
              />
            </div>
          </div>

          {/* Step 2 */}
          <div style={styles.stepDetailReverse}>
            <div style={styles.stepContent}>
              <div style={styles.stepDetailNumber}>2</div>
              <h2 style={styles.stepDetailTitle}>Save All the Important Details</h2>
              <p style={styles.stepDetailDescription}>
                When you find something you like, use ProductSaver to capture all the essential information. 
                Our platform makes it easy to store everything you'll need to make an informed purchase decision later.
              </p>
              <ul style={styles.featureList}>
                <li style={styles.featureItem}>
                  <CheckIcon />
                  <span style={styles.featureText}>
                    Save high-quality product images to remind you what caught your eye
                  </span>
                </li>
                <li style={styles.featureItem}>
                  <CheckIcon />
                  <span style={styles.featureText}>
                    Record product names, descriptions, and specifications
                  </span>
                </li>
                <li style={styles.featureItem}>
                  <CheckIcon />
                  <span style={styles.featureText}>
                    Store current prices and track price changes over time
                  </span>
                </li>
                <li style={styles.featureItem}>
                  <CheckIcon />
                  <span style={styles.featureText}>
                    Save direct purchase links to make buying seamless when you're ready
                  </span>
                </li>
                <li style={styles.featureItem}>
                  <CheckIcon />
                  <span style={styles.featureText}>
                    Add notes, tags, and organize items into collections
                  </span>
                </li>
              </ul>
              <div style={styles.tipBox}>
                <div style={styles.tipTitle}>
                  <TipIcon />
                  Pro Tip
                </div>
                <p style={styles.tipText}>
                  Set price drop alerts for your saved items. We'll notify you when prices fall below your target, 
                  so you can get the best deals on products you want.
                </p>
              </div>
            </div>
            <div style={styles.stepImage}>
              <img 
                src={howitworks}
                alt="Saving product details" 
                style={{width: '100%', height: 'auto'}}
              />
            </div>
          </div>

          {/* Step 3 */}
          <div style={styles.stepDetail}>
            <div style={styles.stepContent}>
              <div style={styles.stepDetailNumber}>3</div>
              <h2 style={styles.stepDetailTitle}>Buy When You're Ready</h2>
              <p style={styles.stepDetailDescription}>
                When the time is right—whether you've saved enough money, the price has dropped, or you simply decide 
                it's time to make the purchase—all the information you need is organized and ready in ProductSaver.
              </p>
              <ul style={styles.featureList}>
                <li style={styles.featureItem}>
                  <CheckIcon />
                  <span style={styles.featureText}>
                    Click the saved purchase link to go directly to the product page
                  </span>
                </li>
                <li style={styles.featureItem}>
                  <CheckIcon />
                  <span style={styles.featureText}>
                    Review saved details and price history before buying
                  </span>
                </li>
                <li style={styles.featureItem}>
                  <CheckIcon />
                  <span style={styles.featureText}>
                    Compare current prices with your saved information
                  </span>
                </li>
                <li style={styles.featureItem}>
                  <CheckIcon />
                  <span style={styles.featureText}>
                    Check alternative retailers if available
                  </span>
                </li>
                <li style={styles.featureItem}>
                  <CheckIcon />
                  <span style={styles.featureText}>
                    Mark items as purchased or archive them after buying
                  </span>
                </li>
              </ul>
              <div style={styles.tipBox}>
                <div style={styles.tipTitle}>
                  <TipIcon />
                  Pro Tip
                </div>
                <p style={styles.tipText}>
                  Keep your purchase history in ProductSaver for warranty information, return periods, and to build 
                  a record of your shopping habits that can help with budgeting.
                </p>
              </div>
            </div>
            <div style={styles.stepImage}>
              <img 
                src={howitworks2}
                alt="Making a purchase" 
                style={{width: '100%', height: 'auto'}}
              />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section style={styles.faqSection}>
        <div style={styles.container}>
          <h2 style={styles.faqTitle}>Frequently Asked Questions</h2>
          <div style={styles.faqGrid}>
            <div style={styles.faqItem}>
              <h3 style={styles.faqQuestion}>How do I add items to ProductSaver?</h3>
              <p style={styles.faqAnswer}>
                You can add items in three ways: using our browser extension while shopping online, manually entering 
                product details on our website or app, or by copying and pasting a product URL into ProductSaver.
              </p>
            </div>
            <div style={styles.faqItem}>
              <h3 style={styles.faqQuestion}>Can I organize products into different categories?</h3>
              <p style={styles.faqAnswer}>
                Yes! You can create custom collections like "Home Decor," "Tech Gadgets," or "Gift Ideas" to keep your 
                saved products organized. You can also use tags for more flexible organization.
              </p>
            </div>
            <div style={styles.faqItem}>
              <h3 style={styles.faqQuestion}>Does ProductSaver track price changes?</h3>
              <p style={styles.faqAnswer}>
                Absolutely. Once you save a product, we'll track its price over time and show you a price history graph. 
                You can also set price drop alerts to be notified when an item reaches your target price.
              </p>
            </div>
            <div style={styles.faqItem}>
              <h3 style={styles.faqQuestion}>Can I share my saved products with friends?</h3>
              <p style={styles.faqAnswer}>
                Yes, you can share individual items or entire collections with friends and family via email or 
                shareable links. This is perfect for creating gift wishlists or getting opinions before buying.
              </p>
            </div>
            <div style={styles.faqItem}>
              <h3 style={styles.faqQuestion}>Is there a limit to how many products I can save?</h3>
              <p style={styles.faqAnswer}>
                Free accounts can save up to 50 products. Premium accounts have unlimited product storage plus 
                additional features like price history analytics and priority price alerts.
              </p>
            </div>
            <div style={styles.faqItem}>
              <h3 style={styles.faqQuestion}>Does ProductSaver work on mobile devices?</h3>
              <p style={styles.faqAnswer}>
                Yes! ProductSaver is available as both a web platform and mobile app for iOS and Android. Your saved 
                products sync across all your devices automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.cta}>
        <div style={styles.container}>
          <h2 style={styles.ctaTitle}>Ready to Start Saving Products?</h2>
          <p style={styles.ctaText}>
            Join thousands of smart shoppers who use ProductSaver to track products they want to buy in the future. 
            Sign up now and never lose track of your wishlist items again.
          </p>
          <Link to={'/signup'}>
          <button style={styles.ctaButton}>Create Your Free Account</button>
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
                The smart way to save products now and buy them later when you're ready.
              </p>
            </div>
            <div style={styles.footerColumn}>
              <h3 style={styles.footerTitle}>Product</h3>
              <ul style={styles.footerLinks}>
                <li style={styles.footerLink}><a href="#" style={styles.footerLinkAnchor}>Features</a></li>
                <li style={styles.footerLink}><a href="#" style={styles.footerLinkAnchor}>Pricing</a></li>
                <li style={styles.footerLink}><a href="#" style={styles.footerLinkAnchor}>FAQ</a></li>
              </ul>
            </div>
            <div style={styles.footerColumn}>
              <h3 style={styles.footerTitle}>Company</h3>
              <ul style={styles.footerLinks}>
                <li style={styles.footerLink}><a href="#" style={styles.footerLinkAnchor}>About Us</a></li>
                <li style={styles.footerLink}><a href="#" style={styles.footerLinkAnchor}>Contact</a></li>
                <li style={styles.footerLink}><a href="#" style={styles.footerLinkAnchor}>Blog</a></li>
              </ul>
            </div>
            <div style={styles.footerColumn}>
              <h3 style={styles.footerTitle}>Legal</h3>
              <ul style={styles.footerLinks}>
                <li style={styles.footerLink}><a href="#" style={styles.footerLinkAnchor}>Privacy Policy</a></li>
                <li style={styles.footerLink}><a href="#" style={styles.footerLinkAnchor}>Terms of Service</a></li>
                <li style={styles.footerLink}><a href="#" style={styles.footerLinkAnchor}>Cookie Policy</a></li>
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

export default HowItWorksPage;