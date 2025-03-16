<template>
  <div>
    <h1>Color Palette</h1>
    <div class="color-palette">
      <div
        v-for="color in COLORS"
        :key="color"
        :style="{ backgroundColor: `rgb(${color.join(',')})`, width: '100px', height: '100px', display: 'inline-block', cursor: 'pointer' }"
        @click="copyColor(color)"
      ></div>
    </div>
  </div>
</template>

<script setup>
const COLORS = [
  [0, 0, 0], // PURE_BLACK
  [27, 27, 27], // DEEP_GRAY
  [115, 115, 115], // MID_GRAY
  [255, 255, 255], // PURE_WHITE

  [192, 40, 40], // FIRE_RED
  [190, 74, 47], // RUST_RED
  [255, 107, 74], // WARM_RED

  [228, 166, 114], // BEIGE
  [255, 218, 185], // PALE_PEACH
  [138, 80, 0], // EARTH_BROWN
  [232, 181, 96], // WARM_GOLD
  [224, 160, 44], // GOLD_YELLOW
  [255, 235, 153], // SOFT_YELLOW
  [255, 250, 181], // FINAL_HIGHLIGHT

  [214, 230, 100], // RADIOACTIVE_YELLOW
  [175, 254, 120], // LIME_GREEN
  [12, 72, 12], // DEEP_GREEN
  [74, 166, 78], // GRASS_GREEN
  [96, 214, 182], // AQUA_GREEN
  [0, 168, 168], // CYAN_NEON

  [90, 161, 255], // SKY_BLUE
  [32, 80, 192], // BOLD_BLUE
  [20, 36, 75], // DEEP_NAVY

  [62, 58, 109], // MUTED_BLUE_GRAY
  [34, 32, 52], // DEEP_SHADOW
  [103, 95, 153], // MUTED_VIOLET
  [44, 18, 76], // DEEP_PURPLE
  [225, 134, 255], // LAVENDER
  [134, 43, 160], // ROYAL_PURPLE

  [255, 204, 255], // BRIGHT_PINK
  [255, 119, 168], // PINK_NEON
  [91, 0, 28], // DEEP_CRIMSON
]

const copyColor = (color) => {
  const rgb = `rgb(${color.join(',')})`
  navigator.clipboard.writeText(rgb)
}
</script>
