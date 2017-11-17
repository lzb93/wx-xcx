//获取应用实例
var app = getApp()
Page({
  data: {
    arr: [
      { "arrimg": ['../../images/ddq.gif'], "arrtext": "精选" },
      { "arrimg": ['../../images/liwu.png'], "arrtext": "分享" },
      { "arrimg": ['../../images/shangshen.png'], "arrtext": "直播" },
      { "arrimg": ['../../images/kuaisu.png'], "arrtext": "爆款" }
    ],
   

    array: [1, 2, 3, 4, 5],
    // duration:"上衣",



    // 滑块
    userInfo: {},
    imgUrls: [
      '../../style/images/lunbo.png',
      '../../style/images/lunbo.png',
      '../../style/images/lunbo.png'
    ],
   
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    // 滑块end

   

    // 滑块轮播2

        "arrkuai1": [
          { "arrimg": ['../../style/images/lunbtwo1.png'], "arrtext": "茶籽系列","arrjiage":"188","arrhead":"Dr.Jene.NO.1+" },
          { "arrimg": ['../../style/images/lunbtwo2.png'], "arrtext": "祛痘系列","arrjiage":"198","arrhead":"Dr.Jene.NO.1+" },
          { "arrimg": ['../../style/images/lunbtwo3.png'], "arrtext": "敏感系列","arrjiage":"158","arrhead":"Dr.Jene.NO.1+"},
          { "arrimg": ['../../style/images/lunbtwo1.png'], "arrtext": "黑头系列","arrjiage":"178","arrhead":"Dr.Jene.NO.1+" }
        ],
        "arrkuai2": [
          { "arrimg": ['../../style/images/lunbtwo1.png'], "arrtext": "茶籽系列" ,"arrjiage":"168","arrhead":"Dr.Jene.NO.1+"},
          { "arrimg": ['../../style/images/lunbtwo2.png'], "arrtext": "祛痘系列","arrjiage":"118","arrhead":"Dr.Jene.NO.1+" },
          { "arrimg": ['../../style/images/lunbtwo3.png'], "arrtext": "敏感系列" ,"arrjiage":"128","arrhead":"Dr.Jene.NO.1+"},
          { "arrimg": ['../../style/images/lunbtwo1.png'], "arrtext": "黑头系列","arrjiage":"198","arrhead":"Dr.Jene.NO.1+" }
        ],
        "arrkuai3": [
          { "arrimg": ['../../style/images/lunbtwo1.png'], "arrtext": "茶籽系列","arrjiage":"98","arrhead":"Dr.Jene.NO.1+" },
          { "arrimg": ['../../style/images/lunbtwo2.png'], "arrtext": "祛痘系列","arrjiage":"178","arrhead":"Dr.Jene.NO.1+" },
          { "arrimg": ['../../style/images/lunbtwo3.png'], "arrtext": "敏感系列","arrjiage":"138","arrhead":"Dr.Jene.NO.1+" },
          { "arrimg": ['../../style/images/lunbtwo1.png'], "arrtext": "黑头系列","arrjiage":"108","arrhead":"Dr.Jene.NO.1+" }
    ],

    //  five商品数据
        fiveimg: [
          '../../style/images/qudou.png',
          '../../style/images/qudou.png',
          '../../style/images/qudou.png'
        ],



    items: [

    ],
 // 轮播样式
    slider: [  
    {picUrl: '../../style/images/icon/lbon.png'},  
    {picUrl: '../../style/images/icon/lbon.png'},  
    {picUrl: '../../style/images/icon/lbon.png'},  
    ],  
    swiperCurrent: 0,   
 // 轮播样式
  },

 swiperChange: function(e){  
    this.setData({  
        swiperCurrent: e.detail.current  
    })  
 },

  //  链接
  lunbo_one: function () {
    wx.navigateTo({
      url: '../search/search'
    })
  },
  lunbo_classify: function () {
    wx.navigateTo({
      url: '../classify/classify'
    })
  },
  mingxin_shop: function () {
    wx.navigateTo({
      url: '../del/del'
    })
  },
  bktj_shop: function () {
    wx.navigateTo({
      url: '../del/del'
    })
  },
  xilei_shop: function () {
    wx.navigateTo({
      url: '../del/del'
    })
  },

  //事件处理函数

  onPullDownRefresh: function () {
    // Do something when pull down.
    console.log('刷新');
  },

  onReachBottom: function () {
    // Do something when page reach bottom.
    console.log('circle 下一页');
  },

  onLoad: function () {
    var that = this
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: '10000'
    }),
      wx.request({
      url: 'https://www.wanshangtang.com:8443/home/api/wx_data',
        headers: {
          'Content-Type': 'application/json'
        },

        success: function (res) {
          console.log(res)
          that.setData({
            list: res.data,
            items: res.data
          })

        }
      })
  }




})
