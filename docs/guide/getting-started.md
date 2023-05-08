# Getting Started

This page demonstrates some of the built-in markdown extensions provided by VitePress.

## Installation

### Prerequisites

- [Go](https://go.dev/) version 1.19 or higher.

you can install it with:

::: code-group

```sh [Binary]
$ https://github.com/zan8in/afrog/releases
```

```sh [Github]
$ git clone https://github.com/zan8in/afrog.git
$ cd afrog
$ go run cmd/afrog/main.go
$ ./afrog -h
```

```sh [Go]
$ go install -v https://github.com/zan8in/afrog/cmd/afrog@latest
```

:::

## Running afrog

By default, afrog scans all built-in PoCs, and if it finds any vulnerabilities, it automatically creates an HTML report with the date of the scan as the filename.

```sh
afrog -t https://example.com
```

::: details Warning occurs when running afrog
If you see an error message saying:
```
[ERR] ceye reverse service not set: /home/afrog/.config/afrog/afrog-config.yaml
```
it means you need to modify the [configuration file](getting-started.md#configuration-file).
:::

Use the command `-s keyword` to perform a fuzzy search on all PoCs and scan the search results. Multiple keywords can be used, separated by commas. For example: `-s weblogic,jboss`.

```sh
afrog -t https://example.com -s weblogic,jboss
```

Use the command `-S keyword` to scan vulnerabilities based on their severity level. Severity levels include: `info`, `low`, `medium`, `high`, and `critical`. For example, to only scan high and critical vulnerabilities, use the command `-S high,critical`.

```sh
afrog -t https://example.com -S high,critical
```

You can scan multiple URLs at the same time as well.

```sh
afrog -T urls.txt
```

## Configuration file

The first time you start afrog, it will automatically create a configuration file called `afrog-config.yaml`, which will be saved in the current user directory under `$HOME/.config/afrog/afrog-config.yaml`.

Here is an example config file:

```yaml
reverse:
  ceye:
    api-key: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    domain: "xxxxxx.ceye.io"
```

`reverse` is a reverse connection platform used to verify command execution vulnerabilities that cannot be echoed back. Currently, only ceye can be used for verification. To obtain ceye, follow these steps:

- Go to the ceye.io website and register an account.
- Log in and go to the personal settings page.
- Copy the `domain` and `api-key` and correctly configure them in the `afrog-config.yaml` file.