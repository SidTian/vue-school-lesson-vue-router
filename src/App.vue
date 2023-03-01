<script setup>
</script>

<template>
    <TheNavigation />
    <div class="container">
        <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component" :key="$route.path"></component>
            </transition>
        </router-view>
    </div>
</template>

<script>
import TheNavigation from "@/components/TheNavigation.vue";
export default {
    components: { TheNavigation },
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s linear;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
