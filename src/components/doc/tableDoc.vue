<template>
  <div class="wrap">
    <el-table
      class="table"
      :header-cell-style="tableHeaderCellStyle"
      :data="tableData"
      row-key="id"
      border
      lazy
      :load="load"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      @row-click="chose"
    >
      <el-table-column  label="分類" >
       <template #default="scope">
         <span>📁 {{scope.row.name}}</span>
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
        :header-cell-style="tableHeaderCellStyle"

        :data="
          tableData1.filter(
            (data) =>
              !search || data.name.toLowerCase().includes(search.toLowerCase())
          )
        "
      >
        <el-table-column label="檔案名稱" prop="name" >
          <template #default="scope">
            <i id="star" style="color:#ffc100;font-size:1.3rem" class="icon-star-full" v-if="scope.row.star" @click="addLove(scope.row)"></i>
            <i id="star" style="font-size:1.3rem" class="icon-star-empty" v-else @click="addLove(scope.row)"></i>
            <span> &ensp;{{scope.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column label="檔案格式" prop="format" />
        <el-table-column label="大小" prop="size" width="120px"/>
        <el-table-column label="日期" prop="date" />
        <el-table-column align="right">
          <template #header>
            <el-input v-model="search" size="mini" placeholder="Type to search" />
          </template>
          <template #default>
            <el-button size="mini"
              type="primary"
              @click="videoVisible = true"
              plain
              >預覽</el-button
            >
            <el-button
              size="mini"
              type="success"
              plain
              >下載</el-button
            >
            <el-popconfirm title="確定刪除嗎?">
              <template #reference>
                <el-button
                  size="mini"
                  type="danger"
                  plain
                  > Delete
                </el-button>
              </template>
            </el-popconfirm>
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

    <el-dialog
      v-model="videoVisible"
      title="預覽"
      width="50%"
      :before-close="handleClose"
    >
      <iframe src="https://drive.google.com/file/d/15gizIvB96F_4xWC1l8ARfWp1YGuzOdJ4/preview" width="640" height="480" allow="autoplay"></iframe>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="videoVisible = false">Close</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script >
import { defineComponent, ref } from 'vue';
import uploader from '@/components/shared/uploader.vue'
import { lover , tableData1, themeTable, baseVar} from '@/var'
export default defineComponent({
  name: 'tableDoc',
  components:{uploader},
  data() {
    return {

      search: '',
      tableData: [
        {
          id: 1,
          name: '通識課',
        },
        {
          id: 2,
          name: '書面資料',
        },
        {
          id: 3,
          name: '資料結構',
          children: [
            {
              id: 31,
              name: '影片',
            },
            {
              id: 32,
              name: '證件',
            },
          ],
        },
        {
          id: 4,
          name: 'PPT',
        },
      ],
    }
  },
  methods: {
    load(row, treeNode, resolve) {
      setTimeout(() => {
        resolve([
          {
            id: 31,
            date: '2016-05-01',
            name: 'wangxiaohu',
          },
          {
            id: 32,
            date: '2016-05-01',
            name: 'wangxiaohu',
          },
        ])
      }, 1000)
    },
  },
  setup() {
    const uri = ref('通識課')
    const chose = (row, column, event) =>{
      console.log(row, column, event)
      uri.value = row.name
    }
    const dialogVisible = ref(false)
    const videoVisible = ref(false)

    const addLove = (item) =>{
      item.star = !item.star
      var obj = item
      obj.parent = uri.value
      if(item.star)
        lover.value.push(obj)
      else{
        const index = lover.value.indexOf(obj);
        if (index > -1) {
          lover.value.splice(index, 1);
        }
      }
    }

    const tableHeaderCellStyle = () =>{
      var str = 'background-color:' + baseVar.value
      var str2 = ';color: #fff'
      return str + str2
    }

    const viewVideo = () =>{

    }

    return {
      uri,
      chose, 
      dialogVisible,
      videoVisible,
      addLove,
      lover,
      tableData1,
      themeTable,
      tableHeaderCellStyle,
      viewVideo
    }
  }
})
</script>


<style lang="sass">
@import '@/assets/stylesheets/shared/_theme.sass'
@import '@/assets/stylesheets/themes/_default.sass'

.wrap
  display: flex
  height: 100%
  width: 100%

  .table, .detail
    height: 100%
    margin: 0 0.5rem
  .table
    height: 70%
    width: 15%
  .detail
    width: 85%
    height: 70%
    #star:hover
      cursor: pointer

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
</style>
