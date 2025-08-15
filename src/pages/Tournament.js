import React from 'react';
import SpotlightCard from '../components/ReactBits/SpotlightCard';
import GradientText from '../components/ReactBits/GradientText';
import BlurText from '../components/ReactBits/BlurText';
import CountUp from '../components/ReactBits/CountUp';
import Particles from '../components/ReactBits/Particles';
import DarkVeil from '../components/ReactBits/DarkVeil';
import { FiExternalLink, FiMapPin, FiCalendar, FiUsers, FiTarget, FiTrendingUp, FiCode, FiGlobe, FiHeart, FiBook, FiZap, FiStar, FiCheckCircle, FiClock, FiFileText, FiDollarSign, FiTruck } from 'react-icons/fi';
import './Tournament.css';

const Tournament = () => {
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

  const partners = [
    "Coders Over Borders",
    "BRHS DECA", 
    "BRHS FBLA",
    "BRHS Philosophy Club",
    "BR Engineering",
    "BR Christian Club",
    "Faith Fusion Club"
  ];

  const eventDetails = [
    {
      icon: <FiCalendar />,
      title: "Date & Time",
      info: "October 3, 2025",
      description: "Mark your calendars for this exciting competition"
    },
    {
      icon: <FiMapPin />,
      title: "Location",
      info: "Bridgewater-Raritan High School",
      description: "Large Gym, 600 Garretson Road, Bridgewater, NJ"
    },
    {
      icon: <FiUsers />,
      title: "Eligibility",
      info: "High School & Middle School",
      description: "No college students allowed"
    },
    {
      icon: <FiTruck />,
      title: "Food & Refreshments",
      info: "Kona Ice & Rita's Italian Ice",
      description: "Food trucks available on-site"
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
              <span>$900+ in Prizes</span>
            </div>
          </div>
        </div>
      </section>

      <section className="registration-section">
        <div className="container">
          <h2 className="section-title">
            <GradientText colors={["#FFD700", "#8400ff"]}>
              Tournament Registration
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
            </SpotlightCard>

            <SpotlightCard className="registration-form-card" spotlightColor="rgba(132, 0, 255, 0.2)">
              <div className="form-placeholder">
                <div className="form-icon">
                  <FiFileText />
                </div>
                <h3>Registration Form</h3>
                <p>Embedded registration form will be placed here</p>
                <div className="form-instructions">
                  <p>The registration form will include:</p>
                  <ul>
                    <li>Team name and school</li>
                    <li>Team member information</li>
                    <li>Contact details</li>
                    <li>Payment processing</li>
                  </ul>
                </div>
              </div>
            </SpotlightCard>
          </div>
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

      <section className="location-section">
        <div className="container">
          <h2 className="section-title">
            <GradientText colors={["#8400ff", "#00c1ff"]}>
              Tournament Location and Information
            </GradientText>
          </h2>
          
          <div className="location-layout">
            <SpotlightCard className="location-info-card" spotlightColor="rgba(132, 0, 255, 0.2)">
              <div className="location-header">
                <div className="location-icon">
                  <FiMapPin />
                </div>
                <div>
                  <h3>Bridgewater-Raritan High School</h3>
                  <p>Large Gymnasium</p>
                </div>
              </div>
              <div className="address-display">
                <p>600 Garretson Road</p>
                <p>Bridgewater, NJ 08807</p>
              </div>
              <div className="location-features">
                <div className="feature-item">
                  <FiUsers />
                  <span>Large Competition Space</span>
                </div>
                <div className="feature-item">
                  <FiTruck />
                  <span>Food Trucks On-Site</span>
                </div>
                <div className="feature-item">
                  <FiMapPin />
                  <span>Easy Access & Parking</span>
                </div>
              </div>
            </SpotlightCard>

            <SpotlightCard className="map-card" spotlightColor="rgba(0, 193, 255, 0.2)">
              <div className="map-embed">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.5234567!2d-74.6352778!3d40.5891667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c39a4c5e8f4b45%3A0x5e8f4b45c39a4c5e!2s600%20Garretson%20Rd%2C%20Bridgewater%2C%20NJ%2008807!5e0!3m2!1sen!2sus!4v1640995200000!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: '10px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tournament Location Map"
                ></iframe>
              </div>
              <div className="map-footer">
                <a 
                  href="https://maps.google.com/?q=600+Garretson+Rd,+Bridgewater,+NJ+08807"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="directions-link"
                >
                  <FiExternalLink />
                  <span>Get Directions</span>
                </a>
              </div>
            </SpotlightCard>
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

      <section className="partners-section">
        <div className="container">
          <h2 className="section-title">
            <GradientText colors={["#8400ff", "#00c1ff"]}>
              Event Partners
            </GradientText>
          </h2>
          <BlurText
            text="This tournament is made possible through collaboration with amazing organizations"
            className="partners-subtitle"
            animateBy="words"
          />
          <div className="partners-grid">
            {partners.map((partner, index) => (
              <SpotlightCard key={index} className="partner-card" spotlightColor="rgba(255, 107, 0, 0.15)">
                <div className="partner-name">{partner}</div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tournament;