import React from 'react';

export default function Resume() {
  return (
    <section style={styles.section}>
      <h2>Resume</h2>
      
      {/* Downloadable Resume Link */}
      <div style={styles.resumeLink}>
        <a href="/docs/James_Whatcott_Resume (3).pdf" download style={styles.link}>
          Download My Resume
        </a>
      </div>

      {/* Proficiencies List */}
      <div style={styles.proficiencies}>
        <h3>Proficiencies</h3>
        <ul style={styles.list}>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>SQL</li>
          {/* Add any additional proficiencies you have */}
        </ul>
      </div>
    </section>
  );
}

// Inline CSS styling
const styles = {
  section: {
    padding: '20px',
    textAlign: 'center',
  },
  resumeLink: {
    marginBottom: '20px',
  },
  link: {
    textDecoration: 'none',
    fontSize: '18px',
    color: '#007bff',
    border: '1px solid #007bff',
    padding: '10px 15px',
    borderRadius: '5px',
  },
  proficiencies: {
    textAlign: 'left',
    display: 'inline-block',
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '20px',
  },
};
