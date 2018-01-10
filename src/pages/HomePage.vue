<template>
    <div class="grid">
        <div v-for="tile in tiles"
             class="tile grid__col"
             v-bind:class="{
                'grid__col--third': tile.type == 'normal',
                'grid__col--half': tile.type == 'double'
             }"
        >
            <div class="tile__overlay"
                 style="background-image: url('https://placebear.com/395/200')">
            </div>
            <router-link :to="{ name: 'TileDetail', params: { id: tile.id }}" class="tile__wrap">
                <div class="tile__title">{{tile.title}}</div>
                <div class="tile__description">{{tile.description}}</div>
            </router-link>

        </div>
    </div>
</template>
<script>
  import { mapActions, mapState } from 'vuex'

  export default {
    computed: mapState([
      'tiles'
    ]),
    methods: {
      ...mapActions([
        'loadTiles'
      ])
    },
    created() {
      this.loadTiles();
    }
  };
</script>
<style lang="postcss">
    .tile {
        position: relative;
        height: 250px;
        padding: 20px;
        border: solid 1px #ccc;
        display: flex;
        align-items: center;

        a {
            color: white;
        }

        &__title, &__description {
            position: relative;
            z-index: 2;
            margin-bottom: 10px;
        }

        &__title {
            font-size: 18px;
            font-weight: bold;
        }

        &__overlay, &::after {
            position: absolute;
            left: 5px;
            top: 5px;
            right: 5px;
            bottom: 5px;
        }
        &__overlay {
            background-size: cover;
            background-position: center;
            z-index: -1;
        }
        &::after {
            content: '';
            background: rgba(0, 0, 0, 0.5);
            z-index: 0;
        }
    }
</style>
