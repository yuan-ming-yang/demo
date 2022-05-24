<template>
	<div class="four">
		<div class="section1">
			<button><router-link to="/denglv">登录/注册</router-link></button>
			<div>
				<img src="../../static/img/geren/08bcb67c6e24f68ecaa70242f3c6bc4.png"/>
				<img src="../../static/img/geren/cadf94410ff8590a2a6450adda4b4b8.png"/>
			</div>
		</div>
		<div class="section2">
			<h3>我的订单</h3>
			<ul>
				<li v-for="yang in sites">
					<img :src="yang.img"/>
					<p>{{yang.title}}</p>
				</li>
			</ul>
		</div>
		<div class="section3">
			<h2>我的权益</h2>
			<span>></span>
		</div>
		<div class="section4">
			<h2>我的管家</h2>
			<ul>
				<li v-for="yang in site">
					<img :src="yang.img"/>
					<p>{{yang.title}}</p>
				</li>
			</ul>
		</div>
		<div class="section5"> 
			<h1>-当季热门推荐-</h1>
			<ul>
			<li v-for="yang in arr">
				<img :src="yang.img"/>
				<h3>{{yang.title}}</h3>
				<div>
					<span>{{yang.title1}}</span>
					<span>{{yang.title2}}</span>
				</div>
			</li>
		</ul>
		</div>
	</div>
</template>

