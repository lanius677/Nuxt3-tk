<template>
  <div class="text-center">
    {{ transform(timeout) }}
  </div>
</template>

<script setup lang="ts">
// 定义组件的props
const props = defineProps({
  expires: {
    type: Number,
    default: 30,
  },
});
// 定义组件的emit
const emit = defineEmits(["end"]);

const transform = (data: number) => {
  const minutes = Math.floor((data % (60 * 60)) / 60);
  const seconds = Math.floor(data % 60);
  return `${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
};

let timer: any;
const timeout = ref(0);

onMounted(() => init());
onBeforeUnmount(() => clearInterval(timer!));

// 初始化倒计时
function init() {
  if (timer) clearInterval(timer);

  timeout.value = props.expires * 60;
  if (timeout.value > 0) timer = setInterval(handleTimeout, 1000);
}

function handleTimeout() {
  if (timeout.value === 0) {
    emit("end");
    return clearInterval(timer);
  }
  timeout.value--;
}
</script>

<style scoped></style>
