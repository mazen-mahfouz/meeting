<template>
  <div class="PasswordPage w-full">
    <div class="w-full md:w-[70%] flex justify-center items-center flex-col gap-[20px] md:m-auto p-[60px_40px] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] border-[.5px] border-[#2b17ac72] rounded-[40px]">
      <form action="" class="w-full flex flex-col gap-[30px]">
        <div class="w-full lg:w-[50%] md:m-auto relative">
          <label for="name" class="block text-[16px] mb-[10px] font-bold text-gray-900">كلمة السر الحالية</label>
          <div class="w-full relative">
            <svg xmlns="http://www.w3.org/2000/svg" @click="$refs.inp1.type == 'password'? $refs.inp1.type = 'text' : $refs.inp1.type = 'password'" class="group absolute top-[50%] translate-y-[-50%] left-[20px] w-[15px] cursor-pointer" width="22" height="16" viewBox="0 0 22 16" fill="none">
              <path class="fill-[#8d8d8d92] group-hover:fill-[#8D8D8D]" fill-rule="evenodd" clip-rule="evenodd" d="M0.068601 7.636C1.8026 3.194 5.8836 0 10.9996 0C16.1156 0 20.1966 3.194 21.9306 7.636C22.0221 7.87005 22.0221 8.12995 21.9306 8.364C20.1966 12.806 16.1156 16 10.9996 16C5.8836 16 1.8026 12.806 0.068601 8.364C-0.022867 8.12995 -0.022867 7.87005 0.068601 7.636ZM10.9996 11C11.7953 11 12.5583 10.6839 13.1209 10.1213C13.6835 9.55871 13.9996 8.79565 13.9996 8C13.9996 7.20435 13.6835 6.44129 13.1209 5.87868C12.5583 5.31607 11.7953 5 10.9996 5C10.204 5 9.44089 5.31607 8.87828 5.87868C8.31567 6.44129 7.9996 7.20435 7.9996 8C7.9996 8.79565 8.31567 9.55871 8.87828 10.1213C9.44089 10.6839 10.204 11 10.9996 11Z" fill="#8D8D8D"/>
              </svg>
            <input ref="inp1" type="password" id="name" class="border border-[#2C17AC] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-[20px]" placeholder='كلمة السر الحالية' required>
          </div>
        </div>
        <div class="w-full lg:w-[50%] md:m-auto relative">
          <label for="name" class="block text-[16px] mb-[10px] font-bold text-gray-900">كلمة السر الجديدة</label>
          <div class="w-full relative">
            <svg xmlns="http://www.w3.org/2000/svg" @click="$refs.inp2.type == 'password'? $refs.inp2.type = 'text' : $refs.inp2.type = 'password'" class="group absolute top-[50%] translate-y-[-50%] left-[20px] w-[15px] cursor-pointer" width="22" height="16" viewBox="0 0 22 16" fill="none">
              <path class="fill-[#8d8d8d92] group-hover:fill-[#8D8D8D]" fill-rule="evenodd" clip-rule="evenodd" d="M0.068601 7.636C1.8026 3.194 5.8836 0 10.9996 0C16.1156 0 20.1966 3.194 21.9306 7.636C22.0221 7.87005 22.0221 8.12995 21.9306 8.364C20.1966 12.806 16.1156 16 10.9996 16C5.8836 16 1.8026 12.806 0.068601 8.364C-0.022867 8.12995 -0.022867 7.87005 0.068601 7.636ZM10.9996 11C11.7953 11 12.5583 10.6839 13.1209 10.1213C13.6835 9.55871 13.9996 8.79565 13.9996 8C13.9996 7.20435 13.6835 6.44129 13.1209 5.87868C12.5583 5.31607 11.7953 5 10.9996 5C10.204 5 9.44089 5.31607 8.87828 5.87868C8.31567 6.44129 7.9996 7.20435 7.9996 8C7.9996 8.79565 8.31567 9.55871 8.87828 10.1213C9.44089 10.6839 10.204 11 10.9996 11Z" fill="#8D8D8D"/>
              </svg>
            <input ref="inp2" type="password" id="name" class="border border-[#2C17AC] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-[20px]" placeholder='كلمة السر الجديدة' required>
          </div>
        </div>
        <div class="w-full lg:w-[50%] md:m-auto relative">
          <label for="name" class="block text-[16px] mb-[10px] font-bold text-gray-900">تاكيد كلمة السر</label>
          <div class="w-full relative">
            <svg xmlns="http://www.w3.org/2000/svg" @click="$refs.inp3.type == 'password'? $refs.inp3.type = 'text' : $refs.inp3.type = 'password'" class="group absolute top-[50%] translate-y-[-50%] left-[20px] w-[15px] cursor-pointer" width="22" height="16" viewBox="0 0 22 16" fill="none">
              <path class="fill-[#8d8d8d92] group-hover:fill-[#8D8D8D]" fill-rule="evenodd" clip-rule="evenodd" d="M0.068601 7.636C1.8026 3.194 5.8836 0 10.9996 0C16.1156 0 20.1966 3.194 21.9306 7.636C22.0221 7.87005 22.0221 8.12995 21.9306 8.364C20.1966 12.806 16.1156 16 10.9996 16C5.8836 16 1.8026 12.806 0.068601 8.364C-0.022867 8.12995 -0.022867 7.87005 0.068601 7.636ZM10.9996 11C11.7953 11 12.5583 10.6839 13.1209 10.1213C13.6835 9.55871 13.9996 8.79565 13.9996 8C13.9996 7.20435 13.6835 6.44129 13.1209 5.87868C12.5583 5.31607 11.7953 5 10.9996 5C10.204 5 9.44089 5.31607 8.87828 5.87868C8.31567 6.44129 7.9996 7.20435 7.9996 8C7.9996 8.79565 8.31567 9.55871 8.87828 10.1213C9.44089 10.6839 10.204 11 10.9996 11Z" fill="#8D8D8D"/>
              </svg>
            <input ref="inp3" type="password" id="name" class="border border-[#2C17AC] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-[20px]" placeholder='تاكيد كلمة السر' required>
          </div>
        </div>
        <button class="flex justify-center items-center text-[15px] p-[15px_40px]  md:p-[10px_30px] bg-[#fff] rounded-[10px] m-auto cursor-pointer transition ease-in text-[#ff9532d6] hover:text-white border border-[#ff9532d6] hover:bg-[#ff9532d6]">حفظ</button>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PasswordPage'
}
</script>

<style scoped lang="scss">

</style> 