// pages/data01/data01.js
Page({

  /**
   * 页面的初始数据
   */

  data: {
    // 把obj里面的name等引号去掉了
    title: "数据绑定",
    ListArr: ["姓名", "性别", "年龄"],
    Arr1:[{message:"hello"},{message:"good morning"}],
    Arr2:[[1,2,3],[4,5,6]],
    obj:{name:"小宋",gender:"女",age:20},
    obj1:{name1:"小王",gender1:"男",age1:30},
    obj1:{name1:"小王",gender1:"男",age1:32},
    data1:1,
    data2:2,
    showtext:1,
    a:1,
    b:2,
    c:3
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