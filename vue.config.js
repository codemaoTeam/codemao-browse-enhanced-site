module.exports = {
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'Codemao Browse Enhanced';
      return args;
    });
  },
};
