module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'avoid',
        bracketSpacing: true,
        jsxBracketSameLine: true,
        printWidth: 120,
        endOfLine: 'auto',
      },
    ],
  },
};
