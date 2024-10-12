import { useState } from "react";
import initialGoods from "./goods.json";

export const App = () => {
  const [goods, setGoods] = useState(initialGoods);

  function moveUp(good) {
    setGoods((currentGoods) => {
      const copy = [...currentGoods];
      const index = copy.indexOf(good);

      if (index < 1) {
        return currentGoods;
      }

      copy[index] = copy[index - 1];
      copy[index - 1] = good;

      return copy;
    });
  }

  function moveDown(good) {
    const copy = [...goods];
    const index = copy.indexOf(good);

    if (index >= copy.length - 1) {
      return;
    }

    // cut out two elements and insert them in reverse order
    copy.splice(index, 2, copy[index + 1], copy[index]);

    setGoods(copy);
  }

  return (
    <div className="GoodList">
      {goods.map((good) => (
        <div key={good.id} className="GoodCard" style={{ color: good.color }}>
          <button onClick={() => moveUp(good)}>▲</button>
          <button onClick={() => moveDown(good)}>▼</button>
          <button
            onClick={() => {
              moveUp(good);
              moveUp(good);
              moveUp(good);
            }}
          >
            ▲▲▲
          </button>

          {good.name}
        </div>
      ))}
    </div>
  );
};
export default App;
