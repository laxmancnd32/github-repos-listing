import React, { Component } from 'react';
import RepoBlockComponent from './repo-block-component';

class ReposListingComponent extends Component {
  // state = {
  //   repositories: [
  //           {name: 'twitter/test191', description: 'Sample description of this repo', stars:'657', forks:'310', watch: '675'},
  //           {name: 'twitter/twwweetmee', description: 'tweet me application is the description of this repo', stars:'57', forks:'231', watch: '275'},
  //           {name: 'twitter/scrooge', description: 'wetwevsdvsdgsdgsd', stars:'155', forks:'390', watch: '135'},
  //           {name: 'twitter/finagle', description: 'wetwevsdvsdgsdgsd', stars:'236', forks:'100', watch: '789'},
  //           {name: 'lagom/lagom', description: 'testsacbvaprq mdfamsklaf', stars:'300', forks:'184', watch: '387'},
  //           {name: 'twitter/scrooge', description: 'iotjgwgwegweoas mdfamsklaf', stars:'657', forks:'310', watch: '675'}
  //         ]
  // }

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
