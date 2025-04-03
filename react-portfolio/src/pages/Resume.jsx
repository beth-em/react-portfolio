// Function for creators resume form and a brief summary of skills acquired so far in this bootcamp course
function Resume() {
    return (
      <section className="section">
        <div className="container">
          <h2 className="title">Resume</h2>
          <p>Download my resume! <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">here</a>.</p>
          
          <h3 className="subtitle">Skills:</h3>
          <ul>
            <li>HTML, CSS, Javascript</li>
            <li>TypeScript, React</li>
            <li>Node.js, PostgreSQL</li>
            <li>Git, GitHub</li>
          </ul>
        </div>
      </section>
    );
  }
  
  export default Resume;
  