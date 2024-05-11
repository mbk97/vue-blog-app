<script setup>
import Layout from "../components/Layout.vue";
import Card from "../components/base/Card.vue";
import Title from "../components/base/TitleText.vue";
import { ref, onMounted } from "vue";
import { axiosInstance } from "../services/axiosInstance";
import { formatIncomingDate } from "../utils/date";

const blogs = ref([]);
const loading = ref(false);

const fetchUserBlogs = async () => {
  try {
    loading.value = true;
    const response = await axiosInstance.get("/api/blog");
    blogs.value = response?.data?.blogs;
  } catch (error) {
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchUserBlogs();
});
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
      <div class="card-wrapper">
        <div v-if="loading">
          <h3>Loading...</h3>
        </div>
        <div v-else>
          <div v-if="blogs.length === 0">
            <p>No content is created.</p>
          </div>
          <div v-else v-for="blog in blogs" :key="blog._id">
            <Card
              :id="blog._id"
              :title="blog.title"
              :description="blog.description"
              :date="formatIncomingDate(blog)"
              @delete-success="fetchUserBlogs"
            />
          </div>
        </div>
        <!-- <div v-else v-for="blog in blogs" :key="blog._id">
          <Card
            :id="blog._id"
            :title="blog.title"
            :description="blog.description"
            :date="formatIncomingDate(blog)"
            @delete-success="fetchUserBlogs"
          />
        </div> -->
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
.card-wrapper {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
</style>
