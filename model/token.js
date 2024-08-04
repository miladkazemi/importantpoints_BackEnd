//dm: data model

class userToken_dm {
    constructor(tokenData)  {
        this.user_id = tokenData['user_id']
    }

    get getUserID() {
        return this.user_id;
    }
}





export default {
    userToken_dm: userToken_dm,
}











    
