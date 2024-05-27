import logo from "../assets/logo.svg";

function Navbar() {
  return (
    <>
      <div className=" w-screen h-14 flex items-center px-7 bg-zinc-900">
        <div className="logo">
          <div>
            <a href="/" >
              <img src={logo} className="logo" alt="logo" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
