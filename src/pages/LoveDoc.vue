<template >
<div class="wrap">
  <el-table
    class="table"
    :data="
      lover.filter(
        (data) =>
          !search || data.name.toLowerCase().includes(search.toLowerCase())
      )
    "
    :header-cell-style="{ background: '#0b2f45ea', color: '#fff' }"
  >
    <el-table-column label="檔案名稱" prop="name" />
    <el-table-column label="檔案格式" prop="format" />
    <el-table-column label="來源" prop="parent" width="120px"/>
    <el-table-column label="大小" prop="size" width="120px"/>
    <el-table-column label="日期" prop="date" />
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
        <el-popconfirm title="Are you sure to delete this?">
          <template #reference>
            <el-button
              size="mini"
              type="danger"
              plain
              @click="handleDelete(scope.$index, scope.row)"> Delete
            </el-button>
          </template>
        </el-popconfirm>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
import { defineComponent } from 'vue';
import { lover } from '@/var'
export default defineComponent({
  name: 'LoveDoc',
  components:{
  },
  setup() {
    return {
      lover
    }
  }
})
</script>

<style lang="sass" scoped>
#LoveDoc
  height: 100%
:deep(.el-tabs)
  height: 100%
  .el-tabs__content, .el-tab-pane
    height: 100%
.wrap
  display: flex
  width: 100%
  height: 100%
  justify-content: center
  .table
    width: 97%
    margin: 1rem 0
</style>

