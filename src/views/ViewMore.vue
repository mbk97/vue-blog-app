<script setup>
import Layout from "../components/Layout.vue";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { axiosInstance } from "../services/axiosInstance";
import { formatIncomingDate } from "../utils/date";
const extractedId = ref(null);
const loading = ref(false);
const singleData = ref({});
const route = useRoute();

extractedId.value = route.params.id;
console.log(extractedId.value);

const fetchSingleBlogWithId = async () => {
  try {
    loading.value = true;
    const response = await axiosInstance.get(`/api/blog/${extractedId.value}`);
    singleData.value = response.data.singleData;
  } catch (error) {
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchSingleBlogWithId();
});
</script>
<template>
  <Layout>
    <div class="dashboard-container">
      <header>
        <div>
          <div v-if="loading">
            <h1>Loading...</h1>
          </div>
          <div v-else>
            <h1>{{ singleData.title }}</h1>
            <p class="date-text">
              Written on {{ formatIncomingDate(singleData.createdAt) }}
            </p>
          </div>
        </div>
        <div>
          <router-link to="/dashboard">
            <button class="create-btn">Latest</button>
          </router-link>
        </div>
      </header>
      <main>
        <p class="description_text">
          {{ singleData.description }}
        </p>
      </main>
    </div>
  </Layout>
</template>
<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
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

.date-text {
  margin-top: 10px;
}

.description_text {
  font-size: 24px;
  margin-top: 30px;
}
</style>
