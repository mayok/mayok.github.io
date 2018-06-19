import * as React from "react";

interface Props {
  title: string;
  info: string;
  link: string;
}

const Article = ({ title, info, link }: Props) => {
  const prefix = "st-Grid";

  return (
    <div className={`${prefix}_Inner`}>
      <a className={`${prefix}_Link`} href={link}>
        <div className={`${prefix}_Unit`}>
          <h3 className={`${prefix}_Title`}>{title}</h3>
        </div>
        <div className={`${prefix}_Info`}>{info}</div>
      </a>
    </div>
  );
};

export default Article;
