<script lang="ts">
  /*
    Johan Karlsson, 2021
    https://twitter.com/DonKarlssonSan
    MIT License, see Details View

    steps is how many pixels wide each square is
    If steps === 4
    We need 8 bits total:
    0123 4567

    8 bit unsigned integer: 0-255
    first four bits are columns
    next four bits are rows

    0 1 2 3
    4
    5
    6
    7

    10001000 (binary) = 136 (decimal)
    with AND logic becomes:
    0 1 2 3
    4 1 0 0 0
    5 0 0 0 0
    6 0 0 0 0
    7 0 0 0 0

    A pixel in the upper left
  */

  import { onInterval } from "$lib/utils";
  import { onMount } from "svelte";
  import { throttle } from "lodash-es";
  import Glyph from "./Glyph.svelte";

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;
  let w: number, h: number;
  let mask = 80;
  let mousePos = { x: 0, y: 0 };
  let showGlyph = false;

  const operators = "^|&";

  const handleMouseMove = (event: MouseEvent | TouchEvent) => {
    if (event instanceof MouseEvent) {
      mousePos.x = event.clientX;
      mousePos.y = event.clientY;
    } else {
      mousePos.x = event.touches[0].clientX;
      mousePos.y = event.touches[0].clientY;
    }
    mask -= 0.05;
  };

  const setup = () => {
    if (!canvas) {
      console.error("Canvas not initialized!");
      return;
    }
    ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    resize();
  };

  const resize = () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };

  const draw = () => {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "black";
    const size = 30;
    const cols = Math.ceil(w / size);
    const rows = Math.ceil(h / size);
    const steps = 9; // per side

    // If each square is 10 x 10 -> we need 20 bits
    const maxVal = Math.pow(2, steps * 2);
    const patternDec = Math.round(Math.random() * maxVal);
    const operatorIndex = Math.floor(Math.random() * operators.length);

    const maskMinC = (cols * mask) / 100 / 2;
    const maskMaxC = cols - maskMinC;
    const maskMinR = (rows * mask) / 100 / 2;
    const maskMaxR = rows - maskMinR;
    const radius = (cols * (100 - mask)) / 100 / 2;
    const originC = Math.ceil(mousePos.x / size);
    const originR = Math.ceil(mousePos.y / size);
    const feather = 5;

    for (let col = maskMinC; col < maskMaxC; col++) {
      const randR = Math.round((Math.random() - 0.5) * feather);
      for (let row = maskMinR + randR; row < maskMaxR - randR; row++) {
        const randC = Math.round((Math.random() - 0.5) * feather);
        if (!inCircle(originC, originR, radius, col + randC, row + randR)) {
          continue;
        }
        const x = col * size;
        const y = row * size;
        drawSquare(x, y, size, patternDec, operatorIndex, steps);
      }
    }

    // const x = cols * 0.5 * size;
    // const y = rows * 0.5 * size;
    // drawSquare(originC, originR, size, maxVal, operatorIndex, steps);
  };

  const drawSquare = (
    x0: number,
    y0: number,
    size: number,
    pattern: number,
    operatorIndex: number,
    steps: number,
  ) => {
    ctx.save();
    ctx.translate(x0 + size / 2, y0 + size / 2);
    const stepSize = size / steps;
    const patternBinaryString = pattern.toString(2);
    const angle2 = (Math.floor(Math.random() * 4) * Math.PI) / 2;
    ctx.rotate(angle2);
    for (let col = 0; col < steps; col++) {
      const patternColPart = patternBinaryString[col] as unknown as number;
      for (let row = 0; row < steps; row++) {
        const patternRowPart = patternBinaryString[
          row + steps
        ] as unknown as number;

        const combined = evalOperation(
          patternColPart,
          patternRowPart,
          operatorIndex,
        );
        if (combined) {
          const x = -size / 2 + col * stepSize;
          const y = -size / 2 + row * stepSize;
          ctx.fillRect(x, y, stepSize, stepSize);
        }
      }
    }
    ctx.restore();
  };

  const evalOperation = (a: number, b: number, operatorIndex: number) => {
    const operator = operators[operatorIndex];
    const operations: Record<string, (a: number, b: number) => number> = {
      "^": (a, b) => a ^ b,
      "&": (a, b) => a & b,
      "|": (a, b) => a | b,
    };
    return operations[operator](a, b);
  };

  const inCircle = (
    centerX: number,
    centerY: number,
    radius: number,
    x: number,
    y: number,
  ) =>
    (centerX - x) * (centerX - x) + (centerY - y) * (centerY - y) <=
    radius * radius;

  onMount(() => {
    setup();
    draw();
    setTimeout(() => {
      showGlyph = true;
    }, 30000);
    onInterval(draw, 100);
  });
</script>

<svelte:head>
  <title>Origin:Marle - Corrosion - Callum Howard</title>
</svelte:head>

<svelte:window
  on:mousemove={handleMouseMove}
  on:touchmove={handleMouseMove}
  on:resize={() => {
    resize();
    throttle(draw, 100, { leading: true });
  }}
/>

<canvas id="canvas" class="fixed" bind:this={canvas} on:click={draw} />
<div class="fixed top-0 left-0 w-full h-full vignette" />
<div class="absolute w-screen h-full">
  <div id="debug" class="hidden">
    <input
      id="mask"
      type="range"
      name="mask"
      bind:value={mask}
      min={0}
      max={100}
    />
    <label for="mask">Mask {mask}%</label>
  </div>
  <h2
    class="fixed italic font-serif text-4xl font-black mx-32 my-32 select-none expand-text"
  >
    I can feel my mind expanding...
  </h2>
  <img
    id="silhouette"
    class="fixed bottom-0 m-auto left-0 right-0 opacity-70 hue-rotate-30 select-none"
    alt="silhouette"
    src="https://raw.githubusercontent.com/CallumHoward/marle-media/main/silhouette.png"
  />
</div>

{#if showGlyph}
  <Glyph
    href="https://j-fan.github.io/marle/jordan-pat/video"
    xPos={3}
    yPos={50}
    glyphId={4}
    colour="#9EA9E9"
  />
{/if}

<style>
  .vignette {
    box-shadow: 0 0 200px rgba(0 0 0 / 30%) inset;
  }

  .expand-text {
    animation: expand-text 30s ease-out 0s forwards,
      slide-subtle 10s ease-out 0s forwards;
  }

  @keyframes slide-subtle {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(1rem);
    }
  }

  @keyframes expand-text {
    0% {
      letter-spacing: 0;
    }

    100% {
      letter-spacing: 0.3rem;
    }
  }
</style>
