Why reusable components matter?

Ans: 
    Reusable components matter because they let you build UI pieces once and use them everywhere. When you use the same button, card, or form field in many places, you write less code, fix bugs faster, and keep your app consistent.

Example: one PrimaryButton can style all buttons consistently.


What props are?

Ans:
    Props are the values parents pass into child components. Think of them like function arguments for components: they make the component flexible so one button can show “Login” in one place and “Signup” in another.

Example: <Button title="Login" /> passes title to the button.


What layout separation means?

Ans: 
    Layout separation means keeping the page frame separate from the page content. The layout handles things like navbar and footer, while individual pages only render their own sections. That makes the app easier to scale and keeps each component focused.


Reusable vs tightly coupled UI?

Ans:
    A reusable UI is made of independent pieces that work in many places. A tightly coupled UI is built for one exact screen and is hard to reuse. Reusable components let you change one thing once and have it update everywhere; tightly coupled UI forces repeated edits and creates more maintenance pain.