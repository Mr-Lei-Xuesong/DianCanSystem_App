// pages/login/login.js

const app = getApp()
Page({

  onShareAppMessage() {
    return {
      title: 'form',
      path: 'page/component/pages/form/form'
    }
  },
  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },

  formReset(e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value)
    this.setData({
      chosen: ''
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    password: '',
    check:0
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: 'pages/home/home'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.request({
    //   url: 'http://localhost:10086/home/banner', //仅为示例，并非真实的接口地址
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success (res) {
    //     console.log(res.data); // 输出到小程序客户端
    //   }
    // })
  },
  //获取输入账号
  usernameInput: function (e) {
   // console.log(e.detail.value)
    this.setData({
      username: e.detail.value
    })

  },
   //获取输入密码
   passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  niming:function(e){
    if (e.detail.value =='') {
      this.setData({
        check: 0
      })
     
    }
    else {
     
      this.setData({
        check: 1
      })
     
    }
     
   },
    
 
  login: function () {
    var that = this;
    if(this.data.check==0)
    {
      wx.showToast({
        title: '没同意遵守协议',
        icon: 'none',
        duration: 2000
      })
    }
    else if (this.data.username.length == 0 || this.data.password.length == 0 ) {
      wx.showToast({
        title: '账号或密码不能为空',
        icon: 'none',
        duration: 2000
      })
    } else {
      wx.request({
        url: 'http://localhost:8080/user/login', // 仅为示例，并非真实的接口地址
        method: 'post',
        data: {
          username: that.data.username,
          password: that.data.password,
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded' // 默认值
        },
        success(res) {
          if (res.data.code=="200") {
            
            console.log(res.data.user);
            getApp().globalData.userinfo=res.data.user;

               wx.switchTab({
                 url:"/pages/home/home",
               })
            
          } else {
            wx.showToast({
              title:"账号或密码错误",
              icon: 'none',
              duration: 2000
            })
          }
        }
      })
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