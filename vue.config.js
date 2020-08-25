module.exports = {
	publicPath: '',
	assetsDir: 'assets',
	runtimeCompiler: true,
	css: {
		sourceMap: true,
	},
	pluginOptions: {
		electronBuilder: {
			outputDir: 'dist/electron/',
			nodeIntegration: true,
		},
	},
};
