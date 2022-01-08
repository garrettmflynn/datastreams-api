// ./builder.config.js
const { runNodejs, browserPlay, nodejsPlay, devNodejs, devBrowser } = require('build-dev');

function run([type]) {
    switch (type) {

        case 'run:nodejs':
           return runNodejs({
                entryFile: './src/main', 
                watchDirs: ['src/backend', 'src/common'],
                nodeArgs: ['development'] 
            });

        case 'run':
            run(['run:nodejs'])
            break;

        default:
            throw new Error(`"${type}" not implemented`);
    }
}

run(process.argv.slice(2));