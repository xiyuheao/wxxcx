// pages/web/web.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //轮播图的数据
    swiperList: []
  },

  godingxiang: function () {
    wx.navigateTo({
      url: '../web/dingxiang/dingxiang'
    })
  },

  goheartrate: function () {
    wx.navigateTo({
      url: '../web/heartrate/heartrate'
    })
  },

  gorunpost: function () {
    wx.navigateTo({
      url: '../web/runpost/runpost'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //获取轮播图数据



  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {godingxiang

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})