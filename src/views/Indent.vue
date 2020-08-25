<template>
  <div class="box">
    <!--    头部导航条-->
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


    <!-- 订单中心  -->
    <div class="indent-box same-flex">
      <div class="indent-left-box">
        <img class="header-img" src="../assets/mmexport1580082034804.jpg" alt="">
        <div class="indent-id">12345</div>
        <div class="indent-member">开通会员</div>
        <div id="tabs" class="indent-btn-box">
          <div class="indent indent-focus">全部订单</div>
          <div class="indent">待付款</div>
          <!-- <div class="indent">待发货</div> -->
          <div class="indent">待收货</div>
          <div class="indent">待评价</div>
        </div>
      </div>
      <div class="indent-right-box">
        <div class="indent-title-box same-flex">
          <div class="commodity-list1">商品</div>
          <div class="same1">单价</div>
          <div class="same1">数量</div>
          <div class="same1">实付款</div>
          <div class="same1">商品操作</div>
          <div class="same1">交易状态</div>
          <div class="same1">交易操作</div>
        </div>
        <div id="content"></div>
        <div class="pageLimit-box">
          <ul id="pageLimit"></ul>
        </div>
      </div>
    </div>


    <!--    尾部导航条-->
    <div class="bottem-nav-box">
      <div class="row clearfix bottem">
        <!--        正品保障+购物指南-->
        <div class="col-md-12 column">
          <!--            图标+第一块文字-->
          <div class="bottem-text text1">
            <img src="../assets/WechatIMG90.png" alt="">
            <span>正品保障，提供发票</span><br><br>
            <br><span class="bottem-text-title">购物指南</span>
            <div class="bottem-text-content">
              <span>购物流程</span>
              <br><span>会员介绍</span>
              <br><span>生活旅行团购</span>
              <br><span>常见问题</span>
              <br><span>购物指南</span>
            </div>
          </div>
          <!--            图标+第二块文字-->
          <div class="bottem-text text1">
            <img src="../assets/WechatIMG90.png" alt="">
            <span>正品保障，提供发票</span><br><br>
            <br><span class="bottem-text-title">购物指南</span>
            <div class="bottem-text-content">
              <span>购物流程</span>
              <br><span>会员介绍</span>
              <br><span>生活旅行团购</span>
              <br><span>常见问题</span>
              <br><span>购物指南</span>
            </div>
          </div>
          <!--            图标+第三块文字-->
          <div class="bottem-text text1">
            <img src="../assets/WechatIMG90.png" alt="">
            <span>正品保障，提供发票</span><br><br>
            <br><span class="bottem-text-title">购物指南</span>
            <div class="bottem-text-content">
              <span>购物流程</span>
              <br><span>会员介绍</span>
              <br><span>生活旅行团购</span>
              <br><span>常见问题</span>
              <br><span>购物指南</span>
            </div>
          </div>
          <!--            图标+第四块文字-->
          <div class="bottem-text1 text1">
            <img src="../assets/WechatIMG90.png" alt="">
            <span>正品保障，提供发票</span><br><br>
            <br><span class="bottem-text-title">购物指南</span>
            <div class="bottem-text-content">
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
            <span>关于我们</span>
            <span>联系我们</span>
            <span>联系客服</span>
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
  export default {
    name: 'Indent'
  }
</script>

<style scoped>

</style>