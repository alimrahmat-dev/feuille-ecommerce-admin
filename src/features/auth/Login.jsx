import { Controller, useForm } from "react-hook-form";
import Input from "../../components/formComponents/Input";
import Button from "../../components/formComponents/Button";
import { postUser } from "./api/api";
export default function Login() {
  const { control, handleSubmit } = useForm();

  const onSubmitLogin = async (data) => {

    try {
      const response = await postUser("", data);
      return response;
    } catch (err) {
      err.message;
    }
  };

  return (
    <div className="min-w-screen min-h-screen bg-[#D8CDBF] flex justify-center items-center">
      <div className="w-93 h-89 bg-[#FAF9F6] rounded-3xl flex flex-col gap-11 items-center justify-center overflow-hidden ">
        <h1 className="text-2xl text-[#3B4D3E]">Log In</h1>
        <form
          className="flex flex-col gap-5"
          onSubmit={handleSubmit(onSubmitLogin)}
        >
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                width={"w-68"}
                placeholder={"masukan username"}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => {
              console.log(field);

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
          <Button width={"w-68"} height={"h-9"}>
            {" "}
            Log In{" "}
          </Button>
        </form>
      </div>
    </div>
  );
}
