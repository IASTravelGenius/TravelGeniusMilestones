import React from 'react';
import './FaceToFaceInterviews.css';

const FaceToFaceInterviews = ({ link }) => {
  return (
    <div className="face-to-face-interviews">
      <h2>Face-to-Face Interviews</h2>
      <p>
        We conducted at least three face-to-face interviews with potential users from our main targeted customer segment.
        Access the details of these interviews via the link below:
      </p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="interview-link">
        View Face-to-Face Interviews
      </a>
    </div>
  );
};

export default FaceToFaceInterviews;
