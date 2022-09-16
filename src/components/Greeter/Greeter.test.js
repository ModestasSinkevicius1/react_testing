import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Greeter from "./Greeter.jsx";
import userEvent from '@testing-library/user-event';

describe("<Greeter/>", () => {
    test('Placeholder exists', () => {
        render(<Greeter />);
        const greeter = screen.getByPlaceholderText("Type name");
        expect(greeter).toBeInTheDocument();
    });

    test('Component displays right text', () => {
        render(<Greeter />);
        
        const inbox = screen.getByPlaceholderText("Type name");
        const btn = screen.getByText('Show name');

        userEvent.type(inbox, 'Labas');
        userEvent.click(btn);

        expect(screen.getByText('Labas rytas')).toBeInTheDocument();
    });

    test('Component displays nothing if given text is empty', () => {
        const { container } = render(<Greeter />);
        
        const inbox = screen.getByPlaceholderText("Type name");
        const btn = screen.getByText('Show name');

        userEvent.type(inbox, " ");
        userEvent.click(btn);

        // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
        const actual = container.querySelector('span');

        expect(actual).toBeNull();
    });

    test('Component displays nothing if given text has whitespaces', () => {
        const { container } = render(<Greeter />);
        
        const inbox = screen.getByPlaceholderText("Type name");
        const btn = screen.getByText('Show name');

        userEvent.type(inbox, '   ');
        userEvent.click(btn);

        // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
        const actual = container.querySelector('span');

        expect(actual).toBeNull();
    });

    test('Component displays nothing if given text has simbols', () => {
        const { container } = render(<Greeter />);
        
        const inbox = screen.getByPlaceholderText("Type name");
        const btn = screen.getByText('Show name');

        userEvent.type(inbox, '*');
        userEvent.click(btn);

        // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
        const actual = container.querySelector('span');

        expect(actual).toBeNull();
    });
});