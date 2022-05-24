<template>
	<div class="one4">
		<ul>
			<li v-for="yang in sites">
				<img :src="yang.img"/>
				<h3>{{yang.title1}}</h3>
				<div>
					<span>{{yang.title2}}</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"one4",
		data(){
			return{
				sites:[
					{"img":"../../static/img/shouye/a7bcb06b8c8f0cef5f7323b263b2f4a.png","title1":"[北京出发]凯撒亲子营-北京科举匾额博物馆探秘之旅1日游","title2":"国内周边游"}
				]
			}
		}
	}
</script>

<style>
*{
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.one4 ul{
		width: 100%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.one4 ul li{
		width: 11rem;
		height: 14rem;
		/*border: 1px solid black;*/
		background-color: whitesmoke;
	}
	.one4 ul li img{
		width: 11rem;
	}
	.one4 ul li div{
		display: flex;
		justify-content: space-around;
	}
	.one4 ul li div span{
		display: inline-block;
		margin-top: 0.5rem;
	}
</style>