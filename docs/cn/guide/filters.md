# 过滤器

Afrog 支持两种基本的过滤器用于自定义执行。

1. Keywords (-s)

    基于 PoCs 中可用的 `id` 和 `info.name` 字段进行过滤。

2. Severity (-S)

    基于 PoCs 中的 `severity` 字段进行过滤。


## Keyword Filtering

使用命令 `-s 关键词` 对所有 PoCs 执行模糊搜索，并扫描搜索结果。可以使用多个关键词，用逗号分隔。例如：`-s weblogic,jboss`。

```sh
afrog -t https://example.com -s weblogic,jboss
```

## Severity Filtering
使用命令 `-S 关键词` 基于漏洞的严重程度级别进行扫描。严重程度级别包括：`info`、`low`、`medium`、`high` 和 `critical`。例如，要仅扫描高和危急级别的漏洞，请使用命令 `-S high,critical`。

```sh
afrog -t https://example.com -S high,critical
```