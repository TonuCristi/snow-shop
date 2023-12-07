import { useSearchParams } from "react-router-dom";
import { Container, Form, Input, InputWrapper, Label } from "./Filters.styled";

export default function Disponibility({ disponibility }) {
  const [searchParams, setSearchPrams] = useSearchParams();

  const { title, data } = disponibility;

  function handleChange(e) {
    if (e.target.checked) {
      setSearchPrams((params) => {
        params.append(e.target.value, true);
        return params;
      });
    }

    if (!e.target.checked) {
      searchParams.delete(e.target.value, true);
      setSearchPrams(searchParams);
    }
  }

  return (
    <Container>
      {title.slice(0, 1).toUpperCase() + title.slice(1)}
      <Form>
        {data.map((disp) => {
          const [key, value] = Object.entries(disp)[0];

          return (
            <InputWrapper key={key}>
              <Input
                type="checkbox"
                value={key}
                checked={searchParams.has(key, true)}
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
