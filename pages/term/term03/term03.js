// pages/term/term03/term03.js
const swiperList = [
  `cloud://mainprogram-1g34f814e053b220.6d61-mainprogram-1g34f814e053b220-1322214062/pics/SashaA/Sasha1.png`,
  `cloud://mainprogram-1g34f814e053b220.6d61-mainprogram-1g34f814e053b220-1322214062/pics/SashaA/Sasha3.png`,
  `cloud://mainprogram-1g34f814e053b220.6d61-mainprogram-1g34f814e053b220-1322214062/pics/SashaA/Sasha4.jpg`,
  // `${imageCdn}/swiper2.png`,
  // `${imageCdn}/swiper1.png`,
];
let video = null
let inputvalue = ""
function getRandomColor() {//弹幕来点随机颜色
  const rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length === 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}

Page({
  data: {
    src:"",
    danmuList: [
      {
        text: '第1s出现的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第3s出现的弹幕',
        color: '#ff00ff',
        time: 3
      }],
    inputValue: ''
  },
  onLoad: function(options) {
    this.videoCtx = wx.createVideoContext('hellovideo')
    let that = this;
    wx.cloud.downloadFile({
      fileID: 'cloud://mainprogram-1g34f814e053b220.6d61-mainprogram-1g34f814e053b220-1322214062/video/Unstoppable.mp4',
      success: res => {
        // get temp file path
        console.log(res.tempFilePath)
        that.setData({
          src: res.tempFilePath
        })
      },
      fail: err => {
        // handle error
        console.error(err);
      }
    })
  },
  Danmu(event) {
    inputvalue = event.detail.value
  },
  sendDanmu(){
    // video=wx.createInnerVideoContext("hellovideo")
    video.sendDanmu({//video
      text: inputvalue,
      color: getRandomColor()
    })
    this.setData({//清空输入栏
      inputValue: ''
    })
  },
  copyLink: function() {
    wx.setClipboardData({
      data: 'https://iticket.az/en/events/concerts/tales-of-evgeni-plushenko',
      success: function() {
        wx.showToast({
          title: '已经复制网页链接',
          icon: 'success',
          duration: 2000
        })
      }
    })
  },
  // data: {
  //  src:"cloud://mainprogram-1g34f814e053b220.6d61-mainprogram-1g34f814e053b220-1322214062/pics/SashaA/Sasha2.jpg", 
  //   danmuList: [
  //     {
  //       text: '好期待！',
  //       time:1,
  //       color: '#ffffff'
  //     },
  //     {
  //       text: '天呐太帅了！',
  //       time:2,
  //       color: '#ffffff'
  //     },
  //     {
  //       text: '赞！',
  //       time:3,
  //       color:'#545423'
  //     }
  //   ],
  // },
  // Danmu(event) {
  //   inputvalue = event.detail.value
  // },
  // sendDanmu(){
  //   video.sendDanmu({//video
  //     text: inputvalue,
  //     color: getRandomColor()
  //   })
  //   this.setData({//清空输入栏
  //     inputValue: ''
  //   })
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  // onLoad(options) {

  // },

   /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady:function() {
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
  data: {
    current: 0,
    autoplay: false,
    duration: 500,
    interval: 5000,
    swiperList,
    time: 95 * 60 * 1000,
  },

  methods: {
    onChange(e) {
      const {
        detail: { current, source },
      } = e;
      console.log(current, source);
    },
  },
});