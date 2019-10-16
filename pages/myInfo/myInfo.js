// pages/stuInfo/stuInfo.js
var app = getApp()

Page({
  data: {
    stuInfo: '',
    isLoading: true,
  },
  onLoad: function() {
    var that = this;
    var stuInfo = wx.getStorageSync('stuInfo');
    that.setData({
      stuInfo: stuInfo
    })
  },
  onReady: function() {
    var that = this;
    setTimeout(function() {
      that.setData({
        isLoading: false
      });
    }, 2000);
  }
});