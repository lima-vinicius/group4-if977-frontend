import React, {
    createContext,
    useState,
    useContext,
    useEffect,
} from 'react';

const UserContext = createContext(null);

function UserProvider({ children }) {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const userId = localStorage.getItem('olimpo-id');
        if (userId) {
          //função para requisição para buscar informações do user
        }
      }, [
        // mesma função da requisição
      ]);

    return (
        <UserContext.Provider value={[
            [userInfo, setUserInfo]
        ]}
        >
            {children}
        </UserContext.Provider>
    )
}

export const useInfo = () => useContext(UserContext)

export default UserProvider
