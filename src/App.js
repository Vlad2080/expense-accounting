import React, { useState } from "react";
import NewCost from "./components/NewCost/NewCost";
import Costs from "./components/Costs/Costs";

const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2023, 0, 15), // Январь
    description: "Laptop",
    amount: 899,
  },
  {
    id: "c2",
    date: new Date(2023, 2, 12),
    description: "Table",
    amount: 999,
  },
  {
    id: "c3",
    date: new Date(2023, 5, 10), // Июнь
    description: "Bicycle",
    amount: 250,
  },
  {
    id: "c4",
    date: new Date(2023, 8, 23), // Сентябрь
    description: "Smartphone",
    amount: 699,
  },
  {
    id: "c5",
    date: new Date(2023, 11, 5), // Декабрь
    description: "Winter Jacket",
    amount: 120,
  },
  {
    id: "c6",
    date: new Date(2024, 0, 10), // Март
    description: "Headphones",
    amount: 150,
  },
  {
    id: "c7",
    date: new Date(2024, 1, 20), // Июнь
    description: "Tablet",
    amount: 450,
  },
  {
    id: "c8",
    date: new Date(2024, 2, 30), // Ноябрь
    description: "Camera",
    amount: 850,
  },
  {
    id: "c9",
    date: new Date(2024, 3, 25),
    description: "Laptop",
    amount: 1254,
  },
  {
    id: "c10",
    date: new Date(2024, 4, 1),
    description: "Shoes",
    amount: 49,
  },
];

const App = () => {
  const [costs, setCosts] = useState(INITIAL_COSTS);


  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };

  return (
    <div>
      {/* added */}
      <h2>Expense Tracker</h2>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
};

export default App;










