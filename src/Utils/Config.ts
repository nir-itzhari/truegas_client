class Config {

}
class DevelopmentConfig extends Config {
    public isDevelopment = true;
    public usersUrl = "http://192.168.1.23:3001/api/users/";
    public assignmentsUrl = "http://192.168.1.23:3001/api/assignments";
    public assignmentsImagesUrl = "http://192.168.1.23:3001/api/images/";

    public baseUrl = "http://192.168.1.23:3001/api/";
    public clientsUrl = "http://192.168.1.23:3001/api/clients/";
    public clientsSearchUrl = "http://192.168.1.23:3001/api/clients/search/";
    public registerUrl = "http://192.168.1.23:3001/api/auth/signup";
    public loginUrl = "http://192.168.1.23:3001/api/auth/signin";
    // public assignmentsImageUrl = "http://192.168.14.4:3000/assets/images/";
    // public socketUrl = "http://localhost:3000";
}

class ProductionConfig extends Config {
    public usersUrl = "http://192.168.1.23:3001/api/users/";
    public assignmentsUrl = "http://192.168.1.23:3001/api/assignments";
    public assignmentsImagesUrl = "http://192.168.1.23:3001/api/images/";

    public baseUrl = "http://192.168.1.23:3001/api/";
    public clientsUrl = "http://192.168.1.23:3001/api/clients/";
    public clientsSearchUrl = "http://192.168.1.23:3001/api/clients/search/";
    public registerUrl = "http://192.168.1.23:3001/api/auth/signup";
    public loginUrl = "http://192.168.1.23:3001/api/auth/signin";
    // public assignmentsImageUrl = "http://192.168.14.4:3000/assets/images/";
    // public socketUrl = "http://localhost:3000";
}


const config = process.env.NODE_ENV === "development" ? new DevelopmentConfig() : new ProductionConfig();


export default config;