import Sort from "./Sort";
import { FiltersStyled } from "./Filters.styled";
import RemoveFilterBtn from "./RemoveFiltersBtn";
import Filter from "./Filter";

const filters = [
  {
    title: "disponibility",
    data: [
      { inStock: "In stock" },
      { promotion: "Promotion" },
      { resealed: "Resealed" },
      { noStock: "No stock" },
    ],
  },
  {
    title: "category",
    data: [
      { christmasTree: "Christmas tree" },
      { socks: "Socks" },
      { candles: "Candles" },
      { lights: "Lights" },
    ],
  },
  {
    title: "price",
    data: [
      { under100: "Under 100" },
      { from100To200: "100 - 200" },
      { from200To300: "200 - 300" },
      { from300To400: "300 - 400" },
      { from400To500: "400 - 500" },
      { over500: "Over 500" },
    ],
  },
];

export default function Filters() {
  return (
    <FiltersStyled>
      <RemoveFilterBtn />
      <Sort />
      {filters.map(({ title, data }) => (
        <Filter key={title} title={title} data={data} />
      ))}
    </FiltersStyled>
  );
}
