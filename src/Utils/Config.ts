class Config {

}
class DevelopmentConfig extends Config {
    public isDevelopment = true;
    public usersUrl = "http://3.79.228.205:3001/api/users/";
    public assignmentsUrl = "http://3.79.228.205:3001/api/assignments/";
    public assignmentsChartUrl = "http://3.79.228.205:3001/api/assignments/chart/";
    public assignmentsImagesUrl = "http://3.79.228.205:3001/api/images/";
    public assignmentsAmountCardUrl = "http://3.79.228.205:3001/api/assignments/count-card/";

    public baseUrl = "http://3.79.228.205:3001/api/";
    public clientsUrl = "http://3.79.228.205:3001/api/clients/";
    public clientsSearchUrl = "http://3.79.228.205:3001/api/clients/search/";
    public registerUrl = "http://3.79.228.205:3001/api/auth/signup";
    public loginUrl = "http://3.79.228.205:3001/api/auth/signin";
    public resetPasswordUrl = "http://3.79.228.205:3001/api/auth/reset-password/";
    // public socketUrl = "http://localhost:3000";
}

class ProductionConfig extends Config {
    public isDevelopment = false
    public usersUrl = "http://3.79.228.205:3001/api/users/";
    public assignmentsUrl = "http://3.79.228.205:3001/api/assignments/";
    public assignmentsImagesUrl = "http://3.79.228.205:3001/api/images/";
    public assignmentsChartUrl = "http://3.79.228.205:3001/api/assignments/chart/";
    public assignmentsAmountCardUrl = "http://3.79.228.205:3001/api/assignments/count-card/";

    public baseUrl = "http://3.79.228.205:3001/api/";
    public clientsUrl = "http://3.79.228.205:3001/api/clients/";
    public clientsSearchUrl = "http://3.79.228.205:3001/api/clients/search/";
    public registerUrl = "http://3.79.228.205:3001/api/auth/signup";
    public loginUrl = "http://3.79.228.205:3001/api/auth/signin";
    public resetPasswordUrl = "http://3.79.228.205:3001/api/auth/reset-password/";
    // public socketUrl = "http://localhost:3000";
}
console.log(process.env.NODE_ENV)

const config = process.env.NODE_ENV === "development" ? new DevelopmentConfig() : new ProductionConfig();


export default config;