import { ref } from 'vue'

const counter = ref(0)

const increase = () => {
  counter.value++
}
const decrease = () => {
  counter.value--
}

export const useCounter = () => {
  return {
    counter,
    increase,
    decrease
  }
}
