// pages/component/video01/video01.js
function getRandomColor() {
  const rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length === 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}
let video = null
let inputvalue = ""

Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:"",
    danmuList: [
      {
        text: '好期待！',
        time:1,
        color: '#ffffff'
      },
      {
        text: '终于看到Alana了！',
        time:2,
        color: '#ffffff'
      },
      {
        text: '赞！',
        time:3,
        color:'#545423'
      }
    ]
  },

  bindButtonTap:function(){
    console.log("enter bindButtonTap");
    wx.chooseVideo({
      sourceType:['album','camera'],//album	从相册选择视频  camera	使用相机拍摄视频
      camera:"back",//默认拉起的是前置或者后置摄像头
      success: res => {//object.success 回调函数
        this.setData({
          src:res.tempFilePath//选定视频的临时文件路径 (本地路径)
        })
      }
    })
    },
    Danmu(event) {
      inputvalue = event.detail.value
    },
    sendDanmu() {
      // video=wx.createInnerVideoContext("hellovideo")
      video.sendDanmu({//video
        text: inputvalue,
        color: getRandomColor()
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
  onReady:function() {
//    video=wx.createInnerVideoContext('hellovideo')
    video = wx.createVideoContext('hellovideo', video)
    // video=wx.createInnerAudioContext("damucontext")
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