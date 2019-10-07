var datarr = require('../../data/lunbotu.js')
var dataobj=require("../../data/sort.js")
Page({
  /**
   * 页面的初始数据
   */
  data: {
    arr:"",
    obj:"",
    newarr:[],
    currentTab:0,
    bool:true,
    imgobj:""  
  },
  funa(e){
    // console.log(e)
    if (e){
      switch (e.currentTarget.dataset.id) {
        case 575:
          this.setData({
            currentTab: 0
          })
          break;
        case 582:
          this.setData({
            currentTab: 1
          })
          break;
        case 576:
          this.setData({
            currentTab: 2
          })
          break;
        case 577:
          this.setData({
            currentTab: 3
          })
          break;
        case 578:
          this.setData({
            currentTab: 4
          })
          break;
        case 579:
          this.setData({
            currentTab: 5
          })
          break;
        case 580:
          this.setData({
            currentTab: 6
          })
          break;
        case 581:
          this.setData({
            currentTab: 7
          })
          break;
      }
    }
      
    wx.showLoading({
      title: '数据加载中',
      mask:true,
    })
       setTimeout(() => {
         var id =0;
         if(e){
           id = e.currentTarget.dataset.id
         }else{
           id=575
         }
         var arr1 = this.data.obj.filter((v, i) => {
           if (v.id == id) {
             return v
           }
         })
         this.setData({
           newarr: arr1[0].data
         })
          wx.hideLoading()
        }, 1000)
  },
  funb(){
    this.setData({
      bool:!this.data.bool
    })
  },
  // 首页商品列表跳转到商品详情
  fune(e){
    wx.navigateTo({
      url: '../detail/detail?id=' + e.currentTarget.dataset.id,
    })
    console.log(e.currentTarget.dataset.id)
  },
  // 首页轮播图的点击事件
  funxq(e){
    // console.log(e)
    var idImg = e.currentTarget.dataset.imgid
    var imgobj=this.data.arr.filter((v,i)=>{
      if (v.id == idImg){
        return v
      }
    })
    // console.log(imgobj[0].image)
    wx.previewImage({
    current: 'imgobj[0].image',
    urls: [imgobj[0].image]
  })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({arr:datarr.postList})
    // console.log(dataobj.titList)
    this.setData({ obj: dataobj.titList.items })
    this.funa()
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