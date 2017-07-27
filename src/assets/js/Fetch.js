/*
 * 封装weex的stream fetch方法
 * @params options里可以有3个属性 type、url、body
 */

import A from './A'
var stream = weex.requireModule('stream')

const DEFAULTS = {
	type: 'json',
	headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}

export default class Fetch extends A{
	constructor(options){
	    super()
	    this.contentType = super.whichPlatformFn()
	    DEFAULTS.headers = {'Content-Type': this.contentType}
	    this.opts = Object.assign({}, DEFAULTS, options)
	    console.log('opts:')
	    console.log(this.opts)
	}

	_bodyToStr(objStr){
		if(typeof objStr == 'object')
		    return JSON.stringify(objStr)
	}

    get(callback){
    	stream.fetch({
    		method: 'GET',
    		type: this.opts.type,
    		url: this.opts.url
    	}, res=>{
    		if(typeof callback == 'function')
				return callback(res)
    	})
    }

	post(callback){
		stream.fetch({
			method: 'POST',
			type: this.opts.type,
			headers: this.opts.headers,
			url: this.opts.url,
			body: this._bodyToStr(this.opts.body)
		}, res=>{
			if(typeof callback == 'function')
				return callback(res)
		})
	}
}