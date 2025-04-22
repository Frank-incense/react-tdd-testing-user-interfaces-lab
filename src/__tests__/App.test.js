import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here

test("displays a top-level heading with the text `Hi, I'm _______`",()=>
{
    // Arrange
    render(<App />);

    // Act
    const topLevelHeading = screen.getByRole("heading", {
        name: /hi, i'm/i,
        exact: false,
        level: 1,
      });

    // Assert
    expect(topLevelHeading).toBeInTheDocument();

})
test("displays an image with the alt text `Franks picture`",()=>{
    // Arrange
    render(<App />);

    // Act
    const image = screen.getByAltText("Franks picture");

    // Assert
    expect(image).toHaveAttribute("alt");
})
test("displays a second level heading with the text `About Me`",()=>{
    // Arrange
    render(<App />);

    // Act
    const secondLevelHeading = screen.getByRole("heading", {
        name: /About Me/,
        level: 2,
        exact: false,
      });
    // Assert
    expect(secondLevelHeading).toBeInTheDocument();
})
test("displays a paragraph  for the biography",()=>{
  // Arrange
  render(<App />);

  // Act
  const paragraph = screen.getByText(/bio/i);
  
  // Assert
  expect(paragraph).toBeInTheDocument();
})
test("displays two links on to your Github page and on to your LinkedIn page",()=>{
  // Arrange
  render(<App />);

  // Act
  const Github = screen.queryByRole("link", {
    name: /Github/,
    exact: false
  });
  const LinkedIn = screen.queryByRole("link", {
    name: /LinkedIn/,
    exact: false
  });
  // Assert
  expect(LinkedIn).toHaveAttribute("href", "https://www.linkedin.com/");
  expect(Github).toHaveAttribute("href", "https://github.com/");
})