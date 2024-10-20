import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Dashboard from "../../src/components/pages/Dashboard";

vi.mock("../../../src/components/UserAuth", () => ({
  useAuth: () => ({
    user: {name: "Orko"}
  })
}));

describe("Add a task item to the to do list", async () => {
  test('adds a new task to the list', () => {
      render(<Dashboard />);
      const itemList = screen.getAllByTestId("item-list");
      expect(itemList).toHaveTextContent("Task 1");

      const input = screen.getAllByTestId("item-input");
      const addButton = screen.getByTestId("add-button");

      fireEvent.click(addButton);

      expect(itemList).toHaveTextContent("Task 2");
    });
});