import { redirect } from "next/navigation";

export default function Login() {
    redirect('/i/flow/login'); // 서버에서 즉시 리디렉트. 서버 컴포넌트임.
}