// const API_KEY = "AIzaSyAYBGzyBFu7oM1dvLC1ioqJfYEDKKWYyw0";
// export const YT_API = 
//              "GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=" + API_KEY;

const API_KEY = "AIzaSyAYBGzyBFu7oM1dvLC1ioqJfYEDKKWYyw0"

export const OFFSET_LIVE_CHAT = 10;
export const YT_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + API_KEY;

export const YOUTUBE_SEARCH_API =
   // "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
   "https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="