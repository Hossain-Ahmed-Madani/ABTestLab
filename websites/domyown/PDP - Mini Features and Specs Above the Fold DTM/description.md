Site: https://www.domyown.com/

Hypothesis: We believe updating/adding the "Product Highlights" section on PDPs by replacing it with product specs, or adding product specs for products that don't have "Product Highlights," will benefit customers because it provides them with clear, relevant information that helps them quickly understand the key features and specifications of a product. This can make it easier for customers to compare products and make informed purchasing decisions.

Test Shell in Testing Platform: https://app.convert.com/accounts/10019048/projects/10019379/experiences/100147500/summary

Audience: All Users

Primary Goal: Transactions

Secondary Goals: Cart Additions, Checkout Entrances, Revenue

URL Targeting: PDPs (contains "-p-")

QA URLs: 
Product with existing "Product Highlights": https://www.domyown.com/termidor-sc-p-184.html
Product without existing "Product Highlights": https://www.domyown.com/forbid-4f-ornamental-insecticide-miticide-p-2332.html
Product with >3 available specs:
https://www.domyown.com/professional-Every product page should show a "Product Highlights" section with 3 bullets. Where bullets are missing, build them from the page's existing Features and Specs table. Variant 2 also tests replacing existing bullets with spec bullets.safety-kit-with-comfo-respirator-p-1399.html?sub_id=23415
https://www.domyown.com/advance-termite-bait-system-kit-p-1331.html?sub_id=1342
https://www.domyown.com/bait-plate-stations-p-722.html?sub_id=963
Equipment product that has 3 available specs: https://www.domyown.com/disposable-nitrile-gloves-box-of-100-p-2769.html

QA Scenario: 

Launch % of Traffic: 100%

Variation Design Details:  
Goal: Every product page should show a "Product Highlights" section with 3 bullets. Where bullets are missing, build them from the page's existing Features and Specs table. Variant 2 also tests replacing existing bullets with spec bullets.
Control
Some product pages have a "Product Highlights" section with three bullet points. Others don't have this section.
Desktop: directly below the price (above the fold).
Mobile: about halfway down the page.
Example product: https://www.domyown.com/termidor-sc-p-184.html


Variant 1
Current state of the page
What to do
"Product Highlight" section exists with 3 or more bullets
Nothing. Leave it as is.
"Product Highlight" section exists with 1–2 bullets
Keep the existing bullets. Add spec bullets until there are 3 total 
No "Product Highlight" section
Build the section above the price (desktop) or at the mobile placement point. Fill it with maximum of 3 spec bullets. 
No Specs & Feature / Insufficient Specs & Feature (will end up with 1 bullet point)
Nothing. Leave it as is.
Variant 1 Example: Product with no existing product highlight 
 https://www.domyown.com/advion-ant-bait-gel-p-932.html
This product has no "Product Highlight," so we want to build an "Product Highlight" using existing Features and Specs. 
Looking at the backfill logic, we have "Targeted Pests," "Active Ingredient," and "Manufacturer" available. So we want to extra them from the table and create bullet points. 

Product Features
Targeted pests: All major species of ants including: Argentine, Big Headed, Carpenter, Cornfield, Crazy, Field, Ghost, Harvester, Honey, Little Black, Odorous House, Pavement, Pharaoh, Pyramid, Red Imported Fire Ant, Rover, Thief and White Footed Display only the first two lines. Add a "Expand" at the end to reveal the full list. 
Active ingredient: Indoxacarb 0.05%
Manufacturer: Syngenta (Mfg. Number: 53204)
See application instructions and more detail in the Features and Specs section.

Example: 

Variant 1 Example: Product with existing product highlight 
https://www.domyown.com/termidor-sc-p-184.html
No change. 
Variant 1 Example: Product with 1-2 existing bullet points. 
Fill in the bullet points until there are three total. I didn't find a product that have this treatment, so please let me know if this is impossible to implement without a known page. 


Variant 2
Current state of the page
What to do
"Product Highlight" section exists (any number of bullets)
Remove all existing bullets. Fill the section with 3 spec bullets.
No "Product Highlight"  section
Same as Variant 1. Build the section and fill it with 3 spec bullets.
No Specs & Feature / Insufficient Specs & Feature (will end up with 1 bullet point)
Nothing. Leave it as is.
Variant 2 Example: Product with no existing product highlight 
Same as variant 1. Backfill until 3 bullet points. 

Variant 2 Example: Product with existing product highlight 
https://www.domyown.com/termidor-sc-p-184.html
Replace existing bullet points with three bullet points from the Spec and Feature table. Use the backfill method. 
Backfill logic
Why? Specs aren't the same from product to product, so the bullets can't be built from a fixed set of fields. A ranked list makes sure each product shows the 3 most useful details it has, and products with fewer specs still get a sensible result.
Priorities 1–3 always come first when they exist. After that, use the list from top to bottom until there are 3 bullets.
Priority
Spec label
1
Targeted Pests
2
Active Ingredients
3
Manufacturer
4
Sprayer Type
5
Tank Size
6
For Use In
7
Coverage Area
8
Special Features
9
Parts Included
10
Yield
Special Styling Notes
On desktop, follow the current styling for "Product Highlight/Feature" section.
On mobile, the "Product Highlight" section is black title + blue text. Switch it to Blue title + black text. 
Bullet format: Label: Value, e.g., "Tank Size: 2 Gallons". Bold the label. 
Clean-up: trim spaces, collapse line breaks, and remove any HTML tags from values.
// Styling for "See application instructions and 
more detail in the Features and Specs section." text

color: #424242;
font-family: "Open Sans";
font-size: 12px;
font-style: italic;
font-weight: 400;

Variation Design Mockup: https://www.figma.com/design/rjarBzPTOU1O5vS6HSbkiY/DoMyOwn?node-id=3574-278&t=ui9VFHsCWCfEGaRp-1




Test container: https://app.convert.com/accounts/10019048/projects/10019379/experiences/100147500/summary
Test variation link:
Control: https://www.domyown.com/termidor-sc-p-184.html?_conv_eforce=100147500.1001233923&utm_campaign=qa09
V1: https://www.domyown.com/termidor-sc-p-184.html?_conv_eforce=100147500.1001233924&utm_campaign=qa09
V2: https://www.domyown.com/termidor-sc-p-184.html?_conv_eforce=100147500.1001233925&utm_campaign=qa09


https://www.domyown.com/bg-electric-duster-m2250-p-320.html