# Output

## Output

Optional command: `-o`, writes the vulnerability scan results to the specified HTML file in real time. If the filename is not specified, a HTML file will be automatically created in the ./reports directory.

```sh
afrog -t https://example.com -o result.html
```

## Json Output

Optional command: `-json` `-j`, Save the scan results to a JSON file. The JSON file includes the following contents by default: `target`, `fulltarget`, `id`, and `info`. The info field includes the following sub-fields: `name`, `author`, `severity`, `description`, and `reference`. If you want to save both `request` and `response` contents, please use the [-json-all](#jsonall) command parameter.

```sh
afrog  -t https://example.com -json result.json
afrog  -t https://example.com -j result.json
```

::: warning
The content of the JSON file is updated in real time. However, there is an important note to keep in mind: before the scan is completed, if developers want to parse the file content, they need to add a '`]`' symbol to the end of the file by themselves, otherwise it will cause parsing errors. Of course, if you wait for the scan to complete before parsing the file, this issue will not occur.
:::

## JsonAll

Optional command: `-json-all` `-ja`, The only difference between the `-json-all` and `-json` commands is that `-json-all` writes all vulnerability results, including `request` and `response`, to a JSON file.

```sh
afrog -t https://example.com -json-all result.json
afrog -t https://example.com -ja result.json
```

## Disable Output Html

The "disable-output-html" command can be used to prevent the automatic generation of an HTML report, and its priority is higher than the "-o" command.

```sh
afrog -t https://example.com -disable-output-html
afrog -t https://example.com -doh
```