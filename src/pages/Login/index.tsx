import React from "react";
import "./style.scss";
import FormLogin from "../../containers/FormLogin";
import Logo from "../../assets/img/logo.jpg"
import Button from "../../components/Button";
import Icon from "../../assets/img/Google.png"
import TextLine from "../../components/TextLine";


const Login = () => {
  return (
    
      <div className="flex01">
      <div className="spacing-login camp-login">
      <img className="mb-14" src={Logo} alt="logo da página" />
      <div className="mb-8">
      <h2 className="heading-01 text-blue mb-3-5">
      Olá, bem-vindo de volta!
      </h2>
      <p className="p-03 text-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam </p>
      </div>
      
     <TextLine  title="Ou login com email" />

      <Button className="flex flex-button mb-7"><img className="mr-3-5" src={Icon} alt="" />Login com o google</Button>
      <FormLogin />
      <div className="flex mt-3-5">
      <p className="text-gray ">Ainda não possui conta?</p>
      <a className="text-dark-gray text-bold" href="#">Clique aqui</a>
      </div>
   

      </div>
      <div className="img-page-login">
      </div>      
    </div>
   
  );
};
export default Login;
