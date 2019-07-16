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