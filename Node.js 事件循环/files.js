var fs = require("fs");

fs.readFile("E:\\VSCode\\web-project\\other-project\\runoob\\nodeJS-runoob\\Node1.js 回调函数\\input.txt", function (err, data) {
   
    if(err){
        console.log(err.stack);
        return;
    }
    console.log(data.toString);
});



console.log("程序执行结束!");