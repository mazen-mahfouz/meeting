<template>
  <div class="AboutPage">
    <header class="w-full px-[30px] md:px-[80px] pt-[190px] pb-[120px] text-white relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(0,_0,_0,_0.57)] ">
      <img :src="require('@/image/about-header.png')" class="absolute top-0 left-0 w-full h-full object-cover" alt="">
      <div class="z-[2] relative text-center">
        <h1 class="text-[14vw] md:text-[80px] font-[700] mb-[20px]">من نحن</h1>
        <p class="text-[20px] md:text-[22px] font-[400] mb-[30px]">تعلم بافضل الطرق مع اكفأ المعلمين في كافة المواد لضمان اعلي النتائج </p>
        <button @click="$router.push('/contact-us')" class="flex justify-center items-center text-[16px] p-[15px_40px]  md:p-[17px_40px] border border-[#FF9432] rounded-[10px] m-auto cursor-pointer transition ease-in hover:bg-[#FF9432] ">تواصل معنا</button>
      </div>
    </header>
    <div class="about w-full max-w-[1400px] m-auto px-[30px] md:px-[100px] py-[60px] flex flex-col sm:flex-row justify-between items-center gap-[10px] md:gap-[10px_60px]  ">
      <div>
        <h1 class="text-[35px] mb-[20px] relative after:absolute after:bottom-[-7px] after:right-0 after:w-[70px] after:h-[3px] after:bg-[#FF9432]">رويتنا</h1>
        <p class="text-[18px] text-[rgba(0,_0,_0,_0.80)] text-right 2xl:max-w-[80%]">يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة
        إلى زيادة عدد الحروف التى يولدها التطبيق.إذا كنت تحتاج إلى عدد أكبر
        من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد
        ، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى 
        مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى 
        كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.ومن هنا 
        وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل
        الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم عناء البحث
        عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر 
        بشكل لا يليق.</p>
      </div>
      <img :src="require('@/image/about-1.png')" class=" w-[270px] lg:w-[350px] rounded-[40px_0]" alt="">
    </div>
    <div class="line w-full h-[0.3px] bg-[rgba(203,203,203,0.53)]"></div>
    <div class="about w-full max-w-[1400px] m-auto px-[30px] md:px-[100px] py-[60px] flex flex-col sm:flex-row-reverse justify-between items-center gap-[10px] md:gap-[10px_60px] ">
      <div>
        <h1 class="text-[35px] mb-[20px] relative after:absolute after:bottom-[-7px] after:right-0 after:w-[70px] after:h-[3px] after:bg-[#FF9432]">منهجنا</h1>
        <p class="text-[18px] text-[rgba(0,_0,_0,_0.80)] text-right 2xl:max-w-[80%]">يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة
        إلى زيادة عدد الحروف التى يولدها التطبيق.إذا كنت تحتاج إلى عدد أكبر
        من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد
        ، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى 
        مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى 
        كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.ومن هنا 
        وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل
        الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم عناء البحث
        عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر 
        بشكل لا يليق.</p>
      </div>
      <img :src="require('@/image/about-2.png')" class=" w-[270px] lg:w-[350px] rounded-[40px_0]" alt="">
    </div>
    <div class="line w-full h-[0.3px] bg-[rgba(203,203,203,0.53)]"></div>
    <div class="about w-full max-w-[1400px] m-auto px-[30px] md:px-[100px] py-[60px] flex flex-col sm:flex-row justify-between items-center gap-[10px] md:gap-[10px_60px]  ">
      <div>
        <h1 class="text-[35px] mb-[20px] relative after:absolute after:bottom-[-7px] after:right-0 after:w-[70px] after:h-[3px] after:bg-[#FF9432]">انجازاتنا</h1>
        <p class="text-[18px] text-[rgba(0,_0,_0,_0.80)] text-right 2xl:max-w-[80%]">يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة
        إلى زيادة عدد الحروف التى يولدها التطبيق.إذا كنت تحتاج إلى عدد أكبر
        من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد
        ، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى 
        مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى 
        كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.ومن هنا 
        وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل
        الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم عناء البحث
        عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر 
        بشكل لا يليق.</p>
      </div>
      <img :src="require('@/image/about-3.png')" class=" w-[270px] lg:w-[350px] rounded-[40px_0]" alt="">
    </div>
    <div class="line w-full h-[0.3px] bg-[rgba(203,203,203,0.53)]"></div>
  </div>
</template>

<script>

export default {
  name: 'AboutPage'
}
</script>

<style scoped lang="scss">

</style> 