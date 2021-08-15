<template>
	<view class="detail">
<<<<<<< HEAD
		<view class="fixbg" :style="{ 'background-image' : 'url(' + songDetail.al.picUrl + ')' }"></view>
		<!-- <view class="fixbg" :style="{ 'background-image' : 'url(/static/wangyiyunyinyue.png)' }"></view> -->
		<musichead :title = "songDetail.name" :icon = "true" color = "white"></musichead>
		<view class="container" v-show="true">
			<scroll-view scroll-y="true">
				<view class="detail-play">
					<image :src="songDetail.al.picUrl" mode=""></image>
					<text class="iconfont iconpause"></text>
					<view></view>
				</view>
				<view class="detail-lyric">
					<view class="detail-lyric-wrap">
						<view class="detail-lyric-item">
							测试文字测试文字
						</view>
						<view class="detail-lyric-item active">
							测试文字
						</view>
						<view class="detail-lyric-item">
							测试文字测试文字测试文字
						</view>
					</view>
				</view>
				<view class="detail-like">
					<view class="detail-like-head">
						喜欢这首歌的人也听
					</view>
					<!-- <view class="detail-like-item">
						<view class="detail-like-img">
							<image src="../../static/logo.png" mode=""></image>
						</view>
						<view class="detail-like-song">
							<view>
								蓝
							</view>
							<view>
								<image src="../../static/dujia.png" mode=""></image>
								<image src="../../static/sq.png" mode=""></image>
								是白起 - 蓝
							</view>
						</view>
						<text class="iconfont iconbofang"></text>
					</view> -->
					<view class="detail-like-item" v-for="(item,index) in songSimi" :key = "index">
						<view class="detail-like-img">
							<image :src="item.album.picUrl" mode=""></image>
						</view>
						<view class="detail-like-song">
							<view>
								{{ item.name }}
							</view>
							<view>
								<image v-if="item.privilege.flag > 60 && item.privilege.flag < 70" src="../../static/dujia.png" mode=""></image>
								<image v-if="item.privilege.maxbr == 999000" src="../../static/sq.png" mode=""></image>
								{{ item.album.artists[0].name }} - {{ item.name }}
							</view>
							
						</view>
						<text class="iconfont iconbofang"></text>
					</view>
				</view>
				<view class="detail-comment">
					<view class="detail-comment-head">
						精彩评论
					</view>
					<!-- <view class="detail-comment-item">
						<view class="detail-comment-img">
							<image src="../../static/logo.png" mode=""></image>
						</view>
						<view class="detail-comment-content">
							<view class="detail-comment-title">
								<view class="detail-comment-name">
									<view>
										我的啊
									</view>
									<view>
										2020年1月2日
									</view>
								</view>
								<view class="detail-comment-like">
									56027
									<text class="iconfont iconlike"></text>
								</view>
							</view>
							<view class="detail-comment-text">
								测试文字测试文字测试文字测试文字测试文字测试文字测试文字
							</view>
						</view>
					</view> -->
					<view class="detail-comment-item" v-for="(item,index) in songComment" :key = "index">
						<view class="detail-comment-img">
							<image :src=" item.user.avatarUrl " mode=""></image>
						</view>
						<view class="detail-comment-content">
							<view class="detail-comment-title">
								<view class="detail-comment-name">
									<view>
										{{ item.user.nickname }}
									</view>
									<view>
										{{ item.time | formatTime }}
									</view>
								</view>
								<view class="detail-comment-like">
									{{ item.likedCount | formatCount}}
									<text class="iconfont iconlike"></text>
								</view>
							</view>
							<view class="detail-comment-text">
								{{ item.content }}
							</view>
						</view>
					</view>
					
				</view>
			</scroll-view>
