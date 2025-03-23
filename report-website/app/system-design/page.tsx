import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Metadata } from 'next';
import Image from "next/image";

export const metadata: Metadata = {
    title: 'System Design',
  };

export default function SystemDesign() {
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
              <BreadcrumbPage>System Design</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <div className="flex flex-col items-center shrink-0 border-b p-8">
        <h1 className="text-6xl text-center my-6">System Design</h1>
      </div>
      <div className="flex justify-center p-6">
        <div className="max-w-4xl">
          <div id="system-architecture">
            <h1 className="text-4xl font-bold my-6">System Architecture</h1>
            <h1 className="text-2xl font-medium  my-6">High-Level System Architecture</h1>
            <p className="text-lg mb-4">
              Our project consists of a centralised system architecture which allows us to leverage 
              Bluetooth Low Energy capable devices across multiple workstations. The main components 
              of the system diagram include:
            </p>
            <ul className="text-lg list-disc pl-6 my-4">
              <li>Raspberry Pi 5 - Central computing platform for proximity detection and authentication</li>
              <li>Host PC - Device to be authenticated into and where local LLM inferencing occurs.</li>
              <li>ESP32 - Bluetooth-enabled microcontroller for BLE signal emitting and TOTP generation</li>
              <li>IBM Cloud Server - For secure data storage and device authentication.</li>
            </ul>
            <div className="flex flex-col items-center my-6">
              <Image 
                src="/system-design/system-diagram.jpg" 
                alt="System Architecture" 
                width={800} 
                height={800}
                className="max-w-full object-contain bg-white"
                style={{borderRadius:'10px'}}
              />
              <p className="text-center mt-3 text-sm text-gray-500">Figure 1: System Architecture Diagram</p>
            </div>
            <p className="text-lg mb-4">
              All these components come together to create a complex, scalable and secure architecture, allowing future upgrades and the integration of new proximity agent iterations. We reduce our reliance on the device being authenticated into by utilising a Raspberry Pi which allows developers to easily adapt this system for other usecases (i.e printers, whiteboard profiles).
            </p>
            <h1 className="text-2xl font-medium  my-6">IBM Cloud System Architecture</h1>
            <p className="text-lg mb-4">
              Both our registration website and API are hosted utilising cloud services, this is the first step to getting a QPG system setup. For our server, we are making use of serverless computing utilising IBM's Cloud Code Engine, which allows us to deploy a flexible and scalable server. This helps us ensure the costs of such a system are reasonable and that the services are accessible at all times. IBM Cloud Code Engine automatically scales the number of instances of the server that we have running just by the number of requests that we are getting, so if there are no requests incoming no instances of the server will be initiated and vice-versa.
            </p>
            <div className="flex flex-col items-center my-6">
              <Image 
                src="/system-design/codeengine-architecture.svg" 
                alt="IBM Cloud Engine Architecture" 
                width={800} 
                height={800}
                className="max-w-full object-contain bg-white"
                style={{borderRadius:'10px'}}
              />
              <p className="text-center mt-3 text-sm text-gray-500">Figure 2: IBM Code Engine Architecture Diagram</p>
              <p className="text-center text-sm text-gray-500">https://cloud.ibm.com/docs/codeengine?topic=codeengine-architecture</p>
            </div>
            <p className="text-lg mb-4">
              By containerizing our Litestar server onto a Docker container, we ensured that our deployment options were flexible too, allowing us to easily update the server or switch to other cloud providers in the future if needed.
            </p>
          </div>
          <div id="site-map">
            <h1 className="text-4xl font-bold my-6">Site Map</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div id="sequence-diagrams">
            <h1 className="text-4xl font-bold my-6">Sequence Diagrams</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div id="design-patterns">
            <h1 className="text-4xl font-bold my-6">Design Patterns</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div id="er-diagrams">
            <h1 className="text-4xl font-bold my-6">ER Diagrams</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div id="data-storage">
            <h1 className="text-4xl font-bold my-6">Data Storage</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div id="apis">
            <h1 className="text-4xl font-bold my-6">APIs</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}