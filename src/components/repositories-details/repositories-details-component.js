import React, { Component } from 'react';
import ReposListingComponent from './components/repos-listing-component';
import './repositories-details-component.scss'

class ReposDetailsComponent extends Component {

  render() {
    return (
      <div className="repos-details">
          <div className="row">
            <div className="col-8">
              No. of search results
            </div>
            <div className="col-4">
              Sorting dropdown
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <ReposListingComponent />
            </div>
          </div>
       </div>
    );
  }
}

export default ReposDetailsComponent;
