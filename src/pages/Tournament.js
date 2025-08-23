import React, { useEffect } from 'react';
import SpotlightCard from '../components/ReactBits/SpotlightCard';
import GradientText from '../components/ReactBits/GradientText';
import BlurText from '../components/ReactBits/BlurText';
import CountUp from '../components/ReactBits/CountUp';
import Particles from '../components/ReactBits/Particles';
import DarkVeil from '../components/ReactBits/DarkVeil';
import CircularGallery from '../components/ReactBits/CircularGallery';
import { FiExternalLink, FiMapPin, FiCalendar, FiUsers, FiFileText, FiDollarSign, FiTruck, FiClock, FiCheckCircle } from 'react-icons/fi';
import './Tournament.css';

const Tournament = () => {
  useEffect(() => {
    // Load Typeform embed script
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Clean up script when component unmounts
      document.head.removeChild(script);
    };
  }, []);

  const prizeBreakdown = [
    { place: '1st', amount: 500, color: '#FFD700', icon: '🥇' },
    { place: '2nd', amount: 250, color: '#C0C0C0', icon: '🥈' },
    { place: '3rd', amount: 100, color: '#CD7F32', icon: '🥉' },
    { place: '4th & 5th', amount: 50, color: '#8400ff', icon: '🏆' }
  ];

  const tournamentStats = [
    { number: 32, label: "Teams Maximum", description: "Limited spots available" },
    { number: 10, label: "Registration Fee", description: "Per person entry", prefix: "$" },
    { number: 500, label: "First Place Prize", description: "Winner takes it all", prefix: "$" },
    { number: 100, label: "Percentage NJ Schools", description: "All schools welcome", suffix: "%" }
  ];

  const eventDetails = [
    {
      icon: <FiCalendar />,
      title: "Date & Time",
      info: "October 3, 2025",
      description: "Mark your calendars for this exciting competition",
      image: process.env.PUBLIC_URL + "/assets/tournament/calendar.jpg"
    },
    {
      icon: <FiMapPin />,
      title: "Location",
      info: "Bridgewater-Raritan High School",
      description: "Large Gym, 600 Garretson Road, Bridgewater, NJ",
      image: process.env.PUBLIC_URL + "/assets/tournament/location.jpg"
    },
    {
      icon: <FiUsers />,
      title: "Eligibility",
      info: "High School & Middle School",
      description: "No college students allowed. Only 1 varsity player per team allowed.",
      image: process.env.PUBLIC_URL + "/assets/tournament/team.jpg"
    },
    {
      icon: <FiTruck />,
      title: "Food & Refreshments",
      info: "Kona Ice & Rita's Italian Ice",
      description: "Food trucks available on-site",
      image: process.env.PUBLIC_URL + "/assets/tournament/food.jpg"
    }
  ];

  return (
    <div className="page tournament-page">
      <section className="tournament-hero">
        <div className="tournament-background">
          <DarkVeil
            hueShift={60}
            noiseIntensity={0.02}
            scanlineIntensity={0.005}
            className="tournament-dark-veil"
          />
          <Particles
            colors={["#FFD700", "#8400ff", "#00c1ff"]}
            count={80}
            speed={0.4}
            size={2.5}
            className="tournament-particles"
          />
        </div>
        <div className="container tournament-content">
          <h1 className="page-title">
            <GradientText
              colors={["#FFD700", "#8400ff", "#FFD700"]}
              animationSpeed={8}
            >
              3v3 Tournament
            </GradientText>
          </h1>
          <BlurText
            text="Join the ultimate coding competition in New Jersey - where teams of three battle for glory and prizes"
            className="hero-subtitle"
            animateBy="words"
            delay={100}
          />
          <div className="hero-badges">
            <div className="hero-badge">
              <FiCalendar />
              <span>October 3, 2025</span>
            </div>
            <div className="hero-badge">
              <FiMapPin />
              <span>Bridgewater-Raritan HS</span>
            </div>
            <div className="hero-badge">
              <FiDollarSign />
              <span>900+ in Prizes</span>
            </div>
          </div>
        </div>
      </section>



      <section className="registration-section">
        <div className="container">
          <h2 className="section-title">
            <GradientText colors={["#FFD700", "#8400ff"]}>
              Tournament Registration Here
            </GradientText>
          </h2>
          
          <div className="registration-layout">
            <SpotlightCard className="registration-info-card" spotlightColor="rgba(255, 215, 0, 0.2)">
              <div className="registration-header">
                <div className="registration-icon">
                  <FiFileText />
                </div>
                <div>
                  <h3>Ready to Compete?</h3>
                  <p>Register your team of 3 below</p>
                </div>
              </div>
              
              <div className="registration-requirements">
                <h4>Requirements:</h4>
                <ul>
                  <li>Teams of exactly 3 members</li>
                  <li>High school or middle school students only</li>
                  <li>Only 1 varsity player per team allowed</li>
                  <li>All team members from NJ schools</li>
                  <li>$10 registration fee per person</li>
                  <li>Limited to 32 teams - first come, first served</li>
                </ul>
              </div>
              
              <div className="registration-deadline">
                <div className="deadline-icon">
                  <FiClock />
                </div>
                <div>
                  <strong>Registration Deadline:</strong>
                  <p>September 20, 2025 (or when 32 teams are reached)</p>
                </div>
              </div>

              <div className="fair-play-notice">
                <div className="notice-icon">
                  <FiCheckCircle />
                </div>
                <div>
                  <strong>Fair Competition:</strong>
                  <p>All skill levels are welcome! Matches will be organized to ensure every team gets a fair chance to compete and succeed.</p>
                </div>
              </div>
            </SpotlightCard>

            <SpotlightCard className="registration-form-card" spotlightColor="rgba(132, 0, 255, 0.2)">
              <div className="registration-button-container">
                <div className="registration-call-to-action">
                  <h3>Join the Competition</h3>
                  <p>Click below to complete your team registration</p>
                </div>
                <a 
                  href="https://form.typeform.com/to/DGetFrgd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modern-registration-button"
                >
                  <span className="button-text">Sign Up Here</span>
                  <div className="button-glow"></div>
                  <FiExternalLink className="button-icon" />
                </a>
                <div className="registration-note">
                  <p>Opens in a new tab</p>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>
      <section className="gallery-section">
        <div style={{ height: '600px', position: 'relative' }}>
  <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
</div>
      </section>
      <section className="event-details-section">
        <div className="container">
          <h2 className="section-title">
            <GradientText colors={["#00c1ff", "#8400ff"]}>
              Event Details
            </GradientText>
          </h2>
          <div className="details-grid">
            {eventDetails.map((detail, index) => (
              <SpotlightCard key={index} className="detail-card" spotlightColor="rgba(0, 193, 255, 0.15)">
                <div className="detail-header">
                  <div className="detail-icon">
                    {detail.icon}
                  </div>
                  <h3>{detail.title}</h3>
                </div>
                <div className="detail-info">
                  <strong>{detail.info}</strong>
                </div>
                <p>{detail.description}</p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      <section className="prize-section">
        <div className="container">
          <h2 className="section-title">
            <GradientText colors={["#FFD700", "#8400ff"]}>
              Prize Breakdown
            </GradientText>
          </h2>
          <div className="prizes-grid">
            {prizeBreakdown.map((prize, index) => (
              <SpotlightCard 
                key={index} 
                className="prize-card" 
                spotlightColor={`${prize.color}33`}
              >
                <div className="prize-icon" style={{ color: prize.color }}>
                  {prize.icon}
                </div>
                <div className="prize-place" style={{ color: prize.color }}>
                  {prize.place} Place
                </div>
                <div className="prize-amount">
                  <CountUp
                    to={prize.amount}
                    from={0}
                    duration={2}
                    delay={index * 0.3}
                    prefix="$"
                  />
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      <section className="tournament-stats">
        <div className="container">
          <h2 className="section-title">
            <GradientText colors={["#8400ff", "#00c1ff"]}>
              Tournament by the Numbers
            </GradientText>
          </h2>
          <div className="stats-grid">
            {tournamentStats.map((stat, index) => (
              <SpotlightCard key={index} className="tournament-stat-card" spotlightColor="rgba(132, 0, 255, 0.15)">
                <div className="stat-number">
                  {stat.prefix && <span className="stat-prefix">{stat.prefix}</span>}
                  <CountUp
                    to={stat.number}
                    from={0}
                    duration={2}
                    delay={index * 0.2}
                  />
                  {stat.suffix && <span className="stat-suffix">{stat.suffix}</span>}
                </div>
                <h3>{stat.label}</h3>
                <p>{stat.description}</p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tournament;
