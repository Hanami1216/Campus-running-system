<template>
  <el-table :data="oderList" border style="width: 100%">
    <el-table-column prop="id" type="index" label="id" width="180" />
    <el-table-column prop="content" label="content" height="100" />
    <el-table-column prop="payment_method" label="支付方式" width="70">
      <template #default="scope">
        <el-image
          v-if="scope.row.payment_method === 0"
          :src="require('@/img/vx.png')"
        />
        <el-image
          v-else-if="scope.row.payment_method === 1"
          :src="require('@/img/zfb.png')"
        />
        <el-image v-else :src="require('@/img/other.png')" />
      </template>
    </el-table-column>
    <el-table-column
      prop="telephone_number"
      label="telephone_number"
      width="180"
    />
    <el-table-column prop="update_time" label="update_time" width="180" />
    <el-table-column label="state" width="180">
      <template #default="scope">
        <el-icon v-if="scope.row.state" size="30" color="rgb(102, 175, 118)"
          ><SuccessFilled
        /></el-icon>
        <el-icon v-else size="30" color="red"><CircleCloseFilled /></el-icon>
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
</template>

<script>
import { getOder, putOder, postOder } from "@/api/oderApi";
import jsCookie from "js-cookie";

export default {
  // ...
  data() {
    return {
      oderList: [
        {
          content: "订单发布内容",
          id: 1,
          payment_method: 1,
          telephone_number: "18038992335",
          uid: 1,
          update_time: "2023-02-25 06:46:19",
        },
      ]
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
          }else this.$message.error("接受订单失败");
        });
      }
    },
  },
  created() {
    // 执行获取数据函数
    this.getData();
  },
};
</script>
