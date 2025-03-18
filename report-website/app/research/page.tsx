import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Research',
  };

export default function Research() {
  return (
    <main className="w-full">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger />
        <Separator orientation="vertical" className="mr-2 h-4 hidden md:block" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbPage>Research</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <div className="flex flex-col items-center shrink-0 border-b p-8">
        <h1 className="text-6xl text-center my-6">Research</h1>
      </div>
      <div className="flex justify-center p-6">
        <div className="max-w-4xl">
          <div id="related-projects">
            <h1 className="text-4xl font-bold my-6">Related Projects Review </h1>
            <p className="text-lg">
            Bluetooth and proximity-based computing have become integral to various industries, from IoT-powered smart offices to sophisticated access control systems. To identify the most effective technologies and resources for the QPG, we conducted an in-depth analysis of existing proximity-based automation and authentication systems, examining their software and hardware implementations to understand the key factors driving their functionality.            </p>
            <p className="text-lg my-6">
            From our research, we concluded that a good proximity-based access control system must:
            <ul className="list-disc pl-6 my-6">
              <li>
                <strong>Ensure secure authentication:</strong> Utilise multi-factor authentication methods such as facial recognition, BLE proximity detection, and post-quantum cryptographic encryption to prevent unauthorized access.
              </li>
              <li>
                <strong>Support seamless user experience:</strong> Automatically configure devices based on user proximity and profile, ensuring effortless transitions between workstations, meeting rooms, and other shared spaces.
              </li>
              <li>
                <strong>Provide accurate proximity detection:</strong> Implement BLE signal strength analysis for precise location tracking, ensuring users connect only to their intended devices.
              </li>
              <li>
                <strong>Feature a user-friendly configuration interface:</strong>Provide a website or app for easy setup, registration, troubleshooting, and user profile management.
              </li>
            </ul>
          As the QPG is designed with all users in mind, we believed an AI chatbot would be highly useful for neurodivergent/immobilised users to modify their accessibility preferences, and therefore we also researched the use of Large Language Models (LLMs) as an assistance feature in a variety of devices and technologies.
            </p>
            <h1 className="text-2xl font-bold my-6">Review: Alps Alpine's Secure Digital Key</h1>
            <p className="text-lg">
            <a href="https://www.alpsalpine.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Alps Alpine 
            </a>{" "} 
           is a Japanese multinational corporation specialising in electronic components and in-vehicle information systems. The company has continuously utilised Bluetooth technology to develop secure digital key solutions, enhancing user convenience and vehicle security. Through collaborations with industry leaders like Broadcom and Giesecke+Devrient (G+D), Alps Alpine has introduced advanced systems that employ Bluetooth Low Energy (BLE) for precise distance measurement and keyless entry functionalities, features that we required for our own QPG system.     </p></div>
          <div id="technology-review">
            <h1 className="text-4xl font-bold my-6">Technology Review</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div id="technical-decisions">
            <h1 className="text-4xl font-bold my-6">Technical Decisions</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div id="references">
            <h1 className="text-4xl font-bold my-6">References</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}