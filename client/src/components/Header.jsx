import { Button, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className='border-b-2' fluid={true}>
      <Navbar.Brand href="/">
        <span className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
          <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
            Sahand's
          </span>
          Blog
        </span>
      </Navbar.Brand>

      <div className="flex md:order-2">
        <form className="hidden lg:flex">
          <TextInput
            type='text'
            placeholder='Search...'
            rightIcon={AiOutlineSearch}
            className='mr-2'
          />
          <Button className='lg:hidden' color='gray' pill>
            <AiOutlineSearch />
          </Button>
        </form>
        
        <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
          <FaMoon />
        </Button>
        <Link to='/sign-in'>
          <Button gradientDuoTone='purpleToBlue' className="ml-2">Sign In</Button>
        </Link>
        <Navbar.Toggle />
      </div>
      
      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/" active={path === "/"}>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} to="/about" active={path === "/about"}>
          About
        </Navbar.Link>
        <Navbar.Link as={Link} to="/projects" active={path === "/projects"}>
          Projects
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}