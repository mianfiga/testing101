import { render, screen } from '@testing-library/react';
import SearchList from './searchList';
import Item from '../factories/item';

describe('searchList', () => {
    test('without search', () => {
        const items = [
            new Item,
            new Item,
            new Item,
        ];
        render(<SearchList items={items} search="" />);
        expect(screen.getByText(new RegExp(items[0].name,"i"))).toBeInTheDocument();
        expect(screen.getByText(new RegExp(items[1].name,"i"))).toBeInTheDocument();
        expect(screen.getByText(new RegExp(items[2].name,"i"))).toBeInTheDocument();
    });
    test('with search', () => {
        const items = [
            {name: '1', description: '1'},
            {name: '2', description: '2'},
            {name: '3', description: '3'},
        ];
        render(<SearchList items={items} search="1" />);
        expect(screen.getByText(/1/i)).toBeInTheDocument();
        // expect(screen.getByText(/2/i)).not.toBeInTheDocument();
        // expect(screen.getByText(/3/i)).not.toBeInTheDocument();
    });
    // test('Snapshot', () => {
    //     const component = renderer.create(
    //       <Link page="http://www.facebook.com">Facebook</Link>,
    //     );
    // let tree = component.toJSON();
    // expect(tree).toMatchSnapshot();
});