<template>
  <el-dialog
    v-model="centerDialogVisible"
    title="用户信息修改"
    width="30%"
    align-center
  >
    <el-form
      :label-position="labelPosition"
      label-width="100px"
      :model="user"
      style="max-width: 460px"
    >
      <el-form-item label="姓名">
        <el-input v-model="user.name" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="user.password" />
      </el-form-item>
      <el-form-item label="性别">
        <el-input v-model="user.sex" />
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="user.age" />
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="user.address" />
      </el-form-item>
      <el-form-item label="注册用户级别">
        <el-radio-group v-model="user.power">
          <el-radio :label="0">管理员</el-radio>
          <el-radio :label="1">普通用户</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>

    <template #footer>
      <el-divider/>
      <span class="dialog-footer">
        <el-button size="large" @click="update()">确认</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">
          取消
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { putUser } from "@/api/userApi";
export default {
  props: [],
  data() {
    return {
      centerDialogVisible: false,
      labelPosition: "top",
      user: {
        address: "吉林省怒江傈僳族自治州中西区",
        age: 1,
        id: 2,
        name: "太向干土活北",
        password: "1234",
        power: 0,
        sex: "男",
        state: 0,
      },
    };
  },
  methods: {
    update() {
      this.centerDialogVisible = false;
      putUser(this.user).then((response) => {
        console.log(this.user);
        if (response.data.data) {
          this.$message.success("修改成功");
        } else this.$message.error("修改失败");
      });
    },
    show() {
      this.centerDialogVisible === true;
    },
  },
};
</script>
