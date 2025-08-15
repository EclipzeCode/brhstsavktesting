import React from 'react';
import SpotlightCard from '../components/ReactBits/SpotlightCard';
import GradientText from '../components/ReactBits/GradientText';
import BlurText from '../components/ReactBits/BlurText';
import AnimatedList from '../components/ReactBits/AnimatedList';
import Stepper, { Step } from '../components/ReactBits/Stepper';
import Stack from '../components/ReactBits/Stack';
import FeatureCards from '../components/ReactBits/FeatureCards';
import ChromaGrid from '../components/ReactBits/ChromaGrid';
import MagicBento from '../components/ReactBits/MagicBento';
import Masonry from '../components/ReactBits/Masonry';
import Particles from '../components/ReactBits/Particles';
import DarkVeil from '../components/ReactBits/DarkVeil';
import ElasticSlider from '../components/ReactBits/ElasticSlider';
import CountUp from '../components/ReactBits/CountUp';
import { FiExternalLink, FiMapPin, FiCalendar, FiAward, FiUsers, FiTarget, FiTrendingUp, FiCode, FiGlobe, FiHeart, FiBook, FiZap, FiStar, FiCheckCircle, FiClock } from 'react-icons/fi';
import './About.css';
import DotGrid from '../components/ReactBits/DotGrid';

