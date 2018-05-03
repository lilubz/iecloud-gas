const PROXY_CONFIG = [
  {
    context: [
      "/wenZhouGas",
      // "/upload",
    ],
    target: "http://192.168.1.26:8080",// 费峰
    secure: false,
    "pathRewrite": {
      "^/wenZhouGas": ""
    }
  },
  // {
  //   context: [
  //     "/wenZhouGas",
  //   ],
  //   target: "http://192.168.1.8:8080", // 妮娜
  //   secure: false,
  //   "pathRewrite": {
  //     "^/wenZhouGas": ""
  //   }
  // },
  // {
  //   context: [
  //     "/wenZhouGas",
  //     "/dataImport",
  //   ],
  //   target: "http://192.168.1.141:8080", // 本地测试
  //   secure: false,
  //   "pathRewrite": {
  //     "^/wenZhouGas": ""
  //   }
  // },
  // {
  //   context: [
  //     "/wenZhouGas",
  //     "/dataImport",
  //   ],
  //   target: "http://192.168.1.135:8080", // 铁军台式
  //   secure: false,
  //   "pathRewrite": {
  //     "^/wenZhouGas": ""
  //   }
  // },
  // {
  //   context: [
  //     "/wenZhouGas",
  //     "/dataImport",
  //   ],
  //   target: "http://192.168.1.107:28080",// 涛哥
  //   secure: false,
  //   "pathRewrite": {
  //     "^/wenZhouGas": ""
  //   }
  // },
  // {
  //   context: [
  //     "/wenZhouGas",
  //     "/dataImport",
  //   ],
  //   target: "http://192.168.1.141:8080",// 涛哥笔记本
  //   secure: false,
  //   "pathRewrite": {
  //     // "^/wenZhouGas": ""
  //   }
  // },
  // {
  //   context: [
  //     "/wenZhouGas",
  //     "/upload",
  //   ],
  //   target: "http://60.190.114.126", // 线上
  //   secure: false,
  //   // "pathRewrite": {
  //   //   "^/wenZhouGas": ""
  //   // }
  // },


];

module.exports = PROXY_CONFIG;
