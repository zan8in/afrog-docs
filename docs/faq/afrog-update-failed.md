# Afrog Update failed?

If the command 'afrog.exe -update' is executed, the following error may occur:

::: danger Error Info
[FTL] could not install latest release: looking up path of "afrog.exe": exec: "afrog.exe": cannot run executable found relative to current directory
:::

**How to solve the above problems?**

::: tip answer
Need to add afrog.exe to the environment variable.
:::
To add afrog.exe to the environment variable in **Windows**, you can follow these steps:

```
1. Right-click on "This PC" and select "Properties".
2. In the left pane, select "Advanced system settings".
3. Click on the "Environment Variables" button.
4. Under "System Variables", find "Path" and double-click to edit.
5. Click the "New" button and enter the path where the afrog.exe file is located.
6. Click the "OK" button to save the changes.
7. Close all open windows, reopen the command prompt, and type the "afrog" command to test if the addition was successful.
```

To add afrog to the environment variable in **Linux/macOS**, you can follow these steps:

```
1. Open the Terminal application.
2. Enter the command: sudo nano /etc/paths.
3. Add the following line to the end of the file: /path/to/afrog, where /path/to/afrog is the path to the afrog file.
4. Save the file and exit the editor.
5. Enter the command: source /etc/paths to update the configuration.
6. Enter the command afrog to test if the addition was successful.
7. Note that if you are using a different shell, such as bash or zsh, you may need to edit the corresponding configuration file (e.g., ~/.bashrc  or ~/.zshrc) and add the appropriate path.
```