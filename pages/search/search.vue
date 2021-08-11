<template>
	<view class="search">
		<musichead title = "搜索" :icon = "true" :iconblack="true"></musichead>
		<view class="container" v-show="true">
			<scroll-view scroll-y="true">
				<view class="search-search">
					<text class="iconfont iconsearch"></text>
					<input type="text" placeholder="搜索歌曲" />
					<!-- <text class="iconfont iconguanbi"></text> -->
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import '@/common/iconfont.css'
	import musichead from '../../components/musichead/musichead.vue'
	export default {
		data() {
			return {
				
			}
		},
		components:{
			musichead
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.search-search{
		display: flex;
		align-items: center;
		height: 70rpx;
		margin: 70rpx 30rpx 30rpx 30rpx;
		background: #f7f7f7;
		border-radius: 50rpx;
	}
	.search-search text{
		margin: 0 26rpx;
	}
	.search-search input{
		flex: 1;
		font-size: 26rpx;
	}
</style>
