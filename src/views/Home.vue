<template>
    <el-container class="layout-container-demo" style="height: 100%">
      <!-- 侧边栏 -->

      <!-- 页面 -->
      <el-container>
        <el-header>
            <h1 >校园跑腿系统</h1>
        </el-header>
        <!-- 数据 -->
        <el-main>
          <el-scrollbar>
            <el-table :data="oder" border style="width: 100%">
              <el-table-column prop="id" label="id" width="180" />
              <el-table-column prop="content" label="content" width="180" />
              <el-table-column prop="payment_method" label="payment_method" />
              <el-table-column prop="telephone_number" label="telephone_number" width="180" />
              <el-table-column prop="update_time" label="update_time" width="180" />
            </el-table>
          </el-scrollbar>
        </el-main>
        <el-footer>
            
        </el-footer>
      </el-container>
      
    </el-container>
  </template>

  <script>
  export default {
    data(){
        return{
          // oder:{
          //   "content": "订单发布内容",
          //   "id": 1,
          //   "payment_method": 1,
          //   "telephone_number": "18038992335",
          //   "uid": 1,
          //   "update_time": null
          // }
        }
    },
    methods:{

    }
}
</script>

  
  <style scoped>
  .layout-container-demo .el-header {
    position: relative;
    background-color: var(--el-color-primary-light-7);
    color: var(--el-text-color-primary);
  }
  .layout-container-demo .el-footer {
    position: absolute; bottom: 1;
    background-color: var(--el-color-primary-light-7);
    color: var(--el-text-color-primary);
  }
  .layout-container-demo .el-aside {
    color: var(--el-text-color-primary);
    background: var(--el-color-primary-light-8);
    height: 100%;
  }
  .layout-container-demo .el-menu {
    border-right: none;
  }
  .layout-container-demo .el-main {
    padding: 0;
  }
  .layout-container-demo .toolbar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    right: 20px;
  }
  </style>
  