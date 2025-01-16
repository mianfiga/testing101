import { render, screen } from "@testing-library/react";
import App from "./App";
//based on https://www.leighhalliday.com/mock-fetch-jest approach Testing React' section

describe("App", () => {
  beforeEach(() => {
    //we need to reset the mocks before each test
    fetch.resetMocks();
  });

  test("renders expected content", async () => {
    fetch.mockResponseOnce(
      // this function captures Fetch to make it response this data:
      JSON.stringify({
        type: "User",
        items: [
          { name: "Ana", surname: "Manzana" },
          { name: "Juana", surname: "Hermana" },
          { name: "Juana", surname: "Pera" },
        ],
      })
    );

    render(<App />);
    const element = await screen.findByText(/Pera/i); // now this needs an await to let the changes perform
    expect(element).toBeInTheDocument();
  });
  test("renders no content when fetch fails", async () => {
    //fetch.mockReject(new Error('No load error'));
    fetch.mockResponseOnce("", {
      counter: 1,
      status: 404,
      statusText: "not found",
    });

    render(<App />);
    let element;
    try {
      element = await screen.findByText(/Pera/i); // now this needs an await to let the changes perform
    } catch (error) {
      // Nothing
    }

    expect(element).toBe(undefined);
  });
});
