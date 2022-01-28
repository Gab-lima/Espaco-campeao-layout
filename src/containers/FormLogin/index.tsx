import React, { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import "./style.scss";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FormLoginData from "../../types/FormLogin.interface";
import ServiceLogin from "../../services/requests/login";
import Email from "../../assets/img/email.jpg"
import Cadeado from "../../assets/img/cadeado.jpg"
import InputPassword from "../../components/InputPassword";


const FormLogin = () => {
  const [valueForm, setValueForm] = useState({});

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email é obrigatório").email("E-mail inválido"),
    password: Yup.string().required("Senha é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormLoginData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: FormLoginData) => {
    ServiceLogin.login(data)
      .then(() => {
        return alert("teste");
      })
      .catch(() => {
        return alert("teste");
      });
  };

  const changeForm = (target: HTMLInputElement) => {
    setValueForm({ ...getValues(), [target.name]: target.value });
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
     <div className="mb-10">

      <Input
        register={register("email")}
        error={errors.email?.message}
        name="email"
        label="E-mail"
        type="email"
        placeholder="maria@email.com"
        onChange={(e:any) => changeForm(e.target)}
        icon={Email}
        className=""
      />
     </div>

      <InputPassword
        register={register("password")}
        error={errors.password?.message}
        name="password"
        label="Senha"
        placeholder="* * * * * * *"
        onChange={(e:any) => changeForm(e.target)}
        icon={Cadeado}
      />
     <a className="text-gray flex justify-end mb-16" href="#">Esqueci a senha</a>
      <Button
        type="submit"
        className="md"
        disabled={!validationSchema.isValidSync(valueForm)}
      >
        Entrar
      </Button >
    </form>
  );
};

export default FormLogin;
