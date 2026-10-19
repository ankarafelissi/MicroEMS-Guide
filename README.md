# EMS 操作指南

与能源调度中心同风格的纯静态操作手册，无需 Node.js、构建步骤或后端服务。

在线阅读：[EMS 操作指南](https://ankarafelissi.github.io/MicroEMS-Guide/)。

英文版：[网站](https://ankarafelissi.github.io/MicroEMS-Guide-EN/) · [独立仓库](https://github.com/ankarafelissi/MicroEMS-Guide-EN)。两个网站的顶部可以切换语言。

## 发布

指南单独发布到公开仓库 `ankarafelissi/MicroEMS-Guide`。该仓库根目录只放本目录内的文件，不包含调度中心源码、模型、数据或许可证。

GitHub 仓库的 Settings → Pages 选择 Deploy from a branch，分支为 `main`、目录为 `/ (root)`。更新静态文件并推送到 `main` 后，GitHub Pages 自动重新发布。

## 两个网站的链接

- 调度中心顶部「User guide」默认打开英文指南，并通过 `?center=` 传递当前调度中心的地址，只传来源，不传方案 ID。
- 指南里的「进入调度中心」优先使用该地址，适应本地访问和临时公网地址变化。
- 直接打开指南时，使用 `config.js` 中的 `dashboardUrl`。公网入口改变后，可更新此默认值并重新发布。
- 返回入口是普通链接，不会自动连接或操作调度 API。
