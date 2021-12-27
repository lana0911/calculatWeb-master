// module.exports = {
//     css: {
//         loaderOptions: {
//             scss: {
//                 additionalData: `@import "./src/assets/styles/style.sass";` //注意
//             }
//         }
//     }
// };
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/calculatWeb/' // test20200915 為 repo 名稱
      : '/'
  }
  
  