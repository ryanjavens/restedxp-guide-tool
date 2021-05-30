<template>
  <div>
    {{guideStep.id}}
  </div>
</template>

<script>
export default {
  props: {
    guideStep: {
      required: true,
      type: Object
    }
  }
}
</script>

<style>

</style>