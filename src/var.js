import { ref } from 'vue'
//defalut

export const htmlClass = ref('defaulthtml')
export const titleClass = ref('defaulttitle')
export const wrapClass = ref('defaultwrap')
export const themeNav = ref('defaultthemeNav')
export const themeNavItem = ref('defaultthemeNavItem')
export const themeHead = ref('defaultthemeHead')
export const themeTable = ref('defaultthemeTable')
export const baseVar = ref('#0b2f45')
// //cute
// export const themeNav = ref('defaultthemeNav')
// export const themeNavItem = ref('defaultthemeNavItem')
// export const themeHead = ref('defaultthemeHead')
// export const themeTable = ref('defaultthemeTable')
// export const baseVar = ref('#0b2f45')


//ElasticApi 分類(官方)
export const lover = ref([
    
])

export const tableData1 = [
    {
      
      id: 1,
      format: '.pdf',
      name: '功課',
      size: '2.5gb',
      date: '2021-12-25',
      star: true,
    },
    {
      id: 2,
      format: '.cpp',
      name: 'adder',
      size: '2.5gb',
      date: '2021-12-25',
      star: false,
    },
    {
      id: 3,
      format: '.ppt',
      name: 'UX期中報告',
      size: '2.5gb',
      date: '2021-12-25',
      star: false,
    },
    {
      id: 4,
      format: '.json',
      name: '聊天集',
      size: '2.5gb',
      date: '2021-12-25',
      star: false,
    },
  ]
///---------------------------------------

export const tableData2 = [
  {
    
    id: 1,
    format: '.pdf',
    name: '功課1/8',
    size: '2gb',
    date: '2021-12-25',
    star: true,
    info:'請在1/8號錢繳交，預期0分計算',
    owner: '陳家成',
    hand: false
  },
  {
    id: 2,
    format: '.cpp',
    name: 'adder加法器',
    size: '7.35gb',
    date: '2021-2-9',
    star: false,
    info:'可參考講義103-110頁',
    owner: '李大維',
    hand: false
  },
  {
    id: 3,
    format: '.ppt',
    name: '計算機概論期末報告',
    size: '10gb',
    date: '2021-2-25',
    star: false,
    info:'各組派一人繳交即可，須包含封面、組員、參考資料來源',
    owner: '吳貴忠',
    hand: true
  },
  {
    id: 4,
    format: '.json',
    name: '聊天集',
    size: '3mb',
    date: '2021-12-5',
    star: false,
    info:'不同對象聊天集以不名區隔，intent為關鍵字，word為回覆相關內容，可適用json讀取。',
    owner: '蘇義芳',
    hand: false
  },
  {
    id: 5,
    format: '.vue',
    name: 'Table',
    size: '3mb',
    date: '2021-12-25',
    star: false,
    info:'',
    owner: '張熙媛',
    hand: false
  },
  {
    id: 6,
    format: '.pdf',
    name: '備份',
    size: '3mb',
    date: '2021-5-5',
    star: false,
    info:'',
    owner: '蔡文瑜',
    hand: true
  },
]
///---------------------------------------
export const isCameraOpen  = ref(false) 