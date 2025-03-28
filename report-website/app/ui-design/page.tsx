import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardFooter, CardTitle, CardDescription } from "@/components/ui/card"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Metadata } from 'next';
import Image from "next/image";
import { BASE_PATH } from "@/config";


export const metadata: Metadata = {
    title: 'UI Design',
  };

export default function UIDesign() {
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
              <BreadcrumbPage>UI Design</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <div className="flex flex-col items-center shrink-0 border-b p-8">
        <h1 className="text-6xl text-center my-6">UI Design</h1>
      </div>
      <div className="flex justify-center p-6">
        <div className="max-w-4xl">
          <div id="design-principles">
            <h1 className="text-4xl font-bold my-6">Design Principles</h1>
            <p className="text-lg mb-3">
              The following are design principles which our user interface should ideally follow in practice.
            </p>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <p className="text-lg font-semibold">
                    <span className="mr-3">1.</span> Visibility
                  </p>  
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-lg">
                    The interface should clearly indicate authentication status and user proximity detection, ensuring users know when they are logged in or out.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <p className="text-lg font-semibold">
                    <span className="mr-3">2.</span> Affordance
                  </p>  
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-lg">
                    The design should naturally guide users, with intuitive gestures and facial recognition prompts that clearly signal how to interact with the system.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <p className="text-lg font-semibold">
                    <span className="mr-3">3.</span> Simplicity
                  </p>  
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-lg">
                    The design should minimize complexity by automating authentication, and provide an easy-to-understand interface for manual adjustments when necessary.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <p className="text-lg font-semibold">
                    <span className="mr-3">4.</span> Consistency
                  </p>  
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-lg">
                    The interface should maintain a uniform design across all devices and authentication scenarios to ensure a seamless user experience.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <p className="text-lg font-semibold">
                    <span className="mr-3">5.</span> Predictability
                  </p>  
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-lg">
                    The system should behave in an expected manner, ensuring users can anticipate how authentication will work in various contexts without unnecessary surprises.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <p className="text-lg font-semibold">
                    <span className="mr-3">6.</span> Accessibility
                  </p>  
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-lg">
                    The login experience should be fully inclusive, and be usable for elderly users, individuals with disabilities, and neurodivergent people.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div id="initial-sketches">
            <h1 className="text-4xl font-bold my-6">Initial Sketches</h1>
            <p className="text-lg">
              We began by sketching our initial concepts, guided by the user requirements we gathered, the design considerations we outlined, and the personas we created. Using an iterative design approach, we refined each sketch based on the previous version, continuously incorporating necessary improvements.
            </p>
            <Tabs defaultValue="sketch-1" className="mt-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="sketch-1">Sketch 1</TabsTrigger>
                <TabsTrigger value="sketch-2">Sketch 2</TabsTrigger>
              </TabsList>
              <TabsContent value="sketch-1">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Sketch 1</CardTitle>
                    <Separator />
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg mb-6">
                      After gathering user requirements and considering our personas' needs, one of our first ideas was to use a mobile application to allow users to select the computer that they want to connect to. This functions as an initial system that would meet the basic requirements outlined by the users.
                    </p>
                    <div className="flex items-center justify-center w-full">
                      <Image src="/ui-design/sketch-1.png" alt="Sketch 1" width={750} height={750} className="object-contain" />
                    </div>
                  </CardContent>
                  <CardHeader>
                    <CardTitle className="text-lg">Feedback</CardTitle>
                    <Separator />
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg mb-6">
                      This sketch had generally negative reception.
                    </p>
                    <Table>
                      <TableHeader>
                        <TableRow className="text-lg bg-gray-100 dark:bg-gray-700">
                          <TableHead>Responses</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="text-lg text-muted-foreground">
                            "It would be quite inconvenient to have to always open the app and manually choose the computer I want to connect to."
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-lg text-muted-foreground">
                            "This could be quite hard to use for someone with accessibility needs as they would have to first log in to their phone and then select the device."
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="sketch-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Sketch 2</CardTitle>
                    <Separator />
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg mb-6">
                      Considering the user feedback we got, another promising idea we had was to use battery-powered RFID chips to identify whenever the user is nearby a device that is supported by our system. This system allows for a seamless experience for any kind of user to be able to login hands-free to a customized profile securely using biometric authentication, enhancing ease of use and inclusivity for everyone.
                    </p>
                    <div className="flex items-center justify-center w-full">
                      <Image src="/ui-design/sketch-2.png" alt="Sketch 2" width={750} height={750} className="object-contain" />
                    </div>
                  </CardContent>
                  <CardHeader>
                    <CardTitle className="text-lg">Feedback</CardTitle>
                    <Separator />
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg mb-6">
                      This sketch was better recieved when asking for feedback.
                    </p>
                    <Table>
                      <TableHeader>
                        <TableRow className="text-lg bg-gray-100 dark:bg-gray-700">
                          <TableHead>Responses</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="text-lg text-muted-foreground">
                            "This version improves on enhancing accessibility options and makes it much more hands-free and seamless to use."
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-lg text-muted-foreground">
                            "This version feels a lot more innovative and at the edge of technology."
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-lg text-muted-foreground">
                            "I don't really understand how the RFID chip connection works."
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-lg text-muted-foreground">
                            "This would be much easier to set up as I don't need to explicitly know the layout of each room."
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            <h1 className="text-2xl font-bold my-6">Evaluation of Sketches</h1>
            <p className="text-lg">
              Taking into account the feedback from both sketches, we believe Sketch 2 was more aligned with our original proposal as it allows for more users to easily connect to their devices without external help. However, it seems like some users are finding Sketch 2 quite confusing due to unfamiliar technologies being used in it. In later iterations we will explain how these technologies work.
            </p>
          </div>
          <div id="digital-prototypes">
            <h1 className="text-4xl font-bold my-6">Digital Prototypes</h1>
            <h1 className="text-2xl font-bold my-6">Prototype 1</h1>
            <p className="text-lg my-6">
              Based on our evaluation, we decided that Sketch 2 would better suit our vision for a more accessible system, so we added a few more details and created a prototype using Figma to make our idea come to life.
            </p>
            <div className="flex items-center justify-center w-full">
              <Image src="/ui-design/prototype-1.png" alt="Prototype 1" width={1000} height={1000} className="object-contain" />
            </div>
            <h1 className="text-2xl font-bold mt-8 my-6">Evaluation of Prototype 1</h1>
            <p className="text-lg my-6">
              We met with our client over at IBM, who gave us feedback about our first prototype. They listed some problems they had with the prototype, as well as potential fixes we could make.
            </p>
            <Table>
              <TableHeader>
                <TableRow className="text-lg bg-gray-100 dark:bg-gray-700">
                  <TableHead className="w-[50%]">❌ Problem</TableHead>
                  <TableHead>💡 Solution</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-lg">
                    <span className="font-medium">Colour Choice.</span> <span className="text-muted-foreground">The background colours are not suitable for visually impaired individuals.</span>
                  </TableCell>
                  <TableCell className="text-lg">
                    <span className="text-muted-foreground">Research and implement</span> <span className="font-medium">more visual impairment friendly</span> <span className="text-muted-foreground">UI designs.</span>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-lg">
                    <span className="font-medium">Ambiguity of System Usage.</span> <span className="text-muted-foreground">The current prototype does not convey well how the system is meant to be used.</span>
                  </TableCell>
                  <TableCell className="text-lg">
                    <span className="text-muted-foreground">Add a</span> <span className="font-medium">more detailed explanation</span> <span className="text-muted-foreground">about the connections between devices.</span>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-lg">
                    <span className="font-medium">Lack of Security.</span> <span className="text-muted-foreground">Users may be concerned about their data not being safely stored in the current prototype.</span>
                  </TableCell>
                  <TableCell className="text-lg">
                    <span className="text-muted-foreground">Specify that</span> <span className="font-medium">all data will be encrypted</span> <span className="text-muted-foreground">utilising post-quantum encryption algorithms.</span>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <h1 className="text-2xl font-bold my-6">Prototype 2</h1>
            <p className="text-lg my-6">
              We arrive at our finalised prototype version, utilising all of the feedback we have received from our users and clients throughout the entire process.
            </p>
            <div className="flex items-center justify-center w-full mb-8">
              <Image src="/ui-design/prototype-2.png" alt="Prototype 2" width={1000} height={1000} className="object-contain" />
            </div>
          </div>
          <div id="production-design">
            <h1 className="text-4xl font-bold my-6">Production Design</h1>
            <p className="text-lg">
              In practice, we were unfortunately unable to put these design choices into practice. Due to other priorities, we did not get around to redesigning the login interface used in the linux distribution we were developing with, and did not manage to display facial verification hints. Furthermore, the technologies used in these prototypes have become outdated, as we have since made the decision to use BLE over RFID.
            </p>
            <p className="text-lg my-6">
              As the project went on, we shifted our attention towards designing and developing the user interfaces for our AI Agent desktop app and user registration site. So, in terms of the production design of the login interface, it unfortunately remains the same as the default login interface of the linux distribution being used.
            </p>
            <Card className="my-6">
              <CardHeader>
                <CardTitle className="text-2xl">Login Interface</CardTitle>
                <Separator />
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center">
                <Image src="/ui-design/login.jpg" alt="Login Interface" width={1552} height={1105} className="object-contain"/>
                <p className="text-lg mt-6">
                  The default login interface is already somewhat user friendly with the contrasting gray background, and the white text. One key area for improvement is the font size, since it is quite small. Furthermore, the interface itself is quite bland, and could be improved by having more interesting images in the background.
                </p>
              </CardContent>
              <CardHeader>
                <CardTitle className="text-2xl">AI Agent Desktop App</CardTitle>
                <Separator />
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center">
                <Image src="/ui-design/ai-chatbot.png" alt="AI Agent Desktop App" width={1552} height={1105} className="object-contain"/>
                <p className="text-lg mt-6">
                  The desktop app follows our design principles quite well. The app has good visibility, and affordance. It is also simple in its design, making it suitable for people of all ages and capabilities. Furthermore, the colours used provide an interesting interface, whithout being too overwhelming for neurodivergent users for eaxmple. 
                </p>
              </CardContent>
              <CardHeader>
                <CardTitle className="text-2xl">Registration Site</CardTitle>
                <Separator />
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center">
                <Image src="/ui-design/registration-site.png" alt="Registration Site" width={1552} height={1105} className="object-contain"/>
                <p className="text-lg mt-6">
                  The registration site provides a sleek, dark interface. The purposes of the website are very clearly defined, with no unnecessary elements added that would otherwise distract from the main goal.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}