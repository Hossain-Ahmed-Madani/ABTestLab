const layout = /* HTML */ `
    <div class="ab-pricing-table-wrapper">
        <div class="ab-pricing-header">
            <div class="ab-pricing-header__left">Volume Discount</div>
            <div class="ab-pricing-header__right">Auto-applied at checkout</div>
        </div>
        <div class="ab-pricing-table">
            <div class="ab-pricing-table__sub-header">✦ Add 11 more roll to unlock 10% off</div>
            <ul class="ab-pricing-table__pricing ab-pricing-table__pricing--mobile">
                ${Array.from({ length: 3 })
                    .map(
                        (_, index) => /* HTML */ `
                            <li class="ab-pricing-table__pricing__item">
                                <div class="ab-pricing-table__pricing__save-percentage">-10%</div>
                                <div class="ab-pricing-table__pricing__roll-count">6 ROLLS+</div>
                                <div class="ab-pricing-table__pricing__price">$11.25</div>
                                <div class="ab-pricing-table__pricing__price-per-yard">($0.45/yard)</div>
                                <div class="ab-pricing-table__pricing__save">You save $25.00</div>
                            </li>
                        `,
                    )
                    .join("")}
            </ul>
            <ul class="ab-pricing-table__pricing ab-pricing-table__pricing--desktop">
                ${Array.from({ length: 3 })
                    .map(
                        (_, index) => /* HTML */ `
                            <li class="ab-pricing-table__pricing__item">
                                <div class="ab-pricing-table__pricing__left">
                                    <div class="ab-pricing-table__pricing__roll-count">Buy 6+ ROLLS</div>
                                    <div class="ab-pricing-table__pricing__save-container">
                                        <div class="ab-pricing-table__pricing__save">You save $25.00</div>
                                        <div class="ab-pricing-table__pricing__save-percentage">-10%</div>
                                    </div>
                                </div>
                                <div class="ab-pricing-table__pricing__item__right">
                                    <div class="ab-pricing-table__pricing__price">$11.25</div>
                                    <div class="ab-pricing-table__pricing__price-per-yard">($0.45/yard)</div>
                                </div>
                            </li>
                        `,
                    )
                    .join("")}
            </ul>
            <div class="ab-pricing-table__footer">
                <div class="ab-pricing-table__footer__left"></div>
                <div class="ab-pricing-table__footer__right">
                    <a href="https://www.hookandloop.com/price-sheet?sku=Fasteners-DG-Sew-On" target="_blank" class="">See Full Price List →</a>
                </div>
            </div>
        </div>
    </div>
`;
