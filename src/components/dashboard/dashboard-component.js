import React, { Component } from 'react';
import FilterComponent from '../filter'
import ReposDetailsComponent from '../repositories-details';
import SearchBarComponent from '../searchbar-component';
import LoaderComponent from '../loader-component';
import { getRepositories } from '../../service/github-repositories-service';
import { baseUrl } from '../../constants';
import './dashboard.scss';

class DashBoard extends Component {
    state = {
    }

    componentDidMount() {
        const { actions } = this.props;
        const searchUrl = baseUrl.replace('{%query}', 'language:python');

        Promise.all([getRepositories(searchUrl)]).then(response => {
            const { total_count, items } = response[0];
            actions.setIsLoading(false);
            actions.setGithubRepoData(items, total_count);
        });
    }
    render() {
        const { isLoading } = this.props;
        const listingRepos = isLoading ? <LoaderComponent /> : <ReposDetailsComponent />;

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
                            {listingRepos}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashBoard;
