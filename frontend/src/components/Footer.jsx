import React from 'react'

const Footer = () => {

    const styles = {
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
            hero: {
              flexDirection: 'column',
              textAlign: 'center',
              padding: '60px 0',
            },
            heroContent: {
              maxWidth: '100%',
            },
            featureGrid: {
              gridTemplateColumns: '1fr',
            },
            steps: {
              flexDirection: 'column',
              alignItems: 'center',
              gap: '40px',
            },
            step: {
              width: '100%',
              maxWidth: '300px',
            },
            stepConnector: {
              display: 'none',
            },
            exampleCard: {
              flexDirection: 'column',
            },
            exampleImage: {
              height: '200px',
            },
            footerTop: {
              flexDirection: 'column',
              gap: '40px',
            },
            footerColumn: {
              maxWidth: '100%',
            },
          }
    }
  return (
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
            <li style={styles.footerLink}><a href="#features" style={styles.footerLinkAnchor}>Features</a></li>
            <li style={styles.footerLink}><a href="#examples" style={styles.footerLinkAnchor}>Examples</a></li>
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
  )
}

export default Footer