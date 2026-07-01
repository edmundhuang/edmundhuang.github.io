# Windows 运维

本文记录常见的 Windows 环境运维操作与排查要点。

## 常见场景

- 主机基础信息核对
- 设置环境变量
- 网络连通性与 DNS 解析检查
- 服务与进程状态排查
- 事件日志快速定位

## 基础命令

### 系统信息

```powershell
systeminfo
Get-ComputerInfo
```

### 设置环境变量
**Permanent (System level - Admin required)**

``` cms
setx DOTNET_ENVIRONMENT "Development" /M
```
Permanent (System level - Admin required)


### 网络检查

```powershell
ipconfig /all
ping 8.8.8.8
nslookup github.com
Test-NetConnection github.com -Port 443
```

### 服务与进程

```powershell
Get-Service | Sort-Object Status, Name
Get-Process | Sort-Object CPU -Descending | Select-Object -First 20
Restart-Service -Name spooler
```

### 事件日志

```powershell
Get-EventLog -LogName System -Newest 50
Get-WinEvent -LogName Application -MaxEvents 50
```

## 排查建议

1. 先确认网络与 DNS，再排查应用层。
2. 先看系统与应用日志，再处理服务重启。
3. 批量变更前先做快照或备份，保留回滚方案。
