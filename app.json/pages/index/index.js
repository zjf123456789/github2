//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    number:0,
    isshow:true,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    //实现页面的跳转
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  cut:function(){
     this.setData({
       number:this.data.number-1
     })
  },
  //数据的增加函数
  add:function(){
     this.setData({
       number:this.data.number+1
     })
  },
  
  isshowFunc:function(){
    //  if(this.data.isshow){
    //    this.setData({
    //      isshow: false
    //    })
    //  }else{
    //    this.setData({
    //      isshow: true
    //    })
    //  }
    this.setData({
      isshow: !this.data.isshow
    })
  },
  //生命周期函数
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

    //设置延时器改变，要写在一个周期函数内部
    var self = this;
    setInterval(function () {
      self.setData({
        motto: "Jessica"
      })
    }, 3000)
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
