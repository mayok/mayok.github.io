import * as React from "react";

import Article from "./Article";

interface Items {
  name: string;
  items: Item[];
}
interface Item {
  title: string;
  info: string;
  link: string;
}

const Articles = () => {
  const prefix = "st-Grid";
  const labels: Items[] = [
    {
      name: "Project",
      items: [
        {
          title: "ゆゆ式",
          info: "github.com/mayok/yuyushiki",
          link: "https://github.com/mayok/yuyushiki"
        }
      ]
    },
    {
      name: "hoge",
      items: [
        {
          title: "hoge",
          info: "",
          link: ""
        }
      ]
    }
  ];
  return (
    <div className={`${prefix}_Wrapper`}>
      {labels.map((label: Items) => (
        <div className={prefix}>
          <h2 className={`${prefix}_MajorTitle`}>{label.name}</h2>

          {label.items.map((item: Item) => (
            <Article title={item.title} info={item.info} link={item.link} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Articles;
