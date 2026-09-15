import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Gauge } from "../Gauge";

describe("Gauge", () => {
  it("renders the percentage value", () => {
    render(<Gauge value={42} />);
    expect(screen.getByText("42%")).toBeInTheDocument();
  });

  it("clamps values above 100", () => {
    render(<Gauge value={150} />);
    expect(screen.getByText("100%")).toBeInTheDocument();
  });

  it("exposes an accessible label describing the value", () => {
    render(<Gauge title="Sales" value={42} target="$42,000" />);
    expect(
      screen.getByRole("img", { name: /Sales: 42% of target, target \$42,000/i })
    ).toBeInTheDocument();
  });
});
