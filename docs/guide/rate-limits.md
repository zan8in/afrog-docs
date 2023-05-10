# Rate Limits

Afrog provides two rate limiting commands, one for executing PoCs in parallel, and the other for limiting the number of requests per second. The following are examples of each command along with their description.

1. Rate-Limit (-rl)

    Control the total number of request to send per seconds

2. Concurrency (-c)

    Control the number of PoCs to process in parallel

::: tip
Please note that the rate-limit flag should be given higher priority than the Concurrency flag, as the former determines the maximum number of requests to be sent per second, regardless of any changes made to the value of the c flag.
:::


## Rate Limit

The rate limit feature controls the overall number of requests sent per second, with a default value set to **150**.

```sh
afrog -t https://example.com -rl 200
```

## Concurrency

You can use this command to control the maximum number of PoCs processed in parallel, which has a default value of **25**.

```sh
afrog -t https://example.com -c 600
```