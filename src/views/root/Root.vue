<template>
  <el-container class="layout-container-demo" style="height: 100%">
    <!-- 侧边栏 -->

    <!-- 页面 -->
    <el-container>
      <el-header>
        <Title title="这是一个标题" :font-size="50" />
      </el-header>

      <el-menu class="el-menu-demo" mode="horizontal" :ellipsis="false">
        <el-menu-item index="0"> LOGO</el-menu-item>
        <div class="flex-grow" />
        <el-menu-item index="1" @click="centerDialogVisible=true"
          ><span>发布订单</span></el-menu-item>
        <el-menu-item index="2" @click="quit()"><span>退出</span></el-menu-item>
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
            >
            <template #default="scope">
              <el-image v-if="scope.row.payment_method===0" :src="require('@/img/vx.png')"/>
              <el-image v-else-if="scope.row.payment_method===1" :src="require('@/img/zfb.png')"/>
              <el-image v-else :src="require('@/img/other.png')"/>

            </template>
            </el-table-column>
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
    width="30%"
    align-center
    :oder="oder"
  >
    <el-form
      :label-position="labelPosition"
      label-width="100px"
      :model="oder"
      style="max-width: 460px"
    >
      <el-form-item label="订单内容">
        <el-input v-model="oder.content" />
      </el-form-item>
      <el-form-item label="订单时间">
        <el-date-picker
        v-model="oder.update_time"
        type="datetime"
        placeholder="选择一个时间"
        format="YYYY/MM/DD hh:mm:ss"
        value-format="YYYY-MM-DDTHH:mm:ss.sssZ"
      />
      </el-form-item>
      <el-form-item label="支付方式">
        <el-radio-group v-model="oder.payment_method">
          <el-radio :label=0>微信支付</el-radio>
          <el-radio :label=1>支付宝</el-radio>
          <el-radio :label=2>其他</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="电话号码">
        <el-input v-model="oder.telephone_number" />
      </el-form-item>
    </el-form>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="addOder()">确认订单</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">
          取消
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { getOder, putOder,postOder } from "@/api/oderApi";
import jsCookie from "js-cookie";
import { Title } from "@/components/Title.vue";

export default {
  // ...

  components:{
    Title
  },
  data() {
    return {
      labelPosition:'top',
      centerDialogVisible: false,
      oderList: [
        {
          content: "订单发布内容",
          id: 1,
          payment_method: 1,
          telephone_number: "18038992335",
          uid: 1,
          update_time: "2023-02-25 06:46:19",
        },
      ],
      oder: {
        content: "订单发布内容",
        id: 1,
        payment_method: 1,
        telephone_number: "18038992335",
        uid: 1,
        update_time: "2023-02-25 06:46:19",
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
      this.centerDialogVisible = false;
      postOder(this.oder).then(response=>{
        console.log(this.oder);
        if(response.data.data){
          this.$message.success('添加成功')
          this.getData()
        }else this.$message.error('添加失败')
      })
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
