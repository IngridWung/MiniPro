// pages/component/openwebview01/openwebview011.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //弹窗打开bing
  forSubmit: function() {
    var url = 'https://cn.bing.com';
    wx.showModal({
      title: '提示',
      content: '是否要在浏览器中打开 Bing 的页面？',
      success(res) {
        if (res.confirm) {
          wx.setClipboardData({
            data: url,
            success(res) {
              wx.showToast({
                title: '链接已复制',
                icon: 'success',
                duration: 2000
              });
            }
          });
        }
      }
    });
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