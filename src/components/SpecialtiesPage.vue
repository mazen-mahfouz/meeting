<template>
  <div class="SpecialtiesPage">
    <header class="w-full px-[30px] md:px-[80px] pt-[190px] pb-[80px] text-white relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.73)] ">
      <img :src="require('@/image/same-opinion-background.jpg')" class="absolute top-0 left-0 w-full h-full object-cover" alt="">
      <div class="z-[2] relative text-center">
        <h1 class="text-[14vw] md:text-[80px] font-[700] mb-[20px]">التخصصات الطبية</h1>
        <p class="text-[18px] md:text-[14px] md:w-[70%] m-auto font-[400] mb-[30px]">منصة كلينيكير للاستشارات الطبية والرأي الطبي الثاني تقتصر في خدماتها على مجموعة محددة من التخصصات تمهيداً لإضافة مجموعة أخرى من التخصصات مستقبلاً ضمن خططها التوسعية لتشمل تخصصات أخرى مطلوبة ضمن الرعاية الصحية</p>
        <button @click="$router.push('/contact-us')" class="flex justify-center items-center text-[16px] p-[15px_40px]  md:p-[17px_40px] border border-[#5599f9] rounded-[10px] m-auto cursor-pointer transition ease-in hover:bg-[#5599f9] ">تواصل معنا</button>
      </div>
    </header>
    <div class="SpecialtiesPage text-center w-full max-w-[1400px] m-auto px-[30px] md:px-[100px] py-[60px]">
      <div class="flex justify-center items-center gap-[20px] flex-wrap">
        <div class="flex justify-center items-center gap-[20px] flex-col p-[10px] sm:w-[250px] h-auto">
          <img :src="require('@/image/plastic-surgery.png')" class="w-[60px] h-[60px]" alt="">
          <h1 class="text-[22px] relative after:absolute after:bottom-[-7px] after:left-[50%] after:translate-x-[-50%] after:w-[60px] after:h-[1px] after:bg-[#000] before:absolute before:bottom-[-12px] before:left-[50%] before:translate-x-[-50%] before:w-[40px] before:h-[1px] before:bg-[#000]">الجراحة التجميلية</h1>
          <p class="text-[18px] md:text-[13px] m-auto font-[400] mb-[30px]">يهتم هذا التخصص بالجراحات التجميلية والإجراءات الترميمية؛ ويشمل العيوب الخلقية، والحروق، والإصابات، والتشوهات، ويهدف إلى تحسين جودة الحياة لدى المرضى والمصابون، كما يهتم باستخدام أحدث التقنيات والأساليب الجراحية.</p>
        </div>
        <div class="flex justify-center items-center gap-[20px] flex-col p-[10px] sm:w-[250px] h-auto">
          <img :src="require('@/image/heart.png')" class="w-[60px] h-[60px]" alt="">
          <h1 class="text-[22px] relative after:absolute after:bottom-[-7px] after:left-[50%] after:translate-x-[-50%] after:w-[60px] after:h-[1px] after:bg-[#000] before:absolute before:bottom-[-12px] before:left-[50%] before:translate-x-[-50%] before:w-[40px] before:h-[1px] before:bg-[#000]">القلب والأوعية الدموية</h1>
          <p class="text-[18px] md:text-[13px] m-auto font-[400] mb-[30px]">هذا التخصص يهتم بتشخيص أمراض القلب والأوعية الدموية، وطرق الوقاية من حدوثها، كما يهتم هذا التخصص بالخطط العلاجية التي تضمن سلامة القلب وانسايبية حركة الدم في الأوعية الدموية..</p>
        </div>
        <div class="flex justify-center items-center gap-[20px] flex-col p-[10px] sm:w-[250px] h-auto">
          <img :src="require('@/image/surgery.png')" class="w-[60px] h-[60px]" alt="">
          <h1 class="text-[22px] relative after:absolute after:bottom-[-7px] after:left-[50%] after:translate-x-[-50%] after:w-[60px] after:h-[1px] after:bg-[#000] before:absolute before:bottom-[-12px] before:left-[50%] before:translate-x-[-50%] before:w-[40px] before:h-[1px] before:bg-[#000]">الجراحة</h1>
          <p class="text-[18px] md:text-[13px] m-auto font-[400] mb-[30px]">يهتم هذا التخصص بالعمليات الجراحية بأنواعها وعلاج الإصابات، وتحسين الصحة، وكذلك يهتم بإجراء الاختبارات التشخيصية، وتقديم الرأي الطبي حول مدى الحاجة لإجراء العمليات الجراحية.</p>
        </div>
        <div class="flex justify-center items-center gap-[20px] flex-col p-[10px] sm:w-[250px] h-auto">
          <img :src="require('@/image/skin.png')" class="w-[60px] h-[60px]" alt="">
          <h1 class="text-[22px] relative after:absolute after:bottom-[-7px] after:left-[50%] after:translate-x-[-50%] after:w-[60px] after:h-[1px] after:bg-[#000] before:absolute before:bottom-[-12px] before:left-[50%] before:translate-x-[-50%] before:w-[40px] before:h-[1px] before:bg-[#000]">الأمراض الجلدية</h1>
          <p class="text-[18px] md:text-[13px] m-auto font-[400] mb-[30px]">يهتم هذا التخصص بتشخيص الأمراض الجلدية واقتراح العلاجات المناسبة للمشاكل الصحية المتعلقة بالجلد والشعر والأظافر، كالإكزيما، وأمراض الصدفية، وسرطان الجلد، ويتربط هذا التخصص بالجراحات التجميلية التي تستهدف الجلد.</p>
        </div>
        <div class="flex justify-center items-center gap-[20px] flex-col p-[10px] sm:w-[250px] h-auto">
          <img :src="require('@/image/plastic-surgery.png')" class="w-[60px] h-[60px]" alt="">
          <h1 class="text-[22px] relative after:absolute after:bottom-[-7px] after:left-[50%] after:translate-x-[-50%] after:w-[60px] after:h-[1px] after:bg-[#000] before:absolute before:bottom-[-12px] before:left-[50%] before:translate-x-[-50%] before:w-[40px] before:h-[1px] before:bg-[#000]">الجراحة التجميلية</h1>
          <p class="text-[18px] md:text-[13px] m-auto font-[400] mb-[30px]">يهتم هذا التخصص بالجراحات التجميلية والإجراءات الترميمية؛ ويشمل العيوب الخلقية، والحروق، والإصابات، والتشوهات، ويهدف إلى تحسين جودة الحياة لدى المرضى والمصابون، كما يهتم باستخدام أحدث التقنيات والأساليب الجراحية.</p>
        </div>
        <div class="flex justify-center items-center gap-[20px] flex-col p-[10px] sm:w-[250px] h-auto">
          <img :src="require('@/image/heart.png')" class="w-[60px] h-[60px]" alt="">
          <h1 class="text-[22px] relative after:absolute after:bottom-[-7px] after:left-[50%] after:translate-x-[-50%] after:w-[60px] after:h-[1px] after:bg-[#000] before:absolute before:bottom-[-12px] before:left-[50%] before:translate-x-[-50%] before:w-[40px] before:h-[1px] before:bg-[#000]">القلب والأوعية الدموية</h1>
          <p class="text-[18px] md:text-[13px] m-auto font-[400] mb-[30px]">هذا التخصص يهتم بتشخيص أمراض القلب والأوعية الدموية، وطرق الوقاية من حدوثها، كما يهتم هذا التخصص بالخطط العلاجية التي تضمن سلامة القلب وانسايبية حركة الدم في الأوعية الدموية..</p>
        </div>
        <div class="flex justify-center items-center gap-[20px] flex-col p-[10px] sm:w-[250px] h-auto">
          <img :src="require('@/image/surgery.png')" class="w-[60px] h-[60px]" alt="">
          <h1 class="text-[22px] relative after:absolute after:bottom-[-7px] after:left-[50%] after:translate-x-[-50%] after:w-[60px] after:h-[1px] after:bg-[#000] before:absolute before:bottom-[-12px] before:left-[50%] before:translate-x-[-50%] before:w-[40px] before:h-[1px] before:bg-[#000]">الجراحة</h1>
          <p class="text-[18px] md:text-[13px] m-auto font-[400] mb-[30px]">يهتم هذا التخصص بالعمليات الجراحية بأنواعها وعلاج الإصابات، وتحسين الصحة، وكذلك يهتم بإجراء الاختبارات التشخيصية، وتقديم الرأي الطبي حول مدى الحاجة لإجراء العمليات الجراحية.</p>
        </div>
        <div class="flex justify-center items-center gap-[20px] flex-col p-[10px] sm:w-[250px] h-auto">
          <img :src="require('@/image/skin.png')" class="w-[60px] h-[60px]" alt="">
          <h1 class="text-[22px] relative after:absolute after:bottom-[-7px] after:left-[50%] after:translate-x-[-50%] after:w-[60px] after:h-[1px] after:bg-[#000] before:absolute before:bottom-[-12px] before:left-[50%] before:translate-x-[-50%] before:w-[40px] before:h-[1px] before:bg-[#000]">الأمراض الجلدية</h1>
          <p class="text-[18px] md:text-[13px] m-auto font-[400] mb-[30px]">يهتم هذا التخصص بتشخيص الأمراض الجلدية واقتراح العلاجات المناسبة للمشاكل الصحية المتعلقة بالجلد والشعر والأظافر، كالإكزيما، وأمراض الصدفية، وسرطان الجلد، ويتربط هذا التخصص بالجراحات التجميلية التي تستهدف الجلد.</p>
        </div>
        <div class="flex justify-center items-center gap-[20px] flex-col p-[10px] sm:w-[250px] h-auto">
          <img :src="require('@/image/plastic-surgery.png')" class="w-[60px] h-[60px]" alt="">
          <h1 class="text-[22px] relative after:absolute after:bottom-[-7px] after:left-[50%] after:translate-x-[-50%] after:w-[60px] after:h-[1px] after:bg-[#000] before:absolute before:bottom-[-12px] before:left-[50%] before:translate-x-[-50%] before:w-[40px] before:h-[1px] before:bg-[#000]">الجراحة التجميلية</h1>
          <p class="text-[18px] md:text-[13px] m-auto font-[400] mb-[30px]">يهتم هذا التخصص بالجراحات التجميلية والإجراءات الترميمية؛ ويشمل العيوب الخلقية، والحروق، والإصابات، والتشوهات، ويهدف إلى تحسين جودة الحياة لدى المرضى والمصابون، كما يهتم باستخدام أحدث التقنيات والأساليب الجراحية.</p>
        </div>
        <div class="flex justify-center items-center gap-[20px] flex-col p-[10px] sm:w-[250px] h-auto">
          <img :src="require('@/image/heart.png')" class="w-[60px] h-[60px]" alt="">
          <h1 class="text-[22px] relative after:absolute after:bottom-[-7px] after:left-[50%] after:translate-x-[-50%] after:w-[60px] after:h-[1px] after:bg-[#000] before:absolute before:bottom-[-12px] before:left-[50%] before:translate-x-[-50%] before:w-[40px] before:h-[1px] before:bg-[#000]">القلب والأوعية الدموية</h1>
          <p class="text-[18px] md:text-[13px] m-auto font-[400] mb-[30px]">هذا التخصص يهتم بتشخيص أمراض القلب والأوعية الدموية، وطرق الوقاية من حدوثها، كما يهتم هذا التخصص بالخطط العلاجية التي تضمن سلامة القلب وانسايبية حركة الدم في الأوعية الدموية..</p>
        </div>
        <div class="flex justify-center items-center gap-[20px] flex-col p-[10px] sm:w-[250px] h-auto">
          <img :src="require('@/image/surgery.png')" class="w-[60px] h-[60px]" alt="">
          <h1 class="text-[22px] relative after:absolute after:bottom-[-7px] after:left-[50%] after:translate-x-[-50%] after:w-[60px] after:h-[1px] after:bg-[#000] before:absolute before:bottom-[-12px] before:left-[50%] before:translate-x-[-50%] before:w-[40px] before:h-[1px] before:bg-[#000]">الجراحة</h1>
          <p class="text-[18px] md:text-[13px] m-auto font-[400] mb-[30px]">يهتم هذا التخصص بالعمليات الجراحية بأنواعها وعلاج الإصابات، وتحسين الصحة، وكذلك يهتم بإجراء الاختبارات التشخيصية، وتقديم الرأي الطبي حول مدى الحاجة لإجراء العمليات الجراحية.</p>
        </div>
        <div class="flex justify-center items-center gap-[20px] flex-col p-[10px] sm:w-[250px] h-auto">
          <img :src="require('@/image/skin.png')" class="w-[60px] h-[60px]" alt="">
          <h1 class="text-[22px] relative after:absolute after:bottom-[-7px] after:left-[50%] after:translate-x-[-50%] after:w-[60px] after:h-[1px] after:bg-[#000] before:absolute before:bottom-[-12px] before:left-[50%] before:translate-x-[-50%] before:w-[40px] before:h-[1px] before:bg-[#000]">الأمراض الجلدية</h1>
          <p class="text-[18px] md:text-[13px] m-auto font-[400] mb-[30px]">يهتم هذا التخصص بتشخيص الأمراض الجلدية واقتراح العلاجات المناسبة للمشاكل الصحية المتعلقة بالجلد والشعر والأظافر، كالإكزيما، وأمراض الصدفية، وسرطان الجلد، ويتربط هذا التخصص بالجراحات التجميلية التي تستهدف الجلد.</p>
        </div>
        
      </div>
    </div>
    <div class="line w-full h-[0.3px] bg-[rgba(203,203,203,0.53)]"></div>
    <div class="Medicines and treatments w-full max-w-[1400px] m-auto px-[30px] md:px-[100px] py-[10px] flex flex-col md:flex-row justify-between items-center gap-[10px] lg:gap-[10%]">
      <div>
        <h1 class="text-[35px] text-[#5599f9] mb-[20px] relative after:absolute after:bottom-[-7px] after:right-0 after:w-[70px] after:h-[3px] after:bg-[#5599f9]"> الأدوية والعلاجات</h1>
        <p class="text-[18px] text-[rgba(0,_0,_0,_0.80)] text-right 2xl:max-w-[80%] mb-[20px]">تهتم منصة كلينيكير أيضاً بالأدوية الطبية ومراجعة خطط العلاج المقترحة ومدى مناسبتها للأوضاع الصحية للمرضى، مع اقتراح خطط بديلة للعلاجات وتقديم توصيات بأفضل الخيارات المناسبة للمرضى.</p>
      </div>
      <img :src="require('@/image/medical-research.png')" class="hidden md:block w-[270px] lg:w-[450px]" alt="">
    </div>
  </div>
</template>

<script>

export default {
  name: 'SpecialtiesPage',
}
</script>

<style scoped lang="scss">

</style> 