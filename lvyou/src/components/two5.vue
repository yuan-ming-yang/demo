<template>
	<div class="two5">
		<p><img src="../../static/img/ffmudi/492c04cc12de5137a461853bf7985ca.png"/></p>
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
		name:"two5",
		data(){
			return{
				aa:"热门目的地",
				sites:[
					{"img":"../../static/img/ffmudi/12b1cc8050546031dceb1d28d343629.png"},
					{"img":"../../static/img/ffmudi/19534083fb74eae35a6f06173e54ba3.png"},
					{"img":"../../static/img/ffmudi/92f182ea69629beac4c9d7ad37bff3d.png"}
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
.two5{
	width: 100%;
	height: 100%;
}
.two5 p img{
	width: 18rem;
	position: absolute;
	right: 0;
}
.two5 .section10{
	width: 18rem;
	position: absolute;
	top: 5rem;
	right: 0;
	/*border: 1px solid black;*/
}
.two5 .section10 p{
	margin-top: 1rem;
}
.two5 .section10 .section20{
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-bottom: 5rem;
	margin-top: 1rem;
}
.two5 .section10 .section20 li{
	width: 8.5rem;
	height: 6rem;
	/*border: 1px solid black;*/
}
.two5 .section10 .section20 li img{
	width: 8.5rem;
	height: 6rem;
}
</style>