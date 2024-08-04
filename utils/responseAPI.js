import errorHandling from "./errorHandling.js"




function standard(status, data) {
    return {
        'status': status,
        'data': data,
    }
}

function status(code) {
    return {
        'ok': (code == errorHandling.code_ok) ? true : false,
        'code': code,
        'msg': errorHandling.errorCodeToMsg(code)
    }
}

const authentication = (id, token, username) => {
    return {
        'id': id,
        'token': token,
        'username': username,
    }
}

function createData(id, time) {
    return {
        'id': id,
        'time': time,
    }
}

export default {
    standard: standard,
    status: status,
    authentication: authentication,
    createData: createData,

}
