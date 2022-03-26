
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
		let clientId="insert client id"
		let clientSecret="insert client secret"
		let accessToken="insert access token"
	
	

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
