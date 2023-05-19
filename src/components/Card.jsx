import styles from "./Card.module.css";
import Logo from "../assets/github-logo.png";
import { useEffect, useState } from "react";
import RepoItems from "./RepoItems";

const Card = () => {
  const [user, setUser] = useState([]);

  const getUsers = async () => {
    const res = await fetch("https://api.github.com/users/sami-ul-haq");
    const data = await res.json();
    console.log(data);
    setUser(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className={styles.card}>
      <header className={styles.header}>
        <img src={Logo} alt="github-logo" className={styles.image} />
      </header>

      <div className={styles.cardDetails}>
        <div className={styles.main}>
          <div className={styles.profile}>
            <img
              src={user?.avatar_url}
              alt="profile"
              className={styles.profilepic}
            />
          </div>
          <div className={styles.profileInfo}>
            <h1 className={styles.profileTitle}>{user?.name}</h1>
            <p className={styles.follow}>
              Followers: {user?.followers} | Following: {user?.following}
            </p>
            <a href={user?.html_url} target="_blank">
              <button className={styles.btn}>View Profile</button>
            </a>
          </div>
        </div>

        <div className={styles.repos}>
          <h2 className={styles.repoHeading}>Repositories</h2>
          <RepoItems />
          <div className={styles.reposBtn}>
            <a href={user?.repos_url} target="_blank">
              <button className={styles.btn}>View All Repos</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
