import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCodeBranch, faStar, faEye } from '@fortawesome/free-solid-svg-icons';

class RepoBlockComponent extends Component {

    render() {
        const { repository = [] } = this.props;
        const { name, description, stars, forks, watch } = repository;
        return (
            <li className="repos-block">
                    <div className="icon-and-info">
                        <FontAwesomeIcon icon={faTwitter} size="2x" className="repo-logo"/>
                        <span>{name}</span>
                        <div className="description">{description}</div>
                    </div>
                    <div className="stars-forks-views">
                        <div className="stars"><FontAwesomeIcon icon={faStar}></FontAwesomeIcon> {stars}</div>
                        <div className="forks"><FontAwesomeIcon icon={faCodeBranch}></FontAwesomeIcon> {forks}</div>
                        <div className="watch"><FontAwesomeIcon icon={faEye}></FontAwesomeIcon> {watch}</div>
                    </div>
            </li>
        );
    }
}

export default RepoBlockComponent;
