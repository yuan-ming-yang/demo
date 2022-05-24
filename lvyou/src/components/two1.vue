<template>
	<div class="two1">
		<div class="section10">
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
		name:"two1",
		data(){
			return{
				sites:[
					{"img":"../../static/img/ffmudi/801e9f3c30f565f8b90d1a8a251d791.png"},
					{"img":"../../static/img/ffmudi/7765b3b7d461f6586dbe6aa538c5598.png"},
					{"img":"../../static/img/ffmudi/2705e6d5480a42dbe8517eee3af975e.png"},
					{"img":"../../static/img/ffmudi/71ab77581f7fa776ccb3e2c82155dd5.png"},
					{"img":"../../static/img/ffmudi/5f55c20c7f9aa983e8f27973e5a239e.png"},
					{"img":"../../static/img/ffmudi/1be4b9de305aaa78b0d2454d19b163d.png"},
					{"img":"../../static/img/ffmudi/b0459d8f482aa1c2440acfd3ec56aa9.png"},
					{"img":"../../static/img/ffmudi/f1bedd12b213dd4ec638f56e367b431.png"},
					{"img":"../../static/img/ffmudi/20fb5b9f1637716b2f160daf0b85169.png"},
					{"img":"../../static/img/ffmudi/2c38dd9c69664b7a9ca8c09eec9913a.png"}
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
.two1{
	width: 100%;
	height: 100%;
}
.two1 .section10{
	width: 18rem;
	position: absolute;
	right: 0;
	/*border: 1px solid black;*/
}
.two1 .section10 .section20{
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-bottom: 5rem;
}
.two1 .section10 .section20 li{
	width: 8.5rem;
	height: 6rem;
	/*border: 1px solid black;*/
}
.two1 .section10 .section20 li img{
	width: 8.5rem;
	height: 6rem;
}
</style>