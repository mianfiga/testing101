
export function listTranslation (list) {
  switch(list.type){
    case 'User':
      return list.items.map(i => {
        return {
          name: i.name,
          description: i.surname
        };
      });
    case 'Group':
      return list.items.map(i => {
        return {
          name: i.name,
          description: i.description, 
        }
      });
    
    case 'Invoice':
      return list.items.map(i => {
        return {
          name: i.number,
          description: i.description, 
        }
      });
    default:
      return [];
  }
}