=======
		<view class="fixbg" :style="{ 'background-image' : 'url(' + songDetail.al.picUrl + ')' }"></view>
		<!-- <view class="fixbg" :style="{ 'background-image' : 'url(/static/wangyiyunyinyue.png)' }"></view> -->
		<musichead :title = "songDetail.name" :icon = "true" color = "white"></musichead>
		<view class="container" v-show="!isloading">
			<scroll-view scroll-y="true">
				<view class="detail-play" @tap="handleToPlay">
					<image :src="songDetail.al.picUrl" :class="{ 'detail-play-run': isPlayRotate}" mode=""></image>
					<text class="iconfont" :class="iconplay"></text>
					<view></view>
				</view>
				<view class="detail-lyric">
					<view class="detail-lyric-wrap" :style="{ transform : 'translateY('+ -(lyricIndex - 1) * 82 + 'rpx)'}">
						<!-- <view class="detail-lyric-item">
							测试文字测试文字
						</view> -->
						<view class="detail-lyric-item" :class="{active : lyricIndex == index}" v-for = "(item,index) in songLyric" :key = "index">
							{{ item.lyric }}
						</view>
					</view>
				</view>
				<view class="detail-like">
					<view class="detail-like-head">
						喜欢这首歌的人也听
					</view>
					<!-- <view class="detail-like-item">
						<view class="detail-like-img">
							<image src="../../static/logo.png" mode=""></image>
						</view>
						<view class="detail-like-song">
							<view>
								蓝
							</view>
							<view>
								<image src="../../static/dujia.png" mode=""></image>
								<image src="../../static/sq.png" mode=""></image>
								是白起 - 蓝
							</view>
						</view>
						<text class="iconfont iconbofang"></text>
					</view> -->
					<view class="detail-like-item" @tap="handleToSimi(item.id)" v-for="(item,index) in songSimi" :key = "index">
						<view class="detail-like-img">
							<image :src="item.album.picUrl" mode=""></image>
						</view>
						<view class="detail-like-song">
							<view>
								{{ item.name }}
							</view>
							<view>
								<image v-if="item.privilege.flag > 60 && item.privilege.flag < 70" src="../../static/dujia.png" mode=""></image>
								<image v-if="item.privilege.maxbr == 999000" src="../../static/sq.png" mode=""></image>
								{{ item.album.artists[0].name }} - {{ item.name }}
							</view>
							
						</view>
						<text class="iconfont iconbofang"></text>
					</view>
				</view>
				<view class="detail-comment">
					<view class="detail-comment-head">
						精彩评论
					</view>
					<!-- <view class="detail-comment-item">
						<view class="detail-comment-img">
							<image src="../../static/logo.png" mode=""></image>
						</view>
						<view class="detail-comment-content">
							<view class="detail-comment-title">
								<view class="detail-comment-name">
									<view>
										我的啊
									</view>
									<view>
										2020年1月2日
									</view>
								</view>
								<view class="detail-comment-like">
									56027
									<text class="iconfont iconlike"></text>
								</view>
							</view>
							<view class="detail-comment-text">
								测试文字测试文字测试文字测试文字测试文字测试文字测试文字
							</view>
						</view>
					</view> -->
					<view class="detail-comment-item" v-for="(item,index) in songComment" :key = "index">
						<view class="detail-comment-img">
							<image :src=" item.user.avatarUrl " mode=""></image>
						</view>
						<view class="detail-comment-content">
							<view class="detail-comment-title">
								<view class="detail-comment-name">
									<view>
										{{ item.user.nickname }}
									</view>
									<view>
										{{ item.time | formatTime }}
									</view>
								</view>
								<view class="detail-comment-like">
									{{ item.likedCount | formatCount}}
									<text class="iconfont iconlike"></text>
								</view>
							</view>
							<view class="detail-comment-text">
								{{ item.content }}
							</view>
						</view>
					</view>
					
				</view>
			</scroll-view>
>>>>>>> 49a9a9c (music)
		</view>
	</view>
</template>

<<<<<<< HEAD
<script>
	import '@/common/iconfont.css'
	import musichead from '../../components/musichead/musichead.vue'
=======
<script>
	import '@/common/iconfont.css'
	import musichead from '../../components/musichead/musichead.vue'
