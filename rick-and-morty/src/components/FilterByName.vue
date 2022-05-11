<template>
  <div class="search">
      <input 
        type="text" 
        placeholder="Busqueda por nombre" 
        v-model="name"
        @keyup="filter()">
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
    setup(){
        const store = useStore()
        const name = ref('')

        const filter = () => {
            store.dispatch('filterByName', name.value)
        }

        return {
            name,
            filter
        }        
    }
}
</script>

<style lang="scss">
    .search{
        width: 400px;
        margin: 3rem auto 0;
        input{
            height: 53px;
            width: 400px;
            border: none;
            border-radius: 10px;
            padding: 0 0.5rem;
        }
    }

    @media only screen and (max-width: 450px) {
        .search{
            width: 350px;
            input{
                width: 350px;
            }
        }
    }

    @media only screen and (max-width: 390px) {
        .search{
            width: 300px;
            input{
                width: 300px;
            }
        }
    }

    @media only screen and (max-width: 335px) {
        .search{
            width: 250px;
            input{
                width: 250px;
            }
        }
    }
</style>