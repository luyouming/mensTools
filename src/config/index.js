const publicPath = {
  // 本地环境发布目录
  dev: './',
  // 内网测试环境发布目录
  test: './',
  // 生产环境发布目录
  pro: './'
}
const apiUrl = {
  // 本地开发环境接口请求地址 npm run build:dev
  // dev: 'http://219.142.71.84:10783/dev/api/V1',
  dev: '/',
  // 生成内网测试接口请求地址 npm run build:test 打包成为app的时候，是不存在跨域的，接口都是用绝对路径，如果是部署的时候，跨域要用nginx
  test: 'http://219.142.71.84:10783/test/api/V1/',
  // 生成外网接口请求地址 npm run build:pro
  pro: 'http://clouddeer.com/pro/api/V1/'
}
const swiperImgUrl = 'http://www.clouddeer-expo.com/ZGP_img/'

module.exports = {
  publicPath,
  apiUrl,
  swiperImgUrl
}
