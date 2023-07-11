import { createContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { schema } from "../components/form/schema";
import { zodResolver } from "@hookform/resolvers/zod";

export const HomeContext = createContext();

// eslint-disable-next-line react/prop-types
export const HomeProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const navigate = useNavigate();

  const submit = (formData) => {
    setUser(formData);
    navigate("/success");
  };


  return(
    <HomeContext.Provider 
    value={
      { user, setUser, register, handleSubmit, submit, errors }}>
        {children}
      </HomeContext.Provider>
    )
  }
  ;
