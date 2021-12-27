<template>
  <div class="wrap">
    <el-table
      class="table"
      :data="tableData"
      row-key="id"
      border
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      :header-cell-style="{ background: '#545c64', color: '#fff' }"
      @row-click="chose"
    >
      <el-table-column  label="分類" >
       <template #default="scope">
         <span v-if="!(scope.row.children)">📰 </span>
         <span>{{scope.row.name}}</span>
       </template>
      </el-table-column>
    </el-table>

    <div class="detail">
      <div class="d-head">
        <div class="title">📚 目前資料夾 : {{uri}}</div>
        <div class="btn">
          <el-button type="warning" @click="dialogVisible = true">+ 上傳</el-button>
        </div>
      </div>
      <el-table
        :data="
          tableData1.filter(
            (data) =>
              !search || data.toLowerCase().includes(search.toLowerCase())
          )
        "
        :header-cell-style="{ background: '#545c64', color: '#fff' }"
      >
        <el-table-column label="檔案名稱" prop="name" >
          <template #default="scope">
            <i id="star" style="color:#ffc100" class="icon-star-full" v-if="scope.row.star" @click="addLove(scope.row)"></i>
            <i id="star" class="icon-star-empty" v-else @click="addLove(scope.row)"></i>
            <span> &ensp;{{scope.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column label="檔案格式" prop="format"  width="120px"/>
        <el-table-column label="大小" prop="size" width="120px"/>
        <el-table-column label="上傳者" prop="owner" width="120px"/>
        <el-table-column label="備註" prop="info" width="200px"/>
        <el-table-column label="日期" prop="date" width="120px"/>
        <el-table-column align="right">
          <template #header>
            <el-input v-model="search" size="mini" placeholder="Type to search" />
          </template>
          <template #default="scope">
            <el-button size="mini"
              type="primary"
              @click="handleEdit(scope.$index, scope.row)"
              plain
              >預覽</el-button
            >
            <el-button
              size="mini"
              type="success"
              plain
              @click="handleDelete(scope.$index, scope.row)"
              >下載</el-button
            >
            <el-button
              size="mini"
              type="danger"
              plain
              @click="handleDelete(scope.$index, scope.row)"
              >刪除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog
      v-model="dialogVisible"
      title="上傳檔案"
      width="fit-content"
      :before-close="handleClose"
    >
      <uploader/>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >Confirm</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script >
import { defineComponent, ref } from 'vue';
import uploader from '@/components/shared/uploader.vue'
import { lover , tableData1} from '@/var'
export default defineComponent({
  name: 'tableDoc2',
  components:{uploader},
  data() {
    return {
      search: '',
      tableData: [
        {
          id: 3,
          name: '學校課程',
          children: [
            {
              id: 31,
              name: 'UX服務設計',
            },
            {
              id: 32,
              name: '資料結構',
            },
            {
              id: 33,
              name: '法文(一)',
            },
            {
              id: 34,
              name: '演算法',
            },
            {
              id: 35,
              name: '大數據分析',
            },
          ],
        },
        {
          id: 4,
          name: '工作會議',
          children: [
            {
              id: 36,
              name: '股東會議',
            },
            {
              id: 37,
              name: '代表會議',
            },
            {
              id: 38,
              name: '產品流程會議',
            },
          ],
        },
        {
          id: 5,
          name: '個人活動',
          children: [
            {
              id: 39,
              name: '專題',
            },
            {
              id: 40,
              name: '狼人殺',
            },
            {
              id: 40,
              name: '通識採訪',
            },
          ],
        },
      ],
    }
  },
  methods: {
    
  },
  setup() {
    const uri = ref('通識課')
    const chose = (row, column, event) =>{
      console.log(row, column, event)
      uri.value = row.name
    }
    const dialogVisible = ref(false)

    return {
      uri,
      chose,
      dialogVisible,
      lover,
      tableData1
    }
  }
})
</script>


<style lang="sass" scoped>
.wrap
  display: flex
  height: 100%
  width: 100%

  .table, .detail
    height: 100%
    margin: 0 0.5rem
  .table
    width: 20%
    height: 80vh
    overflow: auto
  .detail
    width: 80%
    .d-head
      margin-bottom: 0.5rem
      display: flex
      .title
        display: flex
        width: 50%
        align-items: center
      .btn 
        display: flex
        justify-content: flex-end
        width: 50%
:deep(.el-table)
  thead
    background-color: #545c64

</style>
