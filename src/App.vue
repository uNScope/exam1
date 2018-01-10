<template>
    <div class="app-layout">
        <main-menu></main-menu>
        <router-view></router-view>
    </div>
</template>
<script>
  import MainMenu from './components/main/menu.vue';

  export default {
    components: {
      MainMenu
    }
  };
</script>
<style lang="postcss">
    .app-layout {
        border: solid 1px #ccc;
        padding: 0px 15px;
    }

    a {
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }

    .grid {
        display: flex;
        flex-wrap: wrap;
        margin-left: -15px;

        @media (max-width: 479px) {
            display: block;
            margin-left: 0px;
        }

        &__col {
            display: inline-block;
            box-sizing: border-box;
            margin-left: 15px;
            margin-bottom: 15px;
            &--third {
                flex: 1 1 calc(33.333% - 15px);
                max-width: calc(33.333% - 15px);

                @media (max-width: 1024px) {
                    flex: 1 1 calc(50% - 15px);
                    max-width: calc(50% - 15px);
                }
            }
            &--half {
                flex: 1 1 calc(66.666% - 15px);
                max-width: calc(66.666% - 15px);

                @media (max-width: 1024px) {
                    flex: 1 1 calc(100% - 15px);
                    max-width: calc(100% - 15px);
                }

            }
            @media (max-width: 479px) {
                display: block;
                max-width: 100%;
                margin-left: 0px;
            }
        }
    }
</style>
