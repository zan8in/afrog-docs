# Proxy

Afrog Proxy supports both HTTP(S) and SOCKS5 protocols and allows for the configuration of one or multiple proxy addresses. If multiple proxy addresses are needed, they can be configured by reading from a file.

## Http proxy

```sh
afrog -t https://example.com -proxy http://127.0.0.1:1082
```

## Socks proxy

```sh
afrog -t https://example.com -proxy socks5://127.0.0.1:1081
```

## Multiple proxies

```sh
afrog -t https://example.com -proxy proxy_file.txt
```

Here is an example `proxy_file.txt` file:

```sh
http://127.0.0.1:1082
socks5://127.0.0.1:1081
```
