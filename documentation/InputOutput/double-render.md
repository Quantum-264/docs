# set_clip

To improve efficiency, `set_clip` was used to render only the portion of the screen where the command is being entered. This optimization ensured that rendering affected only the relevant section of the screen, reducing unnecessary updates and improving performance. This was achieved by creating a clip at the current cursor position and rendering only one character at a time, resulting in a more responsive user experience.

## Double Render

Using `set_clip` restricts rendering to the clipped portion of the screen, meaning that the rest of the screen is not updated. To address this, a double render system was implemented. This system renders the buffer to the screen twice, ensuring that the entire display is updated correctly. The entire UI is loaded into both buffers so that when the clipped portion is updated, the rest of the screen remains intact. Without this, the screen would appear to be missing data.



