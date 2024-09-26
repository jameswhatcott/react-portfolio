import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook  } from 'react-icons/fa'; // Importing icons from react-icons

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <a href="https://github.com/jameswhatcott" target="_blank" rel="noopener noreferrer" style={styles.link}>
        <FaGithub size={30} />
      </a>
      <a href="https://www.linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer" style={styles.link}>
        <FaLinkedin size={30} />
      </a>
      <a href="https://facebook.com/james.whatcott" target="_blank" rel="noopener noreferrer" style={styles.link}>
        <FaFacebook size={30} />
      </a>
      {/* If you prefer Twitter instead, use the following line:
      <a href="https://twitter.com/your-twitter-username" target="_blank" rel="noopener noreferrer" style={styles.link}>
        <FaTwitter size={30} />
      </a> */}
    </footer>
  );
}

const styles = {
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#333',
  },
  link: {
    color: '#fff',
    margin: '0 15px',
    textDecoration: 'none',
  },
};
