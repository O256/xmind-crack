## 简单说明
- 该工具衍生自：https://github.com/henryau53/xmind-crack-patch.git
- 修复crack之后无法保存文件的问题

## 环境搭建

- Node.js
- Xmind 23.08.02122

```bash
npm install -g asar
```

## 如何使用

1. 从官方下载 Xmind 23.08.02122 版本进行安装。

2. 克隆项目

```bash
git clone https://github.com/O256/xmind-crack.git
cd xmind-crack-patch
```

3. 编译补丁包

```bash
asar pack ./app.asar.non-windows app.asar
```

4. 替换xmind安装路径下的app.asar文件

```bat
C:\Users\xxx\AppData\Local\Programs\Xmind
```

## 保存报错
1. 解压 "Xmind-for-Windows-x64bit-23.08.02122-202308280055.exe" 安装文件
2. 然后解压 $PLUGINSDIR目录的"app-64.7z" 文件
3. 进到 "app.asar.unpacked/node_modules" 目录.
4. 将node_modules目录拷贝到"app.asar.windows"目录
5. 用上面的asar编译补丁
