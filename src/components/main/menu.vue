<template>
    <ul class="main-menu">
        <li class="main-menu__link">
            <router-link to="/">Home</router-link>
        </li>
        <li class="main-menu__link">
            <router-link to="/about">About</router-link>
        </li>
        <li class="main-menu__link">
            <router-link to="/ever">What ever</router-link>
        </li>
    </ul>
</template>
<script>
  export default {};
</script>
<style lang="postcss">
    .main-menu {
        display: flex;
        padding: 30px;
        list-style-type: none;
        border: solid 1px #ccc;

        &.active {
            font-weight: bold;
        }

        &__link {
            margin-right: 10px;
            .router-link-exact-active {
                font-weight: bold;
            }
        }
    }
</style>
