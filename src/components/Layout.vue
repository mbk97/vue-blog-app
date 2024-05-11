<script setup>
import logo from "../assets/images/blog-logo.png";
import { ref } from "vue";
import { getFromLocalStorage } from "../utils/userDetails";

const open = ref(false);
const userData = getFromLocalStorage("user-details");

const name = userData?.name.split(" ");
const nameLogo = name[0];
const Nlogo = nameLogo?.substring(0, 1);

const navItems = [
  {
    id: 1,
    text: "Lastest",
    link: "/dashboard",
    icon: "pi-chart-line",
  },
  {
    id: 2,
    text: "Create",
    link: "/create",
    icon: "pi-folder-plus",
  },
];

const handleOpenMenu = () => {
  open.value = true;
};
const handleCloseMenu = () => {
  open.value = false;
};
</script>
<template>
  <div>
    <div class="container">
      <div :class="[open ? 'active' : '', 'sidebar-wrapper']">
        <div>
          <div class="close-menu-toggle" @click="handleCloseMenu">
            <i class="pi pi-times" style="font-size: 1rem"></i>
          </div>
          <div class="logo-wrapper">
            <img :src="logo" alt="Logo" height="40" />
          </div>
          <div v-for="nav in navItems" :key="nav.id" class="link-wrapper">
            <router-link :to="nav.link" class="link">
              <span>
                <i :class="['pi', nav.icon]" style="font-size: 1rem"></i
              ></span>
              {{ nav.text }}</router-link
            >
          </div>
        </div>
        <div class="sign-out-text">
          <i class="pi pi-sign-out" style="font-size: 1rem"></i>
          <p class="logout-text">Logout</p>
        </div>
      </div>
      <div class="component-wrapper">
        <div class="Navbar-wrapper">
          <div class="menu-toggle" @click="handleOpenMenu">
            <i class="pi pi-bars" style="font-size: 1rem"></i>
          </div>
          <div class="name-logo-wrapper">
            <div>
              <span class="name-logo">{{ Nlogo }}</span>
            </div>
            <h3>{{ nameLogo }}</h3>
          </div>
        </div>
        <slot class="slot-wrapper"></slot>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  position: relative;
}

.sidebar-wrapper {
  background: #ffffff;
  border-right: 1px solid rgb(244, 236, 236);
  height: 100vh;
  width: 15%;
  padding: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all ease-in-out 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media (max-width: 768px) {
  .sidebar-wrapper {
    position: absolute;
    top: 0;
    left: -100%;
    width: 50%;
    transition: all ease-in-out 0.2s;
  }
  .sidebar-wrapper.active {
    left: 0;
    transition: all ease-in-out 0.2s;
  }
}

.logo-wrapper {
  margin-bottom: 20px;
}

.pi {
  display: block;
  color: #066316;
}

.logout-text {
  font-weight: 600;
}

.link-wrapper {
  margin-bottom: 20px;
}

.link {
  font-size: 18px;
  text-decoration: none;
  color: black;
  font-weight: 600;
  line-height: 21px;
  display: flex;
  gap: 10px;
  align-items: center;
}

.component-wrapper {
  width: 85%;
}

.Navbar-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
  height: 45px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0 20px;
}

.sign-out-text {
  display: flex;
  gap: 10px;
  cursor: pointer;
}

.menu-toggle {
  visibility: hidden;
}

.close-menu-toggle {
  display: none;
}

@media (max-width: 768px) {
  .component-wrapper {
    width: 100%;
  }

  .menu-toggle {
    visibility: visible;
  }

  .close-menu-toggle {
    display: block;
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 10;
  }
}

.name-logo-wrapper {
  display: flex;
  gap: 10px;
  align-items: center;
}

.name-logo {
  background: #066316;
  color: black;
  height: 30px;
  width: 30px;
  border: 1px solid black;
  border-radius: 50%;
  padding: 5px;
  font-weight: 600;
}
</style>
