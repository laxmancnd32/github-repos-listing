import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css'

class SliderFilterComponent extends Component {
    state = {
        stars: null
    }

    onSliderChange = stars => {
        this.setState({ stars });
    }

    render() {
        const { stars } = this.state;
        const { sliderClassName, sliderTitle, sliderRange, sliderLabel } = this.props;

        return (
        <div className={`${sliderClassName} slider-filter`}>
            <h4>{sliderTitle}</h4>
            <Slider
                min={sliderRange.min}
                max={sliderRange.max}
                step={1}
                orientation="horizontal"
                labels={sliderLabel}
                value={stars}
                onChange={this.onSliderChange}
            />
        </div>
        );
  }
}

export default SliderFilterComponent;
