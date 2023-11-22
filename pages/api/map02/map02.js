// pages/api/map02/map02.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude:0,
    longitude:0
  },
  getaLocation:function(){
    const locationUtils = require('../../../utils/location') // 引入工具类
  // 获取当前位置
  locationUtils.getLocation().then(res => {
      console.log('当前所在位置的经纬度为：')
      console.log(res.latitude,res.longitude)
      this.setData({
        latitude:res.latitude,
        longitude:res.longitude
      })
  })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
 
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

