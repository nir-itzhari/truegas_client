class Config {

}
class DevelopmentConfig extends Config {
    public usersUrl = "http://51.16.52.2:80/api/users/";
    public assignmentsUrl = "http://51.16.52.2:80/api/assignments/";
    public assignmentsChartUrl = "http://51.16.52.2:80/api/assignments/chart/";
    public assignmentsImagesUrl = "http://51.16.52.2:80/api/images/";
    public assignmentsAmountCardUrl = "http://51.16.52.2:80/api/assignments/count-card/";

    public baseUrl = "http://51.16.52.2:80/api/";
    public clientsUrl = "http://51.16.52.2:80/api/clients/";
    public clientsSearchUrl = "http://51.16.52.2:80/api/clients/search/";
    public registerUrl = "http://51.16.52.2:80/api/auth/signup";
    public loginUrl = "http://51.16.52.2:80/api/auth/signin";
    public resetPasswordUrl = "http://51.16.52.2:80/api/auth/reset-password/";
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

const config = process.env.NODE_ENV === "development" ? new DevelopmentConfig() : new ProductionConfig();


export default config;