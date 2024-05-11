<script setup>
import Layout from "../components/Layout.vue";
import Card from "../components/base/Card.vue";
import Title from "../components/base/TitleText.vue";
import { ref } from "vue";
import { axiosInstance } from "../services/axiosInstance";
import axios from "axios";
import { getFromLocalStorage } from "../utils/userDetails";
import {
  toastSuccessNotification,
  toastErrorNotification,
} from "../utils/util";
import { useRouter } from "vue-router";

const dataToBeUpdated = getFromLocalStorage("blog_data");

const loading = ref(false);
const title = ref(dataToBeUpdated ? dataToBeUpdated.title : "");
const description = ref(dataToBeUpdated ? dataToBeUpdated.description : "");
const router = useRouter();

const handleCreate = async () => {
  const payload = {
    title: title.value,
    description: description.value,
  };

  try {
    loading.value = true;
    const response = !dataToBeUpdated
      ? await axiosInstance.post("/api/blog", payload)
      : await axiosInstance.put(`/api/blog/${dataToBeUpdated.id}`, payload);
    if (response.status === 200) {
      toastSuccessNotification(response.data.message);
      localStorage.removeItem("blog_data");
      title.value = "";
      description.value = "";
      router.push("/dashboard");
    }
  } catch (error) {
    console.log(error);
    toastErrorNotification(error.response.data.message);
  } finally {
    loading.value = false;
  }
};
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
      <form action="" @submit.prevent="handleCreate">
        <div class="create-input-container">
          <input
            type="text"
            class="title-input"
            placeholder="Enter your blog title"
            v-model="title"
          />
          <textarea
            class=""
            placeholder="Enter blog content here"
            v-model="description"
          ></textarea>
        </div>
        <div class="submit-container">
          <button class="create-btn">
            <span v-if="loading">
              <i class="pi pi-spin pi-spinner" style="font-size: 1rem"></i>
            </span>
            <span v-else> Submit </span>
          </button>
        </div>
      </form>
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