<script>
	export default{
		name:"four",
		data(){
			return{
				sites:[
					{"img":"../../static/img/geren/573a1c03db1b0fcaf2f43b4ab29d45e.png","title":"参团订购"},
					{"img":"../../static/img/geren/9f29623e4d198252ee10e951c09ad2c.png","title":"度假订单"},
					{"img":"../../static/img/geren/3b10887741304137adc8c089ba68e31.png","title":"邮轮订单"},
					{"img":"../../static/img/geren/f81cc174f8528aed1df1a6c5af03606.png","title":"酒店订单"},
					{"img":"../../static/img/geren/9f5ed44cf0bd8a6139eb10fd851d59f.png","title":"签证订单"},
					{"img":"../../static/img/geren/5c6b3b8ea367c42cebe11c6474e1725.png","title":"定制订单"},
					{"img":"../../static/img/geren/0ded1a8453cc38edc7015344c1e17c0.png","title":"机票订单"},
					{"img":"../../static/img/geren/06332c4bcd92ddae875cadc9bd565b1.png","title":"其他订单"}
				],
				site:[
					{"img":"../../static/img/geren/1387a77590d95cd43df69c35cd4f291.png","title":"旅游顾问"},
					{"img":"../../static/img/geren/5aa5237fbb3c5232abc44bad14f5a70.png","title":"直营门店"},
					{"img":"../../static/img/geren/12da570da7ece9150489eaa2de03da9.png","title":"玩乐订购"},
					{"img":"../../static/img/geren/1135770546248779df3e8018e46dc30.png","title":"我的保单"},
					{"img":"../../static/img/geren/f4c19192d1ba049b4d0c45f7ae448d3.png","title":"积分商城"},
					{"img":"../../static/img/geren/19c3f8025c2128aa4a58dee726426db.png","title":"常用信息"},
					{"img":"../../static/img/geren/06558688c464cff62ed7ba8dd4664f7.png","title":"点评行程"},
					{"img":"../../static/img/geren/ed5964f71bc3b08ea4a58ee3a46ce16.png","title":"我的点评"},
					{"img":"../../static/img/geren/5a84c63c6e3afaa6a090e5ad0c6dad9.png","title":"我的收藏"},
					{"img":"../../static/img/geren/9257e04396f533fa00e3276e07f8be8.png","title":"出行记录"},
					{"img":"../../static/img/geren/fc3a1f67c4fb818d1e3cda1c5934307.png","title":"旅行记念册"},
					{"img":"../../static/img/geren/f44732330194dc2a2b54ef84361e8b2.png","title":"电子退税卡"},
					{"img":"../../static/img/geren/193e19f44b50ecbce8f3eddaf607df6.png","title":"礼品卡查询"}
				],
				arr:[
					{"img":"../../static/img/geren/4052356743b916ab1d9696c97547b28.png",
					"title":"奇趣呀路古-北京呀路古热带植物园奇幻之旅",
					"title1":"凯撒自营",
					"title2":"精致小团",},
					{"img":"../../static/img/geren/4299632e491c11539fa4b92fc9f586e.png",
					"title":"凯撒亲子营-北京科举博物馆探秘之旅一日游",
					"title1":"凯撒自营",
					"title2":"精致小团",},
					{"img":"../../static/img/geren/81235ecae36420420eff2c3a7e5a3f4.png",
					"title":"凯撒亲子营-北京故宫寻宝探秘之旅一日游",
					"title1":"凯撒自营",
					"title2":"明星产品",},
					{"img":"../../static/img/geren/f94e378d4d0f082e158c65d9b8cea6b.png",
					"title":"[游学]凯撒研学-我是小小飞行员飞行模拟体验课一日游",
					"title1":"凯撒自营",
					"title2":"精致小团",}
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
.four{
	width: 100%;
	height: 100%;
	margin-bottom: 5rem;
}
.four .section1{
	width: 100%;
	height: 10rem;
	/*border: 1px solid black;*/
	background-color: #4A9BEF;
	border-radius: 0 0 1rem 1rem;
}
.four .section1 button{
	width: 10rem;
	font-size: 1.5rem;
	margin-left: 6rem;
	margin-top: 3rem;
	border-radius: 2rem;
	border: 1px solid white;
	background-color: #4A9BEF;
	color: white;
}
.four .section1 div{
	position: absolute;
	top: 1rem;
	right: 0;
}
.four .section1 div img{
	margin-right: 0.5rem;
}
.four .section2{
	width: 100%;
	height: 14rem;
	/*border: 1px solid black;*/
	margin-top: 1rem;
	background-color: whitesmoke;
	border-radius: 2rem;
}
.four .section2 h3{
	margin-left: 1rem;
	margin-top: 1rem;
}
.four .section2 ul{
	width: 100%;
	height: 11rem;
	/*border: 1px solid black;*/
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
}
.four .section2 ul li{
	width:5rem ;
	height: 5rem;
	/*border: 1px solid black;*/
	text-align: center;
	margin-top: 0.5rem;
}
.four .section3{
	width: 100%;
	height: 3rem;
	/*border: 1px solid black;*/
	line-height: 3rem;
	border-radius: 2rem;
	background-color: whitesmoke;
	margin-top: 1rem;
}
.four .section3 h2{
	margin-left: 1rem;
}
.four .section3 span{
	position: absolute;
	right: 1rem;
	top: 26rem;
	font-size: 3rem;
}
.four .section4{
	width: 100%;
	height:24rem;
	/*border: 1px solid black;*/
	line-height: 3rem;
	border-radius: 2rem;
	background-color: whitesmoke;
	margin-top: 1rem;
}
.four .section4 h2{
	margin-left: 1rem;
}
.four .section4 ul{
	width: 100%;
	height:20rem;
	/*border: 1px solid black;*/
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}
.four .section4 ul li{
	width: 5rem;
	height: 5rem;
	/*border: 1px solid black;*/
	text-align: center;
}
.four .section4 ul li img{
	height: 3rem;
}
.four .section4 ul li p{
	margin-top: -1.5rem;
}
.four .section5{
	width: 100%;
}
.four .section5 h1{
	margin-left: 4.5rem;
}
.four .section5 ul{
		width: 100%;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	.four .section5 ul li{
		width: 11rem;
		height: 14rem;
		/*border: 1px solid black;*/
		background-color: whitesmoke;
	}
	.four .section5 ul li img{
		width: 11rem;
	}
	.four .section5 ul li div{
		display: flex;
		justify-content: space-around;
	}
	.four .section5 ul li div span{
		display: inline-block;
		margin-top: 0.5rem;
	}
</style>