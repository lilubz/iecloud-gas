const PROXY_CONFIG = [
  {
    context: [
      "/api/user",
    ],
    target: "http://192.168.1.26:8080",// 费峰
    secure: false,
    "pathRewrite": {
      "^/api": ""
    }
  },
  // {
  //   context: [
  //     "/api/user",
  //   ],
  //   target: "http://192.168.1.8:8080",// 妮娜
  //   secure: false,
  //   "pathRewrite": {
  //     "^/api": ""
  //   }
  // },
  // {
  //   context: [
  //     "/api/user",
  //   ],
  //   target: "http://192.168.1.107:8080",// 涛哥
  //   secure: false,
  //   "pathRewrite": {
  //     "^/api": ""
  //   }
  // },
  
];

module.exports = PROXY_CONFIG;
