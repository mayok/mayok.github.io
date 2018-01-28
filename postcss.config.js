module.exports = (ctx) => ({
  map: ctx.options.map,
  plugins: [
		require('postcss-import'),
    require('postcss-custom-media'),
    require('postcss-nested'),
    require('autoprefixer'),
  ],
});
