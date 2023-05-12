


const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
  { title: 'Orange', isFruit: true, id: 4 },
  { title: 'Avocado', isFruit: true, id: 5 },
  { title: 'Grape', isFruit: true, id: 6 },
];

export default function ListItem() {
  const listItem = products.map(product => 
      <li key={product.id} style={{ color : product.isFruit ? 'green' : 'red'}}>{product.title}</li>
    );
  return(
    <div>
     <ul>{listItem}</ul>
    </div>
  );
}