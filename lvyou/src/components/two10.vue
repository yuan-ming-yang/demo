<template>
	<div class="two10">
		<p><img src="../../static/img/ffmudi/aedb203a0f5337dc3ed09f5c5e3999f.png"/></p>
		<div class="section10">
			<p>{{aa}}</p>
			<ul class="section20">
				<li v-for="yang in sites">
					<img :src="yang.img"/>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		name:"two10",
		data(){
			return{
				aa:"热门目的地",
				sites:[
					{"img":"../../static/img/ffmudi/d9d621342c86710ef896c5e2f184f3c.png"},
					{"img":"../../static/img/ffmudi/5490829ee8cca50e4815caa89bf257c.png"},
					{"img":"../../static/img/ffmudi/ed452b16478fb30558b0d6100e1e4bc.png"},
					{"img":"../../static/img/ffmudi/ba00154e92bce42acd3eef0a7604757.png"}
				]
			}
		}
	}
</script>

<style scoped="scoped">
*{
	margin: 0;
	padding: 0;
}
.two10{
	width: 100%;
	height: 100%;
}
.two10 p img{
	width: 18rem;
	position: absolute;
	right: 0;
}
.two10 .section10{
	width: 18rem;
	position: absolute;
	top: 5rem;
	right: 0;
	/*border: 1px solid black;*/
}
.two10 .section10 p{
	margin-top: 1rem;
}
.two10 .section10 .section20{
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-bottom: 5rem;
	margin-top: 1rem;
}
.two10 .section10 .section20 li{
	width: 8.5rem;
	height: 6rem;
	/*border: 1px solid black;*/
}
.two10 .section10 .section20 li img{
	width: 8.5rem;
	height: 6rem;
}
</style>