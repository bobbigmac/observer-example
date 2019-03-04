
class ObservableObject extends Object {
	ensure(type) {
		this.events = this.events || {};
		this.events[type] = this.events[type] || [];
	}
	on(type, key, handler) {
		this.ensure(type);

		this.events[type].push({
			key, handler
		});
	}
	off(type, key, handler) {
		this.ensure(type);

		if(key && handler) {
			this.events[type] = this.events[type]
				.filter((x,p) => x.key === key && handler && x.handler !== handler);
		}
	}
};

class Observable {
	constructor(subject) {
		// super();
		this.subject = Object.assign(new ObservableObject(), subject || {});

		let proxy = new Proxy(this.subject, {
			get: function(target, prop) {
				// console.log('get', target, prop);
			  if(target.events && target.events.get && target.events.get.length) {
			  	target.events.get
			  		.filter(x => x.key === prop && x.handler)
			  		.map(x => x.handler(prop, value));
			  }

				return target[prop];
			},
			set: function(target, prop, value) {
			  target[prop] = value;

			  // console.log('set', this, target, prop, value);
			  if(target.events && target.events.set && target.events.set.length) {
			  	target.events.set
			  		.filter(x => x.key === prop && x.handler)
			  		.map(x => x.handler(prop, value));
			  }

			  return true;
			}
		});

		console.log(this.observableObject);

		return proxy;
	}
}