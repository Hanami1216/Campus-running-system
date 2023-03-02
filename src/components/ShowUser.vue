<template>
  <el-table :data="userList" border  stripe  :header-cell-style="{'text-align':'center'}" style="width: 100%">
    <el-table-column prop="id-index" type="index" label="id" />
    <el-table-column prop="id" label="用户id"  width="100"/>
    <el-table-column prop="name" label="姓名" width='100' />
    <el-table-column prop="sex" label="性别" width="50" />
    <el-table-column prop="age" label="年龄"  width="50"/>
    <el-table-column prop="power" label="权限" width="50">
      <template #default="scope">
        <el-icon v-if="scope.row.power===1" size="large"><UserFilled /></el-icon>
        <el-icon v-else-if="scope.row.power===0" size="large"><User /></el-icon>
      </template>
    </el-table-column>
    <el-table-column prop="password" label="密码"  width="300"/>
    <el-table-column prop="address" label="地址" />
    <el-table-column label="管理" width="280">
      <template #default="scope">
        <el-button
          size="large"
          type="primary"
          @click="update(scope.row)"
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
  <UpdateUserFrom ref="up"/>
</template>

<script>
import { getUser,deleteUser} from '@/api/userApi';
import UpdateUserFrom from './UpdateUserFrom.vue';
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
    update(row){
      this.$refs.up.user =row;
      console.log(row);
      this.$refs.up.centerDialogVisible =true;
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
  created() {
    // 执行获取数据函数
    this.getData();
  },
  components:{
    UpdateUserFrom
  }

};
</script>
