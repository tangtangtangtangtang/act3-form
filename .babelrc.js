/*
 * @Author: xiaozhuo
 * @Date: 2020-07-28 21:16:16
 * @LastEditTime: 2020-07-28 21:27:55
 * @LastEditors: xiaozhuo
 * @Description: 
 * @Enuma Elish
 */
module.exports = {
    presets: ["@babel/preset-react", "@babel/preset-typescript",
        [
            "@babel/preset-env",
            {
                // "esmodules": true,
                "targets": "> 0.25%, not dead",
                "useBuiltIns": "usage"
            }
        ]
    ],
};