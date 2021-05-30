<template>
  <div class="card mb-3">
    <div class="card-header">
      Step {{ guideStep.id }}
    </div>
    <ul class="list-group list-group-flush" v-if="guideStep.items.length">
      <GuideStepItem v-for="item in guideStep.items" :key="item.id" :item="item" 
      @updateGuideStepItem="updateGuideStepItem" @deleteGuideStepItem="deleteGuideStepItem"/>
    </ul>
    <div class="card-footer">
      <button @click.prevent="createGuideStepItem" class="btn btn-success">Add item</button>
      <button @click.prevent="deleteStep" class="btn btn-danger float-end">Delete step</button>
    </div>
  </div>
</template>

<script>
import GuideStepItem from '../components/GuideStepItem.vue'

export default {
  components: { GuideStepItem },
  props: {
    guideStep: {
      required: true,
      type: Object
    },
    guideStepIndex: {
      required: true,
      type: Number
    }
  },
  methods: {
    deleteStep() {
      this.$emit('clickDelete', this.guideStep);
    },
    createGuideStepItem() {
      this.$emit('createGuideStepItem', this.guideStep);
    },
    updateGuideStepItem(guideStepItem, text) {
      this.$emit('updateGuideStepItem', guideStepItem, text);
    },
    deleteGuideStepItem(guideStepItem) {
      this.$emit('deleteGuideStepItem', this.guideStep, guideStepItem);
    }
  }
}
</script>

<style>

</style>