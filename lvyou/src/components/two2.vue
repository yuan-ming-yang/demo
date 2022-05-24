<template>
	<div class="two2">
		<p><img src="../../static/img/ffmudi/7422d26451b19804b49875b93db176e.png"/></p>
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
		name:"two2",
		data(){
			return{
				aa:"热门目的地",
				sites:[
					{"img":"../../static/img/ffmudi/124c1872254ececcccdb504272b08d7.png"},
					{"img":"../../static/img/ffmudi/dd7c4e02f5c74d97a3edcbbea8de657.png"},
					{"img":"../../static/img/ffmudi/4b73ea0514e408bcdb7729c32fcb6d2.png"},
					{"img":"../../static/img/ffmudi/442895ae32a40bdd8a40165936fe100.png"}
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
.two2{
	width: 100%;
	height: 100%;
}
.two2 p img{
	width: 18rem;
	position: absolute;
	right: 0;
}
.two2 .section10{
	width: 18rem;
	position: absolute;
	top: 5rem;
	right: 0;
	/*border: 1px solid black;*/
}
.two2 .section10 p{
	margin-top: 1rem;
}
.two2 .section10 .section20{
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-bottom: 5rem;
	margin-top: 1rem;
}
.two2 .section10 .section20 li{
	width: 8.5rem;
	height: 6rem;
	/*border: 1px solid black;*/
}
.two2 .section10 .section20 li img{
	width: 8.5rem;
	height: 6rem;
}
</style>