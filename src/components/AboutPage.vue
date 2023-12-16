<template>
  <div class="AboutPage">
    <header class="w-full px-[30px] md:px-[80px] pt-[190px] pb-[120px] text-white relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.73)] ">
      <img :src="require('@/image/booking-doctor-background.jpeg')" class="absolute top-0 left-0 w-full h-full object-cover" alt="">
      <div class="z-[2] relative text-center">
        <h1 class="text-[14vw] md:text-[80px] font-[700] mb-[20px]">من نحن</h1>
        <p class="text-[20px] md:text-[22px] font-[400] mb-[30px]">نحن نساعدكم في اتخاذ القرار</p>
        <button @click="$router.push('/contact-us')" class="flex justify-center items-center text-[16px] p-[15px_40px]  md:p-[17px_40px] border border-[#5599f9] rounded-[10px] m-auto cursor-pointer transition ease-in hover:bg-[#5599f9] ">تواصل معنا</button>
      </div>
    </header>
    <div class="about w-full  max-w-[1400px] m-auto px-[30px] md:px-[100px] py-[60px] flex flex-col md:flex-row justify-between items-center gap-[10px] lg:gap-[5%]">
      <div>
        <h1 class="text-[40px] mb-[20px] relative after:absolute after:bottom-[-7px] after:right-0 after:w-[70px] after:h-[3px] after:bg-[#5599f9]"> <span class="text-[#5599f9]">كلينيكير</span> للرأي الطبي الثاني</h1>
        <p class="text-[14px] text-[rgba(0,_0,_0,_0.80)] text-right 2xl:max-w-[80%] mb-[20px]">
          أول منصة عربية منذ عام 2020 مختصة بتقديم الاستشارات والأراء الطبية الأخرى التي تعمل على مساعدة المرضى على اتخاذ القرارات الصحيحة من خلال مراجعة أوضاعهم الصحية الحالية وقراءة التقارير الطبية المتاحة ثم تقييم الحالة وتقديم رأي طبي آخر لتحسين الظروف الصحية وتقديم الرعاية الصحية المناسبة.
          <br>
          منصة كلينيكير تدرك أن رحلة المريض تتغير بمرور الوقت وتنتقل من الأعراض إلى التشخيص إلى الفحوصات السريرية إلى اقتراح خيارات العلاج مروراً بمرحلة العناية مابعد الجراحة، وتحديد المواعيد واختيار المستشفى للعمليات الجراحية، وكل مرحلة من هذه المراحل تتطلب قرارات حاسمة من المريض.
          <br>
          ولهذا منصة كلينيكير تؤمن أن كل قرار خاطئ يتعلق بالصحة له تأثير كبير ويترتب عليه عواقب كبيرة، ولهذا توفر المنصة حلولاً عملية للمرضى الذي يتعين عليه اتخاذ قرارات صعبة ومهمة بمعلومات محدودة مع حالة من القلق الشديد.
          <br>
          الرأي الطبي الثاني والتحدث مع استشاريين مؤهلين وأصحاب خبرة يشكل أهمية بالغة في مجال الطب والرعاية الصحية ويلعب دوراً مؤثراً من خلال اقتراح خيارات أخرى أفضل تساهم في تحسين ظروف الحالة الصحية للمريض، انطلاقاً من شعار المنصة: (منصة كلينيكير تساعدكم في اتخاذ القرار)
        </p>
      </div>
      <img :src="require('@/image/logo-aboutpage.png')" class="hidden md:block w-[270px] lg:w-[450px]" alt="">
    </div>
    <div class="video-about mb-[40px] relative flex justify-center items-center w-full h-[300px] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[#1c2737a4]">
      <img :src="require('@/image/contactus-header.png')" class="absolute top-0 left-0 w-full h-full object-cover" alt="">
      <img :src="require('@/image/play-video-icon.png')" @click="video_var = true" class="w-[80px] h-[80px] relative z-[3] rounded-full p-[20px] bg-[#ffffff] shadow-[0px_0px_20px_11px_#ffffffc7] animate-pulse cursor-pointer" alt="">
    </div>
    <div class="z-[999999] fixed top-0 left-0 overflow-auto w-full h-full bg-[rgba(0,_0,_0,_0.67)]  flex justify-center items-center" :class="{'hidden': video_var == false, 'block': video_var == true}" @click.self="video_var = false">
          <video ref="video" :src="require('../image/video-about.mp4')" v-play="video_var" id="video-container" width="300px" controls></video>
    </div>
    <div class="Why choose?  p-[60px_20px] md:p-[60px_60px] mb-[40px] flex justify-center items-center bg-[#325285]">
      <div class="flex flex-col gap-[20px] justify-center items-center">
        <h1 class="text-[20px] mb-[-10px] text-white">لماذا تختار</h1>
        <p class="text-[35px] text-[#ffffff] mb-[60px] font-bold text-center  "> <span class="text-[#5599f9]">كلينيكير</span> للرأي الطبي الثاني</p>
        <div class="flex justify-center items-center flex-wrap gap-[20px] bg-white rounded-[20px] p-[10px] md:p-[30px]">
          <div class="sm:w-[360px] p-[30px] w-full flex rounded-[15px] bg-white">
            <div class="flex justify-start items-start flex-col gap-[20px]">
              <div class="flex justify-start items-start gap-[-5px]">
                <img :src="require('@/image/why-1.webp')" class=" w-[70px] h-[70px]" alt="">
                <div class="flex justify-center items-center w-[35px] h-[35px] -rotate-[5deg] rounded-full bg-[#5599f9]">
                  <h2 class="text-[16px] text-[#ffffff]">1</h2>
                </div>
              </div>
              <div>
                <h1 class="text-[30px] text-[#5599f9] text-start mb-[20px]">جميع استشاراتك الطبية عبر كلينيكير</h1>
                <p class="text-[16px] text-[#4d4d4f] text-start">تواصل مع افضل الأطباء الاستشاريين عن بعد او احجز مع اطباء متخصصين في عيادتهم .</p>
              </div>
            </div>
          </div>
          <div class="sm:w-[360px] p-[20px_10px] md:p-[30px] w-full flex xl:border-l xl:border-r border-t border-b sm:border-b-[0] sm:border-t-[0] border-[#00000045] bg-white">
            <div class="flex justify-start items-start flex-col gap-[20px]">
              <div class="flex justify-start items-start gap-[-5px]">
                <img :src="require('@/image/why-2.webp')" class=" w-[70px] h-[70px]" alt="">
                <div class="flex justify-center items-center w-[35px] h-[35px] -rotate-[5deg] rounded-full bg-[#5599f9]">
                  <h2 class="text-[16px] text-[#ffffff]">2</h2>
                </div>
              </div>
              <div>
                <h1 class="text-[30px] text-[#5599f9] text-start mb-[20px]">احجز استشارتك مع الدكتور خلال دقائق</h1>
                <p class="text-[16px] text-[#4d4d4f] text-start">حجزك مؤكد بمجرد اختيارك من المواعيد المتاحة مع الطبيب.</p>
              </div>
            </div>
          </div>
          <div class="sm:w-[360px] p-[10px] md:p-[30px] w-full flex rounded-[15px] bg-white">
            <div class="flex justify-start items-start flex-col gap-[20px]">
              <div class="flex justify-start items-start gap-[-5px]">
                <img :src="require('@/image/why-3.webp')" class=" w-[70px] h-[70px]" alt="">
                <div class="flex justify-center items-center w-[35px] h-[35px] -rotate-[5deg] rounded-full bg-[#5599f9]">
                  <h2 class="text-[16px] text-[#ffffff]">3</h2>
                </div>
              </div>
              <div>
                <h1 class="text-[30px] text-[#5599f9] text-start mb-[20px]">استشاراتك في منتهى الخصوصية</h1>
                <p class="text-[16px] text-[#4d4d4f] text-start">خصوصية العملاء امانة.</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
      <div id="solutions" class="bg-[#F4F4F4] w-full flex justify-center items-center px-[30px] py-[80px]">
    <div class="w-full text-center flex flex-col justify-center items-center gap-[80px]">
      <h1 class="text-[30px] relative after:absolute after:bottom-[-7px] after:left-[50%] after:translate-x-[-50%] after:w-[60px] after:h-[1px] after:bg-[#000] before:absolute before:bottom-[-12px] before:left-[50%] before:translate-x-[-50%] before:w-[40px] before:h-[1px] before:bg-[#000]"> حلولنا <span class="text-[#5599f9]">الذكية</span></h1>
      <div class="w-full flex justify-center items-center gap-[80px_40px] flex-wrap relative">
        <div class="group bg-[#fff] flex justify-center items-center relative w-[250px] h-[260px] transition-all duration-[.6s] shadow-[0px_2.919785261154175px_3.490000009536743px_0px_rgba(255,_61,_100,_0.04)] hover:shadow-[0px_4px_12px_0px_rgba(255,_61,_100,_0.18)]">
          <h1 class="text-[24px]">الشفافية</h1>
          <svg class="absolute top-[-25px] group-hover:scale-[1.1] transition-all duration-[.6s] left-[50%] translate-x-[-50%]" width="50" height="50" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle class="group-hover:fill-[#5599f9] transition-all duration-[.6s]" cx="29.5" cy="29.5" r="29.5" fill="white"/>
            <path class="group-hover:fill-[#fff] transition-all duration-[.6s]" d="M31.875 18.75H21.25V41.25H26.25V35H31.875C36.355 35 40 31.355 40 26.875C40 22.395 36.355 18.75 31.875 18.75ZM31.875 30H26.25V23.75H31.875C33.5988 23.75 35 25.1512 35 26.875C35 28.5988 33.5988 30 31.875 30Z" fill="#5599f9"/>
          </svg>
        </div>
        <div class="group bg-[#fff] flex justify-center items-center relative w-[250px] h-[260px] transition-all duration-[.6s] shadow-[0px_4px_12px_0px_rgba(255,_61,_100,_0.18)]">
          <h1 class="text-[24px]">سهولة الأستخدام</h1>
          <svg class="absolute top-[-35px] group-hover:scale-[1.1] transition-all duration-[.6s] left-[50%] translate-x-[-50%]" width="70" height="70" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_101_1793)">
              <circle cx="40.5" cy="33.5" r="29.5" fill="#5599f9"/>
              </g>
              <path d="M34.0731 31.752C37.4224 31.752 39.9491 29.2253 39.9491 25.876C39.9491 22.5267 37.4224 20 34.0731 20C30.7238 20 28.1971 22.5267 28.1971 25.876C28.1971 29.2253 30.7238 31.752 34.0731 31.752ZM35.752 33.3435H32.3943C27.7657 33.3435 24 37.1092 24 41.7378V43.4167H44.1462V41.7378C44.1462 37.1092 40.3806 33.3435 35.752 33.3435ZM54.713 25.4395L47.4939 32.6451L45.3248 30.4761L42.9509 32.85L47.4939 37.3896L57.0835 27.8167L54.713 25.4395Z" fill="white"/>
              <defs>
              <filter id="filter0_d_101_1793" x="0" y="0" width="81" height="81" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="7"/>
              <feGaussianBlur stdDeviation="5.5"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.239216 0 0 0 0 0.392157 0 0 0 0.29 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_101_1793"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_101_1793" result="shape"/>
              </filter>
              </defs>
           </svg>
        </div>
        <div class="group bg-[#fff] flex justify-center items-center relative w-[250px] h-[260px] transition-all duration-[.6s] shadow-[0px_2.919785261154175px_3.490000009536743px_0px_rgba(255,_61,_100,_0.04)] hover:shadow-[0px_4px_12px_0px_rgba(255,_61,_100,_0.18)]">
          <h1 class="text-[24px]">الخصوصصية</h1>
          <svg class="absolute top-[-25px] group-hover:scale-[1.1] transition-all duration-[.6s] left-[50%] translate-x-[-50%]" width="50" height="50" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle class="group-hover:fill-[#5599f9] transition-all duration-[.6s]" cx="29.5" cy="29.5" r="29.5" fill="white"/>
            <path class="group-hover:fill-[#fff] transition-all duration-[.6s]" d="M30 17.5C26.5538 17.5 23.75 20.3038 23.75 23.75V27.5H22.5C21.837 27.5 21.2011 27.7634 20.7322 28.2322C20.2634 28.7011 20 29.337 20 30V40C20 40.663 20.2634 41.2989 20.7322 41.7678C21.2011 42.2366 21.837 42.5 22.5 42.5H37.5C38.163 42.5 38.7989 42.2366 39.2678 41.7678C39.7366 41.2989 40 40.663 40 40V30C40 29.337 39.7366 28.7011 39.2678 28.2322C38.7989 27.7634 38.163 27.5 37.5 27.5H36.25V23.75C36.25 20.3038 33.4462 17.5 30 17.5ZM26.25 23.75C26.25 21.6825 27.9325 20 30 20C32.0675 20 33.75 21.6825 33.75 23.75V27.5H26.25V23.75ZM31.25 37.1537V40H28.75V37.1537C28.313 36.9035 27.9621 36.5267 27.7435 36.0729C27.525 35.6192 27.4491 35.1099 27.5259 34.6122C27.6026 34.1145 27.8284 33.6517 28.1735 33.2849C28.5185 32.9181 28.9666 32.6645 29.4588 32.5575C29.8243 32.4767 30.2033 32.4789 30.5678 32.5641C30.9323 32.6493 31.2731 32.8152 31.565 33.0496C31.8569 33.284 32.0924 33.5809 32.2542 33.9185C32.416 34.2561 32.5 34.6257 32.5 35C32.4993 35.4372 32.3834 35.8664 32.1639 36.2446C31.9445 36.6227 31.6292 36.9363 31.25 37.1537Z" fill="#5599f9"/>
          </svg>
        </div>
      </div>
    </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'AboutPage',
  data() {
    return {
      video_var: false,
    };
  },
  watch: {
    video_var: function () {
      if(this.video_var == true){
        this.$refs.video.play()
      }else{
        this.$refs.video.pause()
      }
    },
  }
}
</script>

<style scoped lang="scss">

</style> 