Page({

  /**
   * 页面的初始数据
   */
  data: {
    width: '100%',
    height: '',
    coder: [{
      avatar: 'https://z4a.net/images/2019/06/22/_20180513195821.th.jpg',
      nickName: 'Airmole'
    }, {
      avatar: 'https://z4a.net/images/2019/10/16/_20191016135620.th.jpg',
      nickName: '网金1804柴锐'
    }],
    servicer: [{
      avatar: 'https://z4a.net/images/2019/06/22/_20180513195821.th.jpg',
      nickName: 'Airmole'
    }, {
      avatar: 'https://z4a.net/images/2019/10/16/_20191016135620.th.jpg',
      nickName: '网金1804柴锐'
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    that.setData({
      width: wx.getSystemInfoSync().windowWidth * 0.9 + 'px',
      height: wx.getSystemInfoSync().windowWidth * 0.9 * 0.5625 + 'px'
    })
    wx.pageScrollTo({
      scrollTop: 1600,
      duration: 4000,
    })
    setTimeout(function() {
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 300,
      })
    }, 4000);
  },
  copyID: function() {
    wx.setClipboardData({
      data: 'wxf0ba93e3faff4eda'
    })
    wx.showToast({
      title: '已复制到粘贴版',
      duration: 1000
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  goShellBox: function() {
    wx.navigateToMiniProgram({
      appId: 'wxf0ba93e3faff4eda',
      path: 'pages/bookSearch/index',
      success(res) {
        // 打开成功
      }
    })
  },
  joinQQGroup:function(){
    wx.previewImage({
      current: 'https://z4a.net/images/2019/10/16/TIM20191016143127.jpg', // 当前显示图片的http链接
      urls: ['https://z4a.net/images/2019/10/16/TIM20191016143127.jpg'] // 需要预览的图片http链接列表
    })
  }
})