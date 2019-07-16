import React from 'react';
import  Select  from 'react-select';

const MultiSelectFilterComponent = props => {
    const { filterTitle, filterClassName, options, value, handleMultiSelectChange, name } = props;
        
    return (
        <div className={`${filterClassName} multi-select-filter`}>
            <h4>{filterTitle}</h4>
            <Select
                value={value}
                onChange={handleMultiSelectChange}
                options={options}
                isMulti={true}
                name={name}
            />
        </div>
    );
}

export default MultiSelectFilterComponent;
