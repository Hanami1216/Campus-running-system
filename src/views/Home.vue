<template>
    <el-container class="layout-container-demo" style="height: 100%">
      <!-- 侧边栏 -->
      <el-aside width="200px">

        <el-scrollbar>
          <!-- 菜单 -->
          <el-menu>
            
            <!-- 菜单  -->
            <el-sub-menu index="1">
              <!--菜单标题 -->
              <template #title>
                <el-icon><setting /></el-icon>用户
              </template>
              <!-- 子菜单 -->
              <el-menu-item-group>
                <template #title>查询功能</template>
                <el-menu-item index="1-1">查询所有</el-menu-item>
                <el-menu-item index="1-2">查询</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>

          </el-menu>
        </el-scrollbar>
      </el-aside>

      <!-- 页面 -->
      <el-container>
        <el-header>
            
        </el-header>
        <!-- 数据 -->
        <el-main>
          <el-scrollbar>
            <el-button>123</el-button>
          </el-scrollbar>
        </el-main>
      </el-container>
      
    </el-container>
  </template>
  





  
  <style scoped>
  .layout-container-demo .el-header {
    position: relative;
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
  