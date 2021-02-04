class Logger {
  constructor() {
    this.init();
  }

  init = () => {
    const items = [
      'one',
      'two',
      'three',
    ];

    items.forEach(item => {
      console.log(item);
    });
  }
}

export default Logger;