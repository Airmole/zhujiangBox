// pages/index/reset.js
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    jsonStr: '',
    PreInfo: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    if (Object.keys(options.to) == 0) {
      wx.redirectTo({
        url: '/pages/index/index'
      })
      return;
    }
    var scoreCache = wx.getStorageSync('p19Score');
    if (options.to == 'score') {
      that.setData({
        toPage: '/pages/score/score'
      })
      if (scoreCache != '' && options.update == '1') {

      } else if (scoreCache.code == '200' && options.update == '0') {
        wx.redirectTo({
          url: '/pages/score/score',
        })
      }
    } else {
      wx.redirectTo({
        url: '/pages/index/index'
      })
    }

    that.getVcode();
  },
  getVcode: function() {
    var that = this;
    wx.request({
      url: 'https://api.airmole.cn/zhujiangBox/getCookie.php',
      success: function(res) {
        console.log(res.data);
        that.setData({
          PreInfo: res.data,
        })
        if (res.data.code == 500) {
          wx.showToast({
            title: '教务异常，无法查询',
            icon: 'none',
            duration: 5000
          });
        }
      }
    });
  },
  submitInfo: function(e) {
    wx.showToast({
      title: "loading...",
      icon: "loading",
      duration: 10000
    })
    var that = this;
    var username = wx.getStorageSync('uid');
    var password = wx.getStorageSync('newpwd');
    var vcode = e.detail.value.vcode;
    if (vcode == '' || vcode.length != 4) {
      wx.showToast({
        title: '验证码有误',
        image: '/images/info.png',
        icon: 'none',
        duration: 1000
      });
      return;
    } else {
      wx.redirectTo({
        url: that.data.toPage + '?cookie=' + that.data.PreInfo.cookie + '&vcode=' + vcode + '&update=1',
      })
    }
  },
})