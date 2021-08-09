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