# Optimzations

## Monitor Targets

从版本2.3.0起，afrog引入了`monitor-target`功能，旨在监视无法访问的URL。一旦达到设定的[阈值](#max-host-errors)，该URL将被加入黑名单，以确保未来不再进行PoCs检测。通过使用这个功能，afrog扫描速度得到了显著提高，并解决了长时间卡进度或假性卡死问题。

默认情况下，`monitor-target`功能是禁用的。如果需要启用该功能，请使用命令`-monitor-target` 或 `-mt`。

```sh
afrog -t https://example.com -dmt
```

## Max Host Errors

这个设定用于限制在启用`monitor-target`功能时的最大目标错误阈值。请注意，只有在启用该功能后才会生效。默认为 3 。

```sh
afrog -t https://example.com -mhe 1
```

## Retries

HTTP 请求失败时的重试次数，默认为 1 次。

```sh
afrog -t https://example.com -retries 3
```

## Timeout

http 请求超时前等待的时间（以秒为单位），默认为 10 秒。

```sh
afrog -t https://example.com -timeout 30
```

## Silent

`Silent` 功能在扫描过程中仅输出漏洞结果至 cmd 控制台，而不显示扫描进度等详情信息。该功能默认为禁用状态。

```sh
afrog -t https://example.com -silent
```