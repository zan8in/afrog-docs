# Http PoC Structure

## Basic structure
The afrog PoC content consists of three main parts: `id`, `info`, and `rules`.

```sh
id: xxx

info:
    xxxx

rules:
    xxxx
```

## Id
The `id` serves as a unique identifier for the PoC, and it is recommended to keep the `id` concise and accurate. The official recommendation is to use CVE or CNVD naming conventions. If there is no vulnerability identifier available, it is suggested to follow the naming convention of `Product Name`-`Product Version`-`Triggering Vulnerability Keyword`-`Vulnerability Name.yaml`. 

For example, the name `kingsoft-v8-get-file-content-file-read.yaml` can be broken down as follows:

```sh
id: kingsoft-v8-get-file-content-file-read
```

1. `kingsoft` represents the product name, which is "金山" (Kingsoft).
2. `v8` represents the product version, which is "V8 终端安全系统" (V8 Terminal Security System).
3. `get-file-content` represents the key file name triggering the vulnerability, which is `get_file_content.php`.
4. `file-read` represents the vulnerability name, which is "任意文件读取漏洞" (Arbitrary File Read Vulnerability).

## Info

`info` is the basic information section of the PoC, which includes the following main components:

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
`name`, `author`, and `severity` are mandatory fields.
:::

1. `name`: Vulnerability name. Unlike `id`, it does not have uniqueness restrictions, and the naming rules are not strict. It can be in English, Chinese, or any other language. Its main purpose is to provide a concise description of the vulnerability addressed by the PoC.

2. `author`: Author of the PoC.

3. `severity`: Vulnerability severity level, ranging from `info`, `low`, `medium`, `high`, to `critical` in ascending order of severity.

4. `verified`: Verification status. Setting it to `true` indicates that the PoC has been verified.

5. `description`: Detailed description of the vulnerability, highlighting its characteristics and impact.

6. `affected`: Affected scope, typically including the versions of the product that are vulnerable.

7. `solutions`: Recommendations and solutions for fixing the vulnerability.

8. `reference`: References and links to related articles. Note that this field should be filled in as an array.

9. `tags`: Keywords used for retrieval and categorization.

10. `created`: Creation time, documenting the date when the PoC was created.

## Rules

Basic structure, mainly includes the following contents:

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