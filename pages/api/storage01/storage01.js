//const { SceneDefaultComponents } = require("XrFrame/elements")

// pages/api/storage01/storage01.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tname:null,
    tpass:null,
    tgender:null
  },
  storage:function(){
    //定义一个对象来存储用户信息
    let userArr = {
      name: '小王',
      pass: 'dai'
   }
   //对象中新增
      userArr.gender = '女'
   //写入缓存
     wx.setStorage({
       key: 'userInfo',
       data: userArr
    })
     //读取缓存
    wx.getStorage({
       key: 'userInfo'
     }).then(res => {
       console.log('res===', res)
    })
    this.setData({
      tname:userArr.name,
      tpass:userArr.pass,
      tgender:userArr.gender
    })
  },
  remove:function(){
    wx.removeStorage({
      key:'userInfo',
      success:function(res){
        console.log("已删除")
      }
  })
  this.setData({//清空一下数据
    tname:null,
    tpass:null,
    tgender:null
  })  
  },

  // /**
  //  * 生命周期函数--监听页面加载
  //  */
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