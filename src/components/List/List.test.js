import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import List from "./List";
// import Link from "./Link.jsx";
// import userEvent from '@testing-library/user-event';

describe("<Link/>", () => {
    test('Check if text exists', () => {
        render(<List records = {[]}/>);
        const actual = screen.getByText('Random color codes');
        expect(actual).toBeInTheDocument();
    });

    test('Check if items equal to count', () => {
        const itemsToPass = [{name: 1},{name: 2},{name: 3}]
        const {container} = render(<List records = {itemsToPass}/>);
        // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
        const actual = container.querySelectorAll('[class = item]').length;
        expect(actual).toEqual(3);
    });

    test('Check if no items exist', () => {
        const itemsToPass = []
        const {container} = render(<List records = {itemsToPass}/>);
        // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
        const actual = container.querySelectorAll('[class = item]').length;
        expect(actual).toEqual(0);
    });

    test('Check if text displays when no items found', () => {
        const itemsToPass = []
        const {container} = render(<List records = {itemsToPass}/>);
        // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
        const actual = container.querySelectorAll('[class = item]').length;

        expect(screen.getByText('All chickens ran away')).toBeInTheDocument();
        expect(actual).toEqual(0);
    });

    test('Check when items equals null', () => {
        const itemsToPass = null
        const {container} = render(<List records = {itemsToPass}/>);
        // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
        const actual = container.querySelectorAll('[class = item]').length;

        expect(actual).toEqual(0);
    });

    test('Check if items display when one of items consist null', () => {
        const itemsToPass = [{name: 1}, {name: null}]
        const {container} = render(<List records = {itemsToPass}/>);
        // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
        const actual = container.querySelectorAll('[class = item]').length;

        // eslint-disable-next-line testing-library/no-node-access, testing-library/no-container
        expect(container.querySelector('.no-items')).toBeNull();
        expect(actual).toEqual(1);
    });

    test('Check if text displays when all items equals null', () => {
        const itemsToPass = [{name: null}, {name: null}]
        const {container} = render(<List records = {itemsToPass}/>);
        // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
        const actual = container.querySelectorAll('[class = item]').length;

        expect(screen.getByText('All chickens ran away')).toBeInTheDocument();
        expect(actual).toEqual(0);
    });
});