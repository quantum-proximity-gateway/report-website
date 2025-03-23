import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Algorithms',
  };

export default function Algorithms() {
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
              <BreadcrumbPage>Algorithms</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <div className="flex flex-col items-center shrink-0 border-b p-8">
        <h1 className="text-6xl text-center my-6">Algorithms</h1>
      </div>
      <div className="flex justify-center p-6">
        <div className="max-w-4xl">
          <div id="overview">
            <h1 className="text-4xl font-bold my-6">Overview</h1>
            <p className="text-lg">
              Our Quantum Proximity Gateway system incorporates multiple algorithms to ensure the highest level of security and usability. This page provides an in-depth explanation of each algorithm used within the system. The following sections cover the AI chatbot assistant model, post-quantum cryptography, facial recognition, and time-based one-time password authentication.
            </p>
          </div>
          <div id="ai-chatbot">
            <h1 className="text-4xl font-bold my-6">AI Chatbot</h1>
            <h1 className="text-2xl font-bold my-6">Models</h1>
            <p className="text-lg my-6">
              As the QPG is designed with all users in mind, we believed an AI chatbot would be highly useful for neurodivergent/immobilised users to modify their accessibility preferences, and therefore we also researched the use of Large Language Models (LLMs) as an assistance feature in a variety of devices and technologies.
            </p>
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
            <h1 className="text-2xl font-bold my-6">Data</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h1 className="text-2xl font-bold my-6">Experiments</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h1 className="text-2xl font-bold my-6">Discussions</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div id="post-quantum-cryptography">
            <h1 className="text-4xl font-bold my-6">Post-Quantum Cryptography</h1>
            <h1 className="text-2xl font-bold my-6">[...]</h1>
            <p className="text-lg my-6">
              [Process begins with KEM stage to exchange shared secret, then mention AES-GCM symmetric encryption]
            </p>
            <p className="text-lg my-6">
              To secure user authentication and communication between devices, post-quantum cryptographic (PQC) standards are necessary to future-proof the system against potential quantum attacks. Traditional encryption methods such as RSA-4096 and Elliptic Curve Cryptography (ECC) are effective today but may become vulnerable with advancements in quantum computing, and so we took this into consideration when designing our system.
            </p>
            <p className="text-lg my-6">
              After researching and evaluating several PQC algorithms, the Module-Lattice-Based Key-Encapsulation Mechanism (ML-KEM - a standardised version of the CRYSTALS-Kyber algorithm) was chosen as the encryption standard for our system. CRYSTALS-Kyber is a lattice-based encryption algorithm that provides strong security guarantees against quantum attacks. It has been recognized by NIST as a promising candidate for post-quantum encryption, making it a reliable and forward-looking choice. We employed the liboqs-python library to implement this encryption within our system, ensuring seamless integration with existing cryptographic workflows. 
            </p>
            <p className="text-lg my-6">
              While RSA-4096 remains a widely used standard, its susceptibility to quantum decryption makes it less suitable for long-term security. ECC offers improved efficiency over RSA but does not provide sufficient resistance against quantum threats. By integrating CRYSTALS-Kyber, our system ensures that all sensitive user data is encrypted during transmission and storage, mitigating potential future security risks.
            </p>
            <p className="text-lg my-6">
              Our system integrates the CRYSTALS-Kyber module-lattice-based key encapsulation mechanism (ML-KEM), a post-quantum cryptographic protocol resistant to attacks from quantum computers. The security of CRYSTALS-Kyber is based on the difficulty of solving lattice problems, specifically the Learning With Errors (LWE) problem.
            </p>
            <h1 className="text-2xl font-bold my-6">Data</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h1 className="text-2xl font-bold my-6">Experiments</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h1 className="text-2xl font-bold my-6">Discussions</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div id="facial-recognition">
            <h1 className="text-4xl font-bold my-6">Facial Recognition</h1>
            <h1 className="text-2xl font-bold my-6">Models</h1>
            <p className="text-lg my-6">
              The facial recognition algorithm used in our QPG project is based on the face_recognition library, which is built upon dlib's deep learning framework <strong>[HYPERLINK]</strong>. The core idea behind this model is to map human facial features into high-dimensional, numerical vector representations, known as face encodings. The underlying model uses a convolutional neural network (CNN) to encode facial features into these face encodings, which are 128-dimensional feature vectors that uniquely describe a person’s face. When a new face is detected via the Raspberry Pi's camera module, its encoding is compared against a database of known encodings using Euclidean distance. A threshold-based decision mechanism then determines whether a match is valid: deep metric learning ensures that faces of the same person have minimal distance in the feature space, while faces of different people have maximised distances. The system is designed to provide real-time recognition while maintaining a balance between accuracy and computational efficiency.
            </p>
            <p className="text-lg my-6">
              Facial recognition was selected as the primary authentication method for our system due to its balance of security, ease of use, and accessibility. By utilising facial recognition, users can gain access to devices seamlessly without requiring physical interaction, making it an ideal solution for accessible two-factor authentication (2FA).
            </p>
            <p className="text-lg my-6">
              The facial recognition process involves capturing a user's face through a camera module, preprocessing the image to enhance clarity, and comparing the extracted facial features against stored encodings. If a match is found within a predefined confidence threshold, authentication is granted. In cases where no encoding data is available or the authentication attempt fails, the system gracefully handles exceptions and logs warnings, ensuring continuous functionality without unexpected interruptions. 
            </p>
            <p className="text-lg my-6">
              Voice recognition was considered as an alternative authentication method but was ultimately not chosen due to several limitations. While voice authentication provides a hands-free authentication method, it is significantly more susceptible to environmental noise, variations in a user's voice due to illness or stress, and spoofing attacks using recorded samples. Additionally, voice authentication systems require continuous model training to adapt to changes in a user's voice, making them less practical for a seamless authentication experience. Facial recognition, in contrast, offers a higher level of security due to unique facial features and ensures a more reliable and user-friendly authentication experience. 
            </p>
            <h1 className="text-2xl font-bold my-6">Data</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h1 className="text-2xl font-bold my-6">Experiments</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h1 className="text-2xl font-bold my-6">Discussions</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div id="conclusion">
            <h1 className="text-4xl font-bold my-6">Conclusion</h1>
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