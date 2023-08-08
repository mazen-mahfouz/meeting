<template>
  <div class="HomePage">
    <header class="w-full px-[30px] md:px-[80px] pt-[190px] pb-[120px] text-white relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.73)] ">
      <img :src="require('@/image/Rectangle 4.png')" class="absolute top-0 left-0 w-full h-full object-cover" alt="">
      <div class="z-[2] w-full max-w-[1400px] m-auto relative text-center md:text-right">
        <h1 class="text-[14vw] md:text-[80px] font-[700] mb-[20px]">منصة مفهوم</h1>
        <p class="text-[20px] md:text-[22px] font-[400] mb-[50px]">تعلم بافضل الطرق مع اكفأ المعلمين في كافة المواد لضمان اعلي النتائج</p>
        <button @click="$router.push('/contact-us')" class="flex justify-center items-center text-[16px] p-[15px_40px]  md:p-[17px_40px] border border-[#FF9432] rounded-[10px] m-auto md:m-0 cursor-pointer transition ease-in hover:bg-[#FF9432] ">تواصل معنا</button>
      </div>
    </header>
    <div class="about w-full max-w-[1400px] m-auto px-[30px] md:px-[100px] py-[60px] flex flex-col md:flex-row justify-between items-center gap-[10px] lg:gap-[10%]">
      <div>
        <h1 class="text-[35px] mb-[20px] relative after:absolute after:bottom-[-7px] after:right-0 after:w-[70px] after:h-[3px] after:bg-[#FF9432]">من نحن</h1>
        <p class="text-[18px] text-[rgba(0,_0,_0,_0.80)] text-right 2xl:max-w-[80%]">نحن نخبة كبية من المعلمين المتخصصين في كافة المجالات
        مثل اللغة العربية والرياضيات والفيزياء والانجليزي والفرنساوي 
        والالماني وغيرها من المواد قررنا ان نوفر الوقت والجهد علي طلابنا
        بتقديم افضل الشروحات باعلي جودة وتقديم حلول لكل الاسئلة
        المهمة وحل جميع بنوك الاسئلة وكل ما يخص المادة التعليمي 
        لتاهيلك للحصول علي اعلي الدرجات </p>
      </div>
      <img :src="require('@/image/about_img_inhome.png')" class="hidden md:block w-[270px] lg:w-[350px]" alt="">
    </div>
    <div class="line w-full h-[0.3px] bg-[rgba(203,203,203,0.53)]"></div>
    <div class="subjects w-full max-w-[1400px] m-auto text-center px-[30px] md:px-[100px] py-[60px]">
      <img :src="require('@/image/subject-img-inhome.png')" class="w-[120px] lg:w-[100px] m-auto mb-[20px]" alt="">
      <h1 class="text-[32px] mb-[20px]">المواد الدراسية المتوفرة حاليا</h1>
      <div class="flex flex-wrap justify-center items-center py-[30px] gap-[30px] mb-[30px]">
        <div class="group hover:bg-[#2C17AC] hover:border-[#2C17AC] transition-all duration-300 p-[60px_20px] w-[250px] border border-[#FF9432] rounded-[15px] bg-white flex gap-[10px] flex-col justify-center items-center text-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="m-auto" width="90" height="88" viewBox="0 0 130 88" fill="none">
            <path class="group-hover:fill-[white] transition-all duration-300" d="M121.333 0C103.022 0.0638 89.4102 2.112 79.56 5.6518C72.2096 8.2918 69.3333 10.2894 69.3333 17.0566V88C80.5919 79.75 90.5829 77.44 130 77.44V0H121.333ZM8.66667 0C26.9777 0.0638 40.5898 2.112 50.44 5.6518C57.7904 8.2918 60.6667 10.2894 60.6667 17.0566V88C49.4081 79.75 39.4171 77.44 0 77.44V0H8.66667Z" fill="#2C17AC"/>
          </svg>
          <h1 class="text-[30px] text-[#2C17AC] group-hover:text-[white] transition-all duration-300">لغة عربية</h1>
          <h2 class="text-[18px] text-[rgba(0,_0,_0,_0.57)] group-hover:text-[#8a8a8a] transition-all duration-300">ا / محمد اشرف</h2>
        </div>
        <div class="group hover:bg-[#2C17AC] hover:border-[#2C17AC] transition-all duration-300 p-[60px_20px] w-[250px] border border-[#FF9432] rounded-[15px] bg-white flex gap-[10px] flex-col justify-center items-center text-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="m-auto" width="90" height="88" viewBox="0 0 130 88" fill="none">
            <path class="group-hover:fill-[white] transition-all duration-300" d="M121.333 0C103.022 0.0638 89.4102 2.112 79.56 5.6518C72.2096 8.2918 69.3333 10.2894 69.3333 17.0566V88C80.5919 79.75 90.5829 77.44 130 77.44V0H121.333ZM8.66667 0C26.9777 0.0638 40.5898 2.112 50.44 5.6518C57.7904 8.2918 60.6667 10.2894 60.6667 17.0566V88C49.4081 79.75 39.4171 77.44 0 77.44V0H8.66667Z" fill="#2C17AC"/>
          </svg>
          <h1 class="text-[30px] text-[#2C17AC] group-hover:text-[white] transition-all duration-300">لغة عربية</h1>
          <h2 class="text-[18px] text-[rgba(0,_0,_0,_0.57)] group-hover:text-[#8a8a8a] transition-all duration-300">ا / محمد اشرف</h2>
        </div>
        <div class="group hover:bg-[#2C17AC] hover:border-[#2C17AC] transition-all duration-300 p-[60px_20px] w-[250px] border border-[#FF9432] rounded-[15px] bg-white flex gap-[10px] flex-col justify-center items-center text-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="m-auto" width="90" height="88" viewBox="0 0 130 88" fill="none">
            <path class="group-hover:fill-[white] transition-all duration-300" d="M121.333 0C103.022 0.0638 89.4102 2.112 79.56 5.6518C72.2096 8.2918 69.3333 10.2894 69.3333 17.0566V88C80.5919 79.75 90.5829 77.44 130 77.44V0H121.333ZM8.66667 0C26.9777 0.0638 40.5898 2.112 50.44 5.6518C57.7904 8.2918 60.6667 10.2894 60.6667 17.0566V88C49.4081 79.75 39.4171 77.44 0 77.44V0H8.66667Z" fill="#2C17AC"/>
          </svg>
          <h1 class="text-[30px] text-[#2C17AC] group-hover:text-[white] transition-all duration-300">لغة عربية</h1>
          <h2 class="text-[18px] text-[rgba(0,_0,_0,_0.57)] group-hover:text-[#8a8a8a] transition-all duration-300">ا / محمد اشرف</h2>
        </div>
        <div class="group hover:bg-[#2C17AC] hover:border-[#2C17AC] transition-all duration-300 p-[60px_20px] w-[250px] border border-[#FF9432] rounded-[15px] bg-white flex gap-[10px] flex-col justify-center items-center text-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="m-auto" width="90" height="88" viewBox="0 0 130 88" fill="none">
            <path class="group-hover:fill-[white] transition-all duration-300" d="M121.333 0C103.022 0.0638 89.4102 2.112 79.56 5.6518C72.2096 8.2918 69.3333 10.2894 69.3333 17.0566V88C80.5919 79.75 90.5829 77.44 130 77.44V0H121.333ZM8.66667 0C26.9777 0.0638 40.5898 2.112 50.44 5.6518C57.7904 8.2918 60.6667 10.2894 60.6667 17.0566V88C49.4081 79.75 39.4171 77.44 0 77.44V0H8.66667Z" fill="#2C17AC"/>
          </svg>
          <h1 class="text-[30px] text-[#2C17AC] group-hover:text-[white] transition-all duration-300">لغة عربية</h1>
          <h2 class="text-[18px] text-[rgba(0,_0,_0,_0.57)] group-hover:text-[#8a8a8a] transition-all duration-300">ا / محمد اشرف</h2>
        </div>
        <div class="group hover:bg-[#2C17AC] hover:border-[#2C17AC] transition-all duration-300 p-[60px_20px] w-[250px] border border-[#FF9432] rounded-[15px] bg-white flex gap-[10px] flex-col justify-center items-center text-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="m-auto" width="90" height="88" viewBox="0 0 130 88" fill="none">
            <path class="group-hover:fill-[white] transition-all duration-300" d="M121.333 0C103.022 0.0638 89.4102 2.112 79.56 5.6518C72.2096 8.2918 69.3333 10.2894 69.3333 17.0566V88C80.5919 79.75 90.5829 77.44 130 77.44V0H121.333ZM8.66667 0C26.9777 0.0638 40.5898 2.112 50.44 5.6518C57.7904 8.2918 60.6667 10.2894 60.6667 17.0566V88C49.4081 79.75 39.4171 77.44 0 77.44V0H8.66667Z" fill="#2C17AC"/>
          </svg>
          <h1 class="text-[30px] text-[#2C17AC] group-hover:text-[white] transition-all duration-300">لغة عربية</h1>
          <h2 class="text-[18px] text-[rgba(0,_0,_0,_0.57)] group-hover:text-[#8a8a8a] transition-all duration-300">ا / محمد اشرف</h2>
        </div>
        <div class="group hover:bg-[#2C17AC] hover:border-[#2C17AC] transition-all duration-300 p-[60px_20px] w-[250px] border border-[#FF9432] rounded-[15px] bg-white flex gap-[10px] flex-col justify-center items-center text-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="m-auto" width="90" height="88" viewBox="0 0 130 88" fill="none">
            <path class="group-hover:fill-[white] transition-all duration-300" d="M121.333 0C103.022 0.0638 89.4102 2.112 79.56 5.6518C72.2096 8.2918 69.3333 10.2894 69.3333 17.0566V88C80.5919 79.75 90.5829 77.44 130 77.44V0H121.333ZM8.66667 0C26.9777 0.0638 40.5898 2.112 50.44 5.6518C57.7904 8.2918 60.6667 10.2894 60.6667 17.0566V88C49.4081 79.75 39.4171 77.44 0 77.44V0H8.66667Z" fill="#2C17AC"/>
          </svg>
          <h1 class="text-[30px] text-[#2C17AC] group-hover:text-[white] transition-all duration-300">لغة عربية</h1>
          <h2 class="text-[18px] text-[rgba(0,_0,_0,_0.57)] group-hover:text-[#8a8a8a] transition-all duration-300">ا / محمد اشرف</h2>
        </div>
        <div class="group hover:bg-[#2C17AC] hover:border-[#2C17AC] transition-all duration-300 p-[60px_20px] w-[250px] border border-[#FF9432] rounded-[15px] bg-white flex gap-[10px] flex-col justify-center items-center text-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="m-auto" width="90" height="88" viewBox="0 0 130 88" fill="none">
            <path class="group-hover:fill-[white] transition-all duration-300" d="M121.333 0C103.022 0.0638 89.4102 2.112 79.56 5.6518C72.2096 8.2918 69.3333 10.2894 69.3333 17.0566V88C80.5919 79.75 90.5829 77.44 130 77.44V0H121.333ZM8.66667 0C26.9777 0.0638 40.5898 2.112 50.44 5.6518C57.7904 8.2918 60.6667 10.2894 60.6667 17.0566V88C49.4081 79.75 39.4171 77.44 0 77.44V0H8.66667Z" fill="#2C17AC"/>
          </svg>
          <h1 class="text-[30px] text-[#2C17AC] group-hover:text-[white] transition-all duration-300">لغة عربية</h1>
          <h2 class="text-[18px] text-[rgba(0,_0,_0,_0.57)] group-hover:text-[#8a8a8a] transition-all duration-300">ا / محمد اشرف</h2>
        </div>
        <div class="group hover:bg-[#2C17AC] hover:border-[#2C17AC] transition-all duration-300 p-[60px_20px] w-[250px] border border-[#FF9432] rounded-[15px] bg-white flex gap-[10px] flex-col justify-center items-center text-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="m-auto" width="90" height="88" viewBox="0 0 130 88" fill="none">
            <path class="group-hover:fill-[white] transition-all duration-300" d="M121.333 0C103.022 0.0638 89.4102 2.112 79.56 5.6518C72.2096 8.2918 69.3333 10.2894 69.3333 17.0566V88C80.5919 79.75 90.5829 77.44 130 77.44V0H121.333ZM8.66667 0C26.9777 0.0638 40.5898 2.112 50.44 5.6518C57.7904 8.2918 60.6667 10.2894 60.6667 17.0566V88C49.4081 79.75 39.4171 77.44 0 77.44V0H8.66667Z" fill="#2C17AC"/>
          </svg>
          <h1 class="text-[30px] text-[#2C17AC] group-hover:text-[white] transition-all duration-300">لغة عربية</h1>
          <h2 class="text-[18px] text-[rgba(0,_0,_0,_0.57)] group-hover:text-[#8a8a8a] transition-all duration-300">ا / محمد اشرف</h2>
        </div>
      </div>
      <button @click="$router.push('/subject')" class="flex justify-center items-center text-[16px] p-[15px_40px]  md:p-[17px_40px] bg-[#FF9432] rounded-[10px] m-auto cursor-pointer transition ease-in text-white hover:bg-[#ff9532d6]">لمعرفة المزيد</button>
    </div>
    <div class="line w-full h-[0.3px] bg-[rgba(203,203,203,0.53)]"></div>
    <div class="Services and features w-full max-w-[1400px] m-auto text-center px-[30px] md:px-[100px] py-[60px]">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-[60px] lg:w-[70px] m-auto" width="130" height="130" viewBox="0 0 130 130" fill="none">
        <path d="M112.873 1.31836H18.2752C9.00454 1.31836 1.46454 8.85836 1.46454 18.133V112.72C1.46454 121.995 9.00454 129.539 18.2752 129.539H112.873C122.141 129.539 129.685 121.995 129.685 112.72V18.133C129.685 8.86039 122.141 1.31836 112.873 1.31836ZM89.4095 34.6329C89.8145 34.6332 90.2154 34.7132 90.5894 34.8684C90.9634 35.0236 91.3031 35.2509 91.5893 35.5374C91.8754 35.824 92.1023 36.164 92.257 36.5382C92.4117 36.9124 92.4912 37.3134 92.4909 37.7184C92.4907 38.1233 92.4107 38.5242 92.2555 38.8982C92.1003 39.2722 91.8729 39.6119 91.5864 39.8981C91.2999 40.1842 90.9598 40.4111 90.5856 40.5658C90.2114 40.7205 89.8104 40.8 89.4055 40.7998C88.5877 40.7992 87.8036 40.4738 87.2258 39.8952C86.6479 39.3166 86.3235 38.5321 86.3241 37.7143C86.3246 36.8965 86.65 36.1124 87.2286 35.5346C87.8073 34.9567 88.5918 34.6324 89.4095 34.6329ZM67.5797 15.0232C68.7289 15.0479 69.8226 15.5218 70.6266 16.3432C71.4306 17.1647 71.8808 18.2684 71.8808 19.4178C71.8808 20.5672 71.4306 21.6709 70.6266 22.4924C69.8226 23.3139 68.7289 23.7877 67.5797 23.8124C66.4305 23.7877 65.3368 23.3139 64.5328 22.4924C63.7288 21.6709 63.2786 20.5672 63.2786 19.4178C63.2786 18.2684 63.7288 17.1647 64.5328 16.3432C65.3368 15.5218 66.4305 15.0479 67.5797 15.0232ZM43.745 14.9907C46.2069 14.9907 48.2077 16.9691 48.2077 19.4107C48.2055 19.9943 48.0884 20.5718 47.8629 21.1101C47.6374 21.6484 47.308 22.137 46.8935 22.5479C46.479 22.9588 45.9876 23.2839 45.4474 23.5047C44.9071 23.7256 44.3286 23.8377 43.745 23.8348C43.1618 23.8372 42.5839 23.7246 42.0442 23.5035C41.5046 23.2825 41.0138 22.9572 40.5999 22.5463C40.186 22.1355 39.8571 21.6471 39.6321 21.109C39.4071 20.571 39.2903 19.9939 39.2884 19.4107C39.2884 16.9691 41.2811 14.9907 43.745 14.9907ZM57.7931 106.895L57.7728 114.717H39.2641V111.43C39.2641 109.3 38.8517 107.892 37.1638 106.304L20.1581 88.2457C17.7127 85.3872 16.3679 81.7497 16.3658 77.9879V50.7184C16.3658 49.3595 16.9054 48.0563 17.8661 47.0953C18.8268 46.1342 20.1298 45.5941 21.4886 45.5935C22.8513 45.5914 24.1592 46.1296 25.1256 47.0903C26.092 48.051 26.638 49.3557 26.6439 50.7184V70.6307C23.92 71.8718 22.2747 74.3885 22.2747 77.1266C22.2747 78.9487 23.0019 80.6834 24.3303 82.022L34.8928 93.6143C35.3844 94.2237 36.0364 95.1702 36.3634 96.2245C36.5442 96.7871 36.6011 97.3945 36.6133 98.1501H39.9628C39.9445 97.0898 39.8592 96.1656 39.5525 95.217C38.9858 93.3909 37.8442 91.902 37.1698 91.1098L26.7638 79.9623C26.0651 79.1643 25.7035 78.1263 25.7551 77.067C25.8067 76.0076 26.2675 75.0097 27.0404 74.2834C27.8133 73.5572 28.8379 73.1592 29.8984 73.1735C30.9589 73.1878 31.9725 73.6132 32.7255 74.3601L54.3014 96.0254C58.0288 99.9315 57.785 103.913 57.785 106.891L57.7931 106.895ZM69.1133 66.2838V46.4405H67.208V66.2838C67.208 67.7098 66.0542 68.8615 64.6303 68.8615C63.2084 68.8615 62.0425 67.7098 62.0425 66.2838V31.4073L60.5089 31.4113L57.1452 43.154C57.0931 43.3752 56.9948 43.5829 56.8567 43.7634C56.6845 44.0102 56.4517 44.2087 56.1806 44.3396C55.9095 44.4705 55.6094 44.5295 55.3089 44.5109C55.0069 44.5289 54.7053 44.4686 54.4335 44.3358C54.1616 44.2031 53.9286 44.0024 53.757 43.7532C53.6359 43.589 53.5464 43.4037 53.493 43.2068L50.113 31.4113L48.4534 31.4073L53.3914 52.0468H49.0567V66.7084C49.0562 66.9965 48.9989 67.2816 48.8882 67.5476C48.7774 67.8135 48.6154 68.0551 48.4113 68.2584C48.2072 68.4617 47.9651 68.6229 47.6987 68.7326C47.4324 68.8424 47.147 68.8986 46.8589 68.898C46.5719 68.8975 46.2878 68.8405 46.0228 68.7301C45.7579 68.6198 45.5172 68.4584 45.3146 68.255C45.1121 68.0517 44.9515 67.8104 44.8422 67.5451C44.7328 67.2797 44.6768 66.9954 44.6774 66.7084V52.0468H42.8269V66.7084C42.8269 67.9149 41.8397 68.898 40.6331 68.898C40.3459 68.8978 40.0616 68.8409 39.7964 68.7307C39.5312 68.6205 39.2903 68.4591 39.0875 68.2557C38.8847 68.0524 38.724 67.8111 38.6145 67.5455C38.5051 67.28 38.449 66.9956 38.4495 66.7084V52.0468H34.0377L39.0284 31.4073L37.3628 31.4113L33.9422 43.3307C33.6842 44.2427 32.6625 44.7465 31.6631 44.4601C30.6617 44.1716 30.0361 43.3023 30.3692 42.1566L33.8792 29.9265C35.2808 25.0393 39.3778 25.1896 39.3778 25.1896H48.098C48.098 25.1896 52.1848 25.0393 53.5945 29.9265L55.3089 35.9024L57.0274 29.9265C58.4289 25.0393 62.5239 25.1896 62.5239 25.1896H73.7933C73.7933 25.1896 77.8903 25.0393 79.2919 29.9265L82.7734 42.0612C82.7734 42.0612 85.5177 42.311 85.5563 42.311H93.8702C96.0517 42.311 97.9713 44.0802 97.9713 46.2618V54.0496C97.9713 54.8012 97.3842 55.4065 96.6388 55.4065C96.4611 55.406 96.2853 55.3704 96.1214 55.302C95.9574 55.2335 95.8086 55.1334 95.6834 55.0074C95.5581 54.8814 95.4589 54.732 95.3914 54.5676C95.3239 54.4033 95.2895 54.2273 95.29 54.0496V47.2043H93.8986V67.4091C93.8986 68.4085 93.078 69.217 92.0806 69.217C91.0833 69.217 90.2728 68.4065 90.2728 67.4091V56.6029H88.853V67.4091C88.8372 67.8794 88.6393 68.3252 88.3011 68.6524C87.9628 68.9795 87.5107 69.1624 87.0401 69.1624C86.5695 69.1624 86.1174 68.9795 85.7791 68.6524C85.4408 68.3252 85.2429 67.8794 85.2272 67.4091V45.7784C83.46 45.2746 81.057 44.5921 80.535 44.4743C80.5127 44.4682 80.5005 44.456 80.4761 44.4499C79.8891 44.2996 79.3975 43.9137 79.2208 43.3266L75.9484 31.4073L74.2808 31.4032V66.2798C74.2808 67.7057 73.1128 68.8574 71.6869 68.8574C71.3486 68.8572 71.0138 68.7903 70.7014 68.6606C70.389 68.5309 70.1052 68.341 69.8662 68.1016C69.6273 67.8623 69.4378 67.5782 69.3086 67.2656C69.1794 66.953 69.113 66.618 69.1133 66.2798V66.2838ZM114.898 77.9879C114.896 81.7499 113.552 85.3877 111.105 88.2457L94.1017 106.304C92.4138 107.892 92.0014 109.3 92.0014 111.43V114.717H73.4927L73.4724 106.895C73.4724 103.915 73.2286 99.9335 76.9559 96.0295L98.5319 74.3641C99.2834 73.6102 100.299 73.1787 101.363 73.1612C102.428 73.1437 103.457 73.5415 104.233 74.2704C105.009 74.9992 105.47 76.0017 105.519 77.0651C105.568 78.1285 105.201 79.1692 104.496 79.9663L94.0895 91.1138C93.4152 91.904 92.2736 93.3949 91.7069 95.221C91.4002 96.1696 91.3148 97.0938 91.2966 98.1541H94.6461C94.6583 97.3985 94.7152 96.7912 94.8959 96.2285C95.223 95.1763 95.877 94.2277 96.3666 93.6184L106.929 82.024C107.577 81.3836 108.092 80.6215 108.445 79.7814C108.798 78.9413 108.981 78.0398 108.985 77.1287C108.983 74.3926 107.339 71.8738 104.615 70.6327V50.7204C104.621 49.3577 105.167 48.053 106.134 47.0923C107.1 46.1317 108.408 45.5934 109.771 45.5955C111.13 45.5961 112.433 46.1363 113.393 47.0973C114.354 48.0583 114.894 49.3615 114.894 50.7204V77.9899L114.898 77.9879Z" fill="#FF9432"/>
        </svg>
      <h1 class="text-[32px] mb-[10px]">الخدمات والمميزات</h1>
      <p class="text-[20px] text-[#FF9432] mb-[60px]">ﺗﻌﻠﻢ ﺑﺄﺣﺪث اﻟﻄﺮق ﻣﻦ ﺧﻠﺎل ﻣﻨﺼﺘﻨﺎ,ﻓﺄﻧﻨﺎ ﻧﻮﻓﺮ ﻟﻚ اﻟﻌﺪﻳﺪ ﻣﻦ اﻟﻜﻮرﺳﺎت اﻟﺨﺎﺻﺔ</p>
      <div  ref="swiper1" class="swiper mb-[60px]">
          <div class="swiper-wrapper flex">
            <div class="group cursor-pointer  swiper-slide hover:bg-[#2C17AC] hover:border-[#2C17AC] transition-all duration-300 p-[40px_20px] w-full border-[3px] border-[#2C17AC] rounded-[20px] bg-white flex gap-[30px] flex-col justify-center items-center text-center">
              <h1 class="text-[22px] text-[#000] group-hover:text-[white] transition-all duration-300">اختبارات وواجبات</h1>
              <img :src="require('@/image/Feb-Business_9 1.png')" class="w-[100px] lg:w-[120px]" alt="">
              <h2 class="text-[16px] text-[rgba(0,_0,_0,_0.80)] group-hover:text-[#d2d2d2] transition-all duration-300">هدفنا طمانتكم ولذلك يقوم فريق كامل من المساعدين بمتابعة مستوى أبنائنا مع أولياء الأمور</h2>
            </div>  
            <div class="group cursor-pointer  swiper-slide hover:bg-[#2C17AC] hover:border-[#2C17AC] transition-all duration-300 p-[40px_20px] w-full border-[3px] border-[#2C17AC] rounded-[20px] bg-white flex gap-[30px] flex-col justify-center items-center text-center">
              <h1 class="text-[22px] text-[#000] group-hover:text-[white] transition-all duration-300">اختبارات وواجبات</h1>
              <img :src="require('@/image/Feb-Business_9 1.png')" class="w-[100px] lg:w-[120px]" alt="">
              <h2 class="text-[16px] text-[rgba(0,_0,_0,_0.80)] group-hover:text-[#d2d2d2] transition-all duration-300">هدفنا طمانتكم ولذلك يقوم فريق كامل من المساعدين بمتابعة مستوى أبنائنا مع أولياء الأمور</h2>
            </div>
            <div class="group cursor-pointer  swiper-slide hover:bg-[#2C17AC] hover:border-[#2C17AC] transition-all duration-300 p-[40px_20px] w-full border-[3px] border-[#2C17AC] rounded-[20px] bg-white flex gap-[30px] flex-col justify-center items-center text-center">
              <h1 class="text-[22px] text-[#000] group-hover:text-[white] transition-all duration-300">اختبارات وواجبات</h1>
              <img :src="require('@/image/Feb-Business_9 1.png')" class="w-[100px] lg:w-[120px]" alt="">
              <h2 class="text-[16px] text-[rgba(0,_0,_0,_0.80)] group-hover:text-[#d2d2d2] transition-all duration-300">هدفنا طمانتكم ولذلك يقوم فريق كامل من المساعدين بمتابعة مستوى أبنائنا مع أولياء الأمور</h2>
            </div>
            <div class="group cursor-pointer  swiper-slide hover:bg-[#2C17AC] hover:border-[#2C17AC] transition-all duration-300 p-[40px_20px] w-full border-[3px] border-[#2C17AC] rounded-[20px] bg-white flex gap-[30px] flex-col justify-center items-center text-center">
              <h1 class="text-[22px] text-[#000] group-hover:text-[white] transition-all duration-300">اختبارات وواجبات</h1>
              <img :src="require('@/image/Feb-Business_9 1.png')" class="w-[100px] lg:w-[120px]" alt="">
              <h2 class="text-[16px] text-[rgba(0,_0,_0,_0.80)] group-hover:text-[#d2d2d2] transition-all duration-300">هدفنا طمانتكم ولذلك يقوم فريق كامل من المساعدين بمتابعة مستوى أبنائنا مع أولياء الأمور</h2>
            </div>
            <div class="group cursor-pointer  swiper-slide hover:bg-[#2C17AC] hover:border-[#2C17AC] transition-all duration-300 p-[40px_20px] w-full border-[3px] border-[#2C17AC] rounded-[20px] bg-white flex gap-[30px] flex-col justify-center items-center text-center">
              <h1 class="text-[22px] text-[#000] group-hover:text-[white] transition-all duration-300">اختبارات وواجبات</h1>
              <img :src="require('@/image/Feb-Business_9 1.png')" class="w-[100px] lg:w-[120px]" alt="">
              <h2 class="text-[16px] text-[rgba(0,_0,_0,_0.80)] group-hover:text-[#d2d2d2] transition-all duration-300">هدفنا طمانتكم ولذلك يقوم فريق كامل من المساعدين بمتابعة مستوى أبنائنا مع أولياء الأمور</h2>
            </div>
            <div class="group cursor-pointer  swiper-slide hover:bg-[#2C17AC] hover:border-[#2C17AC] transition-all duration-300 p-[40px_20px] w-full border-[3px] border-[#2C17AC] rounded-[20px] bg-white flex gap-[30px] flex-col justify-center items-center text-center">
              <h1 class="text-[22px] text-[#000] group-hover:text-[white] transition-all duration-300">اختبارات وواجبات</h1>
              <img :src="require('@/image/Feb-Business_9 1.png')" class="w-[100px] lg:w-[120px]" alt="">
              <h2 class="text-[16px] text-[rgba(0,_0,_0,_0.80)] group-hover:text-[#d2d2d2] transition-all duration-300">هدفنا طمانتكم ولذلك يقوم فريق كامل من المساعدين بمتابعة مستوى أبنائنا مع أولياء الأمور</h2>
            </div>
            <div class="group cursor-pointer  swiper-slide hover:bg-[#2C17AC] hover:border-[#2C17AC] transition-all duration-300 p-[40px_20px] w-full border-[3px] border-[#2C17AC] rounded-[20px] bg-white flex gap-[30px] flex-col justify-center items-center text-center">
              <h1 class="text-[22px] text-[#000] group-hover:text-[white] transition-all duration-300">اختبارات وواجبات</h1>
              <img :src="require('@/image/Feb-Business_9 1.png')" class="w-[100px] lg:w-[120px]" alt="">
              <h2 class="text-[16px] text-[rgba(0,_0,_0,_0.80)] group-hover:text-[#d2d2d2] transition-all duration-300">هدفنا طمانتكم ولذلك يقوم فريق كامل من المساعدين بمتابعة مستوى أبنائنا مع أولياء الأمور</h2>
            </div>
            <div class="group cursor-pointer  swiper-slide hover:bg-[#2C17AC] hover:border-[#2C17AC] transition-all duration-300 p-[40px_20px] w-full border-[3px] border-[#2C17AC] rounded-[20px] bg-white flex gap-[30px] flex-col justify-center items-center text-center">
              <h1 class="text-[22px] text-[#000] group-hover:text-[white] transition-all duration-300">اختبارات وواجبات</h1>
              <img :src="require('@/image/Feb-Business_9 1.png')" class="w-[100px] lg:w-[120px]" alt="">
              <h2 class="text-[16px] text-[rgba(0,_0,_0,_0.80)] group-hover:text-[#d2d2d2] transition-all duration-300">هدفنا طمانتكم ولذلك يقوم فريق كامل من المساعدين بمتابعة مستوى أبنائنا مع أولياء الأمور</h2>
            </div>
          </div>
          <div class="swiper-pagination"></div>
            <div class="swiper-button-prev text-[#ffc300] md:left-[50px] top-[50%] opacity-[.6] hover:opacity-[1]"></div>
            <div class="swiper-button-next text-[#ffc300] md:right-[50px] top-[50%] opacity-[.6] hover:opacity-[1]"></div>
        </div>
      <button @click="$router.push('/services-features')" class="flex justify-center items-center text-[16px] p-[15px_40px]  md:p-[17px_40px] bg-[#FF9432] rounded-[10px] m-auto cursor-pointer transition ease-in text-white hover:bg-[#ff9532d6]">لمعرفة المزيد</button>
    </div>
    <div class="line w-full h-[0.3px] bg-[rgba(203,203,203,0.53)]"></div>
    <div class="blog text-center w-full max-w-[1400px] m-auto px-[30px] md:px-[100px] py-[60px]">
      <h1 class="text-[32px] mb-[10px]">المدونة</h1>
      <p class="text-[20px] text-[#FF9432] mb-[60px]">ﺗﻌﻠﻢ ﺑﺄﺣﺪث اﻟﻄﺮق ﻣﻦ ﺧﻠﺎل ﻣﻨﺼﺘﻨﺎ,ﻓﺄﻧﻨﺎ ﻧﻮﻓﺮ ﻟﻚ اﻟﻌﺪﻳﺪ ﻣﻦ اﻟﻜﻮرﺳﺎت اﻟﺨﺎﺻﺔ</p>
      <div  ref="swiper2" class="swiper mb-[60px]">
          <div class="swiper-wrapper flex">
            <div class="group cursor-pointer swiper-slide hover:bg-[#2C17AC] hover:border-[#2C17AC] transition-all duration-300 p-[40px_20px] w-full border-[3px] border-[#2C17AC] rounded-[20px] bg-white flex gap-[20px] flex-col justify-center items-center text-center">
              <img :src="require('@/image/avatar-plog.svg')" class="w-[100px] lg:w-[70px]" alt="">
              <h1 class="text-[20px] text-[#000] group-hover:text-[white] transition-all duration-300">ا / احمد السيد</h1>
              <h2 class="text-[14px] text-right text-[rgba(112,112,112,0.8)] group-hover:text-[#d2d2d2] transition-all duration-300">هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم ، غير منسق، أو حتى غير مفهوم. لأنه مازال نص بديلاً ومؤقتاً.</h2>
            </div>
            <div class="group cursor-pointer swiper-slide hover:bg-[#2C17AC] hover:border-[#2C17AC] transition-all duration-300 p-[40px_20px] w-full border-[3px] border-[#2C17AC] rounded-[20px] bg-white flex gap-[20px] flex-col justify-center items-center text-center">
              <img :src="require('@/image/avatar-plog.svg')" class="w-[100px] lg:w-[70px]" alt="">
              <h1 class="text-[20px] text-[#000] group-hover:text-[white] transition-all duration-300">ا / احمد السيد</h1>
              <h2 class="text-[14px] text-right text-[rgba(112,112,112,0.8)] group-hover:text-[#d2d2d2] transition-all duration-300">هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم ، غير منسق، أو حتى غير مفهوم. لأنه مازال نص بديلاً ومؤقتاً.</h2>
            </div>  
            <div class="group cursor-pointer swiper-slide hover:bg-[#2C17AC] hover:border-[#2C17AC] transition-all duration-300 p-[40px_20px] w-full border-[3px] border-[#2C17AC] rounded-[20px] bg-white flex gap-[20px] flex-col justify-center items-center text-center">
              <img :src="require('@/image/avatar-plog.svg')" class="w-[100px] lg:w-[70px]" alt="">
              <h1 class="text-[20px] text-[#000] group-hover:text-[white] transition-all duration-300">ا / احمد السيد</h1>
              <h2 class="text-[14px] text-right text-[rgba(112,112,112,0.8)] group-hover:text-[#d2d2d2] transition-all duration-300">هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم ، غير منسق، أو حتى غير مفهوم. لأنه مازال نص بديلاً ومؤقتاً.</h2>
            </div>

            <div class="group cursor-pointer swiper-slide hover:bg-[#2C17AC] hover:border-[#2C17AC] transition-all duration-300 p-[40px_20px] w-full border-[3px] border-[#2C17AC] rounded-[20px] bg-white flex gap-[20px] flex-col justify-center items-center text-center">
              <img :src="require('@/image/avatar-plog.svg')" class="w-[100px] lg:w-[70px]" alt="">
              <h1 class="text-[20px] text-[#000] group-hover:text-[white] transition-all duration-300">ا / احمد السيد</h1>
              <h2 class="text-[14px] text-right text-[rgba(112,112,112,0.8)] group-hover:text-[#d2d2d2] transition-all duration-300">هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم ، غير منسق، أو حتى غير مفهوم. لأنه مازال نص بديلاً ومؤقتاً.</h2>
            </div>
            <div class="group cursor-pointer swiper-slide hover:bg-[#2C17AC] hover:border-[#2C17AC] transition-all duration-300 p-[40px_20px] w-full border-[3px] border-[#2C17AC] rounded-[20px] bg-white flex gap-[20px] flex-col justify-center items-center text-center">
              <img :src="require('@/image/avatar-plog.svg')" class="w-[100px] lg:w-[70px]" alt="">
              <h1 class="text-[20px] text-[#000] group-hover:text-[white] transition-all duration-300">ا / احمد السيد</h1>
              <h2 class="text-[14px] text-right text-[rgba(112,112,112,0.8)] group-hover:text-[#d2d2d2] transition-all duration-300">هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم ، غير منسق، أو حتى غير مفهوم. لأنه مازال نص بديلاً ومؤقتاً.</h2>
            </div>
            <div class="group cursor-pointer swiper-slide hover:bg-[#2C17AC] hover:border-[#2C17AC] transition-all duration-300 p-[40px_20px] w-full border-[3px] border-[#2C17AC] rounded-[20px] bg-white flex gap-[20px] flex-col justify-center items-center text-center">
              <img :src="require('@/image/avatar-plog.svg')" class="w-[100px] lg:w-[70px]" alt="">
              <h1 class="text-[20px] text-[#000] group-hover:text-[white] transition-all duration-300">ا / احمد السيد</h1>
              <h2 class="text-[14px] text-right text-[rgba(112,112,112,0.8)] group-hover:text-[#d2d2d2] transition-all duration-300">هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم ، غير منسق، أو حتى غير مفهوم. لأنه مازال نص بديلاً ومؤقتاً.</h2>
            </div>
            <div class="group cursor-pointer swiper-slide hover:bg-[#2C17AC] hover:border-[#2C17AC] transition-all duration-300 p-[40px_20px] w-full border-[3px] border-[#2C17AC] rounded-[20px] bg-white flex gap-[20px] flex-col justify-center items-center text-center">
              <img :src="require('@/image/avatar-plog.svg')" class="w-[100px] lg:w-[70px]" alt="">
              <h1 class="text-[20px] text-[#000] group-hover:text-[white] transition-all duration-300">ا / احمد السيد</h1>
              <h2 class="text-[14px] text-right text-[rgba(112,112,112,0.8)] group-hover:text-[#d2d2d2] transition-all duration-300">هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم ، غير منسق، أو حتى غير مفهوم. لأنه مازال نص بديلاً ومؤقتاً.</h2>
            </div>
            <div class="group cursor-pointer swiper-slide hover:bg-[#2C17AC] hover:border-[#2C17AC] transition-all duration-300 p-[40px_20px] w-full border-[3px] border-[#2C17AC] rounded-[20px] bg-white flex gap-[20px] flex-col justify-center items-center text-center">
              <img :src="require('@/image/avatar-plog.svg')" class="w-[100px] lg:w-[70px]" alt="">
              <h1 class="text-[20px] text-[#000] group-hover:text-[white] transition-all duration-300">ا / احمد السيد</h1>
              <h2 class="text-[14px] text-right text-[rgba(112,112,112,0.8)] group-hover:text-[#d2d2d2] transition-all duration-300">هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم ، غير منسق، أو حتى غير مفهوم. لأنه مازال نص بديلاً ومؤقتاً.</h2>
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