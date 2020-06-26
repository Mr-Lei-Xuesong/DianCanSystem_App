var bmap = require('../../libs/bmap-wx.min.js');
var wxMarkerData = [];
const app = getApp()
Page({
    data: {
        markers: [],
        latitude: '',
        longitude: '',
        placeData: {}
    },
    aaa:function(){
        wx.navigateTo({
            url:"/pages/serch/serch"
          })
    },
    makertap: function(e) {
        var that = this;
        var id = e.markerId;
        that.showSearchInfo(wxMarkerData, id);
        that.changeMarkerColor(wxMarkerData, id);
    },
    onLoad: function() {
        var that = this;
        var BMap = new bmap.BMapWX({
            ak: 'FnwYXZc2ZYdX8cTKF4fygvixlPkf3ZPg'
        });
        var fail = function(data) {
            console.log(data)
        };
        var success = function(data) {
            wxMarkerData = data.wxMarkerData;
            that.setData({
                markers: wxMarkerData
            });
            that.setData({
                latitude: wxMarkerData[0].latitude
            });
            that.setData({
                longitude: wxMarkerData[0].longitude
            });
        }
        BMap.search({
            "query": '美食',
            fail: fail,
            success: success,
            // iconPath: '/images/首页1.png',
            // iconTapPath: '/images/首页.png'
        });
    },
    showSearchInfo: function(data, i) {
        var that = this;
        that.setData({
            placeData: {
                title: '名称：' + data[i].title + '\n',
                address: '地址：' + data[i].address + '\n',
                telephone: '电话：' + data[i].telephone
            }
        });
        getApp().globalData.dizhi=data[i].address;
    },
    changeMarkerColor: function(data, id) {
        var that = this;
        var markersTemp = [];
        for (var i = 0; i < data.length; i++) {
            // if (i === id) {
            //     data[i].iconPath = "/images/发现1.png";
            // } else {
            //     data[i].iconPath = "/images/发现.png";
            // }
            markersTemp[i] = data[i];
        }
        that.setData({
            markers: markersTemp
        });
    }
})