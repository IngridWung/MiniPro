// pages/term/term04/term04.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageUrls: [],  // 图片的URL列表
    date: '',  // 选中的日期
    videoUrl: '',  // 视频的URL
    danmuList: [],  // 弹幕列表
    danmuInput: '',  // 弹幕输入框的内容
    searchInput: ''  // 搜索输入框的内容
  },
  // 当用户在日期选择器中选择一个日期时，更新选中的日期
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    });
  },
  
  // 当用户在弹幕输入框中输入时，更新弹幕输入框的内容
  Danmu: function(e) {
    this.setData({
      danmuInput: e.detail.value
    });
  },
  
  // 当用户点击发送弹幕按钮时，发送弹幕
  sendDanmu: function() {
    var videoContext = wx.createVideoContext('video');
    videoContext.sendDanmu({
      text: this.data.danmuInput,
      color: getRandomColor()
    });
  },
  
    // 当用户在搜索输入框中输入时，更新搜索输入框的内容
  Search: function(e) {
    this.setData({
      searchInput: e.detail.value
    });
 },
    // 当用户点击搜索 Bing 按钮时，跳转到 Bing 的搜索结果页面
  searchBing: function() {
    var url = 'https://cn.bing.com/search?q=' + encodeURIComponent(this.data.searchInput);
    wx.showModal({
      title: '提示',
      content: '是否要在浏览器中打开 Bing 的搜索结果页面？',
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

  // 当用户点击反馈建议按钮时，打开反馈建议的弹窗
  openFeedbackDialog: function() {
    wx.showModal({
      title: '反馈建议',
      content: '请输入你的反馈建议：',
      success(res) {
        if (res.confirm) {
          // 在这里处理用户的反馈建议
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