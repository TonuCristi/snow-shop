import { useSearchParams } from "react-router-dom";
import { Form, Container, Input, InputWrapper, Label } from "./Filters.styled";

export default function Filter({ title, data }) {
  const [searchParams, setSearchPrams] = useSearchParams();

  function handleChange(e) {
    if (e.target.checked) {
      setSearchPrams((params) => {
        params.append(title, e.target.value);
        return params;
      });
    }

    if (!e.target.checked) {
      searchParams.delete(title, e.target.value);
      setSearchPrams(searchParams);
    }
  }

  return (
    <Container>
      {title.slice(0, 1).toUpperCase() + title.slice(1)}
      <Form>
        {data.map((priceRange) => {
          const [key, value] = Object.entries(priceRange)[0];

          return (
            <InputWrapper key={key}>
              <Input
                type="checkbox"
                value={key}
                checked={searchParams.has(title, key)}
                onChange={handleChange}
              />
              <Label>{value}</Label>
            </InputWrapper>
          );
        })}
      </Form>
    </Container>
  );
}
