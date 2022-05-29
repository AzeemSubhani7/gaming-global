module.exports = {
  devServer: {
    compress: true,
    public: 'store-client-nestroia1.c9users.io' // That solved it
  },
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}