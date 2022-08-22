var fs = require("fs");

var data = fs.readFileSync("E:\\VSCode\\web-project\\other-project\\runoob\\nodeJS-runoob\\Node.js 回调函数\\input.txt");

console.log(data.toString());
console.log("程序执行结束!");

// const buf = fs.readFileSync("E:\\VSCode\\web-project\\other-project\\runoob\\nodeJS-runoob\\Node.js 回调函数\\package.json");
// console.log(buf.toString("utf8"));