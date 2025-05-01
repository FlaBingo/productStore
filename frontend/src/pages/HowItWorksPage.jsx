import React from 'react';
import { Link } from 'react-router-dom';
import howitworks from "../assets/howitworks.png"
import howitworks2 from "../assets/howitworks2.png"
import Footer from '../components/Footer';
import { applyStyles } from '../utils/applyStyles';

const HowItWorksPage = () => {

  // Light bulb icon for tips
  const TipIcon = () => (
    <span style={{marginRight: '8px', fontSize: '20px'}}>💡</span>
  );

  // Check mark icon for feature list
  const CheckIcon = () => (
    <span style={applyStyles("how_featureIcon")}>✓</span>
  );

  return (
    <div>
      {/* Header */}
      <div style={applyStyles("how_container")}>
        <header style={applyStyles("how_header")}>
          <a href="/" style={applyStyles("how_logo")}>ProductSaver</a>
          <nav style={applyStyles("how_nav")}>
            <a href="/" style={applyStyles("how_navLink")}>Home</a>
            <a href="/how-it-works" style={applyStyles("navLink")}>How It Works</a>
            <Link to={'/login'}>
            <button style={applyStyles("how_loginButton")}>Log In</button>
            </Link>
            <Link to={'/signup'}>
            <button style={applyStyles("how_signupButton")}>Sign Up</button>
            </Link>
          </nav>
        </header>
      </div>

      {/* Page Header */}
      <div style={applyStyles("how_container")}>
        <div style={applyStyles("how_pageHeader")}>
          <h1 style={applyStyles("how_pageTitle")}>How ProductSaver Works</h1>
          <p style={applyStyles("how_pageDescription")}>
            Learn how to use ProductSaver to save products now and buy them later when you're ready, 
            all while keeping track of prices, details, and purchase links.
          </p>
        </div>
      </div>

      {/* Process Overview */}
      <div style={applyStyles("how_container")}>
        <div style={applyStyles("how_processOverview")}>
          <div style={applyStyles("how_processStep")}>
            <div style={applyStyles("how_stepNumber")}>1</div>
            <h3 style={applyStyles("how_stepTitle")}>Find Products</h3>
            <p style={applyStyles("how_stepDescription")}>
              Discover products you love while browsing online shops and marketplaces.
            </p>
          </div>
          <div style={applyStyles("how_processArrow")}>
            <div style={applyStyles("how_arrowHead")}></div>
          </div>
          <div style={applyStyles("how_processStep")}>
            <div style={applyStyles("how_stepNumber")}>2</div>
            <h3 style={applyStyles("how_stepTitle")}>Save Details</h3>
            <p style={applyStyles("how_stepDescription")}>
              Add all product information to ProductSaver for future reference.
            </p>
          </div>
          <div style={applyStyles("how_processArrow2")}>
            <div style={applyStyles("how_arrowHead")}></div>
          </div>
          <div style={applyStyles("how_processStep")}>
            <div style={applyStyles("how_stepNumber")}>3</div>
            <h3 style={applyStyles("how_stepTitle")}>Buy When Ready</h3>
            <p style={applyStyles("how_stepDescription")}>
              Purchase items at your convenience using saved links and information.
            </p>
          </div>
        </div>
      </div>

      {/* Detailed Steps Section */}
      <div style={applyStyles("how_container")}>
        <div style={applyStyles("how_detailedStepsSection")}>
          {/* Step 1 */}
          <div style={applyStyles("how_stepDetail")}>
            <div style={applyStyles("how_stepContent")}>
              <div style={applyStyles("how_stepDetailNumber")}>1</div>
              <h2 style={applyStyles("how_stepDetailTitle")}>Find Products You're Interested In</h2>
              <p style={applyStyles("how_stepDetailDescription")}>
                As you browse online retailers like Amazon, eBay, Best Buy, or any other online store, 
                you'll find products that catch your eye but you're not ready to buy right away. 
                ProductSaver helps you keep track of these items without having to purchase them immediately.
              </p>
              <ul style={applyStyles("how_featureList")}>
                <li style={applyStyles("how_featureItem")}>
                  <CheckIcon />
                  <span style={applyStyles("how_featureText")}>
                    Browse any online retailer or marketplace
                  </span>
                </li>
                <li style={applyStyles("how_featureItem")}>
                  <CheckIcon />
                  <span style={applyStyles("how_featureText")}>
                    Discover products through social media, blogs, or friends' recommendations
                  </span>
                </li>
                <li style={applyStyles("how_featureItem")}>
                  <CheckIcon />
                  <span style={applyStyles("how_featureText")}>
                    Research items you're interested in purchasing in the future
                  </span>
                </li>
              </ul>
              <div style={applyStyles("how_tipBox")}>
                <div style={applyStyles("how_tipTitle")}>
                  <TipIcon />
                  Pro Tip
                </div>
                <p style={applyStyles("how_tipText")}>
                  Use our browser extension to quickly save products while browsing. One click captures all the 
                  essential information without interrupting your shopping experience.
                </p>
              </div>
            </div>
            <div style={applyStyles("how_stepImage")}>
              <img 
                src="https://images.yourstory.com/cs/1/ecb6f7c0-c89f-11e9-8d3c-8385efb8d0a0/Online_Store1566908316631.jpg?mode=crop&crop=faces&ar=16%3A9&format=auto&w=1920&q=75" 
                alt="Browsing products online" 
                style={{width: '100%', height: 'auto'}}
              />
            </div>
          </div>

          {/* Step 2 */}
          <div style={applyStyles("how_stepDetailReverse")}>
            <div style={applyStyles("how_stepContent")}>
              <div style={applyStyles("how_stepDetailNumber")}>2</div>
              <h2 style={applyStyles("how_stepDetailTitle")}>Save All the Important Details</h2>
              <p style={applyStyles("how_stepDetailDescription")}>
                When you find something you like, use ProductSaver to capture all the essential information. 
                Our platform makes it easy to store everything you'll need to make an informed purchase decision later.
              </p>
              <ul style={applyStyles("how_featureList")}>
                <li style={applyStyles("how_featureItem")}>
                  <CheckIcon />
                  <span style={applyStyles("how_featureText")}>
                    Save high-quality product images to remind you what caught your eye
                  </span>
                </li>
                <li style={applyStyles("how_featureItem")}>
                  <CheckIcon />
                  <span style={applyStyles("how_featureText")}>
                    Record product names, descriptions, and specifications
                  </span>
                </li>
                <li style={applyStyles("how_featureItem")}>
                  <CheckIcon />
                  <span style={applyStyles("how_featureText")}>
                    Store current prices and track price changes over time
                  </span>
                </li>
                <li style={applyStyles("how_featureItem")}>
                  <CheckIcon />
                  <span style={applyStyles("how_featureText")}>
                    Save direct purchase links to make buying seamless when you're ready
                  </span>
                </li>
                <li style={applyStyles("how_featureItem")}>
                  <CheckIcon />
                  <span style={applyStyles("how_featureText")}>
                    Add notes, tags, and organize items into collections
                  </span>
                </li>
              </ul>
              <div style={applyStyles("how_tipBox")}>
                <div style={applyStyles("how_tipTitle")}>
                  <TipIcon />
                  Pro Tip
                </div>
                <p style={applyStyles("how_tipText")}>
                  Set price drop alerts for your saved items. We'll notify you when prices fall below your target, 
                  so you can get the best deals on products you want.
                </p>
              </div>
            </div>
            <div style={applyStyles("how_stepImage")}>
              <img 
                src={howitworks}
                alt="Saving product details" 
                style={{width: '100%', height: 'auto'}}
              />
            </div>
          </div>

          {/* Step 3 */}
          <div style={applyStyles("how_stepDetail")}>
            <div style={applyStyles("how_stepContent")}>
              <div style={applyStyles("how_stepDetailNumber")}>3</div>
              <h2 style={applyStyles("how_stepDetailTitle")}>Buy When You're Ready</h2>
              <p style={applyStyles("how_stepDetailDescription")}>
                When the time is right—whether you've saved enough money, the price has dropped, or you simply decide 
                it's time to make the purchase—all the information you need is organized and ready in ProductSaver.
              </p>
              <ul style={applyStyles("how_featureList")}>
                <li style={applyStyles("how_featureItem")}>
                  <CheckIcon />
                  <span style={applyStyles("how_featureText")}>
                    Click the saved purchase link to go directly to the product page
                  </span>
                </li>
                <li style={applyStyles("how_featureItem")}>
                  <CheckIcon />
                  <span style={applyStyles("how_featureText")}>
                    Review saved details and price history before buying
                  </span>
                </li>
                <li style={applyStyles("how_featureItem")}>
                  <CheckIcon />
                  <span style={applyStyles("how_featureText")}>
                    Compare current prices with your saved information
                  </span>
                </li>
                <li style={applyStyles("how_featureItem")}>
                  <CheckIcon />
                  <span style={applyStyles("how_featureText")}>
                    Check alternative retailers if available
                  </span>
                </li>
                <li style={applyStyles("how_featureItem")}>
                  <CheckIcon />
                  <span style={applyStyles("how_featureText")}>
                    Mark items as purchased or archive them after buying
                  </span>
                </li>
              </ul>
              <div style={applyStyles("how_tipBox")}>
                <div style={applyStyles("how_tipTitle")}>
                  <TipIcon />
                  Pro Tip
                </div>
                <p style={applyStyles("how_tipText")}>
                  Keep your purchase history in ProductSaver for warranty information, return periods, and to build 
                  a record of your shopping habits that can help with budgeting.
                </p>
              </div>
            </div>
            <div style={applyStyles("how_stepImage")}>
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
      <section style={applyStyles("how_faqSection")}>
        <div style={applyStyles("how_container")}>
          <h2 style={applyStyles("how_faqTitle")}>Frequently Asked Questions</h2>
          <div style={applyStyles("how_faqGrid")}>
            <div style={applyStyles("how_faqItem")}>
              <h3 style={applyStyles("how_faqQuestion")}>How do I add items to ProductSaver?</h3>
              <p style={applyStyles("how_faqAnswer")}>
                You can add items in three ways: using our browser extension while shopping online, manually entering 
                product details on our website or app, or by copying and pasting a product URL into ProductSaver.
              </p>
            </div>
            <div style={applyStyles("how_faqItem")}>
              <h3 style={applyStyles("how_faqQuestion")}>Can I organize products into different categories?</h3>
              <p style={applyStyles("how_faqAnswer")}>
                Yes! You can create custom collections like "Home Decor," "Tech Gadgets," or "Gift Ideas" to keep your 
                saved products organized. You can also use tags for more flexible organization.
              </p>
            </div>
            <div style={applyStyles("how_faqItem")}>
              <h3 style={applyStyles("how_faqQuestion")}>Does ProductSaver track price changes?</h3>
              <p style={applyStyles("how_faqAnswer")}>
                Absolutely. Once you save a product, we'll track its price over time and show you a price history graph. 
                You can also set price drop alerts to be notified when an item reaches your target price.
              </p>
            </div>
            <div style={applyStyles("how_faqItem")}>
              <h3 style={applyStyles("how_faqQuestion")}>Can I share my saved products with friends?</h3>
              <p style={applyStyles("how_faqAnswer")}>
                Yes, you can share individual items or entire collections with friends and family via email or 
                shareable links. This is perfect for creating gift wishlists or getting opinions before buying.
              </p>
            </div>
            <div style={applyStyles("how_faqItem")}>
              <h3 style={applyStyles("how_faqQuestion")}>Is there a limit to how many products I can save?</h3>
              <p style={applyStyles("how_faqAnswer")}>
                Free accounts can save up to 50 products. Premium accounts have unlimited product storage plus 
                additional features like price history analytics and priority price alerts.
              </p>
            </div>
            <div style={applyStyles("how_faqItem")}>
              <h3 style={applyStyles("how_faqQuestion")}>Does ProductSaver work on mobile devices?</h3>
              <p style={applyStyles("how_faqAnswer")}>
                Yes! ProductSaver is available as both a web platform and mobile app for iOS and Android. Your saved 
                products sync across all your devices automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={applyStyles("how_cta")}>
        <div style={applyStyles("how_container")}>
          <h2 style={applyStyles("how_ctaTitle")}>Ready to Start Saving Products?</h2>
          <p style={applyStyles("how_ctaText")}>
            Join thousands of smart shoppers who use ProductSaver to track products they want to buy in the future. 
            Sign up now and never lose track of your wishlist items again.
          </p>
          <Link to={'/signup'}>
          <button style={applyStyles("how_ctaButton")}>Create Your Free Account</button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HowItWorksPage;