var fs = require("fs");

fs.readFile("E:\\VSCode\\web-project\\other-project\\runoob\\nodeJS-runoob\\Node.js 回调函数\\input.txt", function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("程序执行结束!");