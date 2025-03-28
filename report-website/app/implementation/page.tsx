'use client'

import Prism from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-arduino';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-rust';
import 'prismjs/themes/prism.css';
import { useEffect } from 'react';
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Metadata } from 'next';
import Image from "next/image";
import { BASE_PATH } from "@/config";


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
              <BreadcrumbLink href={`${BASE_PATH}/`}>Quantum Proximity Gateway</BreadcrumbLink>
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
                As a result of this modularity, each component of the QPG project has different technologies and languages that are best suited for their relevant tasks, and so, we will discuss the implementations and the tools and dependencies used for each submodule separately in the following sections.
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
                <Image src="/implementation/usb.svg" alt="Web Serial logo" width={36} height={36} />
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
                After opening the popup for the user to select a serial port, the function opens the port with a specific baud rate of 9600 (which is what we flashed the ESP32 with). We then set up a text encoder/decoder so that we can actually communicate over the serial lines. Data that is being sent from the browser to the ESP32 uses the <i>writer</i>, while the data getting sent from the ESP32 is received by reading from the <i>reader</i> object. 
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
            <p className="text-lg mb-4">
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
                After the post-quantum handshake, the client now also has a shared secret. We then use the following methods to encrypt and decrypt data according to the AES-GCM standard.
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
                Encryption essentially takes a JSON string (which will contain username, password, and TOTP secret), and creates a random 24-byte nonce. This nonce serves as a unique one-time-use number that makes sure that every encryption operation we do is distinct, even with the same key being used over many encryptions. In other words, the same (key, nonce) pair is never reused because, if they are, for whatever reason, the they will produce identical keystream blocks, which would reveal the relationship between messages, making it easy for a malicious actor to decrypt.
            </p>
            <p className='text-lg mb-8'>
                Decryption, on the other hand, takes a response from the server with almost the same structure (ciphertext, nonce and client id). The function then reconstructs the nonce and ciphertext, and this is then decrypted with AES-GCM, returning the resulting plaintext string which the server originally had.
            </p>
            
            <h2 className="text-2xl font-bold my-4">Registration Flow</h2>
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

            <h2 className="text-2xl font-bold my-4">Facial Recognition Video Capture</h2>
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
                <li>The server returns a success response, at which point the user is redirected to the face recognition page.</li>
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
                    <h3 className="text-base font-semibold">LibOQS</h3>
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

            <h2 className="text-2xl font-bold my-4">Post-Quantum KEM Key Exchange with LibOQS</h2>
            <p className="text-lg mb-4">
                The server implements the post-quantum key exchange mentioned above in the Registration Site section by using the LibOQS library (via Python's oqs bindings). This is used to establish the shared secret with the client, and ensure that this secret is safe from potential attacks by classical computers.
            </p>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code className="language-python">
{`def kem_initiate(self, data: KEMInitiateRequest) -> dict:
    # create a KEM object from liboqs
    server_kem = oqs.KeyEncapsulation(self.KEM_ALGORITHM)
    
    # generate a key pair
    public_key = server_kem.generate_keypair()
    public_key_b64 = base64.b64encode(public_key).decode()
    
    # store the KEM object in a session dict
    self.kem_sessions[data.client_id] = server_kem
    
    return {'public_key_b64': public_key_b64}

def kem_complete(self, data: KEMCompleteRequest) -> dict:
    server_kem = self.kem_sessions.pop(data.client_id, None)
    if not server_kem:
        raise HTTPException(status_code=401, detail='Client not recognised...')
    
    # decode the encapsulated data from client
    ciphertext = base64.b64decode(data.ciphertext_b64)
    
    # decapsulate to get the shared secret
    shared_secret = server_kem.decap_secret(ciphertext)
    
    # store the shared secret in a dictionary for future use
    self.shared_secrets[data.client_id] = shared_secret
    server_kem.free()
    
    return {'status': 'success'}
`}
              </code>
            </pre>
            <p className='text-lg mb-4'>
                The code above shows how we handle the KEM key exchange on the server side, since we already covered the registration site side previously. The <code>kem_initiate()</code> method, located in <code>server/backend/encryption_helper.py</code> is called when the client first connects to the server, and it generates a public/private key pair using the KEM algorithm specified (ML-KEM-512, in this case). The public key is sent back to the client (registration site), and the KEM object is stored temporarily in a session dictionary until the client returns the encapsulated secret key. Note that we also store the client ID in the session dictionary so that we can identify which client is sending the request.
            </p>
            <p className='text-lg mb-4'>
                The <code>kem_complete()</code> method, on the other hand, is called when the client, after encapsulating the plaintext with the public key, send the ciphertext back to the server. For this part of the code, we also use the client ID to identify which client is sending the request, and we retrieve the KEM object from the session dictionary. Then, we remove the client ID from the stored session dictionary since we have already used it. This function then decapsulates the ciphertext from the client using the private key of the KEM object (saved in the temporary session dictionary storage), and retrieves the shared secret. This shared secret is then stored in a dictionary so that it can be used for future communications with the client and data encryption/decryption via AES-GCM. Additionally, we also ensure that we free the KEM object from memory so that we do not use unnecessary resources. The KEM object is no longer required as we have now obtained the shared secret.
            </p>

            <h2 className="text-2xl font-bold my-4">Data Encryption with AES-GCM</h2>
            <p className="text-lg mb-8">
                After the KEM key exchange is complete and the server now has the shared secret, we can use it to encrypt and decrypt using AES-GCM. This code is practically identical to the one in the registration website, just in Python instead of TypeScript, so there is no real need to go into explicit detail about it. The idea is the same - we generate a random nonce, then encrypt the plaintext with the nonce and shared secret key, and finally return the ciphertext and the nonce. For decryption, we do the opposite as before - we take the ciphertext and nonce, and then we decrypt the ciphertext using the nonce and shared key in order to retrieve the original plaintext that was encrypted. This code is all located within <code>server/backend/encryption_helper.py</code> as well.
            </p>

            <h2 className="text-2xl font-bold my-4">Handling TOTP</h2>
            <p className="text-lg mb-4">
                The TOTP (Time-based One-Time Password) is a standard for generating one-time passwords based on a shared secret key and the current time. As we discussed in the registration site section, the TOTP secret is generated when the user registers their device, and it is stored in the database along with the user's account information. The TOTP is then used to authenticate the user when they try to log in to their account by deriving a 6-digit code using a standard TOTP approach. The <code>/devices/credentials</code> endpoint defined in <code>server/backend/app.py</code> is used to first generate the correct TOTP code with <code>generate_totp()</code>. Then, we compare this to the TOTP code passed by the client, and, only if it matches, we return the username and password stored in the database (after decrypting it with the shared secret key). The implementation of these features is shown below.
            </p>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code className="language-python">
{`async def generate_totp(mac_address: str ,transaction: AsyncSession) -> int:
    # get secret, timestamp from DB
    query = select(Device.secret, Device.totp_timestamp).where(Device.mac_address == mac_address)
    result = await transaction.execute(query)
    secret, timestamp = result.one_or_none()
    
    return totp(secret, timestamp)

def totp(secret: str, timestamp: int) -> int:
    # time-based offset
    time_now = time.time()
    time_elapsed = int(time_now - timestamp)
    TIME_STEP = 30
    
    time_counter = int(time_elapsed / TIME_STEP)
    # convert to 8-byte array, run HMAC-SHA1, etc.
    # other code
    totp_code = bin_code % 10**6  # 6-digit TOTP
    return totp_code
`}
              </code>
            </pre>
            <p className='text-lg mb-8'>
                For TOTP, the secret is first stored on the device (the ESP32 in this case) and the server. Then, the server calculates the TOTP code based on the current time plus the stored <code>timestamp</code>, which is the time when the TOTP secret was generated. The server then returns this TOTP code to the client, which is then compared to the TOTP code the device sends as a form or second factor authentication.
            </p>

            <h2 className="text-2xl font-bold my-4">Facial Recognition</h2>
            
            <h3 className="text-xl font-bold my-4">Overview</h3>
            <p className="text-lg mb-4">
                After the server receives the 5-second video from the registration website, we need to process the video and extract some frames (images) from it in order to retrain the facial recognition model on the new data to identify the person and match their face with the correct username. We will discuss how we do this in the following sections. The general process is outlined in the code below.
            </p>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code className="language-python">
{`video_path = os.path.join(user_video_dir, 'video.webm')
# save the webm
with open(video_path, 'wb') as video_file:
    while True:
        chunk = await data.video.read(chunk_size)
        if not chunk:
            break
        video_file.write(chunk)

mp4_path = os.path.join(user_video_dir, "video.mp4")
convert_to_mp4(video_path, mp4_path)
extracted_frames = split_frames(mp4_path, user_video_dir)
train_model(extracted_frames, username)

shutil.rmtree(user_video_dir, ignore_errors=True)
`}
              </code>
            </pre>
            <p className="text-lg mb-4">
                The snippet above is the code written for the <code>/register/face</code> endpoint in <code>server/backend/app.py</code>. The general outline is to first take the video blob that we received from the registration website and save it as a file on the server. Then, we convert the video to an MP4 format, and, after this conversion, we split the 5-second video into frames and save them into a local directory we make for the images temporarily. Then, we train the image, and finally delete the images and video so that we do not use unnecessary space on the server or store any personal data.
            </p>

            <h3 className="text-xl font-bold my-4">WebM &rarr; MP4 Conversion</h3>
            <p className="text-lg mb-4">
                The reason we convert the WebM to MP4 is to ensure that all of the data has been received appropriately. When we tried to process the webm video directly, we faced some errors due to the video stream which caused not all of the video data to be received, so this seemed like the best solution. We use <code>ffmpeg</code>, a powerful multimedia framework which is widely used for video and audio processing, in order to do the conversion. The code for this method in <code>server/backend/video_encoding.py</code> is highlighted below, using the <code>subprocess</code> module to call the ffmpeg command line tool.
            </p>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code className="language-python">
{`def convert_to_mp4(webm_path: str, mp4_path: str) -> None:
    command = [
        'ffmpeg',
        '-i', webm_path,
        '-c:v', 'libx264',
        '-c:a', 'aac',
        '-strict', 'experimental',
        '-y',
        mp4_path
    ]
    subprocess.run(command, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
`}
              </code>
            </pre>
            
            <h3 className="text-xl font-bold my-4">Extracting Frames</h3>
            <p className="text-lg mb-4">
                In order to train the facial recognition model, we need images rather than a video. To do this, we use the <code>split_frames()</code> method in <code>server/backend/video_encoding.py</code>. Originally, this method split the video into 5 frames, but we later realised that this is too small of a dataset to train the model on for a user, since it's not very accurate. Instead, we extract 20 frames at continuous intervals, skipping the first 0.5 seconds of the video to ensure that we wait for the camera to stabilise. As we mentioned before, we use OpenCV to do this, and then we save the frames in a temporary directory that we create for this specific user. This will be deleted after the model is trained, along with the videos (in both webm and mp4 formats).
            </p>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code className="language-python">
{`def split_frames(mp4_path: str, user_video_dir: str):
    cap = cv2.VideoCapture(mp4_path)
    fps = cap.get(cv2.CAP_PROP_FPS)
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))

    skip_frames = int(0.5 * fps)  # skip half second
    interval = max(1, (total_frames - skip_frames) // 21)

    for i in range(1, 21):
        frame_idx = skip_frames + i * interval
        # other code
        ret, frame = cap.read()
        # other code
        cv2.imwrite(frame_path, frame)
`}
              </code>
            </pre>

            <h3 className="text-xl font-bold my-4">Training the Facial Recognition Model</h3>
            <p className="text-lg mb-4">
                The <code>train_model()</code> method in <code>server/backend/face_recognition.py</code> is where we actually train the model. We use the <code>face_recognition</code> library in order to do this, which is a very powerful and well-known library in Python used for face recognition (as the name implies). The library uses a deep learning model called <code>ResNet-34</code> to extract facial features from images, and then we use these features to train a simple SVM (Support Vector Machines) classifier and save the 128-dimensional embeddings computed by the model for each person. The model is essentially just a bunch of face embeddings that are stored in a database and mapped to the usernames of a person. After training the model, the next time the facial recognition request is made, we simply load the encodings data and compare the current feed of the Raspberry Pi 5's camera module to the embeddings stored in the database. The code for the training of the model is quite straightforward:
            </p>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto mb-8">
              <code className="language-python">
{`def train_model(frame_paths, username):
    # read/create encodings data structure
    if os.path.exists("encodings.pickle"):
        with open("encodings.pickle", "rb") as f:
            data = pickle.loads(f.read())
        knownEncodings = data['encodings']
        knownNames = data['names']
    else:
        knownEncodings = []
        knownNames = []

    # find faces and compute embeddings for each frame
    for (i, imagePath) in enumerate(frame_paths):
        image = cv2.imread(imagePath)
        rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

        boxes = face_recognition.face_locations(rgb, model="hog")
        encodings = face_recognition.face_encodings(rgb, boxes)

        for encoding in encodings:
            knownEncodings.append(encoding)
            knownNames.append(username)

    # save back to 'encodings.pickle'
    data = {"encodings": knownEncodings, "names": knownNames}
    with open("encodings.pickle", "wb") as f:
        f.write(pickle.dumps(data))
`}
              </code>
            </pre>

            <h2 className="text-2xl font-bold my-4">Storing JSON Preferences</h2>
            
            <h3 className="text-xl font-bold my-4">Overview</h3>
            <p className="text-lg mb-4">
                Each user has a set of preferences that they can set in order to control the accessibility of their device. These preferences are stored in a JSON format, as specified in the System Design section. These are stored in a preferences column in the devices table in <code>server/backend/app.py</code> according to sqlalchemy's MutableDict JSON type in order to handle updates to the JSON data.
            </p>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code className="language-python">
{`class Device(Base):
    __tablename__ = 'devices'
    mac_address = mapped_column(primary_key=True)
    # other code
    preferences = mapped_column(
        MutableDict.as_mutable(JSON),
        default=lambda: deepcopy(DEFAULT_PREFS),
        nullable=False
    )
`}
              </code>
            </pre>
            <p className="text-lg mb-4">
                The reason we use a <code>MutableDict</code> is to ensure that the server can track changes in the dictionary and automatically commit them to the database, rather than having to rely on the developers to do this manually. This is important because the preferences can be updated at any time by the desktop application, and we want to ensure that these changes persist for the next time that the user logs in into a device. The default preferences are defined in <code>server/backend/json_example.json</code>, and we load these automatically when a user's device is registered.
            </p>

            <h3 className="text-xl font-bold my-4">Updating the Preferences</h3>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code className="language-python">
{`@post('/preferences/update')
async def update_json_preferences(data: EncryptedMessageRequest, transaction: AsyncSession) -> dict:
    decrypted_data = encryption_helper.decrypt_msg(data)
    validated_data = UpdateJSONPreferencesRequest(**decrypted_data)

    query = select(Device).where(Device.username == validated_data.username)
    device = (await transaction.execute(query)).scalar_one_or_none()
    
    device.preferences = validated_data.preferences
    await transaction.commit()

    return encryption_helper.encrypt_msg({'preferences': validated_data.preferences}, data.client_id)
`}
              </code>
            </pre>
            <p className="text-lg mb-8">
                The code shown above is the POST <code>/preferences/update</code> endpoint which handles updating the JSON file (with requests to this being sent from the desktop application). First, as always, we decrypt the data received from the client (the desktop app), and then we validate the data is in the correct format by using our <code>Pydantic</code>-defined models. After validating the data, we query the database to get the device with the specific username (since these will also be unique), and we update the preferences column with the new preferences. The desktop app sends the full JSON back, so we can simply replace the entirety of the preferences column, rather than having to search through the JSON and updating each key-value pair individually, which could potentially be a complex operation. Finally, we encrypt the updated preferences and send them back to the client, so that they can be reflected in the desktop application.
            </p>
            </div>
          <div id="esp32">
            <h1 className="text-4xl font-bold my-6">ESP32 Code</h1>
            <p className="text-lg mb-6">
                This is the code needed on the ESP32 device which ensures that its MAC address is transmitted when necessary, and also handles the Bluetooth Low Energy communication with the Raspberry Pi as the users approaches the computer to be logged in into. It also handles the TOTP secret key generation.
            </p>

            <h2 className="text-2xl font-bold my-4">Tools & Dependencies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <Card className="p-4">
                <div className="flex flex-row items-center gap-3">
                <Image src="/implementation/arduinoble.png" alt="ArduinoBLE logo" width={36} height={36} />
                <div>
                    <h3 className="text-base font-semibold">ArduinoBLE</h3>
                    <p className="text-sm text-muted-foreground">
                    A light-weight BLE library for Arduino, used to handle the BLE communication.
                    </p>
                </div>
                </div>
            </Card>

            <Card className="p-4">
                <div className="flex flex-row items-center gap-3">
                <Image src="/implementation/platformio.png" alt="PlatformIO logo" width={36} height={36} />
                <div>
                    <h3 className="text-base font-semibold">PlatformIO</h3>
                    <p className="text-sm text-muted-foreground">
                    An open-source ecosystem, used to manage libraries and dependencies.
                    </p>
                </div>
                </div>
            </Card>
            </div>

            <h2 className="text-2xl font-bold my-4">Bluetooth Low Energy (BLE) Setup</h2>
            <p className="text-lg mb-4">
                In <code>ESP32-code/BLE-Broadcasting/src/main.cpp</code>, the code sets up the BLE server using the ESP32's built-in capabilities. The ESP32 acts as a BLE peripheral, broadcasting its MAC address and other information to nearby devices, using the <code>ArduinoBLE</code> library to handle the BLE communication. The ESP32 advertises its MAC address and a custom service UUID, allowing the Raspberry Pi to discover and connect to it.
            </p>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code className="language-ino">
{`BLEDevice::init("ESP32 Key"); // Initialize BLE with a device name
BLEServer *pServer = BLEDevice::createServer();
pServer->setCallbacks(new MyServer()); // Custom server callbacks

BLEService *pService = pServer->createService(SERVICE_UUID);
pCharacteristic = pService->createCharacteristic(
    CHARACTERISTIC_UUID,
    BLECharacteristic::PROPERTY_READ |
    BLECharacteristic::PROPERTY_WRITE
);
`}
              </code>
            </pre>
            <p className="text-lg mb-4">
                In the code above, we first initialise the BLE device with a name, and then we create a BLE service and a characteristic. The characteristic is for reading and writing data, and it is set up with the <code>PROPERTY_READ</code> and <code>PROPERTY_WRITE</code> properties, allowing a central device (the Raspberry Pi, in our case) to read/write data from/to it. The UUIDs for the service and characteristic are defined at the top of the file (not shown above), and they are used to identify the service and characteristic when the Raspberry Pi connects to the ESP32.
            </p>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code className="language-ino">
{`BLEAdvertisementData oAdvertisementData;
oAdvertisementData.setName("ESP32 Key");
oAdvertisementData.setCompleteServices(BLEUUID(SERVICE_UUID));

BLEAdvertising *pAdvertising = BLEDevice::getAdvertising();
pAdvertising->setAdvertisementData(oAdvertisementData);
pAdvertising->start();
BLEDevice::startAdvertising();
`}
              </code>
            </pre>
            <p className='text-lg mb-8'>
                The code above sets up and configures an advertisement packet so that other devices can discover and connect to the ESP32 via BLE. We ensure that the advertisement data includes the device name and the service UUID, which allows the other devices (Raspberry Pi) to identify the ESP32 when scanning for nearby devices. The <code>BLEAdvertising</code> object is used to start advertising the service, and the <code>BLEDevice::startAdvertising()</code> method is called in order to begin broadcasting the packet.
            </p>

            <h2 className="text-2xl font-bold my-4">Reading the MAC Address over Serial</h2>
            <p className="text-lg mb-4">
                By default, each ESP32 device (or any device with a Network Interface Card in general) has a unique MAC address. This is used to identify the device on the network, and it is a 6-byte hexadecimal number. The ESP32 has a built-in function to retrieve the MAC address, which we use to send the MAC address to the Raspberry Pi when it connects to the ESP32 via BLE. In the main <code>loop()</code> function of <code>ESP32-code/BLE-Broadcasting/src/main.cpp</code>, we continually print the MAC address of the device until the device receives a secret key from the Raspberry Pi. The code snippet below shows how we do this.
            </p>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code className="language-ino">
{`if (!done) {
        BLEAddress address = BLEDevice::getAddress();
        Serial.println(address.toString().c_str());
    }
`}
              </code>
            </pre>
            
            <h2 className="text-2xl font-bold my-4">Handling the TOTP Secret</h2>
            
            <h3 className="text-xl font-bold my-4">Overview</h3>
            <p className="text-lg mb-4">
                The logic behind this section is to first read the TOTP secret over Serial from the Raspberry Pi, and then generate the TOTP code using the secret key and a local time counter. The TOTP code is then sent back to the Raspberry Pi via BLE by writing it to the BLE characteristic. Once we read the secret string, we set a flag (<code>done</code>, in the code below), which means we no longer need to print the MAC address to the Serial monitor. We also reset the <code>time_now</code> variable to treat this moment as the start time for the TOTP code generation.
            </p>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code className="language-ino">
{`if (Serial.available() > 0) {
    secret = Serial.readStringUntil('\\n');
    if (secret.length() > 0) {
        done = true;
        time_now = 0; // treat this moment as 'epoch'
    }
}
`}
              </code>
            </pre>

            <h3 className="text-xl font-bold my-4">Generating TOTP Codes</h3>
            <p className="text-lg mb-4">
                The TOTP logic is located in <code>ESP32-code/BLE-Broadcasting/src/totp.cpp</code>, and it is quite simple using <code>mbedtls</code> for HMAC-SHA1. Firstly, every second, the <code>time_now</code> variable is incremented by 1, and we use this variable as the number of seconds since the secret was received. Typically, TOTP uses 30-second steps, so, in <code>generate_totp()</code>, we divide <code>time_now</code> by 30 in order to find the time step. This approach ensures that the TOTP code is generated based on the time elapsed since the secret was received, rather than the time when the device was powered on. Additionally, we avoid needing an RTC (Real-Time Clock) or a network timer, which would be impractical for a low-power device like the ESP32.
            </p>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code className="language-ino">
{`if (done) {  
    otp = generate_totp((const unsigned char*)secret.c_str(), secret.length(), time_now);
    String otp_str = String(otp);
    pCharacteristic->setValue(otp_str.c_str());
}
delay(1000);
time_now += 1;

unsigned int generate_totp(const unsigned char *key, size_t key_len, uint64_t time_now) {
    uint64_t time_counter = time_now / TIME_STEP; // TIME_STEP = 30
    unsigned char counter[8];

    // convert time_counter to an 8-byte array
    for (int i = 7; i >= 0; i--) {
        counter[i] = time_counter & 0xFF;
        time_counter >>= 8;
    }

    // HMAC-SHA1 on counter
    // other code
    
    // truncate the 20-byte HMAC down to a 6-digit TOTP
    unsigned int otp = bin_code % 1000000;
    return otp;
}
`}
              </code>
            </pre>

          </div>
          <div id="raspberry-pi">
            <h1 className="text-4xl font-bold my-6">Raspberry Pi Code</h1>
            <p className="text-lg mb-4">
              This code checks for BLE signals from registered ESP32 devices and verifies their credentials, alongside constantly checking the distance from the computer. Once the distance is small enough, it uses the camera module attached to the Raspberry Pi and checks for the registered user, and if they are found the Raspberry Pi 5 communicates with the Raspberry Pi Pico via UART which acts as a USB HID (Human-Interface Device) keyboard connected to the computer to be logged in into, and types out the user's username and password.
            </p>

            <h2 className="text-2xl font-bold my-4">Tools & Dependencies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <Card className="p-4">
                <div className="flex flex-row items-center gap-3">
                <Image src="/implementation/liboqs.png" alt="Liboqs logo" width={36} height={36} />
                <div>
                    <h3 className="text-base font-semibold">LibOQS</h3>
                    <p className="text-sm text-muted-foreground">
                    Open-source library for quantum-safe cryptographic algorithms.
                    </p>
                </div>
                </div>
            </Card>

            <Card className="p-4">
                <div className="flex flex-row items-center gap-3">
                <Image src="/implementation/bluetooth.png" alt="Bluepy logo" width={36} height={36} />
                <div>
                    <h3 className="text-base font-semibold">BluePy</h3>
                    <p className="text-sm text-muted-foreground">
                    A Python library for Bluetooth Low Energy communication on Linux.
                    </p>
                </div>
                </div>
            </Card>

            <Card className="p-4">
                <div className="flex flex-row items-center gap-3">
                <Image src="/implementation/circuitpython.png" alt="Circuit Python logo" width={36} height={36} />
                <div>
                    <h3 className="text-base font-semibold">Circuit Python</h3>
                    <p className="text-sm text-muted-foreground">
                    A microcontroller-focused version of Python used on the Pico.
                    </p>
                </div>
                </div>
            </Card>
            </div>

            <h2 className="text-2xl font-bold my-4">Post-Quantum Encryption</h2>
            <p className="text-lg mb-4">
                This code is almost the same as that located in the server, and this is also in Python. Therefore, we will not discuss this any further, since the section in the server can be referred to.
            </p>

            <h2 className="text-2xl font-bold my-4">BLE Device Scanning</h2>
            <h3 className="text-xl font-bold my-4">Overview</h3>
            <p className="text-lg mb-4">
                The Raspberry Pi acts as a central device that scans for nearby BLE-enabled peripherals that match the known MAC addresses which are retrieved from the server. The code uses <code>BluePy</code> to find <code>RSSI</code> (signal strength) and read the TOTP code from the characteristic. The <code>ScanDelegate</code> class located in <code>rpi-code/main/scan.py</code> recieves notifications when a device is discovered and when the RSSI value changes (at certain intervals).
            </p>

            <h3 className="text-xl font-bold my-4">Scanning</h3>
            <p className="text-lg mb-4">
                The <code>scan_devices()</code> method is what we use in order to scan for nearly BLE peripherals, and it begins by getting a set of all addresses that we are looking for, followed by creating a simple Scanner object. It then starts the scan and waits for a certain amount of time (3 seconds, in this case) to find devices - this is known as passive mode. Then, we stop scanning to check if any of the found devices match any of the devices we are looking for. If we find a device, we check if the RSSI value is above a certain threshold, and if it is, we read the TOTP code from the characteristic. We also make sure to remove devices from the list of devices we found if they have not been updated within a timeout limit. The code below shows how we do this.
            </p>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code className="language-py">
{`def scan_devices():
    while True:
        addresses = set(get_all_mac_addresses())
        data = reload_encoding() # fetch face encodings
        
        scanner = Scanner().withDelegate(ScanDelegate())
        
        try:
            scanner.start(passive=True)
            scanner.process(timeout=3)
        except Exception as e:
            logging.error(f"Error during device scanning: {e}")
            # continue with the next iteration if scanning fails
            sleep(1)
            continue
        
        # remove devices that have not been updated within the timeout limit
        for dev in list(devices):
            if time.time() - devices[dev]['last_seen'] > TIMEOUT_LIMIT:
                print(dev, "has disappeared.")
                del devices[dev]
        
        within_range_mac_addresses = [
            mac for mac in devices if devices[mac].get('distance', float('inf')) <= DISTANCE_LIMIT
        ]
        
        # face recognition and then UART code
`}
              </code>
            </pre>

            <h3 className="text-xl font-bold my-4">Reading the TOTP Code</h3>
            <p className="text-lg mb-4">
                When a discovered device's MAC address is in the <code>addresses</code> set (from the code above), the code attempts to connect and then read the TOTP code from the device's BLE characteristic. Assuming the device is in range, <code>device[mac_address]['value']</code> will now be holding the integer TOTP code te ESP32 produced, and we can use this to verify the user. After storing the integer TOTP code, we then disconnect from the peripheral. The code below shows exactly how this is done.
            </p>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code className="language-py">
{`class ScanDelegate(DefaultDelegate):
    def handleDiscovery(self, dev, isNewDev, isNewData):
        if dev.addr in addresses:
            distance = self.calculateDistance(dev.rssi)
            # other code
            try:
                with Peripheral(mac_address) as peripheral:
                    # connected now
                    service = peripheral.getServiceByUUID(SERVICE_UUID)
                    characteristic = service.getCharacteristics(CHARACTERISTIC_UUID)[0]
                    value = characteristic.read().decode("utf-8")
                    devices[mac_address]['value'] = int(value)
                    peripheral.disconnect()
            except Exception as e:
                logging.error(f"Error: {e}")
`}
              </code>
            </pre>

            <h2 className="text-2xl font-bold my-4">Facial Recognition</h2>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code className="language-py">
{`# main loop capturing frames
def main_loop(self, list_of_names):
    while time.time() - start_time_loop < 2: # Check for 2 seconds
        frame = picam2.capture_array()

        for name in list_of_names:
            processed_frame, person_checking_found = self.process_frame(frame, name)
            if person_checking_found:
                # found the user
                return name
    return None

# comparison of encodings
self.face_locations = face_recognition.face_locations(rgb_resized_frame)
self.face_encodings = face_recognition.face_encodings(rgb_resized_frame, self.face_locations, model='large')
for face_encoding in self.face_encodings:
    matches = face_recognition.compare_faces(self.known_face_encodings, face_encoding)
    # if match, get name from known_face_names
`}
              </code>
            </pre>
            <p className="text-lg mb-8">
                In <code>rpi-code/main/recognise.py</code>, we use the camera module attached to the Raspberry Pi 5 to capture images and perform facial recognition. First, we load a Face Recognition model with the face encodings we retrieved from the server. Then, in an exactly 2-second loop, we capture as many frames as possible frm the <code>Picamera2</code> (the camera module connected to the Raspberry Pi 5). We then find the encodings of these images and compare them with our known users (retrieved from the server), and finally, if a match is found, we return the user's username, which can then be used to send the appropriate data via UART to the Pico.
            </p>

            <h2 className="text-2xl font-bold my-4">UART Connection from Raspberry Pi 5</h2>
            <p className="text-lg mb-4">
                After verifying TOTP and the face recognition, the Pi 5 gets the username and password of the relevant user from the server. Then, these credentials are sent to the Raspberry Pi Pico via UART, which will act as a USB HID keyboard. The code for this UART connection from the Raspberry Pi 5 side is located in <code>rpi-code/main/uart_rpi5.py</code> and snippets of it are shown below.
            </p>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code className="language-py">
{`def write_to_pico(username, password):
    ser = serial.Serial('/dev/ttyAMA0', baudrate=9600, timeout=1)
    try:
        while True:
            json_data = f'{{"username": "{username}", "password": "{password}"}}\\n'
            ser.write(json_data.encode())
            response = ser.readline()
            if response:
                decoded_response = response.decode('utf-8').strip()
                if decoded_response == "OK":
                    return
            time.sleep(1)
    finally:
        if ser.is_open:
            ser.close()
`}
              </code>
            </pre>
            <p className="text-lg mb-8">
                First, the code opens a serial connection to the Pico at 9600 baud. Then, it enters a loop where sends the username and password to the Pico in an encoded JSON format until a valid response (after being correctly decoded) is received from the Pico. If no response is recieved, the Pi 5 will try the same thing again after a 1-second delay.
            </p>

            <h2 className="text-2xl font-bold my-4">Raspberry Pi Pico USB HID Emulation</h2>
            <p className="text-lg mb-4">
                The Pico has a <code>CircuitPython</code> script which handles the UART communication with the Raspberry Pi 5, and then acts as a HID keyboard to type the username and password into the device to be logged in into. First, the Pico listens over UART on the GPIO pins GP0/GP1. Then, after receiving the JSON from the Raspberry Pi (as specified above), the Pico then simulates keyboard input via the <code>Adafruit HID library</code>. Note that the target system recongises the Pico as a standard USB HID keyboard when the Pico connects to it as a peripheral, and this is what allows the Pi to type the user's credentials automatically. The code for this is located in <code>rpi-code/pico/pico-hid.py</code>, and is shown below.
            </p>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code className="language-py">
{`import usb_hid
from adafruit_hid.keyboard import Keyboard
from adafruit_hid.keyboard_layout_us import KeyboardLayoutUS
from adafruit_hid.keycode import Keycode

keyboard = Keyboard(usb_hid.devices)
keyboard_layout = KeyboardLayoutUS(keyboard)

while True:
    response = receive_data() # read from UART
    if response:
        username, password = parse_response(response)
        if username and password:
            # type out username, press Enter
            keyboard_layout.write(username)
            keyboard.press(Keycode.ENTER)
            keyboard.release_all()
            
            # type out password, press Enter
            keyboard_layout.write(password)
            keyboard.press(Keycode.ENTER)
            keyboard.release_all()
`}
              </code>
            </pre>

          </div>
          <div id="desktop-app">
            <h1 className="text-4xl font-bold my-6">Desktop App</h1>
            <p className="text-lg mb-4">
              This application opens as soon as a user is logged in and immediately fetches their preferences from the server, executing commands as necessary to have these preferences loaded. This can be things like increasing zoom or high contrast mode, or even opening particular applications on startup. The application also has a chatbot, which the user can talk to, and the chatbot will automatically be able to determine how to create and execute a command so that the user's needs are met (and saved for the next time they login into any device).
            </p>

            <h2 className="text-2xl font-bold my-4">Tools & Dependencies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <Card className="p-4">
                <div className="flex flex-row items-center gap-3">
                <Image src="/implementation/nextjs.png" alt="Next.js logo" width={36} height={36} />
                <div>
                    <h3 className="text-base font-semibold">Next.js</h3>
                    <p className="text-sm text-muted-foreground">
                    The full-stack React framework which is powering the frontend of this app.
                    </p>
                </div>
                </div>
            </Card>

            <Card className="p-4">
                <div className="flex flex-row items-center gap-3">
                <Image src="/implementation/tauri.png" alt="Tauri logo" width={36} height={36} />
                <div>
                    <h3 className="text-base font-semibold">Tauri</h3>
                    <p className="text-sm text-muted-foreground">
                    A light-weight framework for building cross-platform desktop apps.
                    </p>
                </div>
                </div>
            </Card>

            <Card className="p-4">
                <div className="flex flex-row items-center gap-3">
                <Image src="/implementation/ollama-rs.png" alt="Ollama-rs logo" width={36} height={36} />
                <div>
                    <h3 className="text-base font-semibold">Ollama-rs</h3>
                    <p className="text-sm text-muted-foreground">
                    A Rust client for interacting with the Ollama LLM server (running locally).
                    </p>
                </div>
                </div>
            </Card>
            </div>

            <h2 className="text-2xl font-bold my-4">Tauri Application Setup</h2>
            <p className="text-lg mb-4">
                The typical pattern for a Tauri application is to have a <code>src-tauri</code> directory, which contains the Tauri configuration and the all of the Rust code for the backend. Additionally, the <code>main.rs</code> doesn't really have a lot of code in it, it's just the minimal entry point for the Tauri application which hands off the control to <code>lib.rs</code> and other files. In the latter file, we do most of our initial setup and anything that needs to be run before the Tauri app starts up is called. Additionally, all the necessary plugins and setup is done here, such as adding the <code>tauri_plugin_shell</code> plugin which allows us to run shell commands from the Tauri app. The general setup for the Tauri app which we use is given below.
            </p>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code className="language-rust">
{`if dotenv().is_err() {
    from_filename(".env.example").ok();
}
`}
              </code>
            </pre>
            <p className='text-lg mb-8'>
                The above code is how we load the environment variables from the <code>.env.example</code> file at the root of the desktop application project (i.e. in <code>desktop-app/QPG-Application/</code>). This is important because we use the variables defined in this file (the ollama URL and the server URL) in the code whenever we need to make a request to the server or the LLM. The idea of the using environment variables is to avoid having to hard-code values, and making it easier for developers to change these.
            </p>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code className="language-rust">
{`tauri::Builder::default()
        .setup(move |app| {
`}
              </code>
            </pre>
            <p className='text-lg mb-8'>
                This is how we actually build the Tauri application, and the <code>setup()</code> method is a closure which initialises the app state and allows us to do an post-start tasks required for certain setups and configurations (such as invoking the encryption handler).
            </p>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code className="language-rust">
{`tauri::async_runtime::block_on(async move {
    if let Err(err) = commands::startup::init_startup_commands( // startup commands
    )
});

let listener_handle = app.app_handle().clone();
listener_handle.listen("frontend-loaded", {
    let captured_handle = listener_handle.clone();

    move |_event| {
        if let Err(err) = commands::startup::init_startup_apps(
        )
    }
});
`}
              </code>
            </pre>
            <p className='text-lg mb-8'>
                The code given above is how we actually call our initial startup commands and applications. The first chunk of code is run as soon as the application opens, calling all the startup commands necessary (which are saved in the server). On the other hand, the second chunk tells the Tauri application that the startup applications should only load when the <i>frontend-loaded</i> message is received from the frontend - something which we emit once the initial animation of the application is complete.
            </p>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code className="language-rust">
{`.invoke_handler(tauri::generate_handler![
`}
              </code>
            </pre>
            <p className='text-lg mb-8'>
                Finally, the <code>invoke_handler()</code> method is how we actually set up the Tauri application to handle the commands and events that are emitted from the frontend. This is how we call Rust functions from the frontend - exposing these Rust commands to the JavaScript/Next.js (frontend) environment.
            </p>

            <h2 className="text-2xl font-bold my-4">Post-Quantum Encryption</h2>
            <p className="text-lg mb-4">
                As before, this is practically the same encryption code used in the server and the registration site. The only difference is that it is written in Rust and we specifically use the AES-GCM at 256 bits for the encryption (as this was the best balance between efficiency and security for this particular module of the code). For more information on the encryption and how it works, please refer to the server section above.
            </p>

            <h2 className="text-2xl font-bold my-4">Preferences JSON</h2>
            <h3 className="text-xl font-bold my-4">Overview</h3>
            <p className="text-lg mb-8">
                One of the most important aspects of this desktop application, the preferences JSON is used to store the user's preferences and settings for the application within the server. As soon as the Tauri app is loaded, this is the first thing we retrieve since we need to be able to load the preferences immediately for the user. In this section, we will discuss where the JSON is used, how it is used and updated, as well as how we filter it and why we do this. Note that the JSON is extremely important for the AI agent since we set a system prompt for the LLM, giving the JSON file as context for the LLM to generate/choose commands from.
            </p>

            <h3 className="text-xl font-bold my-4">Fetching the Preferences</h3>
            <p className="text-lg mb-4">
                The very first thing we need to be able to do is to actually fetch the preferences from the server. This is done in the <code>desktop-app.QPG-Application/src-tauri/src/preferences/mod.rs</code> file, where we have a function called <code>fetch_preferences_impl()</code>, which is what actually defines what to do in order to fetch the preferences. Essentially, this function makes a request to the server to get the preferences for the user, and then it returns the preferences in a format that can be used by the frontend, but it also calls another method to filter the JSON. Additionally, in case of a failed request to the server, we also have a fallback JSON file in the project directory which is read. The code for this is given below.
            </p>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code className="language-rust">
{`pub async fn fetch_preferences_impl() -> Result<String, String> {
    // other code

    let default_commands = match load_default_app_config("src/json_example.json") {
        Ok(config) => {
            serde_json::to_value(config).unwrap_or(Value::Null)
        }
    };

    let mut url = url::Url::parse(&format!("{}/preferences/{}", SERVER_URL.to_string(), username)).unwrap();
    url.query_pairs_mut().append_pair("client_id", &encryption_client.client_id);
    let client = Client::new();

    let preferences_json = match client.get(url).send().await {
    // other code

    let flattened = match serde_json::from_str::<Value>(&preferences_json) {
        Ok(mut val) => {
            if let Value::Object(ref mut root_obj) = val {
                if let Some(Value::Object(inner_prefs)) = root_obj.remove("preferences") {
                    match serde_json::to_string_pretty(&Value::Object(inner_prefs)) {
                        Ok(s) => s,
    // other code

    state.update_jsons(&flattened, &filtered_json_str).await;
    Ok(filtered_json_str)
}
`}
              </code>
            </pre>
            <p className="text-lg mb-4">
                As we can see above, first we load the fallback JSON in case the request to the server doesn't work. Then, we make the request to the server to get the preferences, encrypting and decrypting as necessary. Then, we parse the JSON to filter it, and finally we update the state of the application with the new JSON so that it can be used everywhere else by the code (even in the frontend), without having to request it again from the server.
            </p>

            <h3 className="text-xl font-bold my-4">Filtering the Preferences</h3>
            <p className="text-lg mb-4">
                By filtering the JSON in this case, we mean stripping it down so that we only have the commands relevant to the current Operating System. In other words, we get the environment of the current system using Tauri's built-in utilities, and then remove the unnecessary keys from the JSON. This is important because we don't want to have to deal with unnecessary data, and it also means that other information can fit more easily into the LLM's context window.
            </p>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code className="language-rust">
{`pub fn filter_json_by_env(json_str: &str, env: &str) -> Result<String, serde_json::Error> {
    let mut data: Value = serde_json::from_str(json_str)?;

    if let Value::Object(ref mut categories) = data {
        for (_key, setting_value) in categories.iter_mut() {
            if let Value::Object(ref mut setting_obj) = setting_value {
                if let Some(Value::Object(commands)) = setting_obj.get_mut("commands") {
                    *commands = commands.iter().filter(|(k, _)| k.as_str() == env)
                        .map(|(k, v)| (k.clone(), v.clone())).collect();
                }
            }
        }
    }
    serde_json::to_string_pretty(&data)
}
`}
                </code>
            </pre>
            <p className="text-lg mb-4">
                The code above shows how we filter the JSON. It is relatively straightforward, but essentially, we iterate through the JSON and remove any keys that are not relevant to the current environment. The <code>env</code> variable is passed in as a parameter, and it is used to determine which keys to keep in the JSON. This env variable is passed in after being returned from the <code>get_platform_info()</code> method found in <code>desktop-app/QPG-Application/src-tauri/src/state/mod.rs</code>. This method is shown below, and, as aforementioned, uses Tauri's <code>target_os</code> configuration to reliably determine the current environment.
            </p>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code className="language-rust">
{`#[tauri::command]
fn get_platform_info() -> String {
    #[cfg(target_os = "macos")] { return "macos".into(); }
    #[cfg(target_os = "windows")] { return "windows".into(); }
    #[cfg(target_os = "linux")] {
        let frontend_env = get_linux_gui();
        if let Some(env) = frontend_env {
            if env.to_lowercase().contains("gnome") { return "gnome".into(); }
            else { return format!("linux-{env}").into(); }
        } else { return "linux-unknown".into(); }
    }
}
`}
                </code>
            </pre>
            <p className='text-lg mb-8'>
                We do also differentiate between the different Linux environments, since there are a lot of various GUIs that can be used. However, we are only concerned about the GNOME environment since this is the most popular one, as well as the GUI we are using when testing the app. It is also the environment for which we have already populated the JSON preferences commands with.
            </p>

            <h2 className="text-2xl font-bold my-4">Ollama Generation</h2>
            <p className="text-lg mb-4">
                The Ollama generation is done using the <code>ollama-rs</code> library, which is a Rust client for the Ollama LLM server. This library allows us to easily interact with the Ollama server and generate text using the LLM, and the code for this is relatively straightforward, as underlined below. Our <code>generate_impl()</code> method's implementation, located in <code>desktop-app/QPG-Application/src-tauri/src/commands/generation.rs</code>, is shown below.
            </p>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code className="language-rust">
{`pub async fn generate_impl() -> Result<GenerateResult, String> {	
	let filtered_json = state.get_filtered_json().await;
    let mut ollama = g_ollama.0.lock().await;
    let mut seen_chats = seen_chats.0.lock().await;

    if !seen_chats.contains_key(&request.chat_id) {
        seen_chats.insert(request.chat_id.clone(), true);
        let sys_prompt = format!(...);
    }

    let best_match = crate::preferences::find_best_match(&request.prompt, &filtered_json);
    let best_match_json = match best_match {
        Some(ref key) => {
            let parsed_json: Value = serde_json::from_str(&filtered_json).unwrap_or(Value::Null);
            if let Value::Object(mut root) = parsed_json {
                if let Some(matching_value) = root.remove(key) {
                    let mut new_obj = serde_json::Map::new();
                    new_obj.insert(key.clone(), matching_value);

                    let snippet = serde_json::to_string_pretty(&Value::Object(new_obj))
                        .unwrap_or_else(|_| filtered_json.clone());

                    state.set_best_match_json(&snippet).await;
                    snippet
                }
            }
        }
    };
    // other code
}
`}
              </code>
            </pre>
            <p className="text-lg mb-4">
                Initially, we set a system prompt for the LLM providing it with context. We tell it that it is supposed to always return a command (for preferences) and a text response (which will be shown to the user). Additionally, we give it the entire JSON (after being filtered for the environment) which it can use to search for commands. The LLM is then asked to find the best match for the command (i.e. the key in the JSON which best matches the user's prompt), and we use this to set the <code>best_match_json</code> variable. This is done using the <code>find_best_match()</code> method, which uses NLP and the cosine similarity algorithm in order to ensure that the model has no hallucinations (or, at least, very few of them). After getting this best match snippet of the JSON, we prepend it to the beginning of the relevant user prompt, which suggests to the LLM that it should use this JSON snippet to generate the command.
            </p>

            <h2 className="text-2xl font-bold my-4">NLP Cosine Similarity</h2>
            <p className="text-lg mb-4">
                Originally, when we just gave the LLM the full JSON, it would often hallucinate and return commands that were not actually in the JSON. This was a problem because we wanted to ensure that the LLM only returned commands that we actually white-listed and wanted it to execute. In order to solve this problem we tried a few different NLP similarity algorithms, and eventually ended up using the cosine similarity as it gave us the lowest rate of hallucinations. The code for how we used the cosine similarity (as defined in the Algorithms section) to find the best match in the JSON is shown below.
            </p>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code className="language-rust">
{`fn cosine_similarity(set1: &std::collections::HashSet<String>, set2: &std::collections::HashSet<String>) -> f64 {
    let intersection = set1.intersection(set2).count() as f64;
    let norm1 = set1.len() as f64;
    let norm2 = set2.len() as f64;

    if norm1 == 0.0 || norm2 == 0.0 {
        return 0.0;
    }
    intersection / (norm1.sqrt() * norm2.sqrt())
}
`}
              </code>
            </pre>

            <h2 className="text-2xl font-bold my-4">Command Execution and Startup Applications</h2>
            <p className="text-lg mb-4">
                Executing the actual commands is done using the <code>tauri_plugin_shell</code> plugin, as we mentioned before, which allows us to run shell commands from the Tauri app itself. The commands returned from the LLM's responses are run in this way, and is also how we run the startup applications (using some built-in features of Linux Operating Systems). We also ensure that we have a whitelist of commands that we allow the Tauri app to run, otherwise there could be potential security issues.
            </p>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code className="language-rust">
{`// preferences command
let command_parts: Vec<&str> = command.split_whitespace().collect();
let (base_parts, value_part) = command_parts.split_at(command_parts.len() - 1);
let last_value = value_part.first().unwrap();
let base_cmd_str = base_parts.join(" ");

let valid_commands = gather_valid_commands_for_env(&state, &platform_info).await?;

let shell = app_handle.shell();
match shell.command(&base_parts[0]).args(&base_parts[1..]).arg(last_value).output().await {
    // other code
}

// startup application command
let command_base = command.trim_end_matches(" &").trim().to_string();
let startup_apps = state.get_startup_apps().await;
let bg_app_cmd = format!("nohup {} >/dev/null 2>&1 &", command_base);
let shell = app_handle.shell();
match shell.command("sh").args(["-c", &bg_app_cmd]).output().await {
    // other code
}
`}
              </code>
            </pre>
            <p className="text-lg mb-4">
                The general preferences commands are relatively straightforward - we just split the commands by whitespaces and put them into the <code>command()</code> method, <code>args()</code> method (for all arguments in the middle), and <code>arg()</code> method (for the last argument). Alternatively, for the startup applications, we need to do a bit more work - we essentially simulate a sub-shell process and use the <code>nohup</code> bash command, alongside <code>/dev/null 2{'>'}&1 &</code>, which allows us to run the command in the background and not have it be a part of the parent process (i.e. the Tauri application). If it was a part of the parent process, then we would need to wait for the startup applications to close before being able to open the Tauri app itself. The code above shows examples of these preferences and startup application commands.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
