<template>
<div>
<a v-link="{ path: '/about'}">about</a>
<router-view class="view" transition="test" transition-mode="out-in" keep-alive>
</router-view>
   
</div>
</template>
<script>
    export default {
      data () {
        return {
          authenticating: true
        }
      }
    }
</script>










