<template>
  <div class="HomePage">
    <header class="w-full px-[30px] md:px-[80px] pt-[190px] pb-[120px] text-white relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.73)] ">
      <img :src="require('@/image/header-img.jpeg')" class="absolute top-0 left-0 w-full h-full object-cover" alt="">
      <div class="z-[2] w-full max-w-[1400px] m-auto relative text-center md:text-center">
        <h1 class="text-[14vw] md:text-[70px] font-[700] mb-[20px]"><span class="text-[#5599f9]">كلينيكير</span> للرأي الطبي الثاني</h1>
        <p class="text-[20px] md:text-[22px] font-[400] mb-[50px]">دعونا نساعدكم في اتخاذ القرار</p>
        <button @click="$router.push('/not-found')" class=" justify-center items-center text-[16px] p-[15px_3.1rem]  md:p-[17px_40px] border-[2px] border-[#46439b] bg-[#46439b] rounded-[10px] cursor-pointer transition ease-in hover:bg-transparent inline mb-[10px] md:ml-[10px]">احصل على الخدمة</button>
        <button @click="$router.push('/not-found')" class="justify-center items-center text-[16px] p-[15px_3.1rem]  md:p-[17px_40px] border-[2px] border-[#5599f9] bg-[#5599f9] rounded-[10px] m-auto md:m-0 cursor-pointer transition ease-in hover:bg-transparent inline">تعرف على الخدمة</button>
      </div>
    </header>
    <div class="about w-full max-w-[1400px] m-auto px-[30px] md:px-[100px] py-[60px] flex flex-col md:flex-row justify-between items-center gap-[10px] lg:gap-[10%]">
      <div>
        <h1 class="text-[35px] mb-[20px] relative after:absolute after:bottom-[-7px] after:right-0 after:w-[70px] after:h-[3px] after:bg-[#5599f9]"> <span class="text-[#5599f9]">كلينيكير</span> للرأي الطبي الثاني</h1>
        <p class="text-[18px] text-[rgba(0,_0,_0,_0.80)] text-right 2xl:max-w-[80%] mb-[20px]">الرأي الطبي الثاني هو خدمة تقدمها منصة كلينيكير تتيح للمرضى الحصول على أراء واستشارات طبية ثانية بشأن مشكلاتهم الصحية للوصول للتشخيصات الدقيقة واقتراح خطط العلاج المناسبة لتحسين مستوى الصحة والنتائج الطبية الإيجابية، وذلك من خلال ربط المرضى بالأطباء والاستشاريين المتميزين من مختلف التخصصات الطبية.</p>
        <button @click="$router.push('/not-found')" class="justify-center items-center text-white text-[16px] p-[15px_3.1rem]  md:p-[17px_40px] border-[2px] border-[#5599f9] bg-[#5599f9] rounded-[10px] m-auto md:m-0 cursor-pointer transition ease-in hover:bg-transparent hover:text-[#5599f9] inline">اقراء المزيد</button>
      </div>
      <img :src="require('@/image/about_img_inhome.png')" class="hidden md:block w-[270px] lg:w-[450px]" alt="">
    </div>
    <div class="line w-full h-[0.3px] bg-[rgba(203,203,203,0.53)]"></div>
    <div class="doctors w-full max-w-[1400px] m-auto text-center px-[30px] md:px-[50px] py-[60px] bg-[#f1f4f7]">
      <img :src="require('@/image/subject-img-inhome.png')" class="w-[120px] lg:w-[100px] m-auto mb-[20px]" alt="">
      <h1 class="text-[32px] mb-[20px]">مجموعة الاطباء</h1>
      <div class="flex flex-wrap justify-center items-center py-[30px] gap-[10px] mb-[30px]">
        <div class="p-[16px] m-[10px] w-full sm:w-[360px] flex pl-[30px] rounded-[15px] bg-white">
          <div class="flex justify-start items-start flex-col gap-[20px]">
            <div class="flex justify-start items-start gap-[20px]">
              <img :src="require('@/image/person.jpg')" class="rounded-full w-[60px] h-[60px]" alt="">
              <div class="flex flex-col gap-[8px] mt-[5px] text-start">
                <h2 class="text-[11px] text-[#4d4d4f]">بهاء محمود</h2>
                <h1 class="text-[12px] text-[#5599f9]">طبيب نفسي</h1>
                <div class="flex justify-start items-start gap-[5px]">               
                  <i class="fa-solid fa-star text-[12px] text-[#ffc10e]"></i>
                  <i class="fa-solid fa-star text-[12px] text-[#ffc10e]"></i>
                  <i class="fa-solid fa-star text-[12px] text-[#ffc10e]"></i>
                  <i class="fa-solid fa-star text-[12px] text-[#ffc10e]"></i>
                  <i class="fa-solid fa-star text-[12px] text-[rgba(203,203,203,0.53)]"></i>
                </div>
                <span class="text-[9px] text-[#666669] tracking-wider">4.82 (568 تقييم)</span>
              </div>
            </div>
            <div>
              <p class="text-[12px] text-[#212529] text-start">اخصائي روماتيزم و مفاصل و الطب الطبيعي و التاهيل رئيس الجمعية المصرية للروماتيزم والتاهيل...</p>
            </div>
            <div class="flex flex-col gap-[8px] text-start">
                <h1 class="text-[11px]">الأهتمامات:</h1>
                <ul class="flex justify-start items-center gap-[3px]">
                  <li class="text-[#60a899] text-[11px] p-[4px_10px] rounded-md bg-[#6cca871a]">الاكتئاب</li>
                  <li class="text-[#60a899] text-[11px] p-[4px_10px] rounded-md bg-[#6cca871a]">الفوبيا والرهاب الاجتماعي</li>
                </ul>
            </div>
            <div class="flex justify-start items-center gap-[10px]">
              <i class="fa-solid fa-building text-[#5599f9] text-[20px]"></i>
              <p class="text-[11px] text-[#212529]">الفيوم، شارع ابو بكر الصديق البحاري - الفيوم</p>
            </div>
            <div  class="w-full flex justify-between items-center mb-[10px]">
              <h1 class="text-[#60a899] text-[14px] opacity-[.5] hover:opacity-100 transition-all duration-[.6s] cursor-pointer">عرض الملف الشخصي</h1>
              <button class="bg-[linear-gradient(180deg,_#4F94FC_0%,_#035FE9_100%)] hover:bg-[linear-gradient(180deg,#2C68C1_0%,#04347B_100%)] transition-all duration-[.5s] text-[14px] text-[white] py-[10px] px-[16px] rounded-md cursor-pointer">احجز الان</button>
            </div>
          </div>
        </div>
        <div class="p-[16px] m-[10px] w-full sm:w-[360px] flex pl-[30px] rounded-[15px] bg-white">
          <div class="flex justify-start items-start flex-col gap-[20px]">
            <div class="flex justify-start items-start gap-[20px]">
              <img :src="require('@/image/person.jpg')" class="rounded-full w-[60px] h-[60px]" alt="">
              <div class="flex flex-col gap-[8px] mt-[5px] text-start">
                <h2 class="text-[11px] text-[#4d4d4f]">بهاء محمود</h2>
                <h1 class="text-[12px] text-[#5599f9]">طبيب نفسي</h1>
                <div class="flex justify-start items-start gap-[5px]">               
                  <i class="fa-solid fa-star text-[12px] text-[#ffc10e]"></i>
                  <i class="fa-solid fa-star text-[12px] text-[#ffc10e]"></i>
                  <i class="fa-solid fa-star text-[12px] text-[#ffc10e]"></i>
                  <i class="fa-solid fa-star text-[12px] text-[#ffc10e]"></i>
                  <i class="fa-solid fa-star text-[12px] text-[rgba(203,203,203,0.53)]"></i>
                </div>
                <span class="text-[9px] text-[#666669] tracking-wider">4.82 (568 تقييم)</span>
              </div>
            </div>
            <div>
              <p class="text-[12px] text-[#212529] text-start">اخصائي روماتيزم و مفاصل و الطب الطبيعي و التاهيل رئيس الجمعية المصرية للروماتيزم والتاهيل...</p>
            </div>
            <div class="flex flex-col gap-[8px] text-start">
                <h1 class="text-[11px]">الأهتمامات:</h1>
                <ul class="flex justify-start items-center gap-[3px]">
                  <li class="text-[#60a899] text-[11px] p-[4px_10px] rounded-md bg-[#6cca871a]">الاكتئاب</li>
                  <li class="text-[#60a899] text-[11px] p-[4px_10px] rounded-md bg-[#6cca871a]">الفوبيا والرهاب الاجتماعي</li>
                </ul>
            </div>
            <div class="flex justify-start items-center gap-[10px]">
              <i class="fa-solid fa-building text-[#5599f9] text-[20px]"></i>
              <p class="text-[11px] text-[#212529]">الفيوم، شارع ابو بكر الصديق البحاري - الفيوم</p>
            </div>
            <div  class="w-full flex justify-between items-center mb-[10px]">
              <h1 class="text-[#60a899] text-[14px] opacity-[.5] hover:opacity-100 transition-all duration-[.6s] cursor-pointer">عرض الملف الشخصي</h1>
              <button class="bg-[linear-gradient(180deg,_#4F94FC_0%,_#035FE9_100%)] hover:bg-[linear-gradient(180deg,#2C68C1_0%,#04347B_100%)] transition-all duration-[.5s] text-[14px] text-[white] py-[10px] px-[16px] rounded-md cursor-pointer">احجز الان</button>
            </div>
          </div>
        </div>
        <div class="p-[16px] m-[10px] w-full sm:w-[360px] flex pl-[30px] rounded-[15px] bg-white">
          <div class="flex justify-start items-start flex-col gap-[20px]">
            <div class="flex justify-start items-start gap-[20px]">
              <img :src="require('@/image/person.jpg')" class="rounded-full w-[60px] h-[60px]" alt="">
              <div class="flex flex-col gap-[8px] mt-[5px] text-start">
                <h2 class="text-[11px] text-[#4d4d4f]">بهاء محمود</h2>
                <h1 class="text-[12px] text-[#5599f9]">طبيب نفسي</h1>
                <div class="flex justify-start items-start gap-[5px]">               
                  <i class="fa-solid fa-star text-[12px] text-[#ffc10e]"></i>
                  <i class="fa-solid fa-star text-[12px] text-[#ffc10e]"></i>
                  <i class="fa-solid fa-star text-[12px] text-[#ffc10e]"></i>
                  <i class="fa-solid fa-star text-[12px] text-[#ffc10e]"></i>
                  <i class="fa-solid fa-star text-[12px] text-[rgba(203,203,203,0.53)]"></i>
                </div>
                <span class="text-[9px] text-[#666669] tracking-wider">4.82 (568 تقييم)</span>
              </div>
            </div>
            <div>
              <p class="text-[12px] text-[#212529] text-start">اخصائي روماتيزم و مفاصل و الطب الطبيعي و التاهيل رئيس الجمعية المصرية للروماتيزم والتاهيل...</p>
            </div>
            <div class="flex flex-col gap-[8px] text-start">
                <h1 class="text-[11px]">الأهتمامات:</h1>
                <ul class="flex justify-start items-center gap-[3px]">
                  <li class="text-[#60a899] text-[11px] p-[4px_10px] rounded-md bg-[#6cca871a]">الاكتئاب</li>
                  <li class="text-[#60a899] text-[11px] p-[4px_10px] rounded-md bg-[#6cca871a]">الفوبيا والرهاب الاجتماعي</li>
                </ul>
            </div>
            <div class="flex justify-start items-center gap-[10px]">
              <i class="fa-solid fa-building text-[#5599f9] text-[20px]"></i>
              <p class="text-[11px] text-[#212529]">الفيوم، شارع ابو بكر الصديق البحاري - الفيوم</p>
            </div>
            <div  class="w-full flex justify-between items-center mb-[10px]">
              <h1 class="text-[#60a899] text-[14px] opacity-[.5] hover:opacity-100 transition-all duration-[.6s] cursor-pointer">عرض الملف الشخصي</h1>
              <button class="bg-[linear-gradient(180deg,_#4F94FC_0%,_#035FE9_100%)] hover:bg-[linear-gradient(180deg,#2C68C1_0%,#04347B_100%)] transition-all duration-[.5s] text-[14px] text-[white] py-[10px] px-[16px] rounded-md cursor-pointer">احجز الان</button>
            </div>
          </div>
        </div>
        <div class="p-[16px] m-[10px] w-full sm:w-[360px] flex pl-[30px] rounded-[15px] bg-white">
          <div class="flex justify-start items-start flex-col gap-[20px]">
            <div class="flex justify-start items-start gap-[20px]">
              <img :src="require('@/image/person.jpg')" class="rounded-full w-[60px] h-[60px]" alt="">
              <div class="flex flex-col gap-[8px] mt-[5px] text-start">
                <h2 class="text-[11px] text-[#4d4d4f]">بهاء محمود</h2>
                <h1 class="text-[12px] text-[#5599f9]">طبيب نفسي</h1>
                <div class="flex justify-start items-start gap-[5px]">               
                  <i class="fa-solid fa-star text-[12px] text-[#ffc10e]"></i>
                  <i class="fa-solid fa-star text-[12px] text-[#ffc10e]"></i>
                  <i class="fa-solid fa-star text-[12px] text-[#ffc10e]"></i>
                  <i class="fa-solid fa-star text-[12px] text-[#ffc10e]"></i>
                  <i class="fa-solid fa-star text-[12px] text-[rgba(203,203,203,0.53)]"></i>
                </div>
                <span class="text-[9px] text-[#666669] tracking-wider">4.82 (568 تقييم)</span>
              </div>
            </div>
            <div>
              <p class="text-[12px] text-[#212529] text-start">اخصائي روماتيزم و مفاصل و الطب الطبيعي و التاهيل رئيس الجمعية المصرية للروماتيزم والتاهيل...</p>
            </div>
            <div class="flex flex-col gap-[8px] text-start">
                <h1 class="text-[11px]">الأهتمامات:</h1>
                <ul class="flex justify-start items-center gap-[3px]">
                  <li class="text-[#60a899] text-[11px] p-[4px_10px] rounded-md bg-[#6cca871a]">الاكتئاب</li>
                  <li class="text-[#60a899] text-[11px] p-[4px_10px] rounded-md bg-[#6cca871a]">الفوبيا والرهاب الاجتماعي</li>
                </ul>
            </div>
            <div class="flex justify-start items-center gap-[10px]">
              <i class="fa-solid fa-building text-[#5599f9] text-[20px]"></i>
              <p class="text-[11px] text-[#212529]">الفيوم، شارع ابو بكر الصديق البحاري - الفيوم</p>
            </div>
            <div  class="w-full flex justify-between items-center mb-[10px]">
              <h1 class="text-[#60a899] text-[14px] opacity-[.5] hover:opacity-100 transition-all duration-[.6s] cursor-pointer">عرض الملف الشخصي</h1>
              <button class="bg-[linear-gradient(180deg,_#4F94FC_0%,_#035FE9_100%)] hover:bg-[linear-gradient(180deg,#2C68C1_0%,#04347B_100%)] transition-all duration-[.5s] text-[14px] text-[white] py-[10px] px-[16px] rounded-md cursor-pointer">احجز الان</button>
            </div>
          </div>
        </div>
        <div class="p-[16px] m-[10px] w-full sm:w-[360px] flex pl-[30px] rounded-[15px] bg-white">
          <div class="flex justify-start items-start flex-col gap-[20px]">
            <div class="flex justify-start items-start gap-[20px]">
              <img :src="require('@/image/person.jpg')" class="rounded-full w-[60px] h-[60px]" alt="">
              <div class="flex flex-col gap-[8px] mt-[5px] text-start">
                <h2 class="text-[11px] text-[#4d4d4f]">بهاء محمود</h2>
                <h1 class="text-[12px] text-[#5599f9]">طبيب نفسي</h1>
                <div class="flex justify-start items-start gap-[5px]">               
                  <i class="fa-solid fa-star text-[12px] text-[#ffc10e]"></i>
                  <i class="fa-solid fa-star text-[12px] text-[#ffc10e]"></i>
                  <i class="fa-solid fa-star text-[12px] text-[#ffc10e]"></i>
                  <i class="fa-solid fa-star text-[12px] text-[#ffc10e]"></i>
                  <i class="fa-solid fa-star text-[12px] text-[rgba(203,203,203,0.53)]"></i>
                </div>
                <span class="text-[9px] text-[#666669] tracking-wider">4.82 (568 تقييم)</span>
              </div>
            </div>
            <div>
              <p class="text-[12px] text-[#212529] text-start">اخصائي روماتيزم و مفاصل و الطب الطبيعي و التاهيل رئيس الجمعية المصرية للروماتيزم والتاهيل...</p>
            </div>
            <div class="flex flex-col gap-[8px] text-start">
                <h1 class="text-[11px]">الأهتمامات:</h1>
                <ul class="flex justify-start items-center gap-[3px]">
                  <li class="text-[#60a899] text-[11px] p-[4px_10px] rounded-md bg-[#6cca871a]">الاكتئاب</li>
                  <li class="text-[#60a899] text-[11px] p-[4px_10px] rounded-md bg-[#6cca871a]">الفوبيا والرهاب الاجتماعي</li>
                </ul>
            </div>
            <div class="flex justify-start items-center gap-[10px]">
              <i class="fa-solid fa-building text-[#5599f9] text-[20px]"></i>
              <p class="text-[11px] text-[#212529]">الفيوم، شارع ابو بكر الصديق البحاري - الفيوم</p>
            </div>
            <div  class="w-full flex justify-between items-center mb-[10px]">
              <h1 class="text-[#60a899] text-[14px] opacity-[.5] hover:opacity-100 transition-all duration-[.6s] cursor-pointer">عرض الملف الشخصي</h1>
              <button class="bg-[linear-gradient(180deg,_#4F94FC_0%,_#035FE9_100%)] hover:bg-[linear-gradient(180deg,#2C68C1_0%,#04347B_100%)] transition-all duration-[.5s] text-[14px] text-[white] py-[10px] px-[16px] rounded-md cursor-pointer">احجز الان</button>
            </div>
          </div>
        </div>
      </div>
      <button @click="$router.push('/not-found')" class="flex justify-center items-center text-[16px] p-[15px_40px]  md:p-[17px_40px] bg-[#5599f9] rounded-[10px] m-auto cursor-pointer transition ease-in text-white hover:bg-[#5599f9]">لمعرفة المزيد</button>
    </div>
    <div class="ourservies text-center w-full max-w-[1400px] m-auto px-[30px] md:px-[100px] py-[60px]">
      <h1 class="text-[32px] mb-[10px]">خدماتنا</h1>
      <p class="text-[20px] text-[#5599f9] mb-[60px]">ما تقدمة موقع كلينيكير للرأي الطبي الثاني من خدمات</p>
      <div  class="mb-[60px]">
          <div class="flex flex-wrap justify-center items-center gap-[50px_20px]">
            <div class="group cursor-pointer h-auto relative hover:bg-[#5599f9] sm:w-[360px] hover:border-[#5599f9] transition-all duration-300 p-[5px] w-full border-[3px] border-[#5599f9] rounded-[20px] bg-white flex gap-[20px] flex-col justify-center items-center text-center Z-[2]">
              <img :src="require('@/image/xray.png')" class="absolute top-[-40px] z-[3] left-[50%] translate-x-[-50%] w-[80px] h-[80px]" alt="">
              <div class="relative p-[130px_10px] after:absolute after:top-0 after:left-0 rounded-[20px] overflow-hidden after:w-full after:h-full after:bg-[rgba(0,0,0,0.73)] w-full h-full">
                <h1 class="text-[20px] text-[#FFF] group-hover:text-[white] transition-all duration-300 z-[9] relative">إجراء المزيد من الفحوصات والأشعة</h1>
                <img :src="require('@/image/xray-background.jpg')" class="absolute top-0 left-0 w-full h-full object-cover Z-[3]" alt="">      
              </div>
            </div>
            <div class="group cursor-pointer h-auto relative hover:bg-[#5599f9] sm:w-[360px] hover:border-[#5599f9] transition-all duration-300 p-[5px] w-full border-[3px] border-[#5599f9] rounded-[20px] bg-white flex gap-[20px] flex-col justify-center items-center text-center Z-[2]">
              <img :src="require('@/image/booking-doctor.png')" class="absolute top-[-40px] z-[3] left-[50%] translate-x-[-50%] w-[80px] h-[80px]" alt="">
              <div class="relative p-[130px_10px] after:absolute after:top-0 after:left-0 rounded-[20px] overflow-hidden after:w-full after:h-full after:bg-[rgba(0,0,0,0.73)] w-full h-full">
                <h1 class="text-[20px] text-[#FFF] group-hover:text-[white] transition-all duration-300 z-[9] relative">حجز موعد مع الاستشاري</h1>
                <img :src="require('@/image/booking-doctor-background.jpeg')" class="absolute top-0 left-0 w-full h-full object-cover Z-[3]" alt="">      
                </div>
              </div>
            <div class="group cursor-pointer h-auto relative hover:bg-[#5599f9] sm:w-[360px] hover:border-[#5599f9]  transition-all duration-300 p-[5px] w-full border-[3px] border-[#5599f9] rounded-[20px] bg-white flex gap-[20px] flex-col justify-center items-center text-center Z-[2]">
              <img :src="require('@/image/same-opinion.png')" class="absolute top-[-40px] z-[3] left-[50%] translate-x-[-50%] w-[80px] h-[80px]" alt="">
              <div class="relative p-[130px_10px]  after:absolute after:top-0 after:left-0  rounded-[20px] overflow-hidden after:w-full after:h-full after:bg-[rgba(0,0,0,0.73)] w-full h-full">
                <h1 class="text-[20px] text-[#FFF] group-hover:text-[white] transition-all duration-300 z-[9] relative">قراءة التقارير وتقديم الرأي الطبي الثاني</h1>
                <img :src="require('@/image/same-opinion-background.jpg')" class="absolute top-0 left-0 w-full h-full object-cover Z-[3]" alt="">      
              </div>
            </div>
          </div>  
        </div>
    </div>
    <div class="comments w-full max-w-[1400px] m-auto text-center px-[30px] md:px-[100px] py-[60px] bg-[#f1f4f7]">
      <img :src="require('@/image/comment-icon.png')" class="w-[120px] lg:w-[100px] m-auto mb-[20px]" alt="">
      <h1 class="text-[32px] mb-[10px]">ماذا يقول عنا العملاء</h1>
      <p class="text-[20px] text-[#5599f9] mb-[60px]">راي العملاء في خدمات موقع كلينيكير للرأي الطبي الثاني</p>
      <div  ref="swiper1" class="swiper mb-[60px]">
          <div class="swiper-wrapper flex">
            <div class="p-[30px_25px] pb-[55px] group cursor-pointer swiper-slide sm:w-[360px] flex pl-[30px] rounded-[15px] bg-[#ffffffbf] hover:bg-white transition ease-in relative">
              <div class="flex justify-start items-start flex-col gap-[20px]">
                <div class="flex justify-start items-center gap-[20px]">
                  <img :src="require('@/image/person.jpg')" class="rounded-full w-[60px] h-[60px]" alt="">
                  <div class="flex flex-col gap-[8px] mt-[5px] text-start">
                    <h1 class="text-[16px] text-[#5599f9]">بهاء لبيب</h1>
                  </div>
                </div>
                <div>
                  <p class="text-[12px] text-[#212529] text-start">اخصائي روماتيزم و مفاصل و الطب الطبيعي و التاهيل رئيس الجمعية المصرية للروماتيزم والتاهيل...</p>
                </div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="23" viewBox="0 0 38 23" fill="none" class="absolute top-[20px] left-[20px]">
                <path d="M30.4713 -6.58184e-07C29.26 -7.64075e-07 28.1438 0.666999 27.6213 1.702L24.2488 8.234C23.9163 8.878 23.75 9.568 23.75 10.281L23.75 20.7C23.75 21.965 24.8187 23 26.125 23L35.625 23C36.9312 23 38 21.965 38 20.7L38 11.5C38 10.235 36.9313 9.2 35.625 9.2L30.875 9.2L33.3213 4.462C34.39 2.415 32.8463 -4.50555e-07 30.4713 -6.58184e-07ZM6.72125 -2.73448e-06C5.51 -2.84037e-06 4.39375 0.666997 3.87125 1.702L0.498746 8.234C0.16625 8.878 1.17426e-06 9.568 1.11193e-06 10.281L2.01072e-07 20.7C9.04826e-08 21.965 1.06875 23 2.375 23L11.875 23C13.1812 23 14.25 21.965 14.25 20.7L14.25 11.5C14.25 10.235 13.1813 9.2 11.875 9.2L7.125 9.2L9.57125 4.462C10.64 2.415 9.09625 -2.52685e-06 6.72125 -2.73448e-06Z" fill="#5599f9"/>
              </svg>
            </div>
            <div class="p-[30px_25px] pb-[55px] group cursor-pointer swiper-slide sm:w-[360px] flex pl-[30px] rounded-[15px] bg-[#ffffffbf] hover:bg-white transition ease-in relative">
              <div class="flex justify-start items-start flex-col gap-[20px]">
                <div class="flex justify-start items-center gap-[20px]">
                  <img :src="require('@/image/person.jpg')" class="rounded-full w-[60px] h-[60px]" alt="">
                  <div class="flex flex-col gap-[8px] mt-[5px] text-start">
                    <h1 class="text-[16px] text-[#5599f9]">بهاء لبيب</h1>
                  </div>
                </div>
                <div>
                  <p class="text-[12px] text-[#212529] text-start">اخصائي روماتيزم و مفاصل و الطب الطبيعي و التاهيل رئيس الجمعية المصرية للروماتيزم والتاهيل...</p>
                </div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="23" viewBox="0 0 38 23" fill="none" class="absolute top-[20px] left-[20px]">
                <path d="M30.4713 -6.58184e-07C29.26 -7.64075e-07 28.1438 0.666999 27.6213 1.702L24.2488 8.234C23.9163 8.878 23.75 9.568 23.75 10.281L23.75 20.7C23.75 21.965 24.8187 23 26.125 23L35.625 23C36.9312 23 38 21.965 38 20.7L38 11.5C38 10.235 36.9313 9.2 35.625 9.2L30.875 9.2L33.3213 4.462C34.39 2.415 32.8463 -4.50555e-07 30.4713 -6.58184e-07ZM6.72125 -2.73448e-06C5.51 -2.84037e-06 4.39375 0.666997 3.87125 1.702L0.498746 8.234C0.16625 8.878 1.17426e-06 9.568 1.11193e-06 10.281L2.01072e-07 20.7C9.04826e-08 21.965 1.06875 23 2.375 23L11.875 23C13.1812 23 14.25 21.965 14.25 20.7L14.25 11.5C14.25 10.235 13.1813 9.2 11.875 9.2L7.125 9.2L9.57125 4.462C10.64 2.415 9.09625 -2.52685e-06 6.72125 -2.73448e-06Z" fill="#5599f9"/>
              </svg> 
            </div>
            <div class="p-[30px_25px] pb-[55px] group cursor-pointer swiper-slide sm:w-[360px] flex pl-[30px] rounded-[15px] bg-[#ffffffbf] hover:bg-white transition ease-in relative">
              <div class="flex justify-start items-start flex-col gap-[20px]">
                <div class="flex justify-start items-center gap-[20px]">
                  <img :src="require('@/image/person.jpg')" class="rounded-full w-[60px] h-[60px]" alt="">
                  <div class="flex flex-col gap-[8px] mt-[5px] text-start">
                    <h1 class="text-[16px] text-[#5599f9]">بهاء لبيب</h1>
                  </div>
                </div>
                <div>
                  <p class="text-[12px] text-[#212529] text-start">اخصائي روماتيزم و مفاصل و الطب الطبيعي و التاهيل رئيس الجمعية المصرية للروماتيزم والتاهيل...</p>
                </div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="23" viewBox="0 0 38 23" fill="none" class="absolute top-[20px] left-[20px]">
                <path d="M30.4713 -6.58184e-07C29.26 -7.64075e-07 28.1438 0.666999 27.6213 1.702L24.2488 8.234C23.9163 8.878 23.75 9.568 23.75 10.281L23.75 20.7C23.75 21.965 24.8187 23 26.125 23L35.625 23C36.9312 23 38 21.965 38 20.7L38 11.5C38 10.235 36.9313 9.2 35.625 9.2L30.875 9.2L33.3213 4.462C34.39 2.415 32.8463 -4.50555e-07 30.4713 -6.58184e-07ZM6.72125 -2.73448e-06C5.51 -2.84037e-06 4.39375 0.666997 3.87125 1.702L0.498746 8.234C0.16625 8.878 1.17426e-06 9.568 1.11193e-06 10.281L2.01072e-07 20.7C9.04826e-08 21.965 1.06875 23 2.375 23L11.875 23C13.1812 23 14.25 21.965 14.25 20.7L14.25 11.5C14.25 10.235 13.1813 9.2 11.875 9.2L7.125 9.2L9.57125 4.462C10.64 2.415 9.09625 -2.52685e-06 6.72125 -2.73448e-06Z" fill="#5599f9"/>
              </svg>
            </div>
            <div class="p-[30px_25px] pb-[55px] group cursor-pointer swiper-slide sm:w-[360px] flex pl-[30px] rounded-[15px] bg-[#ffffffbf] hover:bg-white transition ease-in relative">
              <div class="flex justify-start items-start flex-col gap-[20px]">
                <div class="flex justify-start items-center gap-[20px]">
                  <img :src="require('@/image/person.jpg')" class="rounded-full w-[60px] h-[60px]" alt="">
                  <div class="flex flex-col gap-[8px] mt-[5px] text-start">
                    <h1 class="text-[16px] text-[#5599f9]">بهاء لبيب</h1>
                  </div>
                </div>
                <div>
                  <p class="text-[12px] text-[#212529] text-start">اخصائي روماتيزم و مفاصل و الطب الطبيعي و التاهيل رئيس الجمعية المصرية للروماتيزم والتاهيل...</p>
                </div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="23" viewBox="0 0 38 23" fill="none" class="absolute top-[20px] left-[20px]">
                <path d="M30.4713 -6.58184e-07C29.26 -7.64075e-07 28.1438 0.666999 27.6213 1.702L24.2488 8.234C23.9163 8.878 23.75 9.568 23.75 10.281L23.75 20.7C23.75 21.965 24.8187 23 26.125 23L35.625 23C36.9312 23 38 21.965 38 20.7L38 11.5C38 10.235 36.9313 9.2 35.625 9.2L30.875 9.2L33.3213 4.462C34.39 2.415 32.8463 -4.50555e-07 30.4713 -6.58184e-07ZM6.72125 -2.73448e-06C5.51 -2.84037e-06 4.39375 0.666997 3.87125 1.702L0.498746 8.234C0.16625 8.878 1.17426e-06 9.568 1.11193e-06 10.281L2.01072e-07 20.7C9.04826e-08 21.965 1.06875 23 2.375 23L11.875 23C13.1812 23 14.25 21.965 14.25 20.7L14.25 11.5C14.25 10.235 13.1813 9.2 11.875 9.2L7.125 9.2L9.57125 4.462C10.64 2.415 9.09625 -2.52685e-06 6.72125 -2.73448e-06Z" fill="#5599f9"/>
              </svg>
            </div>
            <div class="p-[30px_25px] pb-[55px] group cursor-pointer swiper-slide sm:w-[360px] flex pl-[30px] rounded-[15px] bg-[#ffffffbf] hover:bg-white transition ease-in relative">
              <div class="flex justify-start items-start flex-col gap-[20px]">
                <div class="flex justify-start items-center gap-[20px]">
                  <img :src="require('@/image/person.jpg')" class="rounded-full w-[60px] h-[60px]" alt="">
                  <div class="flex flex-col gap-[8px] mt-[5px] text-start">
                    <h1 class="text-[16px] text-[#5599f9]">بهاء لبيب</h1>
                  </div>
                </div>
                <div>
                  <p class="text-[12px] text-[#212529] text-start">اخصائي روماتيزم و مفاصل و الطب الطبيعي و التاهيل رئيس الجمعية المصرية للروماتيزم والتاهيل...</p>
                </div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="23" viewBox="0 0 38 23" fill="none" class="absolute top-[20px] left-[20px]">
                <path d="M30.4713 -6.58184e-07C29.26 -7.64075e-07 28.1438 0.666999 27.6213 1.702L24.2488 8.234C23.9163 8.878 23.75 9.568 23.75 10.281L23.75 20.7C23.75 21.965 24.8187 23 26.125 23L35.625 23C36.9312 23 38 21.965 38 20.7L38 11.5C38 10.235 36.9313 9.2 35.625 9.2L30.875 9.2L33.3213 4.462C34.39 2.415 32.8463 -4.50555e-07 30.4713 -6.58184e-07ZM6.72125 -2.73448e-06C5.51 -2.84037e-06 4.39375 0.666997 3.87125 1.702L0.498746 8.234C0.16625 8.878 1.17426e-06 9.568 1.11193e-06 10.281L2.01072e-07 20.7C9.04826e-08 21.965 1.06875 23 2.375 23L11.875 23C13.1812 23 14.25 21.965 14.25 20.7L14.25 11.5C14.25 10.235 13.1813 9.2 11.875 9.2L7.125 9.2L9.57125 4.462C10.64 2.415 9.09625 -2.52685e-06 6.72125 -2.73448e-06Z" fill="#5599f9"/>
              </svg>
            </div>
            <div class="p-[30px_25px] pb-[55px] group cursor-pointer swiper-slide sm:w-[360px] flex pl-[30px] rounded-[15px] bg-[#ffffffbf] hover:bg-white transition ease-in relative">
              <div class="flex justify-start items-start flex-col gap-[20px]">
                <div class="flex justify-start items-center gap-[20px]">
                  <img :src="require('@/image/person.jpg')" class="rounded-full w-[60px] h-[60px]" alt="">
                  <div class="flex flex-col gap-[8px] mt-[5px] text-start">
                    <h1 class="text-[16px] text-[#5599f9]">بهاء لبيب</h1>
                  </div>
                </div>
                <div>
                  <p class="text-[12px] text-[#212529] text-start">اخصائي روماتيزم و مفاصل و الطب الطبيعي و التاهيل رئيس الجمعية المصرية للروماتيزم والتاهيل...</p>
                </div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="23" viewBox="0 0 38 23" fill="none" class="absolute top-[20px] left-[20px]">
                <path d="M30.4713 -6.58184e-07C29.26 -7.64075e-07 28.1438 0.666999 27.6213 1.702L24.2488 8.234C23.9163 8.878 23.75 9.568 23.75 10.281L23.75 20.7C23.75 21.965 24.8187 23 26.125 23L35.625 23C36.9312 23 38 21.965 38 20.7L38 11.5C38 10.235 36.9313 9.2 35.625 9.2L30.875 9.2L33.3213 4.462C34.39 2.415 32.8463 -4.50555e-07 30.4713 -6.58184e-07ZM6.72125 -2.73448e-06C5.51 -2.84037e-06 4.39375 0.666997 3.87125 1.702L0.498746 8.234C0.16625 8.878 1.17426e-06 9.568 1.11193e-06 10.281L2.01072e-07 20.7C9.04826e-08 21.965 1.06875 23 2.375 23L11.875 23C13.1812 23 14.25 21.965 14.25 20.7L14.25 11.5C14.25 10.235 13.1813 9.2 11.875 9.2L7.125 9.2L9.57125 4.462C10.64 2.415 9.09625 -2.52685e-06 6.72125 -2.73448e-06Z" fill="#5599f9"/>
              </svg>
            </div>
          </div>
          <div class="swiper-pagination"></div>
            <div class="swiper-button-prev text-[#5599f9] md:left-[50px] top-[50%] opacity-[.6] hover:opacity-[1]"></div>
            <div class="swiper-button-next text-[#5599f9] md:right-[50px] top-[50%] opacity-[.6] hover:opacity-[1]"></div>
        </div>
      <button @click="$router.push('/not-found')" class="flex justify-center items-center text-[16px] p-[15px_40px]  md:p-[17px_40px] bg-[#5599f9] rounded-[10px] m-auto cursor-pointer transition ease-in text-white hover:bg-[#5599f9]">لمعرفة المزيد</button>
    </div>
    <div class="line w-full h-[0.3px] bg-[rgba(203,203,203,0.53)]"></div>
    <div class="Did you know ?">
      <div class=" w-full grid sm:grid-cols-[50%_50%] justify-center items-center">
        <div class="text_birthday relative z-[1] w-[100%] m-auto grid gap-[20px] text-start p-[20px_60px]">
          <h1 class="leading-[.8] text-[32px] text-[#4d4d4f]">هل تعلم ؟</h1>
          <p class="leading-[1.8] text-[16px] text-[#4d4d4f]">نشرت دراسة تم إجراؤها من قبل باحثون في جامعة جون هوبكنز الأمريكية إلى أن الأخطاء الطبية تأتي في المرتبة الثالثة ضمن الأسباب الرئيسية المسببة للوفاة في الولايات المتحدة، حيث ذكرت الدراسة في تقديراتها إلى أن أكثر من 250 ألف أمريكي يموتون كل عام بسبب الأخطاء الطبية.</p>
          <button class="bg-[#5599f9] p-[12px_40px] rounded-[22px_0] w-[max-content] leading-[1.2] text-[14px] text-[#fff]">اقراء المزيد</button>
        </div>
        <div class="w-full h-full row-[1] md:row-auto"><img class="w-full h-full object-cover sm:rounded-[0px_0px_100px_0px]" src="https://le-de.cdn-website.com/cf9c11e8aa574d618fc893cedbee1663/dms3rep/multi/opt/shutterstock_655688419-1920w.jpg" alt=""></div>
      </div>
      <div class=" w-full grid sm:grid-cols-[50%_50%] justify-center flex-row-reverse items-center">
        <div class="text_birthday relative z-[1] w-[100%] m-auto grid gap-[20px] text-start p-[20px_60px]">
          <h1 class="leading-[.8] text-[32px] text-[#4d4d4f]">هل تعلم ؟</h1>
          <p class="leading-[1.8] text-[16px] text-[#4d4d4f]">نشرت دراسة تم إجراؤها من قبل باحثون في جامعة جون هوبكنز الأمريكية إلى أن الأخطاء الطبية تأتي في المرتبة الثالثة ضمن الأسباب الرئيسية المسببة للوفاة في الولايات المتحدة، حيث ذكرت الدراسة في تقديراتها إلى أن أكثر من 250 ألف أمريكي يموتون كل عام بسبب الأخطاء الطبية.</p>
          <button class="bg-[#5599f9] p-[12px_40px] rounded-[22px_0] w-[max-content] leading-[1.2] text-[14px] text-[#fff]">اقراء المزيد</button>
        </div>
        <div class="w-full h-full row-[1]"><img class="w-full h-full object-cover sm:rounded-[100px_0px_0px_0px]" src="https://le-de.cdn-website.com/cf9c11e8aa574d618fc893cedbee1663/dms3rep/multi/opt/shutterstock_655688419-1920w.jpg" alt=""></div>
      </div>
    </div>
    <div class="ourcompanys w-full max-w-[1400px] m-auto text-center px-[30px] md:px-[100px] py-[60px] bg-[#f1f4f7]">
      <h1 class="text-[32px] mb-[10px]">شركاء النجاح</h1>
      <p class="text-[20px] text-[#5599f9] mb-[60px]">بعض المراكز الطبية المشاركة في نجاحنا</p>
      <div  ref="swiper2" class="swiper mb-[60px]">
          <div class="swiper-wrapper flex">
            <div class="group cursor-pointer swiper-slide sm:w-[360px] flex] rounded-[15px] transition ease-in relative">
              <div class="flex w-full h-full justify-center items-center gap-[20px]">
                  <img :src="require('@/image/our-companys-1.png')" class=" w-[200px] h-[200px]" alt="">
              </div>
            </div>
            <div class="group cursor-pointer swiper-slide sm:w-[360px] flex] rounded-[15px] transition ease-in relative">
              <div class="flex w-full h-full justify-center items-center gap-[20px]">
                  <img :src="require('@/image/our-companys-1.png')" class=" w-[200px] h-[200px]" alt="">
              </div>
            </div>

            <div class="group cursor-pointer swiper-slide sm:w-[360px] flex] rounded-[15px] transition ease-in relative">
              <div class="flex w-full h-full justify-center items-center gap-[20px]">
                  <img :src="require('@/image/our-companys-1.png')" class=" w-[200px] h-[200px]" alt="">
              </div>
            </div>
            <div class="group cursor-pointer swiper-slide sm:w-[360px] flex] rounded-[15px] transition ease-in relative">
              <div class="flex w-full h-full justify-center items-center gap-[20px]">
                  <img :src="require('@/image/our-companys-1.png')" class=" w-[200px] h-[200px]" alt="">
              </div>
            </div>
            <div class="group cursor-pointer swiper-slide sm:w-[360px] flex] rounded-[15px] transition ease-in relative">
              <div class="flex w-full h-full justify-center items-center gap-[20px]">
                  <img :src="require('@/image/our-companys-1.png')" class=" w-[200px] h-[200px]" alt="">
              </div>
            </div>
            <div class="group cursor-pointer swiper-slide sm:w-[360px] flex] rounded-[15px] transition ease-in relative">
              <div class="flex w-full h-full justify-center items-center gap-[20px]">
                  <img :src="require('@/image/our-companys-1.png')" class=" w-[200px] h-[200px]" alt="">
              </div>
            </div>
            <div class="group cursor-pointer swiper-slide sm:w-[360px] flex] rounded-[15px] transition ease-in relative">
              <div class="flex w-full h-full justify-center items-center gap-[20px]">
                  <img :src="require('@/image/our-companys-1.png')" class=" w-[200px] h-[200px]" alt="">
              </div>
            </div>
            <div class="group cursor-pointer swiper-slide sm:w-[360px] flex] rounded-[15px] transition ease-in relative">
              <div class="flex w-full h-full justify-center items-center gap-[20px]">
                  <img :src="require('@/image/our-companys-1.png')" class=" w-[200px] h-[200px]" alt="">
              </div>
            </div>
            <div class="group cursor-pointer swiper-slide sm:w-[360px] flex] rounded-[15px] transition ease-in relative">
              <div class="flex w-full h-full justify-center items-center gap-[20px]">
                  <img :src="require('@/image/our-companys-1.png')" class=" w-[200px] h-[200px]" alt="">
              </div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
            <div class="swiper-button-prev text-[#5599f9] md:left-[50px] top-[50%] opacity-[.6] hover:opacity-[1]"></div>
            <div class="swiper-button-next text-[#5599f9] md:right-[50px] top-[50%] opacity-[.6] hover:opacity-[1]"></div>
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
  name: 'HomePage',
  data() {
    return {
      window_width: window.innerWidth,
    }
  },
mounted() {
  for(let i = 1; i < 3; i++){
    new Swiper(eval('this.$refs.swiper'+i), {
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
  }
  },
}
</script>

<style scoped lang="scss">

.swiper {
  width: 100%;
  --swiper-navigation-size: 40px !important; 
  --swiper-navigation-sides-offset: 40px !important;
  --swiper-pagination-color: #5599f9;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
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