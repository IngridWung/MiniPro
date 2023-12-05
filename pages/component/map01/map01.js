// pages/component/map01/map01.js
import Message from 'tdesign-miniprogram/message/index';
Page({
  // data: {
  //   showMessage: false,
  // },
  // onLoad(options) {
  //   this.getLocation();
  // },
  // getLocation() {
  //   var that = this;
  //   wx.getLocation({
  //     type:'gcj02',
  //     success(res){
  //       console.log(res);
  //       const latitude = res.latitude;
  //       const longitude = res.longitude;
  //       wx.chooseLocation({
  //         latitude,
  //         longitude,
  //         success(res){
  //           console.log(res);
  //           that.setData({
  //             latitude:latitude,
  //             longitude:longitude,
  //             name:res.name,
  //             add:res.address,
  //             showMessage: false
  //           });
  //         }
  //       });
  //     },
  //     fail() {
  //       that.setData({ showMessage: true });
  //     }
  //   });
  // },
  // reloadPage() {
  //   // this.setData({ showMessage: false });
  //   // this.getLocation();
  //   Message.info({
  //     context: this,
  //     offset: ['20rpx', 32],
  //     content: '请打开定位~',
  //     duration: 2000,
  //   });
  //   this.getLocation();
  // },
  /**
   * 页面的初始数据
   */
  data: {
    // showMessage: false,//再次尝试获取位置
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var  that = this
    wx.getLocation({
      type:'gcj02',//坐标系名称
      success(res){//根据经纬度确定位置
        console.log(res)
        const latitude = res.latitude;
        const longitude = res.longitude;
        wx.chooseLocation({//选择位置
          latitude,
          longitude,
          success(res){
            console.log(res)
            that.setData({
              latitude:latitude,
              longitude:longitude,
              name:res.name,
              add:res.address
            })
          }
        })
      },
      fail() {
        that.setData({ showMessage: true });
      }
    });
  },
  //再次尝试获取位置
  reloadPage() {
    this.setData({ showMessage: false });
    this.getLocation();
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
// Component({//t-message
//   methods:{
//     showCloseMessage() {
//       Message.info({
//         context: this,
//         offset: ['20rpx', 32],
//         content: '这是一条带关闭的消息通知',
//         duration: -1,
//         link: {
//           content: '按钮',
//           navigatorProps: {
//             url: '/page/xxx/xxx',
//           },
//         },
//         closeBtn: true,
//       });
//     }
//   }
// })