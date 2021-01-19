class Youtube {
	constructor(key) {
		this.key = key;
		this.requestOptions = {
			method: 'GET',
			redirect: 'follow'
		};
	}

	// mostPopular() {
	// 	return fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`, this.requestOptions)
	// 		.then(response => response.json())
	// 		.then(result => result.items);
	// }
	async mostPopular() {
		const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`, this.requestOptions);
		const result = await response.json();
		return result.items;
	}

	async search(query) {
		const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`, this.requestOptions);
		const result = await response.json();
		return result.items.map(item => ({...item, id: item.id.videoId}));
	}
}

export default Youtube;
