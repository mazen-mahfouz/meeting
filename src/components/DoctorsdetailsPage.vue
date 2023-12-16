<template>
  <div class="DoctorsdetailsPage">
    <header class="w-full px-[30px] md:px-[80px] pt-[190px] pb-[120px] text-white relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.73)] ">
      <img :src="require('@/image/doctors-header.jpg')" class="absolute top-0 left-0 w-full h-full object-cover" alt="">
      <div class="z-[2] relative text-center">
        <h1 class="text-[14vw] md:text-[80px] font-[700] mb-[20px]">معلومات الأطبيب</h1>
        <p class="text-[20px] md:text-[22px] font-[400] mb-[30px]">الملف الشخصي للمعالج</p>
        <button @click="$router.push('/contact-us')" class="flex justify-center items-center text-[16px] p-[15px_40px]  md:p-[17px_40px] border border-[#5599f9] rounded-[10px] m-auto cursor-pointer transition ease-in hover:bg-[#5599f9] ">تواصل معنا</button>
      </div>
    </header>
    <div class="DoctorsdetailsPage text-center w-full max-w-[1400px] m-auto px-[10px] md:px-[40px] py-[60px] bg-[#f1f4f7]">
      <h1 class="text-[40px] font-[700] text-[#5599f9] mb-[20px]">الملف الشخصي للمعالج</h1>
      <div class="DoctorsdetailsPage w-full ">
      <div class="w-full flex flex-wrap justify-center items-center py-[30px] gap-[10px] mb-[30px]">
        <div class="p-[35px] m-[10px] w-full sm:w-[600px] flex pl-[30px] rounded-[15px] bg-white">
          <div class="flex justify-start items-start flex-col gap-[40px]">
            <div class="flex justify-start items-start gap-[40px]">
              <img :src="require('@/image/person.jpg')" class="rounded-full w-[90px] h-[90px]" alt="">
              <div class="flex flex-col gap-[15px] mt-[5px] text-start">
                <h2 class="text-[17px] text-[#4d4d4f]">بهاء محمود</h2>
                <h1 class="text-[17px] text-[#5599f9]">طبيب نفسي</h1>
                <div class="flex justify-start items-start gap-[8px]">               
                  <i class="fa-solid fa-star text-[14px] text-[#ffc10e]"></i>
                  <i class="fa-solid fa-star text-[14px] text-[#ffc10e]"></i>
                  <i class="fa-solid fa-star text-[14px] text-[#ffc10e]"></i>
                  <i class="fa-solid fa-star text-[14px] text-[#ffc10e]"></i>
                  <i class="fa-solid fa-star text-[14px] text-[rgba(203,203,203,0.53)]"></i>
                </div>
                <span class="text-[12px] text-[#666669] tracking-wider">4.82 (568 تقييم)</span>
              </div>
            </div>
            <div>
              <p class="text-[16px] text-[#212529] text-start">اخصائي روماتيزم و مفاصل و الطب الطبيعي و التاهيل رئيس الجمعية المصرية للروماتيزم والتاهيل...</p>
            </div>
            <div class="flex flex-col gap-[8px] text-start">
                <h1 class="text-[17px]">الأهتمامات:</h1>
                <ul class="flex justify-start flex-warp items-center gap-[3px]">
                  <li class="text-[#60a899] text-[16px] p-[4px_10px] rounded-md bg-[#6cca871a]">الاكتئاب</li>
                  <li class="text-[#60a899] text-[16px] p-[4px_10px] rounded-md bg-[#6cca871a]">الفوبيا والرهاب الاجتماعي</li>
                </ul>
            </div>
            <div class="flex justify-start items-center gap-[10px]">
              <i class="fa-solid fa-earth-asia text-[#5599f9] text-[25px]"></i>
              <p class="text-[13px] text-[#212529]">الغة: العربية , الفرنسية</p>
            </div>
            <div class="flex justify-start items-center gap-[10px]">
              <i class="fa-solid fa-building text-[#5599f9] text-[25px]"></i>
              <p class="text-[13px] text-[#212529]">الفيوم، شارع ابو بكر الصديق البحاري - الفيوم</p>
            </div>
            <div class="flex justify-start items-center gap-[10px]">
              <i class="fa-solid fa-user-graduate text-[#5599f9] text-[25px]"></i>
              <p class="text-[13px] text-[#212529]">لصنص حقوق</p>
            </div>
            <div class="flex justify-start items-center gap-[10px]">
              <i class="fa-solid fa-certificate text-[#5599f9] text-[25px]"></i>
              <p class="text-[13px] text-[#212529]">شهادة في اكتشاف الذرة</p>
            </div>
            <div  class="w-full flex justify-between items-center mb-[10px]">
              <button class="bg-[linear-gradient(180deg,_#4F94FC_0%,_#035FE9_100%)] m-auto hover:bg-[linear-gradient(180deg,#2C68C1_0%,#04347B_100%)] transition-all duration-[.5s] text-[17px] w-[80%] text-[white] py-[10px] px-[16px] rounded-md cursor-pointer">احجز الان</button>
            </div>
          </div>
        </div>    
      </div>
    </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DoctorsdetailsPage',
}
</script>

<style scoped lang="scss">
</style> 