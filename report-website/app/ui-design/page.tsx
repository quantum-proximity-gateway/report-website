import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardFooter, CardTitle, CardDescription } from "@/components/ui/card"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Metadata } from 'next';
import Image from "next/image";

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
              <BreadcrumbLink href="/">Quantum Proximity Gateway</BreadcrumbLink>
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
                        <TableRow className="text-lg">
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
                        <TableRow className="text-lg">
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
          </div>
          <div id="digital-prototypes">
            <h1 className="text-4xl font-bold my-6">Digital Prototypes</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div id="production-design">
            <h1 className="text-4xl font-bold my-6">Production Design</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}