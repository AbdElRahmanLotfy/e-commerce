import "@/styles/globals.scss";
import { SSRProvider } from "react-bootstrap";
import Layout from "@/components/layout/layout";
import CartState from "@/context/cart/cart-state";
import FavState from "@/context/favourites/fav-state";
import { NotificationContextProvider } from "@/context/notification/notification-context";
import { ThemeProvider } from "@/context/theme/theme";
export default function App({ Component, pageProps }) {
  return (
    <SSRProvider>
      <NotificationContextProvider>
        <ThemeProvider>
          <CartState>
            <FavState>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </FavState>
          </CartState>
        </ThemeProvider>
      </NotificationContextProvider>
    </SSRProvider>
  );
}
