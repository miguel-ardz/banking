<!--
(auth)/layout.tsx — the shell for login/signup pages
(root)/layout.tsx — the shell for all protected dashboard pages
Every page inside (root) automatically gets the sidebar and the auth check without you having to add it to each page individually.
-->

<!--
{children} is a special React prop that automatically receives whatever is nested inside a component.
When you navigate to / (home), Next.js automatically puts page.tsx content into {children}.
When you navigate to /transactions, it puts the transactions page.tsx into {children}.
You never manually pass anything to {children} — Next.js handles it automatically based on the URL. The layout just says "whatever page belongs here, put it in this spot."
-->

<!--
The platform that we are using for this app for monitoring is Sentry 
Sentry is like having a tireless watchdog for your app that never sleeps, catches every problem, and hands you exactly what you need to fix it quickly.
-->

<!-- 
Plaid shows you your bank balance, Dwolla is the payment processor that moves money around. If you haven't moved any money Dwolla shows 0.
-->

<!-- 
When transferring money to accounts and such, your bank balance will not change, it will typically take two days, because of the getTransactionStatus function in lib > utils.ts
-->