<template>
<main class="flex p-4 flex-col">

  <div class="flex w-full  items-center ">
    <input class="bg-transparent placeholder-opacity-50 placeholder-gray-500 mb-4 md:mr-5 md:mb-0 backdrop-blur-3xl rounded-xl  shadow-[0_35px_60px_-15px_rgba(0,0,0,.5)]  px-5 py-5 w-full md:w-1/2 focus:outline-none " type="text" :placeholder="`Введите  ${filterStatus==='repositories' ? 'название репозитория' : 'имя'} `" v-model="inputText">

    <select v-model="filterStatus" class="bg-transparent px-1 py-2 shadow-xl rounded-xl px-5 items-center md:w-auto w-64 hover:">
        <option value="repositories" selected>Репозитории</option>
        <option value="users" >Пользователи</option>
    </select>
  </div>

  <transition-group name="list" tag="div">
    <component :is="isActiveComponent" class="transition-all hover:scale-110 rounded w-full md:w-auto
    flex flex-col items-start mb-8 md:mr-5 backdrop-blur-3xl shadow-2xl
    p-5" v-for="list of lists" :key="list.id" :list="list"></component>
  </transition-group>

</main>
</template>

<script>

import Article from "../components/Article"
import User from "../components/User"
//IMPORT Store
import {useRepositoryStore} from '../store/index.js'

import { ref, computed, watch } from 'vue'

//IMPORT _  для работы c debounce
import _ from 'lodash';

export default {
  name: 'HomeView',

  components:{
    Article,
    User
  },  

  setup () {

    const store = useRepositoryStore();

    // v-model для input
    const inputText = ref('')

    //Список найденых репозиториев/пользователей 
    const lists = computed(() => store.array.items);


    //Следим за изменениями в Input и используем debounce
    watch(inputText, _.debounce((newValue) => {

      store.fechRep(newValue) 

    }, 500 ))


    // v-model для select
    const filterStatus = ref("")

    //Следим за изменениями в select 
    watch(filterStatus, () =>{
      //очищаем input и массив в store
      store.array = []
      inputText.value=''

      //присваиваем store.statusSearch новое значение filterStatus.value
      store.statusSearch = filterStatus.value;
    });


    //computed для отабражения активного компонента
    const isActiveComponent = computed(() => filterStatus.value ==='repositories'? 'Article' : 'User')

    return {
    lists,
    inputText,
    filterStatus,
    isActiveComponent
    }
},



}
</script>
<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all .6s ease;
}
.list-enter,.list-leave-to {
 opacity: 0;
  transform: translateX(50px);
}   

div{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
}     
  
input{}  
</style>