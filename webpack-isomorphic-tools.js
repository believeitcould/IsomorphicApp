var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')

module.exports = {
  assets:
  {
    styles:
    {
      extensions: ['less', 'scss', 'css'],
 
      // which `module`s to parse CSS from: 
      filter: function(module, regular_expression, options, log)
      {
        if (options.development)
        {
          // In development mode there's Webpack "style-loader", 
          // which outputs `module`s with `module.name == asset_path`, 
          // but those `module`s do not contain CSS text. 
          // 
          // The `module`s containing CSS text are  
          // the ones loaded with Webpack "css-loader". 
          // (which have kinda weird `module.name`) 
          // 
          // Therefore using a non-default `filter` function here. 
          // 
          return WebpackIsomorphicToolsPlugin.style_loader_filter(module, regular_expression, options, log)
        }
 
        // In production mode there will be no CSS text at all 
        // because all styles will be extracted by Webpack Extract Text Plugin 
        // into a .css file (as per Webpack configuration). 
        // 
        // Therefore in production mode `filter` function always returns non-`true`. 
      },
 
      // How to correctly transform kinda weird `module.name` 
      // of the `module` created by Webpack "css-loader"  
      // into the correct asset path: 
      path: WebpackIsomorphicToolsPlugin.style_loader_path_extractor,
 
      // How to extract these Webpack `module`s' javascript `source` code. 
      // basically takes `module.source` and modifies `module.exports` a little. 
      parser: WebpackIsomorphicToolsPlugin.css_loader_parser
    }
  }
}