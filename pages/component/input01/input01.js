// pages/component/input01/input01.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height:20,
    focus:false
  },
  // inputUser:function(e){
  //   this.setData({
  //     inputUser:e.detail.value
  //   })
  //   },
  // bindKeyInput: function (e) {
  //   this.setData({
  //     inputValue: e.detail.value
  //   })
  // },
  inputValue:function(e){
    console.log(e.detail.value);
  },
  bindButtonTap: function() {
    this.setData({
      focus: true
    })
  },
  bindTextAreaBlur: function(e) {
    console.log(e.detail.value)
  },
  bindFormSubmit: function(e) {
    console.log(e.detail.value.textarea)
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
Component({
  methods: {
    click(e) {
      const { trigger } = e.detail;
      console.log('click: ', trigger);
    },
  },
});