<template>
  <div>
    <ul v-for="text of textstor " :key="text">
      <li>
        <input type="text" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:[
    {
      type:Text,
      name:textstor
    }
  ]
};
</script>

<style>
</style>