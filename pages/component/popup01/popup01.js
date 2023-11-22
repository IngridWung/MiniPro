// pages/component/popup01/popup01.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal: false
  },
  submit: function() {
    this.setData({
    showModal: true
    })
  },
  preventTouchMove: function() {

  },
  close: function() { 
      this.setData({
      showModal: false
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
    this.popup = this.selectComponent('#popup');
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
// Component({
//   /**
//    * Component properties
//    */
//   properties: {
//     title: {            // 属性名
//       type: String,     // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
//       value: ''     // 属性初始值（可选），如果未指定则会根据类型选择一个
//     },
//     // 弹窗图片
//     image: {
//       type: String,
//       value: ''
//     },
//     // 弹窗内容
//     content: {
//       type: String,
//       value: ''
//     },
//     // 弹窗取消按钮文字
//     btn_no: {
//       type: String,
//       value: '取消'
//     },
//     // 弹窗确认按钮文字
//     btn_ok: {
//       type: String,
//       value: '确定'
//     }
//   },
 
//   /**
//    * Component initial data
//    */
//   data: {
//     flag: true,
//   },
 
//   /**
//    * Component methods
//    */
//   methods: {
//     //隐藏弹框
//     hidePopup: function () {
//       this.setData({
//         flag: !this.data.flag
//       })
//     },
//     //展示弹框
//     showPopup () {
//       this.setData({
//         flag: !this.data.flag
//       })
//     },
//     /*
//     * 内部私有方法建议以下划线开头
//     * triggerEvent 用于触发事件
//     */
//     _error () {
//       //触发取消回调
//       this.triggerEvent("error")
//     },
//     _success () {
//       //触发成功回调
//       this.triggerEvent("success");
//     }
//   }
// })
