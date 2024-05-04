<script setup>
import blogLogo from "../assets/images/blog-logo.png";
import { ref } from "vue";
import axios from "axios";
import {
  toastErrorNotification,
  toastSuccessNotification,
} from "../utils/util.js";
import { checkPasswordValidator } from "../utils/passwordValidator";
import { useRouter } from "vue-router";

const name = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const showPassWord = ref(false);
const loading = ref(false);

const router = useRouter();

const handleShowPassword = () => {
  showPassWord.value = !showPassWord.value;
};

const handleRegister = async () => {
  try {
    loading.value = true;
    if (
      !name.value ||
      !email.value ||
      !password.value ||
      !confirmPassword.value
    ) {
      toastErrorNotification("All fields are required");
      return;
    }

    const payload = {
      name: name.value,
      email: email.value,
      password: password.value,
    };

    const response = await axios.post(
      "https://blog-website-api.vercel.app/api/user/register",
      payload,
    );
    if (response.status === 201) {
      toastSuccessNotification(response.data.message);
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
            Welcome, <br />
            Let’s Sign you up quickly
          </h1>
        </div>
      </div>

      <form class="input-wrapper" @submit.prevent="handleRegister">
        <div class="input-div">
          <input
            type="text"
            name="name"
            v-model="name"
            class="input"
            placeholder="Name"
          />
        </div>
        <div class="input-div">
          <input
            type="email"
            name="email"
            v-model="email"
            class="input"
            placeholder="Email"
          />
        </div>
        <div class="input-div show-password-container">
          <input
            :type="showPassWord ? 'text' : 'password'"
            v-model="password"
            name="password"
            class="input"
            placeholder="Password"
          />
          <div class="show-btn" @click="handleShowPassword">
            <span v-if="showPassWord">
              <i class="pi pi-eye-slash" style="font-size: 1rem"></i>
            </span>
            <span v-else>
              <i class="pi pi-eye" style="font-size: 1rem"></i>
            </span>
          </div>
          <span v-if="password" class="password-error-text">{{
            checkPasswordValidator(password)
          }}</span>
        </div>
        <div class="input-div show-password-container">
          <input
            type="password"
            v-model="confirmPassword"
            name="confirmPassword"
            class="input"
            placeholder="Confirm Password"
          />
          <span v-if="password !== confirmPassword" class="password-error-text"
            >Passwords do not match</span
          >
        </div>
        <div class="input-div">
          <button class="btn" :disabled="checkPasswordValidator(password)">
            <span v-if="loading" class="loading-text">
              <i class="pi pi-spin pi-spinner" style="font-size: 1rem"></i>
              Loading
            </span>
            <span v-else>Register</span>
          </button>
          <p>
            Already have an account?
            <span>
              <router-link to="/" class="sign-up-text">Login</router-link>
            </span>
          </p>
        </div>
      </form>
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
  width: 50%;
}

.right-container {
  height: 100vh;
  width: 50%;
  display: flex;
  padding-top: 30px;
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
  margin-bottom: 30px;
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
    width: 80%;
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

.show-password-container {
  position: relative;
}

.show-btn {
  position: absolute;
  top: 14px;
  right: 10px;
  cursor: pointer;
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
