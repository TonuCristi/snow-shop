import Sort from "./Sort";
import RemoveFilterBtn from "./RemoveFiltersBtn";
import Filter from "./Filter";
import Disponibility from "./Disponibility";
import Price from "./Price";
import { FiltersStyled } from "./Filters.styled";

export const filters = [
  {
    title: "category",
    data: [
      { christmasTree: "Christmas tree" },
      { socks: "Socks" },
      { candles: "Candles" },
      { lights: "Lights" },
    ],
  },
];

export const disponibility = {
  title: "disponibility",
  data: [
    { stock: "In stock" },
    { promotion: "Promotion" },
    { resealed: "Resealed" },
  ],
};

export const price = {
  title: "price",
  data: ["0-100", "100-200", "200-300", "300-400", "400-500", "500-1000"],
};

export default function Filters() {
  return (
    <FiltersStyled>
      <RemoveFilterBtn />
      <Sort />
      <Disponibility disponibility={disponibility} />
      <Price price={price} />
      {filters.map(({ title, data }) => (
        <Filter key={title} title={title} data={data} />
      ))}
    </FiltersStyled>
  );
}
