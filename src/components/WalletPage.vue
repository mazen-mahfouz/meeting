<template>
  <div class="WalletPage">
    <header class="w-full px-[30px] md:px-[80px] pt-[190px] pb-[120px] text-white relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(0,_0,_0,_0.57)] ">
      <img :src="require('@/image/wallet-header.png')" class="absolute top-0 left-0 w-full h-full object-cover" alt="">
      <div class="z-[2] relative text-center">
        <h1 class="text-[14vw] md:text-[80px] font-[700] mb-[20px]">محفظتي</h1>
        <p class="text-[20px] md:text-[22px] font-[400] mb-[30px]">بامكانك الدفع معنا بكل سهولة</p>
        <button @click="$router.push('/contact-us')" class="flex justify-center items-center text-[16px] p-[15px_40px]  md:p-[17px_40px] border border-[#FF9432] rounded-[10px] m-auto cursor-pointer transition ease-in hover:bg-[#FF9432] ">تواصل معنا</button>
      </div>
    </header>
    <div class="WalletPage w-full md:w-[70%] max-w-[1400px] m-auto px-[5%] sm:px-[30px] md:px-[100px] py-[60px] flex flex-col justify-center items-center gap-[50px] ">
      <img :src="require('@/image/pay-icon.png')" class="hidden md:block w-[300px]" alt="">
      <h1 class="text-[28px] mb-[20px] relative after:absolute after:bottom-[-10px] after:left-[50%] after:translate-x-[-50%] after:w-[70px] after:h-[3px] after:bg-[#FF9432]">طرق الدفع</h1>
      <div class="w-full flex flex-col justify-center items-center gap-[30px]">
        <div class="flex justify-between items-center w-full p-[15px_40px] border border-[#8D8D8D] rounded-[30px]">
          <div class="flex justify-center items-center gap-[12px]">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-[25px]" width="50" height="50" viewBox="0 0 50 50" fill="none">
              <path d="M25 0C18.3696 0 12.0107 2.63392 7.32233 7.32233C2.63392 12.0107 0 18.3696 0 25C0 31.6304 2.63392 37.9893 7.32233 42.6777C12.0107 47.3661 18.3696 50 25 50C31.6304 50 37.9893 47.3661 42.6777 42.6777C47.3661 37.9893 50 31.6304 50 25C50 18.3696 47.3661 12.0107 42.6777 7.32233C37.9893 2.63392 31.6304 0 25 0ZM33.8542 2.33333C34.5208 2.33333 35.2083 2.39583 35.6458 2.54167C31.125 3.47917 27.5208 7.6875 27.5417 12.5C27.5417 12.6042 27.5417 12.7292 27.5625 12.8542C35.1458 14.7083 38.5417 19.2708 38.5417 25.5833C38.625 31.8958 33.625 38.8333 25.1875 38.8542C18.375 38.875 11.2708 33.0417 11.2292 23.6875C11.2083 17.5 14.5833 11.5417 18.8333 8.02083C23 4.5625 28.6875 2.35417 33.8542 2.33333Z" fill="#8D8D8D"/>
            </svg>
            <h1 class="text-[14px] md:text-[16px] font-bold text-[#8D8D8D]">فودافون كاش</h1>
          </div>
          <button class="flex justify-center items-center text-[15px] p-[15px_40px]  md:p-[12px_18px] border border-[#FF9432] rounded-[10px] cursor-pointer transition ease-in text-[#FF9001] hover:text-[#fff] hover:bg-[#FF9432] ">ادفع</button>
        </div>
        <div class="flex justify-between items-center w-full p-[15px_40px] border border-[#8D8D8D] rounded-[30px]">
          <div class="flex justify-center items-center gap-[12px]">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-[25px]" width="50" height="50" viewBox="0 0 50 50" fill="none">
              <path d="M46.6667 50H3.33333C2.44928 50 1.60143 49.4732 0.976311 48.5355C0.351189 47.5979 0 46.3261 0 45L0 5C0 3.67392 0.351189 2.40215 0.976311 1.46447C1.60143 0.526784 2.44928 0 3.33333 0L46.6667 0C47.5507 0 48.3986 0.526784 49.0237 1.46447C49.6488 2.40215 50 3.67392 50 5V45C50 46.3261 49.6488 47.5979 49.0237 48.5355C48.3986 49.4732 47.5507 50 46.6667 50ZM24.7778 30.7542L24.2792 35.4417C25.5535 36.2461 26.9295 36.6236 28.3111 36.5479H28.2958C29.9149 36.6896 31.5182 36.0044 32.8444 34.6042L32.8208 34.6271C33.3623 34.0301 33.8026 33.2505 34.1061 32.3512C34.4096 31.4518 34.5679 30.458 34.5681 29.45V29.4187C34.5681 27.1271 33.5458 25.225 31.5306 23.7542C30.9806 23.3561 30.4546 22.8877 29.9583 22.3542L29.9903 22.3875C29.8517 22.2528 29.7362 22.0709 29.6535 21.8566C29.5707 21.6422 29.5228 21.4015 29.5139 21.1542V21.15C29.5243 20.892 29.578 20.6421 29.67 20.4235C29.762 20.205 29.8894 20.0249 30.0403 19.9L30.0458 19.8958C30.5121 19.4924 31.0477 19.306 31.5847 19.3604H31.5764H31.6875L31.7944 19.3583C32.6889 19.3583 33.5375 19.6479 34.3028 20.1667L34.2639 20.1437L34.5889 20.4042L35.0875 15.8812C34.0791 15.2947 33.0065 14.9965 31.925 15.0021H31.8569H31.8611C30.2962 14.8993 28.7532 15.5826 27.4764 16.9438L27.4986 16.9208C26.9679 17.4827 26.5349 18.2274 26.236 19.0924C25.937 19.9574 25.7808 20.9173 25.7806 21.8917V21.9021C25.7667 24.1062 26.825 26.0104 28.9278 27.5687C29.4833 27.9333 29.9625 28.3792 30.3917 28.9146L30.3819 28.9021C30.5058 29.0583 30.6065 29.2518 30.6776 29.4699C30.7486 29.6881 30.7884 29.9261 30.7944 30.1687V30.1771C30.7944 30.8417 30.5306 31.4125 30.15 31.6687L30.1431 31.6729C29.7264 32.0021 29.2319 32.1937 28.7069 32.1937H28.6431H28.6458H28.5417C27.3514 32.1937 26.2236 31.7979 25.2125 31.0896L25.2611 31.1208L24.7847 30.7625L24.7778 30.7542ZM38.8403 33.1312H43.4444C43.5185 33.6076 43.6634 34.6493 43.8792 36.2562H47.2222L44.3139 15.3583H41.5361C41.139 15.3055 40.7411 15.4463 40.4016 15.7597C40.062 16.0731 39.799 16.5424 39.6514 17.0979L39.6472 17.1167L34.3139 36.2562H38.0917L38.85 33.1333L38.8403 33.1312ZM20.6819 15.3583L18.4236 36.2562H22.0264L24.2833 15.3583H20.6819ZM6.83611 19.6229L9.76667 36.2229H13.5639L19.2236 15.3583H15.4097L11.8903 29.6167L11.5208 26.7187L10.2653 17.1167C10.198 16.5628 9.98987 16.0699 9.68487 15.7418C9.37988 15.4138 9.00185 15.2763 8.63056 15.3583L8.63889 15.3562H2.82361L2.78056 15.7792C7.25833 17.4854 10.2 21.1667 11.525 26.7167C11.1178 25.1308 10.49 23.6933 9.68333 22.5L9.68194 22.4979C8.88946 21.2774 7.94153 20.3082 6.89444 19.6479L6.83889 19.6167L6.83611 19.6229ZM42.8597 28.8333H39.8597C40.0625 28.0306 40.5403 26.0861 41.2931 23L41.3569 22.7062L41.5792 21.8604C41.6708 21.5146 41.7319 21.2312 41.7736 21.0146L42.0347 22.8042L42.8583 28.825L42.8597 28.8333Z" fill="#8D8D8D"/>
            </svg>
            <h1 class="text-[14px] md:text-[16px] font-bold text-[#8D8D8D]">الدفع اونلاين</h1>
          </div>
          <button class="flex justify-center items-center text-[15px] p-[15px_40px]  md:p-[12px_18px] border border-[#FF9432] rounded-[10px] cursor-pointer transition ease-in text-[#FF9001] hover:text-[#fff] hover:bg-[#FF9432] ">ادفع</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'WalletPage'
}
</script>

<style scoped lang="scss">

</style> 