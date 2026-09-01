import { screen, render  } from "@testing-library/react"
import { describe, test, expect } from 'vitest'
import { CustomHeader } from "./CustomHeader";
import { MemoryRouter } from "react-router";

describe("CustomHeader", () => {

    test("Mostrar el Logo", () => {

        render(
            <MemoryRouter>
                <CustomHeader />
            </MemoryRouter>
        )

       const nameImg = screen.getByAltText("name_product");

       expect(nameImg).toBeInTheDocument();
    });


})