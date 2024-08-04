export const config = {
    HOSTNAME: 'localhost',
    DBNAME: 'important_points', 
    USERNAME: 'root',
    PASSWORD: '', 
    PREFIX: '',
    CHARSET: 'utf-8',
    MYSQL_PORT: 3306,
    API_PORT: process.env.PORT || 8000,
    SESSION_SECRET: '34SDgsdgsp908jhjkhdfsG',
    HederTokenKey: 'x-access-token',
    MAIN_URL_APIS: '/api/v1',
    MAIN_URL_APIS_ADMIN: '/api/admin/',
    TOKEN_SECRET_KEY: '!@#$%^&*()_+|M|I|L|A|D|--__--|S|T|O|R|M|!@#$%^&*()_+',
};



export default config;