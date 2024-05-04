<script setup>
import logo from "../assets/images/blog-logo.png";
import { ref } from "vue";

const open = ref(false);

const navItems = [
  {
    id: 1,
    text: "Lastest",
    link: "/latest",
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
      <div class="component-wrapper">
        <div class="Navbar-wrapper">
          <div class="menu-toggle" @click="handleOpenMenu">
            <i class="pi pi-bars" style="font-size: 1rem"></i>
          </div>
          <div>
            <h3>Mubarak</h3>
          </div>
        </div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  gap: 20px;
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
  .Navbar-wrapper {
    padding: 10px;
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
</style>
