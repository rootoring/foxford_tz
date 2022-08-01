<template>
  <article>
        <div class="flex items-center border-b border-black w-full pb-3">
          <img class="inline-block h-20 mr-2 w-20 rounded-full" :src="list.owner.avatar_url" alt="">
          <div class="flex flex-col">
           <a :href="list.owner.html_url" class="text-xl hover:underline">{{list.owner.login}}</a>
           <p class="font-thin text-s">language:{{list.language}}</p>
           <span><i class="fas fa-star mr-2"></i>{{list.stargazers_count}}</span>
         </div>
        </div>

        <div class="flex flex-col  p-1 w-full h-full ml-2 justify-start">
          <a :href="list.html_url" class="text-3xl p-3 self-center hover:underline">{{list.name}}</a>
          <p class="mt-5">{{list.description}}</p>
        </div>
</article>
</template>

<script>
  export default{
    name:'Article-app',
    props:{
      list:{
        type:Object
      }
    },
  }
</script>