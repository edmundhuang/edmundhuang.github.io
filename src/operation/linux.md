# Linux command 

## 检查服务器
1. Check process with filter with filtertext
```bash
ps -aux | grep filtertext
```

2. Print Working Directory（打印工作目录）
``` bash
pwd
```

3. Look for common service ports  
``` bash
ss -tlnp | grep -E ':(80|443|22|25|3306|5432|27017|6379|8080)'
netstat -tulpn 2>/dev/null | grep LISTEN
```

4. Quick heuristic approach:

``` bash
# Run this to get a snapshot
echo "=== LOAD ===" && uptime && \
echo -e "\n=== TOP 5 CPU PROCESSES ===" && ps aux --sort=-%cpu | head -6 && \
echo -e "\n=== LISTENING PORTS ===" && ss -tlnp | tail -n +2 && \
echo -e "\n=== LIKELY SERVICES ===" && systemctl list-units --type=service --state=running | grep -E '(web|db|app|proxy|docker|kube|nginx|apache|mysql|postgres|redis)'
```

<details>
<summary>Common mock response</summary>  
 === LOAD ===  

 11:23:45 up 57 days, 23 min,  1 user,  load average: 0.13, 0.23, 0.20  

=== TOP 5 CPU PROCESSES ===

USER         PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
postgres 3200956  5.2 18.4 9444872 6021656 ?     Ss   09:31   5:56 postgres: s_rpt_app ewallet_reporting 10.51.121.102(63056) idle

root     3221894  4.2  0.4 630008 159036 ?       Ssl  11:21   0:05 /usr/libexec/packagekitd

postgres 3201517  0.5 22.4 9533624 7328756 ?     Ss   09:34   0:38 postgres: s_rpt_app ewallet_reporting 10.51.121.102(63119) idle

postgres  145481  0.3  0.0 9413412 14464 ?       Ss   Mar27 208:08 /usr/pgsql-17/bin/postgres

root        1111  0.1  0.0 458568  8960 ?        Ssl  Mar17 131:11 /usr/bin/vmtoolsd


=== LISTENING PORTS ===  

LISTEN 0      4096       127.0.0.1:631       0.0.0.0:*    users:(("cupsd",pid=1180,fd=7))

LISTEN 0      4096         0.0.0.0:5432      0.0.0.0:*    users:(("postgres",pid=145481,fd=7))

LISTEN 0      128          0.0.0.0:22        0.0.0.0:*    users:(("sshd",pid=1192,fd=3))

LISTEN 0      4096            [::]:5432         [::]:*    users:(("postgres",pid=145481,fd=8))

LISTEN 0      4096           [::1]:631          [::]:*    users:(("cupsd",pid=1180,fd=6))


LISTEN 0      128             [::]:22           [::]:*    users:(("sshd",pid=1192,fd=4))

=== LIKELY SERVICES ===  
  dbus-broker.service           loaded active running D-Bus System Message Bus

</details>