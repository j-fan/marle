<script lang="ts">
  import { onMount } from "svelte";
  import * as BABYLON from "babylonjs";
  import { fade } from "svelte/transition";

  let canvasRef: HTMLCanvasElement | null = null;
  const numParticles = 200;

  onMount(() => {
    const engine = new BABYLON.Engine(canvasRef, true);
    const scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color4(1, 1, 1, 1);

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
    const emitterType = new BABYLON.SphereParticleEmitter(5);

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
    particleSystem.color1 = new BABYLON.Color4(0.95, 0.95, 0.95, 1.0);
    particleSystem.color2 = new BABYLON.Color4(1, 1, 1, 1.0);
    particleSystem.colorDead = new BABYLON.Color4(0, 0, 0, 0.0);

    // Size of each particle (random between...
    particleSystem.minSize = 0.1;
    particleSystem.maxSize = 0.5;

    // Life time of each particle (random between...
    particleSystem.minLifeTime = 0.3;
    particleSystem.maxLifeTime = 1.5;

    // Emission rate
    particleSystem.emitRate = 1500;

    // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
    particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_STANDARD;

    // Set the gravity of all particles
    particleSystem.gravity = new BABYLON.Vector3(0, 0, 0);

    // Direction of each particle after it has been emitted
    particleSystem.direction1 = new BABYLON.Vector3(4, 4, 4);
    particleSystem.direction2 = new BABYLON.Vector3(-4, -4, -4);

    // Angular speed, in radians
    particleSystem.minAngularSpeed = 0;
    particleSystem.maxAngularSpeed = Math.PI;

    // Speed
    particleSystem.minEmitPower = 0;
    particleSystem.maxEmitPower = 20;
    particleSystem.updateSpeed = 0.005;

    // Particle texture and behaviour
    particleSystem.isAnimationSheetEnabled = true;
    particleSystem.particleTexture = new BABYLON.Texture(
      "https://raw.githubusercontent.com/j-fan/marle-images/main/home/sprite-glyphs.png",
      scene,
      true,
      false
    );
    particleSystem.startSpriteCellID = 0;
    particleSystem.endSpriteCellID = 16;
    particleSystem.spriteCellHeight = 128;
    particleSystem.spriteCellWidth = 128;
    particleSystem.spriteRandomStartCell = true;
    particleSystem.spriteCellChangeSpeed = 0;

    // Noise
    const noiseTexture = new BABYLON.NoiseProceduralTexture(
      "perlin",
      256,
      scene
    );
    noiseTexture.animationSpeedFactor = 5;
    noiseTexture.persistence = 2;
    noiseTexture.brightness = 0.5;
    noiseTexture.octaves = 2;

    particleSystem.noiseTexture = noiseTexture;
    particleSystem.noiseStrength = new BABYLON.Vector3(10, 10, 10);

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

<canvas bind:this={canvasRef} out:fade={{ duration: 500 }} />

<style>
  canvas {
    width: 100%;
    height: 100%;
    pointer-events: none;
    position: fixed;
    z-index: -1;
  }
</style>
