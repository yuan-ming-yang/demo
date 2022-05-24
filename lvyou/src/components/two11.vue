<template>
	<div class="two11">
		<p><img src="../../static/img/ffmudi/4b2f2c259cd600ea0af72feafadab43.png"/></p>
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
		name:"two11",
		data(){
			return{
				aa:"热门目的地",
				sites:[
					{"img":"../../static/img/ffmudi/de8e3528abbbf2c5802a2f658e7f9a8.png"},
					{"img":"../../static/img/ffmudi/90fb15ec5d1252fd458cdc088f596fe.png"}
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
.two11{
	width: 100%;
	height: 100%;
}
.two11 p img{
	width: 18rem;
	position: absolute;
	right: 0;
}
.two11 .section10{
	width: 18rem;
	position: absolute;
	top: 5rem;
	right: 0;
	/*border: 1px solid black;*/
}
.two11 .section10 p{
	margin-top: 1rem;
}
.two11 .section10 .section20{
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-bottom: 5rem;
	margin-top: 1rem;
}
.two11 .section10 .section20 li{
	width: 8.5rem;
	height: 6rem;
	/*border: 1px solid black;*/
}
.two11 .section10 .section20 li img{
	width: 8.5rem;
	height: 6rem;
}
</style>