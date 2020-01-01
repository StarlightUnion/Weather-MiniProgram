var app = getApp();
Page({
  data: {
    region: ['浙江省', '杭州市', '萧山区'],
    now: '',
    imgUrl: '../../images/weather/999.png'
  },
  changeRegion: function (e) {
    this.setData({
      region: e.detail.value,
    });
    app.region = e.detail.value;
    this.getWeather();
  },
  getWeather: function () {
    wx.showLoading({ title: '获取数据中', });
    let _this = this;

    wx.request({
      url: 'https://free-api.heweather.net/s6/weather/now',
      data: {
        location: _this.data.region[1],
        key: 'd1f0be233dbc4a649c4918e6b1535c83'
      },
      success: function (res) {
        if (res.data.HeWeather6[0].status === "ok") {
          // console.log(res.data);
          _this.setData({
            now: res.data.HeWeather6[0].now,
            imgUrl: '../../images/weather/' + res.data.HeWeather6[0].now.cond_code + '.png'
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
  onLoad: function (options) {
    this.getWeather();
    app.region = this.data.region;// 全局变量
  }
})