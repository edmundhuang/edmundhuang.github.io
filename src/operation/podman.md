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