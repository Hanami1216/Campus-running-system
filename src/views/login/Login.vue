<template>
    <el-row>
        <el-col>
            <el-form ref="loginFrom" :model="form" :rules="rules" label-width="100px"  class="login-box">
                <el-form-item >
                    账号：<el-input size="20px"></el-input>
                </el-form-item>
                <el-form-item>
                    密码：<el-input></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button v-on:click="toMain">登录</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>

<script>
export default {
    methods:{
        toMain(){
        this.$router.push('/main')
    }
    }

}
</script>

<style>

</style>