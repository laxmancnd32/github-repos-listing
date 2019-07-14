import React, { Component } from 'react';
import SliderFilterComponent from './components/slider-filter-component';
import MultiSelectFilterComponent from './components/multi-select-filter-component';
import './filter-component.scss';

class FilterComponent extends Component {
    state = {
      languageFilterOptions: [{value: 'python', label: 'python'},{value: 'JS', label: 'JS'}, {value: 'Java', label: 'Java'}, {value: 'C++', label: 'C++'} ],
      repoTopicsFilterOptions: [],
    lastActiveFilterOptions: [{value: '30 days', label:"Last 30 days"}, {value: '6 months', label:"Last 6 months"}, {value: 'year', label:"Last year"}],
      createdFilterOptions: [{value: '2014', label: '2014'}, {value: '2015', label: '2015'}, {value: '2016', label: '2016'},{value: '2017', label: '2017'},{value: '2018', label: '2018'},{value: '2019', label: '2019'}]
    }
    render() {
      const { languageFilterOptions, repoTopicsFilterOptions, lastActiveFilterOptions, createdFilterOptions } = this.state;
      return (
        <div className="filters">
            <MultiSelectFilterComponent 
              filterTitle={'Language'}
              filterClassName={'language-filter'}
              options={languageFilterOptions}
            />
            <MultiSelectFilterComponent 
              filterTitle={'Repo Topics'}
              filterClassName={'repo-topics-filter'}
              options={repoTopicsFilterOptions}
            />
            <MultiSelectFilterComponent 
              filterTitle={'Last Active'}
              filterClassName={'last-active-filter'}
              options={lastActiveFilterOptions}
            />
            <MultiSelectFilterComponent 
              filterTitle={'Created'}
              filterClassName={'created-filter'}
              options={createdFilterOptions}
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
