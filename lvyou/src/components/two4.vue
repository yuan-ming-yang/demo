<template>
	<div class="two4">
		<p><img src="../../static/img/ffmudi/8bdc305e47ead657b4141919a39614e.png"/></p>
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
		name:"two4",
		data(){
			return{
				aa:"热门目的地",
				sites:[
					{"img":"../../static/img/ffmudi/2df7e11cdb20ebb60c425ec4472b027.png"},
					{"img":"../../static/img/ffmudi/0eb41521a41c80cc99147cc9569078c.png"}
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
.two4{
	width: 100%;
	height: 100%;
}
.two4 p img{
	width: 18rem;
	position: absolute;
	right: 0;
}
.two4 .section10{
	width: 18rem;
	position: absolute;
	top: 5rem;
	right: 0;
	/*border: 1px solid black;*/
}
.two4 .section10 p{
	margin-top: 1rem;
}
.two4 .section10 .section20{
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-bottom: 5rem;
	margin-top: 1rem;
}
.two4 .section10 .section20 li{
	width: 8.5rem;
	height: 6rem;
	/*border: 1px solid black;*/
}
.two4 .section10 .section20 li img{
	width: 8.5rem;
	height: 6rem;
}
</style>