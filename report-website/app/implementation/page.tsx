import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Metadata } from 'next';
import Image from "next/image";

export const metadata: Metadata = {
    title: 'Implementation',
  };

export default function Implementation() {
  return (
    <main className="w-full">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger />
        <Separator orientation="vertical" className="mr-2 h-4 hidden md:block" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="/">Quantum Proximity Gateway</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbPage>Implementation</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <div className="flex flex-col items-center shrink-0 border-b p-8">
        <h1 className="text-6xl text-center my-6">Implementation</h1>
      </div>
      <div className="flex justify-center p-6">
        <div className="max-w-4xl">
            
          <div id="overview">
            <h1 className="text-4xl font-bold my-6">Overview</h1>
            <p className="text-lg mb-6">
                The Quantum Proximity Gateway (QPG) is made up of five core components, each of which serves an incredible important and specific role in creating a secure and accessible system. The project was split into these individual submodules in order to improve the modularity of the system, enable parallel development, and also ensure that each component could be tested and deployed individually. Additionally, due to the complexity of the system and the variety of hardware being used, it was important to ensure that each component could be easily replaced or upgraded without affecting the rest of the system.
            </p>
            <p className="text-lg mb-6">
                As a result of this modularity, each component of the QPG project has different technologies and languages that are best suited for their relevant tasks, and so, we will discuss the implementations and the tools and dependenciees used for each submodule separately in the following sections.
            </p>
          </div>

          <div id="registration-site">
            <h1 className="text-4xl font-bold my-6">Registration Site</h1>
            <p className="text-lg">
              This website is where the user first interacts with QPG - it allows them to register their ESP32 device with their account, as well as setup the facial recognition that is extremely important for the system to work.
            </p>

            <h2 className="text-2xl font-bold my-4">Tools & Dependencies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <Card className="p-4">
                <div className="flex flex-row items-center gap-3">
                <Image src="/implementation/nextjs.png" alt="Next.js logo" width={36} height={36} />
                <div>
                    <h3 className="text-base font-semibold">Next.js</h3>
                    <p className="text-sm text-muted-foreground">
                    The full-stack React framework which is powering the registration site.
                    </p>
                </div>
                </div>
            </Card>

            <Card className="p-4">
                <div className="flex flex-row items-center gap-3">
                <Image src="/implementation/chakraui.png" alt="Chakra UI logo" width={36} height={36} />
                <div>
                    <h3 className="text-base font-semibold">Chakra UI</h3>
                    <p className="text-sm text-muted-foreground">
                    A modular, accessible component library for a responsive website.
                    </p>
                </div>
                </div>
            </Card>

            <Card className="p-4">
                <div className="flex flex-row items-center gap-3">
                <Image src="/implementation/usb.svg" alt="Chakra UI logo" width={36} height={36} />
                <div>
                    <h3 className="text-base font-semibold">Web Serial API</h3>
                    <p className="text-sm text-muted-foreground">
                    Enables secure, browser-based communication with the ESP32 over a serial connection.
                    </p>
                </div>
                </div>
            </Card>
            </div>
          </div>

          <div id="server">
            <h1 className="text-4xl font-bold my-6">Server</h1>

            <p className="text-lg mb-6">
                The server is where we handle all of the requests that the other components of the project make, as well as store all of our data. In our case, this means handling how to register an ESP32 device with a user (and their account details), as well as storing a user's accessibility preferences which can be retrieved. The server additionally handles setting up the encrypted communication between QPG devices, ensuring that all data is secure and private, using quantum-secure encryption standards.
            </p>

            <h2 className="text-2xl font-bold my-4">Tools & Dependencies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <Card className="p-4">
                <div className="flex flex-row items-center gap-3">
                <Image src="/implementation/litestar.svg" alt="Litestar logo" width={36} height={36} />
                <div>
                    <h3 className="text-base font-semibold">Litestar</h3>
                    <p className="text-sm text-muted-foreground">
                    Async, fast, and light-weight Python web framework running our server's API.
                    </p>
                </div>
                </div>
            </Card>

            <Card className="p-4">
                <div className="flex flex-row items-center gap-3">
                <Image src="/implementation/liboqs.png" alt="liboqs logo" width={36} height={36} />
                <div>
                    <h3 className="text-base font-semibold">Liboqs</h3>
                    <p className="text-sm text-muted-foreground">
                    Open-source library for quantum-safe cryptographic algorithms.
                    </p>
                </div>
                </div>
            </Card>

            <Card className="p-4">
                <div className="flex flex-row items-center gap-3">
                <Image src="/implementation/opencv.svg" alt="OpenCV logo" width={36} height={36} />
                <div>
                    <h3 className="text-base font-semibold">OpenCV</h3>
                    <p className="text-sm text-muted-foreground">
                    Handles camera input and image preprocessing for facial recognition.
                    </p>
                </div>
                </div>
            </Card>
            </div>

            <h2 className="text-2xl font-bold my-4">Key Feature: Encrypted Profile Fetching</h2>
            <p className="text-lg mb-4">
                When a Raspberry Pi requests a user profile, the server validates the BLE MAC address and returns encrypted settings using post-quantum cryptography.
            </p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm mb-4">
                <code>{`@get("/profile/{mac_address}")
            async def get_profile(mac_address: str) -> dict:
                user = await db.get_user_by_mac(mac_address)
                if not user:
                    raise NotFoundException("User not found")
                
                encrypted_profile = pqc_encrypt(user.profile_data)
                return {"encrypted_data": encrypted_profile}`}</code>
            </pre>
            <p className="text-lg mb-8">
                The server uses a custom `pqc_encrypt` function powered by liboqs bindings to protect sensitive user preferences and accessibility settings.
            </p>

            <h2 className="text-2xl font-bold my-4">API Structure</h2>
            <p className="text-lg">
                The API follows a RESTful structure, with endpoints such as:
            </p>
            <ul className="list-disc list-inside text-lg my-4">
                <li><code>/register</code> – For new user registration via the web app</li>
                <li><code>/authenticate</code> – Verifies facial recognition hashes</li>
                <li><code>/profile/{'{'}mac{'}'}</code> – Returns encrypted user data to the Raspberry Pi</li>
            </ul>
            </div>
          <div id="esp32">
            <h1 className="text-4xl font-bold my-6">ESP32</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div id="raspberry-pi">
            <h1 className="text-4xl font-bold my-6">Raspberry Pi</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div id="desktop-app">
            <h1 className="text-4xl font-bold my-6">Desktop App</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
