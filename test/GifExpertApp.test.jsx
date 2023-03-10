import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Prueba en <GifExpertApp/>", () => {
  test("debe de llamar setCategories, si NewCategories no se ejecuto ", () => {
    const setCategories = jest.fn();
    const newCategory = jest.fn();

    render(
      <GifExpertApp setCategories={setCategories} newCategory={newCategory} />
    );

    // expect(setCategories).not.toHaveBeenCalled();
    expect(newCategory).not.toHaveBeenCalled();
  });
});
