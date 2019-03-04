
Array.prototype.last = Array.prototype.last || function(n) {
	return this.slice(-1)[0];
};

Array.prototype.first = Array.prototype.last || function(n) {
	return this.slice(0,1)[0];
};