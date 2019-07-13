import React, { Component } from 'react';
import LanguageFilterComponent from './components/language-filter-component';
import CreatedFilterComponent from './components/created-filter-component';
import RepoForksFilterComponent from './components/repo-forks-component';
import RepoStarsFilterComponent from './components/repo-stars-filter-component';
import './filter-component.scss';

class FilterComponent extends Component {

  render() {
    return (
      <div className="filters">
          <LanguageFilterComponent />
          <CreatedFilterComponent />
          <RepoForksFilterComponent />
          <RepoStarsFilterComponent />
       </div>
    );
  }
}

export default FilterComponent;
