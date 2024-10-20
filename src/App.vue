<template>
  <router-view v-slot="propsSlot">
    <transition mode="out-in">
      <component :is="propsSlot.Component"></component>
    </transition>
  </router-view>
</template>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 62.5%;
}
body{
  overflow: hidden;
}
.v-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
  transform: translateY(0px);
}

.v-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.v-enter-active,
.v-leave-active {
  transition: .5s ease-in-out;
}
</style>
