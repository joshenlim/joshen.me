module.exports = {
  purge: [
    './src/**/*.html'
  ],
  theme: {
    backgroundColor: theme => ({
      'primary': '#212121',
      'secondary': '#333333',
      'tertiary': '#424242',
      'white': '#FFFFFF',
    }),
    fontFamily: {
      'sans': 'Roboto, Helvetica Neue, sans-serif',
      'header': 'Manrope, sans-serif',
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
