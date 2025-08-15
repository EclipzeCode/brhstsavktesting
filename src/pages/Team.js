import React from 'react';
import GradientText from '../components/ReactBits/GradientText';
import BlurText from '../components/ReactBits/BlurText';
import CountUp from '../components/ReactBits/CountUp';
import ShinyText from '../components/ReactBits/ShinyText';
import ChromaGrid from '../components/ReactBits/ChromaGrid';
import Particles from '../components/ReactBits/Particles';
import ScrollStack from '../components/ReactBits/ScrollStack';
import BounceCards from '../components/ReactBits/BounceCards';
import ProfileCard from '../components/ReactBits/ProfileCard';
import Folder from '../components/ReactBits/Folder';
import SpotlightCard from '../components/ReactBits/SpotlightCard';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      image: process.env.PUBLIC_URL + "/assets/team/anvay.png",
      title: "Anvay Ajmera",
      subtitle: "Co-President",
      handle: "Junior",
      borderColor: "#8400ff",
      gradient: "linear-gradient(145deg, #8400ff, #000)",
    },
    {
      image: process.env.PUBLIC_URL + "/assets/team/vk.png",
      title: "Vrishank Madishetty",
      subtitle: "Co-President",
      handle: "Junior",
      borderColor: "#00c1ff",
      gradient: "linear-gradient(180deg, #00c1ff, #000)",
    },
    {
      image: process.env.PUBLIC_URL + "/assets/team/tharun.png",
      title: "Tharun Naguleswaran",
      subtitle: "Vice President",
      handle: "Sophomore",
      borderColor: "#ff6b00",
      gradient: "linear-gradient(165deg, #ff6b00, #000)",
    },
    {
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
      title: "Mohnish Gumedelli",
      subtitle: "Vice President",
      handle: "10th Grade",
      borderColor: "#10B981",
      gradient: "linear-gradient(210deg, #10B981, #000)",
    },
    {
      image: process.env.PUBLIC_URL + "/assets/team/priyanka.png",
      title: "Priyanka Kumar",
      subtitle: "Treasurer",
      handle: "Junior",
      borderColor: "#EF4444",
      gradient: "linear-gradient(195deg, #EF4444, #000)",
    },
    {
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
      title: "Anaya Tejani",
      subtitle: "Secretary",
      handle: "Junior",
      borderColor: "#8B5CF6",
      gradient: "linear-gradient(225deg, #8B5CF6, #000)",
    },
    {
      image: process.env.PUBLIC_URL + "/assets/team/nish.png",
      title: "Nish Brahmbhatt",
      subtitle: "Outreach",
      handle: "Senior",
      borderColor: "#F59E0B",
      gradient: "linear-gradient(135deg, #F59E0B, #000)",
    },
    {
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=400&auto=format&fit=crop",
      title: "Jadon Kim",
      subtitle: "Fundraising",
      handle: "Junior",
      borderColor: "#06B6D4",
      gradient: "linear-gradient(255deg, #06B6D4, #000)",
    },
  ];

  const openPositions = [
    {
      title: "Deputy Secretary",
      description: "Assist the Secretary with meeting documentation, event coordination, and member communications. Perfect for detail-oriented students who want to develop organizational skills.",
      requirements: ["Strong communication skills", "Attention to detail", "Reliable attendance"]
    },
    {
      title: "Deputy Treasurer",
      description: "Support the Treasurer in managing chapter finances, fundraising initiatives, and budget tracking. Great opportunity to gain financial management experience.",
      requirements: ["Basic math skills", "Organizational abilities", "Interest in finance"]
    },
    {
      title: "Webmaster",
      description: "Maintain and update the chapter website, manage digital content, and ensure online presence reflects our activities. Ideal for tech-savvy students interested in web development.",
      requirements: ["Basic web development knowledge", "Creative design sense", "Technical problem-solving"]
    },
    {
      title: "Social Media Manager",
      description: "Create engaging content, manage social media accounts, and promote chapter events across various platforms. Perfect for creative students who understand digital marketing.",
      requirements: ["Social media expertise", "Creative content creation", "Communication skills"]
    }
  ];

  const achievements = [
    'State Championship 2023 - 1st Place in Cybersecurity',
    'National Competition Qualifier - Top 10 in Engineering Design',
    'Regional Excellence Award - Outstanding Chapter Leadership',
    'Community Service Recognition - 200+ volunteer hours',
    'Innovation Award - Best Technology Project 2023'
  ];

  const scrollStackItems = [
    {
      content: (
        <div>
          <h3>🏆 Awards & Recognition</h3>
          <p>State and national competition awards</p>
        </div>
      )
    },
    {
      content: (
        <div>
          <h3>🤝 Community Impact</h3>
          <p>200+ hours of community service</p>
        </div>
      )
    },
    {
      content: (
        <div>
          <h3>💡 Innovation Projects</h3>
          <p>Cutting-edge technology solutions</p>
        </div>
      )
    }
  ];

  const bounceImages = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300",
    "https://images.unsplash.com/photo-1494790108755-2616b612b665?q=80&w=300",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300"
  ];

  return (
    <div className="page team-page">
      <section className="team-header">
        <div className="team-background">
          <Particles
            colors={["#8400ff", "#00c1ff", "#ff6b00"]}
            count={150}
            speed={0.4}
            size={3}
            className="team-particles"
          />
        </div>
        <div className="container team-content">
          <h1 className="page-title">
            <GradientText
              colors={["#8400ff", "#00c1ff", "#8400ff"]}
              animationSpeed={8}
            >
              Meet Our Team
            </GradientText>
          </h1>
          <BlurText
            text="The dedicated officers and members who make BR TSA a success"
            className="page-subtitle"
            animateBy="words"
            delay={100}
          />
        </div>
      </section>

      

      <section className="officers-section">
        <div className="container">
          <SpotlightCard className="officers-intro" spotlightColor="rgba(132, 0, 255, 0.2)">
            <h2>
              <GradientText colors={["#8400ff", "#00c1ff"]}>
                Leadership Team
              </GradientText>
            </h2>
            <BlurText
              text="Our officer team works tirelessly to organize events, coordinate competitions, and foster an environment of innovation and learning. Each member brings unique skills and perspectives to help our chapter thrive."
              animateBy="words"
              delay={100}
              className="intro-description"
            />
          </SpotlightCard>
          
          <div className="officers-grid">
            <ChromaGrid
              items={teamMembers}
              radius={300}
              columns={4}
              rows={2}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </div>
      </section>
      <section className="open-positions-section">
        <div className="container">
          <SpotlightCard className="positions-intro" spotlightColor="rgba(255, 107, 0, 0.2)">
            <h2>
              <GradientText colors={["#ff6b00", "#8400ff"]}>
                Open Officer Positions
              </GradientText>
            </h2>
            <BlurText
              text="We are always looking for new officers to benefit our team, and to have something to work towards."
              animateBy="words"
              delay={100}
              className="positions-description"
            />
          </SpotlightCard>
          
          <div className="positions-grid">
            {openPositions.map((position, index) => (
              <SpotlightCard key={index} className="position-card" spotlightColor="rgba(255, 107, 0, 0.15)">
                <h3>{position.title}</h3>
                <p className="position-description">{position.description}</p>
                <div className="position-requirements">
                  <h4>Key Requirements:</h4>
                  <ul>
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex}>{req}</li>
                    ))}
                  </ul>
                </div>
              </SpotlightCard>
            ))}
          </div>

          <SpotlightCard className="application-notice" spotlightColor="rgba(132, 0, 255, 0.2)">
            <div className="notice-content">
              <h3>📋 Application Process</h3>
              <p>Application forms will be posted on Google Classroom after States.</p>
            </div>
          </SpotlightCard>
        </div>
      </section>
      <section className="join-section">
        <div className="container">
          <SpotlightCard className="join-info" spotlightColor="rgba(0, 193, 255, 0.2)">
            <h2>
              <GradientText colors={["#00c1ff", "#8400ff"]}>
                Want to Join Our Team?
              </GradientText>
            </h2>
            <BlurText
              text="We're always looking for passionate students interested in technology, leadership, and making a difference. Whether you're interested in competitive events, project development, or community outreach, there's a place for you in BR TSA."
              animateBy="words"
              delay={100}
              className="join-description"
            />
            
            <div className="join-benefits">
              <SpotlightCard className="benefit" spotlightColor="rgba(132, 0, 255, 0.15)">
                <h3>🏆 Competitive Experience</h3>
                <p>Participate in state and national TSA competitions</p>
              </SpotlightCard>
              <SpotlightCard className="benefit" spotlightColor="rgba(0, 193, 255, 0.15)">
                <h3>🤝 Leadership Skills</h3>
                <p>Develop leadership through officer positions, a great addition for college.</p>
              </SpotlightCard>
              <SpotlightCard className="benefit" spotlightColor="rgba(255, 107, 0, 0.15)">
                <h3>💡 State Chapter Lead</h3>
                <p>Becoming an officer will allow you to be eligible to run for state chapter positions, giving a transformative experience at states, and major networking.</p>
              </SpotlightCard>
            </div>
          </SpotlightCard>
        </div>
      </section>


<section className="stats-section">
        <div className="container">
          <div className="team-stats">
            <SpotlightCard className="stat-card" spotlightColor="rgba(132, 0, 255, 0.3)">
              <CountUp
                to={8}
                from={0}
                duration={2}
                delay={0.5}
                className="stat-number"
              />
              <h3>Officers</h3>
              <p>Dedicated leaders</p>
            </SpotlightCard>
            
            <SpotlightCard className="stat-card" spotlightColor="rgba(0, 193, 255, 0.3)">
              <CountUp
                to={45}
                from={0}
                duration={2}
                delay={1}
                className="stat-number"
              />
              <h3>Members</h3>
              <p>Active participants</p>
            </SpotlightCard>
            
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
