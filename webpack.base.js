const path = require('path');

module.exports = {
	// Tell webpack to run babel on every file it runs through
	devtool: 'cheap-module-source-map',
	module: {
		rules: [
			{
				test: /\.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: ['react', 'stage-0', ['env', { targets: { browsers: ['last 2 versions'] } }]],
				},
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			},
			{
        test: /\.svg$/,
        loader: 'file-loader'
			},
			{
        exclude: [
          /\.html$/,
          /\.(js|jsx)(\?.*)?$/,
          /\.css$/,
          /\.json$/,
          /\.svg$/
        ],
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]'
        }
      }
		],
	},
	resolve: {
		modules: [
			path.join(__dirname, 'src', 'client'),
			path.join(__dirname, 'src'),
			'node_modules'
		]
	}
}