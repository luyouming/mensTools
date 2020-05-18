import { Message } from 'element-ui'
export default {
  info: function (message, title) {
    let detailMessage = '无法捕获异常'
    let errorTitle = ''
    if (typeof message === 'object') {
      if (message.response) {
        detailMessage = message.response.data.message
      } else {
        detailMessage = message
      }
    } else if (typeof message === 'string') {
      detailMessage = message
    }
    if (title && title !== '') {
      errorTitle += '<div style="font-size:14px;height:20px;line-height:20px;"><b>' + title + '</b></div></br>'
    }
    Message({
      dangerouslyUseHTMLString: true,
      message: '<div style="width: 300px">' + errorTitle + detailMessage + '</div>',
      showClose: true,
      type: 'info',
      duration: 3000
    })
  },
  success: function (message, title) {
    let detailMessage = '无法捕获异常'
    let errorTitle = ''
    if (typeof message === 'object') {
      if (message.response) {
        detailMessage = message.response.data.message
      } else {
        detailMessage = message
      }
    } else if (typeof message === 'string') {
      detailMessage = message
    }
    if (title && title !== '') {
      errorTitle += '<div style="font-size:14px;height:20px;line-height:20px;"><b>' + title + '</b></div></br>'
    }
    Message({
      dangerouslyUseHTMLString: true,
      message: '<div style="width: 300px">' + errorTitle + detailMessage + '</div>',
      showClose: true,
      type: 'success',
      duration: 3000
    })
  },
  warning: function (message, title) {
    let detailMessage = '无法捕获异常'
    let errorTitle = ''
    if (typeof message === 'object') {
      if (message.response) {
        detailMessage = message.response.data.message
      } else {
        detailMessage = message
      }
    } else if (typeof message === 'string') {
      detailMessage = message
    }
    if (title && title !== '') {
      errorTitle += '<div style="font-size:14px;height:20px;line-height:20px;"><b>' + title + '</b></div></br>'
    }
    Message({
      dangerouslyUseHTMLString: true,
      message: '<div style="width: 300px">' + errorTitle + detailMessage + '</div>',
      showClose: true,
      type: 'warning',
      duration: 3000
    })
  },
  error: function (message, title) {
    let detailMessage = '无法捕获异常'
    let errorTitle = ''
    if (typeof message === 'object') {
      if (message.response) {
        detailMessage = message.response.data.message
      } else {
        detailMessage = message
      }
    } else if (typeof message === 'string') {
      detailMessage = message
    }
    if (title && title !== '') {
      errorTitle += '<div style="font-size:14px;height:20px;line-height:20px;"><b>' + title + '</b></div></br>'
    }
    Message({
      dangerouslyUseHTMLString: true,
      message: '<div style="width: 300px">' + errorTitle + detailMessage + '</div>',
      showClose: true,
      type: 'error',
      duration: 3000
    })
  }
}
