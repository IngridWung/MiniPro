// app.js
App({
  onLaunch:function() {
    if(!wx.cloud){
      console.error('请更新版本以使用')
    }else{
      wx.cloud.init({
        env:'mainprogram-1g34f814e053b220',
        traceUser:true,
      })
    }
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  onShow :function(options){
    console.log(options)//console别打错了
  },
  onHide :function(){},

  globalData: {
    userInfo: null
  }
})
