import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas en <AddCategory/>", () => {
  test("debe de cambiar el valor de la caja de texto", () => {
    // Crear sujeto de pruebas
    render(<AddCategory onNewCategory={() => {}} />);
    // Extraemos el input que tiene relacion directa con screen.getByRole
    const input = screen.getByRole("textbox");

    // Disparamos el evento
    fireEvent.input(input, { target: { value: "Saitama" } });

    // lo que esperamos que suceda despues del Evento
    expect(input.value).toBe("Saitama");
  });

  test("debe de llamar onNewCategory si  input tiene un valor", () => {
    const inputValue = "Saitama";
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    // screen.debug();
    expect(input.value).toBe("");

    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test("no debe de llamar el onNewCategory si el input esta vacio", () => {
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);
    const form = screen.getByRole("form");
    fireEvent.submit(form);

    screen.debug();

    expect(onNewCategory).not.toHaveBeenCalled();
    // expect(onNewCategory).toHaveBeenCalledTimes(0);
  });
});
