-<template>
  <nav ref="nav" class="z-[5] w-full fixed top-0 left-0 transition-all duration-[.6s] bg-[#0000002e]">
    <div class="w-full flex justify-between items-center gap-[30px] md:gap-[3%] xl:gap-[12%] py-[10px] px-[20px] lg:px-[50px] xl:px-[80px]">
      <div id="logo">
        <router-link to="/" class="flex justify-center md:flex-col lg:flex-row items-center gap-[5px]">
          <img :src="require('@/image/logo.png')" class="w-[70px] h-[70px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px]" alt="">
          <h1 class="text-[#FF9001] font-[700] text-[18px] md:text-[16px] lg:text-[18px]">mafhoom</h1>
        </router-link>
      </div>
      <div id="side-menu" class="z-[4] w-full h-screen flex flex-col-reverse md:flex-row justify-evenly md:justify-between items-center gap-[40px] md:gap-[20px] lg:gap-[60px] pt-[60px] pb-[30px] md:py-0 md:h-auto bg-[#171717] fixed left-0 md:static text-center transition-all duration-500 overflow-y-auto md:overflow-visible md:bg-transparent" :class="{'top-0': menu == true, '-top-full': menu == false}">
          <div id="links-pages">
            <ul class="text-[20px] md:text-[14px] 2xl:text-[17px] text-slate-300 flex flex-col md:flex-row gap-[20px] lg:gap-[40px] font-[600]">
              <li @click="menu = false" class="hover:text-white relative after:absolute after:bottom-[-10px] after:w-[0%] after:h-[1px] after:left-[50%] after:translate-x-[-50%] after:bg-[#FF9001] hover:after:w-full after:transition-all duration-[.6s]"><router-link to="/">الرئيسة</router-link></li>
              <li @click="menu = false" class="hover:text-white relative after:absolute after:bottom-[-10px] after:w-[0%] after:h-[1px] after:left-[50%] after:translate-x-[-50%] after:bg-[#FF9001] hover:after:w-full after:transition-all duration-[.6s]"><router-link to="/about">من نحن</router-link></li>
              <li @click="menu = false" class="hover:text-white relative after:absolute after:bottom-[-10px] after:w-[0%] after:h-[1px] after:left-[50%] after:translate-x-[-50%] after:bg-[#FF9001] hover:after:w-full after:transition-all duration-[.6s]"><router-link to="/subject">المواد الدراسية</router-link></li>
              <li @click="menu = false" class="hover:text-white relative after:absolute after:bottom-[-10px] after:w-[0%] after:h-[1px] after:left-[50%] after:translate-x-[-50%] after:bg-[#FF9001] hover:after:w-full after:transition-all duration-[.6s]"><router-link to="/services-features">الخدمات</router-link></li>
              <li @click="menu = false" class="hover:text-white relative after:absolute after:bottom-[-10px] after:w-[0%] after:h-[1px] after:left-[50%] after:translate-x-[-50%] after:bg-[#FF9001] hover:after:w-full after:transition-all duration-[.6s]"><router-link to="/blog">المدونة</router-link></li>
              <li @click="menu = false" class="hover:text-white relative after:absolute after:bottom-[-10px] after:w-[0%] after:h-[1px] after:left-[50%] after:translate-x-[-50%] after:bg-[#FF9001] hover:after:w-full after:transition-all duration-[.6s]"><router-link to="/Contact-us">تواصل معنا</router-link></li>
              <li @click="menu = false" class="md:hidden hover:text-white relative after:absolute after:bottom-[-10px] after:w-[0%] after:h-[1px] after:left-[50%] after:translate-x-[-50%] after:bg-[#FF9001] hover:after:w-full after:transition-all duration-[.6s]"><router-link to="/profile">ملف شخصي</router-link></li>
              <li @click="menu = false" class="md:hidden hover:text-white relative after:absolute after:bottom-[-10px] after:w-[0%] after:h-[1px] after:left-[50%] after:translate-x-[-50%] after:bg-[#FF9001] hover:after:w-full after:transition-all duration-[.6s]"><router-link to="/my-wallet">محفظتي</router-link></li>
              <li @click="menu = false" class="md:hidden hover:text-red-900 text-red-700 relative after:absolute after:bottom-[-10px] after:w-[0%] after:h-[1px] after:left-[50%] after:translate-x-[-50%] after:bg-[#810d09] hover:after:w-full after:transition-all duration-[.6s]"><router-link to="/Log out">تسجيل خروج</router-link></li>
            </ul>
          </div>
          <div class="group flex justify-center items-center gap-[8px] relative">
            <div class="flex flex-col justify-center text-white ">
              <h1 class="font-[700] text-center text-[20px] md:text-[14px] 2xl:text-[18px] ">ا/ بهجت صابر</h1>
              <h2 class="font-[400] text-right text-[18px] md:text-[12px] lg:text-[15px] text-[#ffc300]">علمي</h2>
            </div>
              <img :src="require('@/image/person.jpg')" class="rounded-full w-[60px] h-[60px] md:w-[40px] md:h-[40px] lg:w-[40px] lg:h-[40px]" alt="">
              <svg xmlns="http://www.w3.org/2000/svg" class="hidden md:block" width="18" height="16" viewBox="0 0 23 16" fill="none">
                <path d="M20.5515 0.372836L1.81175 0.372836C0.382751 0.372836 -0.485498 1.68604 0.292309 2.69735L9.66218 14.9841C9.82532 15.1992 10.051 15.3764 10.3182 15.4992C10.5855 15.6219 10.8856 15.6863 11.1907 15.6863C11.4957 15.6863 11.7958 15.6219 12.0631 15.4992C12.3303 15.3764 12.556 15.1992 12.7191 14.9841L22.0709 2.69735C22.2474 2.46968 22.3469 2.20649 22.3591 1.93554C22.3712 1.66459 22.2955 1.39593 22.1399 1.15789C21.9843 0.919862 21.7546 0.721285 21.4751 0.583111C21.1955 0.444938 20.8764 0.372292 20.5515 0.372836Z" fill="#FF9432"/>
              </svg>
              <div class=" hidden group-hover:block group-hover:animate-[side_1s_ease-in-out] absolute left-[-8px] top-[80%] text-center afrer:w-0 after:h-0 after:absolute after:top-[14px] after:border-l-[6px] after:border-l-transparent after:border-b-[7px] after:border-b-[#FF9001] after:border-r-[6px] after:border-r-transparent after:left-[10px]">
                <ul class="flex flex-col justify-center items-center text-[14px] font-bold text-[#000000] bg-[#ffffff] mt-[20px] border border-[#2C17AC]">
                  <li class="border border-[#2C17AC] w-full h-full p-[16px_14px] cursor-pointer transition-all duration-[.6s] hover:bg-[#2C17AC] hover:text-white"><router-link to="/profile">ملف شخصي</router-link></li>
                  <li class="border border-[#2C17AC] w-full h-full p-[16px_14px] cursor-pointer transition-all duration-[.6s] hover:bg-[#2C17AC] hover:text-white"><router-link to="/my-walle">محفظتي</router-link></li>
                  <li class="border border-[#2C17AC] w-full h-full p-[16px_14px] cursor-pointer transition-all duration-[.6s] hover:bg-[#2C17AC] hover:text-white">تسجيل خروج</li>
                </ul>
              </div>
          </div>
      </div>
      <div id="menu-button" class="md:hidden" @click="menu == true ? menu = false : menu = true">
          <div>
            <button class="relative group z-[9]">
              <div class="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all ring-0 ring-gray-300 ring-opacity-30 duration-200">
                <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                  <div class="bg-white md:bg-gray-800 h-[2px] w-7 transform transition-all duration-300 origin-left" :class="{'translate-x-10': menu}"></div>
                  <div class="bg-white md:bg-gray-800 h-[2px] w-7 rounded transform transition-all duration-300 delay-75" :class="{'translate-x-10': menu}"></div>
                  <div class="bg-white md:bg-gray-800 h-[2px] w-7 transform transition-all duration-300 origin-left delay-150" :class="{'translate-x-10': menu}"></div>

                  <div class="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 flex w-0" :class="{'translate-x-0': menu, 'w-12': menu}">
                    <div class="absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300" :class="{'rotate-45': menu}"></div>
                    <div class="absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300" :class="{'-rotate-45': menu}"></div>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
    </div>  
  </nav>
</template>

<script>
export default {
  name: 'NavPage',
  data(){
    return{
      menu: false,
    }
  },
  mounted(){
    let self = this;
    window.addEventListener("scroll", () =>{
        if(window.scrollY > 80){
          self.$refs.nav.classList.add('!bg-[#000000d1]')
        }else{
          self.$refs.nav.classList.remove('!bg-[#000000d1]')
        }
    });
  }
}
</script>

<style scoped lang="scss">
.router-link-exact-active{
  color: #356DFE;
}
</style>
