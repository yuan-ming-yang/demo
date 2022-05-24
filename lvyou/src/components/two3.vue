<template>
	<div class="two3">
		<p><img src="../../static/img/ffmudi/f03170899411bda00ecfb4bb8f09d70.png"/></p>
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
		name:"two3",
		data(){
			return{
				aa:"热门目的地",
				sites:[
					{"img":"../../static/img/ffmudi/03aee04bbecfa1e0bed0561cdfd4b44.png"},
					{"img":"../../static/img/ffmudi/854fdfea7d2daca0bdad2e3423ae021.png"}
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
.two3{
	width: 100%;
	height: 100%;
}
.two3 p img{
	width: 18rem;
	position: absolute;
	right: 0;
}
.two3 .section10{
	width: 18rem;
	position: absolute;
	top: 5rem;
	right: 0;
	/*border: 1px solid black;*/
}
.two3 .section10 p{
	margin-top: 1rem;
}
.two3 .section10 .section20{
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-bottom: 5rem;
	margin-top: 1rem;
}
.two3 .section10 .section20 li{
	width: 8.5rem;
	height: 6rem;
	/*border: 1px solid black;*/
}
.two3 .section10 .section20 li img{
	width: 8.5rem;
	height: 6rem;
}
</style>