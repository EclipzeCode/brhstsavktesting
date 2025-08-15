import React from 'react';
import FlowingMenu from '../components/ReactBits/FlowingMenu';
import GradientText from '../components/ReactBits/GradientText';
import BlurText from '../components/ReactBits/BlurText';
import SpotlightCard from '../components/ReactBits/SpotlightCard';
import Waves from '../components/ReactBits/Waves';
import CardSwap from '../components/ReactBits/CardSwap';
import FlyingPosters from '../components/ReactBits/FlyingPosters';
import ElasticSlider from '../components/ReactBits/ElasticSlider';
import DecayCard from '../components/ReactBits/DecayCard';
import GooeyNav from '../components/ReactBits/GooeyNav';
import InfiniteMenu from '../components/ReactBits/InfiniteMenu';
import { FiCalendar, FiMapPin, FiClock, FiUsers, FiFileText, FiExternalLink } from 'react-icons/fi';
import './Meetings.css';

const Meetings = () => {
  const competitionLevels = [
    {
      link: '#regional',
      text: 'Regional',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop'
    },
    {
      link: '#state', 
      text: 'State',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop'
    },
    {
      link: '#national',
      text: 'National', 
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?q=80&w=600&auto=format&fit=crop'
    }
  ];

  const flyingPostersItems = [
    {
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=400",
      title: "State Conference",
      description: "May 2026"
    },
    {
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=400",
      title: "National Conference", 
      description: "June 22-26, 2026"
    }
  ];

  const gooeyNavItems = [
    { icon: "SCHED", label: "Schedule", id: "schedule" },
    { icon: "NOTES", label: "Minutes", id: "minutes" },
    { icon: "REPORT", label: "Reports", id: "reports" },
    { icon: "GOALS", label: "Goals", id: "goals" }
  ];

  const infiniteMenuItems = [
    { title: "Weekly Meetings", image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8" },
    { title: "Competition Prep", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7" },
    { title: "Project Work", image: "https://images.unsplash.com/photo-1518709268805-4e9042af2a88" },
    { title: "Team Building", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f" }
  ];

  const nationalsInfo = {
    date: "June 22nd to 26th",
    location: "Washington, DC area at the Gaylord National Harbor Resort & Convention Center",
    theme: "Unity Through Community"
  };

  const upcomingMeetings = [
    {
      date: "TBA",
      time: "2:15 PM - 3:30 PM",
      location: "Room 2001",
      agenda: "Competition Updates & Project Planning",
      type: "Regular Meeting"
    },
    {
      date: "TBA", 
      time: "2:15 PM - 3:30 PM",
      location: "Room 2001",
      agenda: "States Preparation & Team Building",
      type: "Prep Session"
    },
    {
      date: "TBA",
      time: "2:15 PM - 3:30 PM", 
      location: "Room 2001",
      agenda: "Project Presentations & Feedback",
      type: "Workshop"
    },
    {
      date: "TBA",
      time: "2:15 PM - 3:30 PM",
      location: "Room 2001", 
      agenda: "Officer Elections & Planning",
      type: "Special Meeting"
    }
  ];

  return (
    <div className="page meetings-page">
      <section className="meetings-header">
        <div className="meetings-background">
          <Waves
            amplitude={0.8}
            frequency={0.02}
            speed={0.5}
            className="waves-bg"
          />
        </div>
        <div className="container meetings-content">
          <h1 className="page-title">
            <GradientText
              colors={["#ff6b00", "#8400ff", "#ff6b00"]}
              animationSpeed={8}
            >
              Meetings & Events
            </GradientText>
          </h1>
          <BlurText
            text="Stay up-to-date with our schedule, competitions, and important dates"
            className="page-subtitle"
            animateBy="words"
            delay={100}
          />
        </div>
      </section>

      <section className="nationals-announcement-section">
        <div className="container">
          <SpotlightCard className="nationals-announcement-card" spotlightColor="rgba(255, 107, 0, 0.3)">
            <div className="announcement-header">
              <div className="header-icon">
                <FiCalendar />
              </div>
              <div>
                <h2>
                  <GradientText colors={["#ff6b00", "#8400ff"]}>
                    2026 National TSA Conference
                  </GradientText>
                </h2>
                <p>Mark your calendars for the biggest TSA event of the year!</p>
              </div>
            </div>
            <BlurText
              text={`The 2026 National TSA Conference will be held ${nationalsInfo.date} in the ${nationalsInfo.location}. The theme of the 2026 conference is ${nationalsInfo.theme}.`}
              animateBy="words"
              delay={200}
            />
          </SpotlightCard>
        </div>
      </section>

      <section className="regular-meetings">
        <div className="container">
          <SpotlightCard className="meeting-info-card" spotlightColor="rgba(132, 0, 255, 0.2)">
            <div className="card-header">
              <div className="header-icon">
                <FiUsers />
              </div>
              <div>
                <h2>
                  <GradientText colors={["#8400ff", "#00c1ff"]}>
                    Regular Meetings
                  </GradientText>
                </h2>
                <p>Join us every week to stay connected and informed</p>
              </div>
            </div>
            
            <div className="meeting-details-grid">
              <div className="meeting-detail-card">
                <div className="detail-icon">
                  <FiClock />
                </div>
                <div className="detail-content">
                  <h3>When</h3>
                  <p>Bimonthly on Fridays</p>
                  <p>2:15 PM - 3:30 PM</p>
                </div>
              </div>
              
              <div className="meeting-detail-card">
                <div className="detail-icon">
                  <FiMapPin />
                </div>
                <div className="detail-content">
                  <h3>Where</h3>
                  <p>Room 2001</p>
                </div>
              </div>
              
              <div className="meeting-detail-card">
                <div className="detail-icon">
                  <FiFileText />
                </div>
                <div className="detail-content">
                  <h3>Typical Agenda</h3>
                  <ul>
                    <li>Competition updates</li>
                    <li>Project progress</li>
                    <li>Event/fundraising planning</li>
                    <li>Questions on events</li>
                  </ul>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </section>

    
      <section className="card-swap-section">
        <div className="container">
          <h2 className="section-title">
            <GradientText colors={["#00c1ff", "#ff6b00"]}>
              Meeting Schedule
            </GradientText>
          </h2>
          <CardSwap />
        </div>
      </section>

      <section className="flying-posters-section">
        <div className="container">
          <h2 className="section-title">
            <GradientText colors={["#8400ff", "#00c1ff"]}>
              Upcoming Events
            </GradientText>
          </h2>
          <FlyingPosters items={flyingPostersItems} />
        </div>
      </section>


      <section className="gooey-nav-section">
        <div className="container">
          <h2 className="section-title">Meeting Navigation</h2>
          <GooeyNav items={gooeyNavItems} />
        </div>
      </section>

      <section className="infinite-menu-section">
        <div className="container">
          <h2 className="section-title">
            <GradientText colors={["#8400ff", "#00c1ff"]}>
              Meeting Types
            </GradientText>
          </h2>
          <InfiniteMenu items={infiniteMenuItems} />
        </div>
      </section>

      <section className="meeting-resources">
        <div className="container">
          <h2 className="section-title">Meeting Resources</h2>
          <div className="resources-grid">
            <SpotlightCard className="resource-card" spotlightColor="rgba(0, 193, 255, 0.2)">
              <div className="card-icon">
                <FiFileText />
              </div>
              <h3>Meeting Notes</h3>
              <p>Access notes and decisions from previous meetings</p>
              <button className="resource-button">
                <FiExternalLink />
                <span>View Minutes</span>
              </button>
            </SpotlightCard>
            
            <SpotlightCard className="resource-card" spotlightColor="rgba(255, 107, 0, 0.2)">
              <div className="card-icon">
                <FiCalendar />
              </div>
              <h3>Event Calendar</h3>
              <p>Full calendar with all meetings and important dates</p>
              <button className="resource-button">
                <FiExternalLink />
                <span>View Calendar</span>
              </button>
            </SpotlightCard>
            
            <SpotlightCard className="resource-card" spotlightColor="rgba(132, 0, 255, 0.2)">
              <div className="card-icon">
                <FiUsers />
              </div>
              <h3>Meeting Reminders</h3>
              <p>Subscribe to notifications for meeting updates</p>
              <button className="resource-button">
                <FiExternalLink />
                <span>Subscribe</span>
              </button>
            </SpotlightCard>
          </div>
        </div>
      </section>

      <section className="upcoming-meetings-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <GradientText colors={["#8400ff", "#00c1ff"]}>
                Upcoming Meeting Dates
              </GradientText>
            </h2>
            <BlurText
              text="Stay informed about our meeting schedule and important events"
              className="section-description"
              animateBy="words"
            />
          </div>

          <div className="meetings-timeline">
            {upcomingMeetings.map((meeting, index) => (
              <SpotlightCard 
                key={index} 
                className="meeting-timeline-card"
                spotlightColor={`rgba(${index % 2 === 0 ? '132, 0, 255' : '0, 193, 255'}, 0.2)`}
              >
                <div className="meeting-card-header">
                  <div className="meeting-type-badge" style={{
                    background: index % 2 === 0 
                      ? 'linear-gradient(135deg, #8400ff, #9933ff)' 
                      : 'linear-gradient(135deg, #00c1ff, #33d4ff)'
                  }}>
                    {meeting.type}
                  </div>
                  <div className="meeting-date">
                    <span className="date-text">{meeting.date}</span>
                  </div>
                </div>
                
                <div className="meeting-card-content">
                  <div className="meeting-details-row">
                    <div className="detail-item">
                      <FiClock />
                      <span>{meeting.time}</span>
                    </div>
                    <div className="detail-item">
                      <FiMapPin />
                      <span>{meeting.location}</span>
                    </div>
                  </div>
                  
                  <div className="meeting-agenda">
                    <div className="agenda-header">
                      <FiFileText />
                      <span>Agenda</span>
                    </div>
                    <p>{meeting.agenda}</p>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>

          <div className="tba-notice">
            <SpotlightCard className="tba-notice-card" spotlightColor="rgba(255, 107, 0, 0.2)">
              <div className="notice-content">
                <div className="notice-icon">
                  <FiCalendar />
                </div>
                <div className="notice-text">
                  <h3>Meeting Dates Coming Soon</h3>
                  <p>Specific dates will be announced once the school schedule is finalized. Follow our announcements for updates!</p>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Meetings;