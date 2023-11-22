// pages/api/request01/request01.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
 forSubmit:function(){
  wx.request({
    url:'https://cn.bing.com', //必填，其他的都可以不填
    data:{  
       a:1, 
       b:2
    },
    header:{  
       'content-type':'application/json'
    },
    method:'GET',  
    dataType:'JSON',  
    responseType:'text', 
    success(res){
        console.log(res);
    },
    fail(){  
        console.log('fail')
    },
    complete(){   
         console.log('complete')   
    }
  })
 },
 stop:function(){
  const requestTask=wx.request({
    url:'test.php',
    // data:{x:'',y:''},   
    // header:{'content-type':'application/json'},
    success(res){
    console.log(res.data)  
    }    
    })   
    requestTask.abort()// 取消请求任务
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