const URI = "https://tsuitta-rest-api.vercel.app/api/search";

export const findTweets = async (keyword, maxResults) => {
  const response = await fetch(
    `${URI}?query=${keyword}&max_results=${maxResults}`
  );

  if (!response.ok) {
    throw new Error("An error occurred");
  }

  return await response.json();
};
