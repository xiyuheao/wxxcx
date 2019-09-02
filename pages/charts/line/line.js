//绘制速度和心率图

var myCharts = require('../../../utils/wxcharts.js');
var app = getApp();
var lineChart_speed = null;
var lineChart_heart_rate = null;

Page({
    data: {
    },

    //不太清楚这个函数的作用
    onPullDownRefresh: function () {
      console.log('onPullDownRefresh', new Date())
    },
    
    //鼠标移动到图表中央显示数值等信息
    touchHandler: function (e) {
        console.log(lineChart.getCurrentDataIndex(e));
        lineChart.showToolTip(e, {
            // background: '#7cb5ec',
            format: function (item, category) {
                return category + ' ' + item.name + ':' + item.data 
            }
        });
    },    

  
  //把拿到的数据转换成绘图插件需要的输入格式
  convert: function () {
    var categories = [];
    var speed = [];
    var heart_rate = [];
 

    //全局数据的一部分
    var length = app.globalData.speed.datapoints.length
    //数据压入
    for (var i =(length/10)-1; i >0 ; i--) {
      categories.push(String(Number(app.globalData.speed.datapoints[i * 10].at.slice(11, 13)) + 7) + app.globalData.speed.datapoints[i * 10].at.slice(13, 19));
      //categories.push('2019-' + (i + 1));
      speed.push(app.globalData.speed.datapoints[i*10].value);
      heart_rate.push(app.globalData.heart_rate.datapoints[i*10].value);
      //speed.push(app.globalData.speed);
      //heart_rate.push(app.globalData.heart_rate);
    }
    
    return {
      categories: categories,
      speed: speed,
      heart_rate: heart_rate
    }
  },

  //图表显示在界面上
  onLoad: function () {
    //先转换数据？
    var wheatherData = this.convert();

    //得到屏幕宽度
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      //异常处理
      console.error('getSystemInfoSync failed!');
    }

    //怎么又写了一遍
   // var wheatherData = this.convert();

    //新建速度图表
    lineChart_speed = new myCharts({
      canvasId: 'speed',
      type: 'line',
      categories: wheatherData.categories,
      animation: true,
      background: '#f5f5f5',
      series: [{
        name: 'speed',
        data: wheatherData.speed,
        //应该是一种格式
        format: function (val, name) {
          return val.toFixed(2);
        }
      }],
      xAxis: {
        disableGrid: true
      },
      yAxis: {
        title: 'speed',
        format: function (val) {
          return val.toFixed(2);
        },
        min: 0
      },
      width: windowWidth,
      height: 200,
      dataLabel: false,
      dataPointShape: true,
      extra: {
        lineStyle: 'curve'
      }
    });

    //新建心率图表
    lineChart_heart_rate = new myCharts({
      canvasId: 'heart_rate',
      type: 'line',
      categories: wheatherData.categories,
      animation: true,
      background: '#f5f5f5',
      series: [{
        name: 'heart_rate',
        data: wheatherData.heart_rate,
        format: function (val, name) {
          return val.toFixed(2);
        }
      }],
      xAxis: {
        disableGrid: true
      },
      yAxis: {
        title: 'heart_rate',
        format: function (val) {
          return val.toFixed(2);
        },
        min: 190
      },
      width: windowWidth,
      height: 200,
      dataLabel: false,
      dataPointShape: true,
      extra: {
        lineStyle: 'curve'
      }
    });

    }
});