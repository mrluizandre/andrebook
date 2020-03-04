module.exports = {
  presets: [
    '@babel/preset-env', //relacionado a recursos que o browser não entende
    '@babel/preset-react' //realacionado a recursos do react
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties'
  ]
}