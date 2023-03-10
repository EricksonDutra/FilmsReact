import { ToastContainer } from "react-toastify"

import { IAppProviderProps } from "../interface/AppProvider"

import { WishlistProvider } from "./Wishlist"
import { GlobalStyles } from "../styles/globals"

export function AppProvider(props: IAppProviderProps) {
  return (
    <WishlistProvider>
      <GlobalStyles />
      <ToastContainer />
  
      {props.children}
    </WishlistProvider>
  )
}