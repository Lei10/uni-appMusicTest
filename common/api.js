<<<<<<< HEAD
import { baseUrl } from './config.js'

export function topList(){
	
	
	return new Promise(function(resolve,reject){
		
		uni.request({
			url: `${baseUrl}/toplist/detail`,
			method: 'GET',
			data: {},
			success: res => {
				let result = res.data.list;
				result.length = 4;
				resolve(result);
			},
			fail: () => {},
			complete: () => {}
		});
	});
}
export function list(itemId){
	return uni.request({
		// url:'http://localhost:3000/top/list?id=19723756',
		// url:'http://localhost:3000/playlist/detail?id=19723756',
		url: `${baseUrl}/playlist/detail?id=${itemId}`,
		method: 'GET',
	});
}

export function songDetail(songId){
	return uni.request({
		//http://localhost:3000/song/detail?ids=1859245776
		url: `${baseUrl}/song/detail?ids=${songId}`,
		method: 'GET',
	});
}

export function songSimi(songId){
	return uni.request({
		//http://localhost:3000/simi/song?id=1859245776
		url: `${baseUrl}/simi/song?id=${songId}`,
		method: 'GET',
	});
}

export function songComment(songId){
	return uni.request({
		//http://localhost:3000/comment/music?id=1859245776
		url: `${baseUrl}/comment/music?id=${songId}`,
		method: 'GET',
	});
}

export function songLyric(songId){
	return uni.request({
		//http://localhost:3000/lyric?id=1859245776
		url: `${baseUrl}/lyric?id=${songId}`,
		method: 'GET',
	});
}

export function songUrl(songId){
	return uni.request({
		//http://localhost:3000/song/url?id=1859245776
		url: `${baseUrl}/song/url?id=${songId}`,
		method: 'GET',
	});
=======
import { baseUrl } from './config.js'

export function topList(){
	
	
	return new Promise(function(resolve,reject){
		
		uni.request({
			url: `${baseUrl}/toplist/detail`,
			method: 'GET',
			data: {},
			success: res => {
				let result = res.data.list;
				result.length = 4;
				resolve(result);
			},
			fail: () => {},
			complete: () => {}
		});
	});
}
export function list(itemId){
	return uni.request({
		// url:'http://localhost:3000/top/list?id=19723756',
		// url:'http://localhost:3000/playlist/detail?id=19723756',
		url: `${baseUrl}/playlist/detail?id=${itemId}`,
		method: 'GET',
	});
}

export function songDetail(songId){
	return uni.request({
		//http://localhost:3000/song/detail?ids=1859245776
		url: `${baseUrl}/song/detail?ids=${songId}`,
		method: 'GET',
	});
}

export function songSimi(songId){
	return uni.request({
		//http://localhost:3000/simi/song?id=1859245776
		url: `${baseUrl}/simi/song?id=${songId}`,
		method: 'GET',
	});
}

export function songComment(songId){
	return uni.request({
		//http://localhost:3000/comment/music?id=1859245776
		url: `${baseUrl}/comment/music?id=${songId}`,
		method: 'GET',
	});
}

export function songLyric(songId){
	return uni.request({
		//http://localhost:3000/lyric?id=1859245776
		url: `${baseUrl}/lyric?id=${songId}`,
		method: 'GET',
	});
}

export function songUrl(songId){
	return uni.request({
		//http://localhost:3000/song/url?id=1859245776
		url: `${baseUrl}/song/url?id=${songId}`,
		method: 'GET',
	});
}

export function searchHot(){
	return uni.request({
		//http://localhost:3000/search/hot/detail
		url: `${baseUrl}/search/hot/detail`,
		method: 'GET',
	});
}

export function searchWord(word){
	return uni.request({
		//http://localhost:3000/search?keywords=${word}
		url: `${baseUrl}/search?keywords=${word}`,
		method: 'GET',
	});
}

export function searchSuggest(word){
	return uni.request({
		//http://localhost:3000/search/suggest?keywords=${word}&type=mobile
		url: `${baseUrl}/search/suggest?keywords=${word}&type=mobile`,
		method: 'GET',
	});
>>>>>>> 49a9a9c (music)
}