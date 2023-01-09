import { listTranslation } from './list';


describe('ListTranslation', () => {
  describe('from User list', () => {
    const list = {
      type: 'User',
      items: [{name: 'Roberto', surname: 'Gladis'}],
    }
    test('with 1 user returns the rigth configuration', () => {
      expect(listTranslation(list)).toEqual([
        {
          name: 'Roberto',
          description: 'Gladis'
        }
      ]);
    });
    test('with undefined type', () => {
      const list = {
        type: undefined,
        items: [{name: 'Roberto', surname: 'Gladis'}],
      }
      expect(listTranslation(list)).toEqual([]);
    });
    test('with null argument', () => {
      expect(() => listTranslation(null)).toThrow();
    });
    test('it returns the rigth number of elements',() => {
      const list = {
        type: 'User',
        items: [{name: 'Roberto', surname: 'Gladis'}],
      }
      expect(listTranslation(list).length).toEqual(list.items.length);
    })
  });

  describe('from Group list', () => {
    const list = {
      type: 'Group',
      items: [{name: 'Roberto', description: 'Gladis'}],
    }
    test('with 1 group returns the rigth configuration', () => {
      expect(listTranslation(list)).toEqual([
        {
          name: 'Roberto',
          description: 'Gladis'
        }
      ]);
    });
    test('it returns the rigth number of elements',() => {
      const list = {
        type: 'Group',
        items: [{name: 'Roberto', description: 'Gladis'}],
      }
      expect(listTranslation(list).length).toEqual(list.items.length);
    })
  })

  describe('from Invoice list', () => {
    const list = {
      type: 'Invoice',
      items: [{number: 'Roberto', description: 'Gladis'}],
    }
    test('with 1 invoice returns the rigth configuration', () => {
      expect(listTranslation(list)).toEqual([
        {
          name: 'Roberto',
          description: 'Gladis'
        }
      ]);
    });
    test('it returns the rigth number of elements',() => {
      const list = {
        type: 'Invoice',
        items: [{number: 'Roberto', description: 'Gladis'}],
      }
      expect(listTranslation(list).length).toEqual(list.items.length);
    })
  })
})
