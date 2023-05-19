import { useEffect, useState } from "react";
import styles from "./RepoItems.module.css";

const RepoItems = () => {
  const [userRepo, setUserRepo] = useState([]);

  const getRepos = async () => {
    const res = await fetch("https://api.github.com/users/sami-ul-haq/repos");
    const data = await res.json();
    console.log(data);
    setUserRepo(data);
  };

  useEffect(() => {
    getRepos();
  }, []);

  return (
    <div className={styles.repoList}>
      {userRepo &&
        userRepo.map((repoitem) => (
          <div className={styles.repoItem} key={repoitem.id}>
            <div className={styles.repoTitle}>
              <a href={repoitem.html_url} target="_blank" className={styles.repoTitleA}>
                <h3>{repoitem.name}</h3>
              </a>
            </div>
            <div className={styles.repoDesc}>
              <p>
                {repoitem.description
                  ? repoitem.description
                  : "no desciption for this repo"}
              </p>
            </div>
            <div className={styles.repoMore}>{repoitem.language ? repoitem.language : ""}</div>
          </div>
        ))}
    </div>
  );
};

export default RepoItems;
