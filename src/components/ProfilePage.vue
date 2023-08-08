<template>
  <div class="ProfilePage">
    <header class="w-full px-[30px] md:px-[80px] pt-[190px] pb-[120px] text-white relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.73)] ">
      <img :src="require('@/image/profile-header.png')" class="absolute top-0 left-0 w-full h-full object-cover" alt="">
      <div class="z-[2] relative text-center">
        <h1 class="text-[14vw] md:text-[80px] font-[700] mb-[20px]">الملف الشخصي</h1>
        <p class="text-[20px] md:text-[22px] font-[400] mb-[30px]">قم بتعديل ملفك الشخصي بكل سهولة وتغيير كلمة المرور</p>
        <button @click="$router.push('/contact-us')" class="flex justify-center items-center text-[16px] p-[15px_40px]  md:p-[17px_40px] border border-[#FF9432] rounded-[10px] m-auto cursor-pointer transition ease-in hover:bg-[#FF9432] ">تواصل معنا</button>
      </div>
    </header>
    <div class="ProfilePage w-full max-w-[1400px] m-auto px-[30px] md:px-[100px] py-[60px] flex flex-col justify-center items-center gap-[50px] ">
      <div class="w-full flex justify-evenly items-center flex-wrap gap-[20px]">
        <router-link to="/profile/person" class="text-center text-[16px] sm:text-[20px] w-full sm:w-auto p-[30px_40px] font-bold sm:p-[40px_55px] rounded-md text-[#2C17AC] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] border-[.5px] border-[#2b17ac72] bg-[white] transition-all duration-300 ease-in hover:scale-[1.05]">البيانات الشخصية </router-link>
        <router-link to="/profile/password" class="text-center text-[16px] sm:text-[20px] w-full sm:w-auto p-[30px_40px] font-bold sm:p-[40px_80px] rounded-md text-[#2C17AC] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] border-[.5px] border-[#2b17ac72] bg-[#ffffff] transition-all duration-300 ease-in hover:scale-[1.05]">كلمة المرور</router-link>
      </div>
      <router-view></router-view>
    </div> 
  </div>
</template>

<script>

export default {
  name: 'ProfilePage'
}
</script>

<style scoped lang="scss">
.router-link-exact-active{
  background-color: #2C17AC;
  color: white;
}
</style> 