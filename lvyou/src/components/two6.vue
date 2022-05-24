<template>
	<div class="two6">
		<p><img src="../../static/img/ffmudi/a6eeccb7ec86d0937e4288e98aff39d.png"/></p>
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
		name:"two6",
		data(){
			return{
				aa:"热门目的地",
				sites:[
					{"img":"../../static/img/ffmudi/d1f7712f49ba4cb5a251826029876f1.png"},
					{"img":"../../static/img/ffmudi/19534083fb74eae35a6f06173e54ba3.png"},
					{"img":"../../static/img/ffmudi/2cd62557b65e93ea3b1ab7389b8b5df.png"},
					{"img":"../../static/img/ffmudi/75b17316d957a74ce7eed053ce8b91a.png"}
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
.two6{
	width: 100%;
	height: 100%;
}
.two6 p img{
	width: 18rem;
	position: absolute;
	right: 0;
}
.two6 .section10{
	width: 18rem;
	position: absolute;
	top: 5rem;
	right: 0;
	/*border: 1px solid black;*/
}
.two6 .section10 p{
	margin-top: 1rem;
}
.two6 .section10 .section20{
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-bottom: 5rem;
	margin-top: 1rem;
}
.two6 .section10 .section20 li{
	width: 8.5rem;
	height: 6rem;
	/*border: 1px solid black;*/
}
.two6 .section10 .section20 li img{
	width: 8.5rem;
	height: 6rem;
}
</style>