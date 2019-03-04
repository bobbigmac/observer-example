
// Object.prototype.on = function(key, type, handler) {
// 	this.traps = {
// 		set: function(target, name, receiver) {
// 			console.log(target, name, receiver);
// 		},
// 		get: function() {
// 		}
// 	};
// 	this.proxy = this.proxy || new Proxy(this, this.traps);
// 	// this.events = this.events || {};
// 	// this.events[type] = this.events[type] || [];

// 	// this.events[type].push({
// 	// 	key, handler
// 	// });
// };

// Object.prototype.off = function(key, type, handler) {
// };

// Object.prototype.set = function(key, value) {
// 	this[key] = value;

// 	console.log(this.events.change);
// 	if(this.events && this.events.change && this.events.change.length) {
// 		this.events.change.filter(x => x.key === key && x.handler).map(x => x.handler(this, key, value));
// 	}
// };

// Object.prototype.get = function(key, value) {
// };