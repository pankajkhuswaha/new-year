import { loadAll } from "@tsparticles/all";
import { type ISourceOptions } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { firework } from "./Options";

const ParticleContainer = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadAll(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const patterns: ISourceOptions = useMemo(() => firework, []);

  if (init) {
    return (
      <Particles id="tsparticles" className="border-4" options={patterns} />
    );
  }

  return <></>;
};

export default ParticleContainer;
