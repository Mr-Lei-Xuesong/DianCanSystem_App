// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    businfo:[],
    moneySum:0,
  },

  containerTap: function (res) {
    console.log(res.touches[0]);
    var x = res.touches[0].pageX;
    var y = res.touches[0].pageY + 85;
    this.setData({
      rippleStyle: ''
    });
    this.setData({
      rippleStyle: 'top:' + y + 'px;left:' + x + 'px;-webkit-animation: ripple 0.4s linear;animation:ripple 0.4s linear;'
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    var busname1 = options.busname;
   // console.log(busname);
    wx.request({
      url: 'http://localhost:8080/home/diancan',
      data:{
          busname:busname1,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      method:"POST",
      success(res){
         //console.log(res.data);
          var infos=_this.data.businfo.concat(res.data.businfo);  //返回的商家所有信息
          //console.log(infos);
          //console.log(infos);
          //console.log(infos[0].sdes);
         _this.setData({  //对小程序的变量进行赋值
           businfo:infos,
          })
        }
    })
  },

  getMoney: function(e){ 
     var _this = this;
     var  moneySum = _this.data.moneySum+e.currentTarget.dataset.money;
      this.setData({
          moneySum:moneySum,
      })
   
  },

  godingdan: function(){
    var app = getApp();
    var _this = this;
    getApp().globalData.diancan=[];
    getApp().globalData.diancan=_this.data.businfo;
    console.log(getApp().globalData.diancan);
    getApp().globalData.qian=_this.data.moneySum;
    if(this.data.moneySum==0){
      wx.showToast({
        title: '请添加商品',
        icon: 'none',
        duration: 2000,
      })
    }else {
      wx.showToast({
        title: '支付成功',
        icon: 'none',
        duration: 2000,
        image:"/images/支付成功.png"
      })
      setTimeout(function () {
        wx.switchTab({ 
          url: '/pages/dingdan/dingdan'
        })
      }, 1000) 
    }
    
    
    
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