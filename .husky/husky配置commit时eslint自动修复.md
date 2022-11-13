
# husky使用（v8.0）
#### 1.npm install husky --save-dev 安装
#### 2.npx husky install  手动启用husky
#### 3.npx husky add .husky/pre-commit "npm run lint-staged"  生成husky配置文件（执行完这一步，根目录会有一个 .husky目录）

#### 4.为了避免手动启动在package.json的 scripts 里面添加如下配置

```
    "scripts": { "prepare": "husky install" }
```

#### 5.继续在 scripts 里面添加
```angular2html
    "lint": "eslint --ext .js,.jsx,.ts,.tsx src",
    "lint-staged": "lint-staged"
```

#### 6.package.json 里面添加 
```angular2html
    "lint-staged": {
        "**/*.{js,jsx}": ["eslint --fix"]
    }
```
