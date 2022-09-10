
class LocalStorageMock {

	store: { [key: string]: string } = {};

  	clear() {
    	this.store = {};
  	}

  	getItem(key: string) {
    	return this.store[key] || null;
  	}

  	setItem(key: string, value: string) {
    	this.store[key] = String(value);
  	}

  	removeItem(key: string) {
    	delete this.store[key];
  	}
}

export default LocalStorageMock;