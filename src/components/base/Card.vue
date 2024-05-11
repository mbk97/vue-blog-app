<script setup>
import { defineProps, defineEmits, ref } from "vue";
import { useRouter } from "vue-router";
import { axiosInstance } from "../../services/axiosInstance";
import { formatIncomingDate } from "../../utils/date";
import { saveToLocalStorage } from "../../utils/userDetails";
import {
  toastSuccessNotification,
  toastErrorNotification,
} from "../../utils/util";

const loading = ref(false);
const router = useRouter();

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  fetchUserBlogs: {
    type: Function,
    required: true,
  },
});

const emits = defineEmits(["delete-success"]);

const deleteBlogPost = async (id) => {
  loading.value = true;
  try {
    const response = await axiosInstance.delete(`/api/blog/${id}`);
    if (response.status === 200) {
      toastSuccessNotification(response.data.message);
      emits("delete-success");
    }
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

const handleUpdate = (id, title, description) => {
  const dataToBeUpdated = {
    id,
    title,
    description,
  };

  console.log(dataToBeUpdated);
  saveToLocalStorage("blog_data", dataToBeUpdated);
  router.push("/create");
};
</script>
<template>
  <div class="card-container">
    <div>
      <h4>{{ title }}</h4>
      <p class="description">
        {{ description.substring(0, 70) }}
      </p>
    </div>
    <div class="date_action_container">
      <div class="">
        <i
          class="pi pi-pen-to-square"
          style="font-size: 1rem"
          @click="handleUpdate(id, title, description)"
        ></i>
        <span v-if="loading">
          <i class="pi pi-spin pi-spinner" style="font-size: 1rem"></i>
        </span>
        <span v-else>
          <i
            class="pi pi-trash"
            style="font-size: 1rem"
            @click="deleteBlogPost(id)"
          ></i>
        </span>
      </div>
      <div class="date-container">
        <p>{{ date }}</p>
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
  font-size: 15px;
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
  width: 280px;
  height: 180px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.date_action_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pi-trash,
.pi-spin {
  color: red;
  cursor: pointer;
}

.pi-pen-to-square {
  margin-right: 10px;
  cursor: pointer;
}
</style>
