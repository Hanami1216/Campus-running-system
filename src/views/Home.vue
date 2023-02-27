<template>
  <el-container class="layout-container-demo" style="height: 100%">
    <!-- 侧边栏 -->

    <!-- 页面 -->
    <el-container>
      <el-header>
        <h1>校园跑腿系统</h1>
      </el-header>

      <el-menu class="el-menu-demo" mode="horizontal" :ellipsis="false">
        <el-menu-item index="0"> LOGO</el-menu-item>
        <div class="flex-grow" />
        <el-menu-item index="1" @click="quit()"><span>退出</span></el-menu-item>
        <el-menu-item index="1" @click="addOder()"
          ><span>发布订单</span></el-menu-item
        >
      </el-menu>

      <!-- 数据 -->
      <el-main>
        <el-scrollbar>
          <el-table :data="oderList" border style="width: 100%">
            <el-table-column prop="id" type="index" label="id" width="180" />
            <el-table-column prop="content" label="content" height="100" />
            <el-table-column
              prop="payment_method"
              label="支付方式"
              width="70"
            />
            <el-table-column
              prop="telephone_number"
              label="telephone_number"
              width="180"
            />
            <el-table-column
              prop="update_time"
              label="update_time"
              width="180"
            />
            <el-table-column label="state" width="180">
              <template #default="scope">
                <el-icon
                  v-if="scope.row.state"
                  size="30"
                  color="rgb(102, 175, 118)"
                  ><SuccessFilled
                /></el-icon>
                <el-icon v-else size="30" color="red"
                  ><CircleCloseFilled
                /></el-icon>
              </template>
            </el-table-column>
            <el-table-column prop="uid" label="uid" width="180" />
            <el-table-column label="Operations" width="150">
              <template #default="scope">
                <el-button
                  size="large"
                  type="danger"
                  @click="handleReceiving(scope.$index, scope.row)"
                >
                  Receiving
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-scrollbar>
      </el-main>
      <el-footer> </el-footer>
    </el-container>
  </el-container>

  <el-dialog
    v-model="centerDialogVisible"
    title="发布订单"
    width="50%"
    align-center
    :oder="oder"
  >
    <el-form
      :label-position="labelPosition"
      label-width="100px"
      :model="formLabelAlign"
      style="max-width: 460px"
    >
      <el-form-item label="Name">
        <el-input v-model="oder.content" />
      </el-form-item>
      <el-form-item label="Name">
        <el-input v-model="oder.content" />
      </el-form-item>
      <el-form-item label="Name">
        <el-input v-model="oder.content" />
      </el-form-item>
    </el-form>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="centerDialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { getOder, putOder } from "@/api/oderApi";
import jsCookie from "js-cookie";

export default {
  // ...

  data() {
    return {
      centerDialogVisible: false,
      oderList: [
        {
          content: "订单发布内容",
          id: 1,
          payment_method: 1,
          telephone_number: "18038992335",
          uid: 1,
          update_time: "123",
        },
      ],
      oder: {
        content: "订单发布内容",
        id: 1,
        payment_method: 1,
        telephone_number: "18038992335",
        uid: 1,
        update_time: "123",
      },
    };
  },
  methods: {
    getData() {
      getOder().then((response) => {
        this.oderList = response.data.data;
      });
    },
    handleReceiving(index, row) {
      if (row.state == true) {
        this.$message.error("订单已经成功完成，不能再继续接单");
      } else {
        row.update_time = new Date()
          .toISOString()
          .slice(0, 19)
          .replace("T", " ");
        row.uid = jsCookie.get("uid");
        row.state = true;
        putOder(row).then((response) => {
          if (response.data.data == true) {
            this.$message.success("接受订单成功");
            getOder();
          }
        });
      }
    },
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
    addOder() {
      this.centerDialogVisible = true;
    },
  },
  created() {
    // 执行获取数据函数
    this.getData();
  },
};
</script>

<style scoped>
.flex-grow {
  flex-grow: 1;
}

.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
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
