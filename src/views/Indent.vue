<template>
  <div class="box">
    <!--    头部导航条-->
    <HeaderSearch/>
    <!-- 订单中心  -->
    <IndentBox/>
    <!--    尾部导航条-->
    <FootBox/>
  </div>
</template>

<script>
  import HeaderSearch from '@/components/HeaderSearch.vue'
  import IndentBox from '@/views/Indent/IndentBox.vue'
  import FootBox from '@/components/FootBox.vue'

  export default {
    name: 'Indent',
    components: {FootBox, IndentBox, HeaderSearch},
  }
</script>
