<template>
  <nav class="navbar px-2 py-3 navbar-expand-lg navbar-light text-light bg-primary fixed-left flex-column w-25">
    <h2>Post</h2>
    <div class="collapse navbar-collapse">
        <ul class="navbar-nav flex-column p-3">
            <span class="nav-item">
                <router-link  to="" class="nav-link text-light">All Articles</router-link>
            </span>
            <span class="nav-item">
                <router-link  to="" class="nav-link text-light">New Articles</router-link>
            </span>
        </ul>
    </div>
  </nav>
</template>

<script>
export default {
    name:'menubarPage',
}
</script>

<style scoped>
.navbar{
    height: 100vh;
    align-items: start;
    text-align: left;
}
.collapse{
    align-items: start;
}
.nav-item{
    text-align: left;
}

</style>