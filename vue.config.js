const path = require("path"); //path模块
function resolve(dir) {
  return path.join(__dirname, dir);
}

// 项目的主要配置文件
module.exports = {
  //set第一个参数：设置的别名，第二个参数：设置的路径
  chainWebpack: (config) => {
    //修改文件引入自定义路径
    config.resolve.alias
      .set("@", path.resolve(__dirname, "src"))
      .set("assets", path.resolve(__dirname, "src/assets"))
      .set("views", path.resolve(__dirname, "src/views"));
  },
};
