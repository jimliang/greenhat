# greenhat

`greenhat` 是一个通过在过去的 n 天内提交一些信息来快速的装饰你的 GitHub contribution calendar 的一个小工具。想法源自 [https://github.com/4148/greenhat](https://github.com/4148/greenhat), 此为 Node 的实现版本，并加入了系统环境变量之中。它使用了 `GIT_AUTHOR_DATE` 和 `GIT_COMMITTER_DATE` 这两个环境变量来创造出在过去的提交记录。需要警告的是，`greenhat` 会破坏掉你的仓库的提交记录。

#### 安装

确保在安装之前你已经安装好了 `node` `npm` 环境。

```
$ npm install -g greenhat
```

#### 使用

确保你的远程仓库地址已经设置过，并且也设置过 SSH 部署公钥。在目标仓库中，你可以通过指定一个整数 n 来表示从 n 天前开始创造提交记录，例如:

```
$ greenhat <n> 
```

or:

```
$ greenhat -d <n> 
```

如果你设置的时间太长，那通常需要花费一段时间才能完成所有的提交。如果 `greenhat` 在完成任务前终止了，你也可以通过指定一个特定格式的日期来从某天开始继续进行提交。就像是这样:

```
$ greenhat -d <n> -D <date> 
```

`n` 表示你想创造提交记录的天数。 `date` 是一个 `yyyy-mm-dd` 格式的字符串。(e.g. 2015-11-13)

如果你使用了 `-l, --log` 参数，程序将会在终端中打印出所有的执行日志。
