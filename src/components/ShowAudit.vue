<template>
  <el-table :data="auditList" border stripe :header-cell-style="{'text-align':'center'}">
    <el-table-column prop="id-index" type="index" label="id" width="180" />
    <el-table-column prop="id" label="用户id" height="100" />
    <el-table-column prop="name" label="姓名" height="100" />
    <el-table-column prop="sex" label="性别" height="100" />
    <el-table-column prop="age" label="年龄" height="100" />
    <el-table-column prop="password" label="密码" height="100" />
    <el-table-column prop="address" label="地址" height="100" />
    <el-table-column label="审核状态" width="180">
      <template #default="scope">
        <el-icon v-if="scope.row.state" size="30" color="rgb(102, 175, 118)"
          ><SuccessFilled
        /></el-icon>
        <el-icon v-else size="30" color="red"><CircleCloseFilled /></el-icon>
      </template>
    </el-table-column>

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

import { getAudit,putAudit } from '@/api/auditApi';

export default {
  // ...
  data() {
    return {
      auditList: [
      {
        address: "吉林省怒江傈僳族自治州中西区",
        age: 1,
        id: 2,
        name: "太向干土活北",
        password: "1234",
        power: 0,
        sex: "男",
        state: false,
      },
      ],
    };
  },
  methods: {
    getData() {
      getAudit().then((response) => {
        this.auditList = response.data.data;
      });
    },
    handleReceiving(index, row) {
      if (row.state == true) {
        this.$message.error("用户已经成功完成审核");
      } else {
        row.state = true;
        putAudit(row).then((response) => {
          if (response.data.data == true) {
            this.$message.success("审核成功");
          } else this.$message.error("审核失败");
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
