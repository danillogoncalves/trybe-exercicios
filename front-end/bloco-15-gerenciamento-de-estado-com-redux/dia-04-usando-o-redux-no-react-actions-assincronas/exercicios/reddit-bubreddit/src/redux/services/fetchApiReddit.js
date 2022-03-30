const fetchApiReddit = async (subreddit) => {
  const URL = `https://www.reddit.com/r/${subreddit}.json`;
  const request = await fetch(URL);
  const response = request.json();
  return response;
};

export default fetchApiReddit;
