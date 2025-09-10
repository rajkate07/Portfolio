import React, { useState } from 'react';
// Import all CSS files from the 'styles' directory
import './App.css';
import './component/Header/Header.css';
import './styles/Home.css';
import './styles/About.css';
import './styles/Projects.css';
import './styles/Contact.css';
import './component/Footer/Footer.css';
import DeveloperInfoPopup from './component/DeveloperInfo/DeveloperInfoPopup';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase/Config";  // <-- Import the database instance

// Main App Component
const App = () => {
  //popup state
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  // State to manage the current active section for navigation
  const [activeSection, setActiveSection] = useState('home');

  // Function to render the content based on the active section
  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    //popup
    <>
    <div>
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Rajnandan Umesh Kate"
          studentPhotoUrl="/images/Untitled design.png"
          uniqueMessage="Learned so much during college programs! This app showcases my independent coding and deployment skills"
        />
      </div>
    <div className="app-container">
      {/* Header component for navigation */}
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main content area, dynamically rendering sections */}
      <main className="main-content">
        {renderSection()}
      </main>

      {/* Footer component */}
      <Footer />
    </div>
    </>
  );
};

// Header Component
const Header = ({ activeSection, setActiveSection }) => {
  // Navigation items with their corresponding section IDs
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className="header">
      <nav className="navbar">
        {/* Site title/logo, links to home */}
        <button
          onClick={() => setActiveSection('home')}
          className="site-title-button"
        >
          Rajnandan Umesh Kate
        </button>

        {/* Navigation links */}
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveSection(item.id)}
                // Apply active styling if the section matches the current activeSection state
                className={`nav-link-button ${
                  activeSection === item.id ? 'active' : ''
                }`}
              >
                {item.name}
                {/* Underline effect for active and hover states */}
                <span className="nav-link-underline"></span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

const Home = () => {
  return (
    <section className="home-section">
      <div className="home-content">
        <h1 className="home-title">
          Hi, I'm <span className="home-highlight">Rajnandan Kate</span>
        </h1>
        <p className="home-tagline">
          A passionate <span className="home-profession">BCA Undergraduate</span> with a focus on building engaging web applications.
        </p>
        <p className="home-description">
          I specialize in <span className="home-skills">React, Node.js, JavaScript, HTML5, C++, C, Python, Kali Linux</span>. Let's create something amazing together.
        </p>
        <div className="home-cta-buttons">
          {/* Example buttons - in a real app, these would trigger navigation or external links */}
          <button className="button button-primary">
            View My Work
          </button>
          <button className="button button-secondary">
            Get in Touch
          </button>
        </div>
      </div>
      <div className="home-image-container">
        <img
          src="/images/wall back.png"
          alt="Your Profile"
          className="home-profile-image"
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/300x300/cccccc/000000?text=Image+Error"; }}
        />
      </div>
    </section>
  );
};

