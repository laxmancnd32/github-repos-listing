import React from 'react';
import  Select  from 'react-select';

const MultiSelectFilterComponent = props => {
    const { filterTitle, filterClassName, options, value, handleMultiSelectChange, handleDropDownChange, name, isMulti } = props;
        
    return (
        <div className={`${filterClassName} multi-select-filter`}>
            <h4>{filterTitle}</h4>
            <Select
                value={value}
                onChange={isMulti ? handleMultiSelectChange: handleDropDownChange}
                options={options}
                isMulti={isMulti}
                name={name}
            />
        </div>
    );
}

export default MultiSelectFilterComponent;
