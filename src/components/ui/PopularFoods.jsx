import { useEffect } from "react";
import { useState } from "react";

const PopularFoods = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("./foods.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return (
    <div>
      {/* section title */}
      <div>
        <p>Crispy, Every Bite Taste</p>
        <h3>POPULAR FOOD ITEMS</h3>
      </div>
      <div>
        {foods.map((food) => (
          <div key={food.id}>
            <img src={food.image} alt="" />
            <h5>{food.title}</h5>
            <p>{food.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularFoods;
