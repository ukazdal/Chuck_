class UnsplashApi{
    constructor(){
        this.baseURL = 'https://api.unsplash.com';
        this.clientID = 'Client-ID NQa58TKTp2bLPzbP8xAqUCi7XRaX7IRSqNytbSBD0CU';
        this.axiosNesne = axios.create({
            baseURL : this.baseURL,
            headers:{
                Authorization: this.clientID
            },
            params :{
                query : 'animal',
                count: 1
            }
        });
    }

    async randomResimGetir(){
        try{
            const resimResponse = await this.axiosNesne.get('/photos/random');
            console.log(resimResponse.data[0].urls.regular);
           return resimResponse.data[0].urls.regular;
        }catch(err) {
            console.log(err.response);
            return ''
        }
    }
}