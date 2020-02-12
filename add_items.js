const e = React.createElement;
      class ShoppingList extends React.Component{
        render() { 
            return <div>Please select the items to add to Cart</div>;
        }
      }
      
ReactDOM.render(
  e(ShoppingList), document.getElementById('shopping-list') 
);