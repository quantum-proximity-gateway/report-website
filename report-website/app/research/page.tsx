import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardFooter, CardTitle, CardDescription } from "@/components/ui/card"
import { Metadata } from 'next';
import Image from "next/image";

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
              <BreadcrumbLink href="/">Quantum Proximity Gateway</BreadcrumbLink>
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
            <h1 className="text-4xl font-bold my-6">Related Projects</h1>
            <p className="text-lg my-6">
              Proximity-based solutions has become integral to various industries, from IoT-powered smart offices to sophisticated access control systems. To identify the most effective technologies to be used in our project, we conducted an in-depth analysis of existing proximity-based authentication systems from 2 different companies, examining their software and hardware implementations to understand the core driving their functionality.
            </p>
            <Tabs defaultValue="review-1" className="mt-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="review-1">Review 1: Yubico</TabsTrigger>
                <TabsTrigger value="review-2">Review 2: Alps Alpine</TabsTrigger>
              </TabsList>
              <TabsContent value="review-1">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Review 1: Yubico</CardTitle>
                    <Separator />
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg">
                      <a href="https://www.yubico.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Yubico</a> is an American company manufacturing hardware authentication devices, their main product is the YubiKey which is a security key utilised for 2FA based authentication. They have a diverse range of products which tangentially relate to our project, utilising technologies like NFC, OTP and FIDO2.
                    </p>
                    <div className="flex flex-col items-center my-6">
                      <Image src="/research/yubico.svg" alt="Yubico Logo" width={300} height={150}/>
                      <p className="text-center mt-3 text-sm text-gray-500">Yubico logo</p>
                    </div>
                    <p className="text-lg my-6">
                      Their products serve as the industry standard for hardware-based authentication systems, and inspired some of our intial ideas as we also considered using Near-Field Communication (NFC) based authentication, however after gathering our requirements and surveying stakeholders we realised it would not be the most appropriate for the purposes of our project. This is due to the fact that our project is largely aimed at creating a seamless proximity-based login system that is both accessible and secure. NFC would hinder our ability to leverage proximity-based authentication.
                    </p>
                    <div className="flex flex-col items-center my-6">
                      <Image src="/research/yubikeys.png" alt="YubiKeys Lineup" width={300} height={150}/>
                      <p className="text-center mt-3 text-sm text-gray-500">Figure 1: YubiKey security devices offering multi-factor authentication</p>
                    </div>
                    <p className="text-lg my-6">
                      As additional authentication, we were also inspired by the usecase of these keys as TOTP generators that could validate their authenticity with an external server. As part of our research, we've also been in touch with employees from <a href="https://www.cyberark.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">CyberArk</a>, a leading InfoSec companies that specialises in identity security, and they also recommended an approach involving TOTP authentication.
                    </p>
                    <div className="flex flex-col items-center my-6">
                      <Image src="/research/cyberark.svg" alt="Cyberark Logo" width={300} height={150}/>
                      <p className="text-center mt-3 text-sm text-gray-500">Cyberark logo</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="review-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Review 2: Alps Alpine</CardTitle>
                    <Separator />
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg">
                      <a href="https://www.alpsalpine.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Alps Alpine</a> is a Japanese multinational corporation specializing in electronic components and vehicle information systems. They leverage Bluetooth Low Energy (BLE) for secure digital key solutions, collaborating with industry leaders like Broadcom and Giesecke+Devrient (G+D) to enhance vehicle security and user convenience.
                    </p>
                    <div className="flex flex-col items-center my-6">
                      <Image src="/research/alpsalpine.png" alt="Alps Alpine Logo" width={300} height={150}/>
                      <p className="text-center mt-3 text-sm text-gray-500">Alps Alpine logo</p>
                    </div>
                    <p className="text-lg my-6">
                      In partnership with Broadcom, Alps Alpine developed BLE-based high-accuracy distance measurement for secure keyless entry, enabling seamless locking and unlocking via smartphones. Their system ensures both convenience and security, integrating Broadcom's Bluetooth and Wi-Fi® combo chip for precise proximity detection.
                    </p>
                    <div className="flex flex-col items-center my-6">
                      <Image src="/research/broadcom.png" alt="Broadcom Logo" width={300} height={150}/>
                      <p className="text-center mt-3 text-sm text-gray-500">Broadcom logo</p>
                    </div>
                    <p className="text-lg my-6">
                      Their collaboration with G+D led to a wireless digital key system aligned with the Car Connectivity Consortium (CCC) standard, incorporating encryption technologies similar to mobile payments. Alps Alpine designed keyless entry components, while G+D handled secure digital key issuance and management.
                    </p>
                    <div className="flex flex-col items-center my-6">
                      <Image src="/research/giesecke+devrient.svg" alt="Giesecke+Devrient Logo" width={300} height={150}/>
                      <p className="text-center mt-3 text-sm text-gray-500">Giesecke+Devrient logo</p>
                    </div>
                    <p className="text-lg my-6">
                      BLE's low power consumption and high-accuracy distance measurement make it ideal for automotive applications. Alps Alpine's implementation of this technology provided key insights for our QPG system, influencing our approach to proximity-based authentication using BLE with an ESP32 microcontroller. Additionally, their emphasis on encryption reinforced our decision to adopt post-quantum cryptography, ensuring secure user authentication.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          <div id="technology-review">
            <h1 className="text-4xl font-bold my-6">Technology Review</h1>
            <h1 className="text-2xl font-bold my-6">Proximity Detection Solutions</h1>
            <p className="text-lg">
              Proximity detection is a crucial element of our system, allowing users to interact effortlessly with nearby devices whilst also ensuring security. To determine the most suitable technology for this purpose, we evaluated several options, including Bluetooth Low Energy (BLE), Near-Field Communication (NFC), Radio Frequency Identification (RFID), and Wi-Fi Positioning System (WPS).
            </p>
            <Tabs defaultValue="ble" className="mt-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="ble">BLE</TabsTrigger>
                <TabsTrigger value="nfc">NFC</TabsTrigger>
                <TabsTrigger value="rfid">RFID</TabsTrigger>
                <TabsTrigger value="wps">WPS</TabsTrigger>
              </TabsList>
              <TabsContent value="ble">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Bluetooth Low Energy (BLE)</CardTitle>
                    <Separator />
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg">
                      BLE was selected as the primary technology after careful consideration due to its optimal balance of cost-effectiveness, power efficiency, and broad compatibility. BLE signals provide an adequate range and signal strength variations, enabling accurate detection of a user's presence near a specific device. The ESP32 microcontroller, recognized for its affordable and efficient BLE functionality, will serve as the primary BLE beacon. When paired with a Raspberry Pi, this system can analyze signal strength variations and infer directionality, allowing for precise proximity-based authentication.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="nfc">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Near-Field Communication (NFC)</CardTitle>
                    <Separator />
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg">
                      NFC, although a good consideration for authentication, was rejected after a thorough analysis of our requirements indicated that it was not the best fit for our project. Given that our primary objective is to develop a seamless, proximity-based login system that is both secure and accessible, NFC's inherent limitations would hinder our ability to achieve this goal since it requires users to bring an NFC-enabled card or device into close contact of a reader to complete authentication. While this provides a high level of security by requiring intentional user interaction, it does not align with our vision of seamless authentication where users can be automatically detected as they approach a device. These constraints make NFC less practical for our intended application compared to BLE.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="rfid">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Radio Frequency Identification (RFID)</CardTitle>
                    <Separator />
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg">
                      RFID was also explored as a potential alternative due to its ability to facilitate short-range authentication via electromagnetic fields. This technology operates by having a reader transmit a radio signal that activates passive RFID tags, enabling secure identification. Unlike BLE, RFID tags do not require a power source, making them highly efficient for authentication applications. However, RFID is primarily intended for close-range authentication, typically within just a few centimetres, which does not align with our need for seamless proximity detection across a workspace. Additionally, implementing RFID on a large scale would also necessitate deploying dedicated RFID readers in every interaction zone, significantly increasing both cost and complexity.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="wps">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Wi-Fi Positioning System (WPS)</CardTitle>
                    <Separator />
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg">
                      WPS was another alternative considered, leveraging signal strength (RSSI), triangulation, and fingerprinting to estimate a user's location relative to a device. One notable advantage of Wi-Fi is that it does not require additional hardware, as modern buildings are already equipped with Wi-Fi infrastructure, and most devices support Wi-Fi connectivity. However, WPS is considerably less precise than BLE, and varies greatly depending on interference and network conditions. Another significant drawback is power consumption: Wi-Fi scanning requires substantially more energy than BLE, making it impractical for low-power IoT devices like the ESP32.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            <h1 className="text-2xl font-bold my-6">Programming Languages, Frameworks, Libraries, and APIs</h1>
            <p className="text-lg my-6">
              The development of our QPG system involved multiple programming languages to optimise performance across different components.
            </p>
            <p className="text-lg my-6">
              Python 3.11 serves as the primary backend language due to its extensive ecosystem of libraries and ease of integration with machine learning, cryptography, and IoT frameworks. We used Python for implementing facial recognition, managing BLE proximity detection, and handling API communication. The flexibility of Python enables rapid development while maintaining a high level of security.
            </p>
            <p className="text-lg my-6">
              C++ was used for programming the ESP32 microcontroller, specifically handling BLE communication and cryptographic operations. C++ was chosen due to its low-level hardware control capabilities and high performance, which are essential for real-time data processing on constrained devices. The BLE beaconing functionality and cryptographic token generation occur in C++, ensuring efficient device-to-device communication.
            </p>
            <p className="text-lg my-6">
              We used TypeScript for the frontend web application, primarily in the registration interface. TypeScript provides a structured approach to JavaScript development, offering type safety and enhanced maintainability. By using TypeScript with Next.js, the frontend ensures a modern and responsive user experience while maintaining security best practices.
            </p>
            <p className="text-lg my-6">
              Several other languages were considered but we decided against them due to various limitations. We considered using Java for backend development, but its verbosity and slower development cycle made it less suitable for rapid prototyping and integration with modern AI and cryptographic libraries. Rust was another candidate due to its memory safety and performance benefits, however its ecosystem lacks mature libraries for machine learning and IoT applications, making it less practical for our use case.
            </p>
            <p className="text-lg my-6">
              To streamline development, we researched and integrated several frameworks and libraries for our project, including Litestar (explain why this was chosen over something like Flask) for backend APIs, Next.js for frontend development, and PlatformIO for ESP32 firmware management. Secure encryption is ensured through cryptography and liboqs-python, and BLE communication is managed via bluepy. RESTful APIs also facilitate secure data exchange between system components, ensuring real-time authentication and device communication.
            </p>
            <h1 className="text-2xl font-bold my-6">Comparison of IoT Devices</h1>
            <p className="text-lg my-6">
              Selecting the appropriate hardware for proximity detection and facial recognition was crucial for ensuring our system's reliability and efficiency. We chose the Raspberry Pi 5 as the primary device for processing facial recognition and managing BLE connectivity, while the ESP32 microcontroller serves as a low-power BLE beacon.
            </p>
            <p className="text-lg my-6">
              The Raspberry Pi 5 provides sufficient processing power to run lightweight AI models, making it suitable for on-device authentication within our system. It supports multiple extensions, including the Raspberry Pi Camera Module, which is essential for real-time facial recognition. While alternatives like NVIDIA's Jetson Nano offer superior AI processing capabilities, they are significantly more expensive and somewhat unnecessary for the scope of our project. On the other hand, the ESP32 was selected for proximity detection due to its affordability and efficiency in handling BLE signals. By using a combination of Raspberry Pi 5 and ESP32, our system achieves a balance between computational power, cost-effectiveness, and real-time processing. 
            </p>
            <h1 className="text-2xl font-bold my-6">Time-Based One-Time Password</h1>
            <p className="text-lg my-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>            
          </div>
          <div id="technical-decisions">
            <h1 className="text-4xl font-bold my-6">Technical Decisions</h1>
            <p className="text-lg my-6">
              From our research, we concluded that a good proximity-based access control system would support the following.
            </p>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Ensure secure authentication</CardTitle>
                <Separator />
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">Utilise multi-factor authentication methods such as facial recognition, BLE proximity detection, and post-quantum cryptographic encryption to prevent unauthorized access.</p>
              </CardContent>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Support seamless user experience</CardTitle>
                <Separator />
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">Automatically configure devices based on user proximity and profile, ensuring effortless transitions between workstations, meeting rooms, and other shared spaces.</p>
              </CardContent>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Provide accurate proximity detection</CardTitle>
                <Separator />
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">Implement BLE signal strength analysis for precise location tracking, ensuring users connect only to their intended devices.</p>
              </CardContent>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Feature a user-friendly configuration interface</CardTitle>
                <Separator />
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">Provide a website or app for easy setup, registration, troubleshooting, and user profile management.</p>
              </CardContent>
            </Card>
            <p className="text-lg my-6">
              Having extensively researched different technologies and methodologies, evaluating their strengths and limitations, we made the following decisions on how our Quantum Proximity Gateway should be implemented:
            </p>
            <p className="text-lg my-6">
              Ultimately, BLE offers the best combination of affordability, efficiency, and compatibility, making it the ideal choice for enabling seamless, profile-based authentication across multiple devices in real-world environments. For these reasons, we have chosen BLE as the core technology for proximity detection in our QPG system.
            </p>
            <p className="text-lg my-6">
              Summary Table, Type vs Decision [...]
            </p>
          </div>
          <div id="references">
            <h1 className="text-4xl font-bold my-6">References</h1>
            <p className="text-lg my-6">
              [Abdulhamid - REMIND ME TO FINISH]
            </p>
            <p className="text-lg my-6">
              [1] Alps Alpine: Our Business (2015) Company | Alps Alpine. Available at: https://www.alpsalpine.com/e/company/business/#anc03 (Accessed: 18 March 2025).
            </p>
            <p className="text-lg my-6">
              [2] Dolan, M., Prado, J. del and Marcel, J. (2025) How Alps Alpine uses Bluetooth Technology for Secure Digital Key Solutions, Bluetooth® Technology Website . Available at: https://www.bluetooth.com/blog/how-alps-alpine-uses-bluetooth-technology-for-secure-digital-key-solutions/ (Accessed: 18 March 2025).
            </p>          
            <p className="text-lg my-6">
              [3] Dolan, M., Prado, J. del and Marcel, J. (2025) How Alps Alpine uses Bluetooth Technology for Secure Digital Key Solutions, Bluetooth® Technology Website . Available at: https://www.bluetooth.com/blog/how-alps-alpine-uses-bluetooth-technology-for-secure-digital-key-solutions/ (Accessed: 18 March 2025).
            </p>          
            <p className="text-lg my-6">
              [4]
            </p>          
            <p className="text-lg my-6">
              [5]
            </p>
            <p className="text-lg my-6">
              [6]
            </p>          
            <p className="text-lg my-6">
              [7]
            </p>
            <p className="text-lg my-6">
              [8]
            </p>
            <p className="text-lg my-6">
              [9]
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}