<template>
	<div class="two">
		<div class="section1">
			<input type="text" name="" placeholder="目的地/关键词" id="" value="" />
			<img src="../../static/img/放大镜.png"/>
		</div>
		<div class="section2">
			<router-view></router-view>
			<ul>
				<li><router-link to="/two/two1">主题游</router-link></li>
				<li><router-link to="/two/two2">欧洲</router-link></li>
				<li><router-link to="/two/two3">北美</router-link></li>
				<li><router-link to="/two/two4">极地</router-link></li>
				<li><router-link to="/two/two5">日本</router-link></li>
				<li><router-link to="/two/two6">东南亚</router-link></li>
				<li><router-link to="/two/two7">大洋洲</router-link></li>
				<li><router-link to="/two/two8">亚洲</router-link></li>
				<li><router-link to="/two/two9">南美</router-link></li>
				<li><router-link to="/two/two10">非洲</router-link></li>
				<li><router-link to="/two/two11">国内</router-link></li>
			</ul>
			
		</div>
	</div>
</template>

<script>
	export default{
		name:"two",
//		data(){
//			return{
//				
//			}
//		}
	}
</script>

<style>
*{
	margin: 0;
	padding: 0;
}
.two .section1{
	width: 100%;
	height: 4rem;
	/*border: 1px solid black;*/
	line-height: 4rem;
	position: fixed;
	z-index: 2;
}
.two .section1 input{
	width: 70%;
	height: 2.5rem;
	margin-left: 1rem;
	padding-left: 5rem;
	font-size: 1.5rem;
}
.two .section1 img{
	height: 2.5rem;
	position: absolute;
	top: 0.7rem;
	left: 1.5rem;
}
.two .section2{
	width: 100%;
	position: fixed;
	left: 0;
	top: 4rem;
	z-index: 4;
}
.two .section2 ul li{
	width: 5rem;
	height: 2.5rem;
	border-bottom: 1px solid black;
	line-height: 2.5rem;
	background-color: whitesmoke;
	text-align: center;
}
</style>