# Targets

## Target

To specify the scanning target, use the `-target` or `-t` command. The input can be a complete URL (e.g., `http(s)://example.com`) or a domain name or IP address (e.g., `192.168.66.100`, `example.com`). If the target is provided in the latter format, afrog will automatically detect the HTTP(S) protocol and fill in the correct protocol before initiating the PoC scan.

```sh
afrog -t https://example.com
```

## Target File

To specify a scan file, use the `-target-file` or `-T` command. Each line in the file should contain a scan target, which can be a complete URL (e.g., `http(s)://example.com`) or a domain/IP address (e.g., `192.168.66.100`, `example.com`). For domain/IP targets, afrog automatically detects the HTTP(S) protocol and fills in the correct protocol before conducting the PoC scan.

```sh
afrog -T urls.txt
```

urls.txt

```sh
https://example.com
http://hackerone.com
...
```