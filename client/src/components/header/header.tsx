import Nav from "../nav/nav";

const Header = () => {
  return (
    <header className="box-border bg-teal-700 border border-black p-2 font-bold w-full">
      <h1 className="font-bungeespice text-4xl">
        Fakelandia Justice Department
      </h1>

      <Nav />
    </header>
  );
};

export default Header;
