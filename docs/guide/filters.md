# Filters

Afrog supports two basic filters for custom execution.

1. Keywords (-s)

    Filter based on `id` and `info.name` field available in the PoCs

2. Severity (-S)

    Filter based on `severity` field available in the PoCs


## Keyword Filtering

Use the command `-s keyword` to perform a fuzzy search on all PoCs and scan the search results. Multiple keywords can be used, separated by commas. For example: `-s weblogic,jboss`.

```sh
afrog -t https://example.com -s weblogic,jboss
```

## Severity Filtering
Use the command `-S keyword` to scan vulnerabilities based on their severity level. Severity levels include: `info`, `low`, `medium`, `high`, and `critical`. For example, to only scan high and critical vulnerabilities, use the command `-S high,critical`.

```sh
afrog -t https://example.com -S high,critical
```