// pages/api/file01/file01.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  chooseImage() { 
    wx.chooseImage({
      sizeType:['original', 'compressed'],// 指是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 指定来源是相册还是相机，默认二者都有
      success(res) {
      	let file = res.tempFilePaths[0]
        wx.uploadFile({  
	      url: 'https://www.bing.com/',  //随便写的网址
	      name: 'image',//根据后端接口开发文档的要求填写
	      filePath: file,
	      success: function(result){  
          console.log(result);
          console.log("success upload");
	      },  
	      fail: function(){  
	        console.log("fail");
	      }  
	    })  
      }
    })
  },
  downloadF(){
    wx.downloadFile({
      url: 'https://example.com/audio/123', //随便的
      success (res) {
        // 服务器响应数据，就会把响应内容写入文件并进入 success 回调，需要自行判断是否下载到了想要的内容
        if (res.statusCode === 200) {
          wx.playVoice({
            filePath: res.tempFilePath
          })
        }
        console.log("success download");
      }
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