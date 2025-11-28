# PWA Wrapper

这是一个用于包装无法嵌入的网站的PWA壳应用。适用于目标网站禁止被 iframe 嵌入（如 Google、GitHub 等）的情况。

## 工作原理

- 作为独立的PWA应用安装在设备上
- 打开应用时自动跳转到指定的目标网站
- 绕过目标网站的X-Frame-Options限制

## 使用方法

1. 克隆此仓库
2. 修改 `index.html` 中的 `TARGET_URL` 变量为您要包装的目标网站
3. 更新 `manifest.json` 中的应用信息（可选）
4. 替换 `icon.png` 为您自己的应用图标（可选）
5. 部署到支持HTTPS的服务器

## 配置说明

### 修改目标网站
在 `index.html` 文件中找到以下代码并修改URL：
```javascript
const TARGET_URL = "https://www.example.com"; // 请修改为目标网站
```

### 自定义跳转延迟
默认在页面加载2秒后自动跳转，可以修改以下代码调整延迟时间：
```javascript
setTimeout(redirectToTarget, 2000); // 2秒后自动跳转
```

## 文件说明

- `index.html`: 主应用程序文件，包含自动跳转逻辑
- `manifest.json`: PWA配置文件
- `sw.js`: Service Worker文件，处理缓存和离线功能
- `icon.png`: 应用图标

## 支持的网站

理论上支持所有网站，包括：
- Google
- GitHub
- YouTube
- Twitter
- Facebook
- 等等

## 注意事项

1. 目标网站必须可以通过HTTPS访问
2. 某些网站可能有额外的安全限制
3. 用户需要在支持PWA的浏览器中安装此应用

## 许可证

MIT License