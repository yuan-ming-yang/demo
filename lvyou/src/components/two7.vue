<template>
	<div class="two7">
		<p><img src="../../static/img/ffmudi/55d12f635590f7db78b172e6b550a94.png"/></p>
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
		name:"two7",
		data(){
			return{
				aa:"热门目的地",
				sites:[
					{"img":"../../static/img/ffmudi/5cc38adbad2c5d843ccf862b9182925.png"},
					{"img":"../../static/img/ffmudi/9d11459e846f6168beb51fc977d8dd9.png"},
					{"img":"../../static/img/ffmudi/bdee56924c6bf2aaff992677e9d0084.png"},
					{"img":"../../static/img/ffmudi/29d22e3e343885e61b40ad822ceeeea.png"}
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
.two7{
	width: 100%;
	height: 100%;
}
.two7 p img{
	width: 18rem;
	position: absolute;
	right: 0;
}
.two7 .section10{
	width: 18rem;
	position: absolute;
	top: 5rem;
	right: 0;
	/*border: 1px solid black;*/
}
.two7 .section10 p{
	margin-top: 1rem;
}
.two7 .section10 .section20{
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-bottom: 5rem;
	margin-top: 1rem;
}
.two7 .section10 .section20 li{
	width: 8.5rem;
	height: 6rem;
	/*border: 1px solid black;*/
}
.two7 .section10 .section20 li img{
	width: 8.5rem;
	height: 6rem;
}
</style>