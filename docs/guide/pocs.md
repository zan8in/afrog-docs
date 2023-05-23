# PoCs

afrog automatically includes all PoCs within the binary program, eliminating the need to specify PoC files or paths. If you want to invoke or debug local PoCs, you can utilize the `-poc-file` or `-P` commands. To view the complete list of PoCs included in afrog, simply use the `poc-list` or `-pl` command. If you desire to examine the details of a specific PoC, employ the `poc-detail` or `-pd` command.


## PoC File

You can specify a local PoC file or folder using the `-poc-file` or `-P` command. Typically, the `-P` command is used for debugging local PoCs. For instance, suppose I'm working on a PoC called `phpinfo-detect.yaml` in the `d:/mypocs` folder. You can execute the following command: `afrog -t https://example.com -P d:/mypocs/phpinfo-detect.yaml`. Additionally, you can specify a folder: `afrog -t https://example.com -P d:/mypocs/`, which will scan all files with the `.yaml` or `.yml` extension in the `mypocs` folder.

```sh
afrog -t https://example.com -P ./mypocs
afrog -t https://example.com -P ./mypocs/phpinfo-detect.yaml
```

## PoC List

To view all the PoCs included in afrog, use the `-poc-list` or `-pl` command. This command will print a PoC list on the console, displaying the `id`, `info.name`, `info.severity`, and `info.author` information for each PoC. If you want to delve into the details of a specific PoC, use the `-poc-detail` or `-pd` command, followed by the desired PoC's `id` name.

```sh
afrog -poc-list
afrog -pl
```

The example output is displayed as follows:

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

To view the specific content of a PoC, use the -poc-detail or -pd command. This command will print the detailed content of the PoC on the console.

```sh
afrog -poc-detail CVE-2015-8399
afrog -pd CVE-2015-8399
```

The example output is displayed as follows:

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