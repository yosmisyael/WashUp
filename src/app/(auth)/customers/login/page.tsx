import { cookies } from 'next/headers';
import LoginForm from "@/components/organisms/LoginForm";
import {loginCustomer} from "@/app/(auth)/customers/login/actions";

const Login: React.FC = async () => {
    const cookieStore = await cookies();

    const flashMessage = cookieStore.get('flash_message')?.value;

    return <LoginForm flashMessage={flashMessage} action={loginCustomer} />;
};

export default Login;
