<template>
  <div class="ContacusPage">
    <header class="w-full px-[30px] md:px-[80px] pt-[190px] pb-[120px] text-white relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(0,_0,_0,_0.57)] ">
      <img :src="require('@/image/contactus-header.png')" class="absolute top-0 left-0 w-full h-full object-cover" alt="">
      <div class="z-[2] relative text-center">
        <h1 class="text-[14vw] md:text-[80px] font-[700] mb-[20px]">تواصل معنا</h1>
        <p class="text-[20px] md:text-[22px] font-[400] mb-[30px]">بامكانك التواصل معنا بكل سهولة</p>
      </div>
    </header>
    <div class="contact-us w-full max-w-[1400px] m-auto px-[30px] md:px-[100px] py-[60px] flex flex-col justify-center items-center gap-[10px] ">
        <div class="flex flex-col justify-center items-center gap-[10px]">
          <h1 class="text-[35px] mb-[20px] relative after:absolute after:bottom-[-7px] after:left-[50%] after:translate-x-[-50%] after:w-[70px] after:h-[3px] after:bg-[#FF9432]">اترك رسالتك</h1>
          <img :src="require('@/image/logo.png')" class="w-[80px] lg:w-[90px] m-auto" alt="">
        </div>
        <form action="" class="w-full md:w-[70%] xl:w-[40%] m-auto mt-[30px] flex flex-col gap-[20px]">
          <input type="text" class="w-full p-[5px_15px] h-[50px] transition-all duration-[.6s] border border-[#2b17ac95]  hover:border-[#2C17AC] rounded-[12px] placeholder:text-[#8D8D8D] text-[rgba(0,_0,_0,_0.80)] hover:bg-gradient-to-r from-[#fff9e4ac] to-white text-[15px] font-bold outline-none" name="name" id="name" placeholder="ادخل اسمك" >
          <input type="number" class="w-full p-[5px_15px] h-[50px] transition-all duration-[.6s] border border-[#2b17ac95] hover:border-[#2C17AC] rounded-[12px] placeholder:text-[#8D8D8D] text-[rgba(0,_0,_0,_0.80)] text-[15px] hover:bg-gradient-to-r from-[#fff9e4ac] to-white font-bold outline-none" name="number" id="number" placeholder="رقم الموبايل" >
          <textarea name="massage" class="w-full p-[15px_15px] transition-all duration-[.6s] border border-[#2b17ac95] hover:border-[#2C17AC] rounded-[12px] placeholder:text-[#8D8D8D] text-[rgba(0,_0,_0,_0.80)] text-[15px] hover:bg-gradient-to-r from-[#fff9e4ac] to-white font-bold outline-none" placeholder="الرسالة" id="massage" cols="30" rows="10"></textarea>
          <input type="submit" class="w-[70%] p-[5px_20px] m-auto mt-[30px] h-[60px] transition-all duration-[.6s] border border-[#2b17aca7] hover:border-[#2C17AC] rounded-[12px] text-[#2C17AC] hover:text-[white] hover:bg-[#2C17AC]  text-[18px] font-bold outline-none" value="ارسل">
        </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ContacusPage'
}
</script>

<style scoped lang="scss">

</style> 