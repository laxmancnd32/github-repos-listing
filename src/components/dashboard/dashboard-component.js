import React, { Component } from 'react';
import FilterComponent from '../filter'
import ReposDetailsComponent from '../repositories-details';
import SearchBarComponent from '../searchbar-component';
import './dashboard.scss';

class DashBoard extends Component {

    render() {
        return (
            <div className='dashboard'>
                <div className="row">
                    <div className="col-3" style={{height: '100vh'}}>
                        <FilterComponent />
                    </div>
                    <div className="col-9" style={{height: '100vh'}}>
                        <div className="row">
                            <SearchBarComponent />
                        </div>
                        <div className="row">
                            <ReposDetailsComponent />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashBoard;
