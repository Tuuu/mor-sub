import { defineConfig } from '@morjs/cli'

export default defineConfig([
  {
    name: 'wechat-subpackage',
    sourceType: 'wechat',
    target: 'wechat',
    compileType: 'subpackage',
    compileMode: 'bundle',
    autoClean:true,
    jsMinimizer: 'esbuild',
  },
  {
    name: 'alipay-subpackage',
    sourceType: 'wechat',
    target: 'alipay',
    compileType: 'subpackage',
    compileMode: 'bundle',
    autoClean:true,
    jsMinimizer: 'esbuild',
  },
])
