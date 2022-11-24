<script lang="ts">
  import { onMount } from "svelte";
  import * as BABYLON from "babylonjs";
  import { createNoise3D } from "simplex-noise";

  let canvasRef: HTMLCanvasElement | null = null;
  const numParticles = 200;

  onMount(() => {
    const noise3D = createNoise3D();
    const engine = new BABYLON.Engine(canvasRef, true);
    const scene = new BABYLON.Scene(engine);

    // Setup environment
    const camera = new BABYLON.ArcRotateCamera(
      "ArcRotateCamera",
      1,
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

    //Texture of each particle
    particleSystem.particleTexture = new BABYLON.Texture(
      "https://raw.githubusercontent.com/j-fan/marle-images/main/home/flare.jpg",
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

    const flowField: Array<BABYLON.Vector3> = [];

    for (let x = 0; x < numParticles; x++) {
      for (let y = 0; y < numParticles; y++) {
        const angle = noise3D(x, y, 0);
        const rotQuart = BABYLON.Quaternion.RotationAxis(BABYLON.Axis.Z, angle);
        const vector = new BABYLON.Vector3(1, 1, 1);
        vector.applyRotationQuaternionInPlace(rotQuart);
        flowField.push(vector);
      }
    }

    let particle: BABYLON.Particle;
    let position: BABYLON.Vector3;

    particleSystem.updateFunction = (particles) => {
      for (let index = 0; index < particles.length; index++) {
        particle = particles[index];
        position = particle.position;

        // Start in random position
        if (particle.age === 0) {
          particle.position.addInPlace(flowField[index]);
        }

        // rotate around Y axis and 0,0,0
        const rotPower =
          1 /
          BABYLON.Vector3.DistanceSquared(
            particle.position,
            BABYLON.Vector3.Zero()
          );

        const rotQuart = BABYLON.Quaternion.RotationAxis(
          BABYLON.Axis.Y,
          0.1 * rotPower
        );
        particle.position.applyRotationQuaternionInPlace(rotQuart);

        // Pull back to the center
        particle.position.addInPlace(
          position.multiply(new BABYLON.Vector3(-0.001, -0.001, -0.001))
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
