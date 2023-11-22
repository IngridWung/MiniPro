// pages/cloudtest/cloudtest.js
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openId:"",
    messagelist:[],
    addName:"",
    addNum:""
  },
  getOpenId:function(){
    var that = this;
    wx.cloud.callFunction({
      name:'newtest',//需要调用的云函数名
      data:{
        token:123
      },
      success:function(res){//////真无语了谁success能漏个c排查一晚上啊
        that.setData({
          openId: res.result.openid/////小写
        })
      }
      // fail:err=>{/////////
      //   console.log("error")
      // }
    })
  },
  getDB:function(){//
//    const db = wx.cloud.database();
    console.log("messagelist:",this.data.messagelist);
    var that = this;/////
    db.collection('datatest').get().then(res =>{
      console.log("连接成功")
      console.log(res.data)
      that.setData({////
        messagelist:res.data
      })
    }).catch(err =>{
      console.log(err)
    })
  },
  getInputName:function(e){
    console.log(e);
    this.setData({
      addName: e.detail.value})
  },
  getInputNum:function(e){
    console.log(e)
    this.setData({
      addNum: e.detail.value})
  },

  addDB:function(e){/////////////new 未弄好
    db.collection('datatest').add({
      data:{
  //      description:"新增数据",
      //  name:addName,
      //  number:addNum
      name:"hello",
      number:"2000"
      },
      success:function (res){
        console.log("连接成功")
        console.log(res)
        // that.setData({////
        //   messagelist:res.data
        // })
      }
    })
    // .then(res => {
    //   console.log(res)
    // })
    // .catch(console.error)
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