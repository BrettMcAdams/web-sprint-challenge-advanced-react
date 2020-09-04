import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)

    const header = screen.getByText(/checkout form/i)

    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)

    const fnInput = screen.getByLabelText(/first name:/i)
    const lnInput = screen.getByLabelText(/last name:/i)
    const addressInput = screen.getByLabelText(/address:/i)
    const cityInput = screen.getByLabelText(/city:/i)
    const stateInput = screen.getByLabelText(/state:/i)
    const zipInput = screen.getByLabelText(/zip:/i)

    fireEvent.change(fnInput, { target: { value: 'Brett' } });
    fireEvent.change(lnInput, { target: { value: 'McAdams' } });
    fireEvent.change(addressInput, { target: { value: '222 Coding Dr' } });
    fireEvent.change(cityInput, { target: { value: 'Orlando' } });
    fireEvent.change(stateInput, { target: { value: 'Fl' } });
    fireEvent.change(zipInput, { target: { value: '32804' } });

    const checkoutButton = screen.getByText(/checkout here/i);
    fireEvent.click(checkoutButton);

    const plantOrder = screen.getByText(/brett/i);
    expect(plantOrder).toBeInTheDocument();
});
