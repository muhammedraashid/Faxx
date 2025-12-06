import { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
    title:"Faxx Chat",
    description:"Real-time chat app with Socket.IO and Next.js",
};

export default function RootLayout({children}:{ children: React.ReactNode }){
    return(
        <html lang="en">
            <body className="bg-gray-50 text-gray-900 dark:bg-black dark:text-white">
                {children}
            </body>
        </html>
    );
}