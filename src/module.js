
export function hello() {
  return 'hello()';
}

export const time = new Date();

// works too:
// export {hello, time};

class Client {
  constructor() {
    this.value = 'get'
  }
  get() {
    return this.value;
  }
  static staticGet() {
    console.log('static get')
  }
}

Client.staticGet();

const client = new Client();

export default client;