>>>>>>> 49a9a9c (music)
	import { songDetail , songSimi , songComment , songLyric , songUrl} from '../../common/api.js'
	export default {
		data() {
			return {
<<<<<<< HEAD
				songDetail : {
					name : '',
					al:{
						picUrl : '',
					},
				},
				songSimi : [],
				songComment : [],
			}
		},
		components:{
			musichead
		},
		onLoad(options) {
			// console.log(options.id);
			this.getMusic(options.id)
		},
		methods: {
			getMusic(songId){
				Promise.all([ songDetail(songId) , songSimi(songId) , songComment(songId) ]).then((res)=>{
					// console.log(res)
					if(res[0][1].data.code == '200'){
						this.songDetail = res[0][1].data.songs[0];
						// console.log(this.songDetail);
					}
					if(res[1][1].data.code == '200'){
						this.songSimi = res[1][1].data.songs;
					}
					if(res[2][1].data.code == '200'){
						this.songComment = res[2][1].data.hotComments;
					}
				});
=======
				songDetail : {
					name : '',
					al:{
						picUrl : '',
					},
				},
				songSimi : [],
				songComment : [],
				songLyric : [],
				lyricIndex : 0,
				iconplay : 'iconpause',
				isPlayRotate : true,
				isloading : true,
			}
		},
		components:{
			musichead
		},
		onLoad(options) {
			// console.log(options.id);
			this.getMusic(options.id);
		},
		onUnload() {
			this.cancelLyricIndex();
			// #ifdef H5
			this.bgAudioMannager.destroy();
			// #endif
		},
		onHide() {
			this.cancelLyricIndex();
			// #ifdef H5
			this.bgAudioMannager.destroy();
			// #endif
			
		},
		methods: {
			getMusic(songId){
				// this.$store.commit('NEXT_ID',songId);
				this.$store.commit('NEXT_ID',songId);
				
				uni.showLoading({
					title:"加载中..."
				})
				this.isloading = true;
				this.lyricIndex = 0;
				Promise.all([ songDetail(songId) , songSimi(songId) , songComment(songId) , songLyric(songId) , songUrl(songId) ]).then((res)=>{
					// console.log(res)
					if(res[0][1].data.code == '200'){
						this.songDetail = res[0][1].data.songs[0];
						// console.log(this.songDetail);
					}
					if(res[1][1].data.code == '200'){
						this.songSimi = res[1][1].data.songs;
					}
					if(res[2][1].data.code == '200'){
						this.songComment = res[2][1].data.hotComments;
					}
					if(res[3][1].data.code == '200'){
						let lyric = res[3][1].data.lrc.lyric;
						// console.log(lyric);
						let re = /\[([^\]]+)\]([^\[]+)/g;
						var result = [];
						// console.log(lyric.match(re));
						lyric.replace(re, ($0,$1,$2)=>{
							result.push({ "time" : this.formatTimeToSec($1) , "lyric" : $2 });
						});
						 // console.log(result);
						this.songLyric = result;
					}
					if(res[4][1].data.code == '200'){
						// #ifdef MP-WEIXIN
						this.bgAudioMannager = uni.getBackgroundAudioManager();
						this.bgAudioMannager.title = this.songDetail.name;
						// #endif
						
						// #ifdef H5
						if(!this.bgAudioMannager){
							this.bgAudioMannager = uni.createInnerAudioContext();
						}
						
						this.iconplay = 'iconbofang1';
						this.isPlayRotate = false;
						// #endif
						
						this.bgAudioMannager.src = res[4][1].data.data[0].url || '';
						this.listenLyricIndex();
						this.bgAudioMannager.onPlay(()=>{
							this.iconplay = 'iconpause';
							this.isPlayRotate = true;
							this.listenLyricIndex();
						});
						this.bgAudioMannager.onPause(()=>{
							this.iconplay = 'iconbofang1';
							this.isPlayRotate = false;
							this.cancelLyricIndex();
						});
						this.bgAudioMannager.onEnded(()=>{
							this.getMusic( this.$store.state.nextId);
						});
					}
					this.isloading = false;
					uni.hideLoading();
				});
			},
			formatTimeToSec(value){
				let arr = value.split(':');
				return (Number(arr[0] * 60) + Number(arr[1])).toFixed(1);
			},
			handleToPlay(){
				if(this.bgAudioMannager.paused){
					this.bgAudioMannager.play();
				}
				else{
					this.bgAudioMannager.pause();
				}
			},
			listenLyricIndex(){
				clearInterval(this.timer);
				this.timer = setInterval(()=>{
					for(var i = 0;i < this.songLyric.length;i++){
						if(this.bgAudioMannager.currentTime > this.songLyric[this.songLyric.length - 1].time){
							this.lyricIndex = this.songLyric.length - 1;
							break;
						}
						if(this.bgAudioMannager.currentTime > this.songLyric[i].time && this.bgAudioMannager.currentTime < this.songLyric[i + 1].time){
							this.lyricIndex = i;
						}
					}
				},500);
			},
			cancelLyricIndex(){
				clearInterval(this.timer)
			},
			handleToSimi(songId){
				this.getMusic(songId);
>>>>>>> 49a9a9c (music)
			}
		}
	}
