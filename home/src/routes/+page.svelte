<script lang="ts">
  import { onMount } from "svelte";
  import * as BABYLON from "babylonjs";

  let canvasRef: HTMLCanvasElement | null = null;
  const numParticles = 200;

  onMount(() => {
    const engine = new BABYLON.Engine(canvasRef, true);
    const scene = new BABYLON.Scene(engine);

    // Setup environment
    const camera = new BABYLON.ArcRotateCamera(
      "ArcRotateCamera",
      0,
      0,
      20,
      new BABYLON.Vector3(0, 0, 0),
      scene
    );
    camera.attachControl(canvasRef, true);

    // Object to emit particles from
    const emitter = BABYLON.MeshBuilder.CreateBox(
      "emitter",
      { size: 0.01 },
      scene
    );
    const emitterType = new BABYLON.SphereParticleEmitter(10);

    // Create a particle system
    const particleSystem = new BABYLON.ParticleSystem(
      "particles",
      numParticles,
      scene
    );

    // Where the particles come from
    particleSystem.emitter = emitter;
    particleSystem.particleEmitterType = emitterType;

    // Colors of all particles
    particleSystem.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0);
    particleSystem.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0);
    particleSystem.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0);

    // Size of each particle (random between...
    particleSystem.minSize = 0.1;
    particleSystem.maxSize = 0.5;

    // Life time of each particle (random between...
    particleSystem.minLifeTime = 0.3;
    particleSystem.maxLifeTime = 1.5;

    // Emission rate
    particleSystem.emitRate = 1500;

    // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
    particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;

    // Set the gravity of all particles
    particleSystem.gravity = new BABYLON.Vector3(0, -10, 0);

    // Direction of each particle after it has been emitted
    particleSystem.direction1 = new BABYLON.Vector3(-1, 4, 1);
    particleSystem.direction2 = new BABYLON.Vector3(1, 4, -1);

    // Angular speed, in radians
    particleSystem.minAngularSpeed = 0;
    particleSystem.maxAngularSpeed = Math.PI;

    // Speed
    particleSystem.minEmitPower = 0;
    particleSystem.maxEmitPower = 0;
    particleSystem.updateSpeed = 0.005;

    // Particle texture and behaviour
    particleSystem.isAnimationSheetEnabled = true;
    particleSystem.particleTexture = new BABYLON.Texture(
      "https://raw.githubusercontent.com/j-fan/marle-images/main/home/sprite-glyphs.jpg",
      scene,
      true,
      false
    );
    particleSystem.startSpriteCellID = 0;
    particleSystem.endSpriteCellID = 16;
    particleSystem.spriteCellHeight = 128;
    particleSystem.spriteCellWidth = 128;

    // Noise
    // const noiseTexture = new BABYLON.NoiseProceduralTexture(
    //   "perlin",
    //   256,
    //   scene
    // );
    // noiseTexture.animationSpeedFactor = 5;
    // noiseTexture.persistence = 2;
    // noiseTexture.brightness = 0.5;
    // noiseTexture.octaves = 2;

    // particleSystem.noiseTexture = noiseTexture;
    // particleSystem.noiseStrength = new BABYLON.Vector3(100, 100, 100);

    const NOISE_POWER = 0.004; // How much noise contributes to particle movement
    const ROTATION_POWER = 0.1; // Speed of spin
    const ATTRACTION_POWER = -0.001; // power of the atracttive force to the center. Positive values push outwards
    const ATTRACTION_DELAY = 700;

    const randomVelocity: Array<BABYLON.Vector3> = [];

    for (let x = 0; x < numParticles; x++) {
      const vector = new BABYLON.Vector3(
        NOISE_POWER * (Math.random() - 0.5),
        NOISE_POWER * (Math.random() - 0.5),
        NOISE_POWER * (Math.random() - 0.5)
      );
      randomVelocity.push(vector);
    }

    // Declare variables outside loop to reduce overhead of garbage collection
    let particle: BABYLON.Particle;
    let position: BABYLON.Vector3;
    let agePowerFactor: number;
    let rotForce: number;
    let rotQuart: BABYLON.Quaternion;

    particleSystem.updateFunction = (particles) => {
      for (let index = 0; index < particles.length; index++) {
        particle = particles[index];
        position = particle.position;

        if (particle.age === 0) {
          particle.particleSystem.startSpriteCellID = Math.round(
            Math.random() * 15
          );
        }

        agePowerFactor =
          particle.age < ATTRACTION_DELAY
            ? 0
            : (particle.age - ATTRACTION_DELAY) / 2000;

        particle.position.addInPlace(randomVelocity[index]);

        // rotate around Y axis and 0,0,0
        rotForce =
          1 /
          BABYLON.Vector3.DistanceSquared(
            particle.position,
            BABYLON.Vector3.Zero()
          );

        rotQuart = BABYLON.Quaternion.RotationAxis(
          BABYLON.Axis.Y,
          ROTATION_POWER * rotForce * agePowerFactor
        );
        particle.position.applyRotationQuaternionInPlace(rotQuart);

        // Pull back to the center
        particle.position.addInPlace(
          position.multiply(
            new BABYLON.Vector3(
              ATTRACTION_POWER * agePowerFactor,
              ATTRACTION_POWER * agePowerFactor,
              ATTRACTION_POWER * agePowerFactor
            )
          )
        );

        particle.age++;
      }
    };

    // Start the particle system
    particleSystem.start();

    engine.runRenderLoop(() => {
      scene.render();
    });

    const resizeBabylon = () => {
      engine.resize();
    };
    window.addEventListener("resize", resizeBabylon);

    return () => {
      engine.dispose();
      window.removeEventListener("resize", resizeBabylon);
    };
  });
</script>

<svelte:head>
  <title>Origin: Marle</title>
</svelte:head>

<canvas bind:this={canvasRef} />

<style>
  canvas {
    width: 100%;
    height: 100%;
  }
</style>
