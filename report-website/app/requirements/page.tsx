import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardFooter, CardTitle, CardDescription } from "@/components/ui/card"
import { Metadata } from 'next';
import Image from "next/image";


export const metadata: Metadata = {
    title: 'Requirements',
  };

export default function Requirements() {
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
              <BreadcrumbPage>Requirements</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <div className="flex flex-col items-center shrink-0 border-b p-8">
        <h1 className="text-6xl text-center my-6">Requirements</h1>
      </div>
      <div className="flex justify-center p-6">
        <div className="max-w-4xl">
          <div id="project-background">
            <h1 className="text-4xl font-bold my-6">Project Background and Partner Introduction</h1>
            <p className="text-lg">
              The Quantum Proximity Gateway (QPG) is a cutting-edge authentication system developed in collaboration with IBM. This system aims to revolutionise user authentication and access control by eliminating manual logins and streamlining authentication through proximity detection, facial recognition, and AI-driven profile management.         
            </p>
            <p className="text-lg my-6">
              Our project sets a precedent for an innovative way to interact with LLMs via a method we named <span className="font-medium">Proximity Prompting</span>. By leveraging the proximity detection capabilities of our system, users can engage with IBM's Granite 3.2 AI model contextually and intuitively, without the friction of traditional interfaces.
            </p>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <p className="text-lg font-semibold">
                    Why is it needed?
                  </p>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-lg">
                    Traditional authentication methods, such as password-based logins and manual profile configurations, are slow, inefficient, and prone to security vulnerabilities. Our research has shown that employees waste an average of about 30 minutes per day logging into various systems, setting up profiles and ensuring access permissions are correctly assigned, which translates into hundreds of hours per year in lost productivity. More specifically, however, current authentication methods drastically fail to include all members of society, creating additional barriers for disabled, elderly and neurodivergent users, who may require a more automated, handsfree authentication process. 
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <p className="text-lg font-semibold">
                    Who benefits?
                  </p>  
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-lg">
                    The QPG is designed for all users, from corporate employees in large enterprises to students, faculty members, and individuals who frequently switch between devices, offering seamless, context-aware authentication to enhance security and convenience. By integrating IBM's Granite 3.2 AI model and post-quantum cryptography, the system ensures effortless, adaptive authentication in various work environments. Notably, QPG revolutionizes accessibility for neurodivergent, elderly, and quadriplegic users by eliminating traditional passwords and reducing cognitive load. Neurodivergent users benefit from automatic loading of personalized settings and intuitive, frictionless access, while elderly users enjoy simplified authentication that removes the need for memorization or fine motor skills. Quadriplegic users authenticate effortlessly through multimodal inputs such as facial recognition and proximity detection, breaking down barriers to device interaction and ensuring security without added complexity.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div id="goals">
            <h1 className="text-4xl font-bold my-6">Goals</h1>
            <div className="flex justify-center">
              <Carousel>
                <CarouselContent>
                  <CarouselItem key={1} className="basis-1/3">
                    <Card className="h-full">
                      <CardHeader>
                        <CardTitle className="text-2xl font-bold text-primary">Secure Access to Workstations via Proximity & Facial Recognition</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <ul className="text-base text-muted-foreground list-disc pl-2 space-y-1">
                          <li>Eliminate manual logins by using BLE proximity sensing and real-time facial recognition via Raspberry Pi.</li>
                          <li>Provide customised experiences by dynamically loading user profiles and accessibility settings.</li>
                          <li>Enable easy settings configuration via an AI agent, implemented using Granite 3.2 AI Model.</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem key={2} className="basis-1/3">
                    <Card className="h-full">
                      <CardHeader>
                        <CardTitle className="text-2xl font-bold text-primary">Improve Security & Privacy</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <ul className="text-base text-muted-foreground list-disc pl-2 space-y-1">
                          <li>Implement post-quantum encryption (PQC) to safeguard sensitive user data.</li>
                          <li>Ensure zero-trust authentication by using biometric verification (facial recognition) before granting access.</li>
                          <li>Enable role-based access control (RBAC) for shared devices.</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem key={3} className="basis-1/3">
                    <Card className="h-full">
                      <CardHeader>
                        <CardTitle className="text-2xl font-bold text-primary">Create a Scalable IoT Ecosystem</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <ul className="text-base text-muted-foreground list-disc pl-2 space-y-1">
                          <li>Establish a network of interconnected devices that communicate securely.</li>
                          <li>Develop a modular authentication system adaptable to various industries.</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem key={4} className="basis-1/3">
                    <Card className="h-full">
                      <CardHeader>
                        <CardTitle className="text-2xl font-bold text-primary">Increase Efficiency & Reduce Downtime</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <ul className="text-base text-muted-foreground list-disc pl-2 space-y-1">
                          <li>Minimise login friction in shared spaces by automatically configuring devices upon user entry.</li>
                          <li>Improve productivity in corporate environments, education institutions, and hot-desking scenarios.</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
          {/* TODO: Add interviews/proof of survey */}
          <div id="requirements-gathering">
            <h1 className="text-4xl font-bold my-6">Requirements Gathering</h1>
            <p className="text-lg my-6">
              We used a multiple approaches when collecting our requirements for the design of the QPG to ensure that our system is user-centric and industry-relevant.
            </p>
            <Tabs defaultValue="user-surveys" className="mt-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="user-surveys">User Surveys and Feedback</TabsTrigger>
                <TabsTrigger value="stakeholder-interviews">Stakeholder and Client Interviews</TabsTrigger>
              </TabsList>
              <TabsContent value="user-surveys">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">User Surveys and Feedback</CardTitle>
                    <Separator />
                  </CardHeader>
                  <CardContent>
                    <ul className="text-lg list-disc pl-6 space-y-1">
                      <li>We conducted structured surveys via questionnaires to assess the challenges with traditional authentication.</li>
                      <li>All participants were asked to sign a research participation consent form, which outlined the details of the survey to participants and allowed them to make an informed decision on whether to participate.</li>
                      <li>We used a combination of open and closed questions, allowing us to gather both detailed, qualitative insights from open-ended questions while also getting quantifiable data and clear structure from closed-ended questions.</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="stakeholder-interviews">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Stakeholder and Client Interviews</CardTitle>
                    <Separator />
                  </CardHeader>
                  <CardContent>
                    <ul className="text-lg list-disc pl-6 space-y-1">
                      <li>We had several discussions with IBM engineers, IT security specialists and accessibility experts which helped to shape our security and usability priorities.</li>
                      <li>Detailed feedback was gathered on encryption protocols, authentication, and privacy policies.</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            <h1 className="text-2xl font-bold my-6">Survey Data Analysis</h1>
            <p className="text-lg mb-3">
              Our user survey produced valuable insights:
            </p>
            <div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <p className="text-lg font-semibold">
                      <span className="mr-3">1.</span> Do you usually have trouble with hot-desking (logging in to public computers and setting them up according to your preferences)?
                    </p>  
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-lg">
                      <span className="font-medium">67% of respondents</span> stated that they had trouble with hot-desking, and found manual logins <span className="font-medium">inconvenient and time-consuming</span>.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <p className="text-lg font-semibold">
                      <span className="mr-3">2.</span> Would having a mechanism to automatically load up your profile and settings be helpful?
                    </p>  
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-lg">
                      <span className="font-medium">100% of respondents</span> affirmed that having a mechanism to automatically load up your profile and settings would be helpful.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <p className="text-lg font-semibold">
                      <span className="mr-3">3.</span> Why would such a mechanism be helpful?
                    </p>  
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-lg">
                      Participants responded with the general sentiment that it would <span className="font-medium">save time</span> by eliminating the need to log in and configure settings manually, making the process <span className="font-medium">smoother and faster</span>, especially when switching between devices.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <p className="text-lg font-semibold">
                      <span className="mr-3">4.</span> What are your opinions on a proximity-based mechanism to do this?
                    </p>  
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-lg">
                      People generally thought that the idea was quite innovative. For example, one of the responses was “[the mechanism] <span className="font-medium">sounds very futuristic</span>, it would help people with accessibility challenges all around the world access essential services on their devices”.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <p className="text-lg font-semibold">
                      <span className="mr-3">5.</span> What features would you like if this were to be implemented?
                    </p>  
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-lg">
                      Many potential ideas were given such as “I would like some sort of password-protected service” and “Use a two-factor authentication (2FA)”. These indicate a <span className="font-medium">general concern about privacy</span>. Some other ideas about utilising chatbots were suggested, saying for example that “An assistant helping me to change my preferences would be a great feature”.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <p className="text-lg font-semibold">
                      <span className="mr-3">6.</span> Do you usually have your phone on you in public?
                    </p>  
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-lg">
                      All responses were affirmative, generally stating that they have their phone on them all the time.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <p className="mt-6 text-lg">
              The data we collected sufficiently justified the need for BLE proximity technology & facial recognition integration for auto-profile loading, as well as the implementation of an AI chatbot feature added for guidance & settings adjustments. The survey also encouraged us to use post-quantum encryption to enhance security.
            </p>
            <h1 className="text-2xl font-bold my-6">Evaluation of Survey Methods</h1>
            <p className="text-lg">
              The survey conducted to gather user requirements was structured to identify pain points, user expectations, and feature priorities. In the future, we could refine the survey methodology further and incorporate more neutral phrasing to reduce bias and improve the survey's accuracy, allowing us to better gauge the system’s real-world effectiveness.
            </p>
            <Table className="mt-6">
              <TableHeader>
                <TableRow className="text-lg">
                  <TableHead>✅ Strengths</TableHead>
                  <TableHead>⚠️ Limitations</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-lg">
                    <span className="font-medium">Direct User Insights</span>
                    <p className="text-muted-foreground">The survey provided first-hand responses from individuals who regularly experience authentication challenges, making the data highly relevant.</p>
                  </TableCell>
                  <TableCell className="text-lg">
                    <span className="font-medium">Limited Sample Size</span>
                    <p className="text-muted-foreground">The survey was conducted with a relatively small group of users, which may not be fully representative of all potential users. A larger dataset would improve the reliability of conclusions.</p>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-lg">
                    <span className="font-medium">Broad Applicability</span>
                    <p className="text-muted-foreground">The inclusion of various user groups (corporate employees, students, users with advanced accessibility requirements) ensured that diverse perspectives were captured.</p>
                  </TableCell>
                  <TableCell className="text-lg">
                    <span className="font-medium">Potential Response Bias</span>
                    <p className="text-muted-foreground">Respondents may have given answers that they thought were socially desirable or aligned with the project’s goals rather than their actual preferences. For example, some users might have expressed support for facial recognition authentication without fully considering the privacy implications.</p>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-lg">
                    <span className="font-medium">Balanced Question Design</span>  
                    <p className="text-muted-foreground">The mix of multiple-choice, closed-ended and open-ended questions allowed for both statistical analysis and deeper qualitative insights. Open-ended responses specifically provided valuable user-driven feature suggestions, such as 2-factor authentication and an AI chatbot for editing accessibility settings.</p>
                  </TableCell>
                  <TableCell className="text-lg">
                    <span className="font-medium">Lack of Longitudinal Data</span>  
                    <p className="text-muted-foreground">The survey only captured a single point in time and did not account for changing user preferences over time. A user’s opinion on the access control mechanisms might evolve as they gain experience with new authentication technologies or encounter real-world security breaches.</p>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div id="personas">
            <h1 className="text-4xl font-bold my-6">Personas</h1>
            <p className="text-lg">
              To ensure the QPG meets the needs of different user groups, we developed detailed personas representing key stakeholders and typical users of the system. These personas help in designing features that match real-world user behaviors and challenges.
            </p>
            <div className="flex justify-center">
              <Carousel className="my-6">
                <CarouselContent>
                  <CarouselItem key={1}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex items-center justify-center p-6">
                          <Image src="/requirements/persona-1.png" alt="Persona 1" width={1636} height={1169} className="object-contain" />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                  <CarouselItem key={2}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex items-center justify-center p-6">
                          <Image src="/requirements/persona-2.png" alt="Persona 2" width={1636} height={1169} className="object-contain" />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                  <CarouselItem key={3}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex items-center justify-center p-6">
                          <Image src="/requirements/persona-3.png" alt="Persona 3" width={1636} height={1169} className="object-contain" />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
            <p className="text-lg">
              From the data collected thus far from our survey and personas, we have identified these following key points prevalent throughout the data:
            </p>
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">User desire for seamless authentication</CardTitle>
                <Separator />
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">The surveys highlighted a significant frustration with manual logins, particularly in hot-desking offices, educational institutions, and accessibility-focused use cases. Users consistently expressed a need for instant, hands-free authentication without having to enter passwords repeatedly. This reinforced the necessity of Bluetooth Low Energy (BLE) proximity detection combined with real-time facial recognition to provide frictionless access to computers and shared devices.</p>
              </CardContent>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Applicability in diverse scenarios</CardTitle>
                <Separator />
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">Our survey results revealed a variety of use cases for the QPG authentication system, ranging from increasing productivity and reducing time wasted accessing devices in the office, to enhancing accessibility for users with disabilities. This diversity emphasises the importance of creating a versatile solution that adapts to a wide range of user needs and preferences, and as such, facial recognition must be combined with the proximity mechanism to ensure complete functionality and multi-factor authentication.</p>
              </CardContent>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Benefits of AI chatbot</CardTitle>
                <Separator />
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">Users appreciated the idea of AI-driven chatbot for personalising preferences. Accessibility features such as high contrast mode, larger text size, and dark mode were found to be crucial to the user experience of devices, especially to neurodivergent and elderly users, and so this feature serves a pivotal role in ensuring the QPG is user-friendly and accessible.</p>
              </CardContent>
            </Card> 
          </div>
          <div id="use-cases">
            <h1 className="text-4xl font-bold my-6">Use Cases</h1>
            <h1 className="text-2xl font-bold my-6">Use Case Diagram</h1>
            <p className="text-lg">
              The use case diagram below shows how users can interact with the QPG to authenticate themselves and access devices seamlessly. Each use case represents a real-world scenario where the QPG enhances efficiency, security, and accessibility by dynamically adapting to user presence and intent.
            </p>
            <p className="text-lg my-6">
              [INSERT USE CASE DIAGRAM]
            </p>
            <h1 className="text-2xl font-bold my-6">Use Case List</h1>
            <Tabs defaultValue="uc1" className="mt-6">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="uc1">UC1</TabsTrigger>
                <TabsTrigger value="uc2">UC2</TabsTrigger>
                <TabsTrigger value="uc3">UC4</TabsTrigger>
                <TabsTrigger value="uc4">UC4</TabsTrigger>
                <TabsTrigger value="uc5">UC5</TabsTrigger>
              </TabsList>
              <TabsContent value="uc1">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg"><span className="mr-3">UC1.</span> Secure Access to Workstations via Proximity & Facial Recognition</CardTitle>
                    <Separator />
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell className="text-lg">
                            <span className="font-medium">Actor</span>
                          </TableCell>
                          <TableCell className="text-lg">
                            User e.g. Employee
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-lg">
                            <span className="font-medium">Description</span>
                          </TableCell>
                          <TableCell className="text-lg">
                            Securely log into workstation via proximity & facial recognition
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-lg">
                            <span className="font-medium">Main flow</span>
                          </TableCell>
                          <TableCell className="text-lg">
                            <ul className="list-decimal pl-6 space-y-2">
                            <li>User enters office and approaches workstation with QPG system.</li>
                            <li>The BLE sensor detects the user's presence.</li>
                            <li>The QPG authenticates the user automatically via facial recognition using the Raspberry Pi camera module.</li>
                            <li>If successful, the system loads the user’s profile, workspace preferences, and applications. The workstation adjusts personal settings including contrast, text size and zoom based on their stored preferences.</li>
                            <li>If authentication fails, access is denied, and an alert is sent to IT security. 6. When the user leaves, the QPG logs them out, protects their stored preferences via post-quantum encryption and resets the desk for the next user.</li>
                            </ul>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-lg">
                            <span className="font-medium">Result</span>
                          </TableCell>
                          <TableCell className="text-lg">
                            Secure access to workstations via proximity sensiing and facial recognition
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="uc2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg"><span className="mr-3">UC2.</span> Accessibility-Focused Hands-Free Authentication</CardTitle>
                    <Separator />
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell className="text-lg">
                            <span className="font-medium">Actor</span>
                          </TableCell>
                          <TableCell className="text-lg">
                            User with mobility impairments
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-lg">
                            <span className="font-medium">Description</span>
                          </TableCell>
                          <TableCell className="text-lg">
                            A quadriplegic user logs into a device without movement
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-lg">
                            <span className="font-medium">Main flow</span>
                          </TableCell>
                          <TableCell className="text-lg">
                            <ul className="list-decimal pl-6 space-y-2">
                            <li>The quadriplegic user moves towards the device.</li>
                            <li>The BLE sensor detects the user's presence.</li>
                            <li>The QPG system prompts facial recognition as an alternative to manual login.</li>
                            <li>If successful, the system loads the user's profile, stored preferences and AI chatbot automatically (the automatic opening of the chatbot can be turned on or off by the user, depending on necessity).</li>
                            <li>The system automatically equips the device's in-built microphone, and prompts the user to make accessibility changes via the AI chatbot, or alternatvely, close the chatbot.</li>
                            <li>If authentication fails, access is denied, and an alert is sent to IT security.</li>
                            <li>When the user leaves, the QPG logs them out, protects their stored preferences via post-quantum encryption and resets the desk for the next user.</li>
                            </ul>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-lg">
                            <span className="font-medium">Result</span>
                          </TableCell>
                          <TableCell className="text-lg">
                            Hands-free access to device for users with mobility issues
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="uc3">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg"><span className="mr-3">UC3.</span> Proximity-Based Access to Shared Tablets in Co-Working Spaces</CardTitle>
                    <Separator />
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell className="text-lg">
                            <span className="font-medium">Actor</span>
                          </TableCell>
                          <TableCell className="text-lg">
                            User e.g. Freelancer, Remote Worker
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-lg">
                            <span className="font-medium">Description</span>
                          </TableCell>
                          <TableCell className="text-lg">
                            User has personalised short term access to a shared device
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-lg">
                            <span className="font-medium">Main flow</span>
                          </TableCell>
                          <TableCell className="text-lg">
                            <ul className="list-decimal pl-6 space-y-2">
                            <li>QPG detects the freelancer’s presence and identifies them via BLE proximity.</li>
                            <li>The system loads their workspace preferences, such as bookmarks, cloud storage access, and custom app settings.</li>
                            <li>When the freelancer moves away, the tablet stores their preferences securely via post-quantum encryption on their profile, and automatically resets to its default state.</li>
                            </ul>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-lg">
                            <span className="font-medium">Result</span>
                          </TableCell>
                          <TableCell className="text-lg">
                            Secure and efficient access in shared environments
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="uc4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg"><span className="mr-3">UC4.</span> AI-Driven Chatbot for Troubleshooting and User Assistance</CardTitle>
                    <Separator />
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell className="text-lg">
                            <span className="font-medium">Actor</span>
                          </TableCell>
                          <TableCell className="text-lg">
                            User e.g. Employee, Student, IT Support Agent
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-lg">
                            <span className="font-medium">Description</span>
                          </TableCell>
                          <TableCell className="text-lg">
                            User has trouble accessing their profile or personalising their settings, so uses AI chatbot for assistance
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-lg">
                            <span className="font-medium">Main flow</span>
                          </TableCell>
                          <TableCell className="text-lg">
                            <ul className="list-decimal pl-6 space-y-2">
                              <li>User enters office and approaches workstation with QPG system.</li>
                              <li>The BLE sensor detects the user's presence.</li>
                              <li>The QPG authenticates the user automatically via facial recognition using the Raspberry Pi camera module.</li>
                              <li>The user interacts with the built-in AI chatbot via voice or text input (no voice authentication available, only text-to-speech).</li>
                              <li>The chatbot analyses the issue and provides guided troubleshooting steps.</li>
                              <li>If the issue is unresolved, the chatbot escalates the case to IT support with diagnostic logs.</li>
                              <li>The chatbot can also suggest accessibility settings (e.g., adjusting text size, enabling dark mode).</li>
                            </ul>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-lg">
                            <span className="font-medium">Result</span>
                          </TableCell>
                          <TableCell className="text-lg">
                            Self-service troubleshooting and improved accessibility
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="uc5">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg"><span className="mr-3">UC5.</span> IT Admin Monitoring and Security Enforcement</CardTitle>
                    <Separator />
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell className="text-lg">
                            <span className="font-medium">Actor</span>
                          </TableCell>
                          <TableCell className="text-lg">
                            IT Administrator
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-lg">
                            <span className="font-medium">Description</span>
                          </TableCell>
                          <TableCell className="text-lg">
                            An IT administrator monitors authentication logs and enforce access policies
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-lg">
                            <span className="font-medium">Main flow</span>
                          </TableCell>
                          <TableCell className="text-lg">
                            <ul className="list-decimal pl-6 space-y-2">
                              <li>The IT admin logs into the QPG dashboard.</li>
                              <li>They view real-time authentication logs, including failed login attempts and access requests.</li>
                              <li>If a security risk is detected, they can manually revoke access or enforce 2FA for specific users.</li>
                            </ul>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-lg">
                            <span className="font-medium">Result</span>
                          </TableCell>
                          <TableCell className="text-lg">
                            Centralised security monitoring
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          <div id="moscow-list">
            <h1 className="text-4xl font-bold my-6">MoSCoW Requirements List</h1>
            <h1 className="text-2xl font-bold my-6">Functional Requirements</h1>
            <p className="text-lg">
              This list defines the core features and functionalities essential for the development of the QPG. With a strong focus on seamless authentication, secure accessibility, and adaptive user control, the QPG leverages BLE proximity detection, facial recognition, post-quantum encryption and AI-driven profile management to provide a frictionless login experience. While the primary focus remains on robust security and usability, the system also considers potential enhancements such as multi-device synchronisation, advanced directional proximity detection via signal strength, and intelligent device-switching capabilities. This structured requirement framework ensures that essential features are prioritised while leaving room for future scalability and innovation.
            </p>
            <Accordion type="single" collapsible className="my-2">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <p className="text-lg font-semibold">
                    Must Have
                  </p>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="text-lg list-disc pl-6 space-y-3">
                    <li>
                      BLE proximity connection to Raspberry Pi
                      <ul className="text-lg list-[circle] pl-6 space-y-2">
                        <li>
                          Integration with BLE connected to Raspberry Pi for detecting user proximity to a specific device (ESP32).
                        </li>
                      </ul>
                    </li>
                    <li>
                      Facial recognition via Raspberry Pi (using camera module)
                      <ul className="text-lg list-[circle] pl-6 space-y-2">
                        <li>
                          Use of Raspberry Pi for real-time facial recognition, to authenticate users and link their profiles to devices. Ensure accuracy in low light conditions and secure handling of biometric data.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Accessibility settings fetching
                      <ul className="text-lg list-[circle] pl-6 space-y-2">
                        <li>
                          Automatically fetch user-specific accessibility settings when the user connects to a device e.g text size, contrast, voice support, etc.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Server
                      <ul className="text-lg list-[circle] pl-6 space-y-2">
                        <li>
                          Use of a server to host user profiles, and manage backend operations.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Post-quantum cryptography encryption
                      <ul className="text-lg list-[circle] pl-6 space-y-2">
                        <li>
                          All data transmitted between devices should be encrypted using a PQC algorithm to secure user data.
                        </li>
                      </ul>
                    </li>
                    <li>
                      AI chatbot
                      <ul className="text-lg list-[circle] pl-6 space-y-2">
                        <li>
                          Use chatbot (powered by IBM's Granite 3.2 AI model) to help with troubleshooting/guidance and for easy settings configurations.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible className="my-2">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <p className="text-lg font-semibold">
                    Should Have
                  </p>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="text-lg list-disc pl-6 space-y-3">
                    <li>
                      A website to register device and configure initial settings
                      <ul className="text-lg list-[circle] pl-6 space-y-2">
                        <li>
                          Register new user profiles on website (facial recognition setup, preferences, etc.), and save to server.
                        </li>
                        <li>
                          Use secure 2 factor authentication login.
                        </li>
                        <li>
                          Have a responsive design making it suitable for either computer or tablet use.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Directional proximity management
                      <ul className="text-lg list-[circle] pl-6 space-y-2">
                        <li>
                          Identify a specific device a user intends to interact with when there are multiple devices nearby.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible className="my-2">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <p className="text-lg font-semibold">
                    Could Have
                  </p>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="text-lg list-disc pl-6 space-y-3">
                    <li>
                      API Layer to make system reproducible
                      <ul className="text-lg list-[circle] pl-6 space-y-2">
                        <li>
                          An API could allow third-party developers to integrate QPG authentication into other systems for broader adoption.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible className="my-2">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <p className="text-lg font-semibold">
                    Won't Have
                  </p>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="text-lg list-disc pl-6 space-y-3">
                    <li>
                      Voice recognition/authentication
                      <ul className="text-lg list-[circle] pl-6 space-y-2">
                        <li>
                          Potential privacy concerns and complexity with regards to voice recognition may make it infeasible.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Mobile application to remotely login and select device
                      <ul className="text-lg list-[circle] pl-6 space-y-2">
                        <li>
                          Authentication will be handled directly via IoT devices and not through a dedicated mobile app.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <h1 className="text-2xl font-bold my-6">Non-Functional Requirements</h1>
            <p className="text-lg">
              Non-functional requirements define the quality attributes, constraints, and operational characteristics of the QPG. Our project is strongly focused on accessibility, designed to facilitate easier device access for neurodivergent and disabled users. As such, the non-functional requirements that we prioritised include reliability, performance and usability, ensuring that all users can have swift frictionless access to their devices regardless of their physical or technical abilities. We also anticipate that the QPG system will continue to be developed for use in large-scale environments and for easy integration with future IoT devices. Therefore, scalability is another large priority of ours, which is further highlighted in the list below.
            </p>
            <Accordion type="single" collapsible className="my-2">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <p className="text-lg font-semibold">
                    Must Have
                  </p>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="text-lg list-disc pl-6 space-y-3">
                    <li>
                      Performance
                      <ul className="text-lg list-[circle] pl-6 space-y-2">
                        <li>
                          The system must operate with low latency to ensure seamless authentication.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Reliability
                      <ul className="text-lg list-[circle] pl-6 space-y-2">
                        <li>
                          QPG should maintain high uptime and recover quickly from failures.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Security
                      <ul className="text-lg list-[circle] pl-6 space-y-2">
                        <li>
                          All user data must be encrypted with post-quantum cryptography.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Scalability
                      <ul className="text-lg list-[circle] pl-6 space-y-2">
                        <li>
                          The system must support multiple users and devices within a growing IoT ecosystem.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Compatibility
                      <ul className="text-lg list-[circle] pl-6 space-y-2">
                        <li>
                          QPG must integrate with common operating systems and IoT hardware, including Raspberry Pi and ESP32.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible className="my-2">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <p className="text-lg font-semibold">
                    Should Have
                  </p>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="text-lg list-disc pl-6 space-y-3">
                    <li>
                      Usability
                      <ul className="text-lg list-[circle] pl-6 space-y-2">
                        <li>
                          The interface should be intuitive, ensuring accessibility for all users.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Privacy Control
                      <ul className="text-lg list-[circle] pl-6 space-y-2">
                        <li>
                          Users must have control over data storage, sharing, and deletion.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Extensibility
                      <ul className="text-lg list-[circle] pl-6 space-y-2">
                        <li>
                          The architecture should allow for future integrations, such as additional authentication methods.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Documentation
                      <ul className="text-lg list-[circle] pl-6 space-y-2">
                        <li>
                          Comprehensive technical and user documentation should be provided for ease of implementation and troubleshooting.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible className="my-2">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <p className="text-lg font-semibold">
                    Could Have
                  </p>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="text-lg list-disc pl-6 space-y-3">
                    <li>
                      Multi-Language Support
                      <ul className="text-lg list-[circle] pl-6 space-y-2">
                        <li>
                          The system could support multiple languages to enhance global accessibility.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Feedback Mechanisms
                      <ul className="text-lg list-[circle] pl-6 space-y-2">
                        <li>
                          Users could provide feedback on authentication experiences for continuous improvement.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible className="my-2">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <p className="text-lg font-semibold">
                    Won't Have
                  </p>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="text-lg list-disc pl-6 space-y-3">
                    <li>
                      Open Source
                      <ul className="text-lg list-[circle] pl-6 space-y-2">
                        <li>
                          The project will remain proprietary due to security and commercial considerations.
                        </li>
                      </ul>
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