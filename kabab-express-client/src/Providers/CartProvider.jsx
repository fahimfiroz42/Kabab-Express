import { createContext, useContext, useState, useEffect } from 'react';
import { AuthContext } from './AuthProvider';

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
    const { user } = useContext(AuthContext);
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch cart data from database
    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/carts?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setCart(data);
                    setLoading(false);
                });
        } else {
            setCart([]);
            setLoading(false);
        }
    }, [user]);

    const refetchCard = () => {
        if (user?.email) {
            fetch(`http://localhost:5000/carts?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setCart(data);
                });
        }
    }

    const cartInfo = {
        cart,
        loading,
        refetchCard
    }

    return (
        <CartContext.Provider value={cartInfo}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
