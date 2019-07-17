export const baseUrl = 'https://api.github.com/search/repositories?page={%pageNumber}&q=is:public{%query}';

export const sortingDropdownOptions = ['Most Stars', 'Fewest Stars', 'Most Forks', 'Fewest Forks', 'A to Z', 'Z to A'];

export const sortingKeys = {
    'Most Stars': {value: 'stargazers_count', order: 'desc'},
    'Fewest Stars': {value: 'stargazers_count', order: 'asc'},
    'Most Forks': {value: 'forks', order: 'desc'},
    'Fewest Forks': {value: 'forks', order: 'asc'},
    'A to Z': {value: 'full_name', order: 'asc'},
    'Z to A': {value: 'full_name', order: 'desc'}
};

export const filterKey = {
    'languageValues': 'language',
    'repoTopicValues': 'topic',
    'lastActiveValues': 'pushed',
    'createdValues': 'created'
};