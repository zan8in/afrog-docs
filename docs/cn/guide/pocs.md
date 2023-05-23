# PoCs

afrog 默认在二进制程序中内置了所有的 PoC，无需指定 PoC 文件或路径。如何你想调用或调试本地的 PoC，请使用 `-poc-file` 或 `-P`。如果你想查看 afrog 中包含的所有 PoC，请使用 `poc-list` 或 `-pl` 命令。如果你想查看特定 PoC 的内容，请使用 `poc-detail` 或 `-pd` 命令。

## PoC File

通过使用 `-poc-file` 或 `-P` 命令来指定本地的 PoC 文件或文件夹。一般情况下，`-P` 命令用于本地 PoC 的调试。举个例子，假设我正在 `d:/mypocs` 文件夹中编写一个名为 `phpinfo-detect.yaml` 的 PoC，可以通过以下命令进行操作：`afrog -t https://example.com -P d:/mypocs/phpinfo-detect.yaml`。当然，你也可以指定一个文件夹：`afrog -t https://example.com -P d:/mypocs/`，这样会扫描 `mypocs` 文件夹中所有扩展名为 `yaml` 或 `yml` 的文件。

```sh
afrog -t https://example.com -P ./mypocs
afrog -t https://example.com -P ./mypocs/phpinfo-detect.yaml
```

## PoC List

通过使用 `-poc-list` 或 `-pl` 命令，查看 afrog 中包含的所有 PoC。该命令将在控制台打印一个 PoC 列表，其中显示每个 PoC 的 `id`、`info.name`、`info.severity` 和 `info.author` 信息。若需要深入查看特定 PoC 的内容，请使用 `-poc-detail` 或 `-pd` 命令，后面跟上所需 PoC 的 `id` 名称。

```sh
afrog -poc-list
afrog -pl
```

示例打印如下所示：

```sh
[CVE-2013-1965][Apache Struts2 S2-012 RCE][critical] author:xx
[CVE-2013-2251][Apache Struts 2 - DefaultActionMapper Prefixes OGNL Code Execution (S2-016)][critical] author:xx
[CVE-2014-3120][ElasticSearch v1.1.1/1.2 RCE][critical] author:xx
[CVE-2014-3704][Drupal SQL Injection][high] author:xx
[CVE-2014-6271][ShellShock - Remote Code Execution][critical] author:xx
[CVE-2015-1427][ElasticSearch - Remote Code Execution][critical] author:xx
[CVE-2015-3337][Elasticsearch CVE-2015-3337][medium] author:xx
[CVE-2015-5531][Elasticsearch CVE-2015-5531][medium] author:xx
[CVE-2015-7297][Joomla Core SQL Injection][high] author:xx
[CVE-2015-8399][Atlassian Confluence configuration files read][medium] author:xx
[CVE-2016-10134][Zabbix CVE-2016-10134][critical] author:xx
[CVE-2016-3081][Apache S2-032 Struts RCE][high] author:xx
...
```

## PoC Detail

通过使用 `-poc-detail` 或 `-pd` 命令，查看特定 PoC 的内容。该命令将在控制台打印一个 PoC 详细内容。

```sh
afrog -poc-detail
afrog -pd
```

示例打印如下所示：

```sh
id: CVE-2015-8399

info:
  name: Atlassian Confluence configuration files read
  author: whynot(https://github.com/notwhy)
  severity: medium
  verified: false

rules:
  r0
    request:
      method: GET
      path: /spaces/viewdefaultdecorator.action?decoratorName
    expression: response.status == 200 && response.body.bcontains(b"confluence-init.properties") && response.body.bcontains(b"View Default Decorator")
expression: r0()
```