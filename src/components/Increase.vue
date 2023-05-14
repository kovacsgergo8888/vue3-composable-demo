<script setup>
import { useCounter } from '../composables/Counter'

const { increase } = useCounter()
</script>

<template>
  <button @click="increase">+</button>
</template>
