'use strict';

export default class A{
	whichPlatformFn(){
		if(WXEnvironment.platform=='Web')
			return this.contentType = 'text/plain;charset=UTF-8'
		else
			return this.contentType = 'application/json'
	}
}
