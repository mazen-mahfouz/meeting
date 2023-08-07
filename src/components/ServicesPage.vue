<template>
  <div class="ServicesPage">
    <header class="w-full px-[30px] md:px-[80px] pt-[190px] pb-[120px] text-white relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(0,_0,_0,_0.57)] ">
      <img :src="require('@/image/services-header.png')" class="absolute top-0 left-0 w-full h-full object-cover" alt="">
      <div class="z-[2] relative text-center">
        <h1 class="text-[14vw] md:text-[80px] font-[700] mb-[20px]">الخدمات والمميزات</h1>
        <p class="text-[20px] md:text-[22px] font-[400] mb-[50px]">نحن نقدم لكم افضل الخدمات والمميزات التي تقودك الي اعلي مستويات التفوق</p>
        <button @click="$router.push('/contact-us')" class="flex justify-center items-center text-[16px] p-[15px_40px]  md:p-[17px_40px] border border-[#FF9432] rounded-[10px] m-auto cursor-pointer transition ease-in hover:bg-[#FF9432] ">تواصل معنا</button>
      </div>
    </header>
    <div class="Services and features text-center w-full max-w-[1400px] m-auto px-[30px] md:px-[100px] py-[60px]">
      <div  ref="swiper" class="swiper mb-[60px]">
          <div class="swiper-wrapper flex">
            <div class="group cursor-pointer  swiper-slide hover:bg-[#2C17AC] hover:border-[#2C17AC] transition-all duration-300 p-[60px_20px] w-full border-[3px] border-[#2C17AC] rounded-[20px] bg-white flex gap-[30px] flex-col justify-center items-center text-center">
              <h1 class="text-[22px] text-[#000] group-hover:text-[white] transition-all duration-300">اختبارات وواجبات</h1>
              <img :src="require('@/image/Feb-Business_9 1.png')" class="w-[100px] lg:w-[120px]" alt="">
              <h2 class="text-[16px] text-[rgba(0,_0,_0,_0.80)] group-hover:text-[#d2d2d2] transition-all duration-300">هدفنا طمانتكم ولذلك يقوم فريق كامل من المساعدين بمتابعة مستوى أبنائنا مع أولياء الأمور</h2>
            </div>  
            <div class="group cursor-pointer  swiper-slide hover:bg-[#2C17AC] hover:border-[#2C17AC] transition-all duration-300 p-[60px_20px] w-full border-[3px] border-[#2C17AC] rounded-[20px] bg-white flex gap-[30px] flex-col justify-center items-center text-center">
              <h1 class="text-[22px] text-[#000] group-hover:text-[white] transition-all duration-300">اختبارات وواجبات</h1>
              <img :src="require('@/image/Feb-Business_9 1.png')" class="w-[100px] lg:w-[120px]" alt="">
              <h2 class="text-[16px] text-[rgba(0,_0,_0,_0.80)] group-hover:text-[#d2d2d2] transition-all duration-300">هدفنا طمانتكم ولذلك يقوم فريق كامل من المساعدين بمتابعة مستوى أبنائنا مع أولياء الأمور</h2>
            </div>
            <div class="group cursor-pointer  swiper-slide hover:bg-[#2C17AC] hover:border-[#2C17AC] transition-all duration-300 p-[60px_20px] w-full border-[3px] border-[#2C17AC] rounded-[20px] bg-white flex gap-[30px] flex-col justify-center items-center text-center">
              <h1 class="text-[22px] text-[#000] group-hover:text-[white] transition-all duration-300">اختبارات وواجبات</h1>
              <img :src="require('@/image/Feb-Business_9 1.png')" class="w-[100px] lg:w-[120px]" alt="">
              <h2 class="text-[16px] text-[rgba(0,_0,_0,_0.80)] group-hover:text-[#d2d2d2] transition-all duration-300">هدفنا طمانتكم ولذلك يقوم فريق كامل من المساعدين بمتابعة مستوى أبنائنا مع أولياء الأمور</h2>
            </div>
            <div class="group cursor-pointer  swiper-slide hover:bg-[#2C17AC] hover:border-[#2C17AC] transition-all duration-300 p-[60px_20px] w-full border-[3px] border-[#2C17AC] rounded-[20px] bg-white flex gap-[30px] flex-col justify-center items-center text-center">
              <h1 class="text-[22px] text-[#000] group-hover:text-[white] transition-all duration-300">اختبارات وواجبات</h1>
              <img :src="require('@/image/Feb-Business_9 1.png')" class="w-[100px] lg:w-[120px]" alt="">
              <h2 class="text-[16px] text-[rgba(0,_0,_0,_0.80)] group-hover:text-[#d2d2d2] transition-all duration-300">هدفنا طمانتكم ولذلك يقوم فريق كامل من المساعدين بمتابعة مستوى أبنائنا مع أولياء الأمور</h2>
            </div>
            <div class="group cursor-pointer  swiper-slide hover:bg-[#2C17AC] hover:border-[#2C17AC] transition-all duration-300 p-[60px_20px] w-full border-[3px] border-[#2C17AC] rounded-[20px] bg-white flex gap-[30px] flex-col justify-center items-center text-center">
              <h1 class="text-[22px] text-[#000] group-hover:text-[white] transition-all duration-300">اختبارات وواجبات</h1>
              <img :src="require('@/image/Feb-Business_9 1.png')" class="w-[100px] lg:w-[120px]" alt="">
              <h2 class="text-[16px] text-[rgba(0,_0,_0,_0.80)] group-hover:text-[#d2d2d2] transition-all duration-300">هدفنا طمانتكم ولذلك يقوم فريق كامل من المساعدين بمتابعة مستوى أبنائنا مع أولياء الأمور</h2>
            </div>
            <div class="group cursor-pointer  swiper-slide hover:bg-[#2C17AC] hover:border-[#2C17AC] transition-all duration-300 p-[60px_20px] w-full border-[3px] border-[#2C17AC] rounded-[20px] bg-white flex gap-[30px] flex-col justify-center items-center text-center">
              <h1 class="text-[22px] text-[#000] group-hover:text-[white] transition-all duration-300">اختبارات وواجبات</h1>
              <img :src="require('@/image/Feb-Business_9 1.png')" class="w-[100px] lg:w-[120px]" alt="">
              <h2 class="text-[16px] text-[rgba(0,_0,_0,_0.80)] group-hover:text-[#d2d2d2] transition-all duration-300">هدفنا طمانتكم ولذلك يقوم فريق كامل من المساعدين بمتابعة مستوى أبنائنا مع أولياء الأمور</h2>
            </div>
            <div class="group cursor-pointer  swiper-slide hover:bg-[#2C17AC] hover:border-[#2C17AC] transition-all duration-300 p-[60px_20px] w-full border-[3px] border-[#2C17AC] rounded-[20px] bg-white flex gap-[30px] flex-col justify-center items-center text-center">
              <h1 class="text-[22px] text-[#000] group-hover:text-[white] transition-all duration-300">اختبارات وواجبات</h1>
              <img :src="require('@/image/Feb-Business_9 1.png')" class="w-[100px] lg:w-[120px]" alt="">
              <h2 class="text-[16px] text-[rgba(0,_0,_0,_0.80)] group-hover:text-[#d2d2d2] transition-all duration-300">هدفنا طمانتكم ولذلك يقوم فريق كامل من المساعدين بمتابعة مستوى أبنائنا مع أولياء الأمور</h2>
            </div>
            <div class="group cursor-pointer  swiper-slide hover:bg-[#2C17AC] hover:border-[#2C17AC] transition-all duration-300 p-[60px_20px] w-full border-[3px] border-[#2C17AC] rounded-[20px] bg-white flex gap-[30px] flex-col justify-center items-center text-center">
              <h1 class="text-[22px] text-[#000] group-hover:text-[white] transition-all duration-300">اختبارات وواجبات</h1>
              <img :src="require('@/image/Feb-Business_9 1.png')" class="w-[100px] lg:w-[120px]" alt="">
              <h2 class="text-[16px] text-[rgba(0,_0,_0,_0.80)] group-hover:text-[#d2d2d2] transition-all duration-300">هدفنا طمانتكم ولذلك يقوم فريق كامل من المساعدين بمتابعة مستوى أبنائنا مع أولياء الأمور</h2>
            </div>
          </div>
          <div class="swiper-pagination"></div>
            <div class="swiper-button-prev text-[#ffc300] md:left-[50px] top-[50%] opacity-[.6] hover:opacity-[1]"></div>
            <div class="swiper-button-next text-[#ffc300] md:right-[50px] top-[50%] opacity-[.6] hover:opacity-[1]"></div>
        </div>
    </div>
  </div>
</template>

<script>

import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default {
  name: 'ServicesPage',
  data() {
    return {
      window_width: window.innerWidth,
    }
  },
mounted() {
    new Swiper(this.$refs.swiper, {
      modules: [Navigation, Pagination],
      loop: true,
      breakpoints: {
      1024: {
      slidesPerView: 3,
      spaceBetween: 20
    
      },
      460: {
      slidesPerView: 2,
      spaceBetween: 20
      },
      300: {
      slidesPerView: 1,
      spaceBetween: 10
      }
      },
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    })
  },
}
</script>

<style scoped lang="scss">

.swiper {
  width: 100%;
  --swiper-navigation-size: 40px !important; 
  --swiper-navigation-sides-offset: 40px !important;
  --swiper-pagination-color: #ffc300;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}


div{
  .swiper{
    --swiper-theme-color: rgb(1, 98, 93);
    --swiper-navigation-size: 30px;
    --swiper-theme-color: rgb(1, 98, 93);
  }
}
</style> 