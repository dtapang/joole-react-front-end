import axios from "axios";

const API_URL = "http://localhost:8070/auth/";

class AuthService {
    login(username, password, myCancelToken) {
        return axios
            .post(API_URL + "login", { username, password },{
                cancelToken: myCancelToken,
            })
            .then((response) => {

                if (response.data[0] && response.data[1] && response.data[2]) {

                    let user = {
                        username: response.data[0],
                        accessToken: response.data[1],
                        roles: response.data[2]
                    };


                    localStorage.setItem("user", JSON.stringify(user));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
        localStorage.removeItem("compareSet");
    }

    register(username, password, myCancelToken) {
        return axios.post(API_URL + "signup", {
            username,
            password,
        }, {
            cancelToken: myCancelToken,
        });
    }
}

export default new AuthService();
