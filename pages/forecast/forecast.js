const util = require('../../utils/util.js')

var app = getApp();
Page({
  data: {
    region: '',
    date: '',
    start: '',
    end: '',
    foreCastData: '',
    nowData: ''
  },
  bindDateChange: function (e) {
    console.log(e);
    this.data.foreCastData.map(item => {
      if (item.date === e.detail.value) {
        this.setData({nowData: item});
      }
    })
  },
  getForeCastWeather: function () {
    wx.showLoading({ title: '获取数据中', });
    let _this = this;

    wx.request({
      url: 'https://free-api.heweather.net/s6/weather/forecast',
      data: {
        location: _this.data.region[1],
        key: 'd1f0be233dbc4a649c4918e6b1535c83'
      },
      success: function (res) {
        if (res.data.HeWeather6[0].status === "ok") {
          console.log(res.data);
          let index = res.data.HeWeather6[0].daily_forecast.length;
          _this.setData({
            end: res.data.HeWeather6[0].daily_forecast[index - 1].date,
            foreCastData: res.data.HeWeather6[0].daily_forecast,
            nowData: res.data.HeWeather6[0].daily_forecast[0]
          });
          wx.hideLoading();
        } else {
          wx.showToast({
            title: '数据获取失败',
            icon: 'none',
            duration: 2000
          })
        }
      }
    })
  },
  onLoad: function (options) {// 页面加载时只执行一次
    // this.setData({region: app.region});
    // this.setData({date: util.formatTime(new Date())});
    // this.getForeCastWeather();
  },
  onShow: function () {// 第一次加载时onShow()在onLoad()之后执行，之后只要打开页面都执行
    this.setData({
      region: app.region,
      date: util.formatTime(new Date()),
      start: util.formatTime(new Date())
    });
    this.getForeCastWeather();
  }
})