<template>
  <div class="header-box">
    <div class="clearfix top">
      <div class="col-md-12">
        <span class="leftText">欢迎你！登入|<a>免费注册</a></span>
        <span class="rightText"><a>首页</a>|<a>我的订单</a>|<a>我的购物车</a>|<a>个人中心</a></span>
      </div>
      <div class="search">
        <img src="../assets/WechatIMG91.png" alt="">
        <span>
            <label>
              <input type="text"/>
            </label>
            <button>搜索</button>
          </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HeaderSearch'
  }
</script>

<style scoped>
  /*头部导航条主体*/
  .header-box {
    width: 100%;
    height: 37px;
    background-color: #eaeaea;
    margin-bottom: 130px;
  }

  .top {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
  }

  /*头部超链接文字*/
  .top span a {
    color: #0f0f0f;
    margin-left: 5px;
  }

  /*头部左侧超链接文字*/
  .leftText {
    float: left;
    width: 191px;
    height: 37px;
    line-height: 37px;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0;
    color: #000000;
  }

  /*头部右侧超链接文字*/
  .rightText {
    float: right;
    width: 251px;
    height: 37px;
    line-height: 37px;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0;
    color: #000000;
  }

  /*logo图片*/
  .search {
    width: 100%;
    height: 130px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .search img {
    width: 130px;
    height: 130px;
  }

  /*搜索框*/
  .search input {
    width: 400px;
    height: 27px;
  }

  /*搜索按钮*/
  .search button {
    width: 80px;
    height: 33px;
    background-color: #009fe6;
    border: solid 2px #009fe6;
  }
</style>