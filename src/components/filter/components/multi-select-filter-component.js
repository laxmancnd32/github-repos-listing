import React, { Component } from 'react';
import  Select  from 'react-select';

class MultiSelectFilterComponent extends Component {
    state = {
        selectedOptions: null
    }

    handleChange = selectedOptions => {
        this.setState({ selectedOptions });
    };

    render() {
        const { selectedOptions } = this.state;
        const { filterTitle, filterClassName, options } = this.props;

        return (
            <div className={`${filterClassName} multi-select-filter`}>
                <h4>{filterTitle}</h4>
                <Select
                    value={selectedOptions}
                    onChange={this.handleChange}
                    options={options}
                    isMulti={true}
                />
            </div>
        );
    }
}

export default MultiSelectFilterComponent;
