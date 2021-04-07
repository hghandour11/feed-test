module.exports = {
  plugins: [
    'postcss-flexbugs-fixes',
    'postcss-import',
    ['postcss-mixins', {
      mixinsDir: './styles/',
    }],
    'postcss-calc',
    'postcss-extend',
    ['postcss-color-mod-function', {
      importFrom: [
        './styles/vars.css',
      ],
    }],
    ['postcss-preset-env', {
      stage: 1,
      preserve: false,
      importFrom: [
        './styles/vars.css',
      ],
    }],
    'tailwindcss',
    'autoprefixer',
    'postcss-nested',
    'postcss-100vh-fix',
  ],
}
