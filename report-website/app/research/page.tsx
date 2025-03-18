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
           is a Japanese multinational corporation specialising in electronic components and in-vehicle information systems [1]. The company has continuously utilised Bluetooth technology to develop secure digital key solutions, enhancing user convenience and vehicle security. Through collaborations with industry leaders like Broadcom and Giesecke+Devrient (G+D), Alps Alpine has introduced advanced systems that employ Bluetooth Low Energy (BLE) for precise distance measurement and keyless entry functionalities [2], features that we required for our own QPG system.    </p>
           <p className="text-lg my-6">
           In partnership with Broadcom, Alps Alpine developed a high-accuracy distance measurement system based on BLE technology. This system enables secure keyless entry by accurately determining the proximity of a user's smartphone to the vehicle, allowing for seamless locking and unlocking without physical keys. Broadcom's innovative smartphone Bluetooth and Wi-Fi® combo chip supports these high-accuracy distance measurements, ensuring both security and convenience for users.   </p>          
           <p className="text-lg my-6">
           Alps Alpine also collaborated with G+D to create a wireless digital key system compliant with the Car Connectivity Consortium (CCC) global standard specification. This system integrates advanced security technologies similar to those used in credit cards and mobile payments, ensuring secure communication between the vehicle and the user's smartphone. Alps Alpine developed the keyless entry system components, including communication modules and electronic control units (ECUs), while G+D focused on secure digital key issuance and management systems.   </p>          
           <p className="text-lg my-6">
           Central to these innovations is the use of BLE technology, which offers low power consumption and high-accuracy distance measurement capabilities. BLE facilitates precise positioning and secure communication between devices, making it ideal for automotive applications where both security and efficiency are paramount. By utilising BLE, Alps Alpine's digital key solutions ensure reliable performance while maintaining the security standards required for vehicle access systems.   </p>          
           <p className="text-lg my-6">
           Alps Alpine’s use of BLE for secure digital key solutions provided valuable insights for enhancing our QPG system. Their approach to high-accuracy distance measurement using BLE highlights the importance of precise proximity detection for seamless authentication. By leveraging similar BLE technology, our system can ensure users are accurately linked to the intended devices (in our case, an ESP32 microcontroller) without interference. Additionally, their collaboration with security-focused partners like Giesecke+Devrient emphasises the need for robust encryption, reinforcing our decision to implement post-quantum cryptography for secure user authentication. The integration of BLE with cloud-based key management also aligns with our system's requirement for IBM Cloud deployment, ensuring real-time access control across multiple devices. Overall, Alps Alpine’s focus on security, low power consumption, and seamless user experience provides a strong reference for optimising proximity-based authentication in my own QPG system.







   </p>          
           
           </div>
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
            [1] Alps Alpine: Our Business (2015) Company | Alps Alpine. Available at: https://www.alpsalpine.com/e/company/business/#anc03 (Accessed: 18 March 2025). 
            <p className="text-lg my-6">
            [2] Dolan, M., Prado, J. del and Marcel, J. (2025) How Alps Alpine uses Bluetooth Technology for Secure Digital Key Solutions, Bluetooth® Technology Website . Available at: https://www.bluetooth.com/blog/how-alps-alpine-uses-bluetooth-technology-for-secure-digital-key-solutions/ (Accessed: 18 March 2025).    </p>          
           <p className="text-lg my-6">
           [3]    </p>          
           <p className="text-lg my-6">
           [4]    </p>
           <p className="text-lg my-6">
           [5]    </p>          
           <p className="text-lg my-6">
           [6]    </p>
           <p className="text-lg my-6">
           [6]    </p>
           <p className="text-lg my-6">
           [7]    </p>
          </p>
          </div>
        </div>
      </div>
    </main>
  )
}