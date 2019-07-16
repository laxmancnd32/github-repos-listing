import React, { Component } from 'react';
import SliderFilterComponent from './components/slider-filter-component';
import MultiSelectFilterComponent from './components/multi-select-filter-component';
import { formatQuery } from '../../general-utils';
import './filter-component.scss';

class FilterComponent extends Component {
    state = {
      languageFilterOptions: [{value: 'python', label: 'Python'},{value: 'javascript', label: 'JavaScript'}, {value: 'c', label: 'C'} ],
      repoTopicsFilterOptions: [{ value: ''}],
      lastActiveFilterOptions: [{value: '30 days', label:"Last 30 days"}, {value: '6 months', label:"Last 6 months"}, {value: 'year', label:"Last year"}],
      createdFilterOptions: [{value: '2014', label: '2014'}, {value: '2015', label: '2015'}, {value: '2016', label: '2016'},{value: '2017', label: '2017'},{value: '2018', label: '2018'},{value: '2019', label: '2019'}],
      languageValues: [],
      lastActiveValues: [],
      repoTopicValues: [],
      createdValues: []
    }

    handleMultiSelectChange = (values, info) => {
      this.setState({ [info.name]: values }, () => this.getResultsBasedOnFilters());
    };

    getResultsBasedOnFilters = () => {
      const { actions } = this.props;
      const { languageValues } = this.state;
      const filteredValues = languageValues.map(language => language.value);
      let queryText = '';

      filteredValues.forEach((val, index) => {
        if(index === 0) {
          queryText += 'language:'+val;
        } else {
          queryText += '+language:'+val;
        }
      });
      if(!(queryText === '')) {
        actions.setQueryText(queryText);
      }
    };

    setValuesAndFilter = (type, values) => {
      const { queryText } = this.state;
      this.setState({[type]: values});
      const queryValues = values.map(filter => filter.value);
      const newQueryText = formatQuery(queryText, type, queryValues);

      this.setState({ queryText: newQueryText });
    };

    render() {
      const { languageFilterOptions, repoTopicsFilterOptions, lastActiveFilterOptions,
              createdFilterOptions, languageValues, lastActiveValues, repoTopicValues,
              createdValues
            } = this.state;
      return (
        <div className="filters">
            <MultiSelectFilterComponent 
              filterTitle={'Language'}
              filterClassName={'language-filter'}
              options={languageFilterOptions}
              value={languageValues}
              name={'languageValues'}
              handleMultiSelectChange={this.handleMultiSelectChange}
            />
            <MultiSelectFilterComponent 
              filterTitle={'Repo Topics'}
              filterClassName={'repo-topics-filter'}
              options={repoTopicsFilterOptions}
              value={repoTopicValues}
              name={'repoTopicValues'}
              handleMultiSelectChange={this.handleMultiSelectChange}
            />
            <MultiSelectFilterComponent 
              filterTitle={'Last Active'}
              filterClassName={'last-active-filter'}
              options={lastActiveFilterOptions}
              value={lastActiveValues}
              name={'lastActiveValues'}
              handleMultiSelectChange={this.handleMultiSelectChange}
            />
            <MultiSelectFilterComponent 
              filterTitle={'Created'}
              filterClassName={'created-filter'}
              options={createdFilterOptions}
              value={createdValues}
              name={'createdValues'}
              handleMultiSelectChange={this.handleMultiSelectChange}
            />
            <SliderFilterComponent 
              sliderTitle={"Repo Stars"}
              sliderClassName={"repo-stars-filter"}
              sliderRange={{min: 0, max: 300}}
              sliderLabel={{0: '0', 300: '300k'}}
            />
            <SliderFilterComponent 
              sliderTitle={"Repo Forks"}
              sliderClassName={"repo-forks-filter"}
              sliderRange={{min: 0, max: 180}}
              sliderLabel={{0: '0', 180: '180k'}}
            />
        </div>
      );
  }
}

export default FilterComponent;
