// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 视频详情
    videoInfo: null,
    // 推荐视频
    othersList: [],
    // 评论数据
    commentData: []

  },
  /**
   * 获取视频详细信息
   */
  getCurrenVideo(videoId) {
    let that = this;
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/videoDetail?id='+videoId,
      success(res) {
        console.log(res);
        // console.log(res.data);
        if (res.data.code===0) {
          that.setData({
            videoInfo: res.data.data.videoInfo
          })
        }
      }
    })
  },

  /**
   * 获取推荐视频列表
   */
  geiOthersList(videoId){
    let that = this;
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/otherList?id='+videoId,
      success(res){
        if(res.data.code===0){
          that.setData({
            othersList: res.data.data.otherList
          })
        }
      }
    })
  },

  /**
   * 获取视频的评论信息
   */
  getCommentList(videoId){
    let that = this;
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/commentList?id='+videoId,
      success(res){
        console.info(res);
        if(res.data.code===0){
          that.setData({
            commentData: res.data.data.commentData
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    // 接收点解视频后的id
    let videoId=options.id;
    // 获取视频的详细信息
    this.getCurrenVideo(videoId);
    // 获取推荐视频列表
    this.geiOthersList(videoId);
    // 获取评论列表
    this.getCommentList(videoId);
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