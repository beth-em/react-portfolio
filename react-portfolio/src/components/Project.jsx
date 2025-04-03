// Function to direct users to the creators Live demo and GitHub links
function Project({ title, description, link, repo }) {
    return (
      <div className="column is-one-third">
        <div className="card">
          <div className="card-content">
            <h3 className="title is-4">{title}</h3>
            <p>{description}</p>
              <a href={link} target="_blank" rel="noopener noreferrer" className="button is-link is-small">Live Demo</a>
              <a href={repo} target="_blank" rel="noopener noreferrer" className="button is-info is-small ml-2">GitHub Repo</a>
            </div>
          </div>
        </div>
    );
  }
  
  export default Project;
  