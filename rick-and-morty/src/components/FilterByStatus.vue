<template>
  <div class="filter">
      <div class="item" @click="filter('')">
        All
      </div>
      <div class="item" @click="filter('Alive')">
        Alive          
      </div>
      <div class="item" @click="filter('Dead')">
        Dead
      </div>
      <div class="item" @click="filter('unknown')">
        Unknown          
      </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
    setup() {
        const store = useStore()

        const filter = ((status) => {
            store.dispatch('filterByStatus', status)
        })

        return{
            filter
        }
    }
}
</script>

<style lang="scss">
    .filter{
        width: 400px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        border-radius: 10px;
        overflow: hidden;
        .item{
            padding: 1rem 0.5rem;
            background-color: var(--background-card);
            text-align: center;
            cursor: pointer;
            &:hover{
                color: var(--text-orange);
            }
        }
    }

        @media only screen and (max-width: 450px) {

          .filter{
              width: 350px;
          }
        }

        @media only screen and (max-width: 390px) {

          .filter{
            width: 300px;
            }
        }

    @media only screen and (max-width: 335px) {

        .filter{
            width: 250px;
        }
    }
</style>