// pages/api/audio01/audio01.js
let audioCtx  = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function(options) {
    audioCtx =    wx.createInnerAudioContext();
    audioCtx.autoplay = true
    // audioCtx.src = '/pages/videos/alana_cmbb.mp3'
    // cloud://mainprogram-1g34f814e053b220.6d61-mainprogram-1g34f814e053b220-1322214062/audio/alana_cmbb.mp3
    audioCtx.src = "cloud://mainprogram-1g34f814e053b220.6d61-mainprogram-1g34f814e053b220-1322214062/audio/alana_cmbb.mp3"
    audioCtx.onPlay(()=>{
      console.log("开始播放")
    })
    audioCtx.onPause(()=>{
      console.log("暂停播放")
    })
    audioCtx.onStop(()=>{
      console.log("停止播放")
    })
    audioCtx.onEnded(()=>{
      console.log("自然播放结束")
    })
    audioCtx.onTimeUpdate(()=>{
      console.log("监听播放",audioCtx.currentTime)
    })
    audioCtx.onSeeking(()=>{
      console.log("跳转音频")
    })
    audioCtx.onSeeked(()=>{
      console.log("音频完成后跳转")
    })
    audioCtx.onError((res)=>{
      console.log(res.errMsg)
      console.log(res.errCode)
    })
  },
  audioPlay:function(){
    audioCtx.play()
  },
  audioPause:function(){
    audioCtx.pause()
  },
  audioStop:function(){
    audioCtx.stop()
  },
  audio60:function(){
    audioCtx.seek(60)
  },
  audioStart:function(){
    audioCtx.seek(0)
  },
  onUnload:function(){
    audioCtx.destroy();
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