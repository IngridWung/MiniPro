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
  copyLink1: function(url) {
    wx.setClipboardData({
      data: url,
      success: function() {
        wx.showToast({
          title: '已复制链接',
          icon: 'success',
          duration: 2000
        })
      }
    })
  },

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
    src:"",
    showPopup: false,
    changedata:0,
    danmuList: [
      {
        text: '好期待！',
        time:1,
        color: '#ffffff'
      },
      {
        text: '天呐太帅了！',
        time:2,
        color: '#ffffff'
      },
      {
        text: '赞！',
        time:3,
        color:'#545423'
      }
    ],
    inputValue: '',
    items:[
      { label: 'bilibili', image: 'cloud://mainprogram-1g34f814e053b220.6d61-mainprogram-1g34f814e053b220-1322214062/pics/icon/bilibili-fill.png', url:'https://space.bilibili.com/2022718277/dynamic'},
      { label: '微博', image: 'cloud://mainprogram-1g34f814e053b220.6d61-mainprogram-1g34f814e053b220-1322214062/pics/icon/微博.png', url: 'https://www.weibo.com/u/7734278610'},
      { label: '百科', image: 'cloud://mainprogram-1g34f814e053b220.6d61-mainprogram-1g34f814e053b220-1322214062/pics/icon/百度.png', url: 'https://baike.baidu.com/item/%E4%BA%9A%E5%8E%86%E5%B1%B1%E5%BE%B7%E6%8B%89%C2%B7%E7%BB%B4%E4%BA%9A%E5%88%87%E6%96%AF%E6%8B%89%E6%B2%83%E5%A4%AB%E5%A8%9C%C2%B7%E7%89%B9%E9%B2%81%E7%B4%A2%E5%A8%83/22751675'},
    ],
    value: 3,
  },

  methods: {
    onChange(e) {
      const {
        detail: { current, source },
      } = e;
      console.log(current, source);
      ///////newwwwww  ↓
      const { value } = e.detail;
      this.setData({
        value,
      });
//      this.uploadRating(value);////////
    },
    Danmu(event) {
      inputvalue = event.detail.value
    },
    sendDanmu(){
      if (!this.videoCtx) {//连接一下视频 videoCtx:API
        this.videoCtx = wx.createVideoContext('hellovideo');
      }
      this.videoCtx.sendDanmu({//this.videoCtx
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
            title: '连接已复制 ;)',
            icon: 'success',
            duration: 2000
          })
        }
      })
    },
    copyLink1: function(e) {
      const url = e.currentTarget.dataset.url;
      wx.setClipboardData({
        data: url,
        success: function() {
          wx.showToast({
            title: '链接已复制 ;D',
            icon: 'success',
            duration: 2000
          })
        }
      })
    },
    uploadRating(rating) {///好吧...
      wx.cloud.callFunction({
        name: 'uploadRating', // 云函数的名字
        data: {
          rating: rating, // 你想上传的评分
        },
        success: res => {
          console.log('上传成功', res);
        },
        fail: err => {
          console.error('上传失败', err);
        }
      });
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
  },
});