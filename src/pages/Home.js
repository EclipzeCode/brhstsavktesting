import React from 'react';
import { useNavigate } from 'react-router-dom';
import RotatingText from '../components/ReactBits/RotatingText';
import CountUp from '../components/ReactBits/CountUp';
import SpotlightCard from '../components/ReactBits/SpotlightCard';
import Dock from '../components/ReactBits/Dock';
import BlurText from '../components/ReactBits/BlurText';
import GradientText from '../components/ReactBits/GradientText';
import ShinyText from '../components/ReactBits/ShinyText';
import MagicBento from '../components/ReactBits/MagicBento';
import AnimatedList from '../components/ReactBits/AnimatedList';
import FeatureCards from '../components/ReactBits/FeatureCards';
import DarkVeil from '../components/ReactBits/DarkVeil';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const rotatingTexts = ['Computer Science', 'Neuroscience', 'Finance', 'Pre-Med', 'Engineering', 'Biotechnology', 'Debate', 'Public Speaking', 'Robotics'];


  const quickFacts = [
    'Over 300,000 members nationwide',
    '40 Competition Events',
    '10 Disciples of STEM',
    'State & National Recognition',
    'Travel to Conferences',
    'Industry Partnerships and Potential Internships',
  ];

  const nationalsInfo = {
    date: "June 22nd to 26th",
    location: "Washington, DC area at the Gaylord National Harbor Resort & Convention Center",
    theme: "Unity Through Community"
  };

  return (
    <div className="page home-page">
      {/* Remove PillNav from here since it's now in App.js */}
      <section className="hero-section">
        <div className="hero-background">
          <DarkVeil
            hueShift={0.5}
            noiseIntensity={0.03}
            scanlineIntensity={0.01}
            className="hero-dark-veil"
          />
        </div>
        <div className="container hero-content">
          <h1 className="hero-title">
            <GradientText
              colors={["#8400ff", "#00c1ff", "#8400ff"]}
              animationSpeed={8}
              showBorder={false}
            >
              Bridgewater-Raritan
            </GradientText>
            <br />
            <ShinyText
              text="Technology Student Association"
              speed={5}
              className="tsa-text"
            />
          </h1>
          <div className="hero-subtitle">
            <span>TSA has students passionate about </span>
            <RotatingText
              texts={rotatingTexts}
              mainClassName="rotating-highlight"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>
          <div className="cta-buttons">
            <SpotlightCard
              className="cta-card"
              spotlightColor="rgba(132, 0, 255, 0.25)"
              onClick={() => navigate('/about')}
            >
              <span>Join Us Today</span>
            </SpotlightCard>
            <SpotlightCard
              className="cta-card"
              spotlightColor="rgba(0, 193, 255, 0.25)"
              onClick={() => navigate('/meetings')}
            >
              <span>View Schedule</span>
            </SpotlightCard>
          </div>
        </div>
      </section>
      <section className="description-section">
        <div className="container">
          <BlurText
            text="TSA is a event-based national organization, similar to DECA, FBLA, or FHLA/HOSA, except for STEM/Medical Fields."
            delay={0}
            className="description-text"
            animateBy="words"
            direction="top"
            threshold={0.1}
          />
        </div>
      </section>
      <section className="features-section">
        <div className="container">
          <FeatureCards />
        </div>
      </section>



      <section className="quick-facts-section">
        <div className="container">
          <h2 className="section-title">
            <GradientText colors={["#8400ff", "#00c1ff"]}>
              Quick Facts
            </GradientText>
          </h2>
          <AnimatedList
            items={quickFacts}
            showGradients={true}
            enableArrowNavigation={false}
            displayScrollbar={false}
            className="facts-list"
          />
        </div>
      </section>
            <section className="bento-section">
        <div className="container">
          <h2 className="section-title">
            <GradientText colors={["#8400ff", "#00c1ff"]}>
              What We Offer
            </GradientText>
          </h2>
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="132, 0, 255"
          />
        </div>
      </section>
      <section className="google-classroom-section">
        <div className="container">
          <SpotlightCard className="classroom-code-card" spotlightColor="rgba(34, 139, 34, 0.3)">
            <div className="classroom-code-content">
              <div className="code-label">
                <span className="code-label-text">Google Classroom Code</span>
              </div>
              <div className="code-display">
                <GradientText
                  colors={["#22c55e", "#16a34a", "#22c55e"]}
                  animationSpeed={6}
                  className="classroom-code"
                >
                  vbgiwiu
                </GradientText>
              </div>
              <div className="code-description">
                <BlurText
                  text="Join our Google Classroom to access resources, submit assignments, and stay connected with the team"
                  className="code-description-text"
                  animateBy="words"
                  delay={100}
                />
              </div>
            </div>
          </SpotlightCard>
        </div>
      </section>

      <section className="stats-section">
        <div className="container stats-content">
          <div className="stats-grid">
            <SpotlightCard className="stat-card" spotlightColor="rgba(132, 0, 255, 0.3)">
              <CountUp
                to={40}
                from={0}
                duration={2}
                delay={0.5}
                className="stat-number"
              />
              <h3>Events</h3>
              <p>With over 40 events, there's a competition designed for anyone to excel in. Low cost, low competition, and high prestige make this the perfect high school club for everyone in STEM.</p>
            </SpotlightCard>
            
            <SpotlightCard className="stat-card" spotlightColor="rgba(0, 193, 255, 0.3)">
              <CountUp
                to={300000}
                from={0}
                duration={2}
                delay={1}
                className="stat-number"
              />
              <h3>Members</h3>
              <p>With over 300,000 members nationwide, TSA offers a vast network of peers and professionals in STEM fields, along with less competition across the variety of competitons.</p>
            </SpotlightCard>
            
            <SpotlightCard className="stat-card" spotlightColor="rgba(255, 107, 0, 0.3)">
              <CountUp
                to={2}
                from={0}
                duration={2}
                delay={1.5}
                className="stat-number"
              />
              <h3>Major Competitions</h3>
              <p>With states and national competitions, there's lots of opportunity for awards and recognition on both levels.</p>
            </SpotlightCard>
          </div>
        </div>
      </section>



      <section className="nationals-announcement-section">
        <div className="container">
          <SpotlightCard className="nationals-announcement-card" spotlightColor="rgba(255, 107, 0, 0.3)">
            <h2>
              <GradientText colors={["#ff6b00", "#8400ff"]}>
                2026 National TSA Conference
              </GradientText>
            </h2>
            <BlurText
              text={`The 2026 National TSA Conference will be held ${nationalsInfo.date} in the ${nationalsInfo.location}. The theme of the 2026 conference is ${nationalsInfo.theme}.`}
              animateBy="words"
              delay={200}
            />
          </SpotlightCard>
        </div>
      </section>


      <div className="dock-navigation">
        <Dock 
          items={dockItems}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
          distance={200}
        />
      </div>
    </div>
  );
};

export default Home;