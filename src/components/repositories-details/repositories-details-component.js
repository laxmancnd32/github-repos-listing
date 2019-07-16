import React, { Component } from 'react';
import ReposListingComponent from './components/repos-listing-component';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { sortingDropdownOptions } from '../../constants';
import { formatRepos } from '../../general-utils';
import './repositories-details-component.scss'

class ReposDetailsComponent extends Component {
  state = {
    currentSortingKey: 'Best Match'
  }

  handleDropDownChange = event => {
    const currentSortingKey = event.target.innerText;

    this.setState({ currentSortingKey });
  };

  render() {
    const { total_count = 0, timeTaken = 10, items } = this.props;
    const { currentSortingKey } = this.state;

    return (
      <div className="repos-details">
          <div className="row">
            <div className="col-8">
              {`${total_count} results found in ${timeTaken} ms`}
            </div>
            <div className="col-4">
            <DropdownButton id="dropdown-basic-button" title={currentSortingKey}>
              {sortingDropdownOptions.map(option => {
                return (
                  <Dropdown.Item as='button' onClick={this.handleDropDownChange} className='dropdown-option'>
                    {option}
                  </Dropdown.Item>
                );
              })}
            </DropdownButton>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <ReposListingComponent repositories={formatRepos(items)}/>
            </div>
          </div>
       </div>
    );
  }
}

export default ReposDetailsComponent;
