Page({

    data: {

    },



    //重点！！！
    getDataFromOneNet: function () {
      //从oneNET请求速度和心率的数据
      const requestTask = wx.request({
        url: 'http://api.heclouds.com/devices/543077217/datapoints?datastream_id=speed,heart_rate&limit=500&end+duration',
        header: {
          'content-type': 'application/json',
          'api-key': 'k35=kCF6xN6O1LpPGKUEkgocS38='
        },
        success: function (res) {
          //console.log(res.data)
          //拿到数据后保存到全局数据
          var app = getApp()
          app.globalData.speed = res.data.data.datastreams[1]
          app.globalData.heart_rate = res.data.data.datastreams[0]
         
          console.log(app.globalData)
          //跳转到天气页面，根据拿到的数据绘图
          wx.navigateTo({
            url: '../charts/line/line',
          })
        },

        fail: function (res) {
          console.log("fail!!!")
        },

        complete: function (res) {
          console.log("end")
        }
      })


  },







    onLoad: function() {

    }
})