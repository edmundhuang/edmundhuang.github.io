# 证书管理

本页面记录常见的证书查看、排查和更新命令，适用于 HTTPS、TLS、客户端证书和本地证书库问题。

## 常见场景

- 检查证书是否过期
- 查看证书颁发者、主题和指纹
- 验证证书链是否完整
- 在 Windows 或 Linux 上定位证书存储位置

## Linux / OpenSSL

查看证书信息：

```bash
openssl x509 -in server.crt -text -noout
```

查看远程站点证书：

```bash
openssl s_client -connect example.com:443 -servername example.com </dev/null
```

查看证书到期时间：

```bash
openssl x509 -in server.crt -noout -dates
```

查看证书指纹：

```bash
openssl x509 -in server.crt -noout -fingerprint -sha256
```

查看证书链
```bash
openssl s_client -starttls postgres -connect servername:5432  -showcerts
```

```
CONNECTED(000001E4)  
---  
no peer certificate available
---
No client certificate CA names sent
---
SSL handshake has read 1 bytes and written 8 bytes
Verification: OK
---
New, (NONE), Cipher is (NONE)
This TLS version forbids renegotiation.
Compression: NONE
Expansion: NONE
No ALPN negotiated
Early data was not sent
Verify return code: 0 (ok)
---
```

> s_client: Value must be one of:  
        smtp  
        pop3  
        imap  
        ftp  
        xmpp  
        xmpp-server  
        telnet  
        irc  
        mysql  
        postgres  
        lmtp  
        nntp  
        sieve  
        ldap  

## Windows

列出当前用户证书：

```powershell
Get-ChildItem Cert:\CurrentUser\My
```

列出本机证书：

```powershell
Get-ChildItem Cert:\LocalMachine\My
```

查看证书详细信息：

```powershell
certutil -dump path\to\certificate.cer
```

## 排查建议

1. 先确认证书是否过期，再检查域名和用途是否匹配。
2. 证书链异常时，优先检查中间证书是否缺失。
3. 在修改生产证书前，先导出原始证书和私钥备份。