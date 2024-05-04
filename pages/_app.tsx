import "@/styles/globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import type { AppProps } from "next/app";

import { Button } from "@/components/ui/button";
import { FaHome } from "react-icons/fa";
import { IconContext } from "react-icons";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <NavigationMenu className="mx-auto bg-gray-800 text-black p-3 rounded-b-xl">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/">
              <IconContext.Provider
                value={{ color: "white", className: "text-xl" }}
              >
                <div className="px-5">
                  <FaHome />
                </div>
              </IconContext.Provider>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button variant="ghost" className="text-white font-bold">
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}
