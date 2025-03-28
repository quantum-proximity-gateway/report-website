'use client'

import Prism from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-arduino';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-python';
import 'prismjs/themes/prism.css';
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
            <h1 className="text-4xl font-bold my-6">ESP32</h1>
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
                The logic behind 
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
