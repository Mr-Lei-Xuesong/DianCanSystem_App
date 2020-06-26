// pages/home/home.js
const app = getApp();
Page({

  diancan:function(e){
    wx.navigateTo({
      url:"/pages/diancan/diancan?busname="+e.currentTarget.dataset.name,
    })
  },
  serch:function(){
    wx.navigateTo({
      url:"/pages/serch/serch"
    })
  },
  godingdan:function(){
    wx.switchTab({
      
      url:"/pages/dingdan/dingdan",
      
    })

  },
  
  /**
   * 页面的初始数据
   */
  data: {
    banner:[], //定义变量,存储后台返回数据-广告地址
    info:[] ,//定义商家图片
    username:[], //用户名
    display:'none',
    count:1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     
  },

  // 我要点餐
  golist: function() {
    wx.navigateTo({
      url: '/pages/diancan/diancan?busname='+"肯德基"
    })
  },
   // 跳转定位
   godinwei: function() {
    wx.navigateTo({
      url: '/pages/dinwei/dinwei',
    })
  },
  // 获取热搜值
  govalue: function(e) {
    wx.navigateTo({
      url: '/pages/serch/serch?name='+ e.currentTarget.dataset.value,
    })
  },
  // 添加隐藏
  hid: function() {
    this.data.count= this.data.count+1;
    if(this.data.count %2==0){
      this.setData({
        display:'flex',
       })
    }else {
      this.setData({
        display:'none',
       })
    }
   
    console.log(this.data.display)
    },
  // 我要扫一扫
  sao: function() {
    var _this = this;
    // 允许从相机和相册扫码
    wx.scanCode({
      success (res) {
        var  busname = res.result;
        wx.navigateTo({
          url: '/pages/diancan/diancan?busname='+busname
        })    
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var _this = this;
    wx.request({
      url: 'http://localhost:8080/home/init',
      header:{
        'content-type':'application/json'
      },
      method:"POST",
      success(res){
         // console.log(res.data);
          var infos=_this.data.info.concat(res.data.businfo);  //返回的商家所有信息
          //console.log(infos);
         _this.setData({  //对小程序的变量进行赋值
            banner:res.data.banner,
            info:infos,
          })
        }
    })
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