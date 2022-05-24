<template>
	<div class="one">
		<div class="header"> 
			<h3>郑州</h3>
			<input type="text" name="" placeholder="目的地/关键词" id="" value="" />
			<ul>
				<li><img src="../../static/img/shouye/90b3bd6c96793146aec27e071d06b47.png"/></li>
				<li><img src="../../static/img/shouye/4281dc5f138b0b0de4859b11250db3e.png"/></li>
			</ul>
		</div>
		<div class="block">
		    <el-carousel height="8rem">
		      <el-carousel-item v-for="yang in sites">
		      	<img :src="yang.url"/>
		        <!--<h3 class="small">{{ item }}</h3>-->
		      </el-carousel-item>
		    </el-carousel>
		</div>
		<div class="section1">
			<img src="../../static/img/shouye/6014a7c452d8df052dde99f950660b2.png"/>
			<ul class="hello">
				<li v-for="yuan in site">
					<img :src="yuan.src"/>
					<span>{{yuan.title}}</span>
				</li>
			</ul>
		</div>
		<div class="section2">
			<h2>热门活动</h2>
			<div class="section3">
				<img src="../../static/img/shouye/6095f936795d3df32a845069708b5dd.png"/>
				<img src="../../static/img/shouye/dc76e232cdaa169fda924bd2b424996.png"/>
				<img src="../../static/img/shouye/ecb4a63a4d37a2e80586c74e685a88c.png"/>
			</div>
			<div class="section4">
				<ul>
					<li>
						<h3>人气爆款</h3>
						<p>信赖之选 源于品质</p>
						<span>立即抢购</span>
						<img src="../../static/img/shouye/ecaeffb94884334aa4dc849e5a9dd98.png"/>
					</li>
					<li>
						<h3>每日上新</h3>
						<p>嵚选好物抢先知</p>
						<span>立即抢购</span>
						<img src="../../static/img/shouye/ff06a49775f1f069f40a15ade1366da.png"/>
					</li>
					<li>
						<h3>中国专利</h3>
						<p>一趟列车一趟风景</p>
						<span>点击查看</span>
						<img src="../../static/img/shouye/ec44c76205f21a2b619eb93cfc70eab.png"/>
					</li>
					<li>
						<h3>世嘉福袋</h3>
						<p>便捷查询使用</p>
						<span>点击查看</span>
						<img src="../../static/img/shouye/9171cd81add3cba14dd29f64feeaa5f.png"/>
					</li>
				</ul>
			</div>
		</div>
		<div class="section5">
			<h2>精选目的地</h2>
			<ul class="section6">
				<li><img src="../../static/img/shouye/b68a3880612da0f38e3e2eb0a322742.png"/></li>
				<li><img src="../../static/img/shouye/e4ff921d7b228f1aa79bb673bbe9845.png"/></li>
				<li><img src="../../static/img/shouye/1cdd4bb84e0fc1997ec6cac3f61626e.png"/></li>
			</ul>
			<ul class="section7">
				<li>大连</li>
				<li>新疆</li>
				<li>青海</li>
				<li>贵州</li>
				<li>内蒙古</li>
				<li>三亚</li>
			</ul>
		</div>
		<div class="section8">
			<h2>推荐主题</h2>
			<ul class="section9">
				<li><img src="../../static/img/shouye/2a6c53b28c9bb7a06619ee6b292a094.png"/></li>
				<li><img src="../../static/img/shouye/293cd7ac150851a0c2ee221f1427c0b.png"/></li>
				<li><img src="../../static/img/shouye/ba2ca2c7264dc9944f2e64d4fe94d2d.png"/></li>
			</ul>
		</div>
		<div class="section10">
			<h2>旅游体验</h2>
			<ul class="section11">
				<li><img src="../../static/img/shouye/0413ec2b1006baaf7ece34979c05429.png"/></li>
				<li><img src="../../static/img/shouye/a87e5ced6c24609f151dd05600909a9.png"/></li>
				<li><img src="../../static/img/shouye/1f3d40b2e60b7b1bfaa85d8c111d66c.png"/></li>
				<li><img src="../../static/img/shouye/d1e4c3e402a30e245a0c31fa0799719.png"/></li>
				<li><img src="../../static/img/shouye/15c037e3d2fa9a2f9461bcf2cb672db.png"/></li>
			</ul>
		</div>
		<ul class="section12">
			<li><router-link to="/one/">暑期亲子</router-link></li>
			<li><router-link to="/one/one2">周边游</router-link></li>
			<li><router-link to="/one/one3">国内游</router-link></li>
			<li><router-link to="/one/one4">专利中国</router-link></li>
		</ul>
		<router-view></router-view>
	</div>
</template>

