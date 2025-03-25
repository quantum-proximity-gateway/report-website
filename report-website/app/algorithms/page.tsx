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
              Our Quantum Proximity Gateway system incorporates multiple algorithms to ensure the highest level of security and usability. This page provides an in-depth explanation of each algorithm used within the system. The following sections cover the AI chatbot assistant model, post-quantum cryptography, and facial recognition.
            </p>
          </div>
          <div id="ai-chatbot">
            <h1 className="text-4xl font-bold my-6">Facial Recognition Algorithm</h1>
            <h1 className="text-2xl font-bold my-6">Models</h1>
            <p className="text-lg my-6">
            The facial recognition algorithm used in our QPG system is based on the face_recognition library, an open-source Python library that provides tools for facial recognition tasks, and uses deep learning models to detect and recognise faces in images or videos. At its core, the model maps human facial features into high-dimensional numerical vectors, known as face encodings, that uniquely represent each face. These encodings are generated using a convolutional neural network (CNN), a type of deep learning algorithm that analyses visual data by learning hierarchical representations of features through convolutional and pooling layers. When a new face is detected via the Raspberry Pi's camera module, its encoding is compared against a database of known encodings using Euclidean distance. A threshold-based decision mechanism then determines whether a match is valid: deep metric learning ensures that faces of the same person have minimal distance in the feature space, while faces of different people have maximised distances.
            </p>
            <h1 className="text-2xl font-bold my-6">Data</h1>
            <p className="text-lg">
            The dataset we used for facial recognition consists of high-resolution images captured by the Raspberry Pi camera module. Each image undergoes preprocessing to extract meaningful facial features while ensuring real-time recognition performance.            
            </p>
            <h1 className="text-1xl font-bold my-4">Dataset</h1>
            <p className="text-lg">
              The dataset consists of:
            </p>
              <ul className="list-disc pl-6 my-3">
              <li>
                <strong>Captured faces:</strong> Images of authorised personnel stored in an encoded format.
              </li>
              <ul className="list-disc my-3">
              <li>
                <strong>Real-time Frames:</strong> Continuous video feed used for live recognition.
                </li>
              </ul>
                <ul className="list-disc my-3">
              <li>
                <strong>Environmental Variations:</strong> Data collected under different lighting conditions, angles, and facial obstructions.
              </li>
              </ul>
              </ul>
              <h1 className="text-1xl font-bold my-4">Data Preprocessing</h1>
            <p className="text-lg">
            </p>
              <ul className="list-disc pl-6 my-3">
              <li>
                <strong>Resolution Adjustment:</strong> We resized images to balance detail retention and computational efficiency.
              </li>
              <ul className="list-disc my-3">
              <li>
                <strong>Encoding Generation:</strong> Each detected face is converted into a 128-dimensional vector using deep metric learning.
                </li>
              </ul>
                <ul className="list-disc my-3">
              <li>
                <strong>Color Conversion:</strong> Frames were converted to RGB format, as required by the face_recognition library.
              </li>
              </ul>
              <ul className="list-disc my-3">
              <li>
                <strong>Noise Reduction:</strong> We discarded blurry or low-confidence frames to prevent incorrect identifications.
              </li>
              </ul>
              </ul>
              <h1 className="text-1xl font-bold my-4">Training and Testing Sets</h1>
            <p className="text-lg">
            Since this is a real-time face recognition system, it does not have a traditional training phase. Instead, it operates by storing known face encodings and comparing incoming video frames against this dataset.  
            </p>
            <h1 className="text-2xl font-bold my-6">Experiments</h1>
            <p className="text-lg">
              We tested the facial recognition system using a controlled environment and real-world scenarios to measure its accuracy and performance under different conditions.
            </p>
            <h1 className="text-1xl font-bold my-4">Experiment Deisgn</h1>
            <p className="text-lg">
            The system processes video frames from the Raspberry Pi camera in real-time. A user enters the frame, and the system attempts to detect and match their face against stored encodings. If a match is found, their profile is activated.
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>
                <strong>1. Baseline Test:</strong> Users were asked to stand at a fixed distance and face the camera directly.
              </li>
              <ul className="list-disc my-3">
              <li>
                <strong>2. Variable Conditions:</strong> Users moved around the frame, wore accessories (glasses/masks), or appeared in different lighting.
                </li>
              </ul>
                <ul className="list-disc my-3">
              <li>
                <strong>3. Real-Time Scenario:</strong> The system was deployed in a dynamic environment with multiple people moving in and out of the frame.
              </li>
              </ul>
            </ul>
            <h1 className="text-1xl font-bold my-4">Performance Evaluation</h1>
            <p className="text-lg">
              The metrics we used to evaluate and measure the algorithm's performance include:
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>
                <strong>Recognition Accuracy (%):</strong> Number of correct identifications vs total attempted identifications. 
              </li>
              <ul className="list-disc my-3">
              <li>
                <strong>False Positive Rate (FPR):</strong> Incorrect matches where an unauthorised face is recognized.
                </li>
              </ul>
              <ul className="list-disc my-3">
              <li>
                <strong>Frame Rate (FPS)</strong> Number of frames processed per second.
              </li>
              </ul>
              <ul className="list-disc my-3">
              <li>
                <strong>Latency (ms):</strong> Time taken for face detection and verification.
              </li>
              </ul>
            </ul>
            <h1 className="text-1xl font-bold my-4">Experiment Results</h1>
            <p className="text-lg">
              [Table: left column = Scenario/Condition - Controlled lighting, dim lighting, wearing glasses, wearing mask?; top row = Accuracy (%), False Positives, FPS, Latency (ms)]
            </p>
            <h1 className="text-1xl font-bold my-4">Hyperparameter Investigation</h1>
            <p className="text-lg">
            In our QPG's facial recognition system, optimising hyperparameters is crucial for balancing speed, accuracy, and resource efficiency. Hyperparameters are tunable values that affect how the model processes images, detects faces, and matches them against stored encodings. We investigated several key hyperparameters to determine their impact on system performance.
            </p>
            
          </div>
          <div id="discussions">
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
            <h1 className="text-4xl font-bold my-6">AI Chatbot</h1>
            <h1 className="text-2xl font-bold my-6">Models</h1>
            <p className="text-lg my-6">
              The facial recognition algorithm used in our QPG project is based on the face_recognition library, which is built upon dlib's deep learning framework <strong>[HYPERLINK]</strong>. The core idea behind this model is to map human facial features into high-dimensional, numerical vector representations, known as face encodings. The underlying model uses a convolutional neural network (CNN) to encode facial features into these face encodings, which are 128-dimensional feature vectors that uniquely describe a person’s face. When a new face is detected via the Raspberry Pi's camera module, its encoding is compared against a database of known encodings using Euclidean distance. A threshold-based decision mechanism then determines whether a match is valid: deep metric learning ensures that faces of the same person have minimal distance in the feature space, while faces of different people have maximised distances. The system is designed to provide real-time recognition while maintaining a balance between accuracy and computational efficiency.
            </p>
            <h1 className="text-2xl font-bold my-6">Data</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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