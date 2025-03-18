# Keyboard Debouncing

The keyboard initially exhibited inconsistent responsiveness—either registering multiple keypresses when holding a key or missing keypresses when typing too quickly. This was caused by the lack of a debounce mechanism. Without debouncing, holding a key resulted in multiple unintended keypresses, and rapid typing led to some inputs being lost due to key overlaps without a proper buffer.

This issue was resolved by introducing a small buffer (up to five keys) for simultaneous keypresses and implementing a debouncer function with a callback. This allowed different key types, including backspaces and command submissions, to be handled efficiently.

The debouncer function accepts a key, a callback, and a debounce delay. If the key is different from the last key or the debounce delay has elapsed, the callback is executed. The default debounce delay is set to 100ms, allowing flexible handling of various key inputs. Additionally, the debouncer yields an `INTENT_NO_OP` to support `yield from` within the callback function.

The debouncer function is implemented as follows:

```python
def debounce(self, key, callback, debounce_delay=100):
    """Debounce a callback function."""
    if key != self.last_key or (time.ticks_ms() - self.last_key_timer) > debounce_delay:
        yield from callback()
        self.last_key_timer = time.ticks_ms()
        self.last_key = key

    yield quantum_os.INTENT_NO_OP
```