var app = getApp();
Page({
  data: {
    region: ''
  },
  onLoad: function (options) {
    
  },
  onShow: function () {
    let region = app.region;
    this.setData({region: region});
  }
})