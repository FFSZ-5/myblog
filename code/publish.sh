###
 # @FilePath: \code\publish.sh
 # @Version: 2.0
 # @LastEditors: lhl
 # @LastEditTime: 2022-04-24 11:34:14
 # @Description: 
### 
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
git add -A
git commit -m '发版'
git push -f https://github.com/FFSZ-5/myblog.git dev

npm run build

# 进入生成的文件夹
cd dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m '发版'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/FFSZ-5/myblog.git master

cd -