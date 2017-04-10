<template>
  <div>
    {{text}}
    <child-component>
    </child-component>
  </div>
</template>

<script>
import ChildComponent from './child-component.vue'

export default {
  data() {
    return { text: 'foobar' }
  },
  components: {
    'child-component': ChildComponent
  }
}
</script>
