import React from 'react';
import './Milestone4Content.css';
import FaceToFaceInterviews from './FaceToFaceInterviews';
import UserPersona from './UserPersona';
import UserStories from './UserStories';
import userPersona from '../../images/user_persona.png'
import userStories from '../../images/user_stories.png'
import userFlows from '../../images/user_flows.png'

const Milestone3Content = () => (
  <div className="milestone4-content">
    <h1 className="milestone-title">Milestone 4</h1>
      <FaceToFaceInterviews link={'https://drive.google.com/drive/folders/1YaXe5Z9mDo6m1mqf6DiGDcL0y9VrpcMR'} />
      <UserPersona imageUrl={userPersona} />
      <UserStories title={"User stories"} imageUrl={userStories} />
      <UserStories title={'User flows'} imageUrl={userFlows} />
  </div>
);

export default Milestone3Content;
