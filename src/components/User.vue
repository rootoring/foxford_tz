<template>
  <div>
    <div class="flex items-center  w-full pb-3">
      <img class="inline-block h-20 mr-2 w-20 rounded-full" :src="list.avatar_url" alt="">    
       <div class="flex flex-col">   
        <a :href="list.html_url" class="text-xl">{{list.login}}</a>          
    </div>     
  </div>             
</div>
</template>

<script>
  export default{
    name:'User-app',
    props:{
      list:{
        type:Object
      }
    },
  }
</script>