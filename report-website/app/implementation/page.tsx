'use client'

import Prism from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-arduino';
import 'prismjs/components/prism-typescript';
import 'prismjs/themes/prism-okaidia.css';
import { useEffect } from 'react';
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Metadata } from 'next';
import Image from "next/image";

export default function Implementation() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
          Prism.highlightAll();
        }
      }, []);

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
              <BreadcrumbPage>Implementation</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <div className="flex flex-col items-center shrink-0 border-b p-8">
        <h1 className="text-6xl text-center my-6">Implementation</h1>
      </div>
      <div className="flex justify-center p-6">
        <div className="max-w-4xl">
            
          <div id="overview">
            <h1 className="text-4xl font-bold my-6">Overview</h1>
            <p className="text-lg mb-6">
                The Quantum Proximity Gateway (QPG) is made up of five core components, each of which serves an incredible important and specific role in creating a secure and accessible system. The project was split into these individual submodules in order to improve the modularity of the system, enable parallel development, and also ensure that each component could be tested and deployed individually. Additionally, due to the complexity of the system and the variety of hardware being used, it was important to ensure that each component could be easily replaced or upgraded without affecting the rest of the system.
            </p>
            <p className="text-lg mb-6">
                As a result of this modularity, each component of the QPG project has different technologies and languages that are best suited for their relevant tasks, and so, we will discuss the implementations and the tools and dependenciees used for each submodule separately in the following sections.
            </p>
          </div>

          <div id="registration-site">
            <h1 className="text-4xl font-bold my-6">Registration Site</h1>
            <p className="text-lg">
              This website is where the user first interacts with QPG - it allows them to register their ESP32 device with their account, as well as setup the facial recognition that is extremely important for the system to work.
            </p>

            <h2 className="text-2xl font-bold my-4">Tools & Dependencies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <Card className="p-4">
                <div className="flex flex-row items-center gap-3">
                <Image src="/implementation/nextjs.png" alt="Next.js logo" width={36} height={36} />
                <div>
                    <h3 className="text-base font-semibold">Next.js</h3>
                    <p className="text-sm text-muted-foreground">
                    The full-stack React framework which is powering the registration site.
                    </p>
                </div>
                </div>
            </Card>

            <Card className="p-4">
                <div className="flex flex-row items-center gap-3">
                <Image src="/implementation/chakraui.png" alt="Chakra UI logo" width={36} height={36} />
                <div>
                    <h3 className="text-base font-semibold">Chakra UI</h3>
                    <p className="text-sm text-muted-foreground">
                    A modular, accessible component library for a responsive website.
                    </p>
                </div>
                </div>
            </Card>

            <Card className="p-4">
                <div className="flex flex-row items-center gap-3">
                <Image src="/implementation/usb.svg" alt="Chakra UI logo" width={36} height={36} />
                <div>
                    <h3 className="text-base font-semibold">Web Serial API</h3>
                    <p className="text-sm text-muted-foreground">
                    Enables secure, browser-based communication with the ESP32 over a serial connection.
                    </p>
                </div>
                </div>
            </Card>
            </div>

            <h2 className="text-2xl font-bold my-4">Web Serial API (ESP32 Communication)</h2>
            <p className="text-lg mb-4">
                The Web Serial API is what allows the browser to communicate with the ESP32 device over a serial connection. This is what we use to retrieve the MAC address of the ESP32 device, and then send it to the server for registration. In general, users grant permission to access serial devices, which then connects the ESP32 to the browser, allowing data to be sent back and forth between the microcontroller and the webpage.
            </p>
            <p className="text-lg mb-4">
                In <code>registration-site/src/app/page.tsx</code>, we have a <code>connectSerial()</code> function. This function is what is called when the user decides to click on the "Connect to device" button on the main page of the registration website, and it uses the Web Serial API to connect to the ESP32 device. The code is shown below.
            </p>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code className="language-ts">
{`async function connectSerial(secret: string): Promise<[string, number]> { // Connect to ESP32 (cu.wchuusbserial)
  const log = document.getElementById('target');

  try {
    // prompt the user to select which serial port they want to connect to
    const port = await navigator.serial.requestPort();
    await port.open({ baudRate: 9600 });
    
    // setup the writeable stream to the ESP32
    const textEncoder = new TextEncoderStream();
    const writableStreamClosed = textEncoder.readable.pipeTo(port.writable);
    const writer = textEncoder.writable.getWriter();

    // setup the read stream from the ESP32
    const decoder = new TextDecoderStream(); // Decodes incoming data from ESP32
    port.readable.pipeTo(decoder.writable);

    const reader = decoder.readable.getReader();
    let macAddress = "";
    let current_time = 0;

    while (true) {
      const { value, done } = await reader.read();
      
      if (value) {
        if (value.length == 19) { // MAC Address are 17 characters long + 2 newlines
          macAddress = value;
          reader.releaseLock();
          current_time = Date.now();
          await writer.write(secret + '\\n'); // write the secret key to the ESP32
          writer.releaseLock();
          break;
        }
      }

      if (done) {
        reader.releaseLock();
        break;
      }
    }

    return [macAddress, current_time];
  }
}
`}
              </code>
            </pre>
            <p className="text-lg mb-4">
                After opening the popup for the user to select a serial port, the function opens the port with a specific baud rate of 9600 (which is what we flashed the ESP32 with). We then set up a text encoder/decoder so that we can actually communicate over the serial lines. Data that is being send from the browser to the ESP32 uses the <i>writer</i>, while the data getting sent from the ESP32 is received by reading from the <i>reader</i> object. 
            </p>
            <p className='text-lg mb-8'>
                The function then enters a loop where it waits for a MAC address string to be sent from the ESP32 (we will cover how the ESP32 is sending this MAC address in the ESP32 section). We know that a MAC address is a fixed length (of 17 characters + 2 characters of <code>\r</code> and <code>\n</code>), so we explicitly check for a value of that length. Finally, only once the MAC address arrives do we release the lock we set on the reader and writer and send the newly generated TOTP secret key back to the ESP32.
            </p>

            <h2 className="text-2xl font-bold my-4">TOTP Secret Generation</h2>
            <p className="text-lg mb-4">
                In the same <code>registration-site/src/app/page.tsx</code> file, we have a <code>handleConnect()</code> method in which we generate the shared TOTP secret of size 160 bits (20 bytes), and give it to the ESP32 over the serial connection after storing it in our React state. In the server, this secret is stored with the device so that the user can authenticate using TOTP.
            </p>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto mb-8">
              <code className="language-ts">
{`randomBytes(20,(err, buf) => {
    const secret = base32Encode(buf, 'RFC4648');
    setSecret(secret);
    connectSerial(secret).then((result) => {
    // rest of the code
    });
})
`}
              </code>
            </pre>

            <h2 className="text-2xl font-bold my-4">Data Encryption</h2>
            <p className="text-lg mb-8">
                Before we send any data from the website to the server, we use a post-quantum key exchange library (mlkem) to generate a shared secret with the server, which is then used for AES-GCM encryption on all communications that happen afterwards. This is the code that is contained within <code>registration-site/src/app/EncryptionClient.tsx</code>.
            </p>

            <h3 className="text-xl font-bold my-4">Post-Quantum Key Exchange</h3>
            <p className="text-lg mb-4">
                In order to do the key exchange, we first start with requesting the server's public key via the server endpoint <code>/kem/initiate</code>. We then encapsulate a shared secret using that public key, and send the ciphertext we generate with that public key encapsulation back to the server, using the endpoint <code>/kem/complete</code>. The server is then able to decapsulate the ciphertext using its private key in order to get the original shared secret key that was generated by the <code>handleConnect()</code> method above. After the endpoint sends the correct response back, we then store the shared secret so that it can be used to symmetrically encrypt all messages going forward. The relevant code snippets for this post-quantum key exchange are highlighted below. These snippets are located in the method <code>genClientSecret()</code>.
            </p>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code className="language-ts">
{`// retrieve server's public key
await axios.post(\`\${API_URL}/kem/initiate\`, data)
  .then(response => {
    const public_key_b64 = response.data.public_key_b64;
    pk = this.base64ToUint8Array(public_key_b64);
  });

// generate the shared secret using mlkem
const sender = new MlKem512();
const [ciphertext, shared_secret] = await sender.encap(pk);

// convert ciphertext to base64 and send to server
const ciphertext_b64 = this.uint8ArrayToBase64(ciphertext);
const complete_data = { client_id: String(this.CLIENT_ID), ciphertext_b64 };
await axios.post(\`\${API_URL}/kem/complete\`, complete_data);
`}
              </code>
            </pre>

            <h3 className="text-xl font-bold my-4">AES-GCM Encryption/Decryption</h3>
            <p className="text-lg mb-4">
                After the post-quantum handshake, the client now also has a shared secret. We then use the following methods to encrypt and decryt data according to the AES-GCM standard.
            </p>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code className="language-ts">
{`encryptData(data: string): EncryptedData {
  const key = this.SHARED_SECRET;
  const nonce = randomBytes(24);
  const bytes = utf8ToBytes(data);
  const aes = gcm(key, nonce);
  const ciphertext = aes.encrypt(bytes);

  return {
    ciphertext_b64: this.uint8ArrayToBase64(ciphertext),
    nonce_b64: this.uint8ArrayToBase64(nonce),
    client_id: this.CLIENT_ID
  }
}

decryptData(data: EncryptedData): string {
  const key = this.SHARED_SECRET;
  const nonce = this.base64ToUint8Array(data.nonce_b64);
  const aes = gcm(key, nonce);
  const plaintext = aes.decrypt(this.base64ToUint8Array(data.ciphertext_b64));
  return new TextDecoder().decode(plaintext);
}
`}
              </code>
            </pre>
            <p className='text-lg mb-4'>
                Encryption essentially takes a JSON string (which will contain username, password, and TOTP sercret), and creates a random 24-byte nonce. This nonce serves as a unique one-time-use number that makes sure that every encryption operation we do is distinct, even with the same key being used over many encryptions. In other words, the same (key, nonce) pair is never reused because, if they are, for whatever reason, the they will produce identical keystream blocks, which would reveal the relationship between messages, making it easy for a malicious actor to decrypt.
            </p>
            <p className='text-lg mb-8'>
                Decryption, on the other hand, takes a response from the server with almost the same structure (ciphertext, nonce and client id). The function then reconstructs the nonce and ciphertext, and this is then decrypted with AES-GCM, returning the resulting plaintext string which the server originally had.
            </p>
            
            <h3 className="text-xl font-bold my-4">Registration Flow</h3>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code className="language-ts">
{`function handleRegister() {
    // other code
    let plaintext = {
      mac_address,
      username,
      password,
      secret,
      timestamp
    }

    let data = encryptionClient.encryptData(JSON.stringify(plaintext));
    axios.post(\`\${API_URL}/register\`, data).then((res) => {
      let decrypted_data: RegisterResponse = JSON.parse(encryptionClient.decryptData(res.data));
      // other code
      router.push(\`/registerFace?mac_address=\${mac_address}\`);
    
    }).catch((err) => {
    // other code
  }
`}
              </code>
            </pre>
            <p className="text-lg mb-8">
                To actually send the registration data to the server, we use the <code>handleRegister()</code> method in <code>registration-site/src/app/page.tsx</code>. This method is quite simple, but it is important nonetheless. First off, assuming we have all the information we need (username, password, mac_address, and shared secret key), we create a plaintext object with this information which we later convert into a JSON. Then, we use our encryption client to encrypt the data, as defined above. Finally, we post the data to the server at <code>/register</code> and handle the response accordingly. Once this is done, we need to navigate to the face registration page, which we use our router for, with the argument of the mac address.
            </p>

            <h3 className="text-xl font-bold my-4">Facial Recognition Video Capture</h3>
            <p className='text-lg mb-4'>
                To register the user's face, as aforementioned, they are automatically directed to the <code>registration-site/src/app/registerFace/page.tsx</code> page. The logic for this section is completely encapsulated inside a React component called <code>RegisterFaceContent</code>, and the basic idea is that we first capture a 5-second video using the user's webcam, using a countdown to measure the time and let the user know how much time is remaining. Then, we submit the video the server so that the user's face can be registered.
            </p>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code className="language-ts">
{`// request webcam
const stream = await navigator.mediaDevices.getUserMedia({ video: true });
videoRef.current.srcObject = stream; // live preview

const recorder = new MediaRecorder(stream);
const chunks: BlobPart[] = [];
recorder.ondataavailable = (event) => {
  chunks.push(event.data);
};

recorder.onstop = () => {
  const blob = new Blob(chunks, { type: 'video/webm' }); // record in webm format - most compatible
  setVideoBlob(blob);
  // Stop the camera
  stream.getTracks().forEach(track => track.stop());
};
recorder.start();
`}
              </code>
            </pre>
            <p className="text-lg mb-4">
                We first need to request access to the webcam, which is done via the <code>navigator.mediaDevices.getUserMedia()</code> method. This method returns a promise that resolves to a MediaStream object representing the video stream from the user's webcam, and we then set this stream as the source for our video element, which allows us to preview the video in real-time. After creating a <code>MediaRecorder</code> object (used to record the video stream), we wait for the <code>ondataavailable</code> event, and then push the data into an array of chunks because the data will not be available all at once (due to being a stream). Finally, after the recording ends, we create a new Blob object, because this is the best and most efficient format for sending the video to the server.
            </p>
            <p className="text-lg mb-4">
                The code below shows how we did the 5-second countdown for the video, as well as how we actually submit the video (as a video blob) to the server.
            </p>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto mb-8">
              <code className="language-ts">
{`// 5-second video countdown
const countdownInterval = setInterval(() => {
  setCountdown(prevCountdown => {
    if (prevCountdown <= 1) {
      clearInterval(countdownInterval);
      stream.getTracks().forEach(track => track.stop());
      setRecord(false);
      setRecorded(true);
    }
    return prevCountdown - 1;
  });
}, 1000);

// submit video to server as video blob
const formData = new FormData();
formData.append('video', videoBlob, 'recorded-video.webm');
formData.append('mac_address', mac_address as string);

await axios.post(\`\${API_URL}/register/face\`, formData, {
  headers: { 'Content-Type': 'multipart/form-data' }
});
`}
              </code>
            </pre>
            <p className="text-lg mb-2 mt-8">
                Overall, the workflow for the registration site is as follows:
            </p>
            <ul className="space-y-3 list-decimal list-inside text-lg pl-4 mb-2">
                <li>The user initially visits the main registration page and clicks on "Connect to device".</li>
                <li>The Web Serial API is then used to connect to the ESP32, a newly-generated TOTP secret is sent to the ESP32, and the ESP32's MAC address is transmitted to the browser, which is displayed in that MAC address field. </li>
                <li>The user then fills out their username and password, clicking on the submit button, which calls the server's <code>/register</code> endpoint after encrypting the data (AES-GCM with a shared secret generated from a post-quantum handshake).</li>
                <li>The server returns a success response, at which point the user is redrected to the face recognition page.</li>
                <li>The user then records a 5-second video with the camera, and the captured video is converted into a video blob and sent to the server, which will then register the user's face (this will be covered in more detail in the Server section).</li>
            </ul>
            <p className="text-lg mb-8">
                Throughout the entire process, the <code>EncryptionClient</code> ensures that all sensitive data such as username, password, and TOTP secret, are always encrypted before being sent.
            </p>
          </div>

          <div id="server">
            <h1 className="text-4xl font-bold my-6">Server</h1>

            <p className="text-lg mb-6">
                The server is where we handle all of the requests that the other components of the project make, as well as store all of our data. In our case, this means handling how to register an ESP32 device with a user (and their account details), as well as storing a user's accessibility preferences which can be retrieved. The server additionally handles setting up the encrypted communication between QPG devices, ensuring that all data is secure and private, using quantum-secure encryption standards.
            </p>

            <h2 className="text-2xl font-bold my-4">Tools & Dependencies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <Card className="p-4">
                <div className="flex flex-row items-center gap-3">
                <Image src="/implementation/litestar.svg" alt="Litestar logo" width={36} height={36} />
                <div>
                    <h3 className="text-base font-semibold">Litestar</h3>
                    <p className="text-sm text-muted-foreground">
                    Async, fast, and light-weight Python web framework running our server's API.
                    </p>
                </div>
                </div>
            </Card>

            <Card className="p-4">
                <div className="flex flex-row items-center gap-3">
                <Image src="/implementation/liboqs.png" alt="liboqs logo" width={36} height={36} />
                <div>
                    <h3 className="text-base font-semibold">Liboqs</h3>
                    <p className="text-sm text-muted-foreground">
                    Open-source library for quantum-safe cryptographic algorithms.
                    </p>
                </div>
                </div>
            </Card>

            <Card className="p-4">
                <div className="flex flex-row items-center gap-3">
                <Image src="/implementation/opencv.svg" alt="OpenCV logo" width={36} height={36} />
                <div>
                    <h3 className="text-base font-semibold">OpenCV</h3>
                    <p className="text-sm text-muted-foreground">
                    Handles camera input and image preprocessing for facial recognition.
                    </p>
                </div>
                </div>
            </Card>
            </div>

            <h2 className="text-2xl font-bold my-4">Key Feature: Encrypted Profile Fetching</h2>
            <p className="text-lg mb-4">
                When a Raspberry Pi requests a user profile, the server validates the BLE MAC address and returns encrypted settings using post-quantum cryptography.
            </p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm mb-4">
                <code>{`@get("/profile/{mac_address}")
            async def get_profile(mac_address: str) -> dict:
                user = await db.get_user_by_mac(mac_address)
                if not user:
                    raise NotFoundException("User not found")
                
                encrypted_profile = pqc_encrypt(user.profile_data)
                return {"encrypted_data": encrypted_profile}`}</code>
            </pre>
            <p className="text-lg mb-8">
                The server uses a custom `pqc_encrypt` function powered by liboqs bindings to protect sensitive user preferences and accessibility settings.
            </p>

            <h2 className="text-2xl font-bold my-4">API Structure</h2>
            <p className="text-lg">
                The API follows a RESTful structure, with endpoints such as:
            </p>
            <ul className="list-disc list-inside text-lg my-4">
                <li><code>/register</code> – For new user registration via the web app</li>
                <li><code>/authenticate</code> – Verifies facial recognition hashes</li>
                <li><code>/profile/{'{'}mac{'}'}</code> – Returns encrypted user data to the Raspberry Pi</li>
            </ul>
            </div>
          <div id="esp32">
            <h1 className="text-4xl font-bold my-6">ESP32</h1>
            <p className="text-lg">
              HOW SENDING MAC ADDRESS TO REG SITE (NOT SPECIFICALLY, BUT CAN SEE IN SERIAL MONITOR)
            </p>
          </div>
          <div id="raspberry-pi">
            <h1 className="text-4xl font-bold my-6">Raspberry Pi</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div id="desktop-app">
            <h1 className="text-4xl font-bold my-6">Desktop App</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
