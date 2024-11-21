// About.js
import React, { useState } from 'react';

function About() {
  const [isEducationExpanded, setIsEducationExpanded] = useState(false);

  const toggleEducation = () => {
    setIsEducationExpanded(!isEducationExpanded);
  };

  return (
    <div className="about">
      
      <p>Welcome to my portfolio! I’m an IT student with a passion for technology and development.</p>
      <div className="education-section">
        <h2 onClick={toggleEducation} style={{ cursor: 'pointer' }}>
          Education {isEducationExpanded ? '-' : '+'}
        </h2>
        {isEducationExpanded && (
          <div className="education-content">
            <div className="education-section">
      {/* <h2>Education</h2> */}
      <table className="education-table" border="1">
        <thead>
          <tr>
            <th>Degree</th>
            <th>Institution</th>
            <th>Passed Year</th>
            <th>GPA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Secondary School</td>
            <td>Shree Seti Devi Secondary School</td>
            <td>2018</td>
            <td>3.2</td>
          </tr>
          <tr>
            <td>High School</td>
            <td>Texas International Secondary School</td>
            <td>2021</td>
            <td>3.21</td>
          </tr>
          <tr>
            <td>Bachelors</td>
            <td>Nepal College of Information Technology</td>
            <td>Running</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>

          </div>
        )}
      </div>
    </div>
  );
}

export default About;
