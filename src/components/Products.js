import React, { Component } from "react";
import Header from "../components/Header";
import RightGrid from "./RightGrid";
import LeftGrid from "./LeftGrid";
import img1 from '../images/img1.jpg';

const info = [
  {
    id: 1,
    name: "Finished Feed Transport System",
    image: img1,
    body:
      "Finished feed is transport to each shed from the feed godown by different mode of transportation. Depending upon the carraying of feed and delivery at the shed the vehicles are pre-fabricated accordingly.",
  },
  {
    id: 2,
    name: "Finished Feed Transport System",
    image: img1,
    body:
      "Finished feed is transport to each shed from the feed godown by different mode of transportation. Depending upon the carraying of feed and delivery at the shed the vehicles are pre-fabricated accordingly.",
  },
  {
    id: 3,
    name: "Finished Feed Transport System",
    image: img1,
    body:
      "Finished feed is transport to each shed from the feed godown by different mode of transportation. Depending upon the carraying of feed and delivery at the shed the vehicles are pre-fabricated accordingly.",
  },
  {
    id: 4,
    name: "Finished Feed Transport System",
    image: img1,
    body:
      "Finished feed is transport to each shed from the feed godown by different mode of transportation. Depending upon the carraying of feed and delivery at the shed the vehicles are pre-fabricated accordingly.",
  },
  {
    id: 5,
    name: "Finished Feed Transport System",
    image: img1,
    body:
      "Finished feed is transport to each shed from the feed godown by different mode of transportation. Depending upon the carraying of feed and delivery at the shed the vehicles are pre-fabricated accordingly.",
  },
  {
    id: 6,
    name: "Finished Feed Transport System",
    image: img1,
    body:
      "Finished feed is transport to each shed from the feed godown by different mode of transportation. Depending upon the carraying of feed and delivery at the shed the vehicles are pre-fabricated accordingly.",
  }
];

class Products extends Component {

    render() {
        return (
        <div>
            <Header name="Our Products"/>
            {info.map((post) => {
            if (post.id % 2 == 0) {
                return (
                    <div>
                        <hr />
                        <LeftGrid
                        name={post.name}
                        image={post.image}
                        body={post.body}
                        />
                    </div>
                );
            } else {
                return (
                    <div>
                        <hr />
                        <RightGrid
                        name={post.name}
                        image={post.image}
                        body={post.body}
                        />
                    </div>
                );
            }
            })}
        </div>
        );
  }
}

export default Products;