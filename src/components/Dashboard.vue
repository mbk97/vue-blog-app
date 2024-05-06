<script setup>
import Layout from "../components/Layout.vue";
import Card from "../components/base/Card.vue";
import Title from "../components/base/TitleText.vue";
import { ref } from "vue";
</script>

<template>
  <Layout>
    <div class="dashboard-container">
      <div class="title_btn_container">
        <Title text="Latest" />
        <router-link to="/create">
          <button class="create-btn">Create</button>
        </router-link>
      </div>
      <Card />
    </div>
  </Layout>
</template>

<style scoped>
.title_btn_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

.dashboard-container {
  padding: 30px;
}

.create-btn {
  background: #066316;
  color: #ffffff;
  border: none;
  height: 40px;
  width: 120px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
}
</style>