</script>

<<<<<<< HEAD
<style scoped>
	.detail-play{
		width: 580rpx;
		height: 580rpx;
		background: url(../../static/disc.png);
		background-size: cover;
		margin: 214rpx auto 0 auto;
		position: relative;
	}
	.detail-play image{
		width: 370rpx;
		height: 370rpx;
		border-radius: 50%;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		margin: auto;
	}
	.detail-play text{
		width: 100rpx;
		height: 100rpx;
		font-size: 100rpx;
		color: white;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		margin: auto;
	}
	.detail-play view{
		width: 230rpx;
		height: 360rpx;
		background: url(../../static/needle.png);
		position: absolute;
		left: 100rpx;
		top: -200rpx;
		right: 0;
		margin: auto;
		background-size: cover;
	}
	
	.detail-lyric{
		font-size: 32rpx;
		line-height: 82rpx;
		height: 246rpx;
		text-align: center;
		overflow: hidden;
		color: #6f6e73;
	}
	.detail-lyric-wrap{
		
	}
	.detail-lyric-item{
		height: 82rpx;
	}
	.detail-lyric-item.active{
		color: white;
	}
	
	.detail-like{
		margin: 0 30rpx;
	}
	.detail-like-head{
		font-size: 36rpx;
		color: white;
		margin: 50rpx 0;
	}
	.detail-like-item{
		display: flex;
		align-items: center;
		margin-bottom: 28rpx;
	}
	.detail-like-img{
		width: 82rpx;
		height: 82rpx;
		border-radius: 20rpx;
		overflow: hidden;
		margin-right: 20rpx;
	}
	.detail-like-img image{
		width: 100%;
		height: 100%;
	}
	.detail-like-song{
		flex: 1;
		color: #c6c2bf;
	}
	.detail-like-song view:nth-child(1){
		font-size: 28rpx;
		color: white;
		margin-bottom: 12rpx;
	}
	.detail-like-song view:nth-child(2){
		font-size: 22rpx;
	}
	.detail-like-song image{
		width: 26rpx;
		height: 20rpx;
		margin-right: 10rpx;
	}
	.detail-like-item text{
		font-size: 50rpx;
		color: #c6c2bf;
	}
	
	.detail-comment{
		margin: 0 30rpx;
	}
	.detail-comment-head{
		font-size: 36rpx;
		color: white;
		margin: 50rpx 0;
	}
	.detail-comment-item{
		margin-bottom: 28rpx;
		display: flex;
	}
	.detail-comment-img{
		width: 64rpx;
		height: 64rpx;
		border-radius: 50%;
		overflow: hidden;
		margin-right: 18rpx;
	}
	.detail-comment-img image{
		width: 100%;
		height: 100%;
	}
	.detail-comment-content{
		flex:1;
		color: #cbcacf;
	}
	.detail-comment-title{
		display: flex;
		justify-content: space-between;
	}
	.detail-comment-name{
		
	}
	.detail-comment-name view:nth-child(1){
		font-size: 26rpx;
	}
	.detail-comment-name view:nth-child(2){
		font-size: 20rpx;
	}
	.detail-comment-like{
		font-size: 28rpx;
	}
	.detail-comment-text{
		font-size: 28rpx;
		line-height: 40rpx;
		color: white;
		margin-top: 20rpx;
		border-bottom: 1px #e0e0e0 solid;
		padding-bottom: 40rpx;
	}
