import('./Logger').then(({ default: Logger }) => {
  new Logger();
}).catch(error => 'An error occurred while loading the Logger module');