import { useState } from 'react';
import '../styles/Cart.css';

function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(false);
	const monsteraPrice = 8;

	return isOpen ? (
		<div className="lmj-cart">
			<button
				onClick={() => setIsOpen(false)}
				className="lmj-cart-toggle-button"
			>
				fermer le panier
			</button>
			<h2>Panier</h2>
			<h3>Total : {monsteraPrice * cart}€</h3>
			<button onClick={() => updateCart(0)}>Vider le panier</button>
		</div>
	) : (
		<div className="lmj-cart-closed">
			<button
				onClick={() => setIsOpen(true)}
				className="lmj-cart-toggle-button"
			>
				Ouvrir le panier
			</button>
		</div>
	);
}

export default Cart;
