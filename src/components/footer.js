import { Divider } from "@mui/material";
import GitHubButton from "react-github-btn";

let visit = 1000;
export default function Footer({ visitCount }) {
  return (
    <div
      style={{
        height: "0.5em",
        color: "gray",
        textAlign: "center",
        width: "100%",
        fontSize: "10px",
        position: "absolute",
        bottom: 0,
      }}
    >
      <Divider sx={{ mb: 1 }} />
      <span>All information displayed belongs to NIT Hamirpur Portal</span>
      <br />
      <span>Project created by Tusshar Paul</span>
      <br />
      <GitHubButton
        href="https://github.com/tpstark137/NITH-Syllabus-Portal.git"
        data-icon="octicon-star"
        data-show-count="true"
        aria-label="tpstark137/NITH-Syllabus-Portal.git"
      >
        Star this project
      </GitHubButton>
      <div
        id="visits"
        style={{ fontFamily: "monospace" }}
      >{`This site has been visited ${visit}+ times`}</div>
    </div>
  );
}
