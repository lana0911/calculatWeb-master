<template lang="pug">
#Activity
  el-tabs(
    v-model="activeName"
    type="card"
  )
    el-tab-pane(label="學校課程" name="first") 
      roomCard(:cardData="sc")
    el-tab-pane(label="工作會議" name="sec") 
      roomCard(:cardData="wo")
    el-tab-pane(label="同儕" name="thir") 
      roomCard(:cardData="fr")
    el-tab-pane(
      v-for="item in editableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
    )
      span {{ item.content }}
</template>

<script>
import roomCard from '@/components/shared/roomCard.vue'
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Activity',
  components:{
    roomCard
  },
  data() {
    return {
      editableTabsValue: '2',
      editableTabs: [
      ],
      tabIndex: 2,
    }
  },
  methods: {
    handleTabsEdit(targetName, action) {
      if (action === 'add') {
        const newTabName = `${++this.tabIndex}`
        this.editableTabs.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content',
        })
        this.editableTabsValue = newTabName
      }
      if (action === 'remove') {
        const tabs = this.editableTabs
        let activeName = this.editableTabsValue
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              const nextTab = tabs[index + 1] || tabs[index - 1]
              if (nextTab) {
                activeName = nextTab.name
              }
            }
          })
        }

        this.editableTabsValue = activeName
        this.editableTabs = tabs.filter((tab) => tab.name !== targetName)
      }
    },
  },
  setup() {
    const activeName =  'first'
    const sc = [
      {img:"https://i.imgur.com/kw1nHzv.jpg", name:'UX服務設計', classfy:'通識', on:'yes', time:"週三 13:00"},
      {img:"https://i.imgur.com/i8mS5Nc.png", name:'資料結構', classfy:'資訊四丙', on:'no', time:"週三 16:00"},
      {img:"https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2006&q=80", name:'AI人工智慧導論', classfy:'學分學程', on:'no', time:"週一 10:00"},
      {img:"https://media.istockphoto.com/photos/question-parlezvous-francais-do-you-speak-french-picture-id494494658", name:'法文(一)', classfy:'外文合', on:'no', time:"週三 8:00"},
      {img:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", name:'演算法', classfy:'資訊合', on:'no', time:"週五 8:00"},
      {img:"https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1946&q=80", name:'大數據分析', classfy:'跨領域', on:'no', time:"週二 15:00"},
    ]
    const wo = [
      {img:"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", name:'股東會議', classfy:'台北處', on:'yes', time:"週三 10:30"},
      {img:"https://images.unsplash.com/photo-1554902843-260acd0993f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", name:'代表會議', classfy:'總公司', on:'no', time:"週一 13:00"},
      {img:"https://images.unsplash.com/photo-1638913974023-cef988e81629?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", name:'產品流程會議', classfy:'研發部門', on:'yes', time:"週五 14:00"},
      {img:"https://www.w3schools.com/css/img_lights.jpg", name:'座談會', classfy:'資安部門', on:'no', time:"週一 10:00"},
    ]
    const fr = [
      {img:"https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", name:'專題', classfy:'PoseAd系統', on:'no', time:"週三 16:00"},
      {img:"https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", name:'狼人殺', classfy:'隊友', on:'no', time:"週六 20:00"},
      {img:"https://images.unsplash.com/photo-1616587894289-86480e533129?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", name:'通識採訪', classfy:'D組', on:'yes', time:"週日 13:30"},
    ]
    return {
      sc,
      wo,
      fr,
      activeName
    }
  }
})
</script>
