<template>
  <view class="index">
    <view><headerCommon title="index"></headerCommon></view>
    <Counter />
    <view><mp-icon-i icon="add"></mp-icon-i></view>
    <button @click="buttonClick">goto 白屏页 (/packages/test/pages/icon/icon)</button>
  </view>
</template>

<script setup lang="ts">
import Taro from "@tarojs/taro";
import Counter from "../../components/Counter.vue";
import headerCommon from "@/components/headerCommon/headerCommon.vue";

const buttonClick = () => {
  Taro.navigateTo({
    url: "/packages/test/pages/icon/icon",
  });
};
</script>
