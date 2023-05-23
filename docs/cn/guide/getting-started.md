# 入门指南

一个用于 SRC、渗透测试和红队行动的安全工具。

## 安装

### 先决条件

- [Go](https://go.dev/) version 1.19 or higher.

你可以使用以下命令进行安装：

::: code-group

```sh [Binary]
$ https://github.com/zan8in/afrog/releases
```

```sh [Github]
$ git clone https://github.com/zan8in/afrog.git
$ cd afrog
$ go run cmd/afrog/main.go
$ ./afrog -h
```

```sh [Go]
$ go install -v https://github.com/zan8in/afrog/cmd/afrog@latest
```

:::

## 运行 afrog

默认情况下，afrog会扫描所有内置的 PoC，如果发现任何漏洞，它会自动创建一个以扫描日期为文件名的 HTML 报告。

```sh
afrog -t https://example.com
```

::: details 运行 afrog 时出现警告
如果你看到以下错误消息：
```
[ERR] ceye reverse service not set: /home/afrog/.config/afrog/afrog-config.yaml
```
这意味着你需要修改[配置文件](reverse.md#configuration)
:::

要执行自定义的 PoC 目录，可以使用以下命令：

```sh
afrog -t https://example.com -P mypocs/
```

你也可以同时扫描多个 URL。

```sh
afrog -T urls.txt
```

要了解更多有关如何使用该工具的信息，请参阅使用文档 ([Usage](filters.md#filters))。.