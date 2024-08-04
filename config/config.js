export const config = {
    HOSTNAME: 'localhost',
    DBNAME: 'important_points', 
    USERNAME: 'root',
    PASSWORD: '', 
    PREFIX: '',
    CHARSET: 'utf-8',
    MYSQL_PORT: 3306,
    API_PORT: process.env.PORT || 8000,
    SESSION_SECRET: 'SESSION_SECRET_SAMPLE',
    HederTokenKey: 'x-access-token',
    MAIN_URL_APIS: '/api/v1',
    MAIN_URL_APIS_ADMIN: '/api/admin/',
    TOKEN_SECRET_KEY: 'TOKEN_SECRET_KEY_SAMPLE',
};



export default config;
