import * as React from "react";

import Article from "./Article";

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

    this.state = {};
  }

  componentDidMount() {
    fetch("/data.json")
      .then(response => response.json())
      .then(data => {
        console.log(data.data);
        this.setState({
          [data.data[0].name.toLowerCase()]: data.data[0].items,
          [data.data[1].name.toLowerCase()]: data.data[1].items
        });
      });
  }

  render() {
    const prefix = "st-Grid";
    const { s } = this.state;

    return (
      <div className={`${prefix}_Wrapper`}>
        <div className={prefix}>
          <h2 className={`${prefix}_MajorTitle`}>Projects</h2>
          {this.state["projects"] &&
            this.state["projects"].map((item: Item) => (
              <Article
                key={item.title}
                title={item.title}
                info={item.info}
                link={item.link}
              />
            ))}
        </div>

        <div className={prefix}>
          <h2 className={`${prefix}_MajorTitle`}>hoge</h2>
          {this.state["hoge"] &&
            this.state["hoge"].map((item: Item) => (
              <Article
                key={item.title}
                title={item.title}
                info={item.info}
                link={item.link}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default Articles;