</style>
=======
<style scoped>
	.detail-play{
		width: 580rpx;
		height: 580rpx;
		background: url(../../static/disc.png);
		background-size: cover;
		margin: 214rpx auto 0 auto;
		position: relative;
	}
	.detail-play image{
		width: 370rpx;
		height: 370rpx;
		border-radius: 50%;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		animation: 10s linear move infinite;
		animation-play-state: paused;
	}
	.detail-play .detail-play-run{
		animation-play-state: running;
	}
	@keyframes move{
		from{ transform:  rotate(0deg);}
		to{transform: rotate(360deg);}
	}
	.detail-play text{
		width: 100rpx;
		height: 100rpx;
		font-size: 100rpx;
		color: white;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		margin: auto;
	}
	.detail-play view{
		width: 230rpx;
		height: 360rpx;
		background: url(../../static/needle.png);
		position: absolute;
		left: 100rpx;
		top: -200rpx;
		right: 0;
		margin: auto;
		background-size: cover;
	}
	
	.detail-lyric{
		font-size: 32rpx;
		line-height: 82rpx;
		height: 246rpx;
		text-align: center;
		overflow: hidden;
		color: #6f6e73;
	}
	.detail-lyric-wrap{
		transition: .5s;
	}
	.detail-lyric-item{
		height: 82rpx;
	}
	.detail-lyric-item.active{
		color: white;
	}
	
	.detail-like{
		margin: 0 30rpx;
	}
	.detail-like-head{
		font-size: 36rpx;
		color: white;
		margin: 50rpx 0;
	}
	.detail-like-item{
		display: flex;
		align-items: center;
		margin-bottom: 28rpx;
	}
	.detail-like-img{
		width: 82rpx;
		height: 82rpx;
		border-radius: 20rpx;
		overflow: hidden;
		margin-right: 20rpx;
	}
	.detail-like-img image{
		width: 100%;
		height: 100%;
	}
	.detail-like-song{
		flex: 1;
		color: #c6c2bf;
	}
	.detail-like-song view:nth-child(1){
		font-size: 28rpx;
		color: white;
		margin-bottom: 12rpx;
	}
	.detail-like-song view:nth-child(2){
		font-size: 22rpx;
	}
	.detail-like-song image{
		width: 26rpx;
		height: 20rpx;
		margin-right: 10rpx;
	}
	.detail-like-item text{
		font-size: 50rpx;
		color: #c6c2bf;
	}
	
	.detail-comment{
		margin: 0 30rpx;
	}
	.detail-comment-head{
		font-size: 36rpx;
		color: white;
		margin: 50rpx 0;
	}
	.detail-comment-item{
		margin-bottom: 28rpx;
		display: flex;
	}
	.detail-comment-img{
		width: 64rpx;
		height: 64rpx;
		border-radius: 50%;
		overflow: hidden;
		margin-right: 18rpx;
	}
	.detail-comment-img image{
		width: 100%;
		height: 100%;
	}
	.detail-comment-content{
		flex:1;
		color: #cbcacf;
	}
	.detail-comment-title{
		display: flex;
		justify-content: space-between;
	}
	.detail-comment-name{
		
	}
	.detail-comment-name view:nth-child(1){
		font-size: 26rpx;
	}
	.detail-comment-name view:nth-child(2){
		font-size: 20rpx;
	}
	.detail-comment-like{
		font-size: 28rpx;
	}
	.detail-comment-text{
		font-size: 28rpx;
		line-height: 40rpx;
		color: white;
		margin-top: 20rpx;
		border-bottom: 1px #e0e0e0 solid;
		padding-bottom: 40rpx;
	}
</style>
>>>>>>> 49a9a9c (music)
