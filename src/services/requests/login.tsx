import http from "../index";
import FormLoginData from "../../types/FormLogin.interface"

class LoginService {
  login(data: FormLoginData) {
    return http.post("/login", data);
  }
}

export default new LoginService();