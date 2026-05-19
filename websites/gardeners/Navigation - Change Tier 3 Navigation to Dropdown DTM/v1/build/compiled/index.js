/* 
Test container: https://app.convert.com/accounts/100412411/projects/100417633/experiences/1004197580/summary
Forced Variation:
control: https://www.gardeners.com/?_conv_eforce=1004197580.1004464421&utm_campaign=qa5
v1: https://www.gardeners.com/?_conv_eforce=1004197580.1004464422&utm_campaign=qa5
*/

(async () => {
  const TEST_CONFIG = {
    client: "ROI Revolutions",
    project: "Gardeners",
    site_url: "https://www.gardeners.com",
    test_name: "Navigation - Change Tier 3 Navigation to Dropdown [DTM]",
    page_initials: "AB-NAV",
    test_variation: 1,
    test_version: 0.0002,
  };

  const { page_initials, test_variation, test_version } = TEST_CONFIG;

  const DATA = [
    {
      label: "Garden Supplies",
      link: "/collections/gardening",
      "data-link-target-pane-key": "submenu-garden-supplies-0-1",
      subMenuList: [
        {
          label: "Garden Tools",
          link: "/collections/garden-tools",
          "data-link-target-pane-key":
            "submenu-garden-supplies-garden-tools-0-2",
          subMenuList: [
            {
              label: "Accessories & Storage",
              link: "/collections/accessories-and-storage",
            },
            {
              label: "Garden Kneelers & Pads",
              link: "/collections/garden-kneelers-and-pads",
            },
            {
              label: "Hand Tools",
              link: "/collections/hand-tools",
            },
            {
              label: "Potting Benches",
              link: "/collections/potting-benches",
            },
            {
              label: "Pruners & Loppers",
              link: "/collections/landscaping-pruners-and-loppers",
            },
            {
              label: "Trugs & Harvest Baskets",
              link: "/collections/trugs-harvest-baskets",
            },
          ],
        },
        {
          label: "Pest & Disease Controls",
          link: "/collections/outdoor-pest-controls",
          "data-link-target-pane-key":
            "submenu-garden-supplies-pest-disease-controls-1-2",
          subMenuList: [
            {
              label: "Animal Controls",
              link: "/collections/animal-controls",
            },
            {
              label: "Fences & Barriers",
              link: "/collections/pest-control-fences",
            },
            {
              label: "Insect Controls",
              link: "/collections/garden-insect-controls",
            },
          ],
        },
        {
          label: "Composters",
          link: "/collections/composting",
          "data-link-target-pane-key": "submenu-garden-supplies-composters-2-2",
          subMenuList: [
            {
              label: "Compost Accessories",
              link: "/collections/compost-accessories",
            },
            {
              label: "Compost Bins & Tumblers",
              link: "/collections/composters",
            },
          ],
        },
        {
          label: "Season Extenders",
          link: "/collections/season-extending",
          "data-link-target-pane-key":
            "submenu-garden-supplies-season-extenders-3-2",
          subMenuList: [
            {
              label: "Cold Frames",
              link: "/collections/cold-frames",
            },
            {
              label: "Plant Protectors & Row Covers",
              link: "/collections/plant-protectors-garden-row-covers",
            },
          ],
        },
        {
          label: "Soils & Fertilizers",
          link: "/collections/potting-soil-and-fertilizers",
          "data-link-target-pane-key":
            "submenu-garden-supplies-soils-fertilizers-4-2",
          subMenuList: [
            {
              label: "Fertilizers",
              link: "/collections/fertilizers",
            },
            {
              label: "Potting Soil Mixes",
              link: "/collections/potting-soil-mixes",
            },
            {
              label: "Seed Starting Supplies",
              link: "/collections/seed-starting-supplies",
            },
          ],
        },
        {
          label: "Watering & Irrigation",
          link: "/collections/watering",
          "data-link-target-pane-key":
            "submenu-garden-supplies-watering-irrigation-5-2",
          subMenuList: [
            {
              label: "Hose Reels & Organizers",
              link: "/collections/hose-organizers",
            },
            {
              label: "Hoses",
              link: "/collections/garden-hoses",
            },
            {
              label: "Irrigation Systems",
              link: "/collections/snip-n-drip-watering",
            },
            {
              label: "Rain Barrels",
              link: "/collections/rain-barrels",
            },
            {
              label: "Sprinklers & Timers",
              link: "/collections/sprinklers-timers",
            },
            {
              label: "Watering Cans",
              link: "/collections/watering-cans",
            },
          ],
        },
        {
          label: "Landscaping Tools & Supplies",
          link: "/collections/yard-and-landscaping",
          "data-link-target-pane-key":
            "submenu-garden-supplies-landscaping-tools-supplies-6-2",
          subMenuList: [
            {
              label: "Edgings & Mulches",
              link: "/collections/edging-and-mulches",
            },
            {
              label: "Fences & Privacy Screens",
              link: "/collections/garden-fences",
            },
            {
              label: "Lawn & Yard Tools",
              link: "/collections/lawn-care",
            },
            {
              label: "Stepping Stones",
              link: "/collections/stepping-stones",
            },
            {
              label: "Weed Mats",
              link: "/collections/mulches",
            },
          ],
        },
      ],
    },
    {
      label: "Planters & Raised Beds",
      link: "/collections/planters-and-raised-beds",
      "data-link-target-pane-key": "submenu-planters-raised-beds-1-1",
      subMenuList: [
        {
          label: "Raised Beds",
          link: "/collections/raised-bed-gardening-and-garden-boxes",
          "data-link-target-pane-key":
            "submenu-planters-raised-beds-raised-beds-0-2",
          subMenuList: [
            {
              label: "Corners & Connectors",
              link: "/collections/raised-bed-corners",
            },
            {
              label: "Raised Bed Accessories",
              link: "/collections/raised-bed-accessories",
            },
            {
              label: "Raised Garden Beds",
              link: "/collections/raised-garden-beds",
            },
          ],
        },
        {
          label: "Elevated Garden Beds",
          link: "/collections/elevated-garden-beds",
          "data-link-target-pane-key":
            "submenu-planters-raised-beds-elevated-garden-beds-1-2",
          subMenuList: [
            {
              label: "Elevated Planters",
              link: "/collections/elevated-planters",
            },
            {
              label: "Potting Benches",
              link: "/collections/potting-benches",
            },
            {
              label: "Elevated Planter Accessories",
              link: "/collections/elevated-planter-accessories",
            },
          ],
        },
        {
          label: "Plant Stands, Caddies & Trays",
          link: "/collections/plant-stands-caddies-and-trays",
          "data-link-target-pane-key":
            "submenu-planters-raised-beds-plant-stands-caddies-trays-2-2",
          subMenuList: [
            {
              label: "Indoor Plant Stands",
              link: "/collections/indoor-plant-stands",
            },
            {
              label: "Outdoor Plant Stands",
              link: "/collections/outdoor-plant-stands-new",
            },
            {
              label: "Plant Caddies & Planter Trays",
              link: "/collections/plant-caddies-and-planter-trays",
            },
            {
              label: "Plant Stands",
              link: "/collections/plant-stands",
            },
          ],
        },
        {
          label: "Pots & Planters",
          link: "/collections/outdoor-planters",
          "data-link-target-pane-key":
            "submenu-planters-raised-beds-pots-planters-3-2",
          subMenuList: [
            {
              label: "Grow Bags",
              link: "/collections/grow-bags",
            },
            {
              label: "Patio Planters",
              link: "/collections/patio-planters",
            },
            {
              label: "Plant Trays & Saucers",
              link: "/collections/plant-saucers-trays",
            },
            {
              label: "Self-Watering Planters",
              link: "/collections/self-watering-planters",
            },
            {
              label: "Tomato Planters",
              link: "/collections/tomato-planters",
            },
          ],
        },
      ],
    },
    {
      label: "Plant Supports",
      link: "/collections/plant-supports",
      "data-link-target-pane-key": "submenu-plant-supports-2-1",
      subMenuList: [
        {
          label: "Arches & Arbors",
          link: "/collections/arches-and-arbors",
        },
        {
          label: "Flower Supports & Trellises",
          link: "/collections/flower-supports-and-trellises",
        },
        {
          label: "Plant Support Accessories",
          link: "/collections/plant-support-accessories",
        },
        {
          label: "Tomato Cages & Supports",
          link: "/collections/tomato-cage-supports",
        },
        {
          label: "Vegetable Supports & Trellises",
          link: "/collections/vegetable-supports",
        },
      ],
    },
    {
      label: "Yard & Outdoors",
      link: "/collections/outdoor-living",
      "data-link-target-pane-key": "submenu-yard-outdoors-3-1",
      subMenuList: [
        {
          label: "Backyard Habitat",
          link: "/collections/backyard-habitat",
          "data-link-target-pane-key":
            "submenu-yard-outdoors-backyard-habitat-0-2",
          subMenuList: [
            {
              label: "Bird Feeders",
              link: "/collections/bird-feeders",
            },
            {
              label: "Wildlife Shelters",
              link: "/collections/bee-and-butterfly-habitat",
            },
          ],
        },
        {
          label: "Yard & Garden Decor",
          link: "/collections/yard-garden-decor",
          "data-link-target-pane-key":
            "submenu-yard-outdoors-yard-garden-decor-1-2",
          subMenuList: [
            {
              label: "Chimes",
              link: "/collections/chimes",
            },
            {
              label: "Decorative Garden Stakes",
              link: "/collections/decorative-garden-stakes",
            },
            {
              label: "Statues & Sculptures",
              link: "/collections/statues-and-sculptures",
            },
            {
              label: "Garden Edgings",
              link: "/collections/garden-edgings",
            },
          ],
        },
        {
          label: "Garden Structures",
          link: "/collections/garden-structures",
          "data-link-target-pane-key":
            "submenu-yard-outdoors-garden-structures-2-2",
          subMenuList: [
            {
              label: "Arches & Arbors",
              link: "/collections/arches-and-arbors",
            },
            {
              label: "Tunnels",
              link: "/collections/tunnels",
            },
            {
              label: "Trellises & Obelisks",
              link: "/collections/trellises-and-obelisks",
            },
          ],
        },
      ],
    },
    {
      label: "Indoor Garden",
      link: "/collections/indoor-gardening",
      "data-link-target-pane-key": "submenu-indoor-garden-4-1",
      subMenuList: [
        {
          label: "Grow Lights & Stands",
          link: "/collections/grow-lights-and-stands",
          "data-link-target-pane-key":
            "submenu-indoor-garden-grow-lights-stands-0-2",
          subMenuList: [
            {
              label: "Bamboo Grow Lights",
              link: "/collections/bamboo-led-grow-lights",
            },
            {
              label: "Grow Lamps & Fixtures",
              link: "/collections/grow-light-fixtures-bulbs",
            },
            {
              label: "Grow Lights",
              link: "/collections/grow-lights",
            },
            {
              label: "Sunlite Grow Lights",
              link: "/collections/sunlite-grow-lights",
            },
            {
              label: "Seed Starting Supplies",
              link: "/collections/seed-starting-supplies",
            },
          ],
        },
        {
          label: "Houseplant Supplies",
          link: "/collections/houseplant-supplies",
          "data-link-target-pane-key":
            "submenu-indoor-garden-houseplant-supplies-1-2",
          subMenuList: [
            {
              label: "Soils & Fertilizers for Houseplants",
              link: "/collections/houseplant-soils-fertilizers",
            },
            {
              label: "Watering Cans & Tools",
              link: "/collections/indoor-watering-cans",
            },
            {
              label: "Plant Stands & Trays",
              link: "/collections/plant-stands-trays",
            },
            {
              label: "Plant Stands",
              link: "/collections/plant-stands",
            },
          ],
        },
        {
          label: "Amaryllis & Flowers",
          link: "/collections/amaryllis-flowers",
          "data-link-target-pane-key":
            "submenu-indoor-garden-amaryllis-flowers-2-2",
          subMenuList: [
            {
              label: "Potted Amaryllis",
              link: "/collections/potted-amaryllis",
            },
            {
              label: "Waxed Amaryllis & Bulbs",
              link: "/collections/waxed-amaryllis-bulbs",
            },
          ],
        },
        {
          label: "Home & Kitchen",
          link: "/collections/indoor-living",
          "data-link-target-pane-key": "submenu-indoor-garden-home-kitchen-3-2",
          subMenuList: [
            {
              label: "Harvest Keeping",
              link: "/collections/kitchen-harvest",
            },
            {
              label: "Baskets & Buckets",
              link: "/collections/baskets-buckets",
            },
            {
              label: "Boot Trays",
              link: "/collections/boot-trays",
            },
            {
              label: "Indoor Insect Controls",
              link: "/collections/fruit-flies-bugs",
            },
            {
              label: "Compost Pails",
              link: "/collections/compost-pails",
            },
          ],
        },
      ],
    },
    {
      label: "Gifts",
      link: "/collections/gifts-for-gardeners",
      "data-link-target-pane-key": "submenu-gifts-5-1",
      subMenuList: [
        {
          label: "GIFT CARDS",
          link: "/products/e-gift-card",
        },
        {
          label: "Blooming Gifts",
          link: "/collections/blooming-gifts",
          "data-link-target-pane-key": "submenu-gifts-blooming-gifts-1-2",
          subMenuList: [
            {
              label: "Amaryllis Gift Collection",
              link: "/collections/amaryllis-gift-collection",
            },
          ],
        },
        {
          label: "Gifts by Price",
          link: "/collections/gifts-by-price",
          "data-link-target-pane-key": "submenu-gifts-gifts-by-price-2-2",
          subMenuList: [
            {
              label: "Gifts under $25",
              link: "/collections/garden-gifts-under-25",
            },
            {
              label: "Gifts $25 - $49",
              link: "/collections/garden-gifts-25-to-49",
            },
            {
              label: "Gifts $50 - $99",
              link: "/collections/garden-gifts-50-to-99",
            },
            {
              label: "Gifts $100-$199",
              link: "/collections/garden-gifts-100-to-199",
            },
            {
              label: "Premium Gifts",
              link: "/collections/premium-gifts",
            },
          ],
        },
        {
          label: "Gifts by Gardener",
          link: "/collections/gardeners-gift-ideas",
          "data-link-target-pane-key": "submenu-gifts-gifts-by-gardener-3-2",
          subMenuList: [
            {
              label: "Beginner Gardeners",
              link: "/collections/gifts-for-beginner-gardeners",
            },
            {
              label: "Flower Gardeners",
              link: "/collections/gifts-for-flower-gardeners",
            },
            {
              label: "Indoor Gardeners",
              link: "/collections/indoor-gardening-gifts",
            },
            {
              label: "Senior Gardeners",
              link: "/collections/adaptive-gardening-gifts",
            },
          ],
        },
        {
          label: "Gifts by Interest",
          link: "/collections/gifts-by-interest",
          "data-link-target-pane-key": "submenu-gifts-gifts-by-interest-4-2",
          subMenuList: [
            {
              label: "Family Fun",
              link: "/collections/gifts-for-family-fun",
            },
            {
              label: "Garden Decor Gifts",
              link: "/collections/garden-decor-gifts",
            },
            {
              label: "Kitchen Gear & DIY Food Kits",
              link: "/collections/gifts-for-gardeners",
            },
            {
              label: "Nature & Birding",
              link: "/collections/gifts-for-gardeners",
            },
          ],
        },
        {
          label: "Gifts by Recipient",
          link: "/collections/gifts-by-recipient",
          "data-link-target-pane-key": "submenu-gifts-gifts-by-recipient-5-2",
          subMenuList: [
            {
              label: "Gifts for Grandma",
              link: "/collections/gifts-for-grandma",
            },
            {
              label: "Gifts for Men",
              link: "/collections/gifts-for-men",
            },
            {
              label: "Gifts for Women",
              link: "/collections/gifts-for-women",
            },
          ],
        },
        {
          label: "Gifts by Occasion",
          link: "/collections/gifts-by-occasion",
          "data-link-target-pane-key": "submenu-gifts-gifts-by-occasion-6-2",
          subMenuList: [
            {
              label: "Gardening Gift Basket",
              link: "/collections/gardening-gift-basket",
            },
            {
              label: "Housewarming Gifts",
              link: "/collections/housewarming-gifts",
            },
            {
              label: "Retirement Gifts for Gardeners",
              link: "/collections/retirement-gifts-for-gardeners",
            },
          ],
        },
      ],
    },
    {
      label: "Gardening Tips",
      link: "/pages/advice",
      "data-link-target-pane-key": "submenu-gardening-tips-1-1",
      subMenuList: [
        {
          label: "Edible Gardening",
          link: "#",
          "data-link-target-pane-key":
            "submenu-gardening-tips-edible-gardening-0-2",
          subMenuList: [
            {
              label: "Growing Fruits & Vegetables",
              link: "/blogs/fruit-vegetable-articles",
            },
            {
              label: "Harvest Keeping",
              link: "/blogs/harvest-keeping-articles",
            },
            {
              label: "Herb Growing",
              link: "/blogs/herb-growing-articles",
            },
            {
              label: "Recipes",
              link: "/blogs/recipes-for-gardeners",
            },
            {
              label: "Tomato Growing",
              link: "/blogs/tomato-growing-articles",
            },
          ],
        },
        {
          label: "Flower Gardening",
          link: "#",
          "data-link-target-pane-key":
            "submenu-gardening-tips-flower-gardening-1-2",
          subMenuList: [
            {
              label: "Annual Flower Gardening",
              link: "/blogs/annual-flower-gardening-articles",
            },
            {
              label: "Cut Flower Gardening",
              link: "/blogs/cut-flower-articles-1",
            },
            {
              label: "Flower Container Design",
              link: "/blogs/flower-container-design-articles",
            },
            {
              label: "Flower Encyclopedia",
              link: "/blogs/flower-encyclopedia",
            },
            {
              label: "Flowering Bulbs",
              link: "/blogs/flowering-bulb-articles",
            },
            {
              label: "Perennial Gardening",
              link: "/blogs/perennial-gardening-articles",
            },
          ],
        },
        {
          label: "Gardening Basics",
          link: "#",
          "data-link-target-pane-key":
            "submenu-gardening-tips-gardening-basics-2-2",
          subMenuList: [
            {
              label: "Fertilizing",
              link: "/blogs/fertilizing-articles",
            },
            {
              label: "Planting Techniques & Tools",
              link: "/blogs/techniques-tools-articles",
            },
            {
              label: "Pruning",
              link: "/blogs/pruning-articles",
            },
            {
              label: "Raised Bed Gardening",
              link: "/blogs/raised-bed-articles",
            },
            {
              label: "Seed Starting",
              link: "/blogs/seed-starting-articles",
            },
            {
              label: "Soils & Compost",
              link: "/blogs/soils-compost-articles",
            },
            {
              label: "Watering",
              link: "/blogs/watering-articles",
            },
            {
              label: "Weeding",
              link: "/blogs/weeding-articles",
            },
          ],
        },
        {
          label: "Indoor Gardening",
          link: "#",
          "data-link-target-pane-key":
            "submenu-gardening-tips-indoor-gardening-3-2",
          subMenuList: [
            {
              label: "Botanical Crafts & DIY",
              link: "/blogs/crafts-diy-articles",
            },
            {
              label: "Growing Under Lights",
              link: "/blogs/growing-under-lights-articles",
            },
            {
              label: "Houseplant Care",
              link: "/blogs/houseplant-care-articles",
            },
            {
              label: "Houseplant Encyclopedia",
              link: "/blogs/houseplant-encyclopedia",
            },
            {
              label: "Terrariums & Succulents",
              link: "/blogs/terrariums-succulents-articles",
            },
          ],
        },
        {
          label: "Landscape & Garden Design",
          link: "#",
          "data-link-target-pane-key":
            "submenu-gardening-tips-landscape-garden-design-4-2",
          subMenuList: [
            {
              label: "Container Gardening",
              link: "/blogs/container-gardening-articles",
            },
            {
              label: "Garden Planning & Design",
              link: "/blogs/garden-planning-design-articles",
            },
            {
              label: "Garden Structures",
              link: "/blogs/garden-structures-articles",
            },
            {
              label: "Garden Wellbeing",
              link: "/blogs/wellbeing-articles",
            },
            {
              label: "Gardening for the Planet",
              link: "/blogs/gardening-planet-articles",
            },
            {
              label: "Landscaping & Lawn Care",
              link: "/blogs/landscaping-lawn-articles",
            },
            {
              label: "Ponds & Aquatic Plants",
              link: "/blogs/ponds-aquatics-articles",
            },
          ],
        },
        {
          label: "Pests & Diseases",
          link: "#",
          "data-link-target-pane-key":
            "submenu-gardening-tips-pests-diseases-5-2",
          subMenuList: [
            {
              label: "Animal Pest Controls",
              link: "/blogs/animal-pest-controls-articles",
            },
            {
              label: "Beneficials in the Garden",
              link: "/blogs/beneficials-articles",
            },
            {
              label: "Indoor Pest Controls",
              link: "/blogs/indoor-pest-control-articles",
            },
            {
              label: "Insect Pest Controls",
              link: "/blogs/insect-pest-control-articles",
            },
            {
              label: "Pest & Disease Encyclopedia",
              link: "/blogs/pest-disease-encyclopedia",
            },
            {
              label: "Plant Disease Controls",
              link: "/blogs/plant-disease-controls-articles",
            },
          ],
        },
        {
          label: "Planning Resources",
          link: "#",
          "data-link-target-pane-key":
            "submenu-gardening-tips-planning-resources-6-2",
          subMenuList: [
            {
              label: "Garden Planner",
              link: "/pages/garden-planner-home",
            },
            {
              label: "Spring Gardening Calendar",
              link: "/pages/spring-gardening-calendar",
            },
            {
              label: "Mulch Calculator",
              link: "/blogs/vegetable-gardening-articles/how-much-mulch-do-i-need",
            },
            {
              label: "Pest & Disease Directory",
              link: "/blogs/pest-disease-encyclopedia/pest-and-disease-directory-5285",
            },
            {
              label: "Rainfall Harvest Calculator",
              link: "/blogs/vegetable-gardening-articles/rain-barrel-for-rainwater-collection",
            },
            {
              label: "Soil Calculator",
              link: "/blogs/vegetable-gardening-articles/soil-calculator",
            },
            {
              label: "Zone Finder",
              link: "/blogs/techniques-tools-articles/new-hardiness-map-7887",
            },
            {
              label: "Vegetable Encyclopedia",
              link: "/pages/gardening-encyclopedia",
            },
          ],
        },
      ],
    },
  ];

  async function waitForElementAsync(
    predicate,
    timeout = 20000,
    frequency = 150,
  ) {
    const startTime = Date.now();

    return new Promise((resolve, reject) => {
      if (typeof predicate === "function" && predicate()) {
        return resolve(true);
      }

      const interval = setInterval(() => {
        const elapsed = Date.now() - startTime;

        if (elapsed >= timeout) {
          clearInterval(interval);
          return reject(
            new Error(
              `Timeout of ${timeout}ms reached while waiting for condition: ${predicate.toString()}`,
            ),
          );
        }

        if (typeof predicate === "function" && predicate()) {
          clearInterval(interval);
          return resolve(true);
        }
      }, frequency);
    });
  }

  function q(s, o) {
    return document.querySelector(s);
  }

  function toggleAccordion(clickedElement) {
    const currentAccordionElement = clickedElement;
    currentAccordionElement.classList.toggle("ab-nav-accordion-item--open");

    const accordionELements = document.querySelectorAll(
      ".ab-nav-accordion-item",
    );
    accordionELements.forEach((elem) => {
      if (elem !== currentAccordionElement) {
        elem.classList.remove("ab-nav-accordion-item--open");
      }
    });
  }

  function init() {
    if (window[page_initials] === true) return;

    q("body").classList.add(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version:${test_version}`,
    );
    window[page_initials] = true;

    console.table(TEST_CONFIG);

    DATA.forEach((tierOneNavItemData) => {
      q(
        `ul[data-menu-depth="1"][data-pane-key="${tierOneNavItemData["data-link-target-pane-key"]}"]`,
      ).insertAdjacentHTML(
        "beforeend",
        /* HTML */ `
          ${tierOneNavItemData.subMenuList
            .map(
              (tierTwoNavItemData) => /* HTML */ `
                <li class="ab-nav-accordion-item">
                  <a
                    href="${tierTwoNavItemData.link}"
                    class="ab-nav-accordion-item__second-tier-link ${!tierTwoNavItemData.subMenuList
                      ? "ab-nav-accordion-item__second-tier-link--no-sub-menu"
                      : ""}"
                  >
                    <div class="ab-nav-accordion-item__second-tier-link__title">
                      ${tierTwoNavItemData.label}
                    </div>
                    <div
                      class="ab-nav-accordion-item__second-tier-link__toggle-icon"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.875 7.438 12 17.563 22.125 7.438"
                          stroke="currentColor"
                          stroke-width="2"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  ${tierTwoNavItemData?.subMenuList?.length > 0
                    ? /* HTML */ `
                        <ul class="ab-nav-accordion-item__third-tier-list">
                          <li class="ab-third-tier-nav-item">
                            <a
                              href="${tierTwoNavItemData.link}"
                              class="ab-third-tier-nav-item__link"
                              >Shop All ${tierTwoNavItemData.label}</a
                            >
                          </li>
                          ${tierTwoNavItemData.subMenuList
                            .map(
                              (tierThreeNavItemData) => /* HTML */ `
                                <li class="ab-third-tier-nav-item">
                                  <a
                                    href="${tierThreeNavItemData.link}"
                                    class="ab-third-tier-nav-item__link"
                                    >${tierThreeNavItemData.label}</a
                                  >
                                </li>
                              `,
                            )
                            .join("")}
                        </ul>
                      `
                    : ""}
                </li>
              `,
            )
            .join("")}
        `,
      );
    });

    q(".mobile-menu").addEventListener("click", (e) => {
      const tierTwoMenuLink = e.target.closest(
        ".ab-nav-accordion-item__second-tier-link:not(.ab-nav-accordion-item__second-tier-link--no-sub-menu)",
      );
      if (tierTwoMenuLink) {
        e.preventDefault();
        const accordionElement = tierTwoMenuLink.parentNode;
        toggleAccordion(accordionElement);
      }
    });
  }

  function checkForItems() {
    return !!(
      q(
        `body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`,
      ) && q('.mobile-menu ul[data-menu-depth="1"]')
    );
  }

  try {
    await waitForElementAsync(checkForItems);
    init();
  } catch (error) {
    console.warn(error);
    return false;
  }
})();
