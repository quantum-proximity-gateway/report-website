import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
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
              Bluetooth and proximity-based computing have become integral to various industries, from IoT-powered smart offices to sophisticated access control systems. To identify the most effective technologies and resources for the QPG, we conducted an in-depth analysis of existing proximity-based automation and authentication systems, examining their software and hardware implementations to understand the key factors driving their functionality.
            </p>
            <p className="text-lg my-6">
              From our research, we concluded that a good proximity-based access control system must:
            </p>
            <ul className="text-lg list-disc pl-6 my-6">
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
                <strong>Feature a user-friendly configuration interface:</strong> Provide a website or app for easy setup, registration, troubleshooting, and user profile management.
              </li>
            </ul>
            <p className="text-lg my-6">
              As the QPG is designed with all users in mind, we believed an AI chatbot would be highly useful for neurodivergent/immobilised users to modify their accessibility preferences, and therefore we also researched the use of Large Language Models (LLMs) as an assistance feature in a variety of devices and technologies.
            </p>
            <h1 className="text-2xl font-bold my-6">Review 1: Yubico Key</h1>
            <p className="text-lg">
              <a href="https://www.yubico.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Yubico</a>{" "} is an American company manufacturing hardware authentication devices, their main product is the Yubikey which is a security key utilised for 2FA based authentication. They have a diverse range of products which tangentially relate to our project, utilising technologies like NFC, OTP and FIDO2.
            </p>
            <div className="flex flex-col items-center my-6">
              <Image src="/research/yubico.png" alt="Yubico Key Lineup" width={400} height={200}/>
              <p className="text-center mt-3 text-sm text-gray-500">Figure 1: Various YubiKey security devices offering multi-factor authentication</p>
            </div>

            <p className="text-lg my-6">
              Their products serve as the industry standard for hardware-based authentication systems, our intial prototypes were inspired by their work as we also considered using Near-Field Communication (NFC) based authentication, however after gathering our requirements and surveying stakeholders we realised it would not be the most appropriate for the purposes of our project. This is due to the fact that our project is largely aimed at creating a seamless proximity-based login system that is both accessible and secure. NFC would hinder our ability to leverage proximity-based authentication.
            </p>
            <p className="text-lg my-6">
              As additional authentication, we were also inspired by the usecase of these keys as TOTP generators that could validate their authenticity with an external server. As part of our research, we've also been in touch with employees from <a href="https://www.cyberark.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">CyberArk</a> - one of the leading InfoSec companies that specialises in identity security and they also recommended an approach involving TOTP authentication which we talk about in more detail in our algorithms page.
            </p>
            <h1 className="text-2xl font-bold my-6">Review 2: Alps Alpine's Secure Digital Key</h1>
            <p className="text-lg my-6">
              <a href="https://www.alpsalpine.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Alps Alpine</a> is a Japanese multinational corporation specialising in electronic components and in-vehicle information systems [1]. The company has continuously utilised Bluetooth technology to develop secure digital key solutions, enhancing user convenience and vehicle security. Through collaborations with industry leaders like Broadcom and Giesecke+Devrient (G+D), Alps Alpine has introduced advanced systems that employ Bluetooth Low Energy (BLE) for precise distance measurement and keyless entry functionalities [2], features that we required for our own QPG system.
            </p>
           <div className="flex flex-col items-center my-6">
            <div className="flex flex-row gap-4 justify-center">
              <Image src="/research/alpsalpine.png" alt="Alps Alpine Logo" width={300} height={150}/>
              <Image src="/research/broadcom.png" alt="Broadcom Logo" width={300} height={150}/>
            </div>
            <p className="text-center mt-3 text-sm text-gray-500">Alps Alpine and Broadcom logos</p>
          </div>
            <p className="text-lg my-6">
              In partnership with Broadcom, Alps Alpine developed a high-accuracy distance measurement system based on BLE technology. This system enables secure keyless entry by accurately determining the proximity of a user's smartphone to the vehicle, allowing for seamless locking and unlocking without physical keys. Broadcom's innovative smartphone Bluetooth and Wi-Fi® combo chip supports these high-accuracy distance measurements, ensuring both security and convenience for users.
            </p>          
            <p className="text-lg my-6">
              Alps Alpine also collaborated with G+D to create a wireless digital key system compliant with the Car Connectivity Consortium (CCC) global standard specification. This system integrates advanced security technologies similar to those used in credit cards and mobile payments, ensuring secure communication between the vehicle and the user's smartphone. Alps Alpine developed the keyless entry system components, including communication modules and electronic control units (ECUs), while G+D focused on secure digital key issuance and management systems.
            </p>          
            <p className="text-lg my-6">
              Central to these innovations is the use of BLE technology, which offers low power consumption and high-accuracy distance measurement capabilities. BLE facilitates precise positioning and secure communication between devices, making it ideal for automotive applications where both security and efficiency are paramount. By utilising BLE, Alps Alpine's digital key solutions ensure reliable performance while maintaining the security standards required for vehicle access systems.
            </p>          
            <p className="text-lg my-6">
              Alps Alpine's use of BLE for secure digital key solutions provided valuable insights for enhancing our QPG system. Their approach to high-accuracy distance measurement using BLE highlights the importance of precise proximity detection for seamless authentication. By leveraging similar BLE technology, our system can ensure users are accurately linked to the intended devices (in our case, an ESP32 microcontroller) without interference. Additionally, their collaboration with security-focused partners like Giesecke+Devrient emphasises the need for robust encryption, reinforcing our decision to implement post-quantum cryptography for secure user authentication. The integration of BLE with cloud-based key management also aligns with our system's requirement for IBM Cloud deployment, ensuring real-time access control across multiple devices. Overall, Alps Alpine's focus on security, low power consumption, and seamless user experience provides a strong reference for optimising proximity-based authentication in my own QPG system.
            </p>          
          </div>
          <div id="technology-review">
            <h1 className="text-4xl font-bold my-6">Technology Review</h1>
            <h1 className="text-2xl font-bold my-6">Proximity Detection Solutions</h1>
            <p className="text-lg">
            Proximity detection is a critical component of our system, enabling users to interact seamlessly with nearby devices while maintaining security and profile-based access control. Various technologies were evaluated for this purpose, including Bluetooth Low Energy (BLE), Near-Field Communication (NFC), Radio Frequency Identification (RFID), and Wi-Fi-based positioning. </p>
            <p className="text-lg my-6">
              BLE was chosen as the primary technology for proximity detection due to its balance of cost-effectiveness, power efficiency, and widespread compatibility. BLE signals can provide sufficient range and signal strength variations to determine a user's presence near a specific device. The ESP32 microcontroller, known for its low-cost and efficient BLE functionality, will act as the primary BLE beacon. When combined with a Raspberry Pi, the system can detect signal strength variations and infer directionality, allowing for accurate proximity-based authentication. 
            </p>
            <p className="text-lg my-6">
              RFID (Radio Frequency Identification) was considered as an alternative due to its capability for short-range authentication using electromagnetic fields. RFID operates by having a reader transmit a radio signal that activates passive RFID tags, allowing for secure identification. Unlike BLE, RFID does not require power on the tag itself, making it highly efficient for authentication applications. However, RFID is primarily designed for close-range authentication, typically within a few centimeters, which does not align with our requirement for seamless proximity detection across a room or workspace. Additionally, RFID lacks the ability to track real-time distance variations like BLE, making it less effective for dynamic user-device interaction. Widespread RFID implementation would also require installing dedicated RFID readers in every interaction zone, increasing both complexity and cost.
            </p>
            <p className="text-lg my-6">
              Wi-Fi-based positioning was another potential solution, using signal strength (RSSI), triangulation, and fingerprinting to estimate a user's location relative to a device. One advantage of Wi-Fi is that it does not require additional hardware, since most modern buildings are already equipped with Wi-Fi infrastructure, and nearly all devices support Wi-Fi connectivity. However, Wi-Fi-based proximity detection is significantly less precise than BLE, with typical accuracy ranging from 3 to 5 meters, depending on interference and network conditions. Another major drawback is power consumption: Wi-Fi scanning requires significantly more energy than BLE, making it impractical for low-power IoT devices such as the ESP32. Additionally, Wi-Fi-based tracking raises privacy and security concerns, as it often relies on tracking MAC addresses and network data, which could introduce vulnerabilities. 
            </p>
            <p className="text-lg my-6">
              Ultimately, BLE's balance of affordability, efficiency, and compatibility makes it the ideal solution for enabling seamless, profile-based authentication across multiple devices in real-world environments, which is why we selected this option for use in our QPG system. 
            </p>
            <h1 className="text-2xl font-bold my-6">Facial Recognition for Authentication</h1>
            <p className="text-lg my-6">
              Facial recognition was selected as the primary authentication method for our system due to its balance of security, ease of use, and accessibility. By utilising facial recognition, users can gain access to devices seamlessly without requiring physical interaction, making it an ideal solution for accessible two-factor authentication (2FA).
            </p>
            <p className="text-lg my-6">
              The facial recognition process involves capturing a user's face through a camera module, preprocessing the image to enhance clarity, and comparing the extracted facial features against stored encodings. If a match is found within a predefined confidence threshold, authentication is granted. In cases where no encoding data is available or the authentication attempt fails, the system gracefully handles exceptions and logs warnings, ensuring continuous functionality without unexpected interruptions. 
            </p>
            <p className="text-lg my-6">
              Voice recognition was considered as an alternative authentication method but was ultimately not chosen due to several limitations. While voice authentication provides a hands-free authentication method, it is significantly more susceptible to environmental noise, variations in a user's voice due to illness or stress, and spoofing attacks using recorded samples. Additionally, voice authentication systems require continuous model training to adapt to changes in a user's voice, making them less practical for a seamless authentication experience. Facial recognition, in contrast, offers a higher level of security due to unique facial features and ensures a more reliable and user-friendly authentication experience. 
            </p>
            <h1 className="text-2xl font-bold my-6">Post-Quantum Cryptography (PQC) Encryption</h1>
            <p className="text-lg my-6">
              To secure user authentication and communication between devices, post-quantum cryptographic (PQC) standards are necessary to future-proof the system against potential quantum attacks. Traditional encryption methods such as RSA-4096 and Elliptic Curve Cryptography (ECC) are effective today but may become vulnerable with advancements in quantum computing, and so we took this into consideration when designing our system.
            </p>
            <p className="text-lg my-6">
              After researching and evaluating several PQC algorithms, the Module-Lattice-Based Key-Encapsulation Mechanism (ML-KEM - a standardised version of the CRYSTALS-Kyber algorithm) was chosen as the encryption standard for our system. CRYSTALS-Kyber is a lattice-based encryption algorithm that provides strong security guarantees against quantum attacks. It has been recognized by NIST as a promising candidate for post-quantum encryption, making it a reliable and forward-looking choice. We employed the liboqs-python library to implement this encryption within our system, ensuring seamless integration with existing cryptographic workflows. 
            </p>
            <p className="text-lg my-6">
              While RSA-4096 remains a widely used standard, its susceptibility to quantum decryption makes it less suitable for long-term security. ECC offers improved efficiency over RSA but does not provide sufficient resistance against quantum threats. By integrating CRYSTALS-Kyber, our system ensures that all sensitive user data is encrypted during transmission and storage, mitigating potential future security risks.
            </p>
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
              To streamline development, we researched and integrated several frameworks and libraries for our project, including Flask for backend APIs, Next.js for frontend development, and PlatformIO for ESP32 firmware management. Secure encryption is ensured through cryptography and liboqs-python, and BLE communication is managed via bluepy. RESTful APIs also facilitate secure data exchange between system components, ensuring real-time authentication and device communication.
            </p>
            <h1 className="text-2xl font-bold my-6">Comparison of IoT Devices</h1>
            <p className="text-lg my-6">
              Selecting the appropriate hardware for proximity detection and facial recognition was crucial for ensuring our system's reliability and efficiency. We chose the Raspberry Pi 5 as the primary device for processing facial recognition and managing BLE connectivity, while the ESP32 microcontroller serves as a low-power BLE beacon.
            </p>
            <p className="text-lg my-6">
              The Raspberry Pi 5 provides sufficient processing power to run lightweight AI models, making it suitable for on-device authentication within our system. It supports multiple extensions, including the Raspberry Pi Camera Module, which is essential for real-time facial recognition. While alternatives like NVIDIA's Jetson Nano offer superior AI processing capabilities, they are significantly more expensive and somewhat unnecessary for the scope of our project. On the other hand, the ESP32 was selected for proximity detection due to its affordability and efficiency in handling BLE signals. By using a combination of Raspberry Pi 5 and ESP32, our system achieves a balance between computational power, cost-effectiveness, and real-time processing. 
            </p>
            <h1 className="text-2xl font-bold my-6">AI Chatbot</h1>
            <p className="text-lg my-6">
              For the AI chatbot implementation within the QPG system, we considered several different approaches, including rule-based, retrieval-based, and generative AI models. 
            </p>
            <p className="text-lg my-6">
              Rule-based chatbots, which rely on predefined scripts and decision trees, were found to be too restrictive for handling dynamic authentication and user interactions within our system. For example, these chatbots could adjust accessibility settings based on specific user commands (e.g. "Enable high-contrast mode"), but they wouldn't handle complex, context-aware requests effectively. If a user needed nuanced adjustments like "Make this text easier to read for my visual impairment," a rule-based chatbot would struggle without explicitly preprogrammed responses. 
            </p>
            <p className="text-lg my-6">
              Retrieval-based models, which select responses from a fixed database, provided more flexibility, but lacked the adaptability needed for personalised accessibility adjustments. For example, if a user asked for a new accessibility configuration that wasn't in the database, the chatbot wouldn't be able to generate a novel response or action. 
            </p>
            <p className="text-lg my-6">
            Generative AI models, particularly those based on transformer architectures, offered the most natural and context-aware responses, although they required substantial computational resources. Given the need for seamless interaction and in spite of the computational cost, the chatbot was designed to modify accessibility settings using Granite 3.2 and AI, ensuring an intuitive and responsive experience tailored to user needs.
            </p>
          </div>
          <div id="technical-decisions">
            <h1 className="text-4xl font-bold my-6">Technical Decisions</h1>
            <p className="text-lg my-6">
              Having extensively researched different technologies and methodologies, evaluating their strengths and limitations, we made the following decisions on how our Quantum Proximity Gateway should be implemented:
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