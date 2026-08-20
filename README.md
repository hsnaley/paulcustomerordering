# TeamGrassroots — Intranet & Customer Order Management

A working prototype of the internal intranet, CRM and order management system described in the
TeamGrassroots developer brief: one central place to run a customer from first enquiry through
quote, order, artwork, payment, stock, production, dispatch and completion.

**Live demo:** open `index.html` — no install, no login, no build step.

It is a static prototype. Sample clubs, contacts, products and orders are built in so the screens
can be used properly; nothing is saved and a refresh resets everything.

## Screens

| Screen | Covers brief section |
|---|---|
| My dashboard | 18 · orders needing action, artwork out, my tasks, overdue invoices |
| Order board | 5, 6 · configurable stages on a drag-and-drop Kanban |
| Order page | 7, 8, 10, 13, 17 · lines, artwork, production, financial, delivery, activity |
| Customers & clubs | 1, 15, 16 · multiple contacts per club, notes, history, documents |
| Enquiries & leads | 2 |
| Quotes and quote builder | 3, 4, 12 · SKUs, personalisation, discount, VAT, delivery, margin |
| Production queue | 13 |
| Invoices & payments | 9, 10 |
| Products & SKUs | 11 |
| Management | 12, 19 |
| Ideas board | 25 |
| Delivery plan | how the build would be phased |

## Worth trying

- Drag an order between columns on the order board. The stage, the audit trail and the customer's
  status all move together.
- Open any order to see everything about that job on one screen.
- In the quote builder, change a quantity or the discount and watch the totals and the margin
  recalculate, then press Convert to order.
- Open Ashfield Rangers to see a club secretary, a treasurer and a team manager under one club.
- Use the search box: try `ashfield`, `TG-ORD` or a SKU.

## Built with

Plain HTML, CSS and JavaScript, no dependencies, so it runs from a file or from any static host.
The production system would be Next.js and TypeScript with PostgreSQL and S3-compatible storage for
artwork, role-based logins and an append-only audit log.
