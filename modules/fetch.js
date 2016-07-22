import * as AppConst from '../AppConst'
export function fetchGet(url,param={},fn){
	$.ajax({
		type: 'GET',
		url: AppConst.SERVER_URL+url,
		dataType:'json',
		success:function(json, status, xhr){
			if(typeof fn==='function'){
				fn(json, status, xhr)
			}
		}
	})
}

export function fetchPost(url,param={},fn){
	$.post(AppConst.SERVER_URL+url, param, 
		function(json, status, xhr){
	  		if(typeof fn==='function'){
	  			fn(json, status, xhr)
	  		}
		}
	)
}