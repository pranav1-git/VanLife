import {
  Link,
  useLoaderData,
  type LoaderFunctionArgs,
  Form,
  type ActionFunctionArgs,
  useActionData,
  redirect,
  useNavigation,
} from "react-router-dom";
import Button from "../Components/Button";
import Input from "../Components/Input";
import { loginUser } from "../../utils";

export default function Login() {
  const isSubmitting = useNavigation().state === "submitting";

  const data = useLoaderData();
  const actionData = useActionData();
  const msg = actionData || data?.message;
  // Important ==== in order to user action ----> you definitely need to use the new react router Form Component and make sure you give method prop
  return (
    <>
      <section className="login flex justify-center items-center p-7">
        <Form
          method="POST"
          className="loginBox w-full flex flex-col sm:px-15 md:px-30 lg:px-52"
        >
          <h1 className="text-3xl font-semibold mb-7 text-center">
            Sign in to your account
          </h1>
          {msg && (
            <div className="loginFeedbackBox text-center text-[#FF3838] text-sm mb-2">
              <p>{msg}</p>
            </div>
          )}
          <div className="inputBox flex flex-col mb-6">
            <Input type={"email"} placeholder="Email address" />
            <Input type={"password"} placeholder="Password" />
          </div>
          <Button disabled={isSubmitting && true}>
            {isSubmitting ? "Logging In........." : "Login In"}{" "}
          </Button>
          <p className="text-center mt-10 font-medium">
            <span>Don't have an account?</span>
            <Link className="text-button-orange" to={"/join"}>
              Create one now
            </Link>
          </p>
        </Form>
      </section>
    </>
  );
}

export function loader({ request }: LoaderFunctionArgs) {
  if (localStorage.getItem("loggedIn")) {
    throw redirect("/signout");
  }
  const message = new URL(request.url).searchParams.get("message");
  return { message };
}

// getting previous route pathname

export async function action({ request }: ActionFunctionArgs) {
  const redirectTo = new URL(request.url).searchParams.get("redirectTo") || "/host";

  const formData = await request.formData();
  if (formData.get("email") && formData.get("password")) {
    const data = {
      email: formData.get("email") || "",
      password: formData.get("password") || "",
    };
    const response = await loginUser(data, request.method);
    if (response && response.user) {
      localStorage.setItem("loggedIn", "true");
      const res = redirect(`${redirectTo}`);
      res.body = true;
      throw res;
    }
    // console.log(response);
    if (response && !response.ok) {
      return "Invalid Username Or Password";
    }
  }

  return null;
}
