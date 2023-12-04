// pages/term01/term01.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  jumpToView1(){
    wx.navigateTo({
      url: '/pages/component/view01/view01',
    })
  },
  jumpToView2(){
    wx.navigateTo({
      url: '/pages/component/view01/view011',
    })
  },
  jumpToView3(){
    wx.navigateTo({
      url: '/pages/component/view02/view02',
    })
  },
  jumpToRadio(){
    wx.navigateTo({
      url: '/pages/component/radio01/radio01',
    })
  },
  jumpToPicker(){
    wx.navigateTo({
      url: '/pages/component/picker01/picker01',
    })
  },  
  jumpToImage(){
    wx.navigateTo({
      url: '/pages/component/image01/image01',
    })
  },
  jumpToInput(){
      wx.navigateTo({
//      wx.switchTab({
      url: '/pages/component/input01/input01',
    })
  },
  jumpToMap(){
    wx.navigateTo({
      url: '/pages/component/map01/map01',
    })
  },
  jumpToNavigator(){
    wx.navigateTo({
      url: '/pages/component/navigator01/navigator01',
    })
  },
  jumpToVideo(){
    wx.navigateTo({
      url: '/pages/component/video01/video01',
    })
  },
  jumpToCanvas(){
    wx.navigateTo({
      url: '/pages/component/canvas01/canvas01',
    })
  },
  jumpToOpenAndWeb(){
    wx.navigateTo({
      url: '/pages/component/openwebview01/openwebview01',
    })
  },
  jumpToOpenWeb(){
    wx.navigateTo({
      url: '/pages/component/openwebview01/openwebview011',
    })
  },
  jumpToPopUp01(){
    wx.navigateTo({
      url: '/pages/component/popup01/popup01',
    })
  },
  jumpToPopUp02(){
    wx.navigateTo({
      url: '/pages/component/popup02/popup02',
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