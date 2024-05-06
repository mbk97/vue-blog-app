<script setup>
import blogLogo from "../assets/images/blog-logo.png";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import { ref } from "vue";
import axios from "axios";
import {
  toastErrorNotification,
  toastSuccessNotification,
} from "../utils/util.js";
import { checkPasswordValidator } from "../utils/passwordValidator";
import { useRouter } from "vue-router";
import { saveToLocalStorage } from "../utils/userDetails";

const email = ref("");
const password = ref("");
const loading = ref(false);
const router = useRouter();

const handleSubmitData = async () => {
  try {
    loading.value = true;
    if (!email.value || !password.value) {
      toastErrorNotification("Both fields are required");
      return;
    }
    const payload = {
      email: email.value,
      password: password.value,
    };

    const response = await axios.post(
      "https://blog-website-api.vercel.app/api/user/login",
      payload,
    );
    if (response.status === 200) {
      toastSuccessNotification(response.data.message);
      saveToLocalStorage(response?.data.user);
      router.push("/dashboard");
    }
  } catch (error) {
    toastErrorNotification(error.response.data.message);
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="login-container">
    <div class="left-container" />
    <div class="right-container">
      <div class="text-wrapper">
        <div>
          <img :src="blogLogo" alt="logo" class="logo-img" />
        </div>
        <div>
          <h1>
            Hello, <br />
            Welcome Back
          </h1>
        </div>
      </div>

      <div class="input-wrapper">
        <div class="input-div">
          <input
            type="email"
            name="email"
            v-model="email"
            class="input"
            placeholder="Email"
          />
        </div>
        <div class="input-div">
          <input
            type="password"
            name="password"
            v-model="password"
            class="input"
            placeholder="Password"
          />
          <span v-if="password" class="password-error-text">{{
            checkPasswordValidator(password)
          }}</span>
        </div>
        <div class="input-div">
          <button
            class="btn"
            @click="handleSubmitData"
            :disabled="checkPasswordValidator(password)"
          >
            <span v-if="loading" class="loading-text">
              <i class="pi pi-spin pi-spinner" style="font-size: 1rem"></i>
              Logging you in
            </span>
            <span v-else> Login </span>
          </button>
          <p>
            Don't have an account?
            <span>
              <router-link to="/register" class="sign-up-text"
                >Sign up</router-link
              >
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
}

.left-container {
  background-image: url("../assets/images/login-img-2.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  width: 40%;
}

.right-container {
  height: 100vh;
  width: 60%;
  display: flex;
  padding-top: 70px;
  align-items: center;
  flex-direction: column;
}

.text-wrapper {
  width: 400px;
  margin-bottom: 30px;
}

.logo-img {
  height: 50px;
  width: 50px;
  margin-bottom: 40px;
}

.input {
  border: 1px solid #066316;
  height: 45px;
  width: 100%;
  outline: 0;
  border-radius: 7px;
  padding: 0 8px;
  font-size: 16px;
}

.input-div {
  margin-bottom: 30px;
  width: 400px;
}

.btn {
  height: 45px;
  width: 100%;
  background: #066316;
  border-radius: 7px;
  color: white;
  border: 0;
  font-size: 18px;
  cursor: pointer;
}

.input-div p {
  text-align: center;
  margin-top: 20px;
}

.sign-up-text {
  color: #066316;
  cursor: pointer;
  text-decoration: none;
}

@media (max-width: 600px) {
  .left-container {
    width: 0;
    display: none;
  }
}

@media (max-width: 600px) {
  .right-container {
    width: 100%;
    padding: 70px 30px;
    align-items: initial;
  }
}
@media (min-width: 768px) {
  .right-container {
    align-items: center;
    justify-content: center;
  }
}

@media (max-width: 600px) {
  .input-div {
    width: 100%;
  }
}

@media (max-width: 600px) {
  .text-wrapper {
    width: 100%;
  }
}

.loading-text {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.password-error-text {
  color: red;
  margin-top: 5px;
  display: block;
}
</style>
