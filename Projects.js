import React from 'react';

function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <div className="project">
        <h3>Bank Management System</h3>
        <p>
          The Banking system developed for second semester project based on C language.
          <br></br><br></br>
          A system designed to manage bank operations, account, transactions. Users can login to the system and can perform banking transactions to other accounts, check individuals account balance and change password for self's account.
        </p>
      </div>
      <div className="project">
        <h3>Student Management System</h3>
        <p>
          The Student Management System developed for fourth semester project based on VB.Net.<br></br><br></br>
          The system can be used by both school administration and student. Where School administration can check details of all student about their fee and courses, and can manage the account of student. Fee record can be stored on the system. <br></br>While, Student can login to the system and can checks his/her courses and fee details.
        </p>
      </div>
    </div>
  );
}

export default Projects;
