


/*----------------------------------------------------------------------------------------*/
/*        -[ Error Message ]-       -[ Error Message ]-        -[ Error Message ]-        */
/*----------------------------------------------------------------------------------------*/
 const errorMsg_idk = 'Unknown -> Please report the problem to the service admin'
 const errorMsg_notFound = 'No data found with these values'
 const errorMsg_ok = 'no problem -> enjoy it :)'
 const errorMsg_limit_20 = 'Please set the limit value greater than 0 and less than or equal to 20'
 const errorMsg_invalidToken = 'User token is invalid'
 const errorMsg_noPermission = 'You do not have access'
 const errorMsg_duplicate = 'This user name already exists'
 const errorMsg_invalidData = 'The type or value of the parameter you sent is invalid'


 const errorHandling = {

    /*--------------------------------*/
    /*        -[ Error Code ]-        */
    /*--------------------------------*/
    code_permission: 403, // Forbidden
    code_duplicate: 409, // duplicate data
    code_idk: 500, // Internal Server Error
    code_notFound: 404, // Not Found
    code_limit: 429, // Too Many Requests
    code_Token: 401, // Unauthorized
    code_invalidData: 400, // Bad Request
    code_ok: 200, // ok


    /*-------------------------------------------------------*/
    /*        -[ Convert ErrorCode To ErrorMessage ]-        */
    /*-------------------------------------------------------*/

    errorCodeToMsg: (errorCode) => {
        switch(errorCode) {
            case errorHandling.code_permission: {
                return errorMsg_noPermission;
            } 
            case errorHandling.code_duplicate: {
                return errorMsg_duplicate;
            }
            case errorHandling.code_idk: {
                return errorMsg_idk;
            }
            case errorHandling.code_notFound: {
                return errorMsg_notFound;
            }
            case errorHandling.code_limit: {
                return errorMsg_limit_20;
            }
            case errorHandling.code_Token: {
                return errorMsg_invalidToken;
            }
            case errorHandling.code_invalidData: {
                return errorMsg_invalidData;
            }
            case errorHandling.code_ok: {
                return errorMsg_ok;
            }
            default: {
                return 'unknow';
            }
        }
    }
 }
 

 export default errorHandling
