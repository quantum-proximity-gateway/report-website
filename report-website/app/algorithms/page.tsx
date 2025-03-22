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
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
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
        <p className="text-lg">
            Our Quantum Proximity Gateway system incorporates multiple cryptographic, AI-driven, and authentication algorithms to ensure the highest level of security, user authentication, and system interaction. This page provides an in-depth explanation of each algorithm used within the system, including their models, data handling, experimental design, performance evaluation, discussions on potential failures, and areas for improvement. The following sections cover facial recognition, post-quantum cryptography, AES-GCM encryption, TOTP-based authentication, and the AI chatbot model.
            </p>
          <div id="models">
            <h1 className="text-4xl font-bold my-6">Facial Recognition Algorithm</h1>
            <h1 className="text-2xl font-bold my-6">Models </h1>
            <p className="text-lg my-6">
            The facial recognition algorithm used in our QPG project is based on the face_recognition library, which is built upon dlib’s deep learning framework (hyperlink to dlib?). The core idea behind this model is to map human facial features into high-dimensional, numerical vector representations, known as face encodings. The underlying model uses a convolutional neural network (CNN) to encode facial features into these face encodings, which are 128-dimensional feature vectors that uniquely describe a person’s face. When a new face is detected via the Raspberry Pi's camera module, its encoding is compared against a database of known encodings using Euclidean distance. A threshold-based decision mechanism then determines whether a match is valid: deep metric learning ensures that faces of the same person have minimal distance in the feature space, while faces of different people have maximised distances. The system is designed to provide real-time recognition while maintaining a balance between accuracy and computational efficiency.
            </p>
          </div>
          <div id="data">
            <h1 className="text-2xl font-bold my-6">Data</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div id="experiments">
            <h1 className="text-2xl font-bold my-6">Experiments</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div id="discussions">
            <h1 className="text-2xl font-bold my-6">Discussions</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div id="models">
            <h1 className="text-4xl font-bold my-6">Post-Quantum Cryptography</h1>
            <h1 className="text-2xl font-bold my-6">Models </h1>
            <p className="text-lg my-6">
            Our system integrates the CRYSTALS-Kyber module-lattice-based key encapsulation mechanism (ML-KEM), a post-quantum cryptographic protocol resistant to attacks from quantum computers. The security of CRYSTALS-Kyber is based on the difficulty of solving lattice problems, specifically the Learning With Errors (LWE) problem.            </p>
          </div>
          <div id="data">
            <h1 className="text-2xl font-bold my-6">Data</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div id="experiments">
            <h1 className="text-2xl font-bold my-6">Experiments</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div id="discussions">
            <h1 className="text-2xl font-bold my-6">Discussions</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div id="models">
            <h1 className="text-4xl font-bold my-6">AES-GCM Symmetric Encryption</h1>
            <h1 className="text-2xl font-bold my-6">Models </h1>
            <p className="text-lg my-6">
            The facial recognition algorithm used in the QPG project is based on the face_recognition library, which is built upon dlib’s deep learning framework. This approach employs a convolutional neural network (CNN) to encode facial features into a numerical vector representation known as face encodings. These face encodings are 128-dimensional feature vectors that uniquely describe a person’s face. When a new face is detected, its encoding is compared against a database of known encodings using Euclidean distance. A threshold-based decision mechanism determines whether a match is valid. The system is designed to provide real-time recognition while maintaining a balance between accuracy and computational efficiency.
            </p>
          </div>
          <div id="data">
            <h1 className="text-2xl font-bold my-6">Data</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div id="experiments">
            <h1 className="text-2xl font-bold my-6">Experiments</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div id="discussions">
            <h1 className="text-2xl font-bold my-6">Discussions</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div id="models">
            <h1 className="text-4xl font-bold my-6">Time-based One-Time Password (TOTP)</h1>
            <h1 className="text-2xl font-bold my-6">Models </h1>
            <p className="text-lg my-6">
            The facial recognition algorithm used in the QPG project is based on the face_recognition library, which is built upon dlib’s deep learning framework. This approach employs a convolutional neural network (CNN) to encode facial features into a numerical vector representation known as face encodings. These face encodings are 128-dimensional feature vectors that uniquely describe a person’s face. When a new face is detected, its encoding is compared against a database of known encodings using Euclidean distance. A threshold-based decision mechanism determines whether a match is valid. The system is designed to provide real-time recognition while maintaining a balance between accuracy and computational efficiency.
            </p>
          </div>
          <div id="data">
            <h1 className="text-2xl font-bold my-6">Data</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div id="experiments">
            <h1 className="text-2xl font-bold my-6">Experiments</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div id="discussions">
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