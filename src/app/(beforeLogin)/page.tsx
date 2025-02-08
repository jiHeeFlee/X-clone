import styles from '@/app/page.module.css';
import Image from 'next/image';
import jLogo from '../../../public/logo.svg';
import Link from 'next/link';

export default function Home(){

    return (
        <>
            <div className={styles.left}>
                <Image src={jLogo} alt='logo' style={{width:'300px', height:'300px'}}/>
            </div>
            <div className={styles.right}>
                <h1>지금 일어나고 있는 일_비포로그인</h1>
                <h2>지금 가입하세요.</h2>
                <Link href='/i/flow/signup' className={styles.signup}>계정만들기</Link>
                <h3>이미 트위터에 가입하셨나요?</h3>
                <Link href='/i/flow/login' className={styles.login}>로그인</Link>
            </div>
        </>
    )
}