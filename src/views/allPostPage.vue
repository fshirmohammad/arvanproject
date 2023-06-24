<template>
  <header-page></header-page>
  <div class="body-container  h-100 d-flex flex-row">
      <menubar-page></menubar-page>
      <div class="container p-4">
          <h1 class="text-black">All Posts</h1>
          <div class="row bg-subtle p-2">
              <div class="col-md-2"> #</div>
              <div class="col-md-2"> Title</div>
              <div class="col-md-2"> Author</div>
              <div class="col-md-2"> Tags</div>
              <div class="col-md-2"> Excerpt</div>
              <div class="col-md-2"> Created</div>
          </div>
        <show-info></show-info>
          <div id="table-body"></div>
      </div>
  </div>

</template>

<script>
import headerPage from '@/components/headerPage.vue'
import menubarPage from '@/components/menubarPage.vue'
import showInfo from '@/components/showInfo.vue'

export default {
    name:'allPostPage',
    components:{
        headerPage,
        menubarPage,
        showInfo,
    }

}
</script>


<style scoped>
.row {
background-color: gray;
color: black;

}
</style>