// pages/serch/serch.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
     busname:'',
     wupinname:'',
     dizhi:""
  },

  value:function(e){
    if(e.detail.value.length!=0){
       this.setData({
         busname: e.detail.value
       })
    }
  },

  dinwei:function(){
    wx.navigateTo({
      url:"/pages/dinwei/dinwei"
    })
  },
  hot:function(e){
    console.log( e.currentTarget.dataset.value);
    this.setData({
      wupinname: e.currentTarget.dataset.value,
    })
  },
  serch:function(e){
    var buname2 =  e.currentTarget.dataset.name;
    if (this.data.busname.length == 0) {
      if(buname2.length!=0){
        wx.navigateTo({
          url:"/pages/mohu/mohu?busname="+buname2,
        })
      }else{        
      wx.showToast({
        title: '输入不能为空',
        icon: 'none',
        duration: 2000
      })
    }
    } else {
    var that = this;
    console.log(that.data.busname);
    wx.navigateTo({
      url:"/pages/mohu/mohu?busname="+that.data.busname,
    })
  }
  },
  zuo:function(){
    wx.switchTab({
      url:"/pages/home/home"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      wupinname: options.name,
      dizhi: getApp().globalData.dizhi,
    })
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