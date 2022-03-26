
var vm = new Vue({
	el:"#app",
	data:{
		Allclips: [],
		Weeklyclips: [],
		Show: 'week',
		Keywords: ''

	},

	mounted(){
		let APIurl1="https://api.twitch.tv/kraken/clips/top?parent=test.pogchampz.com&language=en&limit=20&period=all"
		let APIurl2="https://api.twitch.tv/kraken/clips/top?parent=test.pogchampz.com&language=en&limit=25&trending=true"
		let clientId="2769liprsyo7jnvtfwdcls4au2qkcf"
		let clientSecret="3km8gsoofxrmwly6yczvd6l2nlgpgq"
		let accessToken='o6t7fvkwi5n8ui0us9o6r0ygni004q'
	
	

		function GetWeekly(){
		return axios({
		method:'get',
        url:APIurl2,
        headers:{
			'Client-ID': clientId,
			'Authorization': 'Bearer' + accessToken,
			'Accept': 'application/vnd.twitchtv.v5+json' 
  		}
		})
		};	
		
		axios.all([GetWeekly()])
			.then(axios.spread(( Weeklyresponse)=>{
				this.Weeklyclips= Weeklyresponse.data.clips
			}))
		},
})
