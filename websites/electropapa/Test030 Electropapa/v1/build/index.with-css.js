(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `.AB-TEST030 .product-detail-upselling .upselling-title {
  display: none !important;
}
.AB-TEST030 .ab-up-selling-title {
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0px;
  vertical-align: middle;
  color: rgb(71, 180, 235);
  height: 27px;
}
.AB-TEST030 .ab-up-selling-subtitle {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3px;
  margin-bottom: 7px;
}
.AB-TEST030 .ab-up-selling-subtitle__icon {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.AB-TEST030 .ab-up-selling-subtitle__icon svg {
  width: 14px;
  height: 14px;
}
.AB-TEST030 .ab-up-selling-subtitle__title {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 21px;
  letter-spacing: 0%;
  vertical-align: middle;
  color: rgb(71, 180, 235);
}
`;
      document.head.appendChild(style);
      setTimeout(() => {
        clearInterval(interval); // Clear the interval after 5 seconds
      }, 5000);
    }
  }, 100); // Check every 100ms for <head>
})();
(async () => {
  const TEST_CONFIG = {
    page_initials: "AB-TEST030",
    test_variation: 1,
    test_version: 0.0002,
  };

  const { page_initials, test_variation, test_version } = TEST_CONFIG;

  const ASSETS = {
    exclamation_svg: /* HTML */ `
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <rect width="14" height="14" fill="url(#pattern0_6392_3644)" />
        <defs>
          <pattern
            id="pattern0_6392_3644"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlink:href="#image0_6392_3644" transform="scale(0.0078125)" />
          </pattern>
          <image
            id="image0_6392_3644"
            width="128"
            height="128"
            preserveAspectRatio="none"
            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAADRFJREFUeJzt3X1wXNV5BvDnOasPWwYRe3clAY5rk9oJJIQWQxNqD9ippd3VajFJKk9IJk2ZMJPQGWZKCaWdEJpSZlLPUPLBMJ3p0LQZkqGRJ42dlVbalUBqgmlrHDKNHdMaYrkhgK2ViG0s2ZJ2z9s/JKuyra+r3XvOanV+/2n3nnMf6bzaj3vvOZcoNyKMdQ5clxd1PUQ2kFxP4TpNCVMkCDAIYAWAKgCrJlsNAxgDcB6QISGHKBwA5Q0ROQ6yX4s+0hOv6wcptn41P9B2gELFUkNr8/n8FkD9PqlvBfghAFf6tLt3ATksol6m0vsrtdrfngi96dO+jFhyBbCtt39F9ciqbaJVjJQYgI2WIx0F2QnortGa4b6+7RvOW87jyZIogNY2qTq9cjACYheBOwHU2s40izMQ7BOFtqH6UPqnt3DcdqD5lHQBNCYHNiri8xDeA6LOdh6PfkNgj0bgqUzLmsO2w8ymJAsgmhzYKuDDIOIo0YxeENivBbszLaH2UvsQWTp/XBFGO4Y+LpBHAdxkO44vBD8T8LFMS3BfqRRCSRRAU2ogRs3HAdxsO4shPwXlkXS8rst2EKsF0JIcvHYc8jUQn7WZw6LnA8w/kIo3HLIVwEoBtLZJ1Zma7JcAfhlAjY0MJWQcwLeqZPzRZOKaEdM7N14A0eTgHwjkaRDvN73vUkbgmKb6YiYe7Da8XzO29favqDp75W5S7je53yVH8KxU5e/LRBqGTezOyEBEkidvAtVzAK43sb8ycIR5fXfXzvqf+70j5fcOmpLZz4DqJbjB9+IGCaj/jCQH7vF7R769ArS2SeDdmqGvC+R+v/axLJDfrB0OPrhnF/O+dO9Hp7HUa9Var34WkFY/+l+G9tWOnL97z673nit2x0UvgG1tA1dU1+BfATYWu+/lTIh/01WBnT2Na04Xs9+iFkBzx0BDXjMF4neL2a9zgRyuFBUt5jUIRSuAHe0nr6uA6hbgumL16VyOwLEcdGNPS/2xIvVXuKb0iTqOB16E/Yszlot+VGBLOhp+u9COCv4aGEsN1XIs0AU3+CZtkBzT8fZTqwvtqKACaG2TKq31D9x7vnmE3DjO8R9u6+1fUUg/iy6Aye/53wOwo5AAzuJRcEf18BXf39YrFYvtY9EFMHmQ5w8X294pmjurR4aeWGzjRX0IbEpmP0Piu4vdqVN8pNzTFa/7Z8/tvDaIJE/eJFT/TmCl17aOr0YCzH/U68Ulnt4CtvX2rxAGnnWDX5Jq8hL4l9a2NzyNjacCqB6+4klCbvSWyzHohndrVu720mDBbwGR9sEdgGS8tHGsEFHckWkOvbCQjRf0CtDaJlWAPAU3+EsBqeXvY6nXqhey8YIK4HRN9iEAHygolmPSprysfmAhG877H70j+c66APNH8P9TqZ2lYYSB3Ae7Ylcfn2ujeV8BAsw/BTf4S1GNzgeenG+jOV8BJmfspIqXqWScheAnII6DICHXiXALyrDQCR3taqlPz/b87MeQRciOwcd9SWXPOxB8WQVO/VNn88bR6U8kkm/VjKrKL1Dw1/BvgQkL1OMQycw2F3HWV4Bo++AnBPID/4IZd1RyakfmruAbc23U3JHdlBO8QOBaU8F8R96Vjof2zfTUrJ8BBPIV/xIZN5KHjs03+ACQioePUnAngJyBXGaIPDrbUzMWwMRBH/yOb4EME8HTXi6hSifCrxDyPT8zGXZzU2rwYzM9McsrgDzoZxrjqPd6baJFeW5TypiXL830+GUF0NyR3QQg4nsigypY5fkqWlHyaz+yWENEG5MDl122d1kB5DTuRZkd8s0h3+C1DTWu9iOLRVTE5y998KICaG2TKgKfM5fJEI0Wz20m1icqM/zc5oNSOf2Riwpgcim2pbYa17xIub9xX/aahW4f7cy+n8Af+xjJlobw29mLZmxd/BZA7DIax5yrVAA/Wshl1M0dAw2Swz4ACzqbtuRcMsZTBbCtt3/F5CKM5WpzDrlXIu3ZmV/aRRjpOPnJvPCVcl69RMC7pp8qnvqwV8bH/WdyFJCMkMeUBoX4bQBNAN5nO5gJWlSkOxHMANPOBSitYoKSWLrOhE0AN1EAKavvOwsToI4CyADT3gIEErWWyDFKgKmxJjC5Xh/L7MCHM6dK4dr2ROhNBQBj0FttB3LMGoO+DZh8C1BUW+zGcUwjuQWYLACBvsVuHMc8/h4AqK9+VRRAN9lj2ZEbIULGUiffp7V63XYcg94CmKHIISh5BwC0METBhwGU5aHw2TCQ21CRz6sbuDy+C/9GwAeuGgl+d7Y19zYflMrwiewfCfgEgPcYzmdeLnBDBSjry+zs70zGINiRSYRemWujyXv8/GMkefLg5OqmZb2SuSi1QZFcbzuIAXvTifCcgz9dOlH/XwI862egUkCR9YrCdbaD+I+eP+NQ5FU/kpQSAX9LCaTsP/SIQHttQ7UcToxIWAEI2o7h2CFgUAFYYzuIYwchQYUy/6TrzGmlkom7aDvLU7WiK4DlrNr3W8Y4pU0JMGY7hGPNqKIrgOVsVAEwcn86p/QIMKKAiVOizvJDYFAJOWQ7iGMHBUNKCbO2gzh2CDGohPIr20EcO0Twv0pEjtsO4lhC9iuQ/bZzOHaQul9p0UdsB3HsyOuKI6onXtcP4IztMI5xp3taVr+hJlaQlF/YTuMYdwikTJwMojpgOYxjGnEAmJoerl+ymcUxj8L9wGQB6BxftBvHMU1x4p9eAUD3zvBbAI5aTeSYdCQVrzsBTF8ljOy0FscxbWqsp10RpLtsJHFs4NRYTxWA4uleAKet5HFMOlU7EvzxhR+mCqCzeeMoBD+yk8kxhvzhnl2cugrsootCRaHNfCLHJEr++9N/vqgAxmpCXQDeNprIMelEtqHuojuKXlQAfduZA8t/WvTyxW9ProEw5bJ5AVrLM8BymBm77IhS+W9f+uBlBdCdqHsNgrL6SqgoK7y2Ea08tylxqc7m+l9e+uCMM4MI/p3/ecwR4GMQb6sCi5Jmv/LYQMETMz0+YwF0JULPQ/AzfyMZdXNT++DuBRWBCCPtA39LwR0GchlB4GBXItw303Nz3DeQj/mWyAISD0U6BrsbUydnXhVVhJH27Pam1GAvwIcNx/OVFsw6lrP/R4gw0jH4MoDNfoSy7NcgDorIWwBAcC2AW4Gyu1EUABxIt4Q/MtuTs987mBR0DDwCKcuTRGshWMvyXx4PQvXIXM/POT08Ha/rgqAcC2B5ELRn4sHuuTaZd30AAf8MwPh82zklZ4wVmPFuodPNWwCZROi/CXyzOJkcc+TrXbHw/8y31YJWCKmU8b8CcNlBBKdk9Uul/puFbLigAkgmrhkB+EW4Q8RLgYjivZlIw4LWfVjwGkHpllAPIE8vPpdjBPmtTHPohfk3nOBpkajRVcMPgfi591SOIb+oHT73l14aeP4i3Nxx4sa8BP4DboHJUjMMrT6SvjPoaZaX52XiUvGGQyTu9drO8Rl5n9fBBxZRAADQFQ8/B+Abi2nr+IB4Mh0PLepCnkUvFHnbwdCDAPcstr1TJMTe2uHQny++eQFa26TqTE22HWDj/Fs7PuhT6lS0s3nj6GI7KPhsSCw1VKu17gVwc6F9OQsn4KGx8cDtfR9ffaqQfgpeK7izOXhGqVwUbm6hMQSOVVA3FTr4QBEKAAA6m6/O5qFjcIeLTfhlDrrxwuTOQhVttfCelvpjubzeUmaXkpUYOVwpvKOnpf5YsXos6nLxz++sPzl6Tm4nJVPMfh0AQF++umJreyL0ZjE7Lfr9Avp21Z29cjicANw0s6Ih9o6uOhvraVxT9Mm7vtwwYs8ujtWOhD4Nd7CocMSTt70c+mTf9g3n/eneZ03t2U8ReAbAKr/3VU4EOAfwvkxL6Dt+7sfIVZGTJ5CeA/BBE/tb6gQ8RM27F3Ns3ysj9wxKxRsOja46ewsguwHvd/FcRoTAP1TL2EdNDD5g4bbhkfbsdgBPA7je9L5L3Oui+AUvF3MUg/G7hqVbwr2DDaGbAP4F3O1qAGAckN21I+c/bHrwAQuvANO1JAevHYd8DcRnbeawqAda/ampl/uZlMTUmMbkUJNS+nEIbrWdxZADWtRXuhNB6wfMSqIAAAAijHYMJgR4FOU5HxEEDmrBY5lEOGk7ywWlUwDTRJMDWwV8GEQcJZrRCwL7tWB3KQ38BSX9x23aO/ReVsinAfkTAOts5/HoBCDfQR7PpHfWvW47zGxKugAu2HxQKoMD2R3UahcgdwF4j+1MszgFcK8o3Ta2Mtzdt50524HmsyQKYLpY6rXqvKy5ndBRCGKwfzzhVRCdAtUV4Ds/LuTyLBuWXAFcqrljoCEP2QJRWwncKsCHAFzl0+7OADwMyAFQv4iAeikdDS/pdRWXfAHMJNr59notgeuVVhu0yHoqrIOgDkRQBEFOTGqpAHDlZJOzmJgCf07AIUKGAAwQ+JWQx4X6mGL+1a7Y1cct/Uq++T+Gjjicyp9udQAAAABJRU5ErkJggg=="
          />
        </defs>
      </svg>
    `,
  };

  async function waitForElementAsync(
    predicate,
    timeout = 10000,
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
    return o ? s.querySelector(o) : document.querySelector(s);
  }

  function qq(s, o) {
    return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
  }

  function toNumber(str) {
    const num = String(str).replace(/[^\d.-]/g, "");
    return num ? Number(num) : NaN;
  }

  function init() {
    if (window[page_initials] === true) return;

    q("body").classList.add(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version:${test_version}`,
    );
    window[page_initials] = true;

    const targetNode = q(".product-detail-upselling");
    targetNode.classList.remove("d-none");

    const activeValue = toNumber(
      q(
        targetNode,
        ".upselling-card--selected .upselling-card-capacity, .upselling-card--selected .upselling-card-price",
      ).textContent,
    );

    qq(targetNode, "li.upselling-item").forEach((item) => {
      const curr = toNumber(
        q(item, ".upselling-card-capacity, .upselling-card-price").textContent,
      );
      if (curr < activeValue) item.classList.add("d-none");
    });

    targetNode.insertAdjacentHTML(
      "afterbegin",
      /* HTML */ `
        <div class="ab-up-selling-title">
          Mit mehr Kapazität (mAh) die Akkulaufzeit deutlich verlängern
        </div>
        <div class="ab-up-selling-subtitle">
          <span class="ab-up-selling-subtitle__icon"
            >${ASSETS.exclamation_svg}</span
          >
          <span class="ab-up-selling-subtitle__title"
            >Alle Kapazitäten sind mit deinem Gerät kompatibel</span
          >
        </div>
      `,
    );
  }

  try {
    await waitForElementAsync(() =>
      q(
        `body:not(.${page_initials}):not(.${page_initials}--v${test_variation}) .product-detail-upselling`,
      ),
    );
    init();
  } catch (error) {
    return false;
  }
})();
