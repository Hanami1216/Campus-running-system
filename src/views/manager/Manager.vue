<template>
  <el-container class="layout-container-demo" style="height: 100%">
    <!-- 侧边栏 -->
    <!-- 页面 -->
    <el-container>
      <el-header height="100px">
        <h1
          style="
            text-align: center;
            width: 100%;
            font-size: 40px;
            color: #fff;
            text-stroke: 1px #000;
            top: 0px;
          "
        >
          管理员界面
        </h1>
      </el-header>
      <!-- 分割线 -->
      <el-divider />
      <el-menu class="el-menu-demo" mode="horizontal" :ellipsis="false">
        <el-menu-item index="0"> LOGO</el-menu-item>
        <div class="flex-grow" />
        <el-menu-item
          @click="this.functionSelect=3"
          style="font-size: larger; font-weight: bolder"
          ><span>用户管理</span></el-menu-item
        >
        <el-menu-item
          @click="this.functionSelect=2"
          style="font-size: larger; font-weight: bolder"
          ><span>审批用户注册</span></el-menu-item
        >
        <el-menu-item
          @click="this.functionSelect=1"
          style="font-size: larger; font-weight: bolder"
          ><span>查看订单</span></el-menu-item
        >
        <el-menu-item index="1" @click="add()"><span style="font-size: larger; font-weight: bolder"
            >发布订单</span
          ></el-menu-item>
        <el-menu-item
          @click="quit()"
          style="font-size: larger; font-weight: bolder"
          ><span>退出</span></el-menu-item
        >

      </el-menu>
      <el-divider />
      <!-- 数据 -->
      <el-main>
        <el-scrollbar>
          <ShowOder v-if="functionSelect===1"/>
          <ShowAudit v-else-if="functionSelect===2"/>
          <ShowUser v-else-if="functionSelect===3"/>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
  <AddOder ref="add" />
</template>

<script>
import ShowAudit from "@/components/ShowAudit.vue";
import ShowOder from "@/components/ShowOder.vue";
import AddOder from "@/components/AddOder.vue";
import ShowUser from "@/components/ShowUser.vue";
export default {
  // ...
  data() {
    return {
      centerDialogVisible: false,
      functionSelect:1
    };
  },
  methods: {
    quit() {
      this.$message.success("成功退出");
      // 获取所有的cookie名称
      var cookies = document.cookie.split(";");

      // 遍历所有cookie名称并删除
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
      }
      this.$router.push("/");
    },
    add() {
      this.$refs.add.centerDialogVisible = true;
    },
  },

  created() {},
  components: {
    ShowOder,
    AddOder,
    ShowAudit,
    ShowUser,
  },
};
</script>

<style scoped>
@font-face {
  font-family: "Title";
  src: url("../YouSheBiaoTiHei-2.ttf") format("woff2");
}

h1 {
  font-family: "Title", sans-serif;
}
.flex-grow {
  flex-grow: 1;
}

.layout-container-demo .el-header {
  position: relative;
  background-color: #fff;
}
.layout-container-demo .el-footer {
  position: absolute;
  bottom: 1;
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
  border-radius: 20px 20px 20px 20px / 25px 25px 25px 25px;
  border: solid 1px #000000;
  outline: solid 2px #000000;
  padding-top: 0%;
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
