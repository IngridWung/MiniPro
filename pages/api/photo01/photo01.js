// pages/api/photo01/photo01.js
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
    this.ctx = wx.createCameraContext()
  },
  takePhoto(){
    this.ctx.takePhoto({
      quality:'high',
      success:(res)=>{
        this.setData({
          src:res.tempImagePath
        })
      }
    })
  },
  startRecord(){
    this.ctx.startRecord({
      success:(res)=>{
        console.log('开始录像')
      }
    })
  },
  stopRecord(){
    this.ctx.stopRecord({
      success:(res)=>{
        this.setData({
          src:res.tempThumbPath,
          videoSrc:res.tempVideoPath
        })
        console.log('结束录像')
      }
    })
  },
  error(e){
    console.log(e.detail)
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