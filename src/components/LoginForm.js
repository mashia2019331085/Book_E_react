import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.css";
const LoginForm = () => {
  const navigate = useNavigate();

  const onLoginButtonClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const onDontHaveAnClick = useCallback(() => {
    navigate("/sign-up-page");
  }, [navigate]);

  return (
    <form className={styles.loginSection} method="post">
      <img
        className={styles.loginSectionChild}
        alt=""
        src="/rectangle-15@2x.png"
      />
      <button className={styles.loginButton} onClick={onLoginButtonClick}>
        <div className={styles.login}>Login</div>
      </button>
      <h2 className={styles.login1}>Login</h2>
      <section className={styles.passwordInput} id="password_input">
        <img className={styles.passwordInputChild} alt="" src="/line-1.svg" />
        <div className={styles.frame}>
          <div className={styles.password}>Password</div>
          <input
            className={styles.password1}
            type="password"
            placeholder="Password"
            required
            id="password"
          />
        </div>
      </section>
      <div className={styles.emailInput} id="email_input">
        <img className={styles.emailInputChild} alt="" src="/line-11.svg" />
        <div className={styles.frame1}>
          <div className={styles.email}>Email</div>
          <input
            className={styles.email1}
            type="email"
            placeholder="Email"
            required
            id="email"
          />
        </div>
      </div>
      <a className={styles.dontHaveAn} onClick={onDontHaveAnClick}>
        Don’t have an account? Sign Up here.
      </a>
    </form>
  );
};

export default LoginForm;
