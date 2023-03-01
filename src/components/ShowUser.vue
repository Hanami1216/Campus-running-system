<template>
  <el-table :data="userList" border style="width: 100%">
    <el-table-column prop="id-index" type="index" label="id" width="180" />
    <el-table-column prop="id" label="用户id" height="100" />
    <el-table-column prop="name" label="姓名" height="100" />
    <el-table-column prop="sex" label="性别" height="100" />
    <el-table-column prop="age" label="年龄" height="100" />
    <el-table-column prop="password" label="密码" height="100" />
    <el-table-column prop="address" label="地址" height="100" />
    <el-table-column label="管理" width="150">
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

import { getUser,putUser,postUser,deleteUser} from '@/api/userApi';

export default {
  // ...
  data() {
    return {
      userList: [
      {
        address: "吉林省怒江傈僳族自治州中西区",
        age: 1,
        id: 2,
        name: "太向干土活北",
        password: "1234",
        power: 0,
        sex: "男",
      },
      ],
    };
  },
  methods: {
    getData() {
      getUser().then((response) => {
        this.userList = response.data.data;
      });
    },
  },
  created() {
    // 执行获取数据函数
    this.getData();
  },
};
</script>
