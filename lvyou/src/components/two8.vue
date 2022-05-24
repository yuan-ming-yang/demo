<template>
	<div class="two8">
		<p><img src="../../static/img/ffmudi/6b90d54c2e017107ca6ca13eb06929e.png"/></p>
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
		name:"two8",
		data(){
			return{
				aa:"热门目的地",
				sites:[
					{"img":"../../static/img/ffmudi/170b5e4b4ea620bd9b1993a0753543e.png"},
					{"img":"../../static/img/ffmudi/dec3a4df73900b7c3b4281ed7694402.png"},
					{"img":"../../static/img/ffmudi/57c0e4c48f1ee03ef3cd4a42bd50662.png"},
					{"img":"../../static/img/ffmudi/a1cd25f226026af1a893f42d6fa4fee.png"}
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
.two8{
	width: 100%;
	height: 100%;
}
.two8 p img{
	width: 18rem;
	position: absolute;
	right: 0;
}
.two8 .section10{
	width: 18rem;
	position: absolute;
	top: 5rem;
	right: 0;
	/*border: 1px solid black;*/
}
.two8 .section10 p{
	margin-top: 1rem;
}
.two8 .section10 .section20{
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-bottom: 5rem;
	margin-top: 1rem;
}
.two8 .section10 .section20 li{
	width: 8.5rem;
	height: 6rem;
	/*border: 1px solid black;*/
}
.two8 .section10 .section20 li img{
	width: 8.5rem;
	height: 6rem;
}
</style>