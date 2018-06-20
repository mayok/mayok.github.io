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

interface State {
  [key: string]: Item[];
}

class Articles extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);

    this.setState({});
  }

  componentDidMount() {
    fetch("/data.json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          [data.data[0].name]: data.data[0].items,
          [data.data[1].name]: data.data[1].items
        });
      });
  }

  render() {
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
        {this.state["project"].map((item: Item) => (
          <Article
            key={item.title}
            title={item.title}
            info={item.info}
            link={item.link}
          />
        ))}
        {/* {labels.map((label: Items) => (
          <div key={label.name.toLowerCase()} className={prefix}>
            <h2 className={`${prefix}_MajorTitle`}>{label.name}</h2>

            {label.items.map((item: Item) => (
              <Article
                key={item.title}
                title={item.title}
                info={item.info}
                link={item.link}
              />
            ))}
          </div>
        ))} */}
      </div>
    );
  }
}

export default Articles;
