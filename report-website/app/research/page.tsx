import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardFooter, CardTitle, CardDescription } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
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
                      <a href="https://www.yubico.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition-colors">Yubico</a> is an American company manufacturing hardware authentication devices, their main product is the YubiKey which is a security key utilised for 2FA based authentication <span className="text-muted-foreground">[1]</span>. They have a diverse range of products which tangentially relate to our project, utilising technologies like NFC, OTP and FIDO2.
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
                      As additional authentication, we were also inspired by the usecase of these keys as TOTP generators that could validate their authenticity with an external server. As part of our research, we've also been in touch with employees from <a href="https://www.cyberark.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition-colors">CyberArk</a>, a leading InfoSec companies that specialises in identity security, and they also recommended an approach involving TOTP authentication.
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
                      <a href="https://www.alpsalpine.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition-colors">Alps Alpine</a> is a Japanese multinational corporation specializing in electronic components and vehicle information systems <span className="text-muted-foreground">[2]</span>. They leverage Bluetooth Low Energy (BLE) for secure digital key solutions, collaborating with industry leaders like Broadcom and Giesecke+Devrient (G+D) to enhance vehicle security and user convenience.
                    </p>
                    <div className="flex flex-col items-center my-6">
                      <Image src="/research/alpsalpine.png" alt="Alps Alpine Logo" width={300} height={150}/>
                      <p className="text-center mt-3 text-sm text-gray-500">Alps Alpine logo</p>
                    </div>
                    <p className="text-lg my-6">
                      In partnership with Broadcom, Alps Alpine developed BLE-based high-accuracy distance measurement for secure keyless entry <span className="text-muted-foreground">[3]</span>, enabling seamless locking and unlocking via smartphones. Their system ensures both convenience and security, integrating Broadcom's Bluetooth and Wi-Fi® combo chip for precise proximity detection.
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
            <h1 className="text-2xl font-bold my-6">Wireless Proximity Technology</h1>
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
                      BLE was selected as the primary technology after careful consideration due to its optimal balance of cost-effectiveness, power efficiency, and broad compatibility. BLE signals provide an adequate range and signal strength variations, enabling accurate detection of a user's presence near a specific device <span className="text-muted-foreground">[4]</span>. The ESP32 microcontroller, recognized for its affordable and efficient BLE functionality, will serve as the primary BLE beacon. When paired with a Raspberry Pi, this system can analyze signal strength variations and infer directionality, allowing for precise proximity-based authentication.
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
                      NFC, although a good consideration for authentication, was rejected after a thorough analysis of our requirements indicated that it was not the best fit for our project. Given that our primary objective is to develop a seamless, proximity-based login system that is both secure and accessible, NFC's inherent limitations would hinder our ability to achieve this goal since it requires users to bring an NFC-enabled card or device into close contact of a reader to complete authentication <span className="text-muted-foreground">[5]</span>. While this provides a high level of security, it does not align with our vision of seamless authentication where users can be automatically detected as they approach a device. These constraints make NFC less practical for our intended application compared to BLE.
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
                      RFID was also explored as a potential alternative due to its ability to facilitate short-range authentication via electromagnetic fields. This technology operates by having a reader transmit a radio signal that activates passive RFID tags <span className="text-muted-foreground">[6]</span>, enabling secure identification. Unlike BLE, RFID tags do not require a power source, making them highly efficient for authentication applications. However, RFID is primarily intended for close-range authentication, typically within just a few centimetres, which does not align with our need for seamless proximity detection across a workspace. Additionally, implementing RFID on a large scale would also necessitate deploying dedicated RFID readers in every interaction zone, significantly increasing both cost and complexity.
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
                      WPS was another alternative considered, leveraging signal strength (RSSI), triangulation, and fingerprinting to estimate a user's location relative to a device <span className="text-muted-foreground">[7]</span>. One notable advantage of Wi-Fi is that it does not require additional hardware, as modern buildings are already equipped with Wi-Fi infrastructure, and most devices support Wi-Fi connectivity. However, WPS is considerably less precise than BLE, and varies greatly depending on interference and network conditions. Another significant drawback is power consumption: Wi-Fi scanning requires substantially more energy than BLE, making it impractical for low-power IoT devices like the ESP32.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            <h1 className="text-2xl font-bold my-6">Comparison of IoT Devices</h1>
            <p className="text-lg my-6">
              Choosing the right hardware for proximity detection and facial recognition was essential to ensuring reliability and efficiency in our system. After considering several options, we selected the Raspberry Pi 5 as the primary processing unit for facial recognition, and proximity management, whilst the ESP32 microcontroller is used to function as a low-power BLE beacon.
            </p>
            <Accordion type="single" defaultValue="item-1" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <p className="text-lg font-semibold">
                    Proximity Detector & Authenticator
                  </p>  
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-row items-center justify-center my-6 gap-5">
                    <div className="flex flex-col items-center">
                      <Image src="/research/rpi5.webp" alt="Raspberry Pi 5" width={300} height={150}/>
                      <p className="text-center mt-3 text-sm text-gray-500">Raspberry Pi 5</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <Image src="/research/nvidia-jetson-nano.png" alt="NVIDIA Jetson Nano" width={450} height={300}/>
                      <p className="text-center mt-3 text-sm text-gray-500">NVIDIA Jetson Nano</p>
                    </div>
                  </div>
                  <p className="text-lg">
                    The Raspberry Pi 5 offers ample processing power to handle incoming BLE signals, run facial recognition algorithms, and communicate with our main server <span className="text-muted-foreground">[8]</span>. Furthermore, the Raspberry Pi Camera Module enables us to capture high definition video which is used in the facial recogntion algorithms. Whilst more advanced alternatives like NVIDIA's Jetson Nano provide superior AI capabilities <span className="text-muted-foreground">[9]</span>, they come at a higher cost and exceed the requirements of our project. The Raspberry Pi 5 strikes a balance between performance and affordability.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" defaultValue="item-1" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <p className="text-lg font-semibold">
                    BLE Beacon
                  </p>  
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-row items-center justify-center my-6 gap-5">
                    <div className="flex flex-col items-center6">
                      <Image src="/research/esp32.webp" alt="ESP32" width={250} height={150}/>
                      <p className="text-center mt-3 text-sm text-gray-500">ESP32</p>
                    </div>
                    <div className="flex flex-col items-center6">
                      <Image src="/research/rpi-pico-w.jpg" alt="Raspberry Pi Pico W" width={300} height={150}/>
                      <p className="text-center mt-3 text-sm text-gray-500">Raspberry Pi Pico W</p>
                    </div>
                  </div>
                  <p className="text-lg">
                    The ESP32 was chosen for our low-power BLE beacon due to its cost-effectiveness, and efficiency in sending out BLE signals <span className="text-muted-foreground">[10]</span>. It continuously broadcasts signals so that it can be detected by our Raspberry Pi 5, facilitating proximity detection. Whilst a Raspberry Pi Pico W for example could also serve as a BLE beacon, we opted for the ESP32 due to our prior experience with the platform, and due to it being more established within the IoT community. By integrating the ESP32 with the Raspberry Pi 5, our system achieves an optimal balance of performance and cost to detect the presence and proximity of our users.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <p className="text-lg my-6">
            </p>
            <h1 className="text-2xl font-bold my-6">Programming Languages, Frameworks, and Libraries</h1>
            <p className="text-lg my-6">
              Our system consists of many distinct parts which come together to form the quantum proximity gateway. For each part, we thought about the optimal programming languages which would strike a balance between development time and performance.
            </p>
            <Accordion type="single" defaultValue="item-1" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <p className="text-lg font-semibold">
                    Server
                  </p>  
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-row my-6 gap-5">
                    <div className="flex flex-col items-center">
                      <Image src="/research/python.svg" alt="Python" width={820/9} height={100}/>
                      <p className="text-center mt-3 text-sm text-gray-500">Python</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <Image src="/research/litestar.svg" alt="Litestar" width={100} height={100}/>
                      <p className="text-center mt-3 text-sm text-gray-500">Litestar</p>
                    </div>
                  </div>
                  <p className="text-lg">
                    For our main server that manages user profiles, Python was chosen as the core language due to its simplicity and extensive library ecosystem. The Litestar framework was used to develop the API endpoints on our server. It was chosen over other renowned frameworks such as Flask or Django due to being asynchronous, highly performant, and lightweight out of the box <span className="text-muted-foreground">[11]</span>. Whilst there are more mature, tested frameworks such as Spring for Java, its verbosity and slower development cycle makes it less suitable for rapid prototyping. Moreover, Python bindings for liboqs were available and easy to use allowing us to implement post-quantum encryption without much friction.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" defaultValue="item-1" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <p className="text-lg font-semibold">
                    Desktop App
                  </p>  
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-row my-6 gap-5">
                    <div className="flex flex-col items-center">
                      <Image src="/research/rust.svg" alt="Rust" width={100} height={100}/>
                      <p className="text-center mt-3 text-sm text-gray-500">Rust</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <Image src="/research/tauri.svg" alt="Tauri" width={100} height={100}/>
                      <p className="text-center mt-3 text-sm text-gray-500">Tauri</p>
                    </div>
                  </div>
                  <p className="text-lg">
                    For our desktop application with the AI chatbot, we chose Rust with the Tauri framework to create the backend. Rust offers memory safety and high performance, making it ideal for a secure desktop application. Compared to the popular alternative Electron, Tauri is lightweight and more compact, reducing resource consumption <span className="text-muted-foreground">[12]</span>. It also enables direct access to native system APIs without the heavy resource consumption of bundling an entire Chromium engine, unlike Electron, which requires a full-fledged Chromium instance for rendering.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" defaultValue="item-1" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <p className="text-lg font-semibold">
                    Frontend(s)
                  </p>  
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-row my-6 gap-5">
                    <div className="flex flex-col items-center">
                      <Image src="/research/typescript.svg" alt="TypeScript" width={100} height={100}/>
                      <p className="text-center mt-3 text-sm text-gray-500">TypeScript</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <Image src="/research/next-js.svg" alt="Next.js" width={100} height={100}/>
                      <p className="text-center mt-3 text-sm text-gray-500">Next.js</p>
                    </div>
                  </div>
                  <p className="text-lg">
                    Next.js is a react framework used across all of our frontends (i.e. Desktop app, Reigstration site, Report site, Raspberry Pi BLE proximity demo site) due to its popularity, and ease of use <span className="text-muted-foreground">[13]</span>. By using supported UI libraries such as Chakra UI and shadcn/ui, we were able to quickly develop impressive, robust frontends. Furthermore, TypeScript, which is the language we used with Next.js, provides a structured approach to JavaScript development, offering type safety and enhanced maintainability.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" defaultValue="item-1" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <p className="text-lg font-semibold">
                    Raspberry Pi
                  </p>  
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-row my-6 gap-5">
                    <div className="flex flex-col items-center">
                      <Image src="/research/python.svg" alt="Python" width={820/9} height={100}/>
                      <p className="text-center mt-3 text-sm text-gray-500">Python</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <Image src="/research/rpi.svg" alt="Raspberry Pi" width={100} height={100}/>
                      <p className="text-center mt-3 text-sm text-gray-500">Raspberry Pi</p>
                    </div>
                  </div>
                  <p className="text-lg">
                    Python was chosen to be used on our Raspberry Pi due to its simplicity, and extensive library ecosystem, including Raspberry Pi libraries. Its ease of use allowed us to focus on the overall development of our system, without being bogged down by syntax and other considerations. It is well-suited for implementing facial recognition due to support for libraries like OpenCV and Dlib. Furthermore, its support for BLE communication via bluepy, UART, and USB HID libraries, makes it an excellent choice for IoT hardware.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" defaultValue="item-1" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <p className="text-lg font-semibold">
                    ESP32
                  </p>  
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-row my-6 gap-5">
                    <div className="flex flex-col items-center">
                      <Image src="/research/cpp.svg" alt="C++" width={3825/43} height={100}/>
                      <p className="text-center mt-3 text-sm text-gray-500">C++</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <Image src="/research/platformio.svg" alt="PlatformIO" width={100} height={100}/>
                      <p className="text-center mt-3 text-sm text-gray-500">PlatformIO</p>
                    </div>
                  </div>
                  <p className="text-lg">
                    C++ was chosen to program the ESP32 microcontroller to handle the constant BLE broadcasting, as it is highly performant, and enables low-level hardware control and efficient memory management. This is is crucial for real-time processing on constrained devices. Furthermore, C++ has a mature toolchain, and good support for the Arduino framework, and BLE libraries. Additionally, PlatformIO is used for ESP32 firmware management, streamlining development, debugging, and deployment.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div id="technical-decisions">
            <h1 className="text-4xl font-bold my-6">Technical Decisions</h1>
            <p className="text-lg my-6">
              Having extensively researched different technologies and methodologies, evaluating their strengths and limitations, we made the following decisions on how our Quantum Proximity Gateway should be implemented.
            </p>
            <Card>
              <CardContent className="p-6">
                <Table>
                  <TableHeader>
                    <TableRow className="text-lg bg-gray-100 dark:bg-gray-700">
                      <TableHead className="w-[50%]">Type</TableHead>
                      <TableHead>Decision</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="text-lg">
                        <span className="font-medium">Wireless Proximity Technology</span>
                      </TableCell>
                      <TableCell className="text-lg">
                        Bluetooth Low Energy
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-lg">
                        <span className="font-medium">Proximity Detector & Authenticator</span>
                      </TableCell>
                      <TableCell className="text-lg">
                        Raspberry Pi
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-lg">
                        <span className="font-medium">BLE Beacon</span>
                      </TableCell>
                      <TableCell className="text-lg">
                        ESP32
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-lg">
                        <span className="font-medium">Raspberry Pi</span>
                      </TableCell>
                      <TableCell className="text-lg">
                        Python
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-lg">
                        <span className="font-medium">ESP32</span>
                      </TableCell>
                      <TableCell className="text-lg">
                        C++
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-lg">
                        <span className="font-medium">Server</span>
                      </TableCell>
                      <TableCell className="text-lg">
                        Python, Litestar
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-lg">
                        <span className="font-medium">Desktop App</span>
                      </TableCell>
                      <TableCell className="text-lg">
                        Rust, Tauri
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-lg">
                        <span className="font-medium">Frontends</span>
                      </TableCell>
                      <TableCell className="text-lg">
                        TypeScript, Next.js
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <p className="text-lg my-6">
              From our research, we concluded that a good proximity-based access control system would provide the following.
            </p>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Ensure secure authentication</CardTitle>
                <Separator />
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">Utilise multi-factor authentication methods composed of facial recognition and BLE proximity detection, as well as post-quantum cryptographic encryption to prevent unauthorised access.</p>
              </CardContent>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Support seamless user experience</CardTitle>
                <Separator />
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">Automatically configure devices based on user proximity, ensuring effortless transitions between workstations, meeting rooms, and other shared spaces.</p>
              </CardContent>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Provide accurate proximity detection</CardTitle>
                <Separator />
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">Implement BLE signal strength analysis for precise location tracking, ensuring users connect only to their intended devices.</p>
              </CardContent>
            </Card>
          </div>
          <div id="references">
            <h1 className="text-4xl font-bold my-6">References</h1>
            <ul className="text-lg space-y-6">
              <li className="flex flex-row">
                <span className="font-medium mr-4">[1]</span><span className="text-muted-foreground">Yubico, "Meet the YubiKey". [Online]. Available: <a href="https://www.yubico.com/why-yubico/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition-colors">https://www.yubico.com/why-yubico/</a>. [Accessed March 26, 2025].</span>
              </li>
              <li className="flex flex-row">
                <span className="font-medium mr-4">[2]</span><span className="text-muted-foreground">Alps Alpine, "Our Business". [Online]. Available: <a href="https://www.alpsalpine.com/e/company/business/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition-colors">https://www.alpsalpine.com/e/company/business/</a>. [Accessed March 26, 2025].</span>
              </li>
              <li className="flex flex-row">
                <span className="font-medium mr-4">[3]</span><span className="text-muted-foreground">Alps Alpine, "Alps Alpine and Broadcom Collaborate on a Secure Distance Measurement Solution based on Bluetooth® Technology", Jan. 5, 2021. [Online]. Available: <a href="https://www.alpsalpine.com/e/news/detail/2021-0105-02/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition-colors">https://www.alpsalpine.com/e/news/detail/2021-0105-02/</a>. [Accessed March 26, 2025].</span>
              </li>
              <li className="flex flex-row">
                <span className="font-medium mr-4">[4]</span><span className="text-muted-foreground">Wikipedia, "Bluetooth Low Energy", March 1, 2025. [Online]. Available: <a href="https://en.wikipedia.org/wiki/Bluetooth_Low_Energy" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition-colors">https://en.wikipedia.org/wiki/Bluetooth_Low_Energy</a>. [Accessed March 26, 2025].</span>
              </li>
              <li className="flex flex-row">
                <span className="font-medium mr-4">[5]</span><span className="text-muted-foreground">Wikipedia, "Near-field communication", Feb. 4, 2025. [Online]. Available: <a href="https://en.wikipedia.org/wiki/Near-field_communication" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition-colors">https://en.wikipedia.org/wiki/Near-field_communication</a>. [Accessed March 26, 2025].</span>
              </li>
              <li className="flex flex-row">
                <span className="font-medium mr-4">[6]</span><span className="text-muted-foreground">Wikipedia, "Radio-frequency identification", March 18, 2025. [Online]. Available: <a href="https://en.wikipedia.org/wiki/Radio-frequency_identification" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition-colors">https://en.wikipedia.org/wiki/Radio-frequency_identification</a>. [Accessed March 26, 2025].</span>
              </li>
              <li className="flex flex-row">
                <span className="font-medium mr-4">[7]</span><span className="text-muted-foreground">Wikipedia, "Wi-Fi positioning system", Jan. 19, 2025. [Online]. Available: <a href="https://en.wikipedia.org/wiki/Wi-Fi_positioning_system" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition-colors">https://en.wikipedia.org/wiki/Wi-Fi_positioning_system</a>. [Accessed March 26, 2025].</span>
              </li>
              <li className="flex flex-row">
                <span className="font-medium mr-4">[8]</span><span className="text-muted-foreground">Raspberry Pi, "Buy a Raspberry Pi 5". [Online]. Available: <a href="https://www.raspberrypi.com/products/raspberry-pi-5/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition-colors">https://www.raspberrypi.com/products/raspberry-pi-5/</a>. [Accessed March 26, 2025].</span>
              </li>
              <li className="flex flex-row">
                <span className="font-medium mr-4">[9]</span><span className="text-muted-foreground">NVIDIA, "Jetson Nano Brings the Power of Modern AI to Edge Devices". [Online]. Available: <a href="https://www.nvidia.com/en-gb/autonomous-machines/embedded-systems/jetson-nano/product-development/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition-colors">https://www.nvidia.com/en-gb/autonomous-machines/embedded-systems/jetson-nano/product-development/</a>. [Accessed March 26, 2025].</span>
              </li>
              <li className="flex flex-row">
                <span className="font-medium mr-4">[10]</span><span className="text-muted-foreground">Espressif, "ESP32 Wi-Fi & Bluetooth SoC". [Online]. Available: <a href="https://www.espressif.com/en/products/socs/esp32" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition-colors">https://www.espressif.com/en/products/socs/esp32</a>. [Accessed March 26, 2025].</span>
              </li>
              <li className="flex flex-row">
                <span className="font-medium mr-4">[11]</span><span className="text-muted-foreground">Litestar, "Litestar". [Online]. Available: <a href="https://litestar.dev/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition-colors">https://litestar.dev/</a>. [Accessed March 26, 2025].</span>
              </li>
              <li className="flex flex-row">
                <span className="font-medium mr-4">[12]</span><span className="text-muted-foreground">Lőrik Levente, "Tauri VS. Electron - Real world application", Aug. 22, 2022. [Online]. Available: <a href="https://www.levminer.com/blog/tauri-vs-electron" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition-colors">https://www.levminer.com/blog/tauri-vs-electron</a>. [Accessed March 26, 2025].</span>
              </li>
              <li className="flex flex-row">
                <span className="font-medium mr-4">[13]</span><span className="text-muted-foreground">Vercel, "Next.js by Vercel - The React Framework". [Online]. Available: <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition-colors">https://nextjs.org/</a>. [Accessed March 26, 2025].</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}