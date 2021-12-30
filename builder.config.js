// ./builder.config.js
const { runNodejs, browserPlay, nodejsPlay, devNodejs, devBrowser } = require('build-dev');

function run([type]) {
    switch (type) {

        case 'play:browser':
            return browserPlay();

        case 'play:nodejs':
            return nodejsPlay();

        case 'run:nodejs':
            return runNodejs({ entryFile: './server/main' }); // ./server/main.ts
            
        case 'dev:browser':
            return devBrowser({
                fromDir: 'examples/conference',
                entryFile: 'index.ts',
                toDir: '.cache/web',
                copyFiles: ['index.html'],
                watchOtherDirs: ['src']
            });

        case 'dev:nodejs':
            return devNodejs({
                fromDir: '/src/backend', 
                entryFile: 'main.ts', 
                toDir: '.cache/node' 
            });

        case 'dev':
            run(['dev:browser'])
            run(['dev:nodejs'])
            break;

        default:
            throw new Error(`"${type}" not implemented`);
    }
}

run(process.argv.slice(2));