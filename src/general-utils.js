  import { orderBy } from 'lodash/collection';
  
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

  export const sortItemsBasedOnKey = (items, sortingKeyInfo) => {
    const sortedItems = orderBy(items, sortingKeyInfo.value, sortingKeyInfo.order);

    return sortedItems;
  };