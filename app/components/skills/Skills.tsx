import styles from './skills.module.scss';

export default function Skills() {
    return (
        <div className={styles.skillsContainer}>
            <h1 className={styles.skillsHeader}>My skills</h1>
            <ul className={styles.skillsList}>
                <li>
                    <b>HTML:</b> Creating the structure of web pages, defining content.
                </li>

                <li>
                    <b>CSS (Sass):</b> Styling web pages, managing the appearance of elements. Sass is used for more convenient and organized styling.
                </li>
                
                <li>
                    <b>JavaScript:</b> Programming language used for creating interactive and dynamic elements on web pages.
                </li>
                
                <li>
                    <b>TypeScript:</b> JavaScript extension with added static typing, improving code readability and support.
                </li>
                
                <li>
                    <b>React & Redux:</b> Utilizing React, a JavaScript library for building user interfaces, and Redux for efficient state management in applications.
                </li>
                
                <li>
                    <b>Next.js:</b> React framework for building static and dynamic web applications with the convenience of server-side rendering.
                </li>
                
                <li>
                    <b>Git & GitHub:</b> Git version control system for tracking changes and GitHub platform for hosting and collaborative coding. These tools enable collaboration, version control, and code discussion within a team.
                </li>
                
                <li>
                    <b>REST API:</b> Architectural style for building web services, facilitating interaction between client and server.
                </li>
                
                <li>
                    <b>HTTP basics:</b> Fundamentals of the data transfer protocol on the Internet.
                </li>
                
                <li>
                    <b>Basics of Node.js (Express.js):</b> Server-side JavaScript runtime used for building scalable web applications. Express.js is a framework for Node.js.
                </li>
                
                <li>
                    <b>Basics of MongoDB (Mongoose):</b> Document-oriented database management system. Mongoose, a library for Node.js, facilitates interaction with MongoDB, providing ease of data handling.
                </li>
                
            </ul>
        </div>
    );
}