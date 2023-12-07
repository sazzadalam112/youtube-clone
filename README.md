<!-- Debouncing  -->

typing slow = 200ms;
typing fast = 30ms;

Performance:
iphone pro max = 14 letter _ 1000 = 140000
with debouncing = 3 api call _ 1000 = 3000

Debouncing with 200ms
if difference b/w 2 key strokes is <200ms - Decline api call
