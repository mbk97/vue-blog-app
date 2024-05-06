<script setup></script>
<template>
  <div class="card-container">
    <div>
      <h4>I am the title</h4>
      <p class="description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, beatae
        illum suscipit eveniet repellat totam sequi....
      </p>
      <div class="date-container">
        <p>12-03-2024</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.description {
  margin: 10px 0;
}

.date-container {
  display: flex;
  justify-content: flex-end;
}

.date-container p {
  color: #066316;
  font-size: 12px;
  font-weight: 500;
}

h4 {
  font-weight: 600;
  font-size: 18px;
}

.card-container {
  background: #fbfbfb;
  border-radius: 8px;
  height: auto;
  padding: 10px;
  width: 320px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
}
</style>
