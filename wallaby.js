module.exports = function () {
  return {

    files: [
      {pattern: 'test/phantomPolyfill.js', instrument: false},
      {pattern: 'node_modules/react/dist/react-with-addons.js', instrument: false},
      'assets/**',
      'src/**'
    ],

    tests: [
      'test/*Spec.jsx'
    ],

    preprocessors: {
      // react tools
      '**/*.jsx': file => require('react-tools').transformWithDetails(file.content, {sourceMap: true, harmony: true})
      // babel
      // '**/*.jsx': file => require('babel').transform(file.content, {sourceMap: true})
              
        // NOTE: If you're using Babel 6, you should use `presets: ['es2015']`.
        // You will also need to
        // npm install babel-core (and require it instead of babel)
        // and
        // npm install babel-preset-es2015
        // See http://babeljs.io/docs/plugins/preset-es2015/

    }
  };
};
