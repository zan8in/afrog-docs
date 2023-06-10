## Rerverse

Here is an example config file:

```yaml
reverse:
  ceye:
    api-key: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    domain: "xxxxxx.ceye.io"
  jndi:
    jndi_address: "x.x.x.x"
    ldap_port: "1389"
    api_port: "3456"
```

`reverse` is a reverse connection platform used to verify command execution vulnerabilities that cannot be echoed back. 

### Ceye Configuration
To obtain ceye, follow these steps:

- Go to the [ceye.io](http://ceye.io/) website and register an account.
- Log in and go to the personal settings page.
- Copy the `domain` and `api-key` and correctly configure them in the `afrog-config.yaml` file.

### JNDI Configuration

The JNDI vulnerability refers to security vulnerabilities that exploit the JNDI (Java Naming and Directory Interface) functionality in Java applications. This type of vulnerability can lead to remote code execution or other security issues.

To obtain JNDI, follow these steps:

- To obtain the source code and compile the JAR file, please visit the official website [github.com/r00tSe7en/JNDIMonitor](https://github.com/r00tSe7en/JNDIMonitor). Alternatively, you can go to the official afrog website [afrog/helper/jndi](https://github.com/zan8in/afrog/tree/main/helper/jndi) to download the pre-compiled JAR file
- Upload the `JNDIMonitor-2.0.1-SNAPSHOT.jar` file to the server (such as a VPS server), and execute the following startup command:

```sh
java -jar ./JNDIMonitor-2.0.1-SNAPSHOT.jar -i 0.0.0.0 -l 1389 -p 3456
```

Below are example methods for writing POCs. [Please click to view](/examples/jndi-demo.html#jndi-demo).