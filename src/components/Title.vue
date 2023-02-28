<template>
    <h1 :style="{ fontSize: `${fontSize}px`, textShadow: `2px 2px #000, -2px -2px #000, 2px -2px #000, -2px 2px #000` }">
      {{ title }}
    </h1>
  </template>
  
  <script>
  export default {
    name: "Title",
    props: {
      title: {
        type: String,
        required: true
      },
      fontSize: {
        type: Number,
        default: 40
      }
    }
  }
  </script>
  
  <style scoped>
  h1 {
    font-weight: bold;
    color: white;
    text-align: center;
  }
  </style>
  