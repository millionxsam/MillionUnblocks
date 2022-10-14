(async () => {
  const process = require('process');

  process.on('uncaughtException', (err) => {
    console.error(err);
  });

  await import('./index.mjs');
})();
