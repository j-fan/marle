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

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;
  let w: number, h: number;

  const operators = "^|&";

  const setup = () => {
    if (!canvas) {
      console.log("Canvas not initialized!");
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
    const size = 40;
    const cols = Math.ceil(w / size);
    const rows = Math.ceil(h / size);
    const steps = 9; // per side

    // If each square is 10 x 10 -> we need 20 bits
    const maxVal = Math.pow(2, steps * 2);
    const patternDec = Math.round(Math.random() * maxVal);
    const operatorIndex = Math.floor(Math.random() * operators.length);

    for (let col = 0; col < cols; col++) {
      for (let row = 0; row < rows; row++) {
        const x = col * size;
        const y = row * size;
        drawSquare(x, y, size, patternDec, operatorIndex, steps);
      }
    }
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

  onMount(() => {
    setup();
    draw();
    onInterval(draw, 200)
  });
</script>

<svelte:window
  on:resize={() => {
    resize();
    draw();
  }}
/>

<canvas id="canvas" bind:this={canvas} on:click={draw} />
