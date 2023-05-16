# Output

## Output

可选命令：`-o`，将漏洞扫描结果实时写入指定的 HTML 文件。如果未指定文件名，则默认在 ./reports 目录下创建一个 HTML 文件。

```sh
afrog -t https://example.com -o result.html
```

## Json Output

可选命令：`-json` `-j`，将扫描结果保存到 JSON 文件中，JSON 文件默认包含以下内容：`target`、`fulltarget`、`id`和`info`，其中`info`包含以下字段：`name`、`author`、`severity`、`description`和`reference`。如果想要同时保存 `request` 和 `response` 内容，请使用命令参数 `-json-all`。


```sh
afrog  -t https://example.com -json result.json
afrog  -t https://example.com -j result.json
```

::: warning
JSON 文件结果内容是实时更新的，但有一个重要的注意点：在扫描未完成之前，如果想要解析文件内容，开发者需要自己在文件末尾加上一个 **]** 符号，否则会导致解析出错。当然，如果等待扫描完成再解析文件，就不会出现这个问题。
:::

## JsonAll

可选命令：`-json-all` `-ja`，`-json-all` 和 `-json` 命令的唯一区别是，`-json-all` 会将所有漏洞结果，包括 `request` 和 `response`，写入到 JSON 文件中。

```sh
afrog -t https://example.com -json-all result.json
afrog -t https://example.com -ja result.json
```