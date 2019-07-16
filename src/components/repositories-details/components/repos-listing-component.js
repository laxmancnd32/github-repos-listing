import React, { Component } from 'react';
import RepoBlockComponent from './repo-block-component';

class ReposListingComponent extends Component {

  render() {
    const { repositories } = this.props;
    return (
      <div className="repos-listing">
      <ul>
        {repositories.map(repository => {
          return (
            <RepoBlockComponent repository={repository}/>
          );
        })}
      </ul>        
       </div>
    );
  }
}

export default ReposListingComponent;
