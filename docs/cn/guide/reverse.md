# 配置

首次启动 afrog 时，它将自动创建一个名为 `afrog-config.yaml` 的配置文件，该文件将保存在当前用户目录下的 `$HOME/.config/afrog/afrog-config.yaml`。

## 反连平台

以下是一个示例配置文件：

```yaml
reverse:
  ceye:
    api-key: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    domain: "xxxxxx.ceye.io"
```

`reverse` 是用于验证无法回显的命令执行漏洞的反向连接平台。目前，只能使用 ceye 进行验证。要获取 ceye，请按照以下步骤操作：

- 访问 [ceye.io](http://ceye.io/) 网站并注册一个账号。
- 登录并进入个人设置页面。
- 复制 `domain` 和 `api-key`，并在 `afrog-config.yaml` 文件中正确配置它们。