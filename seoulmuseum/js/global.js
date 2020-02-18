//전역 변수
var GC = GC || {};
GC.namespace = function(ns_string) {
	var parts = ns_string.split('.'),
		parent = GC,
		i;
	
	// 처음에 중복되는 전역 객체명은 제거한다.
	if(parts[0] === 'GC') {
		parts = parts.slice(1);
	}
	
	for(i=0; i<parts.length; i+=1) {
		if(typeof parent[parts[i]] === 'undefined') {
			parent[parts[i]] = {};
		}
		parent = parent[parts[i]];
	}
	
	return parent;
};

//사용자 정보
GC.namespace('GC.userInfo');
	
//전역 함수
var GF = GF || {};
GF.namespace = function(ns_string) {
	var parts = ns_string.split('.'),
		parent = GF,
		i;
	
	// 처음에 중복되는 전역 객체명은 제거한다.
	if(parts[0] === 'GF') {
		parts = parts.slice(1);
	}
	
	for(i=0; i<parts.length; i+=1) {
		if(typeof parent[parts[i]] === 'undefined') {
			parent[parts[i]] = {};
		}
		parent = parent[parts[i]];
	}
	
	return parent;
};

GF.namespace('GF.ajax');
GF.ajax = {
	get: function(url, params, successCallback, errorCallback) {
		this._request('GET', url, null, successCallback, errorCallback);
	},
	post: function(url, params, successCallback, errorCallback) {
		this._request('POST', url, JSON.stringify(params), successCallback, errorCallback);
//		this._request('POST', url, jQuery.param(params), 'application/x-www-form-urlencoded; charset=utf-8', successCallback, errorCallback);
	},
	put: function(url, params, successCallback, errorCallback) {
		this._request('PUT', url, JSON.stringify(params), successCallback, errorCallback);
	},
	delete: function(url, params, successCallback, errorCallback) {
		this._request('DELETE', url, null, successCallback, errorCallback);
	},
	_request: function(method, url, params, successCallback, errorCallback) {
		$.ajax({
			type: method,
            url: url,
            async: true,
            data: params,
            dataType: 'json',
            contentType: 'application/json; charset=UTF-8',
            success: function(data, status, xhr) {
	        	if(data.hy.result == "100"){
	            	if(typeof(successCallback) == "function") {
	                	successCallback(data);
	            	}
	        	} else {
	        		if(typeof(errorCallback) == "function") {
	        			errorCallback(data);
	            	}
	        	}
			},
			error: function (xhr, status, errorThrown) {
				console.log("aJax 통신 오류 : " + xhr.status + " : " + status + " : " + errorThrown);
				errorCallback(xhr);
			}
        })
	},
	_html: function(url) {
		$.ajax({
			type: 'POST',
            url: url,
            dataType: 'html',
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            success: function(data, status, xhr) {
            	$("div#main_container").html(data);
			},
			error: function (xhr, status, errorThrown) {
				console.log("aJax 통신 오류 : " + xhr.status + " : " + status + " : " + errorThrown);
				errorCallback(xhr);
			}
        })
	}
};

//serializeObject
(function($){
    $.fn.serializeObject = function () {
        var result = {};
        var extend = function (i, element) {
            var node = result[element.name];
            if ('undefined' !== typeof node && node !== null) {
                if ($.isArray(node)) {
                    node.push(element.value);
                } else {
                    result[element.name] = [node, element.value];
                }
            } else {
                result[element.name] = element.value;
            }
        };
 
        $.each(this.serializeArray(), extend);
        return result;
    };
})(jQuery);

GF.isEmptyObject = function(obj) {
	return Object.keys(obj).length === 0;
}