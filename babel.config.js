module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    "airbnb"
  ],
  plugins: [
    "@babel/plugin-proposal-object-rest-spread"
  ]
};
