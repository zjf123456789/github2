// pages/微信/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array:[
      {
        image:"../../public/icons/weixin-a.png",
        info:"文虎架子按下总群"
      },
      {
        image: "../../public/icons/call-a.png",
        info: "服务通知"
      },
      {
        image: "../../public/icons/09.png",
        info: "订阅号"
      },
       {
        image: "../../public/icons/ww-1.png",
        info: "微信团队"
      },
       {
         image: "../../public/icons/we.png",
         info: "H51709A"
       },
       {
         image: "../../public/icons/ee.png",
         info: "在一起"
       },
       {
         image: "../../public/icons/zz.png",
         info: "微信支付"
       },
       {
         image: "../../public/icons/05-s.png",
         info: "微信游戏"
       }
    ]
    
  },
  turn:function(){
    console.log('turn...ss')
     wx.navigateTo({
       url: '../call/logs',
     })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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