import axios from 'axios';
import { Message } from 'element-ui';
// 创建axios实例
const service = axios.create({
  // baseURL: process.env.SERVER_URL, // api 的 base_url
  timeout: 100000 // 请求超时时间
});

// 修改 axios 实例默认配置
service.defaults.headers.post['Content-Type'] = 'application/json'
service.defaults.headers.put['Content-Type'] = 'application/json'
service.defaults.headers.patch['Content-Type'] = 'application/json'

// request 拦截器
service.interceptors.request.use(config => {
    // 可以从用户信息缓存中读取相关的token和code，登录进来之后就会有相应的信息存过，sessionStorage.get
    // if (getUser() && getUser().authToken) {
    //   config.headers.authToken = getUser().authToken; //
    //   config.headers.userCode = getUser().userCode; //
    //   config.headers.Accept = 'application/json, text/javascript, */*; q=0.01;'; //
    // }
    config.headers.authToken = '1234'
    // console.log(config)
    return config;
},
(error) => {
    // Do something with request error
  return Promise.reject(error);
});

// response 拦截器
service.interceptors.response.use(response => {
  /**
   * code为非20000是抛错 可结合自己业务进行修改
   */
  // console.log(response)
  const errCode = response.data ? response.data.errcode : 500
  // 由于湘潭项目的成功code为0，所以加入判断code是否为0
  if (errCode !== 200 && errCode !== 0) {
    // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
    if (errCode === 400) {
      Message({ type: 'warning', message: '错误请求' });
    } else if (errCode === 401) {
      Message({ type: 'warning', message: '身份验证错误' });
    } else if (errCode === 403) {
      Message({ type: 'warning', message: '服务器拒绝请求' });
    } else if (errCode === 404) {
      Message({ type: 'warning', message: '访问地址不存在' });
    } else if (errCode === 405) {
      Message({ type: 'warning', message: '禁用请求中指定的方法' });
    } else if (errCode === 500) {
      Message({ type: 'danger', message: '服务器在尝试处理请求时发生内部错误.'
      });
    } else if (errCode === 504) {
      Message({ type: 'warning', message: '请求超时.' });
    } else {
      Message({ type: 'warning', message: response.data && response.data.errmsg ? response.data.errmsg : '未知错误' });
    }
    return Promise.reject(response.data)
  } 
  return response
}, error => {
  Message({ type: 'danger', message: '系统错误!' });
  return Promise.reject(error);
});

function requestJava(method, url, data, headerConfig) {
  if (!method) {
    Message({
      type: 'danger',
      message: '请求失败，请联系管理员'
    });
    return
  }
  if (!url) {
    Message({
      type: 'danger',
      message: '服务器连接失败，请联系管理员'
    });
    return
  }
  if (JSON.stringify(headerConfig) === '{}' || headerConfig === undefined || headerConfig === null) {
    const headers = {}
    return method === 'GET' ? service(url, data, headers) : service({ method, url, data, headers })
  } else {
    return method === 'GET' ? service(url, data, ...headerConfig) : service({ method, url, data, ...headerConfig })
  }

}

export default {
  get: function (url, params, headerConfig) {
    return requestJava('GET', url, params, headerConfig)
  },
  post: function (url, params, headerConfig) {
    return requestJava('POST', url, params, headerConfig)
  },
  put: function (url, params, headerConfig) {
    return requestJava('PUT', url, params, headerConfig)
  },
  delete: function (url, params, headerConfig) {
    return requestJava('DELETE', url, params, headerConfig)
  }
};
