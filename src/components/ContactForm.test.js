import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";
import { act } from "react-dom/test-utils";

test("Rendering Contact Form", async () => {
  render(<ContactForm />);

  const firstNameInpput = screen.getByLabelText(/first name/i);
  const lastNameInpput = screen.getByLabelText(/last name/i);
  const emailInpput = screen.getByLabelText(/email/i);
  const messageInpput = screen.getByLabelText(/message/i);
  act(() => {
    fireEvent.change(firstNameInpput, { target: { value: "Victor" } });
    fireEvent.change(lastNameInpput, { target: { value: "dronov" } });
    fireEvent.change(emailInpput, {
      target: { value: "Victor@victor.gmail.com" },
    });
    fireEvent.change(messageInpput, { target: { value: "Victor was here" } });
  });

  act(() => {
    const button = screen.queryByText(/submit/i);

    fireEvent.click(button);
    console.log(button)
  });

  // const newPerson = screen.findByText(/Victor/i)
  // console.log(newPerson)
  act(() => {
    expect(screen.findByText(/victor/i));
    expect(screen.findByText(/dronov/i));
    expect(screen.findByText(/Victor@victor.gmail.com/i));
    expect(screen.findByText(/Victor was here/i));
  });
});
