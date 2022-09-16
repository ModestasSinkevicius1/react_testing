import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('check if my text renders', () => {
  render(<App />);
  const linkElement = screen.getByText('Hello');
  //screen.debug(linkElement);
  expect(linkElement).toBeInTheDocument();
});

test("bye is not visible", () => {
  // eslint-disable-next-line no-unused-vars
  render(<App />);
  const hw = screen.getByText("Bye");
  expect(hw).not.toBeVisible();
});

test("check if home has 'home' class", () => {
  const { container } = render(<App />);
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  const hw = container.querySelector('.home')
  expect(hw).toBeInTheDocument();
});

test("check if text is formed corectly with tags", () => {
  render(<App />);
  const text = screen.getByText((content, node) => node.textContent === 'Edit src/App.js and save to reload.')
  expect(text).toBeInTheDocument();
});

// test('Match snapshot', () => {
//   const { container } = render(<App />)

//   expect(container).toMatchSnapshot();
// });

