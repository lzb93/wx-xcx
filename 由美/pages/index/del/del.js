Page({
  data: {
    arts: {},
  },



  onLoad(options) {
    var that = this
    wx.request({
      url: 'https://www.wanshangtang.com:8443/home/api/wx_data/aid/' + options.id,
      headers: {
        'Content-Type': 'application/json'
      },
      success(res) {
        that.setData({
          arts: res.data[0],


        })

      }

    })
  }


})