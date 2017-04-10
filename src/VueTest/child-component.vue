<template>
  <input type="button"
         :value="button_name"
         @click="showAlert" />
</template>

<script>
export default {
  data() {
    return { button_name: 'foo' }
  },
  methods: {
    showAlert(): void {
      alert('bar')
    }
  }
}
</script>
