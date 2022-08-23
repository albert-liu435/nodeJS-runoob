// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var event = new events.EventEmitter();

// var EventEmitter = require('events').EventEmitter; 
// var event = new EventEmitter(); 
//event 对象注册了事件 some_event 的一个监听器
event.on('some_event', function() { 
    console.log('some_event 事件触发'); 
}); 

setTimeout(function() { 
    //然后我们通过 setTimeout 在 1000 毫秒以后向 event 对象发送事件 some_event，此时会调用some_event 的监听器。
    event.emit('some_event'); 
}, 1000); 