import React from 'react'
import { it, expect, describe } from "vitest" 
import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom/vitest"
import List from '../../src/components/utils/lists/List.tsx'

describe('App', () => {
    it('should render username and a list of tasks from a todo list', () => {
        render(<List list={[{id: 1, list_item: "task 1"}, {id: 2, list_item: "task 2"}]} user="test@gmail.com"/>);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent("test@gmail.com");
        expect(screen.getByText("task 1")).toBeInTheDocument();
        expect(screen.getByText("task 2")).toBeInTheDocument();
    })
})