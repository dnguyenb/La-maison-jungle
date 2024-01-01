import { useState } from 'react';
import '../styles/Cart.css';

function Cart() {

	const [cart, updateCart] = useState(0);
	const [isOpen, setIsOpen] = useState(false);

	const monsteraPrice = 8;

	return isOpen ? (
		<div className="lmj-cart">
			<button onClick={()=> setIsOpen(false)}>fermer le panier</button>
			<h2>Panier</h2>
			<div>
				Monstera : {monsteraPrice}€
				<button onClick={() => updateCart(cart + 1)}>Ajouter au panier</button>
			<h3>Total : {monsteraPrice * cart}€</h3>
				<button onClick={()=> updateCart(0)}>Vider le panier</button>
			</div>
		</div>
	) : <button onClick={()=> setIsOpen(true)}>Ouvrir le panier</button>;
}

export default Cart;
