import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Testing',
  };

export default function Testing() {
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
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div id="unit-testing">
            <h1 className="text-4xl font-bold my-6">Unit Testing</h1>
            <p className="text-lg my-6">
              Our unit tests are performed utilising a comprehensive suite of unit tests for a secure device management API that implements post-quantum cryptography. The tests verify core functionality including device registration, credential management, and preferences handling - all protected by encrypted communications. Each test follows a consistent pattern of setting up test data on our database, performing different API operations through a test client, and verifying the expected responses. The suite also includes cleanup procedures that ensure test isolation by removing the test database after each test run.
            </p>
            <p className="text-lg my-6">
              The most sophisticated part of these tests focuses on the key encapsulation mechanism (KEM) using quantum-resistant cryptography via the OQS library with ML-KEM-512. These tests validate the server's ability to initiate secure key exchange, generate appropriate public keys, and successfully complete the key exchange process by decapsulating client-provided ciphertexts to establish shared secrets. The comprehensive test coverage ensures the API provides secure device management capabilities while maintaining data confidentiality through end-to-end encryption - critical for a system that stores sensitive credentials and device information.
            </p>
            <p className="text-lg my-6">
              The test suite uses pytest's fixture mechanism for dependency injection, this helps us easily create test clients for our server before every test, inject them into the test function as a dependency and automatically handle the test cleanup.
            </p>
            <pre>
              <code className="language-python">
                {`
                @pytest_asyncio.fixture(scope='function')
                async def test_client() -> AsyncIterator[AsyncTestClient[Litestar]]:
                    async with AsyncTestClient(app=app) as client:
                        yield client

                    # Delete test database after each test
                    os.remove(TEST_DB_FILENAME)
                `}
              </code>
            </pre>
          </div>
          <div id="integration-testing">
            <h1 className="text-4xl font-bold my-6">Integration Testing</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div id="compatibility-testing">
            <h1 className="text-4xl font-bold my-6">Compatibility Testing</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div id="responsive-design-testing">
            <h1 className="text-4xl font-bold my-6">Responsive Design Testing</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div id="performance-testing">
            <h1 className="text-4xl font-bold my-6">Performance Testing</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div id="user-acceptance-testing">
            <h1 className="text-4xl font-bold my-6">User Acceptance Testing</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}