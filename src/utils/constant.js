const GOOGLE_API_KEY = "AIzaSyBhN-_Lb4p4P7YMPimOlWap2DWJVuQazTk"

export const LIVE_CHAT_COUNT = 50;


export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +GOOGLE_API_KEY

export const SEARCH_SUGGESTION_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const getChannelDetails = (channelId)=>{
return `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${GOOGLE_API_KEY}`;
}