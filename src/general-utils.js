export const formatRepos = items => {
    const formattedItems = [];
  
    items.forEach(item => {
      const { full_name, forks, description, watchers, stargazers_count, forks_url, language, clone_url, pushed_at, size } = item;

      formattedItems.push({
            full_name, forks, description,
            watchers, stargazers_count, forks_url,
            language, clone_url, pushed_at, size
        });
    });

    return formattedItems;
  };

  export const filterRepositories = args => {
    const { filterCriteria, queryText, items } = args;

    const filteredResults = items.filter(item => {
      
      return item[filterCriteria].includes(queryText);

    });

    return filteredResults;
  };

  export const formatQuery = (queryText, type , queryValues) => {
    let baseString = queryText;

    switch(type){
      case 'languageValues': {
        queryValues.forEach(value => {
          baseString = baseString + '+language:' + value;
        });

        return baseString;
      }
      case 'lastActiveValues': {
        queryValues.forEach(value => {
          baseString = baseString + '+lastActive:' + value;
        });

        return baseString;
      }
      case 'repoTopicValues': {
        queryValues.forEach(value => {
          baseString = baseString + '+repoTopic:' + value;
        });

        return baseString;
      }
      case 'createdValues': {
        queryValues.forEach(value => {
          baseString = baseString + '+created:' + value;
        });

        return baseString;
      }
      default: return baseString;
    }
  };