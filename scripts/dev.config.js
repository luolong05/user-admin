const devServerConfig = (config) => {
  return {
    ...config,
    open: false,
    compress: true,
    proxy: {
      "/api": {
        target: "http://localhost:8088/api",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  };
};

module.exports = {
  devServerConfig,
};
