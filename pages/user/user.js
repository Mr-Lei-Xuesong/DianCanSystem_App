// pages/user/user.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      userinfo:'', //用户所用信息
      username:'',//用户名字
  },
  todizhi: function (e) {
    wx.navigateTo({
      url: '/pages/next/dizhi/dizhi'
    });
  },
  topingjia: function (e) {
    wx.navigateTo({
      url: '/pages/next/pingjia/pingjia'
    });
  },
  tokefu: function (e) {
    wx.navigateTo({
      url: '/pages/next/kefu/kefu'
    });
  },
  tofankui: function (e) {
    wx.navigateTo({
      url: '/pages/next/fankui/fankui'
    });
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    _this.setData({  //对小程序的变量进行赋值
      userinfo:getApp().globalData.userinfo,
      username:getApp().globalData.userinfo.username,
    })
    console.log(_this.data.username);

  },

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
  onPullDownRefresh: function () {

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