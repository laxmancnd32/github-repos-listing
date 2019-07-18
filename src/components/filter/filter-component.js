import React, { Component } from 'react';
import SliderFilterComponent from './components/slider-filter-component';
import MultiSelectFilterComponent from './components/multi-select-filter-component';
import { filterKey } from '../../constants';
import { getDateBasedOnFilter } from '../../general-utils';
import './filter-component.scss';

class FilterComponent extends Component {
    state = {
      languageFilterOptions: [{value: 'python', label: 'Python'},{value: 'javascript', label: 'JavaScript'}, {value: 'c', label: 'C'} ],
      repoTopicsFilterOptions: [{ value: 'es6', label: 'ES6'}, { value: 'matlab', label: 'MATLAB'}, { value: 'algorithm', label: 'Algorithm'}, { value: 'android', label: 'Android'}],
      lastActiveFilterOptions: [{value: '30 days', label:"Last 30 days"}, {value: '6 months', label:"Last 6 months"}, {value: 'year', label:"Last year"}],
      createdFilterOptions: [{value: '2014', label: '2014'}, {value: '2015', label: '2015'}, {value: '2016', label: '2016'},{value: '2017', label: '2017'},{value: '2018', label: '2018'},{value: '2019', label: '2019'}],
      languageValues: [],
      lastActiveValues: [],
      repoTopicValues: [],
      createdValues: [],
      forks: '',
      stars: '',
      languageQuery: '',
      topicQuery: '',
      createdQuery: '',
      pushedQuery: '',
      starsQuery: '',
      forksQuery: ''
    }

    handleMultiSelectChange = (values, filter) => {
      const filterValues = values || [];
      this.setState({ [filter.name]: filterValues }, () => this.getResultsBasedOnFilters(filter.name));
    };

    handleDropDownChange = (option, filter) => {
      const filterValue = option || [];
      const { queryText, actions } = this.props;
      const queryKey = filterKey[filter.name];
      const toBeReplacedQuery = this.state[`${queryKey}Query`];
      const formattedQueryText = queryText.replace(toBeReplacedQuery, '');
      let currentQuery = ''

      if(filter.name === 'lastActiveValues') {
        const updatedDateObj = getDateBasedOnFilter(filterValue);
        let updatedMonth = updatedDateObj.month.toString();
        let updatedDay = updatedDateObj.day.toString();

        updatedMonth = updatedMonth.length === 1 ? `0${updatedMonth}`: updatedMonth;
        updatedDay = updatedDay.length === 1 ? `0${updatedDay}`: updatedDay;
        currentQuery = `+${queryKey}:${updatedDateObj.year}-${updatedMonth}-${updatedDay}`;
      } else {
        currentQuery = `+${queryKey}:=${filterValue.value}`;
      }

      this.setState({ [filter.name]: filterValue, [`${queryKey}Query`]: currentQuery });
      currentQuery += formattedQueryText;
      actions.setQueryText(currentQuery);     
    };

    handleSliderChange = (sliderValue, entity) => {
      const { queryText, actions } = this.props; 
      const toBeReplacedQuery = this.state[`${entity}Query`];
      const formattedQueryText = queryText.replace(toBeReplacedQuery, '');
      let currentQuery = `+${entity}:<=${sliderValue*1000}&sort=${entity}&order=desc`;

      this.setState({[entity]: sliderValue, [`${entity}Query`]: currentQuery });
      currentQuery += formattedQueryText;
      if(sliderValue >=100) {
        actions.setQueryText(currentQuery);
      }
      else {
        actions.setQueryText(formattedQueryText);
      }
    }

    getResultsBasedOnFilters = filterName => {
      const { actions, queryText } = this.props;
      const queryKey = filterKey[filterName];
      const toBeReplacedQuery = this.state[`${queryKey}Query`];
      const formattedQueryText = queryText.replace(toBeReplacedQuery, '');
      const currentFilterValues = this.state[filterName];
      const filterValues = currentFilterValues.map(currentFilter => currentFilter.value);
      let currentQuery = '';

      filterValues.forEach(val => {
        currentQuery += `+${queryKey}:${val}`;
      });
      this.setState({ [`${queryKey}Query`]: currentQuery });
      currentQuery += formattedQueryText;
      actions.setQueryText(currentQuery);
    };

    render() {
      const { languageFilterOptions, repoTopicsFilterOptions, lastActiveFilterOptions,
              createdFilterOptions, languageValues, lastActiveValues, repoTopicValues,
              createdValues, stars, forks
            } = this.state;
      return (
        <div className="filters">
            <MultiSelectFilterComponent 
              filterTitle={'Language'}
              filterClassName={'language-filter'}
              options={languageFilterOptions}
              value={languageValues}
              name={'languageValues'}
              isMulti={true}
              handleMultiSelectChange={this.handleMultiSelectChange}
            />
            <MultiSelectFilterComponent 
              filterTitle={'Repo Topics'}
              filterClassName={'repo-topics-filter'}
              options={repoTopicsFilterOptions}
              value={repoTopicValues}
              name={'repoTopicValues'}
              isMulti={true}
              handleMultiSelectChange={this.handleMultiSelectChange}
            />
            <MultiSelectFilterComponent 
              filterTitle={'Last Active'}
              filterClassName={'last-active-filter'}
              options={lastActiveFilterOptions}
              value={lastActiveValues}
              name={'lastActiveValues'}
              isMulti={false}
              handleDropDownChange={this.handleDropDownChange}
            />
            <MultiSelectFilterComponent 
              filterTitle={'Created'}
              filterClassName={'created-filter'}
              options={createdFilterOptions}
              value={createdValues}
              name={'createdValues'}
              isMulti={false}
              handleDropDownChange={this.handleDropDownChange}
            />
            <SliderFilterComponent 
              sliderTitle={"Repo Stars"}
              sliderClassName={"repo-stars-filter"}
              sliderRange={{min: 0, max: 300}}
              sliderLabel={{0: '0', 300: '300k'}}
              sliderValue={stars}
              step={100}
              handleSliderChange={this.handleSliderChange}
            />
            <SliderFilterComponent 
              sliderTitle={"Repo Forks"}
              sliderClassName={"repo-forks-filter"}
              sliderRange={{min: 0, max: 180}}
              sliderLabel={{0: '0', 180: '180k'}}
              sliderValue={forks}
              step={50}
              handleSliderChange={this.handleSliderChange}
            />
        </div>
      );
  }
}

export default FilterComponent;
