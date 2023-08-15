import "@styles/globals.css";

import MainNav from '@components/menus/MainNav';

import Provider from '@components/Provider';
// import UserSignIn from "@components/UserSignIn";
// //SEO next.js tech
export const metadata = {
    title: "LinkedHawk",
    description: "Filter through thousands of candidates and find your next hiree!"
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <link
        rel="icon"
        href="/icon?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />

        <body>
        <Provider>
            <MainNav />
            {/* <UserSignIn/> */}
              {children}
            </Provider>
        </body>


    </html>
  )
}

export default RootLayout;