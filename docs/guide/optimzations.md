# Optimzations

## Monitor Targets

Afrog has introduced the `monitor-target` function since version 2.3.0, which is designed to monitor inaccessible URLs. Once the specified [threshold](#max-host-errors) is reached, the URL will be added to a blacklist to prevent any further PoCs detection attempts. This feature significantly enhances afrog’s scanning speed and effectively solves the problem of prolonged progress times or false-positive hang-ups.

By default, the `monitor-target` function is disabled. To enable this feature, please use the command `-monitor-target` 或 `-mt`.

```sh
afrog -t https://example.com -dmt
```

## Max Host Errors

This setting is used to limit the maximum target error threshold when the `monitor target` function is enabled. Note that it only takes effect after enabling this function. Default value is 3

```sh
afrog -t https://example.com -mhe 1
```

## Retries

The number of retries for failed HTTP requests. Defaults to 1 times

```sh
afrog -t https://example.com -retries 3
```

## Timeout

This attribute specifies the duration (in seconds) for waiting time before the HTTP request times out. Defaults to 10 seconds

```sh
afrog -t https://example.com -timeout 30
```

## Silent

During the scanning process, the `Silent` feature only outputs vulnerability results to the cmd console without displaying unnecessary details like the scanning progress. By default, this feature is turned off.

```sh
afrog -t https://example.com -silent
```