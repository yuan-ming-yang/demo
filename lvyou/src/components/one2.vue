<template>
	<div class="one2">
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
		name:"one2",
		data(){
			return{
				sites:[
					{"img":"../../static/img/shouye/a9c8608ce278cc531c379774d7163ab.png",
					"title1":"[北京出发]凯撒亲子营-北京科举匾额博物馆探秘之旅1日游",
					"title2":"亲子",
					"title3":"世界遗迹",
					"title4":"艺术"},
					{"img":"../../static/img/shouye/a7bcb06b8c8f0cef5f7323b263b2f4a.png",
					"title1":"[北京出发]奇趣呀路古-北京呀路古热带植物园奇幻之旅1日游",
					"title2":"凯撒自营",
					"title3":"体验季",
					"title4":"亲子"}
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
	.one2 ul{
		width: 100%;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	.one2 ul li{
		width: 11rem;
		height: 14rem;
		/*border: 1px solid black;*/
		background-color: whitesmoke;
	}
	.one2 ul li img{
		width: 11rem;
	}
	.one2 ul li div{
		display: flex;
		justify-content: space-around;
	}
	.one2 ul li div span{
		display: inline-block;
		margin-top: 0.5rem;
	}
</style>