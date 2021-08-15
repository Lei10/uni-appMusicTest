<template>
<<<<<<< HEAD
	<view class="music-head"  :style="{ color : color}">
		<view v-if="icon" class="music-head-icon">
			<text class="iconfont iconzuojiantou-copy" @tap="handleToBack"></text> | <text class="iconfont iconshouye" @tap="handleToHome"></text>
=======
	<view class="music-head"  :style="{ color : color}">
		<view v-if="icon" class="music-head-icon">
			<text class="iconfont iconzuojiantou-copy" @tap="handleToBack"></text> | <text class="iconfont iconshouye" @tap="handleToHome"></text>
>>>>>>> 49a9a9c (music)
		</view>
		{{ title }}
	</view>
</template>

<script>
	export default {
		name:"musichead",
		data() {
			return {
				
			};
<<<<<<< HEAD
		},
		props : ['title','icon','color'],
		methods : {
			handleToBack(){
				uni.navigateBack();
			},
			handleToHome(){
				uni.navigateTo({
					url: '/pages/index/index',
				});
			}
=======
		},
		props : ['title','icon','color'],
		methods : {
			handleToBack(){
				uni.navigateBack();
			},
			handleToHome(){
				uni.navigateTo({
					url: '/pages/index/index',
				});
			}
>>>>>>> 49a9a9c (music)
		}
	}
</script>

<<<<<<< HEAD
<style scoped>
	.music-head{
		width: 100%;
		height: 75px;
		font-size: 16px;
		line-height: 80px;
		text-align: center;
		color: #000000;
		position: relative;
	}
	.music-head-icon{
		position: absolute;
		left: 8px;
		top: 26px;
		width: 80px;
		height: 30px;
		background: rgba(0,0,0,0.4);
		color: #FFFFFF;
		line-height: 31px;
		border-radius: 15px;
		display: flex;
		justify-content: space-evenly;
=======
<style scoped>
	.music-head{
		width: 100%;
		height: 75px;
		font-size: 16px;
		line-height: 80px;
		text-align: center;
		color: #000000;
		position: relative;
	}
	.music-head-icon{
		position: absolute;
		left: 8px;
		top: 26px;
		width: 80px;
		height: 30px;
		background: rgba(0,0,0,0.4);
		color: #FFFFFF;
		line-height: 31px;
		border-radius: 15px;
		display: flex;
		justify-content: space-evenly;
>>>>>>> 49a9a9c (music)
	}
</style>
