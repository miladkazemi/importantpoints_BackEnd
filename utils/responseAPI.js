import errorHandling from "./errorHandling.js"




function standard(status, data) {
    return {
        'status': status,
        'data': data,
    }
}

function allQuestions(reverseList, simpleList) {
    return {
        'reverse': reverseList,
        'simple': simpleList,
    }
}

function status(code) {
    return {
        'ok': (code == errorHandling.code_ok) ? true : false,
        'code': code,
        'msg': errorHandling.errorCodeToMsg(code)
    }
}

const authentication = (id, token, username, ident_code) => {
    return {
        'id': id,
        'token': token,
        'username': username,
        'ident_code': ident_code,
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

    allQuestions: allQuestions,


}