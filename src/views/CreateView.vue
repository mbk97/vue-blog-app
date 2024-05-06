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
        <Title text="Create" />
        <router-link to="/dashboard">
          <button class="create-btn">Latest</button>
        </router-link>
      </div>
      <div class="create-input-container">
        <input
          type="text"
          class="title-input"
          placeholder="Enter your blog title"
        />
        <textarea class="" placeholder="Enter blog content here"></textarea>
      </div>
      <div class="submit-container">
        <button class="create-btn">Submit</button>
      </div>
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

.create-input-container {
  border: 1px solid #066316;
  height: 400px;
  width: 100%;
  padding: 20px;
}

.title-input {
  height: 45px;
  width: 100%;
  padding: 0 20px;
  border: none;
  outline: none;
  font-size: 24px;
}

.title-input::placeholder {
  font-size: 24px;
}

textarea {
  height: 200px;
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  padding: 0 20px;
  margin-top: 30px;
  font-size: 16px;
}

textarea::placeholder {
  font-size: 24px;
}

@media (max-width: 600px) {
  .dashboard-container {
    padding: 16px;
  }
  textarea {
    padding: 0 5px;
  }
  textarea::placeholder {
    font-size: 16px;
  }
  .title-input {
    padding: 0 5px;
  }
  .title-input::placeholder {
    font-size: 16px;
  }
}

.submit-container {
  margin-top: 30px;
}
</style>
