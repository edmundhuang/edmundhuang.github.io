# Podman 常用命令

| Command | Description |
| - | - |
|podman images | Lists all the container images stored on your local machine. |
|podman rm [container] |Removes one or more stopped containers. |
| podman rmi [image] | Removes one or more container images from local storage. |
| podman rmi -f [image] | Forcibly removes images, even if they are in use by containers. |
| podman ps | Lists all currently running containers. |
| podman ps -a | Shows all containers (both running and stopped). |
| podman run [image] | Creates and starts a new container from an image. |
| Podman stop [container] | Stops one or more running containers. |

## 进入容器并获取交互式 Shell
``` bash
podman exec -it <容器名称或ID> /bin/bash
```

命令解析：

-it : 这是两个重要选项的组合。

-i (--interactive): 保持标准输入（STDIN）打开，以便你可以与容器内的 Shell 进行交互 。

-t (--tty): 分配一个伪终端（pseudo-TTY），让你获得一个完整的命令行界面。这两个参数通常一起使用 。

<容器名称或ID>: 指定要进入的目标容器。你可以通过 podman ps 命令查看所有运行中容器的名称和ID。

/bin/bash: 这是你想在容器内部启动的命令，即 bash Shell。如果容器镜像比较精简，没有安装 bash，你可以尝试使用 /bin/sh 。

<details>
<summary>
操作示例：在容器内查看文件  

当你成功进入容器后，就可以执行常规的Linux命令了。
</summary>  
bash  

[root@localhost ~]# podman exec -it my_webserver /bin/bash

root@container-id:/# ls -la  

root@container-id:/# cat /etc/os-release

root@container-id:/# pwd

root@container-id:/# exit  # 输入exit退出容器

</details>


