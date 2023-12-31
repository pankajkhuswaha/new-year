import ParticleContainer from "../components/particle.js";

type Props = {
  children: React.ReactNode;
  toggle?: boolean;
};

const Layout = ({ children, toggle }: Props) => {
  return (
    <>
      {toggle && <ParticleContainer />}
      <div className="min-h-screen min-w-screen w-full h-full absolute top-0 right-0 z-10 p-4 overflow-hidden">
        <div className="flex flex-col items-center justify-center gap-2 h-full">
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
