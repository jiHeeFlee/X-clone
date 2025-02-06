import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import jLogo from '../../public/logo.svg';

export default function Home() {
  return (
    <div>
      <div className={styles.left}>
        <Image src={jLogo} alt="logo" />
      </div>
      <div>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <Link href='/i/flow/signup'/>
      </div>
    </div>
  );
}
