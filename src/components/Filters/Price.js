import { useSearchParams } from "react-router-dom";
import { Container, Form, Input, InputWrapper, Label } from "./Filters.styled";
import { useRef } from "react";

export default function Price({ price: { title, data } }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const priceRef = useRef(
    !!searchParams.get(title) ? searchParams.get(title).split("_") : []
  );

  function handleChange(e) {
    const isChecked = e.target.checked;
    const value = e.target.value;

    if (isChecked) {
      priceRef.current = [...priceRef.current, value];
    } else {
      priceRef.current = priceRef.current.filter((price) => price !== value);
    }

    if (!!priceRef.current.length) {
      searchParams.set(title, priceRef.current.join("_"));
    } else {
      searchParams.delete(title);
    }

    setSearchParams(searchParams);

    console.log(priceRef.current.join("_"));
  }

  return (
    <Container>
      {title.slice(0, 1).toUpperCase() + title.slice(1)}
      <Form>
        {data.map((priceRange, i, prices) => {
          const [from, to] = priceRange.split("-");
          const params = searchParams.get(title);

          return (
            <InputWrapper key={priceRange}>
              <Input
                type="checkbox"
                value={priceRange}
                checked={
                  !!params
                    ? params.split("_").some((price) => price === priceRange)
                    : false
                }
                onChange={handleChange}
              />
              <Label>
                {i === 0 && `Under ${to}`}
                {i > 0 && i < prices.length - 1 && `${from} - ${to}`}
                {i === prices.length - 1 && `Over ${from}`}
              </Label>
            </InputWrapper>
          );
        })}
      </Form>
    </Container>
  );
}
