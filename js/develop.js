var vm = new Vue ({
	el: "#app",
	data: {
		SearchStreamer:'',
		Streamer:[],
		StreamerWeeklyClips:[],
		StreamerAllclips:[],
		Show: 'week',
		loadFinish: false

	},

	methods:{
	print:function(){
		console.log(this.streamers)
	},
	// AddtoStreamer:function(Searchname){
	// 	this.Streamer.push(Searchname)
	// },

	searchresult:function(){
		let StreamerID = this.Streamer
		let StreamerAPI = `https://api.twitch.tv/kraken/clips/top?client_id=2769liprsyo7jnvtfwdcls4au2qkcf&limit=50&channel=${StreamerID}`
		let StreamerAPI2 = `https://api.twitch.tv/kraken/clips/top?client_id=2769liprsyo7jnvtfwdcls4au2qkcf&limit=50&period=all&channel=${StreamerID}`
		let clientId = '2769liprsyo7jnvtfwdcls4au2qkcf'

		function GetStreamerWeekly(){
		return axios({
		method:'get',
		url:StreamerAPI,
        headers:{
			'Client-ID': clientId,
			'Accept': 'application/vnd.twitchtv.v5+json'  
  		}})
		}

		function GetStreamerAll(){
		return axios({
		method:'get',
        url:StreamerAPI2,
        headers:{
			'Client-ID': clientId,
			'Accept': 'application/vnd.twitchtv.v5+json' 
  		}
		})
		}	
		
		axios.all([GetStreamerWeekly(), GetStreamerAll()])
			.then(axios.spread((Weeklyresponse, Allresponse)=>{
				this.StreamerWeeklyClips=Weeklyresponse.data.clips
				this.StreamerAllclips= Allresponse.data.clips
				this.loadFinish= true
			}))
		},
	}

})
