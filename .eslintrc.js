module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    // 每个全局变量名称设置为等于以true允许覆盖变量或false禁止覆盖
    globals: {
        process: true,
        __dirname: true
    },
    overrides: [
    ],
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: [
        'react'
    ],
    rules: {
        // 指定数组的元素之间要以空格隔开
        'array-bracket-spacing': [2, 'never'],
        // 控制逗号前后的空格
        "comma-spacing": [2, { "before": false, "after": true }],
        // 强制使用一致的缩进
        "indent": [
            2,
            4,
            {
                "SwitchCase": 1
            }
        ],
        // 强制在对象字面量的属性中键和值之间使用一致的间距
        'key-spacing': [2, {
            'beforeColon': false,
            'afterColon': true
        }],
        // 要求操作符周围有空格
        'space-infix-ops': 2,
        // 不允许空格和 tab 混合缩进
        'no-mixed-spaces-and-tabs': 2,
        // 禁止使用多个空格
        'no-multi-spaces': 2,
        // 禁用行尾空格
        "no-trailing-spaces": 2,
        // 是否允许debugger
        'no-debugger': 1,
        "no-var": 2,
        // 禁止出现未使用过的变量
        'no-unused-vars': [1, {
            vars: 'all',
            args: 'none'
        }],
        // 强制在花括号中使用一致的空格
        'object-curly-spacing': [2, 'always', {
            objectsInObjects: false
        }],
        //强制语句分号结尾
        "semi": [2, "always"]
    }
};
