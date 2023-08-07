<template>
  <div class="PersonPage w-full">
    <div class="w-full md:w-[70%] flex justify-center items-center flex-col gap-[20px] md:m-auto p-[60px_40px] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] border-[.5px] border-[#2b17ac72] rounded-[40px]">
      <div class="w-[130px] h-[130px] rounded-full relative">
        <img :src="require('@/image/person.jpg')" class="rounded-full w-full h-full object-cover" alt="">
        <div class="group flex items-center justify-center absolute bottom-0 right-0">
            <label for="dropzone-file" class="flex flex-col items-center justify-center w-[30px] h-[30px] cursor-pointer">
                <div class="flex flex-col items-center justify-center pt-2 pb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-[20px] h-[20px] shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)]" width="29" height="29" viewBox="0 0 29 29" fill="none">
                    <path class="group-hover:fill-[#2b17acd6]" d="M26.6018 14.3147C26.2305 14.3147 25.8743 14.4622 25.6118 14.7248C25.3492 14.9874 25.2017 15.3435 25.2017 15.7148V24.1154C25.2017 24.4867 25.0542 24.8428 24.7916 25.1054C24.529 25.368 24.1729 25.5155 23.8016 25.5155H4.20028C3.82895 25.5155 3.47284 25.368 3.21027 25.1054C2.9477 24.8428 2.80019 24.4867 2.80019 24.1154V4.51406C2.80019 4.14274 2.9477 3.78662 3.21027 3.52405C3.47284 3.26148 3.82895 3.11397 4.20028 3.11397H12.6008C12.9722 3.11397 13.3283 2.96646 13.5909 2.70389C13.8534 2.44132 14.0009 2.0852 14.0009 1.71388C14.0009 1.34255 13.8534 0.986429 13.5909 0.72386C13.3283 0.461292 12.9722 0.313782 12.6008 0.313782H4.20028C3.0863 0.313782 2.01794 0.756311 1.23023 1.54402C0.442529 2.33172 0 3.40008 0 4.51406V24.1154C0 25.2294 0.442529 26.2977 1.23023 27.0854C2.01794 27.8731 3.0863 28.3157 4.20028 28.3157H23.8016C24.9156 28.3157 25.9839 27.8731 26.7716 27.0854C27.5594 26.2977 28.0019 25.2294 28.0019 24.1154V15.7148C28.0019 15.3435 27.8544 14.9874 27.5918 14.7248C27.3292 14.4622 26.9731 14.3147 26.6018 14.3147ZM5.60038 15.3788V21.3152C5.60038 21.6865 5.74789 22.0426 6.01046 22.3052C6.27302 22.5678 6.62914 22.7153 7.00047 22.7153H12.9369C13.1211 22.7164 13.3038 22.681 13.4744 22.6114C13.645 22.5417 13.8001 22.439 13.9309 22.3093L23.6196 12.6066L27.5959 8.71435C27.7271 8.58419 27.8312 8.42934 27.9023 8.25872C27.9734 8.08811 28.01 7.90511 28.01 7.72028C28.01 7.53545 27.9734 7.35245 27.9023 7.18184C27.8312 7.01122 27.7271 6.85637 27.5959 6.72621L21.6595 0.71981C21.5293 0.588581 21.3744 0.484422 21.2038 0.413341C21.0332 0.34226 20.8502 0.305664 20.6654 0.305664C20.4806 0.305664 20.2976 0.34226 20.1269 0.413341C19.9563 0.484422 19.8015 0.588581 19.6713 0.71981L15.7231 4.68208L6.0064 14.3847C5.87664 14.5156 5.77398 14.6707 5.7043 14.8413C5.63463 15.0119 5.59931 15.1945 5.60038 15.3788ZM20.6654 3.68801L24.6277 7.65028L22.6395 9.63841L18.6773 5.67614L20.6654 3.68801ZM8.40057 15.9528L16.7031 7.65028L20.6654 11.6125L12.3628 19.9151H8.40057V15.9528Z" fill="#FF9001"/>
                  </svg>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
            </label>
        </div>
      </div>
      <h1 class="text-[26px] mb-[20px] relative after:absolute after:bottom-[-7px] after:left-[50%] after:translate-x-[-50%] after:w-[70px] after:h-[3px] after:bg-[#1762acd5]">ا/ بهجت صابر</h1>
      <button class="flex justify-center items-center text-[15px] p-[15px_40px]  md:p-[10px_30px] bg-[#FF9432] rounded-[10px] m-auto cursor-pointer transition ease-in text-white hover:bg-[#ff9532d6]">حفظ</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PersonPage'
}
</script>

<style scoped lang="scss">

</style> 