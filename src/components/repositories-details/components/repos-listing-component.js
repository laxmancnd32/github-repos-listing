import React, { Component } from 'react';
import RepoBlockComponent from './repo-block-component';
import { getRepositories } from '../../../service/github-repositories-service';
import { baseUrl } from '../../../constants';
import InfiniteScroll from 'react-infinite-scroll-component';

class ReposListingComponent extends Component {
  pageNumber = 1;

  componentDidMount() {
    this.callReposAPI(this.props.queryText);
  }

  componentWillReceiveProps(nextProps) {
    const nextQueryText = nextProps.queryText;
    const currentQueryText = this.props.queryText;

    if(nextQueryText!==currentQueryText) {
      this.callReposAPI(nextQueryText, 1);
    }
  };

  callReposAPI = (queryText, pageNum = 0) => {
    const { actions } = this.props;
    const page = pageNum === 0 ? this.pageNumber++: pageNum;
    let searchUrl = baseUrl.replace('{%pageNumber}', page);
    searchUrl = searchUrl.replace('{%query}', queryText);

    actions.getRepositoriesData(searchUrl);
  };

  fetchDataAfterScroll = () => {
    const { actions, items, total_count, queryText } = this.props;
    let searchUrl = baseUrl.replace('{%pageNumber}', this.pageNumber++);
    searchUrl = searchUrl.replace('{%query}', queryText);

    getRepositories(searchUrl).then(response => {
      const newItems = response.items;

      actions.setGithubRepoData(items.concat(newItems), total_count);
    });
  };

  render() {
    const { items, filteredResults, isSearchTrigerred } = this.props;
    let repositories = isSearchTrigerred ? filteredResults : items;

    return (
      <div className="repos-listing">
        <InfiniteScroll 
          dataLength={repositories.length}
          next={this.fetchDataAfterScroll}
          hasMore={true}
          height={'36rem'}
        >
        <ul>
          {repositories.map(repository => {
            return (
              <RepoBlockComponent repository={repository}/>
            );
          })}
        </ul> 
        </InfiniteScroll>     
       </div>
    );
  }
}

export default ReposListingComponent;
