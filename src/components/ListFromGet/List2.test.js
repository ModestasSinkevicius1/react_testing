import { render, screen, waitFor } from "@testing-library/react";
import List2 from "./List2";

describe('<List2 />', () =>{
    let originalFetch;
    beforeEach(() => {
        originalFetch = global.fetch;
        
        global.fetch = jest.fn(() => {
            return Promise.resolve({
                json: () => 
                    Promise.resolve([
                        {id: 1, name: 'Jonas'},
                        {id: 2, name: 'Jonaitis'}
                    ])
            })
        })
    })

    afterEach(()=>{
        global.fetch = originalFetch;
    })

    test('Text show that data was received', async () =>{
        render(<List2 />);
        const actual = await waitFor( () => screen.findByText('Got some stash!'));
        //screen.debug(actual);
        expect(actual).toBeInTheDocument();
    })

    test('Items display from fetch', async () =>{
        const { container } = render(<List2 />);
        const actual = await waitFor( () => screen.findByText('Jonas'));
        // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
        const count = container.querySelectorAll('.item').length;
        //screen.debug(actual);
        expect(actual).toBeInTheDocument();

        expect(count).toEqual(2);
    })

    test('Failed to get items', async () =>{
        global.fetch = jest.fn(() => {
            return Promise.reject('No u');
        })

        const { container } = render(<List2 />);
        const actual = await waitFor( () => screen.findByText('Something went wrong'));
        // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
        const count = container.querySelectorAll('.item').length;
        //screen.debug(actual);
        expect(actual).toBeInTheDocument();

        expect(count).toEqual(0);
    })
})