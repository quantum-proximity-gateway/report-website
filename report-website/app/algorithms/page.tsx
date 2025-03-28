import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Metadata } from 'next';
import { BASE_PATH } from "@/config";
import Image from "next/image";


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
              <BreadcrumbLink href={`${BASE_PATH}/`}>Quantum Proximity Gateway</BreadcrumbLink>
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
              Our Quantum Proximity Gateway system incorporates multiple algorithms to ensure the highest level of security and usability. This page provides an in-depth explanation of each algorithm used within the system. The following sections cover our facial recognition algorithm, post-quantum cryptography, and our AI chatbot assistant model.
            </p>
          </div>
          <div id="facial-recognition">
            <h1 className="text-4xl font-bold my-6">Facial Recognition Algorithm</h1>
            <h1 className="text-2xl font-bold my-6">Models</h1>
            <p className="text-lg my-6">
              The facial recognition algorithm that we implemented in our system is based on the face_recognition library, an open-source Python library that uses deep learning models to detect and recognise faces from images or videos. The model converts human facial features into high-dimensional numerical vectors, known as face encodings, which uniquely represent each face. These encodings are created via a convolutional neural network (CNN), a deep learning network architecture that analyses visual information through pattern and feature detection. To do this, the CNN uses convolution and pooling, where it applies a small filter to the image to identify specific patterns, before simplifying the the data by aggregating information.
            </p>
            <p className="text-lg my-6">  
              When a new face is detected via the Raspberry Pi's camera module, its encoding is compared with a database of known encodings using Euclidean distance. A threshold-based decision mechanism then determines whether or not the match is valid: deep metric learning ensures that faces of the same person have minimal distance in the feature space, while faces of different people have the maximum distances between each other.
            </p>
            <h1 className="text-2xl font-bold my-6">Data</h1>
            <p className="text-lg my-6">
              The dataset we used for facial recognition consists of high-resolution images captured by the Raspberry Pi camera module. Each image undergoes preprocessing to extract meaningful facial features while ensuring real-time recognition performance.
            </p>
            <h1 className="text-lg font-bold my-6">Dataset</h1>
            <p className="text-lg">
              The dataset consists of:
            </p>
            <ul className="text-lg list-disc pl-6 my-3">
              <li>
                <span className="font-medium">Captured faces:</span> Images of authorised personnel stored in an encoded format.
              </li>
              <ul className="list-disc my-3">
                <li>
                  <span className="font-medium">Real-time Frames:</span> Continuous video feed used for live recognition.
                </li>
              </ul>
              <ul className="list-disc my-3">
                <li>
                  <span className="font-medium">Environmental Variations:</span> Data collected under different lighting conditions, angles, and facial obstructions.
                </li>
              </ul>
            </ul>
            <h1 className="text-lg font-bold my-6">Data Preprocessing</h1>
            <ul className="text-lg list-disc pl-6 my-3">
              <li>
                <span className="font-medium">Resolution Adjustment:</span> We resized images to strike a balance between the retention of detail and computational efficiency.
              </li>
              <ul className="list-disc my-3">
                <li>
                  <span className="font-medium">Encoding Generation:</span> Each detected face is converted into a 128-dimensional vector using deep metric learning.
                </li>
              </ul>
              <ul className="list-disc my-3">
                <li>
                  <span className="font-medium">Color Conversion:</span> Frames were converted to RGB format, as required by the face_recognition library.
                </li>
              </ul>
              <ul className="list-disc my-3">
                <li>
                  <span className="font-medium">Noise Reduction:</span> We discarded blurry or low-confidence frames to prevent incorrect identifications.
                </li>
              </ul>
            </ul>
            <h1 className="text-lg font-bold my-6">Training and Testing Sets</h1>
            <p className="text-lg">
              Since this is a real-time face recognition system, it does not have a traditional training phase. Instead, it operates by storing known face encodings and comparing incoming video frames against this dataset.
            </p>
            <h1 className="text-2xl font-bold my-6">Experiments</h1>
            <p className="text-lg">
              We tested the facial recognition system using a controlled environment and real-world scenarios to measure its accuracy and performance under different conditions.
            </p>
            <h1 className="text-lg font-bold my-6">Experiment Deisgn</h1>
            <p className="text-lg">
              The system processes video frames from the Raspberry Pi camera in real-time. A user enters the frame, and the system attempts to detect and match their face against stored encodings. If a match is found, their profile is activated. We conducted experiments to assess the algorithm's performance using the following design:
            </p>
            <ul className="text-lg list-disc pl-6 my-6">
              <li>
                <span className="font-medium">1. Baseline Test:</span> Users were asked to stand at a fixed distance and face the camera directly.
              </li>
              <ul className="list-disc my-3">
                <li>
                  <span className="font-medium">2. Variable Conditions:</span> Users moved around the frame, wore accessories (glasses/masks), or appeared in different lighting.
                </li>
              </ul>
              <ul className="list-disc my-3">
                <li>
                  <span className="font-medium">3. Real-Time Scenario:</span> The system was deployed in a dynamic environment with multiple people moving in and out of the frame.
                </li>
              </ul>
            </ul>
            <h1 className="text-lg font-bold my-6">Performance Evaluation</h1>
            <p className="text-lg">
              The metrics we used to evaluate and measure the algorithm's performance are:
            </p>
            <ul className="text-lg list-disc pl-6 my-6">
              <li>
                <span className="font-medium">Recognition Accuracy (%):</span> Number of correct identifications vs total attempted identifications.
              </li>
              <ul className="list-disc my-3">
                <li>
                  <span className="font-medium">False Positive Rate (FPR):</span> Incorrect matches where an unauthorised face is recognised.
                </li>
              </ul>
              <ul className="list-disc my-3">
                <li>
                  <span className="font-medium">Frame Rate (FPS)</span> Number of frames processed per second.
                </li>
              </ul>
              <ul className="list-disc my-3">
                <li>
                  <span className="font-medium">Latency (ms):</span> Time taken for face detection and verification.
                </li>
              </ul>
            </ul>
            <h1 className="text-lg font-bold my-6">Experiment Results</h1>
            <p className="text-lg my-6">
              [Table: left column = Scenario/Condition - Controlled lighting, dim lighting, wearing glasses, wearing mask?; top row = Accuracy (%), False Positives, FPS, Latency (ms)]
            </p>
            <h1 className="text-lg font-bold my-6">Hyperparameter Investigation</h1>
            <p className="text-lg">
              In our QPG's facial recognition system, optimising hyperparameters is necessary for balancing accuracy, speed and resource efficiency. Hyperparameters are tunable values that affect the model's image processing, face detection, and comparison with stored encodings. We explored several key hyperparameters to observe and determine their impact on system performance.
            </p>
            <ul className="list-disc pl-6 my-6">
              <li>
                <p className="text-lg my-6">
                  <span className="font-medium">HOG vs. CNN for Face Detection:</span> The face_recognition library supports two methods for face detection: Histogram of Oriented Gradients (HOG) and Convolutional Neural Networks (CNN). HOG is a traditional feature descriptor that detects edges and gradients in an image to identify faces. While HOG is computationally efficient, it is typically less accurate in complex environments like low light. CNN on the other hand, is a deep learning-based approach that detects faces with higher accuracy, especially in more difficult situations, but it does require more computational power. We compared each of these approaches' performance based on accuracy and processing time, and evaluated their trade-offs.
                </p>
                <p className="text-lg my-6">
                  [Insert table: Detection Model - HOG/CNN; Accuracy (%), Processing Time (ms per frame); Computational Requirement (High/Low)]
                </p>
                <p className="text-lg my-6">
                  The results show that CNN provides higher accuracy but is less suitable for real-time applications on low-power hardware like the Raspberry Pi. Therefore, we selected HOG for real-time face detection, while CNN could be considered for periodic re-validation of identities.
                </p>
              </li>
              <li>
                <p className="text-lg my-6">
                  <span className="font-medium">cv_scaler - Balancing Speed and Accuracy</span> The cv_scaler parameter controls how much an image is resized before face detection. A higher value results in a smaller image, which speeds up processing but reduces the level of detail available for recognition. We conducted experiments to test different values of cv_scaler, to measure its effect on frame rate (FPS) and recognition accuracy.
                </p>
                <p className="text-lg my-6">
                  [Insert table: cv_scaler - 4,6,8; Accuracy (%), FPS]
                </p>
                <p className="text-lg my-6">
                  From these results, cv_scaler = 8 was selected as the optimal setting, as it provides real-time performance (30 FPS) while maintaining acceptable accuracy.
                </p>
              </li>
              <li>
                <p className="text-lg my-6">
                  <span className="font-medium">Face Encoding Model - Small vs Large Model </span> The face_recognition library offers two pre-trained face encoding models: the Small model (model='small') uses a lightweight neural network, which offers faster encoding but lower accuracy, while the Large model (model='large') uses a deeper neural network, which generates more precise encodings but requires a longer processing time. We analysed which option would be most suitable for our system through experiments:
                </p>
                <p className="text-lg my-6">
                  [Insert table: Encoding model - Small vs Large; Accuracy (%), Encoding time (ms per face)]
                </p>
                <p className="text-lg my-6">
                  Given our system's focus on security, we opted for the large model, as we felt that the additional processing time was justified by the XX% increase in accuracy.
                </p>
              </li>
            </ul>
            <h1 className="text-2xl font-bold my-6">Discussions</h1>
            <p className="text-lg my-6">
              Unfortunately, our facial recognition algorithm did fail for some test examples. Recognition accuracy and performance degraded under these circumstances:
            </p>
            <ul className="text-lg list-disc pl-6 my-6">
              <li>
                <span className="font-medium">Occlusions:</span> If a user wears glasses or a mask, recognition accuracy drops.
              </li>
              <li>
                <span className="font-medium">Lighting Conditions:</span> Poor lighting can degrade performance.
              </li>
              <li>
                <span className="font-medium">Low Resolution Input:</span> If the camera resolution is too low, facial features are less distinguishable.
              </li>
            </ul>
            <p className="text-lg">
              In order to improve performance, the stored dataset could be expanded to include variations in lighting, angles and occlusions to maintain high levels of accuracy. Addditonally, our algorithm could also incorporate a hybrid model - we could use CNN for initial face recognition, to ensure accurate face encoding, then switch to HOG for real-time tracking. This method would strike a balance between accuracy and efficiency, enabling reliable identification without excessive resource usage.
            </p>
          </div>
          <div id="post-quantum-cryptography">
            <h1 className="text-4xl font-bold my-6">Post-Quantum Cryptography</h1>
            <h1 className="text-2xl font-bold my-6">Models</h1>
            <p className="text-lg my-6">
              Please refer to the <span className="font-medium">Research</span> page, <span className="font-medium">Post-Quantum Cryptography (PQC) Algorithm</span> section.
            </p>
            <h1 className="text-2xl font-bold my-6">Data</h1>
            <p className="text-lg">
              Our cryptographic algorithm does not require a conventional dataset in the same way that other algorithms do, as it relies on mathematical operations rather than training data. However, the process involves several key components:
            </p>
            <ul className="text-lg list-disc pl-6 my-6">
              <li>
                <span className="font-medium">1. Public and Private Keys:</span> These keys are used in the KEM stage to securely establish a shared secret (key).
              </li>
              <li>
                <span className="font-medium">2. Shared Secret:</span> This is the symmetric key derived from the key encapsulation process, which is then used for AES-GCM encryption.
              </li>
              <li>
                <span className="font-medium">3. Ciphertext and Nonce:</span> The data encrypted using AES-GCM requires a unique nonce for each operation to prevent replay attacks. The nonce is used as an initialization vector for the counter mode of the AES encryption.
              </li>
            </ul>
            <p className="text-lg">
              Furthermore, since PQC is a mathematical system, and is not driven by data, no data preprocessing was necessary. The keys are simply generated during execution, and the shared secret is encapsulated using the Kyber algorithm and then used in AES-GCM.
            </p>
            <h1 className="text-2xl font-bold my-6">Experiments</h1>
            <h1 className="text-lg font-bold my-6">Experiment Design</h1>
            <p className="text-lg">
              While we already knew that CRYSTALS-Kyber provides long-term quantum resistance, we wanted to evaluate its performance in real-world scenarios. In order to assess the performance of the PQC system and algorithms, we conducted multiple iterations of KEM and AES-GCM to measure execution time. We then compared the results to other traditional encryption methods to analyse the efficiency and viability of our PQC in real-world environments.
            </p>
            <h1 className="text-lg font-bold my-6">Performance Evaluation</h1>
            <p className="text-lg">
              To evaluate the performance of the PQC system, we measured the following factors:
            </p>
            <ul className="text-lg list-disc pl-6 my-6">
              <li>
                <span className="font-medium">KEM Performance:</span> The time taken for public/private key generation; time required for encapsulation of a shared secret; time required for decapsulation and retrieval of the shared secret.
              </li>
              <li>
                <span className="font-medium">AES-GCM Encryption Performance</span> The time taken to encrypt data using shared secret; time taken to decrypt and verify integrity of data; key size overhead compared to traditional cryptographic algorithms including RSA-2048.
              </li>
            </ul>
            <h1 className="text-lg font-bold my-6"> Experiment Results</h1>
            <p className="text-lg">
              We conducted experiments as part of our testing, results explaining the overhead caused by ML-KEM-512 can be found on our Testing section under the Performance Testing subheading.
            </p>
            <h1 className="text-2xl font-bold my-6">Discussions</h1>
            <p className="text-lg">
              While the combination of CRYSTALS-Kyber and AES-CGM provides quantum-resistant security, the algorithm does face challenges in certain test examples:
            </p>
            <ul className="text-lg list-disc pl-6 my-6">
              <li>
                <span className="font-medium">Security Implications:</span> Since AES-GCM requires a unique nonce for every encryption operation, improper handling of the nonces can lead to security vulnerabilities, such as key reuse attacks.
              </li>
              <li>
                <span className="font-medium">Computational Overhead:</span> While key encapsulation is efficient, the added step of using PQC introduces slight latency compared to traditional symmetric key exchanges like Diffie-Hellman.
              </li>
              <li>
                <span className="font-medium">Larger Key Sizes:</span> Kyber-512 public keys (800 bytes) and ciphertexts (768 bytes) are much bigger than standard RSA-2048 keys (~256 bytes), and this could introduce additional bandwidth and storage requirements.
              </li>
            </ul>
            <p className="text-lg">
              To improve performance, we could consider the following modifications:
            </p>
            <ul className="text-lg list-disc pl-6 my-6">
              <li>
                <span className="font-medium">Improved Key Storage:</span> We could efficiently manage key pairs to minimise memory overhead.
              </li>
              <li>
                <span className="font-medium">Optimised Nonce Generation for AES-GCM </span> Use a cryptographically secure pseudo-random number generator (CSPRNG) for nonce generation. Implement a nonce-reuse prevention mechanism to mitigate security risks.
              </li>
            </ul>
          </div>
          <div id="ai-chatbot">
            <h1 className="text-4xl font-bold my-6">AI Inferencing</h1>
            <h1 className="text-2xl font-bold my-6">Models</h1>
            <p className="text-lg my-6">
              As part of the Offline AI Working Group, we were tasked with experimenting different ways of inferencing, these types of LLMs, whilst making sure they were efficient and embeddable as executables. There were two options that our team really considered, native compilation using llama.cpp or Ollama-based inferencing.
            </p>
            <p className="text-lg my-6">
              The AI chatbot in our QPG system is powered by a Large Language Model (LLM), using IBM's Granite 3.2-8B-Instruct model. The model is specifically trained for creating human-like text responses and operates through an instruction-based system, in which it is guided to reply in structured JSON format.
            </p>
            <h1 className="text-2xl font-bold my-6">Data</h1>
            <h1 className="text-lg font-bold my-6">Data Preprocessing</h1>
            <p className="text-lg">
              When interacting with the chatbot, user input is tokenised and decoded into a format that the model can utilise. Tokenisation breaks down the input text into small pieces (tokens), which are then mapped to embeddings. These embeddings allow the model to process and generate text efficiently. That is the high-level overview of how these LLM inferencing programs work.
            </p>
            <p className="text-lg my-6">
              Our specific chatbot needs to operate in a JSON format, which means that all responses are structured acccordingly. The model is explicitly instructed to return responses in JSON in a "message" field, so that the output's formatting is consistent in order to be processed in later parts of the system.
            </p>
            <h1 className="text-2xl font-bold my-6">Experiments</h1>
            <h1 className="text-lg font-bold my-6">Experiment Design</h1>
            <p className="text-lg">
              We assessed the inferencing performance through varied test cases, where the same prompts were given to the model, and we evaluated the inferencing performance. These test cases simulate real world examples, specifically the customisation of user preferences, which was the intended function of the chatbot.
            </p>
            <h1 className="text-lg font-bold my-6">Performance Evaluation</h1>
            <p className="text-lg">
              We measured the performance of this algorithm using the following criteria:
            </p>
            <ul className="text-lg list-disc pl-6 my-6">
              <li>
                <span className="font-medium">Tokens per Second:</span> The number of tokens generated every second by each implementation.
              </li>
              <li>
                <span className="font-medium">Response Latency</span> The time taken to generate a response, measured in milliseconds.
              </li>
            </ul>
            <h1 className="text-lg font-bold my-6"> Experiment Results</h1>
            <p className="text-lg my-6">
              We conducted a performance comparison between the Ollama framework and the llama.cpp implementation. The results, as illustrated in the performance graph below, show that while Ollama maintains a more stable token generation rate over multiple message exchanges, the llama.cpp implementation exhibits a gradual decline in performance. This highlights potential inefficiencies in memory management, or computational overhead in llama.cpp for prolonged interactions.
            </p>
            <p className="text-lg my-6 flex flex-col items-center">
              <Image
                src="/algorithms/figure-1.png"
                alt="Ollama v llama.cpp performance comparison"
                width={500}
                height={500}
                className="mb-2"
              />
              <span className="text-sm text-muted-foreground text-center mt-2">
                Figure 1: Performance comparison of token generation rates between Ollama and llama.cpp 
              </span>
            </p>
            <p className="text-lg my-6">
              The above graph shows the rate of token generation per second as the chatbot processes multiple messages. Further optimisations in thread allocation and caching mechanisms could help bridge the performance gap.
            </p>
            <h1 className="text-2xl font-bold my-6">Discussions</h1>
            <p className="text-lg my-6">
              We could easily conclude that utilising ollama as our choice of LLM inferencing was the best option, due to the backend optimization that the Ollama team could perform that we could not. This was further confirmed by Bill Higgins (IBM VP Watson X), after a presentation for IBM OIC where he encouraged our team to keep exploring Ollama.
            </p>
            <p className="text-lg">
              However, we are still very proud of the work we completed as it also empowered other teams in our year to clone our repository and try out the llama.cpp inferencing on their own projects.
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