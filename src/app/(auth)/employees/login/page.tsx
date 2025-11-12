import { cookies } from 'next/headers';
import LoginForm from "@/components/organisms/LoginForm";
import {loginEmployee} from "@/app/(auth)/employees/login/actions";

const Login: React.FC = async () => {
    const cookieStore = await cookies();

    const flashMessage = cookieStore.get('flash_message')?.value;

    return <LoginForm
        flashMessage={flashMessage}
        formTitle={"Internal Login Portal"}
        formDesc={"Login to WashUp internal system"}
        action={loginEmployee}
    />;
};

export default Login;
