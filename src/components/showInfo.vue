<template>
  <table class="table">
  
  <tbody>
    <tr>
      <th scope="row">showArticle.id</th>
      <td> shownArticle.title</td>
      <td> shownArticle.author</td>
      <td> shownArticle.tags</td>
      <td> shownArticle.excerpt</td>
      <td>shownArticle.date</td>
    </tr>

  </tbody>
</table>
</template>

<script>

import axios from "axios"

export default {
    name:'showInfo',

    setup(){
        function getArticles(){
            axios.get('https://api.realworld.io/api/users/articles')
            .then(function (response) {
    // handle success
              console.log(response);
             })
            .catch(function (error) {
    // handle error
              console.log(error);
            })
        }
        getArticles();
    }
}
</script>

<style>

</style>