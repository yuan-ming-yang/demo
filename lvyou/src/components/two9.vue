<template>
	<div class="two9">
		<p><img src="../../static/img/ffmudi/fc1d65165358b4140d44d0ef4c1ac21.png"/></p>
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
		name:"two9",
		data(){
			return{
				aa:"热门目的地",
				sites:[
					{"img":"../../static/img/ffmudi/d9d621342c86710ef896c5e2f184f3c.png"},
					{"img":"../../static/img/ffmudi/22e0c84a3c96d92dfd8190223c74a74.png"},
					{"img":"../../static/img/ffmudi/22e0c84a3c96d92dfd8190223c74a74.png"}
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
.two9{
	width: 100%;
	height: 100%;
}
.two9 p img{
	width: 18rem;
	position: absolute;
	right: 0;
}
.two9 .section10{
	width: 18rem;
	position: absolute;
	top: 5rem;
	right: 0;
	/*border: 1px solid black;*/
}
.two9 .section10 p{
	margin-top: 1rem;
}
.two9 .section10 .section20{
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-bottom: 5rem;
	margin-top: 1rem;
}
.two9 .section10 .section20 li{
	width: 8.5rem;
	height: 6rem;
	/*border: 1px solid black;*/
}
.two9 .section10 .section20 li img{
	width: 8.5rem;
	height: 6rem;
}
</style>