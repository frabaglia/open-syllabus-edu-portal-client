import React from 'react';
import './component.sass';

const FeatureContainer = (props) => {
  return (
    <div className="feature">
      <div className="feature-icon">
        <div className="feature-icon-container">
          {props.children}
        </div>
      </div>
      <div className="feature-information">
        <div className="feature-information-title">
          {props.title}
        </div>
        <div className="feature-information-description">
          {props.description}
        </div>
      </div>
    </div>
  );
}

export default FeatureContainer
