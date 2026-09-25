import { Controller, useForm } from "react-hook-form";
import Input from "../../components/formComponents/Input";
import Button from "../../components/Button";
import { postUser } from "./api/api";
import useLoading from "../../hooks/useLoading";
import useError from "../../hooks/useError";
import { Navigate, useNavigate } from "react-router";
export default function Login() {
  const { control, handleSubmit } = useForm();
  const { isLoading, setIsLoading } = useLoading();
  const { isError, setIsError } = useError();
  const navigate = useNavigate();

  //proses login
  const onSubmitLogin = async (data) => {
    try {
      setIsLoading(true);
      const response = await postUser("/users", data);
      const token = response.data.auth_token;

      localStorage.setItem("token", token);
      navigate("/dashboard");

    } catch (err) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-w-screen min-h-screen bg-[#D8CDBF] flex justify-center items-center">
      <div className="w-93 h-89 bg-[#FAF9F6] rounded-3xl flex flex-col gap-11 items-center p-10  overflow-hidden relative borde">
         <div className= "flex flex-col gap-3 justify-center items-center">
          <h1 className = "text-2xl tracking-widest font-bold ">FEUILLE</h1>
          <h1 className="text-2xl font-medium text-[#3B4D3E]">Login</h1>
          </div>

        <div className="flex flex-col gap-2">
        <h1 className={`text-sm text-center text-red-600 ${isError?"inline-block":'hidden'}`}>Username dan Password salah</h1>
        
        {/* form login */}
        <form
          className="flex flex-col gap-5"
          onSubmit={handleSubmit(onSubmitLogin)}
        >
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input {...field} width={"w-68"} placeholder={"masukan email"} />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => {
              return (
                <Input
                  {...field}
                  width={"w-68"}
                  placeholder={"masukan password"}
                  type={"password"}
                />
              );
            }}
          />
          <Button width={"w-68"} height={"h-9"} loading={isLoading}>
            Log In
          </Button>
        </form>
        </div>
        
        
      </div>
    </div>
  );
}
