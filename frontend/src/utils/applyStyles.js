import { useEffect, useState } from "react";

export const applyStyles = (clname) => {



  const styles = {
    container: {
      fontFamily: "Inter, sans-serif",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 20px",
      color: "#333",
    },
    myContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
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
    myExampleCard: {
      maxWidth: "40%",
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



    // Howitworks Page

    how_container: {
      fontFamily: 'Inter, sans-serif',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
      color: '#333',
    },
    how_header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 0',
      borderBottom: '1px solid #E5E7EB',
    },
    how_logo: {
      fontSize: '28px',
      fontWeight: '700',
      color: '#4F46E5',
      textDecoration: 'none',
    },
    how_nav: {
      display: 'flex',
      gap: '16px',
      alignItems: 'center',
    },
    how_navLink: {
      color: '#4B5563',
      textDecoration: 'none',
      fontSize: '16px',
      fontWeight: '500',
      padding: '8px 12px',
      borderRadius: '6px',
      transition: 'background-color 0.2s',
    },
    how_activeNavLink: {
      color: '#4F46E5',
      fontWeight: '600',
    },
    how_loginButton: {
      color: '#4F46E5',
      border: '2px solid #4F46E5',
      padding: '8px 20px',
      borderRadius: '6px',
      fontWeight: '600',
      cursor: 'pointer',
      backgroundColor: 'transparent',
      transition: 'all 0.2s',
    },
    how_signupButton: {
      backgroundColor: '#4F46E5',
      color: 'white',
      border: 'none',
      padding: '10px 22px',
      borderRadius: '6px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
    },
    how_pageHeader: {
      textAlign: 'center',
      padding: '80px 0 40px',
    },
    how_pageTitle: {
      fontSize: '42px',
      fontWeight: '800',
      color: 'white',
      marginBottom: '20px',
      textShadow: "3px 3px 10px  black",
    },
    how_pageDescription: {
      fontSize: '18px',
      color: '#4B5563',
      maxWidth: '700px',
      margin: '0 auto',
      lineHeight: '1.6',
    },
    how_processOverview: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '40px 0 80px',
      position: 'relative',
    },
    how_processStep: {
      width: '30%',
      textAlign: 'center',
      padding: '20px',
      backgroundColor: '#F3F4F6',
      borderRadius: '8px',
      position: 'relative',
      zIndex: '1',
    },
    how_processArrow: {
      position: 'absolute',
      top: '50%',
      left: '33%',
      width: '30%',
      height: '2px',
      backgroundColor: '#D1D5DB',
      zIndex: '0',
    },
    how_processArrow2: {
      position: 'absolute',
      top: '50%',
      left: '66%',
      width: '30%',
      height: '2px',
      backgroundColor: '#D1D5DB',
      zIndex: '0',
    },
    how_arrowHead: {
      position: 'absolute',
      right: '-6px',
      top: '-4px',
      width: '0',
      height: '0',
      borderTop: '5px solid transparent',
      borderBottom: '5px solid transparent',
      borderLeft: '10px solid #D1D5DB',
    },
    how_stepNumber: {
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
    how_stepTitle: {
      fontSize: '20px',
      fontWeight: '700',
      marginBottom: '12px',
      color: '#111827',
    },
    how_stepDescription: {
      color: '#4B5563',
      fontSize: '16px',
      lineHeight: '1.5',
    },
    how_detailedStepsSection: {
      padding: '60px 0',
    },
    how_stepDetail: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '80px',
      gap: '40px',
    },
    how_stepDetailReverse: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '80px',
      gap: '40px',
      flexDirection: 'row-reverse',
    },
    how_stepContent: {
      flex: '1',
    },
    how_stepImage: {
      flex: '1',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    },
    how_stepDetailNumber: {
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
    how_stepDetailTitle: {
      fontSize: '28px',
      fontWeight: '700',
      marginBottom: '16px',
      color: 'white',
      textShadow: "3px 3px 7px black",
    },
    how_stepDetailDescription: {
      color: '#4B5563',
      fontSize: '17px',
      lineHeight: '1.7',
      marginBottom: '24px',
    },
    how_featureList: {
      padding: '0',
      margin: '0 0 24px 0',
      listStyle: 'none',
    },
    how_featureItem: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '12px',
    },
    how_featureIcon: {
      color: '#4F46E5',
      marginRight: '12px',
      fontSize: '20px',
    },
    how_featureText: {
      color: '#4B5563',
      fontSize: '16px',
      lineHeight: '1.5',
    },
    how_tipBox: {
      backgroundColor: '#EEF2FF',
      border: '1px solid #C7D2FE',
      borderRadius: '8px',
      padding: '16px 20px',
      marginTop: '24px',
    },
    how_tipTitle: {
      fontSize: '16px',
      fontWeight: '700',
      color: '#4F46E5',
      marginBottom: '8px',
      display: 'flex',
      alignItems: 'center',
    },
    how_tipText: {
      color: '#4B5563',
      fontSize: '15px',
      lineHeight: '1.6',
    },
    how_faqSection: {
      padding: '80px 0',
      backgroundColor: '#F9FAFB',
    },
    how_faqTitle: {
      fontSize: '32px',
      fontWeight: '700',
      textAlign: 'center',
      marginBottom: '40px',
      color: '#111827',
    },
    how_faqGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '24px',
    },
    how_faqItem: {
      backgroundColor: 'white',
      borderRadius: '8px',
      padding: '24px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    },
    how_faqQuestion: {
      fontSize: '18px',
      fontWeight: '700',
      marginBottom: '12px',
      color: '#111827',
    },
    how_faqAnswer: {
      color: '#4B5563',
      fontSize: '16px',
      lineHeight: '1.6',
    },
    how_cta: {
      textAlign: 'center',
      padding: '80px 0',
      backgroundColor: '#EEF2FF',
    },
    how_ctaTitle: {
      fontSize: '32px',
      fontWeight: '800',
      marginBottom: '24px',
      color: '#111827',
    },
    how_ctaText: {
      fontSize: '18px',
      color: '#4B5563',
      marginBottom: '40px',
      maxWidth: '600px',
      margin: '0 auto 40px',
      lineHeight: '1.6',
    },
    how_ctaButton: {
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







    "@media (max-width: 768px)": {
      navLink: {
        display: "none",
      },
      header: {
        flexDirection: "column",
        gap: "20px",
      },
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
      myExampleCard: {
        maxWidth: "70%",
      },



      // Howitworks Page
      how_header:{
        flexDirection: "column",
        gap: "20px"
      },
      how_processOverview: {
        flexDirection: 'column',
        gap: '40px',
        alignItems: 'center',
      },
      how_processStep: {
        width: '80%',
      },
      how_processArrow: {
        display: 'none',
      },
      how_processArrow2: {
        display: 'none',
      },
      how_stepDetail: {
        flexDirection: 'column',
      },
      how_stepDetailReverse: {
        flexDirection: 'column',
      },
      how_faqGrid: {
        gridTemplateColumns: '1fr',
      },
      how_footerTop: {
        flexDirection: 'column',
        gap: '40px',
      },
    },
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    ...styles[clname],
    ...(isMobile
      ? styles["@media (max-width: 768px)"][clname]
        ? styles["@media (max-width: 768px)"][clname]
        : {}
      : {}),
  };
};
