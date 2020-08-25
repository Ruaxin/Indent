<template>
  <div class="box">
    <!--    头部导航条-->
    <HeaderSearch/>
    <!-- 订单中心  -->
    <IndentBox/>
    <!--    尾部导航条-->
    <div class="bottom-nav-box">
      <div class="row clearfix bottom">
        <!--        正品保障+购物指南-->
        <div class="col-md-12 column">
          <!--            图标+第一块文字-->
          <div class="bottom-text text1">
            <img src="../assets/WechatIMG90.png" alt="">
            <span>正品保障，提供发票</span><br><br>
            <br><span class="bottom-text-title">购物指南</span>
            <div class="bottom-text-content">
              <span>购物流程</span>
              <br><span>会员介绍</span>
              <br><span>生活旅行团购</span>
              <br><span>常见问题</span>
              <br><span>购物指南</span>
            </div>
          </div>
          <!--            图标+第二块文字-->
          <div class="bottom-text text1">
            <img src="../assets/WechatIMG90.png" alt="">
            <span>正品保障，提供发票</span><br><br>
            <br><span class="bottom-text-title">购物指南</span>
            <div class="bottom-text-content">
              <span>购物流程</span>
              <br><span>会员介绍</span>
              <br><span>生活旅行团购</span>
              <br><span>常见问题</span>
              <br><span>购物指南</span>
            </div>
          </div>
          <!--            图标+第三块文字-->
          <div class="bottom-text text1">
            <img src="../assets/WechatIMG90.png" alt="">
            <span>正品保障，提供发票</span><br><br>
            <br><span class="bottom-text-title">购物指南</span>
            <div class="bottom-text-content">
              <span>购物流程</span>
              <br><span>会员介绍</span>
              <br><span>生活旅行团购</span>
              <br><span>常见问题</span>
              <br><span>购物指南</span>
            </div>
          </div>
          <!--            图标+第四块文字-->
          <div class="bottom-text1 text1">
            <img src="../assets/WechatIMG90.png" alt="">
            <span>正品保障，提供发票</span><br><br>
            <br><span class="bottom-text-title">购物指南</span>
            <div class="bottom-text-content">
              <span>购物流程</span>
              <br><span>会员介绍</span>
              <br><span>生活旅行团购</span>
              <br><span>常见问题</span>
              <br><span>购物指南</span>
            </div>
          </div>
          <div class="erweima"></div>

        </div>
        <!--        底部介绍-->
        <div class="col-md-12 column footer">
          <ul>
            <span>关于我们&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</span>
            <span>联系我们&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</span>
            <span>联系客服&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</span>
            <span>营销中心</span>
          </ul>
          <ul>
            <span>地址：浙江省宁波市鄞州区柏庭养老管理集团主楼5楼 邮编：31500 电话00-000000000 邮箱：bangjifans.com</span>
          </ul>
          <ul>
            <span>京ICP备08001421号京公网安备110108007702</span>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderSearch from '@/components/HeaderSearch.vue'
  import IndentBox from '@/views/Indent/IndentBox.vue'

  export default {
    name: 'Indent',
    components: {IndentBox, HeaderSearch},
  }
</script>

<style scoped>
  .bottom-nav-box {
    width: 100%;
    height: 480px;
    background-color: #eaeaea;
    margin-top: 60px;
    position: relative;
  }

  .bottom {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
  }

  .bottom-text {
    float: left;
    display: inline-block;
    margin-right: 98px;
    margin-top: 44px;
  }

  .bottom-text1 {
    float: left;
    display: inline-block;
    margin-top: 44px;
  }

  .bottom-text-content {
    margin-left: 60px;
    margin-top: 20px;
  }

  .bottom-text-title {
    width: 88px;
    height: 23px;
    font-size: 24px;
    line-height: 22px;
    letter-spacing: -2px;
    color: #000000;
    margin-left: 53px;
  }

  /*二维码*/
  .erweima {
    width: 124px;
    height: 124px;
    background-color: #ffffff;
    float: right;
    margin-right: -16px;
    margin-top: -100px;
  }

  /*底部文字*/
  .footer {
    margin-top: 360px;
    display: flex;
    color: black;
    position: absolute;
    flex-direction: column;
    left: 50%;
    transform: translateX(-60%);
  }

  .footer ul {
    text-align: center;
    margin: 6px;
  }

  .footer ul span {
    margin-left: 40px;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 22px;
    letter-spacing: 0;
    color: #000000;
  }
</style>