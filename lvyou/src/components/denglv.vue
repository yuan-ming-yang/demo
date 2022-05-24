<template>
	<div class="denglv">
		<p><router-link to="/four">{{aa}}</router-link></p>
		 <el-tabs v-model="activeName" @tab-click="handleClick">
		    <el-tab-pane label="密码登录" name="first">用户管理</el-tab-pane>
		    <el-tab-pane label="动态验证码登录" name="second">配置管理</el-tab-pane>
		 </el-tabs>
	</div>
</template>

<script>
	
	export default{
		name:"denglv",
		data(){
			return{
				aa:"取消",
				 activeName: 'first'
			}
		},
		 methods: {
	      handleClick(tab, event) {
	        console.log(tab, event);
	      }
	    }
	}
</script>

<style>
</style>