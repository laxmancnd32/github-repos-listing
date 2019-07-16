import React, { Component } from 'react';
import ReposListingComponent from './components/connect/repos-listing-connect';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { sortingDropdownOptions, sortingKeys } from '../../constants';
import { sortItemsBasedOnKey } from '../../general-utils';
import './repositories-details-component.scss'

class ReposDetailsComponent extends Component {
  state = {
    currentSortingKey: 'Best Match'
  }

  handleDropDownChange = event => {
    const currentSortingKey = event.target.innerText;
    const { actions, items, total_count } = this.props

    this.setState({ currentSortingKey });
    const sortingKeyInfo = sortingKeys[currentSortingKey];
    const newItems = sortItemsBasedOnKey(items, sortingKeyInfo);
    actions.setGithubRepoData(newItems, total_count)
  };

  render() {
    const { total_count } = this.props;
    const { currentSortingKey } = this.state; 
    
    return (
      <div className="repos-details">
        <div className="row">
          <div className="col-8">
            {`${total_count} results found.`}
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
            <ReposListingComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default ReposDetailsComponent;
