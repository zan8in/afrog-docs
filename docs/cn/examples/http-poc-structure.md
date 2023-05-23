# afrog PoC 主要结构

## 基本结构
afrog PoC 内容分为三个主要部分，即 `id`、`info` 和 `rules`。

```sh
id: xxx

info:
    xxxx

rules:
    xxxx
```

## Id
`id` 是默认与 PoC 文件名相同的唯一标识，非常重要。确保 `id` 的命名简洁准确。官方建议使用 CVE、CNVD 命名规则，如果没有漏洞编号，建议采用 `产品名称-产品版本号-引发漏洞关键字-漏洞名称.yaml` 的命名规范。
例如，`kingsoft-v8-get-file-content-file-read.yaml` 的命名可以分解如下：

```sh
id: kingsoft-v8-get-file-content-file-read
```

1. `kingsoft` 表示产品名称为 `金山`。
2. `v8` 表示产品版本为 `V8 终端安全系统`。
3. `get-file-content` 表示引发漏洞的关键文件名为 `get_file_content.php`。
4. `file-read` 表示漏洞名称为 `任意文件读取漏洞`。

## Info

`info` 是 PoC 的基本信息部分，主要包含以下内容：

```sh
id: CVE-2001-1473

info:
  name: Deprecated SSHv1 Protocol Detection
  author: demo
  severity: high
  verified: true
  description: SSHv1 is deprecated and has known cryptographic issues.
  affected: ssh-1
  solutions: Upgrade to SSH-2 or later.
  reference:
    - https://www.kb.cert.org/vuls/id/684820
    - https://nvd.nist.gov/vuln/detail/CVE-2001-1473
  tags: cve,cve2001,network,ssh,openssh
  created: 2022/01/21
```

::: warning
**`name`**、**`author`**、**`severity`** 为必填项
:::

1. `name`：漏洞名称，与 `id` 不同，它没有唯一性限制，命名规则也不严格，可以使用英文、中文或其他任何文字。它的主要作用是补充 `id`，用简洁的语言概括 PoC 的漏洞。

2. `author`：编写 PoC 的作者。

3. `severity`：漏洞安全等级，按照危害程度从低到高分为 `info`、`low`、`medium`、`high`、`critical` 五个等级。

4. `verified`：是否验证，设为 `true` 表示该 PoC 已经通过验证。

5. `description`：漏洞描述，详细说明漏洞的特点和影响。

6. `affected`：影响范围，通常记录该产品存在漏洞的版本号。

7. `solutions`：修复建议和解决方案。

8. `reference`：引用和参考文章的链接，注意该项需要以数组形式填写。

9. `tags`：关键词，用于检索和分类。

10. `created`：创建时间，用于记录该 PoC 的创建日期。


## Rules

基本结构，主要包含以下内容：

```sh
id: my-poc

info:
  name: My PoC demo
  author: zan8in
  severity: critical

rules:
  r0:
    request:
      method: GET
      path: /vulnerability-path
    expression: response.status == 200 && response.body.bcontains(b'Vulnerability')
expression: r0()
```