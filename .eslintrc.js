module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  "env": {
    "browser": true,
    "node": true,
    "jasmine": true
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  "globals": {
    require: true,
  },
  // add your custom rules here
  'rules': {
    'import/no-unresolved': 0,
    'linebreak-style': 0,
    'no-global-assign': 0,
    'no-unsafe-negation':0,
    'import/no-extraneous-dependencies': 0, // 为了import alias里内容，将没配到package.json的依赖，这个警告关闭
    'no-param-reassign': 0,
  }
}
