# Windows 域 - 命令和常见问题

本页面记录了用于维护 Active Directory 中域用户帐户的常用 PowerShell 命令。

## Preconditions

- Run PowerShell with an account that has permission to manage domain users.
- Ensure the Active Directory module is available.
- Prefer using `SamAccountName` or `UserPrincipalName` instead of display name.

## Load the module

```powershell
Import-Module ActiveDirectory
```

## Get user info

Use this to check the current account state before making changes.

```powershell
// get all properties of user "username"
Get-ADUser -Identity username -Properties *  
Get-ADUser -Identity username -Properties DisplayName, Enabled, LockedOut, PasswordLastSet, LastLogonDate, PasswordNeverExpires |
	Select-Object SamAccountName, DisplayName, Enabled, LockedOut, PasswordLastSet, LastLogonDate, PasswordNeverExpires
```

If you need to search by partial name:

```powershell
Get-ADUser -Filter "Name -like '*john*'" -Properties Enabled |
	Select-Object Name, SamAccountName, Enabled
```

## Unlock user

Check whether the account is locked:

```powershell
Get-ADUser -Identity username -Properties LockedOut |
	Select-Object SamAccountName, LockedOut
```

Unlock the account:

```powershell
Unlock-ADAccount -Identity username
```

## Reset user password

Reset the password and prompt for the new password securely:

```powershell
Set-ADAccountPassword -Identity username -Reset -NewPassword (Read-Host "Enter new password" -AsSecureString)
```

## Force password change at first login

```powershell
Set-ADUser -Identity username -ChangePasswordAtLogon $true
```

## Typical helpdesk flow

This sequence covers the most common locked-account support case.

```powershell
Unlock-ADAccount -Identity username
Set-ADAccountPassword -Identity username -Reset -NewPassword (Read-Host "Enter new password" -AsSecureString)
Set-ADUser -Identity username -ChangePasswordAtLogon $true
```

## Verify the result

```powershell
Get-ADUser -Identity username -Properties LockedOut, PasswordLastSet |
	Select-Object SamAccountName, LockedOut, PasswordLastSet
```

## Safety notes

- Verify the account first before changing anything.
- Use `-WhatIf` where supported before bulk changes.
- Do not hardcode passwords in scripts.
- Use `-Server dc01.contoso.com` if you need to target a specific domain controller.

## Example with a specific domain controller

```powershell
Get-ADUser -Identity username -Server dc01.contoso.com
Unlock-ADAccount -Identity username -Server dc01.contoso.com
Set-ADAccountPassword -Identity username -Server dc01.contoso.com -Reset -NewPassword (Read-Host "Enter new password" -AsSecureString)
Set-ADUser -Identity username -Server dc01.contoso.com -ChangePasswordAtLogon $true
```