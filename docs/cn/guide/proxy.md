# Proxy

Afrog 代理支持 http(s) 和 socks5 协议，并可以设置一个或多个代理地址。如果需要设置多个代理地址，则可以通过读取文件来实现。


## 配置 http 代理

```sh
afrog -t https://example.com -proxy http://127.0.0.1:1082
```

## 配置 socks5 代理

```sh
afrog -t https://example.com -proxy socks5://127.0.0.1:1081
```

## 配置多个代理

```sh
afrog -t https://example.com -proxy proxy_file.txt
```

以下是 `proxy_file.txt` 文件示例：

```sh
http://127.0.0.1:1082
socks5://127.0.0.1:1081
```

