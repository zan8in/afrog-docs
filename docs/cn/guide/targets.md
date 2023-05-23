# Targets

## Target

使用 `-target` 或 `-t` 命令来指定扫描目标。输入的内容可以是完整的 URL（例如：`http(s)://example.com`），也可以是域名或 IP 地址（例如：`192.168.66.100`、`example.com`）。如果输入的目标是后者，afrog 将自动检测 http(s) 协议并填充正确的协议，然后进行 PoC 扫描。

```sh
afrog -t https://example.com
```

## Target File

使用 `-target-file` 或 `-T` 命令来指定扫描文件。文件中的每行应包含一个扫描目标，可以是完整的 URL（例如：`http(s)://example.com`）或域名/IP地址（例如：`192.168.66.100`、`example.com`）。对于后者的目标，afrog 会自动检测 http(s) 协议并填充正确的协议，然后执行 PoC 扫描。

```sh
afrog -T urls.txt
```

urls.txt

```sh
https://example.com
http://hackerone.com
...
```
