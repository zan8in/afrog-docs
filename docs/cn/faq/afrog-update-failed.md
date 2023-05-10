# Afrog Update failed?

If the command 'afrog.exe -update' is executed, the following error may occur:

::: danger Error Info
[FTL] could not install latest release: looking up path of "afrog.exe": exec: "afrog.exe": cannot run executable found relative to current directory
:::

**How to solve the above problems?**

Need to add afrog.exe to the environment variable.

将 afrog.exe 加入 **Windows** 系统的环境变量可以通过以下步骤完成：

右键单击“此电脑”，选择“属性”。
在左侧面板中，选择“高级系统设置”。
点击“环境变量”按钮。
在“系统变量”下找到“Path”，双击编辑。
点击“新建”按钮，并输入 afrog.exe 文件所在的路径。
点击“确定”按钮保存更改。
关闭所有打开的窗口，重新打开命令行界面，输入“afrog”命令测试是否添加成功。

将 afrog 加入 **Linux** 系统的环境变量可以通过以下步骤完成：

打开终端窗口。
输入以下命令：sudo nano /etc/profile。
在文件的最后添加以下内容：export PATH=$PATH:/path/to/afrog，其中 /path/to/afrog 为 afrog 文件所在的路径。
保存文件并关闭编辑器。
输入以下命令更新配置：source /etc/profile。
输入 afrog 命令测试是否添加成功。
请注意，如果您使用的是不同的 shell，例如 bash 或 zsh，您可能需要编辑对应的配置文件（例如 ~/.bashrc 或 ~/.zshrc）并添加相应的路径。