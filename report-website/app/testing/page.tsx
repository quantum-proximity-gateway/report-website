'use client'

import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import Prism from 'prismjs';
import 'prismjs/components/prism-python';
import 'prismjs/themes/prism-okaidia.css';
import { useEffect } from 'react';
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption } from "@/components/ui/table"


export default function Testing() {
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
              <BreadcrumbPage>Testing</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <div className="flex flex-col items-center shrink-0 border-b p-8">
        <h1 className="text-6xl text-center my-6">Testing</h1>
      </div>
      <div className="flex justify-center p-6">
        <div className="max-w-4xl">
          <div id="testing-strategy">
            <h1 className="text-4xl font-bold my-6">Testing Strategy</h1>
            <p className="text-lg my-6">
              Our project consists of varied components which requires testing in different ways. For our core server, we performed unit tests using pytest and done integration testing with the various system components which communicate with it to ensure that it functions correctly. For our frontends (IBM Proximity Agents Desktop App and Registration Site), we carried out compatibility testing, and responsive design testing. This ensures that they can run on different systems/browsers, and are displayed correctly regardless of window sizing. Finally, we also carried out user testing where we got clients to use our system to judge the feasibility and reception of our project in practice.
            </p>
            <div className="flex flex-wrap justify-center gap-6 my-8">
              <div className="testing-tool-card">
                <Image 
                  src="/testing/pytest.svg" 
                  alt="PyTest Logo" 
                  width={200} 
                  height={200}
                  className="mx-auto transition-transform hover:scale-105"
                />
                <p className="text-center font-medium mt-3">PyTest</p>
                <p className="text-center text-sm text-gray-500">Unit Testing Framework</p>
              </div>
              <div className="testing-tool-card">
                <Image 
                  src="/testing/responsivelyapp.png" 
                  alt="Responsively App Logo" 
                  width={200} 
                  height={200}
                  className="mx-auto transition-transform hover:scale-105"
                />
                <p className="text-center font-medium mt-3">Responsively App</p>
                <p className="text-center text-sm text-gray-500">Responsive Design Testing</p>
              </div>
            </div>
            <h1 className="text-2xl font-bold my-6">Testing Scope</h1>
              <p className="text-lg my-6">
                Taking into account our personas, we developed our tests so that we can fairly judge the functionality of our application depending on who is using it. The registration website and proximity agents application had to be as user-friendly and usable as we could make it, due to the fact that it was to be interacted with by people of all ages and physical abilities.
              </p>
              <p className="text-lg my-6">
              On the other hand, components such as the Raspberry Pi and Server were not going to be exposed to the average user, meaning that we could focus less on the "user-friendliness" of these components and more on the functionality and perfomance that they could provide.
              </p>
          </div>
          <div id="unit-integration-testing">
            <h1 className="text-4xl font-bold my-6">Integration Testing</h1>
            <p className="text-lg my-6">
              Integration testing allowed us to keep validating the functionality of our codebase as we added on more features. We constantly conducted end-to-end tests to ensure that the core server, proximity agents, ESP32 devices, and Raspberry Pi gateways communicated correctly and maintained secure data transfer across the entire authentication flow. These tests revealed several edge cases where components failed to handle certain error conditions gracefully, particularly during request failures (Raspberry Pi &rarr;  Server) or when an ESP32 moved out of range during the authentication process, causing us to add a 3 strike system.
            </p>
            <p className="text-lg my-6">
              We utilised physical environments to simulate scenarios where the QPG would be deployed, one such place was the Tech for Good lab in Malet Place 1.05. This approach helped us identify signal interference issues with the Raspberry Pi in places where there are many BLE devices around. We also integrated a manual testing framework, where as a team we would re-test the entire workflow, from registration to authentication once a big feature was added to the codebase.
            </p>
            <Card className="my-6 max-w-xl mx-auto">
              <CardContent className="flex flex-col items-center justify-center p-2">
                <Image 
                  src="/testing/techforgood.jpg" 
                  alt="Tech For Good AI Lab" 
                  width={400} 
                  height={400}
                  className="object-contain w-full rounded-md"
                />
                <p className="text-center text-sm text-gray-500 mt-3">Initial integration tests in Tech for Good AI lab</p>
              </CardContent>
            </Card>
            <h1 className="text-4xl font-bold my-6">Unit Testing</h1>
            <p className="text-lg my-6">
              Our unit tests are performed utilising a comprehensive suite of unit tests for a secure device management API that implements post-quantum cryptography. Having a large and critical part of our project like the core server being unit tested allows us to easily improve functionality in future iteration without the worries of additional bugs and vulnerabilities being introduced. The tests verify core functionality including device registration, credential management, and preferences handling - all protected by encrypted communications. Each test follows a consistent pattern of setting up test data on our database, performing different API operations through a test client, and verifying the expected responses.
            </p>
            <p className="text-lg my-6">
              Our test suite uses pytest's fixture mechanism for dependency injection, which helps us easily create test clients for our server before every test, inject them into the test function as a dependency, and automatically run the test cleanup - which ensures test isolation by removing the test database after each test run, and consistency across test runs. The <code>@pytest_asyncio.fixture</code> decorator below registers the function as an asynchronous fixture with function scope. Whenever a test requests this fixture, it automatically creates a new test client which is connected to our application and then yields it to the test function. After the test finishes, it cleans up by removing the test database file.
            </p>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code className="language-python">
{`@pytest_asyncio.fixture(scope='function')
async def test_client() -> AsyncIterator[AsyncTestClient[Litestar]]:
    async with AsyncTestClient(app=app) as client:
        yield client

    # Delete test database after each test
    os.remove(TEST_DB_FILENAME)`}
              </code>
            </pre>
            <p className="text-lg my-6">
              The most sophisticated part of these tests focuses on the key encapsulation mechanism (KEM) using quantum-resistant cryptography via the OQS library with ML-KEM-512. These tests validate the server's ability to initiate secure key exchange, generate appropriate public keys, and successfully complete the key exchange process by decapsulating client-provided ciphertexts to establish shared secrets. The comprehensive test coverage ensures the API provides secure device management capabilities while maintaining data confidentiality through end-to-end encryption - critical for a system that stores sensitive credentials and device information.
            </p>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code className="language-python">
{`TEST_CLIENT_ID_1 = '1'
TEST_SHARED_SECRET_1 = b'\xbd\xb4\xe9\xf7\x91\xf3\x97\x90\xc1\x93i\xe2\xc9\x0b\xa3\x115\xac\xcb<\xae\x96\xd6\x16\x88\x18\xc8\xd9FRG?'
encryption_helper.shared_secrets[TEST_CLIENT_ID_1] = TEST_SHARED_SECRET_1


@pytest.mark.asyncio
async def test_kem_initiate_and_complete(test_client: AsyncTestClient) -> None:
    # Get public key
    data = {'client_id': TEST_CLIENT_ID_1}
    response = await test_client.post('/kem/initiate', json=data)
    public_key_b64 = response.json().get('public_key_b64')
    if not public_key_b64:
        assert False
    
    assert encryption_helper.kem_sessions.get(TEST_CLIENT_ID_1) != None

    # Encapsulate a shared secret
    with oqs.KeyEncapsulation('ML-KEM-512') as client_kem:
        try:
            public_key = base64.b64decode(public_key_b64)
            ciphertext, shared_secret = client_kem.encap_secret(public_key)
        except Exception as e:
            assert False

    # Send encapsulated shared secret
    ciphertext_b64 = base64.b64encode(ciphertext).decode()
    data = {'client_id': TEST_CLIENT_ID_1, 'ciphertext_b64': ciphertext_b64}
    response = await test_client.post(f'/kem/complete', json=data)
    if response.status_code != 201:
        assert False

    assert shared_secret == encryption_helper.shared_secrets.get(TEST_CLIENT_ID_1)`}
              </code>
            </pre>
          </div>
          <div id="compatibility-testing">
            <h1 className="text-4xl font-bold my-6">Compatibility Testing</h1>
            <h1 className="text-2xl font-medium my-6">IBM Proximity Agents</h1>
            <p className="text-lg my-6">
              Our IBM Proximity Agents application was tested across multiple operating systems to ensure broad compatibility, although due to the limitations and restrictions of some operating systems, some features are not fully avaliable. However, the core functionality of the proximity-based agent is retained on all operating systems.
            </p>
            <p className="text-lg my-6">
              The high rate of compatibility was enabled by Tauri, which allowed us to easily create native applications on all platforms leveraging one single codebase.
            </p>
            <Table>
              <TableCaption>Table 1: Operating System Compatibility for IBM Proximity Agents</TableCaption>
              <TableHeader>
                <TableRow className="text-lg bg-gray-100 dark:bg-gray-700">
                  <TableHead>Operating System</TableHead>
                  <TableHead>Compatibility</TableHead>
                  <TableHead>Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-lg">
                    MacOS
                  </TableCell>
                  <TableCell className="text-lg text-green-500">
                    ✅ Compatible
                  </TableCell>
                  <TableCell className="text-lg">
                    Accessibility commands not available
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-lg">
                    Linux
                  </TableCell>
                  <TableCell className="text-lg text-green-500">
                    ✅ Compatible
                  </TableCell>
                  <TableCell className="text-lg">
                    Full functionality utilising gsettings
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-lg">
                    Windows
                  </TableCell>
                  <TableCell className="text-lg text-green-500">
                    ✅ Compatible
                  </TableCell>
                  <TableCell className="text-lg">
                    Accessibility commands not available
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <h1 className="text-2xl font-medium my-6">Registration Site</h1>
            <p className="text-lg my-6">
              We have also tested our registration site across multiple different environments. However, there are some issues regarding certain out-of-date browsers not natively supporting the Web Serial API, which is a core functionality of our website. This API allows us to directly communicate with the ESP32 during the registration process to share secret keys for TOTP and to read the MAC address of your device.
            </p>
            <p className="text-lg my-6">
              Fortunately, there are simple solutions available by using widely available extensions that expose the Web Serial API. For example, for Firefox users, we recommend using the <a href="https://addons.mozilla.org/en-GB/firefox/addon/webserial-for-firefox/" className="text-blue-500 hover:text-blue-700 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">WebSerial for Firefox</a> extension.
            </p>
            <Table>
              <TableCaption>Table 2: Browser Compatibility for Registration Site</TableCaption>
              <TableHeader>
                <TableRow className="text-lg bg-gray-100 dark:bg-gray-700">
                  <TableHead>Browser</TableHead>
                  <TableHead>Compatibility</TableHead>
                  <TableHead>Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-lg">
                    Chrome
                  </TableCell>
                  <TableCell className="text-lg text-green-500">
                    ✅ Compatible
                  </TableCell>
                  <TableCell className="text-lg">
                    Full functionality utilising Web Serial API
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-lg">
                    Edge
                  </TableCell>
                  <TableCell className="text-lg text-green-500">
                    ✅ Compatible
                  </TableCell>
                  <TableCell className="text-lg">
                    Full functionality utilising Web Serial API
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-lg">
                    Firefox
                  </TableCell>
                  <TableCell className="text-lg text-yellow-500">
                    ⚠️ Lacking functionality
                  </TableCell>
                  <TableCell className="text-lg">
                    Communication using Web Serial API not natively supported. Extensions are available to fix this.
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div id="responsive-design-testing">
            <h1 className="text-4xl font-bold my-6">Responsive Design Testing</h1>
            <p className="text-lg my-6">
              As all of our frontends have been designed with accessibility in mind, the choice of utilising frameworks like Next.js have allowed us to keep a consistent design throughout multiple platforms and devices. We've implemented responsive layouts that automatically adjust to different screen sizes, from large desktop monitors to mobile devices. This approach ensures that both of our applications remain usable and visually coherent regardless of the device being used.
            </p>
            <p className="text-lg my-6">
              During development, we regularly tested our interfaces across various viewport sizes using development tools like <a href="https://responsively.app/" className="text-blue-500 hover:text-blue-700 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">ResponsivelyApp</a> and other browser emulation tools. For our IBM Proximity Agents desktop application, we ensured the interface scaled appropriately with different window sizes, while our registration site was tested on multiple physical devices to verify its responsiveness in real-world conditions.
            </p>
            <Image src="/testing/responsive-app.png" alt="IBM Proximity Agents - Responsive Design Test" width={1500} height={1200} className="object-contain rounded-md"/>
            <p className="text-center text-sm text-gray-500 mt-3 my-6">Figure 1: IBM Proximity Agents - Responsive Design Test</p>
            <Image src="/testing/responsive-site.png" alt="Registration Site - Responsive Design Test" width={1500} height={1200} className="object-contain rounded-md"/>
            <p className="text-center text-sm text-gray-500 mt-3">Figure 2: Registration Site - Responsive Design Test</p>
          </div>
          <div id="performance-testing">
            <h1 className="text-4xl font-bold my-6">Performance Testing</h1>
            <p className="text-lg my-6">
              Ensuring that perfomance stayed optimal in our application was a priority we took as a team, specially considering the hardware we were using. As it is such a complex project, we needed to ensure that our code remained optimal and that we caught out any bottlenecks that may arise from unoptimized code. This applies more to the Raspberry Pi, which is a lot less powerful than the hardware the core server is meant to run on. 
            </p>
            <p className="text-lg my-6">
              Initially, we were really concerned with the idea of "Post-Quantum Cryptography" running on limited hardware like the Raspberry Pi or the overhead it would add to typical operations on the server. So, as an experiment we created a performance test script which allowed us to view the overhead that such encryption mechanism would introduce to our codebase.
            </p>
            <h1 className="text-2xl font-bold my-6">Performance Benchmarks - Post-Quantum Cryptography</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">ML-KEM-512 Key Exchange</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Metric</TableHead>
                          <TableHead>Time (ms)</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>Minimum</TableCell>
                          <TableCell>0.067</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Maximum</TableCell>
                          <TableCell>3.354</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Mean</TableCell>
                          <TableCell>0.078</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Median</TableCell>
                          <TableCell>0.069</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>95th Percentile</TableCell>
                          <TableCell>0.083</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                    <p className="text-sm text-gray-500 mt-3">Complete KEM cycle operations (key generation, encapsulation, and decapsulation)</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">Message Encryption/Decryption</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Operation</TableHead>
                          <TableHead>Mean (ms)</TableHead>
                          <TableHead>Median (ms)</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>Encrypt</TableCell>
                          <TableCell>0.015</TableCell>
                          <TableCell>0.009</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Decrypt</TableCell>
                          <TableCell>0.009</TableCell>
                          <TableCell>0.008</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                    <p className="text-sm text-gray-500 mt-3">Time to encrypt and decrypt messages using our EncryptionHelper</p>
                  </CardContent>
                </Card>
              </div>

              <p className="text-lg my-6">
                Overall, our results confirm that utilsing the liboqs implementation of the ML-KEM-512 key encapsulation algorithm alongside AES-GCM adds minimal overhead to the system, making it entirely feasible to deploy on resource-constrained devices like the Raspberry Pi.
              </p>

              <p className="text-lg my-6">
                In addition to small performance tests like the Encryption/Decryption test-suite, we also added middleware to our server that allows us to monitor bottlenecks in different functions on production code, this is done by a profiler that we have defined utilising the cprofile and pstats libraries in Python.
              </p>
              <p className="text-lg my-6">
                Finally, our choice of using Tauri for a cross-platform application development ensured that our application size stayed low, and that the application was performant. Our final build for the Proximity Agents application on MacOS ended up being 14.3MB, whereas a simple application at a much smaller scale than ours made using other frameworks like Electron usually have a larger size of around 85MB, so using Tauri was definitely a good choice when it came reducing our performance footprint. [1]
              </p>
              <p className="text-lg my-6">
                Testing the performance of the application on a Macbook Pro M2 Pro, revealed that the app was very usable on everyday devices such as a consumer-grade laptop, the only bottleneck the app has is the Ollama inferencing, which is to be expected as LLM inferencing is quite a big task that relies on dedicated GPU hardware. When the user is prompting the model, GPU utilization goes up to 94% and RAM utilization to 1.4GB, this was tested with Granite 3.2.
              </p>
              <Carousel className="my-6 max-w-3xl mx-auto">
              <CarouselContent>
                <CarouselItem key={1}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center justify-center p-4">
                        <Image 
                          src="/testing/proximity-agents-memory.png" 
                          alt="Tauri App Memory Footprint" 
                          width={1636} 
                          height={1169} 
                          className="object-contain max-h-[500px]" 
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem key={2}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center justify-center p-4">
                        <Image 
                          src="/testing/proximity-agents-cpu.png" 
                          alt="Tauri App CPU/GPU Usage" 
                          width={1636} 
                          height={1169} 
                          className="object-contain max-h-[500px]" 
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem key={3}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center justify-center p-4">
                        <Image 
                          src="/testing/ollama-gpu.png" 
                          alt="Ollama CPU/GPU Usage" 
                          width={1636} 
                          height={1169} 
                          className="object-contain max-h-[500px]" 
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem key={4}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center justify-center p-4">
                        <Image 
                          src="/testing/ollama-memory.png" 
                          alt="Ollama Memory Footprint Usage" 
                          width={1636} 
                          height={1169} 
                          className="object-contain max-h-[500px]" 
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
              <p className="text-center text-sm text-gray-500 mt-2">Performance monitoring of Proximity Agents and Ollama</p>
            </Carousel>
          </div>
          <div id="user-acceptance-testing">
            <h1 className="text-4xl font-bold my-6">User Acceptance Testing</h1>
            <p className="text-lg my-6">
              Throughout the project, we have prioritised ease of use to ensure our system remains as user-friendly as possible. To achieve this, we involved multiple stakeholders in the development process, utilising different opportunities provided by outreach events to carry out structured testing sessions where we could gather actionable feedback and iteratively improve our designs.
            </p>
            <p className="text-lg my-6">
              We ensured our testing groups encompassed a diverse range of participants, from secondary school students to industry professionals, providing us with perspectives from both technical and non-technical users across different age groups and experience levels. This also allowed us to gain a wide range of perspectives on the usability of our project in different enviroments.
            </p>
            <Carousel className="my-6 w-full">
              <CarouselContent>
                <CarouselItem key={1}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center justify-center p-6">
                        <Image 
                          src="/testing/user-testing-3.jpg" 
                          alt="User Testing 3" 
                          width={1636} 
                          height={1169} 
                          className="object-contain max-h-[560px] w-auto" 
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem key={2}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center justify-center p-6">
                        <Image 
                          src="/testing/user-testing-5.jpg" 
                          alt="User Testing 5" 
                          width={1636} 
                          height={1169} 
                          className="object-contain max-h-[560px] w-auto" 
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem key={3}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center justify-center p-6">
                        <Image 
                          src="/testing/user-testing-2.jpg" 
                          alt="User Testing 4" 
                          width={1636} 
                          height={1169} 
                          className="object-contain max-h-[560px] w-auto" 
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
              <p className="text-center text-sm text-gray-500 mt-2">User Testing Sessions</p>
            </Carousel>
            <h1 className="text-2xl font-bold my-6">User Testing Methodology</h1>
            <p className="text-lg my-6">
              We employed a structured approach to user testing that combined task-based evaluation with qualitative feedback collection:
            </p>
            <Carousel>
              <CarouselContent>
                <CarouselItem key={1} className="basis-1/3">
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-primary">Contextual Inquiry</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="text-base text-muted-foreground list-disc pl-2 space-y-1">
                        <li>We gave a quick overview of the project to participants to ensure they were given minimal instructions.</li>
                        <li>We observed participants as they attempted to complete tasks with our system, such as registering their device, logging in, and interacting with the offline model.</li>
                        <li>This approach helped identify different interaction patterns and unexpected obstacles users face.</li>
                      </ul>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem key={2} className="basis-1/3">
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-primary">Task Completion Analysis</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="text-base text-muted-foreground list-disc pl-2 space-y-1">
                        <li>We tracked the time users required to complete each task and noted where users got stuck.</li>
                        <li>This data really helped identify the most problematic areas of our interface and allowed us to gain insight into the issues with our UI design.</li>
                      </ul>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem key={3} className="basis-1/3">
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-primary">Think-Aloud Protocols</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="text-base text-muted-foreground list-disc pl-2 space-y-1">
                        <li>We encouraged participants to verbalize their thoughts and expectations as they navigated the interface.</li>
                        <li>This revealed mental models and assumptions that influenced how users approached our system.</li>
                      </ul>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem key={4} className="basis-1/3">
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-primary">Post-Task Interviews</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="text-base text-muted-foreground list-disc pl-2 space-y-1">
                        <li>We debriefed with users and conducted short interviews after testing sessions.</li>
                        <li>We gathered detailed insights on user experience and satisfaction with specific features.</li>
                        <li>This helped us prioritize improvements based on user impact and expectations.</li>
                      </ul>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <p className="text-lg my-6">
              This methodology allowed us to identify both obvious usability issues and more subtle pain points that we may have missed with our perspective as technical users.
            </p>
            <h1 className="text-2xl font-bold my-6">User Feedback</h1>
            <p className="text-lg my-6">
              Key insights from our user testing sessions revealed both positive aspects and areas for improvement, we took a sample of 4 different users from different testing session, allowing us to get a wide range of opinions.
            </p>
            <Table className="my-10">
              <TableCaption>Table 3: User Feedback on Quantum Proximity Gateway</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">Acceptance Requirement</TableHead>
                  <TableHead className="text-center">Strongly Disagree</TableHead>
                  <TableHead className="text-center">Disagree</TableHead>
                  <TableHead className="text-center">Agree</TableHead>
                  <TableHead className="text-center">Strongly Agree</TableHead>
                  <TableHead>Comments</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Authentication process was seamless</TableCell>
                  <TableCell className="text-center">0</TableCell>
                  <TableCell className="text-center">0</TableCell>
                  <TableCell className="text-center">1</TableCell>
                  <TableCell className="text-center">3</TableCell>
                  <TableCell>+ Overall system often worked flawlessly</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Registration process was intuitive</TableCell>
                  <TableCell className="text-center">0</TableCell>
                  <TableCell className="text-center">1</TableCell>
                  <TableCell className="text-center">2</TableCell>
                  <TableCell className="text-center">1</TableCell>
                  <TableCell>- ESP32 pairing was buggy for some users</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Bluetooth communication was reliable</TableCell>
                  <TableCell className="text-center">0</TableCell>
                  <TableCell className="text-center">1</TableCell>
                  <TableCell className="text-center">2</TableCell>
                  <TableCell className="text-center">1</TableCell>
                  <TableCell>+ Some interference issues in crowded environments, but reliable most of the time</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Raspberry Pi setup was straightforward</TableCell>
                  <TableCell className="text-center">0</TableCell>
                  <TableCell className="text-center">2</TableCell>
                  <TableCell className="text-center">1</TableCell>
                  <TableCell className="text-center">1</TableCell>
                  <TableCell>+ Technical users found it manageable, which was expected</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Error messages were clear</TableCell>
                  <TableCell className="text-center">0</TableCell>
                  <TableCell className="text-center">2</TableCell>
                  <TableCell className="text-center">1</TableCell>
                  <TableCell className="text-center">1</TableCell>
                  <TableCell>- Too much technical jargon in error messages</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Would use this over passwords</TableCell>
                  <TableCell className="text-center">0</TableCell>
                  <TableCell className="text-center">0</TableCell>
                  <TableCell className="text-center">0</TableCell>
                  <TableCell className="text-center">4</TableCell>
                  <TableCell>+ Unanimous preference for proximity-based auth</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Overall security perception</TableCell>
                  <TableCell className="text-center">0</TableCell>
                  <TableCell className="text-center">0</TableCell>
                  <TableCell className="text-center">0</TableCell>
                  <TableCell className="text-center">4</TableCell>
                  <TableCell>+ Users felt more secure with quantum-resistant methods and TOTP verification</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <h1 className="text-xl font-bold my-6">Summary of User Feedback</h1>
            <Table>
              <TableCaption>Table 4: Summary of User Feedback</TableCaption>
              <TableHeader>
                <TableRow className="text-lg bg-gray-100 dark:bg-gray-700">
                  <TableHead className="w-[50%]">✅ Positive Feedback</TableHead>
                  <TableHead>❌ Areas for Improvement</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-lg">
                    <p className="text-muted-foreground">Impressive integration of technologies, "Straight out of Star Trek"</p>
                  </TableCell>
                  <TableCell className="text-lg">
                    <p className="text-muted-foreground">ESP32 registration process was confusing and buggy during first-time setup</p>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-lg">
                    <p className="text-muted-foreground">Strong perceived security benefits that users appreciated</p>
                  </TableCell>
                  <TableCell className="text-lg">
                    <p className="text-muted-foreground">Error messages were cluttered and difficult to understand</p>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-lg">
                    <p className="text-muted-foreground">Convenient authentication once properly configured</p>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-lg">
                    <p className="text-muted-foreground">Time-saving capabilities praised</p>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <p className="text-lg mt-6">
              Overall, users were impressed by the innovative technology, praising it's ease of use and seamlessness once installed on computers. Our main focus for improvements was making the system more intuitive and user-friendly, especially for non-technical users.
            </p>
            <h1 className="text-2xl font-bold my-6">Closing the Feedback Loop</h1>
            <p className="text-lg my-6">
              Based on user feedback, we implemented several significant improvements in the last weeks of development:
            </p>
            <Card className="my-6">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Extra Restrictions</CardTitle>
                <Separator />
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">A few users found workarounds the registration website, which allowed them to sign up with an empty MAC address. We implemented stricter rules on the registration website and instructions to explain these restrictions.</p>
              </CardContent> 
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Better Error Handling</CardTitle>
                <Separator />
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">We cleared up a lot of unnecessary debugging information on the Raspberry Pi and improved the logging framework by utilising the ColoredLogs library.</p>
              </CardContent>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Cluttered UI</CardTitle>
                <Separator />
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">The proximity agents application got a complete redesign, making it look more modern and pleasing to users. </p>
              </CardContent>
            </Card>
            <p className="text-lg mt-6">
              After implementing these changes, follow-up testing showed significant improvements in task completion rates and user satisfaction scores, particularly among non-technical users who had previously struggled with the system.
            </p>
            <div id="references">
              <h1 className="text-4xl font-bold my-6">References</h1>
              <ol className="text-lg list-decimal space-y-6 pl-5">
                <li>
                  <span className="text-muted-foreground">
                    www.levminer.com. (n.d.). Tauri VS. Electron - Real world application. [online] Available at:{" "}
                    <a
                      href="https://www.levminer.com/blog/tauri-vs-electron"
                      className="text-blue-500 hover:text-blue-700 hover:underline transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.levminer.com/blog/tauri-vs-electron
                    </a>
                    . [Accessed March 26, 2025].
                  </span>
                </li>
              </ol>
            </div>

            
          </div>
        </div>
      </div>
    </main>
  )
}