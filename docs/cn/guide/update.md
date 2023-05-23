# Update

Afrog 同时提供版本升级和 PoC 库升级功能。 从 `2.3.0` 版本开始，PoC 升级功能默认开启。 如果您想禁用此功能，请使用命令 `disable-update-check`。

## Update afrog engine

将 afrog 引擎更新到最新发布的版本。 默认不启用。

以下是升级 afrog 命令的示例：

```sh
afrog -update
```

## Update PoC library

::: warning
**2.5.1之后弃用**
:::

将 `afrog-pocs` 更新到最新发布的版本。默认为自动更新。

## Disable Update Check

禁用自动 `afrog-pocs` 更新检查。

```sh
afrog -t https://example.com -duc
```