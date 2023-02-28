<template>
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
          <el-radio :label="0">微信支付</el-radio>
          <el-radio :label="1">支付宝</el-radio>
          <el-radio :label="2">其他</el-radio>
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
import { postOder } from "@/api/oderApi";
export default {
  props: [],
  data() {
    return {
      centerDialogVisible: false,
      labelPosition: "top",
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
    addOder() {
      this.centerDialogVisible = false;
      postOder(this.oder).then((response) => {
        console.log(this.oder);
        if (response.data.data) {
          this.$message.success("添加成功");
        } else this.$message.error("添加失败");
      });
    },
    show() {
      this.centerDialogVisible === true;
    },
  },
  created() {},
};
</script>
