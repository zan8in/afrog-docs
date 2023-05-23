# Tcp PoC Structure

## Basic structure

Basic structure, mainly includes the following contents:

```sh
id: mysql-detect

info:
  name: MySQL detected
  author: zan8in
  severity: info
  verified: false

set:
  hostname: request.url.host
  host: request.url.domain
rules:
  r0:
    request:
      type: tcp
      host: "{{hostname}}"
      data: "\n"
      read-size: 1024
    expression: response.raw.bcontains(b'No such') && response.raw.bcontains(b'lstat() failed')
  r1:
    request:
      type: tcp
      host: "{{host}}:3306"
      data: "\n"
      read-size: 1024
    expression: response.raw.bcontains(b'No such') && response.raw.bcontains(b'lstat() failed')
expression: r0() || r1()
```