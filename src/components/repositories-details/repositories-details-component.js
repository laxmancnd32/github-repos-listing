import React, { Component } from 'react';
import ReposListingComponent from './components/repos-listing-component';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import './repositories-details-component.scss'

class ReposDetailsComponent extends Component {
  state = {
    currentDropDownValue: 'Best Match'
  }
  handleDropDownChange = event => {
    const currentDropDownValue = event.target.innerText;

    this.setState({ currentDropDownValue });
  };
  render() {
    const hardCodedOptions = ['Best Match', 'Most Stars', 'Fewest Stars', 
                              'Most Forks', 'Fewest Forks', 'A to Z', 
                              'Z to A', 'Recently Updated', 'Least Recently Updated'];
    const { numberOfResults = 4, timeTaken = 10, dropdownOptions = hardCodedOptions } = this.props;
    const { currentDropDownValue } = this.state;

    return (
      <div className="repos-details">
          <div className="row">
            <div className="col-8">
              {`${numberOfResults} results found in ${timeTaken} ms`}
            </div>
            <div className="col-4">
            <DropdownButton id="dropdown-basic-button" title={currentDropDownValue}>
              {dropdownOptions.map(option => {
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
