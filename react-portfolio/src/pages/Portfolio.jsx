// Import Project file
import Project from '../components/Project'

// Function to display creators projects to showcase to potential employers. Include: titile, description and links to deployement (if any) and GitHub repository.
function Portfolio() {
    const projects = [
        {
            title: 'Cat Time Capsule',
            description: 'An app that allows users to create, store, and schedule digital time capules with a fun image of a cat on the scheduled opening day.',
            link: 'https://cat-time-capsule.onrender.com',
            repo: 'https://github.com/augustusschwab/Cat-Time-Capsule.git',
        },
        {
            title: 'Employee Tracker',
            description: 'A Node.js application that manages company employees using PostgreSQL and Inquirer.',
            link: 'https://drive.google.com/file/d/1qyAuxjwcNIwSKdxo_4m8oU0xV1ktihm6/view?usp=drive_link',
            repo: 'https://github.com/beth-em/employee-tracker.git',
        },
        {
            title: 'README.md Generator',
            description: 'A step-by-step guide to generating a well informed and organized README.md file for your future projects',
            link: 'https://drive.google.com/file/d/1p_4tLTuTcCVe0PsC-tITMsApK5ycoQPg/view?usp=drive_link',
            repo: 'https://github.com/beth-em/readme-genie.git',
        },
        {
            title: 'Vehicle Builder',
            description: 'A CLI application where users can create and interact with different types of vehicles.',
            link: 'https://drive.google.com/file/d/1UvSpV7FtEfogZbv5sg-yk1Jd1DWAEpUv/view?usp=drive_link',
            repo: 'https://github.com/beth-em/vehicle-builder.git',
        }
    ]
    // Function for the array of projects above to render a project component for each one, passing data for that project as props
    return (
        <section className="section">
            <div className="container">
                <h2 className="title has-text-centered">My Projects</h2>
                <div className="columns is-multiline">        
                    {projects.map((project, index) => (
                        <Project key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Portfolio;