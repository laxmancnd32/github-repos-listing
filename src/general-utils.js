  import { orderBy } from 'lodash/collection';
  
  export const filterRepositories = args => {
    const { filterCriteria, queryText, items } = args;

    const filteredResults = items.filter(item => {
      
      return item[filterCriteria].includes(queryText);

    });

    return filteredResults;
  };

  export const sortItemsBasedOnKey = (items, sortingKeyInfo) => {
    const sortedItems = orderBy(items, sortingKeyInfo.value, sortingKeyInfo.order);

    return sortedItems;
  };

  export const getDateValues = dateObj => {
    const month = dateObj.getUTCMonth() + 1;
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();

    return { year, month, day}
  };

  export const getDateBasedOnFilter = filterValue => {
    const currentDateObj = getDateValues(new Date());
    const { year, month, day } = currentDateObj;
    
    switch(filterValue.value){
      case '30 days': return getDateValues(new Date(year, month - 2, day));
      case '6 months': return getDateValues(new Date(year, month - 7, day));
      default: return getDateValues(new Date(year-1, month - 1, day));
    }
  };