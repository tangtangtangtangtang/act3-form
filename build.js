/*
 * @Author: xiaozhuo
 * @Date: 2020-07-28 21:21:26
 * @LastEditTime: 2020-07-28 21:25:24
 * @LastEditors: xiaozhuo
 * @Description: 
 * @Enuma Elish
 */

/**
 * Compile components
 */
const fs = require('fs-extra')
const path = require('path')
const babel = require('@babel/core')

const esDir = path.join(__dirname, './es')
// const libDir = path.join(__dirname, '../lib')
const srcDir = path.join(__dirname, './src')

const scriptRegExp = /\.(js|ts|tsx)$/
const isDir = dir => fs.lstatSync(dir).isDirectory()
const isCode = path => !/(demo|site|docs|tests|\.md)$/.test(path)
const isScript = path => scriptRegExp.test(path)

function compile(dir) {
    const files = fs.readdirSync(dir)
    files.forEach(file => {
        const filePath = path.join(dir, file)
        // 如果是dir则递归
        if (isDir(filePath)) {
            return compile(filePath)
        }
        // 移除非必要文件
        if (!isCode(file)) {
            return fs.removeSync(filePath)
        }

        // 编译js、ts
        if (isScript(file)) {
            const { code } = babel.transformFileSync(filePath, {
                configFile: path.join(__dirname, './.babelrc')
            })
            fs.removeSync(filePath)
            fs.outputFileSync(filePath.replace(scriptRegExp, '.js'), code)
        }
    })
}

fs.emptyDirSync(esDir)
// compile es dir
fs.copySync(srcDir, esDir)
compile(esDir)
