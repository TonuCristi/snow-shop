import { useSearchParams } from "react-router-dom";
import { RemoveFiltersBtnStyled } from "./Filters.styled";

export default function RemoveFilterBtn() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick() {
    setSearchParams([]);
  }

  return (
    <RemoveFiltersBtnStyled onClick={handleClick}>
      Remove all filters
    </RemoveFiltersBtnStyled>
  );
}
