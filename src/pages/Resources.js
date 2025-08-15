import React from 'react';
import SpotlightCard from '../components/ReactBits/SpotlightCard';
import GradientText from '../components/ReactBits/GradientText';
import BlurText from '../components/ReactBits/BlurText';
import AnimatedList from '../components/ReactBits/AnimatedList';
import FeatureCards from '../components/ReactBits/FeatureCards';
import MagicBento from '../components/ReactBits/MagicBento';
import ChromaGrid from '../components/ReactBits/ChromaGrid';
import { FiExternalLink, FiDownload, FiUsers, FiCalendar, FiFileText, FiAward, FiGlobe, FiClock, FiMapPin } from 'react-icons/fi';
import './Resources.css';
import Beams from '../components/ReactBits/Beams';

const Resources = () => {
  const preCompetitionSubmissions = [
    { event: "Architectural Design", docs: "Documentation Portfolio", pdfs: 1, urls: 0, notes: "", approval: false },
    { event: "Audio Podcasting", docs: "Documentation Portfolio", pdfs: 1, urls: 1, notes: "Audio Podcast", approval: true },
    { event: "Data Science and Analytics", docs: "Documentation Portfolio; Photo/Film/Video Consent Forms (if applicable)", pdfs: 2, urls: 0, notes: "", approval: true },
    { event: "Digital Video Production", docs: "Documentation Portfolio", pdfs: 1, urls: 1, notes: "Digital Video", approval: true },
    { event: "Future Technology and Engineering Teacher", docs: "Documentation Portfolio", pdfs: 1, urls: 0, notes: "", approval: false },
    { event: "Geospatial Technology", docs: "Documentation Portfolio", pdfs: 1, urls: 0, notes: "", approval: false },
    { event: "Music Production", docs: "Documentation Portfolio", pdfs: 1, urls: 1, notes: "Musical Piece", approval: true },
    { event: "Photographic Technology", docs: "Photographic Portfolio", pdfs: 1, urls: 0, notes: "", approval: false },
    { event: "Software Development", docs: "Copy of Code (PDF or URL)", pdfs: 1, urls: 1, notes: "Copy of Code (PDF or URL)", approval: false },
    { event: "STEM Mass Media", docs: "Documentation Portfolio", pdfs: 1, urls: 1, notes: "Video News Story", approval: false },
    { event: "Video Game Design", docs: "Documentation Portfolio", pdfs: 1, urls: 2, notes: "Video Game & Demo Video", approval: true },
    { event: "Webmaster", docs: "", pdfs: 0, urls: 1, notes: "Website", approval: false }
  ];

  const nationalsInfo = {
    date: "June 22nd to 26th",
    location: "Washington, DC area at the Gaylord National Harbor Resort & Convention Center", 
    theme: "Unity Through Community"
  };

  const stateOfficerPositions = [
    { position: "President", description: "Prepares meeting agendas, presides over meetings in accordance with parliamentary procedures, appoints committees." },
    { position: "Vice President", description: "Assists the President, presides in the President's absence, and is responsible for coordinating committee tasks." },
    { position: "Secretary", description: "Records, prepares and distributes copies of minutes of meetings and is responsible for correspondence and communication." },
    { position: "Treasurer", description: "Maintains financial records for organization, prepares and presents financial summary at each meeting, and coordinates annual budget development." },
    { position: "Reporter", description: "Prepares articles for publication, contacts members to obtain news regarding the organization, contributes to content on the web page, and serves as historian of the organization." },
    { position: "Sergeant-at-Arms", description: "Arranges the meeting room and cares for organization symbols, banners and related items, and assists the President in conducting parliamentary procedures as set forth in Roberts Rules of Order, Newly Revised." }
  ];

  const dressCodes = [
    {
      type: "Official TSA Attire",
      items: [
        "Blazer: navy blue with TSA patch",
        "Ties/Scarves: scarlet red (males only)",
        "Shirt or Blouse: official TSA shirt (royal blue) or white button-down",
        "Slacks or Skirt: light gray",
        "Shoes: black dress shoes",
        "Socks: black or nylon hosiery"
      ]
    },
    {
      type: "Business-like Attire",
      items: [
        "Collared shirt/blouse",
        "Long pants (no shorts or jeans)",
        "Dresses/skirts",
        "Socks/hosiery",
        "Appropriate footwear"
      ],
      note: "The official NJ TSA or National Polo Shirt may be substituted for a collared shirt/blouse."
    }
  ];

  return (
    <div className="page resources-page">
      <section className="resources-hero">
        <div className="resources-background">
          <Beams
            beamWidth={2}
            beamHeight={15}
            beamNumber={12}
            lightColor="#ffffff"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={0}
          />
        </div>
        <div className="container resources-content">
          <h1 className="page-title">
            <GradientText
              colors={["#00c1ff", "#8400ff", "#00c1ff"]}
              animationSpeed={8}
            >
              Resources Hub
            </GradientText>
          </h1>
          <BlurText
            text="Your comprehensive guide to TSA competitions, events, and success"
            className="page-subtitle"
            animateBy="words"
            delay={100}
          />
        </div>
      </section>

      <section className="general-resources-section">
        <div className="container">
          <h2 className="section-title">
            <GradientText colors={["#8400ff", "#00c1ff"]}>
              General Resources
            </GradientText>
          </h2>
          
          <div className="resource-cards-grid">
            <SpotlightCard className="resource-card main-link" spotlightColor="rgba(132, 0, 255, 0.3)">
              <div className="card-icon">
                <FiGlobe />
              </div>
              <h3>TSA Main Website</h3>
              <p>Official Technology Student Association portal for all things TSA</p>
              <a 
                href="https://tsaweb.org"
                target="_blank"
                rel="noopener noreferrer"
                className="resource-button primary"
              >
                <span>Visit Website</span>
                <FiExternalLink />
              </a>
            </SpotlightCard>

            <SpotlightCard className="resource-card main-link" spotlightColor="rgba(0, 193, 255, 0.3)">
              <div className="card-icon">
                <FiMapPin />
              </div>
              <h3>NJ TSA Website</h3>
              <p>New Jersey State TSA information, events, and state-specific resources</p>
              <a 
                href="https://njtsa.tcnj.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="resource-button primary"
              >
                <span>Visit NJ TSA</span>
                <FiExternalLink />
              </a>
            </SpotlightCard>

            <SpotlightCard className="resource-card themes-card" spotlightColor="rgba(255, 107, 0, 0.3)">
              <div className="card-icon">
                <FiFileText />
              </div>
              <h3>Event Themes 2025-2026</h3>
              <p>Required themes for competition presentations and projects</p>
              <div className="card-badges">
                <span className="badge urgent">Required</span>
                <span className="badge">PDF</span>
              </div>
              <a 
                href="/src/assets/resources/hs-themes-and-problems.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="resource-button secondary"
              >
                <FiDownload />
                <span>Download Themes</span>
              </a>
            </SpotlightCard>
          </div>
        </div>
      </section>

      <section className="states-information-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <GradientText colors={["#8400ff", "#00c1ff"]}>
                New Jersey State Information
              </GradientText>
            </h2>
            <BlurText
              text="Everything you need to know about participating in NJ TSA events and leadership opportunities"
              className="section-description"
              animateBy="words"
            />
          </div>

          <div className="state-officer-section">
            <SpotlightCard className="info-card large" spotlightColor="rgba(132, 0, 255, 0.2)">
              <div className="card-header">
                <div className="header-icon">
                  <FiUsers />
                </div>
                <div>
                  <h3>State Officer Opportunities</h3>
                  <p>Develop leadership skills while guiding NJ TSA activities</p>
                </div>
              </div>
              
              <div className="officer-positions-grid">
                {stateOfficerPositions.map((position, index) => (
                  <div key={index} className="position-card">
                    <h4>{position.position}</h4>
                    <p>{position.description}</p>
                  </div>
                ))}
              </div>

              <div className="eligibility-section">
                <h4>Eligibility Requirements</h4>
                <div className="requirements-grid">
                  <div className="requirement-item">
                    <FiAward />
                    <span>Active NJ TSA chapter member</span>
                  </div>
                  <div className="requirement-item">
                    <FiUsers />
                    <span>Grades 7-12 enrollment</span>
                  </div>
                  <div className="requirement-item">
                    <FiFileText />
                    <span>2.5+ GPA required</span>
                  </div>
                  <div className="requirement-item">
                    <FiCalendar />
                    <span>Monthly TCNJ meetings</span>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </div>

          <div className="state-resources-grid">
            <SpotlightCard className="resource-card" spotlightColor="rgba(255, 107, 0, 0.2)">
              <div className="card-icon">
                <FiFileText />
              </div>
              <h3>State Officer Application</h3>
              <p>Apply to become a state officer for the upcoming school year</p>
              <div className="card-badges">
                <span className="badge">Application</span>
              </div>
              <a 
                href="/src/assets/resources/New-Jersey-TSA-State-Officer-Application-2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="resource-button secondary"
              >
                <FiDownload />
                <span>Download Application</span>
              </a>
            </SpotlightCard>

            <SpotlightCard className="resource-card" spotlightColor="rgba(0, 193, 255, 0.2)">
              <div className="card-icon">
                <FiExternalLink />
              </div>
              <h3>States Submissions</h3>
              <p>Submit electronic files and documents for state-level events</p>
              <div className="card-badges">
                <span className="badge">Portal</span>
              </div>
              <a 
                href="https://njtsa.tcnj.edu/high-school-project-submission-directions"
                target="_blank"
                rel="noopener noreferrer"
                className="resource-button secondary"
              >
                <FiExternalLink />
                <span>Submission Portal</span>
              </a>
            </SpotlightCard>

            <SpotlightCard className="resource-card" spotlightColor="rgba(132, 0, 255, 0.2)">
              <div className="card-icon">
                <FiFileText />
              </div>
              <h3>Math & Science Resources</h3>
              <p>Study materials and preparation resources for STEM events</p>
              <a 
                href="https://njtsa.tcnj.edu/resources/science-and-mathematics-resources/"
                target="_blank"
                rel="noopener noreferrer"
                className="resource-button secondary"
              >
                <FiExternalLink />
                <span>View Resources</span>
              </a>
            </SpotlightCard>

            <SpotlightCard className="resource-card" spotlightColor="rgba(255, 107, 0, 0.2)">
              <div className="card-icon">
                <FiFileText />
              </div>
              <h3>Engineering & Technology</h3>
              <p>Technical resources and guides for engineering competitions</p>
              <a 
                href="https://njtsa.tcnj.edu/resources/engineering-and-technology-resources/"
                target="_blank"
                rel="noopener noreferrer"
                className="resource-button secondary"
              >
                <FiExternalLink />
                <span>View Resources</span>
              </a>
            </SpotlightCard>
          </div>

          <div className="dress-code-section">
            <SpotlightCard className="info-card dress-code" spotlightColor="rgba(132, 0, 255, 0.15)">
              <div className="card-header">
                <div className="header-icon">
                  <FiUsers />
                </div>
                <div>
                  <h3>Dress Code Requirements</h3>
                  <p>Required attire for all NJ TSA events</p>
                </div>
              </div>
              
              <div className="dress-code-options">
                {dressCodes.map((code, index) => (
                  <div key={index} className="dress-option">
                    <h4>{code.type}</h4>
                    <ul className="dress-items">
                      {code.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                    {code.note && (
                      <div className="dress-note">
                        <em>{code.note}</em>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>

      <section className="nationals-information-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <GradientText colors={["#ff6b00", "#8400ff"]}>
                National Conference Information
              </GradientText>
            </h2>
            <BlurText
              text="Complete guide to the 2026 National TSA Conference"
              className="section-description"
              animateBy="words"
            />
          </div>

          <div className="nationals-header-info">
            <SpotlightCard className="info-card conference-info" spotlightColor="rgba(255, 107, 0, 0.3)">
              <div className="conference-details">
                <div className="detail-item">
                  <FiCalendar />
                  <div>
                    <h4>Conference Dates</h4>
                    <p>{nationalsInfo.date}</p>
                  </div>
                </div>
                <div className="detail-item">
                  <FiMapPin />
                  <div>
                    <h4>Location</h4>
                    <p>{nationalsInfo.location}</p>
                  </div>
                </div>
                <div className="detail-item">
                  <FiAward />
                  <div>
                    <h4>Theme</h4>
                    <p>{nationalsInfo.theme}</p>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </div>

          <div className="nationals-resources-grid">
            <SpotlightCard className="resource-card" spotlightColor="rgba(132, 0, 255, 0.2)">
              <div className="card-icon">
                <FiUsers />
              </div>
              <h3>Event Eligibility Charts</h3>
              <p>Check participant limits for each competition before nationals</p>
              <div className="card-badges">
                <span className="badge important">Required Check</span>
              </div>
              <a 
                href="/src/assets/resources/events-eligibility-charts.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="resource-button secondary"
              >
                <FiDownload />
                <span>View Eligibility</span>
              </a>
            </SpotlightCard>
          </div>

          <div className="pre-competition-section">
            <SpotlightCard className="info-card large submissions" spotlightColor="rgba(132, 0, 255, 0.15)">
              <div className="card-header">
                <div className="header-icon">
                  <FiFileText />
                </div>
                <div>
                  <h3>Pre-Competition Submissions</h3>
                  <p>Events requiring document submission before nationals</p>
                </div>
              </div>
              
              <div className="submissions-grid">
                {preCompetitionSubmissions.map((submission, index) => (
                  <div key={index} className="submission-card">
                    <div className="submission-header">
                      <h4>{submission.event}</h4>
                      {submission.approval && (
                        <span className="badge approval-required">State Approval</span>
                      )}
                    </div>
                    <div className="submission-details">
                      <div className="detail-row">
                        <strong>Documents:</strong>
                        <span>{submission.docs || "None"}</span>
                      </div>
                      <div className="detail-row">
                        <strong>Files:</strong>
                        <span>{submission.pdfs} PDF{submission.pdfs !== 1 ? 's' : ''} • {submission.urls} URL{submission.urls !== 1 ? 's' : ''}</span>
                      </div>
                      {submission.notes && (
                        <div className="detail-row">
                          <strong>Notes:</strong>
                          <span>{submission.notes}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="submission-guidelines">
                <h4>Submission Guidelines</h4>
                <div className="guidelines-grid">
                  <div className="guideline-item">
                    <FiFileText />
                    <span>PDF files must be under 30 MB</span>
                  </div>
                  <div className="guideline-item">
                    <FiExternalLink />
                    <span>URLs must not be password-protected</span>
                  </div>
                  <div className="guideline-item">
                    <FiAward />
                    <span>State advisor approval required for marked events</span>
                  </div>
                  <div className="guideline-item">
                    <FiClock />
                    <span>Submission portal opens closer to nationals</span>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </div>

          <div className="test-rules-section">
            <SpotlightCard className="info-card large test-rules" spotlightColor="rgba(0, 193, 255, 0.15)">
              <div className="card-header">
                <div className="header-icon">
                  <FiFileText />
                </div>
                <div>
                  <h3>Nationals Testing Information</h3>
                  <p>Equipment requirements and testing procedures</p>
                </div>
              </div>
              
              <div className="test-requirements">
                <div className="requirement-section">
                  <h4>Required Equipment</h4>
                  <div className="equipment-list">
                    <div className="equipment-item">
                      <span className="item-icon">💻</span>
                      <div>
                        <strong>Laptop or Tablet</strong>
                        <p>Wi-Fi capable, 2-hour battery life, Chrome browser preferred</p>
                      </div>
                    </div>
                    <div className="equipment-item">
                      <span className="item-icon">✏️</span>
                      <div>
                        <strong>Writing Materials</strong>
                        <p>Two sharpened No.2 pencils</p>
                      </div>
                    </div>
                    <div className="equipment-item optional">
                      <span className="item-icon">🖱️</span>
                      <div>
                        <strong>Mouse (Optional)</strong>
                        <p>External mouse for easier navigation</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="platform-section">
                  <h4>Testing Platforms</h4>
                  <div className="platforms-grid">
                    <div className="platform-card">
                      <h5>AnswerWrite</h5>
                      <p>Main testing platform using Student ID and password</p>
                    </div>
                    <div className="platform-card">
                      <h5>JudgePro</h5>
                      <p>For semifinalist uploads in specific events</p>
                    </div>
                  </div>
                </div>

                <div className="important-note">
                  <div className="note-icon">⚠️</div>
                  <div>
                    <strong>Important:</strong>
                    <p>Participants are responsible for ensuring device compatibility. External keyboards and monitors are NOT permitted.</p>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
