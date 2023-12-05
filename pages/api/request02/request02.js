// pages/api/request02/request02.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    q: ''
  },

  //当用户在输入框中输入时，更新搜索关键词
  inputChange: function(e) {
    this.setData({
      q: e.detail.value
    });
  },

  //跳转bing + 搜索关键词
  forSubmit: function() {
    let url = 'https://cn.bing.com/search?q=' + this.data.q;
    let that = this;
    wx.showModal({
      title: '提示',
      content: '现在不支持直接打开链接呢亲亲:(，是否在浏览器打开网站？',
      success (res) {
        if (res.confirm) {
          wx.setClipboardData({
            data: url,
            success (res) {
              wx.getClipboardData({
                success (res) {
                  console.log(res.data) // data
                }
              })
            }
          })
        }
      }
    })
    // wx.navigateTo({//打不开...web-view不支持个人
    //   url: '/pages/api/request02/bing01?src=' + encodeURIComponent('https://cn.bing.com/search?q=' + this.data.q)
    // });
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