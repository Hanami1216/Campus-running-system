<template>
  <el-table :data="userList" border style="width: 100%">
    <el-table-column prop="id-index" type="index" label="id" />
    <el-table-column prop="id" label="用户id"  />
    <el-table-column prop="name" label="姓名"  />
    <el-table-column prop="sex" label="性别"  />
    <el-table-column prop="age" label="年龄"  />
    <el-table-column prop="password" label="密码"  />
    <el-table-column prop="address" label="地址" />
    <el-table-column label="管理" width="350">
      <template #default="scope">
        <el-button
          size="large"
          @click="handleReceiving(scope.$index, scope.row)"
        >
          修改用户
        </el-button>
        <el-button
          size="large"
          type="danger"
          @click="del(scope.row.id)"
        >
          删除用户
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
    del(id){
      deleteUser(id).then(response=>{
        if(response.data.data){
          this.$message.success('删除用户成功')
          this.getData()
        }else this.$message.error('删除用户失败')
      })
    }
  },
  del(row){
    console.log(row);
  },
  created() {
    // 执行获取数据函数
    this.getData();
  }

};
</script>
