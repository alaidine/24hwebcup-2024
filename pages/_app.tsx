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

function HomeIcon() {
  return (
    <IconContext.Provider value={{ color: "white", className: "text-xl" }}>
      <div className="px-5">
        <FaHome />
      </div>
    </IconContext.Provider>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NavigationMenu className="mx-auto bg-gray-800 text-black p-3 rounded-b-xl">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/">
              <HomeIcon />
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Component {...pageProps} />
    </div>
  );
}
