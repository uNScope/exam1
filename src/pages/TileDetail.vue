<template>
    <div class="tile-detail">
        <img class="tile-detail__image" src="https://placebear.com/395/200" alt="">
        <h1 class="tile-detail__title">{{ tile.title }}</h1>
        <div class="tile-detail__detail">{{ tile.text }}</div>
    </div>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
    data() {
      return {
        tile: false
      }
    },
    computed: {
      ...mapGetters([
        'getTileById'
      ])
    },
    created() {
      let id = this.$route.params.id;
      let tile = this.getTileById(id);

      if (!tile)
        return false;

      this.$data.tile = tile;
    }
  };
</script>
<style lang="postcss">
    .tile-detail {
        overflow: auto;
        padding-bottom: 15px;

        &__image {
            float: left;
            margin-right: 15px;
            margin-bottom: 15px;
        }

        &__title {
            margin-bottom: 15px;
        }
    }
</style>
