# Android


## 常用命令
``` sh
#截屏
adb shell screencap -p /data/local/tmp/screenshot.png

adb pull /data/local/tmp/screenshot.png .
```

``` sh
# 列出所有安装的第三方应用及其 APK 文件的完整路径
adb shell pm list packages -3 -f
# package:/data/app/com.sjm.launcher-PVzBhtXNkM3EpdkaWwufGQ==/base.apk=com.sjm.launcher
# package:/data/app/com.sjm.bts-TNA3At-x9cH3HuLPk6MGQA==/base.apk=com.sjm.bts
# package:/data/prebuilt_app/PosDemo/PosDemo.apk=test.apidemo.activity

# 复制APK到本地
adb pull /data/app/com.sjm.launcher-PVzBhtXNkM3EpdkaWwufGQ==/base.apk ./
```

