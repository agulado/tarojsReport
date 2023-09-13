<template><mp-navigation-bar :title="title"></mp-navigation-bar></template>

<script lang="ts" setup>
import Taro from "@tarojs/taro";
import { ref } from "vue";

const props = withDefaults(
    defineProps<{
        title?: string;
        back?: boolean;
        preventDefaultBackClickHandler?: boolean;
    }>(),
    {
        title: 'test',
        back: true,
    }
);

const emits = defineEmits<{
    (e: 'backClick', detail: any): void;
}>();

const pagesCount = Taro.getCurrentPages().length;

const backClick = detail => {
    console.error(23, detail);

    emits('backClick', detail);
    if (props.preventDefaultBackClickHandler) {
        return;
    }

    Taro.navigateBack();
};
</script>
