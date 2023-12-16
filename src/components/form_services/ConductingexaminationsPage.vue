<template>
  <div class="SecondopinionPage">
    <div class="SecondopinionPage text-center w-full max-w-[1400px] m-auto px-[10px] md:px-[60px] py-[60px]">
      <h1 class="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-[28px] mb-[20px]">نموذج طلب إجراء الفحوصات والأشعة</h1>
      <p class="text-[14px] text-gray-700 mb-[30px]">أحياناً يتطلب الحصول على رأي طبي ثاني إجراء المزيد من الفحوصات والأشعة والتحاليل المختبرية التي تساعد الاستشاري على إعطاء تقرير مفصل عن الحالة الصحية للمريض وتقديم خطط العلاج المقترحة التي تعمل على تحسين الظروف الصحية للمريض.</p>
    
      <ValidationObserver v-slot="{ handleSubmit }">
        <form  @submit.prevent="handleSubmit(onSubmit)" class="space-y-4 md:space-y-6 px-[10px] md:px-[30px] pt-[40px] text-start" action="#">
            <div class="w-full grid sm:grid-cols-2 gap-[20px]">
              <ValidationProvider name="first_name" rules="required|alpha" :custom-messages="{required: 'اكتب اسمك الاول !'}" v-slot="{ errors }">
                <div>
                  <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 ">الاسم الاول</label>
                  <input type="text" v-model="frist_name_clint" name="first_name" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="محمد" required="">
                  <span class="text-[red] font-bold text-[12px] m-[5px] my-[20px] block">{{ errors[0] }}</span>
                </div>
              </ValidationProvider>
              <ValidationProvider name="age" rules="required|numeric" :custom-messages="{required: 'اكتب عمرك  !'}" v-slot="{ errors }">
                <div>
                  <label for="age" class="block mb-2 text-sm font-medium text-gray-900 ">العمر</label>
                  <input type="number" v-model="age_clint" name="age" id="age" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="25" required="">
                  <span class="text-[red] font-bold text-[12px] m-[5px] my-[20px] block">{{ errors[0] }}</span>
                </div>
              </ValidationProvider>
            </div>
            <div class="w-full grid sm:grid-cols-2 gap-[20px]">
              <ValidationProvider name="email" rules="required|email" :custom-messages="{required: 'اكتب البريد الالكتروني !', email: 'اكتب البريد الالكتروني !'}" v-slot="{ errors }">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">بريدك الالكتروني</label>
                <input type="email" v-model="email_clint" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required="">
                <span class="text-[red] font-bold text-[12px] m-[5px] my-[20px] block">{{ errors[0] }}</span>
              </ValidationProvider>
              <ValidationProvider name="number" rules="required|numeric|min:8" :custom-messages="{required: 'اكتب رقم التلفون  !', min: 'لا تقل عن 8 ارقام '}" v-slot="{ errors }">
                  <label for="number" class="block mb-2 text-sm font-medium text-gray-900">رقم الموبايل</label>
                  <input type="number" v-model="number_clint" name="number" id="number" placeholder="01277898990" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="">
                  <span class="text-[red] font-bold text-[12px] m-[5px] my-[20px] block">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div class="w-full grid sm:grid-cols-2 gap-[20px]">
              <div class=" relative w-full">
                <div class="relative w-full">
                  <div ref="mytoogle_gender_clint" class="cursor-pointer flex items-center justify-between border p-4 py-[10px] text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500  w-full" @click="toogle_gender_clint == false? toogle_gender_clint = true : toogle_gender_clint = false"><p class="pr-[35px] md:pr-[20px] capitalize">{{select_gender_clint}}</p> <img :src="require('@/image/angle-down.png')" class="w-[21px]" :class="{'-rotate-90': toogle_gender_clint}"></div>
                    <ul class="absolute top-[103%] left-0 z-50 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full" :class="{'block': toogle_gender_clint, hidden: !toogle_gender_clint}">
                      <li v-for="(gender_clint, index) in gender_clint" :key="gender_clint" @click="selectOF_gender_clint(gender_clint, index)" class="item_select capitalize cursor-pointer py-[12px] px-[18px] text-[14px] flex items-center hover:bg-[#eeeeee] hover:text-black">{{gender_clint}} <span class="press">اختر</span></li>
                    </ul>
                  </div>
                </div>
                <div class=" relative w-full">
                  <div class="relative w-full">
                    <div ref="mytoogle_specialties" class="cursor-pointer flex items-center justify-between border p-4 py-[10px] text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 w-full" @click="toogle_specialties == false? toogle_specialties = true : toogle_specialties = false"><p class="pr-[35px] md:pr-[20px] capitalize">{{select_specialties}}</p> <img :src="require('@/image/angle-down.png')" class="w-[21px]" :class="{'-rotate-90': toogle_specialties}"></div>
                    <ul class="absolute top-[103%] left-0 z-50 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full" :class="{'block': toogle_specialties, hidden: !toogle_specialties}">
                      <li v-for="(specialties, index) in specialtiess" :key="specialties" @click="selectOF_specialties(specialties, index)" class="item_select capitalize cursor-pointer py-[12px] px-[18px] text-[14px] flex items-center hover:bg-[#eeeeee] hover:text-black">{{specialties}} <span class="press">اختر</span></li>
                    </ul>
                  </div>
                </div>
            </div>
            <ValidationProvider name="details_problem" rules="required|alpha" :custom-messages="{required: 'اكتب تفاصيل المشكة  !'}" v-slot="{ errors }">
              <div class="my-[20px]">
                <label for="details_problem" class="block mb-2 text-sm font-medium text-gray-900 ">الحالة الصحية باختصار</label>
                <input type="text" v-model="details_problem_clint" name="details_problem" id="details_problem" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="بطني وجعاني احس بالدوران" required="">
                <span class="text-[red] font-bold text-[12px] m-[5px] my-[20px] block">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
            <ValidationProvider name="tests" rules="required" :custom-messages="{required: 'ما هي الفحوصات !'}" v-slot="{ errors }">
              <h1 class="block mb-2 text-sm font-medium text-gray-900 mt-[30px]"> الفحوصات التي تم إجراؤها</h1>
              <span class="text-[red] font-bold text-[12px] m-[5px] my-[20px] block">{{ errors[0] }}</span>
              <div class="w-full flex flex-wrap justify-start items-center gap-[20px]">
                <div class="flex items-center">
                    <input id="tests1" v-model="tests" type="checkbox" value="الأشعة المقطعية" name="tests" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500">
                    <label for="tests1" class="ms-2 text-sm font-medium text-gray-900">الأشعة المقطعية</label>
                </div>
                <div class="flex items-center">
                    <input id="tests2" v-model="tests" type="checkbox" value="الأشعة السينية" name="tests" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 ">
                    <label for="tests2" class="ms-2 text-sm font-medium text-gray-900">الأشعة السينية</label>
                </div>
                <div class="flex items-center">
                    <input id="tests1" v-model="tests" type="checkbox" value="تخطيط القلب" name="tests" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500">
                    <label for="tests1" class="ms-2 text-sm font-medium text-gray-900">تخطيط القلب</label>
                </div>
                <div class="flex items-center">
                    <input id="tests2" v-model="tests" type="checkbox" value="الموجات فوق الصوتية" name="tests" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 ">
                    <label for="tests2" class="ms-2 text-sm font-medium text-gray-900">الموجات فوق الصوتية</label>
                </div>
                <div class="flex items-center">
                    <input id="tests1" v-model="tests" type="checkbox" value="تصوير الأوعية الدموية" name="tests" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500">
                    <label for="tests1" class="ms-2 text-sm font-medium text-gray-900">تصوير الأوعية الدموية</label>
                </div>
                <div class="flex items-center">
                    <input id="tests2" v-model="tests" type="checkbox" value="الرنين المغناطيسي" name="tests" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 ">
                    <label for="tests2" class="ms-2 text-sm font-medium text-gray-900">الرنين المغناطيسي</label>
                </div>
              </div>
            </ValidationProvider>
            <ValidationProvider rules="required|image" ref="provider" name="upload_file" :custom-messages="{required: ' ارفع الملفات !'}" v-slot="{ errors }">
              <div class="w-full md:w-[100%] relative mt-[30px]">
                  <div id="conn-input-file" class="w-full py-4 ">
                    <span> {{ upload_file_clint == false? 'ارفق الملفات' : upload_file_clint}}</span>
                    <input type="file" ref="input_file" @change="handleFileChange" name="upload_file" id="add-music-file" multiple accept="jpg/*">
                    <span class="text-[red] font-bold text-[12px] m-[5px] my-[20px] block">{{ errors[0] }}</span>
                  </div>
              </div>
            </ValidationProvider>
            <button type="submit" class="w-full text-white bg-[#5599f9] hover:bg-[#4b89e1] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">ارسل</button>
        </form>
    </ValidationObserver>
    </div>
  </div>
