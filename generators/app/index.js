// 此文件是Generator 的入口文件
// 需要导出一个继承自 Yeoman Generator 的类型
// 自定义 generator 工作时可以调用在类型中定义的方法和一些生命周期函数
// 我们在这些方法中可以通过调用父类提供的一些工具方法实现想要的功能, 例如文件写入
const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  // writing() {
  //   // Yeoman 自动在生成文件阶段调用此方法
  //   // 在这里尝试项目目录中写入文件
  //   this.fs.write(this.destinationPath("temp.txt"), Math.random().toString());
  // }
  // ------------------------------------------------------------------------------------------
  // 调用父类的 promt 方法, 用命令的方式询问用户基本信息
  prompting() {
    return this.prompt([
      {
        type: "input", // 使用用户输入的方式接受用户信息
        message: "your project name", // 询问的问题
        name: "name", // 问题的键
        default: this.appname, // 当前生成项目的目录名称
      },
      {
        type: "input", // 使用用户输入的方式接受用户信息
        message: "your project title", // 询问的问题
        name: "title", // 问题的键
        default: this.appname, // 当前生成项目的目录名称
      },
    ]).then((answers) => {
      // answers 就是上面用户输入的信息
      this.answers = answers;
    });
  }
  writing() {
    // 模板文件路径
    const templ = this.templatePath("bar.html");
    // 输出的文件路径
    const output = this.destinationPath("bar.html");
    // 模板中可用的上下文
    const context = this.answers;
    // 输出方法
    this.fs.copyTpl(templ, output, context);
  }
};
