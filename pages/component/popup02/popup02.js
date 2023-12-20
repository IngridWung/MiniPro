// pages/component/popup02/popup02.js
Page({
  data: {
    showPopup: false,
    changedata:0
  },
  onLoad: function () {
  },
  /**
   * 弹窗
   */
  showDialogBtn: function() {
    this.setData({
      showPopup: true
    })
  },
  /**
   * 弹出框蒙层截断touchmove事件
   */
  preventTouchMove: function () {
  },
  /**
   * 隐藏模态对话框
   */
  hidePopup: function () {
    this.setData({
      showPopup: false
    });
  },
  inputData:function(e){
    console.log(e);
    console.log("input:",e.detail.value);
  },
//取消
  onCancel: function () {
    this.hidePopup();
  },
//确认
  onConfirm: function () {
    this.hidePopup();
  }
})