const About = () => {
  const competitionCategories = [
    {
      title: "Architecture and Construction Technology",
      color: "#8400ff",
      events: [
        {
          name: "Architectural Design",
          description: "In response to the annual design challenge, participants develop a set of architectural plans and related materials, and construct both a physical and computer-generated model to accurately depict their design. Semifinalists deliver a presentation and participate in an interview."
        },
        {
          name: "Computer-Aided Design (CAD), Architecture",
          description: "Participants use complex computer graphic skills, tools, and processes to respond to a design challenge in which they develop representations of architectural subjects, such as foundation and/or floor plans, and/or elevation drawings, and/or details of architectural ornamentation or cabinetry."
        },
        {
          name: "Computer-Aided Design (CAD), Engineering", 
          description: "Participants use complex computer graphic skills, tools, and processes to respond to a design challenge in which they develop three-dimensional representations of engineering subjects, such as a machine part, tool, device, or manufactured product."
        },
        {
          name: "Geospatial Technology",
          description: "To address the issue presented in an annual theme, participants interpret geospatial data and develop a digital portfolio containing maps, data, and pertinent documentation. Semifinalists defend their projections and visual infographic during a presentation/interview."
        },
        {
          name: "Structural Design and Engineering",
          description: "Participants apply the principles of structural engineering to design and construct a structure that complies with the annual challenge. An assessment of the required documentation and the destructive testing of the structure (to determine its design efficiency) determine both semifinalists and finalists."
        }
      ]
    },
    {
      title: "Communications Technology",
      color: "#00c1ff",
      events: [
        {
          name: "Audio Podcasting",
          description: "Participants use digital audio technology to create original content for a podcast piece that addresses the annual theme. The podcast must feature high level storytelling techniques, voice acting, and folly sound effects; the full entry must include documentation of the podcast development process and elements."
        },
        {
          name: "Children's Stories",
          description: "In response to the annual theme, participants create an illustrated children's story of artistic, instructional, and social value, and submit documentation related to the development of the physical storybook."
        },
        {
          name: "Debating Technological Issues", 
          description: "Participants research the annual topic and subtopics and prepare for a debate against a team from another chapter. Teams are instructed to take either the pro or con side of a selected subtopic, submit a summary of references, and use their research to support their assigned position."
        },
        {
          name: "Promotional Design",
          description: "Participants use computerized graphic communications layout and design skills to produce a promotional resource packet. The resource must address the annual theme/problem and include at least four printed publication items and required documentation."
        },
        {
          name: "STEM Mass Media",
          description: "In response to an annual theme, participants use written and verbal communication skills to convey a news story in both a video broadcast (preliminary round) and a digital written format (semifinal round)."
        }
      ]
    },
    {
      title: "Computer Science and Information Technology",
      color: "#ff6b00",
      events: [
        {
          name: "Coding",
          description: "Participants take a test, which concentrates on aspects of coding, to qualify for the semifinal round of competition. Semifinalists develop a software program – in a designated amount of time – that accurately addresses an onsite problem."
        },
        {
          name: "Data Science and Analytics",
          description: "Participants identify a societal issue, collect or compile data from various sources about the issue, and then produce documentation and a digital scientific poster about their findings."
        },
        {
          name: "Software Development",
          description: "Participants use their knowledge of cutting-edge technologies, algorithm design, problem-solving principles, effective communication, and collaboration to design, implement, test, document, and present a software development project of educational or social value."
        },
        {
          name: "System Control Technology",
          description: "Participants develop a solution to a problem (typically one from an industrial setting) presented onsite at the conference. They analyze the problem, build a computer-controlled mechanical model, program the model, demonstrate the programming and mechanical features of the model-solution in an interview."
        },
        {
          name: "Video Game Design",
          description: "Participants design, build, and launch an E-rated online video game – with accompanying required documentation - that addresses the annual theme. Semifinalists participate in an interview to demonstrate the knowledge and expertise they gained during the development of the game."
        },
        {
          name: "Virtual Reality Simulation (VR)",
          description: "Participants use video and 3D computer graphics tools and design processes to create a two-to-three-minute VR visualization (accompanied by supporting documentation) that addresses the annual theme."
        },
        {
          name: "Webmaster",
          description: "Participants design, build, and launch a website that addresses the annual challenge. Semifinalists participate in an interview to demonstrate the knowledge and expertise gained during the development of the website."
        }
      ]
    },
    {
      title: "Leadership",
      color: "#10B981",
      events: [
        {
          name: "Chapter Team",
          description: "Participants take a parliamentary procedure test to qualify for the semifinal round of competition. Semifinalists conduct an opening ceremony, items of business, parliamentary actions, and a closing ceremony."
        },
        {
          name: "Extemporaneous Speech",
          description: "Participants select a technology-related or TSA topic from among three topic cards and prepare and give a three-to-five-minute speech that communicates their knowledge of the chosen topic."
        },
        {
          name: "Future Technology Teacher",
          description: "Participants research a developing technology, prepare a video showing an application of the technology in the classroom, and create a lesson plan/activity that features the application and connects to the Standards for Technological and Engineering Literacy (STEL)."
        },
        {
          name: "Prepared Presentation",
          description: "Participants deliver a three-to-five-minute oral presentation related to the current national TSA conference theme. Both semifinalists and finalists are determined based on the quality of the presentation."
        },
        {
          name: "Technology Bowl",
          description: "Participants demonstrate their knowledge of TSA and concepts addressed in technology content standards by completing an objective test. Semifinalist teams participate in a question/response, head-to-head, team competition."
        }
      ]
    },
    {
      title: "Manufacturing and Transportation Technology",
      color: "#EF4444",
      events: [
        {
          name: "Dragster Design",
          description: "Participants design, draw, and construct a CO2-powered dragster that adheres to specifications, design and documentation requirements, and the annual theme. Semifinalists compete in a double-elimination race and participate in an interview."
        },
        {
          name: "Drone Challenge (UAV)",
          description: "Participants design, build, assemble, document, and test fly an open-source Unmanned Arial Vehicle (UAV) according to the stated annual theme/problem specifications."
        },
        {
          name: "Flight Endurance",
          description: "Participants design, build, fly, and adjust (trim) a rubber-band powered model aircraft to make long endurance flights inside a contained airspace."
        },
        {
          name: "Manufacturing Prototype", 
          description: "Participants design, fabricate, and use Computer Integrated Manufacturing (CIM) to create a product that addresses the annual theme. A documentation portfolio and the completed product prototype are submitted for evaluation."
        },
        {
          name: "Robotics",
          description: "Participants design, build, document, and test a robot assembled using open-sourced parts according to stated specifications and to meet the challenge of the yearly theme/problem."
        },
        {
          name: "Senior Solar Sprint",
          description: "Students apply scientific understanding, creativity, experimentation, and teamwork to design, build, and race a model solar vehicle that carries a payload; documentation of the process is required."
        },
        {
          name: "Transportation Modeling",
          description: "Participants research, design, and produce a scale model of a vehicle that complies with the annual design problem. A display for the model and a documentation portfolio are required."
        }
      ]
    },
    {
      title: "STEM (General)",
      color: "#8B5CF6",
      events: [
        {
          name: "Engineering Design",
          description: "Participants develop a solution to an annual theme that is based on a specific challenge noted by the National Academy of Engineering (NAE) in its compilation of the grand challenges for engineering in the 21st century."
        },
        {
          name: "Technology Problem Solving",
          description: "Participants use problem-solving skills to design and construct a finite solution to a challenge provided onsite at the conference. Solutions are evaluated at the end of 90 minutes using measures appropriate to the challenge."
        }
      ]
    },
    {
      title: "STEM and the Arts",
      color: "#F59E0B",
      events: [
        {
          name: "Animatronics",
          description: "To address the annual design challenge, participants exhibit and demonstrate their knowledge of mechanical and control systems by creating an animatronic device with a specific purpose."
        },
        {
          name: "Board Game Design",
          description: "Participants develop, build, and package a board game that focuses on a subject of their choice. Creative packaging, and the instructions, pieces, and cards associated with the pilot game will be evaluated."
        },
        {
          name: "Digital Video Production",
          description: "Participants develop and submit a digital video and a documentation portfolio that reflects the annual theme. Semifinalists participate in an interview."
        },
        {
          name: "Fashion Design and Technology",
          description: "To address the annual theme, participants demonstrate expertise in fashion design principles by creating a wearable garment, garment patterns, and a documentation portfolio."
        },
        {
          name: "Music Production",
          description: "Participants produce an original musical piece that reflects the annual theme on the TSA website under Themes & Problems."
        },
        {
          name: "On Demand Video",
          description: "Once participants receive the challenge details at the national TSA conference, they have 36 hours to produce a 60-second film that showcases video skills, tools, and communication processes."
        },
        {
          name: "Photographic Technology",
          description: "Participants produce a photographic portfolio - demonstrating expertise in photo and imaging technology processes - to convey a message based on the annual theme."
        }
      ]
    },
    {
      title: "Technology and Research",
      color: "#06B6D4",
      events: [
        {
          name: "Biotechnology Design",
          description: "Participants select a contemporary biotechnology problem that addresses the annual theme and demonstrates understanding of the topic through documented research, the development of a solution, a display, and an effective multimedia presentation."
        },
        {
          name: "Forensic Science",
          description: "Participants take a test of basic forensic science to qualify for the semifinal round of competition. Semifinalists examine a mock crime scene and demonstrate their knowledge of forensic science through crime scene analysis."
        }
      ]
    }
  ];

  const missionPoints = [
    {
      icon: <FiTarget />,
      title: "Excellence in Competition",
      description: "Preparing students for state and national TSA competitions"
    },
    {
      icon: <FiCode />,
      title: "Innovation & Creativity", 
      description: "Encouraging innovative thinking and creative problem-solving"
    },
    {
      icon: <FiUsers />,
      title: "Leadership Development",
      description: "Building leadership skills through officer roles and projects"
    },
    {
      icon: <FiHeart />,
      title: "Community Impact",
      description: "Creating positive change through technology-focused service projects"
    }
  ];

  const teamHighlights = [
    {
      id: 1,
      content: (
        <div className="highlight-card">
          <div className="highlight-icon">
            <FiAward />
          </div>
          <h3>Award Winners</h3>
          <p>Multiple state and national recognitions in technology competitions</p>
        </div>
      )
    },
    {
      id: 2,
      content: (
        <div className="highlight-card">
          <div className="highlight-icon">
            <FiTrendingUp />
          </div>
          <h3>Tech Innovation</h3>
          <p>Cutting-edge projects and solutions addressing real-world challenges</p>
        </div>
      )
    },
    {
      id: 3,
      content: (
        <div className="highlight-card">
          <div className="highlight-icon">
            <FiHeart />
          </div>
          <h3>Community Service</h3>
          <p>Making a difference in our community through technology and service</p>
        </div>
      )
    }
  ];

  const nationalsInfo = {
    date: "June 22nd to 26th",
    location: "Washington, DC area at the Gaylord National Harbor Resort & Convention Center",
    theme: "Unity Through Community"
  };

  const njTsaLocation = "TCNJ Armstrong Hall, Room 103, 2000 Pennington Rd, Ewing, NJ 08628";

  const quickStats = [
    { number: 40, label: "Competition Events", description: "Diverse opportunities for every interest" },
    { number: 300000, label: "National Members", description: "Vast network across the country" },
    { number: 2, label: "Major Competitions", description: "State and National recognition" },
    { number: 95, label: "Success Rate", description: "Member satisfaction and achievement" }
  ];

  const keyBenefits = [
    {
      icon: <FiTarget />,
      title: "Competition Excellence",
      points: [
        "40+ diverse events to choose from",
        "State and national recognition opportunities",
        "Low competition ratios for higher success rates",
        "Professional judging and feedback"
      ]
    },
    {
      icon: <FiUsers />,
      title: "Leadership Development", 
      points: [
        "Officer positions and responsibilities",
        "Project management experience",
        "Public speaking and presentation skills",
        "Team collaboration and coordination"
      ]
    },
    {
      icon: <FiZap />,
      title: "Innovation & Creativity",
      points: [
        "Cutting-edge technology projects",
        "Creative problem-solving challenges",
        "Research and development opportunities",
        "Industry-relevant skill building"
      ]
    },
    {
      icon: <FiHeart />,
      title: "Community Impact",
      points: [
        "Service learning projects",
        "Technology for good initiatives",
        "Local community partnerships",
        "Social responsibility development"
      ]
    }
  ];

  const eventCategories = [
    {
      title: "Architecture & Construction",
      color: "#8400ff",
      count: 5,
      highlights: ["CAD Design", "Structural Engineering", "Architectural Planning"]
    },
    {
      title: "Computer Science & IT",
      color: "#00c1ff", 
      count: 7,
      highlights: ["Coding", "Software Development", "VR/AR", "Cybersecurity"]
    },
    {
      title: "Communications",
      color: "#ff6b00",
      count: 5,
      highlights: ["Digital Media", "Podcasting", "Debate", "Mass Media"]
    },
    {
      title: "STEM & Research",
      color: "#10B981",
      count: 8,
      highlights: ["Biotechnology", "Engineering Design", "Forensics", "Innovation"]
    },
    {
      title: "Leadership",
      color: "#EF4444",
      count: 5,
      highlights: ["Public Speaking", "Chapter Management", "Technology Education"]
    },
    {
      title: "Manufacturing & Transportation",
      color: "#8B5CF6",
      count: 7,
      highlights: ["Robotics", "Drone Technology", "3D Design", "Transportation"]
    }
  ];

  return (
    <div className="page about-page">
      <section className="about-hero">
        <div className="about-background">
          <DotGrid
            dotSize={10}
            gap={15}
            baseColor="#5227FF"
            activeColor="#5227FF"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
        <div className="container about-content">
          <h1 className="page-title">
            <GradientText
              colors={["#8400ff", "#00c1ff", "#8400ff"]}
              animationSpeed={8}
            >
              About BR TSA
            </GradientText>
          </h1>
          <BlurText
            text="Where Technology Meets Innovation, Leadership, and Community Impact"
            className="hero-subtitle"
            animateBy="words"
            delay={100}
          />
        </div>
      </section>

      <section className="nationals-banner">
        <div className="container">
          <SpotlightCard className="nationals-card" spotlightColor="rgba(255, 107, 0, 0.3)">
            <div className="banner-content">
              <div className="banner-icon">
                <FiCalendar />
              </div>
              <div className="banner-text">
                <h2>
                  <GradientText colors={["#ff6b00", "#8400ff"]}>
                    2026 National Conference
                  </GradientText>
                </h2>
                <div className="conference-details">
                  <div className="detail-chip">
                    <FiCalendar />
                    <span>{nationalsInfo.date}</span>
                  </div>
                  <div className="detail-chip">
                    <FiMapPin />
                    <span>Washington, DC</span>
                  </div>
                  <div className="detail-chip">
                    <FiStar />
                    <span>{nationalsInfo.theme}</span>
                  </div>
                </div>
              </div>
            </div>
          </SpotlightCard>
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

      <section className="stats-showcase">
        <div className="container">
          <h2 className="section-title">
            <GradientText colors={["#8400ff", "#00c1ff"]}>
              TSA by the Numbers
            </GradientText>
          </h2>
          <div className="stats-grid">
            {quickStats.map((stat, index) => (
              <SpotlightCard key={index} className="stat-showcase-card" spotlightColor="rgba(132, 0, 255, 0.15)">
                <div className="stat-number">
                  <CountUp
                    to={stat.number}
                    from={0}
                    duration={2}
                    delay={index * 0.2}
                  />
                  {stat.number > 1000 && <span className="stat-suffix">+</span>}
                </div>
                <h3>{stat.label}</h3>
                <p>{stat.description}</p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>
<section className="events-overview">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <GradientText colors={["#8400ff", "#00c1ff"]}>
                Competition Categories & Events
              </GradientText>
            </h2>
            <BlurText
              text="Explore all the different competition categories and events available in TSA"
              className="section-description"
              animateBy="words"
            />
          </div>

          <div className="external-link-section">
            <SpotlightCard className="external-link-card" spotlightColor="rgba(255, 107, 0, 0.2)">
              <div className="link-content">
                <div className="link-icon">
                  <FiBook />
                </div>
                <div className="link-text">
                  <h3>Complete Event Guide</h3>
                  <p>Explore detailed descriptions of all 40+ competition events</p>
                </div>
                <a 
                  href="https://tsaweb.org/competitions/!hs/-in-category/categories/all-high-school-competitions#highschool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-link-btn"
                >
                  <span>View All Events</span>
                  <FiExternalLink />
                </a>
              </div>
            </SpotlightCard>
          </div>

          <div className="categories-grid">
            {competitionCategories.map((category, index) => (
              <SpotlightCard 
                key={index} 
                className="category-card" 
                spotlightColor={`${category.color}33`}
                style={{ '--category-color': category.color }}
              >
                <div className="category-header">
                  <div className="category-badge" style={{ backgroundColor: category.color }}>
                    {category.events.length}
                  </div>
                  <h3>
                    <GradientText colors={[category.color, "#ffffff"]}>
                      {category.title}
                    </GradientText>
                  </h3>
                </div>
                <div className="events-list">
                  {category.events.map((event, eventIndex) => (
                    <div 
                      key={eventIndex} 
                      className="event-item"
                      style={{ '--category-color': category.color }}
                    >
                      <h4>{event.name}</h4>
                      <p>{event.description}</p>
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>
      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title">
            <GradientText colors={["#00c1ff", "#8400ff"]}>
              Why Choose TSA?
            </GradientText>
          </h2>
          <div className="benefits-grid">
            {keyBenefits.map((benefit, index) => (
              <SpotlightCard key={index} className="benefit-card" spotlightColor="rgba(0, 193, 255, 0.15)">
                <div className="benefit-header">
                  <div className="benefit-icon">
                    {benefit.icon}
                  </div>
                  <h3>{benefit.title}</h3>
                </div>
                <div className="benefit-points">
                  {benefit.points.map((point, pointIndex) => (
                    <div key={pointIndex} className="benefit-point">
                      <FiCheckCircle />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      

      <section className="nj-tsa-info">
        <div className="container">
          <h2 className="section-title">
            <GradientText colors={["#00c1ff", "#8400ff"]}>
              New Jersey TSA
            </GradientText>
          </h2>
          
          <div className="nj-info-layout">
            <SpotlightCard className="nj-about-card" spotlightColor="rgba(0, 193, 255, 0.2)">
              <div className="info-card-content">
                <div className="info-icon">
                  <FiGlobe />
                </div>
                <h3>About NJ TSA</h3>
                <p>Learn about the New Jersey Technology Student Association and its statewide programs</p>
                <a 
                  href="https://njtsa.tcnj.edu/about-tsa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="info-link"
                >
                  <span>Learn More</span>
                  <FiExternalLink />
                </a>
              </div>
            </SpotlightCard>

            <SpotlightCard className="headquarters-info-card" spotlightColor="rgba(255, 107, 0, 0.2)">
              <div className="info-card-content">
                <div className="info-icon">
                  <FiMapPin />
                </div>
                <h3>State Headquarters</h3>
                <div className="address-display">
                  <p>{njTsaLocation}</p>
                </div>
                <div className="map-embed">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.8658193!2d-74.7728!3d40.2686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c1635b0e0b1c89%3A0x8f1e1e1e1e1e!2sThe%20College%20of%20New%20Jersey!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="200"
                    style={{ border: 0, borderRadius: '10px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="NJ TSA Headquarters"
                  ></iframe>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>

      <section className="feature-showcase">
        <div className="container">
          <h2 className="section-title">
            <GradientText colors={["#8400ff", "#00c1ff"]}>
              What Sets Us Apart
            </GradientText>
          </h2>
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            glowColor="132, 0, 255"
          />
        </div>
      </section>

      <section className="join-journey">
        <div className="container">
          <h2 className="section-title">
            <GradientText colors={["#8400ff", "#00c1ff"]}>
              Your Journey Starts Here
            </GradientText>
          </h2>
          <Stepper
            initialStep={1}
            onStepChange={(step) => console.log('Step:', step)}
            onFinalStepCompleted={() => console.log('Welcome to BR TSA!')}
            backButtonText="Back"
            nextButtonText="Continue"
          >
            <Step>
              <div className="journey-step">
                <div className="step-visual">
                  <FiHeart />
                </div>
                <h3>Discover Your Passion</h3>
                <div className="step-description">
                  <p>TSA offers something for every STEM enthusiast. Whether you're passionate about coding, engineering, design, or leadership, we have the perfect competition events for you.</p>
                </div>
                <div className="step-features">
                  <div className="feature-chip">
                    <FiTarget />
                    <span>40+ Competition Events</span>
                  </div>
                  <div className="feature-chip">
                    <FiUsers />
                    <span>Collaborative Environment</span>
                  </div>
                  <div className="feature-chip">
                    <FiZap />
                    <span>Innovation Focus</span>
                  </div>
                </div>
              </div>
            </Step>
            <Step>
              <div className="journey-step">
                <div className="step-visual">
                  <FiUsers />
                </div>
                <h3>Join Our Community</h3>
                <div className="step-description">
                  <p>Attend one of our weekly meetings to experience the TSA community firsthand. Meet fellow students, learn about ongoing projects, and discover your place in our organization.</p>
                </div>
                <div className="meeting-schedule">
                  <div className="schedule-item">
                    <FiCalendar />
                    <span>Bimonthly on Fridays</span>
                  </div>
                  <div className="schedule-item">
                    <FiClock />
                    <span>2:15 PM - 3:30 PM</span>
                  </div>
                  <div className="schedule-item">
                    <FiMapPin />
                    <span>Room 2001</span>
                  </div>
                </div>
              </div>
            </Step>
            <Step>
              <div className="journey-step">
                <div className="step-visual">
                  <FiCheckCircle />
                </div>
                <h3>Complete Your Registration</h3>
                <div className="step-description">
                  <p>Take the final step to become an official BR TSA member. Complete your registration, pay annual dues, and gain access to all our resources and opportunities.</p>
                </div>
                <div className="registration-checklist">
                  <div className="checklist-item">
                    <FiCheckCircle />
                    <span>Join the Google Classroom</span>
                  </div>
                  <div className="checklist-item">
                    <FiCheckCircle />
                    <span>Annual Dues ($20)</span>
                  </div>
                  <div className="checklist-item">
                    <FiCheckCircle />
                    <span>Fill Out Trip Permission Forms For States and Nationals</span>
                  </div>
                </div>
              </div>
            </Step>
            <Step>
              <div className="journey-step">
                <div className="step-visual">
                  <FiStar />
                </div>
                <h3>Start Your Success Story</h3>
                <div className="step-description">
                  <p>Welcome to the Bridgewater-Raritan TSA! You're now ready to compete, innovate, lead, and make a lasting impact in the world of technology and engineering.</p>
                </div>
                <div className="success-benefits">
                  <div className="benefit-chip">
                    <FiAward />
                    <span>Competition Eligibility</span>
                  </div>
                  <div className="benefit-chip">
                    <FiBook />
                    <span>Resource Access</span>
                  </div>
                  <div className="benefit-chip">
                    <FiUsers />
                    <span>Leadership Opportunities</span>
                  </div>
                  <div className="benefit-chip">
                    <FiTrendingUp />
                    <span>Recognition & Awards</span>
                  </div>
                </div>
              </div>
            </Step>
          </Stepper>
        </div>
      </section>

    
    </div>
  );
};

export default About;

