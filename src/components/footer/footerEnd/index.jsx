import React from "react";
import "./footerEnd.scss";

const links = [
  { name: "Contact", url: "https://www.handy.com/apply" },
  { name: "Privacy", url: "https://www.handy.com/apply" },
  { name: "CA Pre-Collection Notice", url: "https://www.handy.com/apply" },
  { name: "Cookies", url: "https://www.handy.com/apply" },
  { name: "Terms", url: "https://www.handy.com/apply" },
  { name: "Cancellation Policy", url: "https://www.handy.com/apply" }
];
export default function FooterEnd() {
  return (
    <div className="end">
      <div className="end-left">
        <ul className="end-ul">
          {links.map((link, i) => (
            <li key={i}>
              <a href={link.url}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="end-right">
        <h4>2020 Handy. All rights reserved.</h4>
      </div>
    </div>
  );
}
