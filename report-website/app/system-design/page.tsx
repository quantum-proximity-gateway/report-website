'use client'

import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Metadata } from 'next';
import Image from "next/image";
import { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';
import { BASE_PATH } from "@/config";


export default function SystemDesign() {
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
              <BreadcrumbPage>System Design</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <div className="flex flex-col items-center shrink-0 border-b p-8">
        <h1 className="text-6xl text-center my-6">System Design</h1>
      </div>
      <div className="flex justify-center p-6">
        <div className="max-w-4xl">
          <div id="system-architecture">
            <h1 className="text-4xl font-bold my-6">System Architecture</h1>
            <h1 className="text-2xl font-medium my-6">High-Level System Architecture</h1>
            <p className="text-lg mb-3">
              Our project consists of a centralised system architecture which allows us to leverage 
              Bluetooth Low Energy capable devices across multiple workstations. The main components 
              of the system diagram include:
            </p>
            <ul className="text-lg list-disc pl-6 space-y-3">
              <li>
                <span className="font-medium">Raspberry Pi</span><span className="text-muted-foreground"> — Central computing platform for proximity detection and authentication.</span>
              </li>
              <li>
                <span className="font-medium">Host PC</span><span className="text-muted-foreground"> — Device to be authenticated into and where local LLM inferencing occurs in the proximity agents app.</span>
              </li>
              <li>
                <span className="font-medium">ESP32</span><span className="text-muted-foreground"> — Bluetooth-enabled microcontroller for BLE signal emitting and TOTP generation.</span>
              </li>
              <li>
                <span className="font-medium">IBM Cloud Server</span><span className="text-muted-foreground"> — For secure data storage and device authentication.</span>
              </li>
            </ul>
            <div className="flex flex-col items-center my-6">
              <Image 
                src="/system-design/system-diagram.jpg" 
                alt="System Architecture" 
                width={800} 
                height={800}
                className="max-w-full object-contain bg-white"
                style={{borderRadius:'10px'}}
              />
              <p className="text-center mt-3 text-sm text-gray-500">Figure 1: System Architecture Diagram</p>
            </div>
            <p className="text-lg my-6">
              All these components come together to create a complex, scalable and secure architecture, allowing future upgrades and the integration of new proximity agent iterations. We reduce our reliance on the device being authenticated into by utilising a Raspberry Pi which allows developers to easily adapt this system for other usecases (i.e printers, whiteboard profiles).
            </p>
            <div className="space-y-12 my-6">
              {/* IBM Cloud Server Section */}
              <div className="system-component">
                <h2 className="text-2xl font-medium mb-4">IBM Cloud Server</h2>
                <p className="text-lg mb-6">
                  Both our registration website and API are hosted utilising cloud services, this is the first step to getting a QPG system setup. For our server, we are making use of serverless computing utilising IBM's Cloud Code Engine, which allows us to deploy a flexible and scalable server. This helps us ensure the costs of such a system are reasonable and that the services are accessible at all times. IBM Cloud Code Engine automatically scales the number of instances of the server that we have running just by the number of requests that we are getting, so if there are no requests incoming no instances of the server will be initiated and vice-versa.
                </p>
                <div className="flex flex-col items-center my-6">
                  <Image 
                    src="/system-design/codeengine-architecture.svg" 
                    alt="IBM Cloud Engine Architecture" 
                    width={800} 
                    height={800}
                    className="max-w-full object-contain bg-white"
                    style={{borderRadius:'10px'}}
                  />
                  <p className="text-center mt-3 text-sm text-gray-500">Figure 2: IBM Code Engine Architecture Diagram</p>
                  <p className="text-center text-sm text-gray-500">https://cloud.ibm.com/docs/codeengine?topic=codeengine-architecture</p>
                </div>
                <p className="text-lg my-6">
                  By containerizing our Litestar server onto a Docker container, we ensured that our deployment options were flexible too, allowing us to easily update the server or switch to other cloud providers in the future if needed. Our container includes a persistent SQLite database alongside the main code for the endpoints and image processing for the facial recognition encodings.
                </p>
                <p className="text-lg my-6">
                  This container serves as the central backend for all our services, all other components such as the ESP32, Raspberry Pi and Proximity Agents interact with this core, at least once in their lifetime. The ESP32 shares a TOTP secret key with this server, the Raspberry Pi fetches all registered ESP32s from the server and the Proximity Agents continuously fetch and update user profiles.
                </p>
              </div>

              {/* ESP32/Registration Site Section */}
              <div className="system-component">
                <h2 className="text-2xl font-medium mb-4">ESP32/Registration Site</h2>
                <p className="text-lg mb-6">
                  Our registration site is a simple frontend written utilising Next.js and the Chakra UI component library that communicates with our main backend on IBM Cloud. It registers a user's ESP32 onto the database and records a 5 second video of the user to send to the server for encodings processing.
                </p>
                <p className="text-lg my-6">
                  The ESP32 communicates with the Registration Site via an API called Web Serial. This allows us to use the user's browser to read the MAC Address of the ESP32 and share the secret key with the server, without having the ESP32 needing to be connected directly to the server. However, the downside of this comes from the fact that this API is only supported on Chromium-based browsers currently.
                </p>
                <p className="text-lg my-6"> 
                  On the other hand, the ESP32 interacts with it's Bluetooth Stack to advertise itself as an available device. It initializes itself as a BLE peripheral and broadcasts a specific service UUID that client devices can discover. When a connection is established, it serves a characteristic that provides the TOTP token, which is being constantly regenerated in intervals of 30 seconds. This TOTP is read by the Raspberry Pi to verify the user's identity.
                </p>
              </div>

              {/* Raspberry Pi Section */}
              <div className="system-component">
                <h2 className="text-2xl font-medium mb-4">Raspberry Pi</h2>
                <p className="text-lg mb-6"> 
                  The Raspberry Pi acts as the key component for each and every QPG enabled device, it processed incoming BLE signals, sorts signal strength, filters MAC Addresses and performs facial recognition on incoming users. This is all done utilising Python and many different components that we have specifically built in-house to authenticate users securely.
                </p>
              </div>

              {/* Proximity Agents Section */}
              <div className="system-component">
                <h2 className="text-2xl font-medium mb-4">Proximity Agents</h2>
                <p className="text-lg mb-6"> 
                  We are pioneering Proximity Prompting through our project, our first prototype of the Proximity Agents is a desktop application written using Tauri, which is a rust-based desktop application framework. This application runs on the host pc, and consists of a TypeScript based front-end alongside a Rust backend which is invoked by the frontend. The Rust backend allows us to do local LLM inferencing utilising ollama, communicate with the core server to update and fetch preferences, whilst the Next.js frontend displays the chatbot and the preferences according to the users actions.
                </p>
              </div>
            </div>
          </div>
          <div id="sequence-diagrams">
            <h1 className="text-4xl font-bold my-6">Sequence Diagrams</h1>
            <p className="text-lg">
              [...]
            </p>
          </div>
          <div id="design-patterns">
            <h1 className="text-4xl font-bold my-6">Design Patterns</h1>
            <p className="text-lg">
              In software development, design patterns are solutions to common problems encountered in software design. They provide a structured approach to writing maintainable, scalable, and reusable code by defining proven methodologies that can be applied to different scenarios. In our system, we leverage several design patterns to enhance the modularity, and robustness of our code. Below, we explore four key design patterns which are Client-Server, Delegate, Facade, and Observer, detailing how they are implemented in our project.
            </p>
            <Tabs defaultValue="client-server" className="my-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="client-server">Client-Server Pattern</TabsTrigger>
                <TabsTrigger value="delegate">Delegate Pattern</TabsTrigger>
                <TabsTrigger value="facade">Facade Pattern</TabsTrigger>
                <TabsTrigger value="observer">Observer Pattern</TabsTrigger>
              </TabsList>
              <TabsContent value="client-server">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Client-Server Pattern</CardTitle>
                    <Separator />
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg">
                      This is the main pattern we utilise in our system, most of our components rely on the centralised server to fetch updated data on the user like credentials, encodings, preferences amongst other items. However, we also utilise this pattern in our Rapsberry Pi code, where we have the main Bluetooth scanner program act as a server to provide data to a graphical interface that allows you to see shortlisted ESP32 keys and their estimated distance to the Raspberry Pi.
                    </p>
                    <p className="text-lg mt-6">
                      [INSERT PICTURE OF ALL COMPONENTS COMMUNICATING WITH SERVER]
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="delegate">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Delegate Pattern</CardTitle>
                    <Separator />
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg">
                      The delegate pattern allows objects to delegate specific tasks to other objects, in our case we have used this in the Raspberry Pi code, more specifically when handling Bluetooth device discovery. We have a class named ScanDelegate which extends a DefaultDelegate class from the bluepy library. This allowed us to easily extend the functionality of the library to suit our needs for this project.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="facade">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Facade Pattern</CardTitle>
                    <Separator />
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg mb-3">
                      There are many complex algorithms utilised all over our code which we use the facade pattern to abstract away their complexity. One example, is the FaceRecognizer class that exists in the Raspberry Pi code, we abstact away all the following features:
                    </p>
                    <ul className="text-lg list-disc pl-6 mb-6 space-y-3">
                      <li>Camera handling</li>
                      <li>Image processing</li>
                      <li>Face detection algorithms</li>
                      <li>Feature extraction</li>
                      <li>Comparison with stored facial encodings</li>
                      <li>User identification logic</li>
                    </ul>
                    <p className="text-lg mt-6">
                      Another example where we use the facade pattern on our codebase is with the EncryptionClients. We hide all the complexity of the ML-KEM key exchange mechanism and the AES-GCM encryption and provide a simple API where you can encrypt and decrypt data. Theis pattern allowed us to implement all of this in a single class such that the functionality can also be extended and modified for our purposes.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="observer">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Observer Pattern</CardTitle>
                    <Separator />
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg">
                      The observer pattern is another one that we utilise across all our codebase. Most importantly, it is used whenever we scan for Bluetooth signals as devices such as the Raspberry Pi and ESP32 need to react accordingly to connections. The ESP32 also uses a similar pattern whenever searching for a secret key via it's serial port, it continously reads incoming bytes from the USB port awaiting a secret key and accordingly begins generating TOTP keys when it finds a valid secret.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          <div id="er-diagrams">
            <h1 className="text-4xl font-bold my-6">ER Diagrams</h1>
            <p className="text-lg my-6">
              For our core server, we currently rely on a single database with three tables, one identifying the device and one which stores the user's accessibility preferences and one which stores authentication related fields. This is to be scaled up in the future with further tables storing different data related to the user's profile.
            </p>
            <div className="flex flex-col items-center">
              <Image 
                src="/system-design/er.svg" 
                alt="ER Diagram - Server" 
                width={750} 
                height={600}
                className="max-w-full object-contain bg-white"
                style={{borderRadius:'10px'}}
              />
              <p className="text-center text-sm text-gray-500">Figure 3: Entity Relationship Diagram</p>
            </div>
            <p className="text-lg my-6">
              By default, we intilize a Device with a preferences JSON which has the default values for the specific accessibility command, this is stored on the Preferences table. On the other hand in the Authentication table, a nonce is stored which helps the server decrypt the password utilising a key stored elsewhere, making it difficult for bad actors to steal credentials. The TOTP timestamp and secret that is agreed upon during registration is also stored on this table.
            </p>
          </div>
          <div id="data-storage">
            <h1 className="text-4xl font-bold my-6">Data Storage</h1>
            <p className="text-lg">
              As explained in the IBM Cloud System Architecture section, we have managed to containerize our server and deploy it as a serverless application utilising IBM Code Engine. As the scale of our database is currently very small, we have opted to use an SQLite database that's part of the container. This approach not only allows us to simplify the deployment of our application, but it also acts as a cost-saving measure allowing the system to be deployed at a much cheaper cost as a separate database service is not needed.
            </p>
            <div className="flex flex-col items-center ">
              <Image 
                src="/system-design/sqlite.png" 
                alt="SQLite Logo" 
                width={300} 
                height={300}
                className="max-w-full object-contain bg-white"
                style={{borderRadius:'10px'}}
              />
              <p className="text-center text-sm text-gray-500">Figure 4: SQLite Logo</p>
            </div>
            <p className="text-lg my-6">
              In future iterations, utilising propietary database services such as IBM Cloud Databases for PostgreSQL or AWS RDS will be essential for scalability. However, due to the budget and time constraints of our projects we chose SQLite for the proof of concept.
            </p>
            <p className="text-lg my-6">
              Preferences are stored as a JSON on the database:
            </p>
            <details open>
              <summary className="text-lg font-medium cursor-pointer">Show JSON Configuration</summary>
              <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
                <code className="language-javascript">
{`{
  "zoom": {
    "lower_bound": 0.5,
    "upper_bound": 3.0,
    "current": 1.0,
    "commands": {
      "windows": "",
      "macos": "",
      "gnome": "gsettings set org.gnome.desktop.interface text-scaling-factor"
    }
  },
  "on_screen_keyboard": {
    "lower_bound": null,
    "upper_bound": null,
    "current": false,
    "commands": {
      "windows": "",
      "macos": "",
      "gnome": "gsettings set org.gnome.desktop.a11y.applications screen-keyboard-enabled"
    }
  },
  "magnifier": {
    "lower_bound": 0.1,
    "upper_bound": 32.0,
    "current": 1.0,
    "commands": {
      "windows": "",
      "macos": "",
      "gnome": "gsettings set org.gnome.desktop.a11y.magnifier mag-factor"
    }
  },
  "enable_animation": {
    "lower_bound": null,
    "upper_bound": null,
    "current": true,
    "commands": {
      "windows": "",
      "macos": "",
      "gnome": "gsettings set org.gnome.desktop.interface enable-animations"
    }
  },
  "screen_reader": {
    "lower_bound": null,
    "upper_bound": null,
    "current": false,
    "commands": {
      "windows": "",
      "macos": "",
      "gnome": "gsettings set org.gnome.desktop.a11y.applications screen-reader-enabled"
    }
  },
  "cursor_size": {
    "lower_bound": 0.0,
    "upper_bound": 128.0,
    "current": 24.0,
    "commands": {
      "windows": "",
      "macos": "",
      "gnome": "gsettings set org.gnome.desktop.interface cursor-size"
    }
  },
  "font_name": {
    "lower_bound": null,
    "upper_bound": null,
    "current": "Cantarell 11",
    "commands": {
      "windows": "",
      "macos": "",
      "gnome": "gsettings set org.gnome.desktop.interface font-name"
    }
  },
  "locate_pointer": {
    "lower_bound": null,
    "upper_bound": null,
    "current": false,
    "commands": {
      "windows": "",
      "macos": "",
      "gnome": "gsettings set org.gnome.desktop.interface locate-pointer"
    }
  }
}`}
                </code>
              </pre>
            </details>
          </div>
          <div id="apis">
            <h1 className="text-4xl font-bold my-6">APIs</h1>
            <h1 className="text-2xl font-bold my-6">Server</h1>
            <p className="text-lg my-6">
              We defined 11 API endpoints on our server in total, which allow for a range of operations such as registering a new device, managing preferences, facial recognition, etc.
            </p>
            <h1 className="text-2xl mt-6">Authentication</h1>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h1 className="text-lg font-medium">
                    <span className="mr-3">1.</span><span className="text-white bg-blue-500 p-1 rounded-sm mr-3"> POST  </span>/register
                  </h1>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="text-lg list-disc pl-6 space-y-3">
                    <li>
                      <span className="font-medium">Description</span><span className="text-muted-foreground"> — Registers a new device.</span>
                    </li>
                    <li>
                      <span className="font-medium">Request</span><span className="text-muted-foreground"> — client_id (string) - Required in request. EncryptedMessageRequest with: mac_address, username, password, secret, timestamp.</span>
                    </li>
                    <li>
                      <span className="font-medium">Response</span><span className="text-muted-foreground"> — Encrypted success message or error.</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h1 className="text-lg font-medium">
                    <span className="mr-3">2.</span><span className="text-white bg-orange-500 p-1 rounded-sm mr-3"> PUT </span>/devices/credentials
                  </h1>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="text-lg list-disc pl-6 space-y-3">
                    <li>
                      <span className="font-medium">Description</span><span className="text-muted-foreground"> — Retrieves stored credentials after verifying TOTP.</span>
                    </li>
                    <li>
                      <span className="font-medium">Request</span><span className="text-muted-foreground"> — EncryptedMessageRequest with: mac_address, totp.</span>
                    </li>
                    <li>
                      <span className="font-medium">Response</span><span className="text-muted-foreground"> — Encrypted credentials (username, password).</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <h1 className="text-2xl mt-6">Device Management</h1>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h1 className="text-lg font-medium">
                    <span className="mr-3">3.</span><span className="text-white bg-green-500 p-1 rounded-sm mr-3"> GET </span>/devices/all-mac-addresses
                  </h1>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="text-lg list-disc pl-6 space-y-3">
                    <li>
                      <span className="font-medium">Description</span><span className="text-muted-foreground"> — Fetches all registered MAC addresses.</span>
                    </li>
                    <li>
                      <span className="font-medium">Request</span><span className="text-muted-foreground"> — client_id (query parameter, required).</span>
                    </li>
                    <li>
                      <span className="font-medium">Response</span><span className="text-muted-foreground"> — Encrypted list of MAC addresses.</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h1 className="text-lg font-medium">
                    <span className="mr-3">4.</span><span className="text-white bg-green-500 p-1 rounded-sm mr-3"> GET </span>/devices/{'{'}mac_address{'}'}/username
                  </h1>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="text-lg list-disc pl-6 space-y-3">
                    <li>
                      <span className="font-medium">Description</span><span className="text-muted-foreground"> — Retrieves username associated with a MAC address.</span>
                    </li>
                    <li>
                      <span className="font-medium">Request</span><span className="text-muted-foreground"> — client_id (query parameter, required).</span>
                    </li>
                    <li>
                      <span className="font-medium">Response</span><span className="text-muted-foreground"> — Encrypted username.</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h1 className="text-lg font-medium">
                    <span className="mr-3">5.</span><span className="text-white bg-red-500 p-1 rounded-sm mr-3"> DELETE </span>/devices/delete
                  </h1>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="text-lg list-disc pl-6 space-y-3">
                    <li>
                      <span className="font-medium">Description</span><span className="text-muted-foreground"> — Deletes a registered device.</span>
                    </li>
                    <li>
                      <span className="font-medium">Request</span><span className="text-muted-foreground"> — EncryptedMessageRequest with: mac_address.</span>
                    </li>
                    <li>
                      <span className="font-medium">Response</span><span className="text-muted-foreground"> — Success status or error.</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <h1 className="text-2xl mt-6">Preferences Management</h1>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h1 className="text-lg font-medium">
                    <span className="mr-3">6.</span><span className="text-white bg-blue-500 p-1 rounded-sm mr-3"> POST </span>/preferences/update
                  </h1>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="text-lg list-disc pl-6 space-y-3">
                    <li>
                      <span className="font-medium">Description</span><span className="text-muted-foreground"> — Updates user preferences.</span>
                    </li>
                    <li>
                      <span className="font-medium">Request</span><span className="text-muted-foreground"> — EncryptedMessageRequest with: username, preferences.</span>
                    </li>
                    <li>
                      <span className="font-medium">Response</span><span className="text-muted-foreground"> — Encrypted updated preferences.</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h1 className="text-lg font-medium">
                    <span className="mr-3">7.</span><span className="text-white bg-green-500 p-1 rounded-sm mr-3"> GET </span>/preferences/{'{'}username{'}'}
                  </h1>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="text-lg list-disc pl-6 space-y-3">
                    <li>
                      <span className="font-medium">Description</span><span className="text-muted-foreground"> — Retrieves stored preferences for a user.</span>
                    </li>
                    <li>
                      <span className="font-medium">Request</span><span className="text-muted-foreground"> — client_id (query parameter, required).</span>
                    </li>
                    <li>
                      <span className="font-medium">Response</span><span className="text-muted-foreground"> — Encrypted preferences.</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <h1 className="text-2xl mt-6">Key Exchange Mechanism (KEM)</h1>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h1 className="text-lg font-medium">
                    <span className="mr-3">8.</span><span className="text-white bg-blue-500 p-1 rounded-sm mr-3"> POST </span>/kem/initiate
                  </h1>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="text-lg list-disc pl-6 space-y-3">
                    <li>
                      <span className="font-medium">Description</span><span className="text-muted-foreground"> — Initiates key exchange.</span>
                    </li>
                    <li>
                      <span className="font-medium">Request</span><span className="text-muted-foreground"> — client_id.</span>
                    </li>
                    <li>
                      <span className="font-medium">Response</span><span className="text-muted-foreground"> — Initiate key exchange session. The server generates a KEM key pair and returns the public key.</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h1 className="text-lg font-medium">
                    <span className="mr-3">9.</span><span className="text-white bg-blue-500 p-1 rounded-sm mr-3"> POST </span>/kem/complete
                  </h1>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="text-lg list-disc pl-6 space-y-3">
                    <li>
                      <span className="font-medium">Description</span><span className="text-muted-foreground"> — Completes key exchange.</span>
                    </li>
                    <li>
                      <span className="font-medium">Request</span><span className="text-muted-foreground"> — client_id, ciphertext_b64.</span>
                    </li>
                    <li>
                      <span className="font-medium">Response</span><span className="text-muted-foreground"> — Complete the key exchange. The client sends back the encapsulated shared secret that they have generated.</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <h1 className="text-2xl mt-6">Face Recognition</h1>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h1 className="text-lg font-medium">
                    <span className="mr-3">10.</span><span className="text-white bg-blue-500 p-1 rounded-sm mr-3"> POST </span>/register/face
                  </h1>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="text-lg list-disc pl-6 space-y-3">
                    <li>
                      <span className="font-medium">Description</span><span className="text-muted-foreground"> — Registers a user's face from a video.</span>
                    </li>
                    <li>
                      <span className="font-medium">Request</span><span className="text-muted-foreground"> — FaceRegistrationRequest with: mac_address, video.</span>
                    </li>
                    <li>
                      <span className="font-medium">Response</span><span className="text-muted-foreground"> — Success status.</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h1 className="text-lg font-medium">
                    <span className="mr-3">11.</span><span className="text-white bg-green-500 p-1 rounded-sm mr-3"> GET </span>/encodings
                  </h1>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="text-lg list-disc pl-6 space-y-3">
                    <li>
                      <span className="font-medium">Description</span><span className="text-muted-foreground"> — Retrieves face encodings from stored data.</span>
                    </li>
                    <li>
                      <span className="font-medium">Request</span><span className="text-muted-foreground"> — client_id (query parameter, required).</span>
                    </li>
                    <li>
                      <span className="font-medium">Response</span><span className="text-muted-foreground"> — Encrypted face encodings.</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </main>
  )
}