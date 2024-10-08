import Image from 'next/image';
import Link from 'next/link';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='min-h-screen flex flex-col'>
        <header className='flex gap-4 p-5 border-gray-100 border-b'>
          <Image src='/logo.png' width={40} height={35} alt='Logo' />
          <nav className='flex-grow'>
            <ul className='flex justify-end gap-2'>
              <li>
                <Link
                  className='px-2 py-1 hover:bg-neutral-100 rounded-md'
                  href='/'
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  className='px-2 py-1 hover:bg-neutral-100 rounded-md'
                  href='/solution'
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  className='px-2 py-1 hover:bg-neutral-100 rounded-md'
                  href='/community'
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  className='px-2 py-1 hover:bg-neutral-100 rounded-md'
                  href='/resouce'
                >
                  Resouces
                </Link>
              </li>
              <li>
                <Link
                  className='px-2 py-1 hover:bg-neutral-100 rounded-md'
                  href='/pricing'
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  className='px-2 py-1 hover:bg-neutral-100 rounded-md'
                  href='/contact'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className='flex gap-3'>
            <span>
              <Link
                href='/login'
                className='px-2 py-1 text-nowrap  border rounded-md bg-neutral-300 border-neutral-400'
              >
                Sign in
              </Link>
            </span>
            <span>
              <Link
                href='/register'
                className='px-2 py-1 border rounded-md bg-black text-white'
              >
                Register
              </Link>
            </span>
          </div>
        </header>

        <main className='flex-grow'>{children}</main>

        <footer className='flex gap-4 border-gray-100 border-t px-8 pt-8 pb-40'>
          <div className='w-full flex flex-col gap-6'>
            <Image src='/logo.png' width={40} height={35} alt='Logo' />
            <div className='flex gap-4'>
              <Image
                src='/logo_twitter.png'
                width={24}
                height={24}
                alt='Logo'
              />
              <Image src='/logo_insta.png' width={24} height={24} alt='Logo' />
              <Image
                src='/logo_youtube.png'
                width={24}
                height={24}
                alt='Logo'
              />
              <Image
                src='/logo_linkedIn.png'
                width={24}
                height={24}
                alt='Logo'
              />
            </div>
          </div>
          <div className='w-full'>
            <h5 className='font-bold h-9'>Use cases</h5>
            <div className='flex flex-col gap-3 '>
              <span>UI design</span>
              <span>UX design</span>
              <span>Wireframing</span>
              <span>Diagramming</span>
              <span>Brainstorming</span>
              <span>Online whiteboard</span>
              <span>Team collaboration</span>
            </div>
          </div>
          <div className='w-full'>
            <h5 className='font-bold h-9'>Explore</h5>
            <div className='flex flex-col gap-3 '>
              <span>Design</span>
              <span>Prototyping</span>
              <span>Development features</span>
              <span>Collaboration features</span>
              <span>Design process</span>
              <span>FigJam</span>
            </div>
          </div>
          <div className='w-full'>
            <h5 className='font-bold h-9'>Resources</h5>
            <div className='flex flex-col gap-3 '>
              <span>Blog</span>
              <span>Best practice</span>
              <span>Colors</span>
              <span>Color wheel</span>
              <span>Support</span>
              <span>Developers</span>
              <span>Resource library</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
