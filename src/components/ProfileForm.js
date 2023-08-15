import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProfileForm.module.css";
const ProfileForm = () => {
  const navigate = useNavigate();

  const onEditButtonClick = useCallback(() => {
    navigate("/edit-profile");
  }, [navigate]);

  return (
    <div className={styles.infoSection}>
      <button className={styles.editButton} onClick={onEditButtonClick}>
        <div className={styles.editProfile}>Edit Profile</div>
      </button>
      <div className={styles.frame}>
        <div className={styles.frame1}>
          <div className={styles.phone} id="phone_no">
            <div className={styles.phoneNumber}>Phone Number:</div>
            <div className={styles.phoneNo}>#phone_no</div>
          </div>
          <div className={styles.address} id="address">
            <div className={styles.address1}>Address :</div>
            <div className={styles.adress}>#adress</div>
          </div>
          <div className={styles.email}>
            <div className={styles.email1}>Email:</div>
            <div className={styles.email2}>#email</div>
          </div>
          <div className={styles.rating}>
            <div className={styles.rating1}>Rating</div>
            <div className={styles.rating1}>#Rating</div>
          </div>
        </div>
        <img className={styles.frameChild} alt="" src="/rectangle-71@2x.png" />
      </div>
    </div>
  );
};

export default ProfileForm;
