module.exports = {
  preset: {},
  prompts: [],
  complete: async function(params, { installDependencies, trace, chalk }) {
    await installDependencies(params.distDir)
    trace('\n' + '✔  项目初始化完成.')
  }
}
