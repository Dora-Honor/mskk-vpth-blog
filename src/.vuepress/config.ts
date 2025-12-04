import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/mskk-vpth-blog/",

  lang: "zh-CN",
  title: "mskk 的个人博客",
  description: "大家我都喜欢哦",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
