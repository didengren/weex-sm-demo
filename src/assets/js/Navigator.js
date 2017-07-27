import A from './A'
var navigator = weex.requireModule('navigator')

export default class Navigator extends A{
	constructor(url){
		super()
	}

	push(url){
		navigator.push({ url: url})
	}

    pop(){
    	navigator.pop()
    }
}