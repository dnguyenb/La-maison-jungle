import { useState } from 'react';
import '../styles/Cart.css';

function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(false);
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	);

	alert(`J'aurai ${total}€ à payer 💸`);

	return isOpen ? (
		<div className="lmj-cart">
			<button
				onClick={() => setIsOpen(false)}
				className="lmj-cart-toggle-button"
			>
				fermer le panier
			</button>
			<h2>Panier</h2>
			<h3>Total :{total}€</h3>
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
