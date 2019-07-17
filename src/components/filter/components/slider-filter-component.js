import React from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css'

const SliderFilterComponent = props => {
    const { sliderClassName, sliderTitle, sliderRange, sliderLabel, sliderValue, handleSliderChange, step } = props;
    const entity = sliderTitle === 'Repo Stars' ? 'stars' : 'forks';

    return (
        <div className={`${sliderClassName} slider-filter`}>
            <h4>{sliderTitle}</h4>
            <Slider
                min={sliderRange.min}
                max={sliderRange.max}
                step={step}
                orientation="horizontal"
                labels={sliderLabel}
                value={sliderValue}
                onChange={ sliderVal => {
                        handleSliderChange(sliderVal, entity);
                    }
                }
            />
        </div>
    );
}

export default SliderFilterComponent;
