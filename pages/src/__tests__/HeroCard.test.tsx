import React from "react";
import { render, fireEvent } from "@testing-library/react";
import HeroCard from '../Components/MarvelUniverse/HeroCard/HeroCard';

describe("HeroCard", () => {
    const hero = {
        id: 1,
        name: "Spider-Man",
        thumbnail: {
            path: "http://example.com/spiderman",
            extension: "jpg"
        }
    };
    const onClick = jest.fn();

    afterEach(() => {
        onClick.mockClear();
    });

    it("should render the hero name", () => {
        const { getByText } = render(<HeroCard hero={hero} onClick={onClick} />);
        expect(getByText(hero.name)).toBeInTheDocument();
    });

    it("should call onClick when clicked", () => {
        const { getByRole } = render(<HeroCard hero={hero} onClick={onClick} />);
        fireEvent.click(getByRole("button"));
        expect(onClick).toHaveBeenCalledWith(hero.id);
    });

    it("should add the active class when isActive is true", () => {
        const { container } = render(<HeroCard hero={hero} onClick={onClick} isActive={true} />);
        expect(container.firstChild).toHaveClass("heroCard_active");
    });

    it("should not add the active class when isActive is false", () => {
        const { container } = render(<HeroCard hero={hero} onClick={onClick} isActive={false} />);
        expect(container.firstChild).not.toHaveClass("heroCard_active");
    });
});