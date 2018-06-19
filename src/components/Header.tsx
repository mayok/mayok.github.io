import * as React from "react";

const Header = () => {
  const prefix = "tp-Logo";
  const img_source = "https://github.com/mayok.png";

  return (
    <div className={prefix}>
      <div className={`${prefix}_Inner`}>
        <hr className={`${prefix}_Divider`} />
        <div className={`${prefix}_AvatarContainer`}>
          <img className={`${prefix}_Avatar`} src={img_source} alt="" />
        </div>
        <span className={`${prefix}_Label`}>Naohiro Iwamoto</span>
      </div>
    </div>
  );
};

export default Header;
