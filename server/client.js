import webpack from 'webpack'
import ProgressPlugin from 'webpack/lib/ProgressPlugin'
import webpackConfig from '../webpack.config'
import { devMiddleware, hotMiddleware } from 'koa-webpack-middleware'

const devWebpack = (app) => {
	const compiler = webpack(webpackConfig)
	compiler.apply(new ProgressPlugin((percentage, msg) => {
		percentage == 0 && console.log('build bundle start')

		process.stdout.write(parseInt(percentage * 100) + " " + msg + "\r")
	}))

	app.use(devMiddleware(compiler, { publicPath: webpackConfig.output.publicPath }))
	app.use(hotMiddleware(compiler))
}

export default devWebpack