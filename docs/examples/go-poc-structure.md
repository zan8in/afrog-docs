# Go PoC Structure

## Basic structure

Basic structure, mainly includes the following contents:

```sh
id: shiro-key-detect

info:
  name: Shiro key detection
  author: zan8in
  severity: critical
  verified: false

rules:
  r0:
    request:
      type: go
      data: shiro_key_detect
    expression: response.raw.bcontains(b'ShiroKey')
expression: r0()
```