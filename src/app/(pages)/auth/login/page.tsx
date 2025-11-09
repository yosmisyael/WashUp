import { cookies } from 'next/headers';
import CustomerLoginForm from "@/components/organisms/CustomerLoginForm";

const Login: React.FC = async () => {
    const cookieStore = await cookies();

    const flashMessage = cookieStore.get('flash_message')?.value;

    return <CustomerLoginForm flashMessage={flashMessage} />;
};

export default Login;
