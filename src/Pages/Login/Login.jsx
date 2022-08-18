import { useForm } from "react-hook-form";
import { useLoginstore } from "./useLoginstore";

const Login = () => {
  const { setLoggedIn } = useLoginstore((store) => ({
    setLoggedIn: store.setLoggedIn,
  }));

  const { register, handleSubmit } = useForm();

  const onSubmit = async (submitdata) => {
    const URL = "https://api.mediehuset.net/token";

    try {
      fetch(URL, {
        body: JSON.stringify(submitdata),
        method: "POST",
        headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((data) => sessionStorage.setItem("token", JSON.stringify(data)), setLoggedIn());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("username", { required: "Brugernavn er påkrævet" })} type="text" autoComplete="username" placeholder="brugernavn" />

      <input
        {...register("password", { required: "Password er et påkrævet felt" })}
        type="password"
        autoComplete="password"
        placeholder="Dit password"
      />
      <button>login</button>
    </form>
  );
};

export default Login;
