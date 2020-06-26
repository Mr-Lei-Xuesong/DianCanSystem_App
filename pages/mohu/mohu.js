// pages/mohu/mohu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      businfo:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
        console.log(options.busname);
        var _this= this;
        wx.request({
          url: 'http://localhost:8080/search/bus', // 仅为示例，并非真实的接口地址
          method: 'post',
          data: {
             busName:options.busname
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded' // 默认值
          },
          success(res) {
            console.log(res)
            var businfos=_this.data.businfo.concat(res.data);  //返回的商家所有信息
            if(businfos.length==0){
              wx.showToast({
                title:"非常遗憾 没用此类商家",
                icon: 'none',
                duration: 2000
              })
            }
            _this.setData({  //对小程序的变量进行赋值
                 businfo:businfos,
            })  
          }
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