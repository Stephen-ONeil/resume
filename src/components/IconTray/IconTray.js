import React from "react";

import styles from "./IconTray.module.scss";

const DownloadPDF = () => (
  <a href="stephen-oneil-resume.pdf" download>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="72"
      height="72"
      viewBox="0 0 72 72"
      transform="scale(0.8) rotate(90)"
    >
      <title>Download as PDF</title>
      <polyline
        transform="scale(0.85) translate(0, 5.5)"
        points="66.5 36 5.5 72 21.5 36 5.5 0 66.5 36"
      />
      <rect height="62.28571" width="7.14286" y="4.85714" x="63.57143" />
    </svg>
  </a>
);

const GitHubLink = () => (
  <a
    href="https://github.com/Stephen-ONeil/resume"
    rel="noopener noreferrer"
    target="_blank"
  >
    <img
      src={"/GitHub-Mark-32px.png"}
      title={"View site source on GitHub"}
      alt={"GitHub's logo"}
      style={{
        width: "80%",
        paddingLeft: "10%",
      }}
    />
  </a>
);

const IconTray = () => (
  <div className={styles["icon-tray"]}>
    <DownloadPDF />
    <GitHubLink />
  </div>
);

export { IconTray };
