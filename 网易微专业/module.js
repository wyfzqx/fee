//1
//math.js
//缺点：封装性无，接口结构不明显
function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
//calculator.js
//缺点：没有依赖声明；使用全局状态
var action = "add";
function compute(a, b){
  switch (action) {
    case "add": return add(a, b);
    case "sub": return sub(a, b);
    default: break;
  }
}

//2
//math.js
//优点：结构性好；缺点：访问控制
var math = {
  add: function add(a, b) {
    return a + b;
  },
  sub: function mul(a, b) {
    return a - b;
  }
};
//calculator.js
//缺点：同样没有依赖声明，无法声明私有属性
var calculator = {
  action: "add",
  compute: function(a, b){
    switch (action) {
      case "add": return add(a, b);
      case "sub": return sub(a, b);
      default: break;
    }
  }
};

//3 IIFE:Immediately-invoked Function Expression:自执行函数表达式
//优点：访问控制；缺点：没有依赖声明
var calculator = (function () {
  var action = "add";
  return {
    compute:function(a, b) {
      switch (action) {
        case "add": return add(a, b);
        case "sub": return sub(a, b);
        default: break;
      }
    }
  }
})();

//4
//优点；有依赖声明;
//缺点：仍然污染了全局变量；必须手动进行依赖管理
var calculator = (function(m) {
  var action = "add";
  function compute(a, b) {
    switch (action) {
      case "add": return m.add(a, b);
      case "sub": return m.sub(a, b);
      default: break;
    }
  }
  return{
    //review module pattern
    compute: compute
  }
})(math);

//5 namespace命名空间
//模块名称，依赖名称，功能
var namespace = (function(){
  var cache = {};
  function createModule(name, deps, definition) {
    if(arguments.length === 1){
      return cache[name];
    }
    //必须先取得所有模块的依赖
    deps = deps.map(function(depName){
      return namespace(depName);
    });
    //初始化模块并返回
    cache[name] = definition.apply(null, deps)
    return cache[name];
  }
  return createModule;
})();

namespace("math", [], function () {
  function add(a, b){ return a + b; }
  function sub(a, b){ return a - b; }
  return {
    add: add,
    sub: sub
  }
});

namespace("calculator", ["math"], function (m) {
  var action = "add";
  function compute(a, b){
    return m[action](a, b);
  }
  return {
    compute: compute
  }
});

//模块系统：如：commonjs(node.hs)、cmd
//依赖管理：加载/分析/注入/初始化
//决定模块写法

//Commonjs/module
//A module spec for js outside the browser
//优点：依赖管理成熟可靠；
//社区活跃，规范接受度高；
//运行时支持，模块定义非常简单;
//文件级的模块作用域隔离
//可以处理循坏依赖
//缺点：不是标准组织的规范
//同步的require，没有考虑浏览器环境








acsc
