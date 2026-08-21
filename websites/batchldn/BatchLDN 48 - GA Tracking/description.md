# E-commerce Tracking Events — Reference Note

**Cross (✗) = also exists as a standard GA4 auto-collected / default event**
List checked against: `page_view, user_engagement, view_item, scroll, add_to_cart, begin_checkout, click, search, view_search_results`



## Essential Product & Cart Events
| # | Event | Description | Match | Shopify Standard Event |
|---|-------|-------------|:---:|:---:|
| 1 | view_item_list | User sees a list of products (category pages, search results) | | ✓ *(collection_viewed / search_submitted)* |
| 2 | view_item | User opens an individual product detail page | ✗✗✗ | ✓ *(product_viewed)* |
| 3 | add_to_cart | Shopper adds a product to their bag or cart | ✗✗✗ | ✓ *(product_added_to_cart)* |
| 4 | remove_from_cart | Item is taken out of the cart | | ✓ *(product_removed_from_cart)* |
| 5 | view_cart | User actively views their cart page/drawer | | ✓ *(cart_viewed)* |
| 6 | add_to_wishlist | Item saved for later (secondary interest) | | |

## Checkout & Conversion Events
| # | Event | Description | Match | Shopify Standard Event |
|---|-------|-------------|:---:|:---:|
| 7 | begin_checkout | User clicks to start checkout (key event/conversion) | ✗✗✗ | ✓ *(checkout_started)* |
| 8 | add_shipping_info | Shipping method/options selected during checkout | | ✓ *(checkout_shipping_info_submitted)* |
| 9 | add_payment_info | Billing or credit card info entered | | ✓ *(payment_info_submitted)* |
| 10 | purchase | Critical transaction event — revenue, tax, shipping, transaction_id (key event) | ✗✗✗ | ✓ *(checkout_completed)* |
| 11 | refund | Full or partial order refund (optional) | | |

## Promotional & Discovery Events
| # | Event | Description | Match | Shopify Standard Event |
|---|-------|-------------|:---:|:---:|
| 12 | view_promotion | Onsite banner/promo tile renders on screen | | |
| 13 | select_promotion | Click/interaction with a promo banner | | |
| 14 | select_item | Click on a specific product inside a list/catalog view | | |

## Core Authentication Events
| # | Event | Description | Match | Shopify Standard Event |
|---|-------|-------------|:---:|:---:|
| 15 | sign_up | User successfully completes registration / creates account | | |
| 16 | login | Existing user successfully logs in | | |

A couple of notes worth flagging:
- **view_item_list** doesn't have a 1:1 Shopify equivalent — `collection_viewed` (category pages) and `search_submitted` (search results) together roughly cover it, but neither fires as a true "list impression" the way GA4's event does.
- Shopify also fires two extras not in your list: `checkout_address_info_submitted` and `checkout_contact_info_submitted` — these sit between `begin_checkout` and `add_shipping_info` in a typical GA4 mapping, in case you want to add rows for them.
- Also worth noting: as of December 10, 2025, Shopify redacts PII (email, phone, name, address) from these events for apps without approved protected-customer-data access — relevant if you're piping these into GA4/Meta/etc.

---

### Summary of Matches (✗)
- **#2 view_item** — matches provided list
- **#3 add_to_cart** — matches provided list
- **#7 begin_checkout** — matches provided list

### Not in the essential list but present in your comparison list
- page_view
- user_engagement
- scroll
- click
- search
- view_search_results
- purchase

(These are typically standard/automatically collected engagement events, not part of the essential e-commerce funnel list above.)

### Event Not Created In Customer Events
- view_item | Already Exists
- add_to_cart | Already Exists
- add_to_wishlist | Functionality Does not Exist In Site
- begin_checkout | Already Exists
- purchase | Already Exists
- refund  | Pending, Need Discussion
- view_promotion, select_promotion, select_item -> Pending
- sign_up, login ->  Pending, Need Discussion



### Alternate Events | Feasibility Check
select_size - instead and capture the click on size selection from the PDP? (cofirm the variant id for data Layer in the code)
select_promotion  - track when a users applies a discount code in the checkout? (need to confirm discount code and checkout with tanvir bhai)
login  - we can’t track the form submission? If not, then ignore this one

### Final Added Events
1. view_item_list
2. remove_from_cart
3. view_cart
4. add_shipping_info
5. add_payment_info
6. select_size -> when user clicks on confirm selection button after selecting a all the sizes
7. login -> when a logged in user returns to batchldn domain
8. select_promotion -> will trigger if user completes checkout with discount