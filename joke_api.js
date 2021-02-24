class JokeApi{
    constructor(){
        this.baseURL = 'https://api.chucknorris.io';
        this.axiosNesne = axios.create({
            baseURL : this.baseURL,
        });
    }

    async randomSakaGetir(){
      try{
        const sakaResponse = await this.axiosNesne.get('/jokes/random');
        console.log(sakaResponse.data.value);
        return sakaResponse.data.value;
      }catch(hata){
          console.log(hata.response);
      }
    }
}