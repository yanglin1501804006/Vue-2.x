## 1.下载Redis-x64-3.2.100.zip包

[https://github.com/microsoftarchive/redis/releases](https://github.com/microsoftarchive/redis/releases)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200429174146940.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L01pc3NPZlNwcmluZw==,size_16,color_FFFFFF,t_70)

## 2.解压之后

将2.3中脚本拷贝到与redis-cli.exe同级目录下。

## 3.注册bat脚本

RegRedisServer.bat

```powershell
@echo off
set currpath=%~dp0
set redis_path=%currpath%

::if语句，若路径不存在，则关闭系统
if not exist %redis_path% (
echo %redis_path%
echo redis path does not exist ...
::exit
goto userexit
)


echo Registering redis service：%RegisterRedisService
%redis_path%redis-server --service-install redis.windows-service.conf --service-name redis --loglevel verbose  --port 6379
::%redis_path%redis-server --service-install Redis  redis.windows-service.conf --loglevel verbose   --port 6379
sc start redis
```

## 4.注销bat脚本

DelRedisServer.bat

```powershell
@echo off

::停止服务
::%redis_path%redis-server --service-stop --service-name redis   --port 6379

::卸载服务
::%redis_path%redis-server --service-uninstall --service-name redis  --port 6379

::也可使用如下方式进行停止服务和卸载服务


sc stop redis
sc delete redis
```

## 5. 	redis.windows-service.conf文件的设置

>##192.168.207.87 是自己的ip地址
>bind 127.0.0.1 192.168.207.87
>##6379是默认端口号
>port 6379

ps:建议使用redis.windows-service.conf配置文件。
原因是解压完之后的Windows Service Documentation.docx文件中说明了。
