import "@styles/globals.css";

import Nav from '@components/Nav';
import Provider from '@components/Provider';

//SEO next.js tech
export const metadata = {
    title: "LinkedHawk",
    description: "Filter through thousands of candidates and find your next hire!"
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
        <Provider>
            <div className='main'>
            <div  className='gradient'/>
            </div>
            
            <main className='app'>
            <Nav />
               {children}
            </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout;