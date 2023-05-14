<script setup>
import { useCounter } from '../composables/Counter'

const { decrease } = useCounter()
</script>

<template>
  <button @click="decrease">-</button>
</template>
