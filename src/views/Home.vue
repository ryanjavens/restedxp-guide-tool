<template>
  <div class="row">
    <div class="col">
      <h1 class="text-center">RestedXP Addon Guide Editor</h1>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6 d-grid gap-2 mx-auto">
      <router-link :to="{ name: 'New Guide' }" type="button" class="btn btn-lg btn-primary">New Guide</router-link>
      <button type="button" class="btn btn-lg btn-primary disabled">Import Guide - Coming soon</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
