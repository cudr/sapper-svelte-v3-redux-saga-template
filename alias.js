import path from 'path'

export default {
  '@src': path.join(__dirname, './src'),
  '@routes': path.join(__dirname, './src/routes'),
  '@components': path.join(__dirname, './src/components'),
  '@config': path.join(__dirname, './src/config'),
  '@store': path.join(__dirname, './src/store'),
  '@static': path.join(__dirname, './static'),
  '@ducks': path.join(__dirname, './src/ducks'),
  '@redux': path.join(__dirname, './src/redux'),
  resolve: ['.js', '.html', '/index.js', '/index.html']
}
