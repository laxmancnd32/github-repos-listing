import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCodeBranch, faStar, faEye } from '@fortawesome/free-solid-svg-icons';

class RepoBlockComponent extends Component {

    render() {
        const { repository = [] } = this.props;
        const { full_name = '', description = '', stargazers_count ='' , forks ='', watchers = '', clone_url = '' } = repository;
        return (
            <li className="repos-block">
                    <div className="icon-and-info">
                        <FontAwesomeIcon icon={faTwitter} size="2x" className="repo-logo"/>
                        <a href={clone_url}>{full_name}</a>
                        <div className="description">{description}</div>
                    </div>
                    <div className="stargazers-forks-watchers">
                        <div className="stargazers"><FontAwesomeIcon icon={faStar}></FontAwesomeIcon> {stargazers_count}</div>
                        <div className="forks"><FontAwesomeIcon icon={faCodeBranch}></FontAwesomeIcon> {forks}</div>
                        <div className="watchers"><FontAwesomeIcon icon={faEye}></FontAwesomeIcon> {watchers}</div>
                    </div>
            </li>
        );
    }
}

export default RepoBlockComponent;
