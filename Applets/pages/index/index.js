var datarr = require('../../data/lunbotu.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    arr:""
  },
  funa(){
    wx.showLoading({
      title: '数据加载中',
      success() {
        setTimeout(() => {
          // 显示1秒后隐藏loading提示框
          wx.hideLoading()
        }, 1000)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(datarr.postList)
    this.setData({arr:datarr.postList})
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
        setTimeout(() => {
          // 停止下拉刷新
          wx.stopPullDownRefresh()
        }, 1000)  
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