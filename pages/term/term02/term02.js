// pages/term/term02/term02.js
import Dialog from 'tdesign-miniprogram/dialog/index';
//const imageCdn = 'cloud://mainprogram-1g34f814e053b220.6d61-mainprogram-1g34f814e053b220-1322214062/pics/icon';//不好用欸
//const items = new Array(12).fill({ label: '标题文字', image }, 0, 12);
const items = [
  { label: '布局', image: 'cloud://mainprogram-1g34f814e053b220.6d61-mainprogram-1g34f814e053b220-1322214062/pics/icon/布局.png',url:'/pages/component/view01/view01'}, 
  { label: '轮播', image: 'cloud://mainprogram-1g34f814e053b220.6d61-mainprogram-1g34f814e053b220-1322214062/pics/icon/轮播.png', url: '/pages/component/view01/view011'}, 
  { label: '滚动', image: 'cloud://mainprogram-1g34f814e053b220.6d61-mainprogram-1g34f814e053b220-1322214062/pics/icon/滚动.png' ,url: '/pages/component/view02/view02'}, 
  { label: '选项', image: 'cloud://mainprogram-1g34f814e053b220.6d61-mainprogram-1g34f814e053b220-1322214062/pics/icon/选项.png' ,url: '/pages/component/radio01/radio01'}, 
  { label: '日期', image: 'cloud://mainprogram-1g34f814e053b220.6d61-mainprogram-1g34f814e053b220-1322214062/pics/icon/日历,日期.png',url: '/pages/component/picker01/picker01' }, 
  { label: '图片', image: 'cloud://mainprogram-1g34f814e053b220.6d61-mainprogram-1g34f814e053b220-1322214062/pics/icon/图片.png' ,url: '/pages/component/image01/image01'}, 
  { label: '输入', image: 'cloud://mainprogram-1g34f814e053b220.6d61-mainprogram-1g34f814e053b220-1322214062/pics/icon/输入.png' ,url: '/pages/component/input01/input01'}, 
  { label: '地图', image: 'cloud://mainprogram-1g34f814e053b220.6d61-mainprogram-1g34f814e053b220-1322214062/pics/icon/地图.png' ,url: '/pages/component/map01/map01'}, 
  { label: '导航', image: 'cloud://mainprogram-1g34f814e053b220.6d61-mainprogram-1g34f814e053b220-1322214062/pics/icon/导航.png',url: '/pages/component/navigator01/navigator01' }, 
  { label: '视频', image: 'cloud://mainprogram-1g34f814e053b220.6d61-mainprogram-1g34f814e053b220-1322214062/pics/icon/视频播放.png',url: '/pages/component/video01/video01' }, 
  { label: '画布', image: 'cloud://mainprogram-1g34f814e053b220.6d61-mainprogram-1g34f814e053b220-1322214062/pics/icon/画布文件.png' ,url: '/pages/component/canvas01/canvas01'}, 
  { label: '用户', image: 'cloud://mainprogram-1g34f814e053b220.6d61-mainprogram-1g34f814e053b220-1322214062/pics/icon/用户.png' ,url: '/pages/component/openwebview01/openwebview01'}, 
  { label: 'web', image: 'cloud://mainprogram-1g34f814e053b220.6d61-mainprogram-1g34f814e053b220-1322214062/pics/icon/web.png' ,url: '/pages/component/openwebview01/openwebview011'},
  { label: '弹窗', image: 'cloud://mainprogram-1g34f814e053b220.6d61-mainprogram-1g34f814e053b220-1322214062/pics/icon/弹窗.png' ,url: '/pages/component/popup01/popup01'}, 
  { label: '自定义', image: 'cloud://mainprogram-1g34f814e053b220.6d61-mainprogram-1g34f814e053b220-1322214062/pics/icon/自定义.png',url: '/pages/component/popup02/popup02'},
  { label: 'bing', image: 'cloud://mainprogram-1g34f814e053b220.6d61-mainprogram-1g34f814e053b220-1322214062/pics/icon/Bing.png',url: '/pages/api/request01/request01'},
  { label: '文件', image: 'cloud://mainprogram-1g34f814e053b220.6d61-mainprogram-1g34f814e053b220-1322214062/pics/icon/文件.png',url: '/pages/api/file01/file01'},
  { label: 'web', image: 'cloud://mainprogram-1g34f814e053b220.6d61-mainprogram-1g34f814e053b220-1322214062/pics/icon/web.png',url: '/pages/api/web01/web01'},
  { label: '音频', image: 'cloud://mainprogram-1g34f814e053b220.6d61-mainprogram-1g34f814e053b220-1322214062/pics/icon/音频.png',url: '/pages/api/audio01/audio01'},
  { label: '视频', image: 'cloud://mainprogram-1g34f814e053b220.6d61-mainprogram-1g34f814e053b220-1322214062/pics/icon/视频播放.png',url: '/pages/component/video01/video01'},
  { label: '相机', image: 'cloud://mainprogram-1g34f814e053b220.6d61-mainprogram-1g34f814e053b220-1322214062/pics/icon/相机.png',url: '/pages/api/photo01/photo01'},
  { label: '图片', image: 'cloud://mainprogram-1g34f814e053b220.6d61-mainprogram-1g34f814e053b220-1322214062/pics/icon/图片.png',url: '/pages/api/photo02/photo02'},
  { label: '缓存', image: 'cloud://mainprogram-1g34f814e053b220.6d61-mainprogram-1g34f814e053b220-1322214062/pics/icon/缓存.png',url: '/pages/api/storage01/storage01'},
  { label: '地图', image:'cloud://mainprogram-1g34f814e053b220.6d61-mainprogram-1g34f814e053b220-1322214062/pics/icon/地图.png',url: '/pages/component/map01/map01'},
  { label: '定位', image: 'cloud://mainprogram-1g34f814e053b220.6d61-mainprogram-1g34f814e053b220-1322214062/pics/icon/定位.png',url: '/pages/api/map02/map02'}
];
Page({
  offsetTopList: [],
  /**
   * 页面的初始数据
   */
  data: {
    sideBarIndex: 1,
    scrollTop: 0,
   flag:0,
    showDialog: false,//new
    categories: [
      {
        label: '组件',
        title: '组件',
        icon: 'component-space',
        badgeProps: {},
        items:items.slice(0,15),
      },
      {
        label: 'API',
        title: 'API',
        icon: 'api',
        badgeProps: {
          dot: true,
        },
        items: items.slice(15,25),
      },
    ],
  },
  checkLocation: function (e) {
    // 获取当前点击的元素的 label 属性
    const label = e.currentTarget.dataset.label;
    if (label === '地图' || label === '定位') {
      var that = this;
      wx.getLocation({
        type:'gcj02',
        success(res){
          console.log(res);
          that.setData({ flag: 0 });//new
          that.jumpToPage(e);
        },
        fail() {
          that.setData({ 
            showDialog: true,
            flag:1,
            url: e.currentTarget.dataset.url
           });
        }
      });
    } else {
      this.jumpToPage(e);
    }
  },
  jumpToPage: function (e) {
    // 获取当前点击的元素的 url 属性
//  const url = e.currentTarget.dataset.url;
  // const { url, flag } = this.data; //new
  const { flag } = this.data; 
  let url; 
  if (flag === 1) {
    // 如果是地图，需要从保存的数据中取出
    url = this.data.url; 
    this.setData({ 
      showDialog: false,
      flag:0//如果不置零，所有页面都前往地图界面了
     });///////
  } else {
    // 否则，从当前点击的元素中获取 url
    url = e.currentTarget.dataset.url; 
  }
  wx.navigateTo({
    url: url
  });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const query = wx.createSelectorQuery().in(this);
    const { sideBarIndex } = this.data;

    query
      .selectAll('.title')
      .boundingClientRect((rects) => {
        this.offsetTopList = rects.map((item) => item.top);
        this.setData({ scrollTop: rects[sideBarIndex].top });
      })
      .exec();
  },
  onSideBarChange(e) {
    const { value } = e.detail;

    this.setData({ sideBarIndex: value, scrollTop: this.offsetTopList[value] });
  },
  onScroll(e) {
    const { scrollTop } = e.detail;
    const threshold = 50; // 下一个标题与顶部的距离

    if (scrollTop < threshold) {
      this.setData({ sideBarIndex: 0 });
      return;
    }

    const index = this.offsetTopList.findIndex((top) => top > scrollTop && top - scrollTop <= threshold);

    if (index > -1) {
      this.setData({ sideBarIndex: index });
    }
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