</template>

<script>

import { ValidationProvider, ValidationObserver } from 'vee-validate/dist/vee-validate.full';

export default {
  name: 'SecondopinionPage',
  data() {
    return {
      frist_name_clint: '',
      age_clint: '',
      email_clint: '',
      number_clint: '',
      details_problem_clint: '',
      dangerous_diseases : '',
      hospitalized: '',
      surgery: '',
      tests: [],
      diseases: [],
      upload_file_clint: false,

      gender_clint: ['ذكر', 'انثي'],
      select_gender_clint: 'ذكر',
      toogle_gender_clint : false,

      specialtiess: ['الجراحة التجميلية', 'القلب والأوعية الدموية', 'الأمراض الجلدية', 'الأشعة والأورام', 'الجراحة', 'النساء والولادة', 'الأمراض التنفسية', 'أمراض الجهاز الهضمي', 'الأطفال',],
      select_specialties: 'كل التخصصات',
      toogle_specialties : false,
    };
  },
  components:{
    ValidationProvider,
    ValidationObserver
  },
  mounted() {
  let self = this;
  document.addEventListener('click', (e)=> {
      if (self.$refs.mytoogle_gender_clint !==undefined && self.$refs.mytoogle_gender_clint.contains(e.target)===false) {
        self.toogle_gender_clint = false;
      }
      if (self.$refs.mytoogle_specialties !==undefined && self.$refs.mytoogle_specialties.contains(e.target)===false) {
        self.toogle_specialties = false;
      }
  })
  },
  methods: {
    onSubmit () {
      alert('Form has been submitted!');
    },
    selectOF_gender_clint(x){
      this.select_gender_clint = x;
     },
     selectOF_specialties(x){
      this.select_specialties = x;
     },
     async handleFileChange(e) {
      const { valid } = await this.$refs.provider.validate(e);

      if (valid) {
        this.upload_file_clint = this.$refs.input_file.value
        // TODO: Upload the file
        console.log(valid);
      }else{
        this.upload_file_clint = false
      }
    }
  }
}
</script>

<style scoped lang="scss">
 .item_select{
  position: relative;

  .press{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 20px;
    font-size: 12px;
    color: rgb(168, 168, 168);
    display: none;
  }
  &:hover{
    .press{
      display: block !important;
    }
  }
}

#conn-input-file {
  width: 100%;
  height: 50px;
  background: linear-gradient(90deg, rgb(2, 0, 36) 0%, #a5003dbf 100%, rgba(9, 9, 121, 0.2973564426) 100%);
  color: white;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  border-radius: 4px;
  transition: .5s;

  &:hover{
    background: linear-gradient(90deg, rgb(2, 0, 36) 0%, #410018bf 100%, rgba(9, 9, 121, 0.2973564426) 100%);
  }

  input {
      width: 100%;
      height: 100%;
      opacity: 0;
      z-index: 999999;
      position: absolute;
      top: 0;
      left: 0;
      cursor: pointer;
  }
}

</style> 