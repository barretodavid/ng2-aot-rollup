const { exec } = require('child_process');
const watch = require('node-watch');

const buildingMessage = 'Building app...';
const buildCompleteMessage = 'Build completed!';

console.info('Copying files...');
exec('npm run clean-and-copy');

buildApp();

watch('app', () => {
  buildApp();
});

function buildApp() {
  console.info('Building app...');
  exec('npm run build', () => console.info('Build completed!'));
}