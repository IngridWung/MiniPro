// pages/component/map01/map01.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var  that = this
    wx.getLocation({
      type:'gcj02',//坐标系名称
      success(res){//根据经纬度确定位置
        console.log(res)
        const latitude = res.latitude;
        const longitude = res.longitude;
        wx.chooseLocation({//选择位置
          latitude,
          longitude,
          success(res){
            console.log(res)
            that.setData({
              latitude:latitude,
              longitude:longitude,
              name:res.name,
              add:res.address
            })
          }
        })
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})