export default class HelloWorld {
  constructor(name) {
    this.name = name;
  }

  getMessage() {
    return 'Hello World: ' + this.name;
  }
}
