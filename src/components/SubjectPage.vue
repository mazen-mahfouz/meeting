<template>
  <div class="SubjectPage">
    <header class="w-full px-[30px] md:px-[80px] pt-[190px] pb-[120px] text-white relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(0,_0,_0,_0.57)] ">
      <img :src="require('@/image/subject-header.png')" class="absolute top-0 left-0 w-full h-full object-cover" alt="">
      <div class="z-[2] relative text-center">
        <h1 class="text-[14vw] md:text-[80px] font-[700] mb-[20px]">المواد الدراسية</h1>
        <p class="text-[20px] md:text-[22px] font-[400] mb-[30px]">تعلم بافضل الطرق مع اكفأ المعلمين في كافة المواد لضمان اعلي النتائج </p>
        <button @click="$router.push('/contact-us')" class="flex justify-center items-center text-[16px] p-[15px_40px]  md:p-[17px_40px] border border-[#FF9432] rounded-[10px] m-auto cursor-pointer transition ease-in hover:bg-[#FF9432] ">تواصل معنا</button>
      </div>
    </header>
    <div class="subjects text-center w-full max-w-[1400px] m-auto px-[30px] md:px-[100px] py-[60px]">
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
    </div>
  </div>
</template>

<script>

export default {
  name: 'SubjectPage'
}
</script>

<style scoped lang="scss">

</style> 