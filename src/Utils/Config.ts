class Config {

}
class DevelopmentConfig extends Config {
    public usersUrl = "http://localhost:3001/api/users/";
    public assignmentsUrl = "http://localhost:3001/api/assignments/";
    public assignmentsChartUrl = "http://localhost:3001/api/assignments/chart/";
    public assignmentsImagesUrl = "http://localhost:3001/api/images/";
    public assignmentsAmountCardUrl = "http://localhost:3001/api/assignments/count-card/";

    public baseUrl = "http://localhost:3001/api/";
    public clientsUrl = "http://localhost:3001/api/clients/";
    public clientsSearchUrl = "http://localhost:3001/api/clients/search/";
    public registerUrl = "htt`1p://localhost:3001/api/auth/signup";
    public loginUrl = "http://localhost:3001/api/auth/signin";
    public resetPasswordUrl = "http://localhost:3001/api/auth/reset-password/";
    // public socketUrl = "http://localhost:3000";
}

class ProductionConfig extends Config {
    public usersUrl = "http://51.16.52.2:80/api/users/";
    public assignmentsUrl = "http://51.16.52.2:80/api/assignments/";
    public assignmentsImagesUrl = "http://51.16.52.2:80/api/images/";
    public assignmentsChartUrl = "http://51.16.52.2:80/api/assignments/chart/";
    public assignmentsAmountCardUrl = "http://51.16.52.2:80/api/assignments/count-card/";

    public baseUrl = "http://51.16.52.2:80/api/";
    public clientsUrl = "http://51.16.52.2:80/api/clients/";
    public clientsSearchUrl = "http://51.16.52.2:80/api/clients/search/";
    public registerUrl = "http://51.16.52.2:80/api/auth/signup";
    public loginUrl = "http://51.16.52.2:80/api/auth/signin";
    public resetPasswordUrl = "http://51.16.52.2:80/api/auth/reset-password/";
    // public socketUrl = "http://localhost:3000";
}
console.log(process.env.NODE_ENV)
const config = process.env.NODE_ENV === "development" ? new DevelopmentConfig() : new ProductionConfig();


export default config;