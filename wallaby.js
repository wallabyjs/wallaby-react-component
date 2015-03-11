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
    }
  };
};