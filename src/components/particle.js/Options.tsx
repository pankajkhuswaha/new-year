import { ISourceOptions } from "@tsparticles/engine";

export const snowfall: ISourceOptions = {
  background: {
    color: {
      value: "red",
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ff0000",
    },
    links: {
      color: "#ffffff",
      distance: 100,
      enable: false,
      opacity: 1,
      width: 1,
    },
    move: {
      direction: "bottomLeft",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};

export const firework: ISourceOptions = {
  name: "Fireworks",
  fullScreen: {
    enable: true,
  },
  background: {
    color: "#000",
  },
  emitters: {
    direction: "top",
    life: {
      count: 0,
      duration: 0.1,
      delay: 0.1,
    },
    rate: {
      delay: 0.15,
      quantity: 1,
    },
    size: {
      width: 100,
      height: 0,
    },
    position: {
      y: 100,
      x: 50,
    },
  },
  particles: {
    number: {
      value: 0,
    },
    destroy: {
      bounds: {
        top: 30,
      },
      mode: "split",
      split: {
        count: 1,
        factor: {
          value: 0.333333,
        },
        rate: {
          value: 100,
        },
        particles: {
          stroke: {
            width: 0,
          },
          color: {
            value: ["#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93"],
          },
          number: {
            value: 0,
          },
          collisions: {
            enable: false,
          },
          destroy: {
            bounds: {
              top: 0,
            },
          },
          opacity: {
            value: {
              min: 0.1,
              max: 1,
            },
            animation: {
              enable: true,
              speed: 0.7,
              sync: false,
              startValue: "max",
              destroy: "min",
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: 2,
            animation: {
              enable: false,
            },
          },
          life: {
            count: 1,
            duration: {
              value: {
                min: 1,
                max: 2,
              },
            },
          },
          move: {
            enable: true,
            gravity: {
              enable: true,
              acceleration: 9.81,
              inverse: false,
            },
            decay: 0.1,
            speed: {
              min: 10,
              max: 25,
            },
            direction: "outside",
            outModes: "destroy",
          },
        },
      },
    },
    life: {
      count: 1,
    },
    shape: {
      type: "line",
    },
    size: {
      value: {
        min: 0.1,
        max: 50,
      },
      animation: {
        enable: true,
        sync: true,
        speed: 90,
        startValue: "max",
        destroy: "min",
      },
    },
    stroke: {
      color: {
        value: "#ffffff",
      },
      width: 1,
    },
    rotate: {
      path: true,
    },
    move: {
      enable: true,
      gravity: {
        acceleration: 15,
        enable: true,
        inverse: true,
        maxSpeed: 100,
      },
      speed: {
        min: 10,
        max: 20,
      },
      outModes: {
        default: "destroy",
        top: "none",
      },
      trail: {
        fill: { color: "#000" },
        enable: true,
        length: 10,
      },
    },
    sounds: {
      enable: true,
      events: [
        {
          event:"" ,
          filter: "explodeSoundCheck",
          audio: [
            "https://particles.js.org/audio/explosion0.mp3",
            "https://particles.js.org/audio/explosion1.mp3",
            "https://particles.js.org/audio/explosion2.mp3",
          ],
        },
      ],
      volume: 50,
    },
  },
};

export const fireworks2: ISourceOptions = {
  name: "Fireworks 2",
  fullScreen: {
    enable: true,
  },
  background: {
    color: "#ffffff",
    image: "url('https://particles.js.org/images/background3.jpg')",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
  },
  backgroundMask: {
    enable: true,
  },
  emitters: {
    direction: "top",
    life: {
      count: 0,
      duration: 0.1,
      delay: 0.1,
    },
    rate: {
      delay: 0.15,
      quantity: 1,
    },
    size: {
      width: 100,
      height: 0,
    },
    position: {
      y: 100,
      x: 50,
    },
  },
  particles: {
    color: {
      value: "#fff",
    },
    number: {
      value: 0,
    },
    destroy: {
      bounds: {
        top: 30,
      },
      mode: "split",
      split: {
        count: 1,
        factor: {
          value: 0.333333,
        },
        rate: {
          value: 100,
        },
        particles: {
          stroke: {
            width: 0,
          },
          color: {
            value: ["#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93"],
          },
          number: {
            value: 0,
          },
          collisions: {
            enable: false,
          },
          destroy: {
            bounds: {
              top: 0,
            },
          },
          opacity: {
            value: {
              min: 0.1,
              max: 1,
            },
            animation: {
              enable: true,
              speed: 0.7,
              sync: false,
              startValue: "max",
              destroy: "min",
            },
          },
          effect: {
            type: "trail",
            options: {
              trail: {
                length: {
                  min: 5,
                  max: 10,
                },
              },
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: 2,
            animation: {
              enable: false,
            },
          },
          life: {
            count: 1,
            duration: {
              value: {
                min: 1,
                max: 2,
              },
            },
          },
          move: {
            enable: true,
            gravity: {
              enable: true,
              acceleration: 9.81,
              inverse: false,
            },
            decay: 0.1,
            speed: {
              min: 10,
              max: 25,
            },
            direction: "outside",
            outModes: "destroy",
          },
        },
      },
    },
    life: {
      count: 1,
    },
    effect: {
      type: "trail",
      options: {
        trail: {
          length: {
            min: 10,
            max: 30,
          },
          minWidth: 1,
          maxWidth: 1,
        },
      },
    },
    rotate: {
      path: true,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: 1,
    },
    move: {
      enable: true,
      gravity: {
        acceleration: 15,
        enable: true,
        inverse: true,
        maxSpeed: 100,
      },
      speed: {
        min: 10,
        max: 20,
      },
      outModes: {
        default: "destroy",
        top: "none",
      },
    },
  },
  sounds: {
    enable: true,
    events: [
      {
        event: "particleRemoved",
        filter: "explodeSoundCheck",
        audio: [
          "https://particles.js.org/audio/explosion0.mp3",
          "https://particles.js.org/audio/explosion1.mp3",
          "https://particles.js.org/audio/explosion2.mp3",
        ],
      },
    ],
    volume: 50,
  },
};

export const hexPattern: ISourceOptions = {
  name: "Hexagon Path",
  particles: {
    color: {
      value: "#FF0000",
      animation: {
        enable: true,
        speed: 10,
      },
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "destroy",
      },
      path: {
        clamp: false,
        enable: true,
        delay: {
          value: 0,
        },
        generator: "polygonPathGenerator",
        options: {
          sides: 6,
          turnSteps: 30,
          angle: 30,
        },
      },
      speed: 3,
      trail: {
        fill: { color: "#000" },
        length: 20,
        enable: true,
      },
    },
    number: {
      density: {
        enable: true,
      },
      value: 0,
    },
    opacity: {
      value: 1,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: 2,
    },
  },
  background: {
    color: "#000",
  },
  emitters: {
    direction: "none",
    rate: {
      quantity: 1,
      delay: 0.25,
    },
    size: {
      width: 0,
      height: 0,
    },
    position: {
      x: 50,
      y: 50,
    },
  },
};