<script>
	export default{
		name:"one",
		data(){
			return{
				sites:[
					{"url":"../../static/img/shouye/0e27416f6f941e3d98c18b9d82aa1a3.png"},
					{"url":"../../static/img/shouye/1a7c6e5c726bda44dcda2ce997b3aa2.png"},
					{"url":"../../static/img/shouye/7769c5b0161d3def6d87b073f24a71a.png"},
					{"url":"../../static/img/shouye/846f51ab822fb113576d5e7f6fd9de2.png"},
					{"url":"../../static/img/shouye/34dd8f678bab3dadb678ce43c262dc5.png"},
					{"url":"../../static/img/shouye/910b7473a2ee81775bb2d5baec7b288.png"}
				],
				site:[
					{"src":"../../static/img/shouye/e6a19c81ebcf1500514f381dec75071.png","title":"安心父母游"},
					{"src":"../../static/img/shouye/fb723f015008f41117a35132fa3d5de.png","title":"亲子好时光"},
					{"src":"../../static/img/shouye/da0047753e48a92bd8259665f0ed059.png","title":"私家团"},
					{"src":"../../static/img/shouye/d8afbe1e6ccce05ca24e62e83066faf.png","title":"深度轻奢游"},
					{"src":"../../static/img/shouye/e6461fe32f6caae1fcb4b99cf0b8dd8.png","title":"游轮风光"},
					{"src":"../../static/img/shouye/31c2f9fad4486001511697f2e27b81f.png","title":"品牌护肤馆"},
					{"src":"../../static/img/shouye/e664de9f3410920ed3b33e6fdf40028.png","title":"美酒佳酿"},
					{"src":"../../static/img/shouye/e7db3feb009077000e118105d688e88.png","title":"好味零食"},
					{"src":"../../static/img/shouye/9b86b44b33b2fce18cc92a2c7613984.png","title":"健康管家"},
					{"src":"../../static/img/shouye/73f473603340ca6804792a2470bef0f.png","title":"母婴好物"}
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
	.one{
		width: 100%;
		height: 100%;
		margin-bottom: 5rem;
	}
	.one .header{
		width: 100%;
		height: 4rem;
		/*border: 1px solid black;*/
		background-color: white;
		position: fixed;
		top: 0;
		z-index: 10;
	}
	
	.one .header h3{
		margin-top: 1rem;
		margin-left: 0.5rem;
	}
	.one .header input{
		width: 15rem;
		height: 2rem;
		position: absolute;
		top: 1rem;
		left: 3.2rem;
		text-align: center;
	}
	
	.one .header ul{
		display: flex;
		justify-content: flex-end;
	}
	.one .header ul li{
		margin-right: 0.7rem;
		margin-top: -1.5rem;
	}
	.one .block{
		text-align: center;
		margin-top: 4rem;
	}
	.one .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .one .el-carousel__item img{
  	width: 100%;
  }
  .one .section1{
  	width: 100%;
  	height: 17rem;
  	margin-top: 1rem;
  	/*border: 1px solid black;*/
  }
  .one .section1 img{
  	width: 100%;
  }
  .one .section1 .hello{
  	display: flex;
  	justify-content: space-around;
  	flex-wrap:wrap ;
  }
  .one .section1 .hello li{
  	width: 4.5rem;
  	height: 5rem;
  	/*border: 1px solid black;*/
  	text-align: center;
  	font-size: 0.8rem;
  }
  .one .section1 .hello li img{
  width: 3rem;
  margin-left: 0.5rem;
  }
  .one .section1 .hello li span{
  	display: inline-block;
  	width: 4rem;
  	height: 1rem;
  	/*border: 1px solid black;*/
  }
  .one .section2{
  	width: 100%;
  	height: 22rem;
  	/*border: 1px solid black;*/
  }
  .one .section2 .section3{
  	width: 100%;
  	height: 10rem;
  	/*border: 1px solid black;*/
  }

  .one .section2 .section3 img:nth-child(2){
  margin-right: 0;
  margin-bottom: 4rem;
  }
  .one .section2 .section3 img:nth-child(3){
 	margin-left: 11.9rem;
 	margin-top: -7rem;
  }
  .one .section2 .section4{
  	width: 100%;
  	height: 10rem;
  	/*border: 1px solid black;*/
  }
  .one .section2 .section4 ul{
  	display: flex;
	flex-wrap: wrap;
  }
  .one .section2 .section4 ul li{
  	width: 11.5rem;
  	height: 5rem;
  	/*border: 1px solid black;*/
  }
  .one .section2 .section4 ul li img{
  	margin-left: 6.5rem;
  	margin-top: -5rem;
  }
  .one .section2 .section4 ul li p{
  	font-size: 0.7rem;
  }
  .one .section2 .section4 ul li span{
  	display: inline-block;
  	background-color: orange;
  	border-radius: 1rem;
  	margin-left: 0.5rem;
  }
  .one .section5{
  	width: 100%;
  	height: 14rem;
  	/*border: 1px solid black;*/
  }
  .one .section5 .section6{
  	width: 100%;
  	height: 5rem;
  	/*border: 1px solid black;*/
  	display: flex;
  	justify-content: space-between;
  }
  .one .section5 .section6 li img{
  	width: 7.5rem;
  }
   .one .section5 .section7{
   	width: 100%;
   	height: 7rem;
   	/*border: 1px solid black;*/
   	display: flex;
   	flex-wrap: wrap;
   }
   .one .section5 .section7 li{
   	width: 7rem;
   	border: 1px solid black;
   	text-align: center;
   	font-size: 1.8rem;
   	margin-left: 0.5rem;
   	margin-top: 0.5rem;
   }
   .one .section8{
   	width: 100%;
   	height: 12rem;
   	/*border: 1px solid black;*/
   	margin-top: 1rem;
   }
   .one .section8 .section9{
   	display: flex;
   	justify-content: space-between;
   }
   .one .section10{
   	width: 100%;
   	height: 20rem;
   	/*border: 1px solid black;*/
   	margin-top: 1rem;
   }
   .one .section10 .section11{
   	display: flex;
   	flex-wrap:wrap;
   	justify-content: space-between;
   	margin-top: 1rem;
   }
   .one .section12{
   	width: 100%;
   	height: 2rem;
   	/*border: 1px solid black;*/
   	line-height: 2rem;
   	display: flex;
   	justify-content: space-around;
   }
</style>