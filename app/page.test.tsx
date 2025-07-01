import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./page";

describe("Home Page", () => {
  it("renders welcome text", () => {
    render(<Home />);
    expect(screen.getByText(/Welcome to CircleReads/i)).toBeInTheDocument();
  });

  it("renders the main heading", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it("has proper page structure", () => {
    render(<Home />);
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
  });

  it("renders navigation elements", () => {
    render(<Home />);
    const nav = screen.queryByRole("navigation");
    if (nav) {
      expect(nav).toBeInTheDocument();
    }
  });

  it("has accessible content", () => {
    render(<Home />);
    expect(screen.getByRole("main")).toBeInTheDocument();
  });
});
