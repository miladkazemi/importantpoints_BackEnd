import errorCodeToMsg from './errorHandling.js'


const getTimeForConsole = () => {
    let date_ob = new Date();
    // current date
    // adjust 0 before single digit date
    let date = ("0" + date_ob.getDate()).slice(-2);
    // current month
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();
    return year + "-" + month + "-" + date + " (O)__(O) " + hours + ":" + minutes + ":" + seconds 
}


const util = {
    log: function(key, errorCode, remoteAddress, id, msg) {
        let ip = remoteAddress.replace(/^.*:/, '')
        let text = {
            'LogSystem-By-MiladStOrM': {
                'key': key,
                'code': errorCode,
                'ip': ip,
                'user_id': (id == undefined) ? 0 : id, // id: user_id
                'msg': (msg == undefined) ? errorCodeToMsg(errorCode) : msg,
                'time': getTimeForConsole()
            }
        }
        console.log(text)
    },

    requestTime: () => {
        return new Date().getTime()
    },


    
}

export default util