'use strict'
const exec = require('child_process').exec;
const co = require('co');
const prompt = require('co-prompt');
const config = require('./templates');
const chalk = require('chalk');

module.exports = () => {
    let projectName = process.argv[3];
    let gitUrl = config.url;
    // git命令，远程拉取项目并自定义项目名
    let cmdStr = `git clone ${gitUrl} ${projectName}`;
    console.log(chalk.white('Start generating...'));
    exec(cmdStr, (error, stdout, stderr) => {
        if (error) {
            console.log(error);
            process.exit();
        }
        console.log(chalk.green('√ Generation completed!'));
        process.exit();
    });
}
