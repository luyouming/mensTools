import $config from '@/config/index'
let API_BASE_ROOT = ''
switch (process.env.VUE_APP_ENV) {
  case 'dev':
    API_BASE_ROOT = $config.apiUrl.dev // 本地开发环境发布目录
    break
  case 'webIn':
    API_BASE_ROOT = $config.apiUrl.test // 本地测试环境发布目录
    break
  case 'webOut':
    API_BASE_ROOT = $config.apiUrl.pro // 外网正式环境发布目录
    break
}
const basePathList = {
  LOGIN_URL: 'api/login',
  // 卷烟品牌
  CIGAR_FIND_BRAND_DESC: 'productbrand/findBrandDesc', // 卷烟品牌管理 --获取品牌名称接口
  CIGAR_FIND_ONE: 'productbrand/findOne', // 卷烟品牌管理 --查看
  CIGAR_BRAND_DELETE: 'productbrand/delete', // 卷烟品牌管理 --单项删除
  BRAND_DELETE_MANY: 'productbrand/deleteMany', // 卷烟品牌管理 --多项删除
  BRAND_INSERT: 'productbrand/insert', // 卷烟品牌管理 --新增
  BRAND_UPDATE: 'productbrand/updateByPrimaryKeySelective', // 卷烟品牌管理 --更新
}
for (const key in basePathList) {
  basePathList[key] = API_BASE_ROOT + basePathList[key]
}
export default {
  ...basePathList
}

