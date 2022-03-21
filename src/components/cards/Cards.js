import "./Cards.css";
import { data } from "../../helpers/data.js";
console.log(data);

const Cards = () => {
  return (
    <div className="container">
      {data.map((item) => {
        return (
          <div className="card" key={item.id}>
            <h3 className="card-title">{item.title}</h3>
            <img class='image' src={item.image} alt="" />
            <div className="description">
              <p className="card-d">{item.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

   

export default Cards;
