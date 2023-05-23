# Update

Afrog provides both version upgrade and PoC library upgrade functionalities. Starting from version `2.3.0`, the PoC upgrade feature is enabled by default. If you wish to disable this feature, please use the command `disable-update-check`.

## Update afrog engine

Update afrog engine to the latest released version. The default is no automatic update.

Here is an example update afrog command:

```sh
afrog -un
```

## Update PoC library

::: warning
**Deprecated since version 2.5.1.**
:::

Update afrog-pocs to latest released version. Automatic update by default.

```sh
afrog -up
```

## Disable Update Check

Disable automatic `afrog-pocs` update check. 

```sh
afrog -t https://example.com -duc
```