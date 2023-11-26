const API_KEY = "AIzaSyAYBGzyBFu7oM1dvLC1ioqJfYEDKKWYyw0"
export const YT_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" + API_KEY;
export const YT_SEARC_API = "https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
export const COMMENT_API =`https://www.googleapis.com/youtube/v3/commentThreads?key=${API_KEY}&textFormat=plainText&part=snippet&videoId=`
export const LIVE_CHAT_COUNT = 25;