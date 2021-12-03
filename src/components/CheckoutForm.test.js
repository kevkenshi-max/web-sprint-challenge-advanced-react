import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>);
});

test("shows success message on submit with form details", async () => {
    render(<CheckoutForm/>);

    const firstNameField = screen.getByLabelText(/first name:/i);
    const lastNameField = screen.getByLabelText(/last name:/i);
    const addressField = screen.getByLabelText(/address:/i);
    const cityField = screen.getByLabelText(/city:/i);
    const stateField = screen.getByLabelText(/state/i);
    const zipField = screen.getByLabelText(/zip/i);

    userEvent.type(firstNameField, "kevin");
    userEvent.type(lastNameField, "lee");
    userEvent.type(addressField, "123 Abc Ave");
    userEvent.type(cityField, "Los Angeles");
    userEvent.type(stateField, "CA");
    userEvent.type(zipField, "90210");

    const button = screen.getByRole("button");
    userEvent.click(button);

    await waitFor(() => {
        const firstnameDisplay = screen.queryByText("kevin");
        const lastnameDisplay = screen.queryByText("lee");
        const addressDisplay = screen.queryByText("123 Abc Ave");
        const cityDisplay = screen.queryByText("Los Angeles");
        const stateDisplay = screen.queryByText("CA");
        const zipDisplay = screen.queryByText("90210");

        expect(firstnameDisplay).toBeInTheDocument();
        expect(lastnameDisplay).toBeInTheDocument();
        expect(addressDisplay).toBeInTheDocument();
        expect(cityDisplay).toBeInTheDocument();
        expect(stateDisplay).toBeInTheDocument();
        expect(zipDisplay).toBeInTheDocument();
    })
});
