import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import './loader-component.scss';

const LoaderComponent = () => {

  return (
    <div className="loader">
        <FontAwesomeIcon icon={faSpinner} className="fa-spin" size='9x'/>
    </div>
  );
};

export default LoaderComponent;
