export default {
  lazyCodeLoading: "requiredComponents",
  pages: ["pages/index/index"],
  subpackages: [
    {
      root: "packages/test",
      pages: ["pages/icon/icon"],
    },
  ],
  
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  useExtendedLib: {
    weui: true,
  },
  usingComponents: {
    "mp-icon": "weui-miniprogram/icon/icon",
    "mp-navigation-bar": "weui-miniprogram/navigation-bar/navigation-bar",
  },
};
