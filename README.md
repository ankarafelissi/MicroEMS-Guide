# EMS Operations Guide

One bilingual guide, maintained in this repository and published with GitHub Pages.

- [English — default](https://ankarafelissi.github.io/MicroEMS-Guide/)
- [中文](https://ankarafelissi.github.io/MicroEMS-Guide/zh.html)

Use the language switch at the top of either page. Switching preserves the current chapter and the dashboard return address.

## Files and publishing

`index.html` contains the English guide; `zh.html` contains the Chinese guide. Both share `style.css`, `script.js`, `config.js`, and `favicon.svg`. No build step or backend is required.

GitHub Settings → Pages uses **Deploy from a branch**, branch **main**, folder **/ (root)**. Push changes to `main` to publish. This public repository contains only the guide, with no dispatch application source, models, data, or licenses.

The dashboard's **User guide** link opens the English homepage and passes its origin through `?center=`. The guide's **Dashboard** link uses that address; direct visits fall back to `dashboardUrl` in `config.js`. The link does not execute dispatch operations.

## 中文说明

中英文在同一个仓库维护。默认首页为英文，顶部「中文 / EN」切换语言，并保留当前章节和返回调度中心的地址。

修改英文内容使用 `index.html`，修改中文内容使用 `zh.html`；样式和脚本由两个版本共用。提交到 `main` 后由 GitHub Pages 自动发布。
