//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    items: [],
    shops:shopapi.data
  },

  //事件处理函数
  onLoad: function () {
    var that = this
    wx.request({
      url: 'https://www.wanshangtang.com:8443/home/api/wx_data',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res)
        that.setData({
          items: res.data
        })
      }
    })
  }




})
