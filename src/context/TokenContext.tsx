import { createContext, useContext, useState } from "react";

type TokenContextType = {
  organization: string;
  token: string;
  setOrganization: (value: string) => void;
  setToken: (value: string) => void;
};

const TokenContext = createContext<TokenContextType | undefined>(undefined);

export function TokenProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [organization, setOrganization] = useState("");
  const [token, setToken] = useState("");

  return (
    <TokenContext.Provider
      value={{
        organization,
        token,
        setOrganization,
        setToken,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
}

export function useToken() {
  const context = useContext(TokenContext);

  if (!context) {
    throw new Error("useToken must be used inside TokenProvider");
  }

  return context;
}