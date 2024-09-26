import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useRef,
} from "react";

interface User {
  id: number;
  name: string;
}

interface CartItem {
  id: number;
  name: string;
  price: number;
}

interface Session {
  loginUser: User | null;
  cart: CartItem[];
}

interface SessionContextType {
  session: Session;
  login: (id: number, name: string) => void;
  logout: () => void;
  addCartItem: (name: string, price: number) => void;
  updateCartItem: (id: number, name: string, price: number) => void;
  removeCartItem: (itemId: number) => void;
  nameInputRef: React.RefObject<HTMLInputElement>;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
};

export const SessionProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [session, setSession] = useState<Session>({
    loginUser: null,
    cart: [
      { id: 100, name: "라면", price: 3000 },
      { id: 101, name: "컵라면", price: 2000 },
      { id: 200, name: "파", price: 5000 },
    ],
  });

  const nameInputRef = useRef<HTMLInputElement>(null);

  const login = (id: number, name: string) => {
    if (!name) {
      alert("이름을 입력해주세요");
      nameInputRef.current?.focus();
      return;
    }
    setSession({
      ...session,
      loginUser: { id, name },
    });
  };

  const logout = () => {
    setSession({
      ...session,
      loginUser: null,
    });
  };

  const addCartItem = (name: string, price: number) => {
    const newItem: CartItem = {
      id: session.cart.length + 1,
      name,
      price,
    };
    setSession({
      ...session,
      cart: [...session.cart, newItem],
    });
  };

  const updateCartItem = (id: number, name: string, price: number) => {
    setSession({
      ...session,
      cart: session.cart.map((item) =>
        item.id === id ? { ...item, name: name, price: Number(price) } : item,
      ),
    });
  };

  const removeCartItem = (itemId: number) => {
    setSession({
      ...session,
      cart: session.cart.filter((item) => item.id !== itemId),
    });
  };

  return (
    <SessionContext.Provider
      value={{
        session,
        login,
        logout,
        addCartItem,
        updateCartItem,
        removeCartItem,
        nameInputRef,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};
