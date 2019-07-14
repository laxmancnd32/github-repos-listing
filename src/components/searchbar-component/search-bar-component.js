import React, { Component } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './search-bar-component.scss';

class SearchBarComponent extends Component {
    state = {
        queryText:''
    }

    handleInputChange = event => {
        const queryText = event.target.value;

        this.setState({ queryText });
    };

    searchRepos = () => {
        alert(this.state.queryText);
    };

  render() {
    return (
      <div className="search-bar">
          <InputGroup>
            <FormControl
                placeholder="Search Repos"
                aria-label="Job"
                aria-describedby="basic-addon1"
                onChange={value => this.handleInputChange(value,'text')}
            />
            <Button onClick={this.searchRepos}>
                <FontAwesomeIcon icon={faSearch} />
            </Button>
            </InputGroup>
       </div>
    );
  }
}

export default SearchBarComponent;
