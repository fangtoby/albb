//==============================答题部分 start==============================

/********************第 1 题**********************/
// 用正则实现一个简单的 function 转换功能
// 将普通的函数声明方式，转化为 es6 语法的匿名函数声明
// 不用考虑闭包、特殊符号、函数上下文等边际情况

// 入参格式参考1：
const inputFuncStr = "function a () { console.log('transfer') }";
// 出参格式参考1：
const outputFuncStr = "const a = () => { console.log('transfer') }";

function transfer() {
  /**
   * 此处写代码逻辑
   */
}

/********************第 2 题**********************/
// 实现一个函数，可以对 url 中的 query 部分做拆解，返回一个 key - value 形式的 object
// 入参格式参考：
const url = "http://sample.com/?a=1&b=2&c=xx&d#hash";
// 出参格式参考：
const result = { a: "1", b: "2", c: "xx", d: "" };

function querySearch(url) {
  /**
   * 此处写代码逻辑
   */
  let res = {};
  if (url) {
    let temp = url.split("?")[1];

    if (temp) {
      temp.split("&").forEach((value, index, arr) => {
        if (value.indexOf("=") > -1) {
          res[value.split("=")[0]] = value.split("=")[1];
        } else {
          res[value.split("#")[0]] = "";
        }
      });
    }
  }
  return res;
}

/********************第 3 题**********************/
// 实现一个 arrange 函数，可以进行时间和工作调度
// [ > … ] 表示调用函数后的打印内容

// arrange('William').execute();
// > William is notified

// arrange('William').do('commit').execute();
// > William is notified
// > Start to commit

// arrange('William').wait(5).do('commit').execute();
// > William is notified
// 等待 5 秒
// > Start to commit

// arrange('William').waitFirst(5).do('push').execute();
// 等待 5 秒
// > William is notified
// > Start to push

function arrange() {
  /**
   * 此处写代码逻辑
   */
}

/********************第 4 题**********************/
// 实现一个函数，可以将数组转化为树状数据结构
// 入参格式参考：
const arr = [
  { id: 1, name: "i1" },
  { id: 2, name: "i2", parentId: 1 },
  { id: 4, name: "i4", parentId: 3 },
  { id: 3, name: "i3", parentId: 2 },
  { id: 8, name: "i8", parentId: 7 }
];
// 出参格式可自行设计

function buildTree(arr) {
  /**
   * 此处写代码逻辑
   */
}

/********************第 5 题**********************/
// 实现一个函数，可以深拷贝一个对象，对象可能包含 function
// 入参格式参考：
const originObj = {
  a: {
    b: {
      c: [1, 5, 11, 23, 422]
    }
  },
  d: function() {
    console.log("hello world");
  }
};

function clone(originObj) {
  /**
   * 此处写代码逻辑
   */
  var result = Array.isArray(originObj) ? [] : {};
  for (var key in originObj) {
    if (originObj.hasOwnProperty(key)) {
      if (typeof originObj[key] === "object") {
        result[key] = clone(originObj[key]); //递归复制
      } else {
        result[key] = originObj[key];
      }
    }
  }
  return result;
}

/********************第 6 题**********************/
// 实现findFibonacci函数，在一堆正整数中，找到最长的一组斐波那契数列段
// 斐波那契数列：一个递增的正整数数列，从第三位起，每个数字都是前两位数字之和，不一定要从 1 开始
// 入参格式参考：
const inputArr = [13, 9, 3, 8, 5, 25, 31, 11, 21];

// 出参格式参考：
const sequence = [3, 5, 8, 13, 21];

function findFibonacci(arr) {
  /**
   * 此处写代码逻辑
   */
  let resultList = [];
  //key:输入数组中的元素，value:该元素下标。该map可以以O（1）的时间快速从数组中查找某个数是否存在
  let map = new Map();

  //step1:升序排列数组
  arr.sort((a, b) => {
    return a - b;
  });
  //step2:初始化map
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], i);
  }
  //step3:遍历数组，找到第一组斐波那契额数f1,f2,f3，放入resulList
  let f1, f2, f3; //f1代表斐波那契第一个数，f2代表第二个数
  let i = 0;
  while (i < arr.length) {
    f1 = inputArr[i];
    f2 = inputArr[i + 1];
    f3 = f1 + f2;
    if (map.get(f3) != null) {
      //f3在数组中存在
      resultList.push(f1);
      resultList.push(f2);
      resultList.push(f3);
      break;
    } else {
      //找不到改变f1,f2
      i++;
    }
  }
  //step4:现在resultList含有3个数字  3,5,8，我们把5当成f1,8当成f2，去数组中找5+8,若存在这个13，把13放进列表，现在列表中是3,5,8,13，以此类推，把8作为f1,13为f2,去数组找f1+f2
  while (true) {
    f1 = resultList[resultList.length - 2];
    f2 = resultList[resultList.length - 1];
    if (map.get(f1 + f2) != null) resultList.push(f1 + f2);
    else break;
  }
  console.info(resultList);
}

//==============================答题部分 end================================

//==============================说明部分 start==============================

import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <div>
        <h1>题目列表</h1>
        <p>1. 用正则实现一个简单的 function 转换功能</p>
        <p>
          2. 实现一个函数，可以对 url 中的 query 部分做拆解，返回一个 key -
          value 形式的 object
        </p>
        <p>
          3. 实现一个<em>arrange</em>函数，可以进行时间和工作调度
        </p>
        <p>4. 实现一个函数，可以将数组转化为树状数据结构</p>
        <p>5. 实现一个函数，可以深拷贝一个对象，对象可能包含 function</p>
        <p>
          6. 实现<em>findFibonacci</em>
          函数，在一堆正整数中，找到最长的一组斐波那契数列段
        </p>
      </div>
      <div>
        <h1>答题说明</h1>
        <p>1. 请 fork 到自己的账号下完成题目</p>
        <p>2. 所有题目需要用原生 JS 实现，不能借助第三方类库</p>
        <p>3. 答题部分在上方，包含了每道题的补充说明和入参出参格式 demo</p>
        <p>
          4. 第 1、2 题需要在<em>index.tes.js</em>文件中写对应的单元测试
        </p>
        <p>5. 注意写好必要的注释</p>
        <p>
          <font color="red">
            *6. 尽可能完成所有题目, 有疑问联系对应的面试官
          </font>
        </p>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
//==============================说明部分 end================================
