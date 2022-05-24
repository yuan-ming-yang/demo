<template>
	<div class="one3">
		<ul>
			<li v-for="yang in sites">
				<img :src="yang.img"/>
				<h3>{{yang.title1}}</h3>
				<div>
					<span>{{yang.title2}}</span>
					<span>{{yang.title3}}</span>
					<span>{{yang.title4}}</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"one3",
		data(){
			return{
				sites:[
					{"img":"../../static/img/shouye/3402887c7bb5d85bd4bafb04c14ed29.png",
					"title1":"[北京出发]凯撒亲子营-北京科举匾额博物馆探秘之旅1日游",
					"title2":"亲子",
					"title3":"观光",
					"title4":"私人订制"},
					{"img":"../../static/img/shouye/fa63e4f39451af03661113bd8d4d9b4.png",
					"title1":"[北京出发]奇趣呀路古-北京呀路古热带植物园奇幻之旅1日游",
					"title2":"凯撒自营",
					"title3":"美食",
					"title4":"观光"}
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
	.one3 ul{
		width: 100%;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	.one3 ul li{
		width: 11rem;
		height: 14rem;
		/*border: 1px solid black;*/
		background-color: whitesmoke;
	}
	.one3 ul li img{
		width: 11rem;
	}
	.one3 ul li div{
		display: flex;
		justify-content: space-around;
	}
	.one3 ul li div span{
		display: inline-block;
		margin-top: 0.5rem;
	}
</style>