// -----------------------------------------------------------------------------------------------------------------------------------
const About = () => {
  return (
    <section className="about-section">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <p className="about-paragraph">
          Hello! I'm <span className="about-highlight">Rajnandan Kate</span>, a <span className="about-highlight">BCA Undergraduate</span> based in <span className="about-highlight">[Your City/Country]</span>.
          I have a strong passion for web development and creating intuitive,
          user-friendly experiences that solve real-world problems.
        </p>
        <p className="about-paragraph">
          My journey into coding began <span className="about-italic">[mention how you started, e.g., in college, through a bootcamp, self-taught]</span>.
          I thrive on continuous learning and embracing new challenges in the ever-evolving tech landscape.
        </p>

        <h3 className="about-subtitle">Skills</h3>
        <div className="skills-list">
          {[
            'React.js', 'JavaScript', 'HTML5', 'CSS3', 'Standard CSS',
            'Node.js', 'Git', 'GitHub','Firebase','Firestore','Vite',
            'Python', 'C++', 'C', 'Kali Linux',
            'REST APIs', 'UI/UX Design Principles', 'Responsive Design'
          ].map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>

        <h3 className="about-subtitle">Experience</h3>
        <div className="experience-container">
          {/* Experience Item 1 */}
          <div className="experience-item">
            <h4 className="experience-title">
              USE OF EVOLIS PRIMACY SOFTWARE <span className="experience-company"><br></br>Vivekanand College, kolhapur</span>
            </h4>
            <p className="experience-dates">Jun 2023 - Present</p>
            <ul className="experience-responsibilities">
              <li>Led producer of an smart ID card of Vivekanand College, Kolhapur</li>
              <li>work as a LIBRARY CLERK in Vivekanand college, Kolhapur</li>
            </ul>
          </div>
          {/* Experience Item 2
          <div className="experience-item">
            <h4 className="experience-title">
              [Job Title] at <span className="experience-company">[Previous Company Name]</span>
            </h4>
            <p className="experience-dates">[Dates, e.g., Jun 2020 - Dec 2021]</p>
            <ul className="experience-responsibilities">
              <li>Contributed to the development of responsive user interfaces using HTML, CSS, and JavaScript.</li>
              <li>Assisted in debugging and optimizing existing codebase for improved performance.</li>
            </ul>
          </div> */}
        </div>
      </div>
    </section>
  );
};

// ------------------------------------------------------------------------------------------------------------------------------------
const Projects = () => {
  // Sample project data
  const projectsData = [
    {
      id: 1,
      title: 'Vivekanand College WebApp',
      description: 'Learned so much during this OJT! This app showcases my independent coding and deployment skills. It includes features like user authentication, real-time chat, and a responsive design.',
      technologies: ['React', 'Node.js', 'Vite', 'HTML5', 'CSS3', 'JavaScript'],
      demoLink: "https://vck-ojt-raj-kates-projects.vercel.app/", 
      githubLink: "https://github.com/rajkate07/vck-ojt",
      image: "/images/Screenshot 2025-07-23 202700.png"
    },
    {
      id: 2,
      title: 'Clone Of Flipkart E-commerce Platform',
      description: 'A modern e-commerce website with product listings, shopping cart, secure payment gateway integration (Stripe), and admin panel for inventory management.',
      technologies: ['Python', 'Java', 'PostgreSQL', 'JavaScript ', 'Material-UI'],
      demoLink: "https://www.flipkart.com/",
      githubLink: "/pages/NotFoundPage.jsx",
      image: "/images/Screenshot 2025-08-12 192812.png"
    },
    {
      id: 3,
      title: 'Portfolio Website (This One!)',
      description: 'My personal portfolio website, showcasing my skills, projects, and experience. Built with React and styled using standard CSS for a clean and responsive design.',
      technologies: ['React', 'Standard CSS', 'JavaScript', 'HTML'],
      demoLink: '#', // This is the current app
      githubLink: 'https://github.com/yourusername/my-portfolio',
      image: 'https://placehold.co/400x250/C0C0C0/000000?text=Portfolio+Site'
    }
  ];

  return (
    <section className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x250/cccccc/000000?text=Image+Error"; }}
            />
            <div className="project-details">
              {/* Project Title */}
              <h3 className="project-title">{project.title}</h3>
              {/* Project Description */}
              <p className="project-description">{project.description}</p>
              {/* Technologies Used */}
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              {/* Project Links */}
              <div className="project-links">
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-project-demo"
                  >
                    Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-project-github"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
// ---------------------------------------------------------------------------------------------------------
// Contact Section Component
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Sending your message...');

    try {
      await addDoc(collection(db, "contactMessages"), {
        name: name,
        email: email,
        feedback: feedback,
        timestamp: serverTimestamp()
      });

      setStatus('Thank you for your message! We will get back to you shortly.');
      setName('');
      setEmail('');
      setFeedback('');

    } catch (error) {
      console.error("Error adding document: ", error);
      setStatus('Oops! Something went wrong. Please try again later.');

    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-section">
      <h2>Get in Touch</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          disabled={isSubmitting}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isSubmitting}
        />

        <label htmlFor="feedback">Feedback</label>
        <textarea
          id="feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          rows="5"
          required
          disabled={isSubmitting}
        />

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
       {status && <p style={{ color: status.includes('Thank you') ? 'green' : 'red' }}>{status}</p>}
    </div>
  );
};
// ---------------------------------------------------------------------------------------------------------------------
// Footer Component
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-copyright">
          &copy; {currentYear} RAJ KATE. All rights reserved.
        </p>
        <div className="footer-social-links">
          {/* Social media links with simple icons (replace with actual icons or SVGs) */}
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            title="LinkedIn"
          >
            {/* Simple SVG for LinkedIn icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            title="GitHub"
          >
            {/* Simple SVG for GitHub icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.835 2.809 1.305 3.493.998.108-.776.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.197-6.091 8.197-11.387c0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a
            href="https://instagram.com/raj.kate07/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            title="Instagram"
          >
            {/* Simple SVG for Instagram icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" role="img">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.92 4.92 0 011.69 1.09 4.92 4.92 0 011.09 1.69c.163.461.349 1.261.403 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.43a4.92 4.92 0 01-1.09 1.69 4.92 4.92 0 01-1.69 1.09c-.461.163-1.261.349-2.43.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.403a4.92 4.92 0 01-1.69-1.09 4.92 4.92 0 01-1.09-1.69c-.163-.461-.349-1.261-.403-2.43C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.43a4.92 4.92 0 011.09-1.69 4.92 4.92 0 011.69-1.09c.461-.163 1.261-.349 2.43-.403C8.416 2.175 8.796 2.163 12 2.163zm0 1.838c-3.154 0-3.532.012-4.776.069-1.01.046-1.556.216-1.92.36-.49.191-.84.419-1.208.787-.368.368-.596.718-.787 1.208-.144.364-.314.91-.36 1.92-.057 1.244-.069 1.622-.069 4.776s.012 3.532.069 4.776c.046 1.01.216 1.556.36 1.92.191.49.419.84.787 1.208.368.368.718.596 1.208.787.364.144.91.314 1.92.36 1.244.057 1.622.069 4.776.069s3.532-.012 4.776-.069c1.01-.046 1.556-.216 1.92-.36.49-.191.84-.419 1.208-.787.368-.368.596-.718.787-1.208.144-.364.314-.91.36-1.92.057-1.244.069-1.622.069-4.776s-.012-3.532-.069-4.776c-.046-1.01-.216-1.556-.36-1.92-.191-.49-.419-.84-.787-1.208a3.01 3.01 0 00-1.208-.787c-.364-.144-.91-.314-1.92-.36C15.532 4.013 15.154 4.001 12 4.001zM12 7.338a4.662 4.662 0 110 9.324 4.662 4.662 0 010-9.324zm0 1.838a2.824 2.824 0 100 5.648 2.824 2.824 0 000-5.648zm4.908-2.9a1.08 1.08 0 11-2.16 0 1.08 1.08 0 012.16 0z"/>
            </svg>

          </a>
        </div>
      </div>
    </footer>
  );
};

// Export the main App component as default
export default App;
