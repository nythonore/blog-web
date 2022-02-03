export const trimText = (text: string = '', length: number = 8) => {
	if (text.length > length) return `${text.slice(0, length)}...`;
	return text;
};
