

export const required = value =>{
	if(value) return undefined;
	return 'Field is required'
}

export const maxLength30  = value =>{
	if(value.length > 30) return 'max length is 30 symbols';
	return undefined
}

export const maxLengthCreator = (maxLength) => (value) => {
	if (value.length > maxLength) return `max length is ${maxLength} symbols`
	return undefined

}