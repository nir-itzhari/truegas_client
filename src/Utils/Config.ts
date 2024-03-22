class Config {

}
class DevelopmentConfig extends Config {
    public isDevelopment = true;
    public usersUrl = "http://localhost:3001/api/users/";
    public assignmentsUrl = "http://localhost:3001/api/assignments/";
    public assignmentsChartUrl = "http://localhost:3001/api/assignments/chart/";
    public assignmentsImagesUrl = "http://localhost:3001/api/images/";
    public assignmentsAmountCardUrl = "http://localhost:3001/api/assignments/count-card/";

    public baseUrl = "http://localhost:3001/api/";
    public clientsUrl = "http://localhost:3001/api/clients/";
    public clientsSearchUrl = "http://localhost:3001/api/clients/search/";
    public registerUrl = "http://localhost:3001/api/auth/signup";
    public loginUrl = "http://localhost:3001/api/auth/signin";
    public resetPasswordUrl = "http://localhost:3001/api/auth/reset-password/";
    // public socketUrl = "http://localhost:3000";
}

class ProductionConfig extends Config {
    public isDevelopment = false
    public usersUrl = "http://54.226.176.32:3001/api/users/";
    public assignmentsUrl = "http://54.226.176.32:3001/api/assignments/";
    public assignmentsImagesUrl = "http://54.226.176.32:3001/api/images/";
    public assignmentsChartUrl = "http://54.226.176.32:3001/api/assignments/chart/";
    public assignmentsAmountCardUrl = "http://54.226.176.32:3001/api/assignments/count-card/";

    public baseUrl = "http://54.226.176.32:3001/api/";
    public clientsUrl = "http://54.226.176.32:3001/api/clients/";
    public clientsSearchUrl = "http://54.226.176.32:3001/api/clients/search/";
    public registerUrl = "http://54.226.176.32:3001/api/auth/signup";
    public loginUrl = "http://54.226.176.32:3001/api/auth/signin";
    public resetPasswordUrl = "http://54.226.176.32:3001/api/auth/reset-password/";
    // public socketUrl = "http://localhost:3000";
}
console.log(process.env.NODE_ENV)

const config = process.env.NODE_ENV === "development" ? new DevelopmentConfig() : new ProductionConfig();


export default config;