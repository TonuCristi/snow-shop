import { useSearchParams } from "react-router-dom";

import { Container, Option, Select } from "./Filters.styled";

export default function Sort({ dispatch, sort }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleChange(e) {
    setSearchParams((params) => {
      const sortParams = params.getAll("sort");
      const lastSort = sortParams[sortParams.length - 1];
      params.delete("sort", params.delete(sort, lastSort));
      params.append("sort", e.target.value);
      return params;
    });
  }

  return (
    <Container>
      Sort
      <Select
        value={
          searchParams.get("sort") === null ? "" : searchParams.get("sort")
        }
        onChange={handleChange}
      >
        <Option value="recommended">Recommended</Option>
        <Option value="ascendant">Ascendant</Option>
        <Option value="descendant">Descendant</Option>
      </Select>
    </Container>
  );
}
