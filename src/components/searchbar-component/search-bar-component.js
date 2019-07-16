import React, { Component } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { filterRepositories } from '../../general-utils';
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
        const { items, actions, total_count } = this.props;
        const { queryText = '' } = this.state;
        const whiteSpaceRegEx = new RegExp(/\s/g);
        const isQuerySpace = whiteSpaceRegEx.test(queryText);

        if(isQuerySpace) {
          actions.setGithubRepoData(items,total_count);
        } else {
          const filteredResults = filterRepositories({filterCriteria: 'full_name', queryText, items});

          actions.searchTrigerred(filteredResults, true);
        }
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
                onKeyPress={ event => event.charCode === 13 && this.searchRepos() }
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
