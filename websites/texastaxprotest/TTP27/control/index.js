/* 
Target URL's:
https://www.texastaxprotest.com/blog/
https://www.texastaxprotest.com/blog/texas-tax-relief-amendment/
https://www.texastaxprotest.com/blog/texas-property-tax-cuts-2025/

Figma: https://www.figma.com/design/42DzjhpNUj4W7pNQzKxJ4m/TTP27---BLOGS--Redesign-In-Line-Ads?node-id=2001-309&t=gm3GJl2zJdkfCqXS-0

Test container: https://marketer.monetate.net/control/a-7b7b9c2b/p/texastaxprotest.com/experience/2088293#c2622626:what

Preview:
control: https://marketer.monetate.net/control/preview/12476/8XJWG0ICTUP1403FBUY3EJKDCT8DDQHG/27-blogs-redesign-in-line-ads
v1: https://marketer.monetate.net/control/preview/12476/J8LNV8DPFFC4WDJLO94FBPLTTUOPZDCO/27-blogs-redesign-in-line-ads

Preview including all experiences:
control: https://marketer.monetate.net/control/preview/12476/39UK6PB0RUMHN1YAQRQP5AZSJ5W2PGSI/27-blogs-redesign-in-line-ads
v1: https://marketer.monetate.net/control/preview/12476/55P0XAK8BGTJ583GGZNJMEKPCOX9NQLQ/27-blogs-redesign-in-line-ads


*/

(async () => {
    const TEST_ID = "TTP27";
    const VARIANT_ID = "Control"; /* Control, V1 */

    function logInfo(message) {
        console.log(
            `%cAcadia%c${TEST_ID}-${VARIANT_ID}`,
            "color: white; background: rgb(0, 0, 57); font-weight: 700; padding: 2px 4px; border-radius: 2px;",
            "margin-left: 8px; color: white; background: rgb(0, 57, 57); font-weight: 700; padding: 2px 4px; border-radius: 2px;",
            message,
        );
    }

    logInfo("fired");

    const TEST_CONFIG = {
        client: "Acadia",
        project: "texastaxprotest",
        host: "https://www.texastaxprotest.com",
        test_name: "TTP27: [BLOGS] Redesign In-Line Ads - (2) SET UP TEST",
        page_initials: "AB-TTP27",
        test_variation: 0 /* 0, 1 */,
        test_version: 0.0005,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    function fireGA4Event(eventName, eventLabel = "") {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: "GA4event",
            "ga4-event-name": "cro_event",
            "ga4-event-p1-name": "event_category",
            "ga4-event-p1-value": eventName,
            "ga4-event-p2-name": "event_label",
            "ga4-event-p2-value": eventLabel,
        });
    }

    const ASSETS = {
        property_tax_too_high_mobile: "https://sb.monetate.net/img/1/1582/6010989.png",
        property_tax_too_high_desktop: "https://sb.monetate.net/img/1/1582/6010990.png",
        property_tax_made_easy_mobile: "https://sb.monetate.net/img/1/1582/6010987.png",
        property_tax_made_easy_desktop: "https://sb.monetate.net/img/1/1582/6010988.png",
        property_tax_got_you_down_mobile: "https://sb.monetate.net/img/1/1582/6010985.png",
        property_tax_got_you_down_desktop: "https://sb.monetate.net/img/1/1582/6010986.png",
    };

    const DATA = {
        layout_info: [
            {
                title: "Property Taxes Too High",
                selector: `
                figure:has([src='https://content.texastaxprotest.com/media/uploads/2025/10/Property-taxes-too-high-Win-fair-tax-assessments-with-Texas-Tax-Protest-5-1024x576.png']),
                figure:has([src='https://content.texastaxprotest.com/media/uploads/2025/10/Property-taxes-too-high-Win-fair-tax-assessments-with-Texas-Tax-Protest-6-1024x576.png']),
                figure:has([src='https://content.texastaxprotest.com/media/uploads/2025/10/Property-taxes-too-high-Win-fair-tax-assessments-with-Texas-Tax-Protest-7-1024x576.png']),
                figure:has([src='https://content.texastaxprotest.com/media/uploads/2025/12/Win-fair-tax-assessments-for-Texas-property-owners-1024x576.png']),
                figure:has([src='https://content.texastaxprotest.com/media/uploads/2025/10/Property-taxes-too-high-Win-fair-tax-assessments-with-Texas-Tax-Protest-1024x576.png']),
                figure:has([src='https://content.texastaxprotest.com/media/uploads/2025/10/Property-taxes-too-high-Win-fair-tax-assessments-with-Texas-Tax-Protest-1-1024x576.png']),
                figure:has([src='https://content.texastaxprotest.com/media/uploads/2025/10/Property-taxes-too-high-Win-fair-tax-assessments-with-Texas-Tax-Protest-3-1024x576.png']),
                figure:has([src='https://content.texastaxprotest.com/media/uploads/2025/10/Property-taxes-too-high-Win-fair-tax-assessments-with-Texas-Tax-Protest-4-1024x576.png']),
                figure:has([src='https://content.texastaxprotest.com/media/uploads/2025/09/Client-Testimonials-Highlighting-Successful-Property-Tax-Protests-1024x576.png']),
                figure:has([src='https://content.texastaxprotest.com/media/uploads/2025/09/If-Your-Property-Taxes-are-High-Consider-Texas-Tax-Protest-1024x576.png']),
                figure:has([src='https://content.texastaxprotest.com/media/uploads/2025/09/If-Your-Property-Taxes-are-High-Consider-Texas-Tax-Protest-1-1024x576.png']),
                figure:has([src='https://content.texastaxprotest.com/media/uploads/2025/09/Texas-Tax-Protest-Helping-San-Antonio-Homeowners-Manage-Property-Tax-Assessments-1024x576.png']),
                figure:has([src='https://content.texastaxprotest.com/media/uploads/2025/09/Client-Testimonials-Highlighting-Successful-Property-Tax-Protests--1024x576.png']),
                figure:has([src='https://content.texastaxprotest.com/media/uploads/2025/09/Helping-Austin-Homeowners-Protest-Rising-Property-Taxes-With-Expert-Support-1024x576.png']),
                figure:has([src='https://content.texastaxprotest.com/media/uploads/2025/07/Property-taxes-too-high-Win-big-with-Texas-Tax-Protest-by-your-side-1024x576.png']),
                figure:has([src='https://content.texastaxprotest.com/media/uploads/2025/07/Property-taxes-feel-too-high-Win-fair-tax-assessment-with-Texas-Tax-Protest-in-your-corner-1024x576.png']),
                figure:has([src='https://content.texastaxprotest.com/media/uploads/2025/07/If-your-property-taxes-feel-too-high-after-moving-to-Texas-you-might-be-right-1024x576.png']),
                figure:has([src='https://content.texastaxprotest.com/media/uploads/2025/07/Property-taxes-feel-too-high-Refresh-your-home-maintenance-checklist-and-fight-back-with-Texas-Tax-Protest-1024x576.png']),
                figure:has([src='https://content.texastaxprotest.com/media/uploads/2025/07/Buying-a-home-in-Texas-with-high-property-taxes-calls-for-insight-1024x576.png']),
                figure:has([src='https://content.texastaxprotest.com/media/uploads/2025/07/Property-taxes-feel-too-high-Win-fair-tax-assessment-with-Texas-Tax-Protest-in-your-corner-1024x576.png']),
                figure:has([src='https://content.texastaxprotest.com/media/uploads/2025/07/The-cost-of-living-in-Houston-is-mandatory-but-Texas-Tax-Protest-can-help-you-1024x576.png']),
                figure:has([src='https://content.texastaxprotest.com/media/uploads/2025/04/Contact-Texas-Tax-Protest-Today-1024x576.png']),
                figure:has([src='https://lh7-rt.googleusercontent.com/docsz/AD_4nXfQhh-1Gp03Zy2wAZ_PwqnZULybvxcTDdUUaBQ65s4CgMY8zEQRxOnIvFr3lxSt-IMxSnwO7Kte9Ys_ewFepT9E14AZf2gCoy7R2jcSy1n8UA0jtShb5jBKYNf7Kw1LdvAPo8Nneg?key=SCoGXTTIIVQ2Yv4YAt5wn3sL']),
                figure:has([src='https://lh7-rt.googleusercontent.com/docsz/AD_4nXfZrWAlL8tgPI5nR61G0gCIaxMZi5w7bs-MHDu9W3BZ7v7oZQbutSsB6HltL6aFecdsyhnLRbzPWEwtSjftnZ8yUADJcsI69nxwuh5qoT_T9-tiNtblOPo4ec6XbXmPcTt2080V?key=3WZEElGzNelNnImi6ewRjCoO']),
                figure:has([src='https://lh7-rt.googleusercontent.com/docsz/AD_4nXdFl0T-t_8N5CFRwvcRF607UbErzGUk4BGiE1LpPo4tg-WHiy2pr9iqzPsa0yBXplkPH4EjXN1F1gV-0JvxbEEyn_Ytu79X0hlJpquc8ZVaburXJFkS5VPjUMnzjlNBQRDDXouleQ?key=tDELEuJPtZ5iYJYuSTSizLJM']),
                figure:has([src='https://lh7-rt.googleusercontent.com/docsz/AD_4nXf8sXQgQ3vfGiCedv3SMyGglSB6NQcXGNBXgdZVDEXM1BfxvzctpUCCojl40dsf7hJDhardx9e1RAD7nkq1NpDTzaahZKdraHxuqOYme01NE_01yIUhXruFBEdeLigDSFNYk1ycug?key=K0vEL2a9nRg8U_V-Qod2RlS4']),
                figure:has([src='https://lh7-rt.googleusercontent.com/docsz/AD_4nXfnSazbRsSBJXxFmgRVzDsXgpBxOgS7pAd61CLjYne9w6u64S95rXoqot08NjnmhfswV_H8lc4rFRsNWij8W5Bc3MY93RC3kdg6gEvwwAdl8B_gkIJ1sYrWlGbHY4Ne4vy57IyC?key=lnLd7O0UjVge5lvpBGNdGP42']),
                figure:has([src='https://lh7-rt.googleusercontent.com/docsz/AD_4nXfdW8TXY3-yXNYfBg0FwHSkpzrFfMwwaMpd7Vp4cdZb5NUfvWaJzls1InP21W29-MbEeGt5JomwnfuPBvyT_LcjjW49e_6mRx27oZ9iFUxVSqCq-UDz4NMHQ9HWfvdYqFGsPIxK?key=uF9P6w0_IIgT4ph3q8y8Rk3t']),
                figure:has([src='https://lh7-rt.googleusercontent.com/docsz/AD_4nXfgZUQFyfW5QkZZq7eMyrcTThfAMI07n8acc-AIFjZ5_XPnnUeLrcdPVkHkZVmmRIYs1DYthyA4ls6dKQGoSLlHpa6Wi9pnYJz8QuaGYOMgsHMfME3wNy53zqJ0lUIFNvEV2QrK?key=Vm9cjqtSgMPpb2aN7TVIa54k']),
                figure:has([src='https://lh7-rt.googleusercontent.com/docsz/AD_4nXfkgX1EvPnWP745meJZM44eu6LLdJq4uQrBUczuyoGMHj0E5esC92BES7KaUxFfk4P779Qy1bqhASE7zAEmU4YJBAKWNplNBuFaWP7y5GHp2LbuPimyruErkypIrk290hgcMv-lPw?key=vsvIU9bb_sxpMPCUcfZfI-lr']),
                figure:has([src='https://lh7-rt.googleusercontent.com/docsz/AD_4nXd75k7xFgQsXCxCqgWmicTXElrMGuw2UET-rHM8EEwRwvti4Y1obfBz7j5bLFiKecFvo8R_44DjAxCGHlVpVuwvNazjDew_mXfkzl9jD4FyhOBXL5di0VmgWcMd4WxmY3-I9lLDEQ?key=tPRxTa7T_LmEbBdNL60kbYnF']),
                figure:has([src='https://lh7-rt.googleusercontent.com/docsz/AD_4nXdxEKT_MTuoGHbRHbwDUuutdtM7rB-Bb4lPnd5u2lZZhR4J0ko-P3tsU5C_a-bCJNKqwk9njHg78DLjn5VPvAiGgtDtetp5woSlkXzWnZshj-inaMQ_wXKxaejWcPdW5c4P8YHvfg?key=e4ji16n27uxOoTc24ynxgDqR']),
                figure:has([src='https://lh7-rt.googleusercontent.com/docsz/AD_4nXfFA6lbwlzqdcUrktT4IrmmaZ_1eJeJImUl-xXDU_MBuBCZfHX0Cfwpa17ZWojSDKJ4PZCnNuPiFpsC4CYC_8BqFNW4jX6ae-MYurHOzUaH8yNkeKbfCYn92AmOJn886eU3YxgB4Q?key=2XhzYSTpiKAqVdNzXGj7lhqq']),
                figure:has([src='https://lh7-rt.googleusercontent.com/docsz/AD_4nXdywd76rz-AkZyS83PZLKOHqA4hIW2e7Y22reUnoNSglI-gzFpd5G_95B-7mBuvqMn1KapZTIaT4hjmV7QOM-pH_wTZy4KlLjbW2KGTiO_ZPaD6USxnB9QUi_2K_LLeb7CRvhqTPg?key=ZaGqAqelgh8J4bVMqJ6-pss8']),
                figure:has([src='https://lh7-rt.googleusercontent.com/docsz/AD_4nXdtPyRp5DwwilnmNI1yGkCAm9n92Md2usZAqWb2C3u562UMDkUY-K9Lbk5uuLRqcMj-cWyV80DMp-ll8ahI4eruBmJOPBMFcNWXLFqX7WwD0oZCdLZ86NouGl0pbPiHbE1FNofiUQ?key=qftPTFssOErz1hqXEPK7xluN']),
                figure:has([src='https://lh7-rt.googleusercontent.com/docsz/AD_4nXeUkKYBpPxOlvOJWq2SiqPt1c_FYdixNyi4COWgal2bAmxI9V2_k9KTSqSvy8V3lJQ50xoZXfZL3PdJwGvjCAP_g8NPFxLpzBpZBJAqyG-Fc3b8yRrQZ64MZ2Q4txC2ME9FY17v2w?key=CZXPLtAQIfAUhRSX05XxjJ8r']),
                figure:has([src='https://lh7-rt.googleusercontent.com/docsz/AD_4nXceGU03gw515Y85UsFEmUdNnfVwvHzrOPrMeb_-5ufzoKAXPLooroCfvVYQiOm6vQpe-Fzusq0MAlI4m7QJHwCw4Uu6tx3nMDhqxcNVFIyMGiUHlK2ONOHLOkMbqqUDcPaAZSlXPw?key=W58lVHZ-7W7q6N_CabhBQnYv']),
                figure:has([src='https://lh7-rt.googleusercontent.com/docsz/AD_4nXdJHxZ0T2k_Mn4iH3T_BbBu0YfOhLv7qZQc9b5Jf_qi9qxrjjysNZRH0u5qmxcreOpk-XLxtbNkjMfSC9JkXByHPnROPhTUma-dFDxWJH3h6h1NO102JfPMESLiocyXpDVW-TfAbg?key=d1cYCLV8iQ9YFFmrSEnY3_Bo']),
                figure:has([src='https://content.texastaxprotest.com/media/uploads/2025/01/Collin-Countys-Property-Taxes-1024x576.png']),
                figure:has([src='https://content.texastaxprotest.com/media/uploads/2025/02/How-Property-Taxes-Are-Calculated-in-Montgomery-County-1024x576.png']),
                figure:has([src='https://content.texastaxprotest.com/media/uploads/2025/02/Consequences-of-Not-Paying-Property-Taxes-in-Texas-1024x576.png']),
                figure:has([src='https://content.texastaxprotest.com/media/uploads/2025/02/Texas-Property-Tax-Exemption-1024x576.png']),
                figure:has([src='https://content.texastaxprotest.com/media/uploads/2025/06/image-1-1024x576.png']),
                figure:has([src='https://content.texastaxprotest.com/media/uploads/2025/06/image-1024x576.png']),
                figure:has([src='https://content.texastaxprotest.com/media/uploads/2025/09/image-14-1024x576.png']),
                figure:has([src='https://content.texastaxprotest.com/media/uploads/2025/09/image-11-1024x576.png']),
                figure:has([src='https://content.texastaxprotest.com/media/uploads/2025/09/image-2-1024x576.png']),
                figure:has([src='https://content.texastaxprotest.com/media/uploads/2025/09/image-5-1024x576.png']),
                figure:has([src='https://content.texastaxprotest.com/media/uploads/2025/09/image-7-1024x576.png']),
                figure:has([src='https://content.texastaxprotest.com/media/uploads/2025/09/image-17-1024x576.png']),
                figure:has([alt='Is the cost of living in San Antonio too high? Texas Tax Protest can help you']),
                figure:has([alt='Property Taxes Too High']),
                figure:has([alt='Property taxes too high? Win fair tax assessments with Texas Tax Protest'])
                `,
                img_mobile_src: ASSETS.property_tax_too_high_mobile,
                img_desktop_src: ASSETS.property_tax_too_high_desktop,
            },
            {
                title: "Property Taxes Made Easy",
                selector: `
                    figure:has(img[src='https://content.texastaxprotest.com/media/uploads/2025/12/Tax-Protests-Made-Easy-with-Texas-Tax-Protest-1024x576.png']),
                    figure:has(img[src='https://content.texastaxprotest.com/media/uploads/2025/10/Ready-to-take-on-the-property-tax-challenge-Avoid-the-frustrating-forms-with-Texas-Tax-Protest-1024x576.png']),
                    figure:has(img[src='https://content.texastaxprotest.com/media/uploads/2025/10/Avoid-frustrating-forms-and-waiting-and-let-us-help-make-tax-protesting-easier-1-1024x576.png']),
                    figure:has(img[src='https://content.texastaxprotest.com/media/uploads/2025/10/Now-that-you-know-about-the-disabled-veteran-property-tax-exemption-in-Texas-avoid-the-frustrating-forms-with-Texas-Tax-Protest-1024x576.png']),
                    figure:has(img[src='https://content.texastaxprotest.com/media/uploads/2025/10/Non-disclosure-states-real-estate-got-you-in-a-pinch-Let-us-help-make-tax-protesting-easier-1024x576.png']),
                    figure:has(img[src='https://content.texastaxprotest.com/media/uploads/2025/10/Now-that-you-know-if-property-taxes-are-included-in-mortgage-avoid-the-frustrating-forms-with-Texas-Tax-Protest-1024x576.png']),
                    figure:has(img[src='https://content.texastaxprotest.com/media/uploads/2025/10/Avoid-frustrating-forms-and-waiting-and-let-us-help-make-tax-protesting-easier-1024x576.png']),
                    figure:has(img[src='https://content.texastaxprotest.com/media/uploads/2025/10/Now-that-you-know-about-the-property-tax-freeze-for-seniors-in-Texas-avoid-the-frustrating-forms-with-Texas-Tax-Protest-1024x576.png']),
                    figure:has(img[src='https://content.texastaxprotest.com/media/uploads/2025/09/How-Texas-Tax-Protest-Makes-Property-Tax-Protests-Easy-For-Homeowners-1-1024x576.png']),
                    figure:has(img[src='https://content.texastaxprotest.com/media/uploads/2025/09/Tax-Protests-Made-Easy-1024x576.png']),
                    figure:has(img[src='https://content.texastaxprotest.com/media/uploads/2025/09/Tax-Protests-Made-Easy0A-1024x576.png']),
                    figure:has(img[src='https://content.texastaxprotest.com/media/uploads/2025/09/Texas-Tax-Protest-Simplifies-The-Property-Tax-Appeal-Process-For-Homeowners-In-San-Antonio-1024x576.png']),
                    figure:has(img[src='https://content.texastaxprotest.com/media/uploads/2025/09/How-Texas-Tax-Protest-Makes-Property-Tax-Protests-Easy-For-Homeowners-1024x576.png']),
                    figure:has(img[src='https://content.texastaxprotest.com/media/uploads/2025/09/Easy-Property-Tax-Protest-Services-For-Rising-Home-Values-In-Austin-1024x576.png']),
                    figure:has(img[src='https://content.texastaxprotest.com/media/uploads/2025/09/Texas-Tax-Protest-Simplifies-The-Property-Tax-Protest-Process-With-Research-And-Expert-Filing-1024x576.png']),
                    figure:has(img[src='https://content.texastaxprotest.com/media/uploads/2025/07/If-you-know-the-cost-of-living-in-San-Antonio-avoid-frustrating-forms-with-Texas-Tax-Protest-1024x576.png']),
                    figure:has(img[src='https://content.texastaxprotest.com/media/uploads/2025/07/The-cost-of-living-in-Houston-makes-it-useful-to-avoid-the-frustrating-forms-1024x576.png']),
                    figure:has(img[src='https://content.texastaxprotest.com/media/uploads/2025/07/Avoid-the-frustrating-forms-after-moving-to-Texas-with-Texas-Tax-Protest0A-1024x576.png']),
                    figure:has(img[src='https://content.texastaxprotest.com/media/uploads/2025/07/Avoid-the-frustrating-forms-and-waiting-rooms-with-Texas-Tax-Protest-1024x576.png']),
                    figure:has(img[src='https://content.texastaxprotest.com/media/uploads/2025/07/Buying-a-home-in-Texas-can-be-challenging-when-property-taxes-enter-the-mix.-Let-Texas-Tax-Protest-help-today-1024x576.png']),
                    figure:has(img[src='https://content.texastaxprotest.com/media/uploads/2025/07/While-states-with-no-property-tax-dont-exist-Texas-Tax-Protest-can-do-the-heavy-lifting-and-make-protesting-seamless-1024x576.png']),
                    figure:has(img[src='https://content.texastaxprotest.com/media/uploads/2025/07/Avoid-the-frustrating-forms-and-waiting-rooms-with-Texas-Tax-Protest-1-1024x576.png']),
                    figure:has(img[src='https://content.texastaxprotest.com/media/uploads/2025/04/Avoid-the-frustrating-forms-and-waiting-rooms-with-Texas-Tax-Protest-2-1024x576.png']),
                    figure:has(img[src='https://content.texastaxprotest.com/media/uploads/2025/04/Avoid-the-frustrating-forms-and-waiting-rooms-with-Texas-Tax-Protest0A-1024x576.png']),
                    figure:has(img[src='https://content.texastaxprotest.com/media/uploads/2025/04/Avoid-the-frustrating-forms-and-waiting-rooms-with-Texas-Tax-Protest-1-1024x576.png']),
                    figure:has(img[src='https://content.texastaxprotest.com/media/uploads/2025/04/Avoid-the-frustrating-forms-and-waiting-rooms-with-Texas-Tax-Protest-1024x576.png']),
                    figure:has(img[src='https://content.texastaxprotest.com/media/uploads/2025/04/Avoid-frustrating-forms-and-waiting-rooms-with-Texas-Tax-Protest0A-1024x576.png']),
                    figure:has(img[src='https://content.texastaxprotest.com/media/uploads/2025/04/Let-Texas-Tax-Protest-Do-The-Heavy-Lifting-1024x576.png']),
                    figure:has(img[src='https://lh7-rt.googleusercontent.com/docsz/AD_4nXeEhOWqs4BBemd8lmlIt_VaLJhpMgKl3mHvKlVE4-hrc4tmBmwEqzMVc2LuImtS5JsYKYFvMz1e8Q9aZWEfZceD6zztmgVHQ2dRBlxVzTk3qCArG8MCmfAk4fVDjPcpSDN9iyBN?key=3WZEElGzNelNnImi6ewRjCoO']),
                    figure:has(img[src='https://lh7-rt.googleusercontent.com/docsz/AD_4nXf5lqATIOgTb1I1pQ8_BptH3pSoFelMcPUSaWqcOsLZVNkVmd4pE57s5Tu4C7GYSPibz51fG7glAmDVCZ3IWaSFwnHNTCeMvE0FzVcWcTjyQUu_mZrmnfYEvuQ5W7qIkRAmeowfeg?key=NbhB4-YIZma4GHyWu2u2t0lc']),
                    figure:has(img[src='https://lh7-rt.googleusercontent.com/docsz/AD_4nXevhzbVkHDBtpNmcvtSiSau-ynbT02-6yor1t-BboQ2mOboQLmpeJZBiGAbt7x0YZh5_V93hZ37445yxi59n0s8FI_sSFk4zXRYNl5zxfrONqifD7EW57MKfQQZ_gylEt5oeqyHTg?key=w0-FGGgPuB9LcPZbrFEQZOmd']),
                    figure:has(img[src='https://lh7-rt.googleusercontent.com/docsz/AD_4nXevhzbVkHDBtpNmcvtSiSau-ynbT02-6yor1t-BboQ2mOboQLmpeJZBiGAbt7x0YZh5_V93hZ37445yxi59n0s8FI_sSFk4zXRYNl5zxfrONqifD7EW57MKfQQZ_gylEt5oeqyHTg?key=w0-FGGgPuB9LcPZbrFEQZOmd']),
                    figure:has(img[src='https://lh7-rt.googleusercontent.com/docsz/AD_4nXekbaKdbeQFU21h8m6VGa-LNt4WaSWSOO5QMATFNFiPX-LkcmeFAYrwDLPkek8bBHpy76WG6CFxwcYP40BDmqBfMwTstCaOo769KJPg4AQCcmm-7N6HxaHjW6h4eiQItCWfa_SHvQ?key=rSJT9xDgkxhJyD9MGzVf-g4w']),
                    figure:has(img[src='https://lh7-rt.googleusercontent.com/docsz/AD_4nXf7W0GL42RPyrLjbTsjI66ChzZ1z_yf2OXlYBWiy4Hbx0-qSr2jKjyWXQnKXceYMKG4nQGAVUghhEgsjhX4k4K-O4zhM31g-U_AhPVHpDbG3M6DQWeBRnqwfZyJjtej-eAKRDaD?key=lnLd7O0UjVge5lvpBGNdGP42']),
                    figure:has(img[src='https://lh7-rt.googleusercontent.com/docsz/AD_4nXfBTw0ohBWb60Lyc0OYR8olqwllZsSlObHPN3tTYWQpF9oqEaiwmBBBpGxQj4VDg-rP4QRWOonNqaCrnBcnsB34X78Pn7dwHyAG2mSiL_9oK1Yizc6Lf4VQ_898bsMoimAc7G-r?key=N_eaGQra_y2wPdkKUUPjjWBS']),
                    figure:has(img[src='https://lh7-rt.googleusercontent.com/docsz/AD_4nXetbeGAgG0CSojvTPcyCs2Pjku-XUyMXIOkBvUwAOBz0OXcKJSPvTDZzqNL2Ln40aC0EYHgm69sg3ZM9BSaJOhk3W72m9k0qZJaLcxbsyGcm63OixLQ6drjWGrdion0DmKmRC6T?key=2XhzYSTpiKAqVdNzXGj7lhqq']),
                    figure:has(img[src='https://lh7-rt.googleusercontent.com/docsz/AD_4nXe3-eIpgUzqid6l3g26onpzxHLuMdbuu_o7dSHWN2yQsVs6kTjMxUME2dQ0q-SOKWvMWdqUkwyW0ypsbPDaNPNU5Crj1i3PkAY_29H3QmjS54pL85Z83bi2FsII7xfLuKWhn10mUQ?key=XIjZfff6CeTOMMYSAojmAmPs']),
                    figure:has(img[src='https://lh7-rt.googleusercontent.com/docsz/AD_4nXege34adCaOi521mbUjUGp2b5qK59FSYzp-RMPOC2NftoABNUI1MOmHGn70fUsrZWKI-M2eugSmXeRD_vG-LP12isSh6Pj-NjfQIwcHL2zCLy_WcIH2ToFq93-tw3yvsvsyJSVp?key=qS2Tu0t15_q4sTrxw1BFtGYo']),
                    figure:has(img[src='https://lh7-rt.googleusercontent.com/docsz/AD_4nXdk9GPe1Fij5sxeUoZU2VP3Rk4hnIYulsa4jo0SLUV90Dsv_WdclVGg6w4AD7AJiY4WEA07EULmIxAn3CQVzRI1TJAaTEcGKJXMdY6wSp7y9EH4sXB0izmxaxiISAP95kjn3vWYDg?key=OiBJcWAzH3CFw3unaOOEXgHb']),
                    figure:has(img[src='https://lh7-rt.googleusercontent.com/docsz/AD_4nXfLXy_MyCJOdK2uxpta_YWvB2D4FDqrr9MRmvG8Y1slYaEcFqyOf4tUMiQX_FwVqw-j_ICC6NkwsfSXJx2zCOsXBjSfNJLdcuO4oXlEP97fMpPMWZiDYzmSisclDczw-eU_yICf4Q?key=5cAxVYolsMDwhkI-FLHygTlT']),
                    figure:has(img[src='https://content.texastaxprotest.com/media/uploads/2025/01/Tarrant-County-Property-Tax-Alt-1024x576.png']),
                    figure:has(img[src='https://content.texastaxprotest.com/media/uploads/2025/01/Property-Taxes-Deductibles-1024x576.png']),
                    figure:has(img[src='https://content.texastaxprotest.com/media/uploads/2025/02/Property-Tax-Relief-Texas-1024x576.png']),
                    figure:has(img[src='https://content.texastaxprotest.com/media/uploads/2025/09/image-15-1024x576.png']),
                    figure:has(img[src='https://content.texastaxprotest.com/media/uploads/2025/09/image-3-1024x576.png']),
                    figure:has(img[src='https://content.texastaxprotest.com/media/uploads/2025/09/image-6-1024x576.png']),
                    figure:has(img[src='https://content.texastaxprotest.com/media/uploads/2025/09/image-12-1024x576.png']),
                    figure:has(img[src='https://content.texastaxprotest.com/media/uploads/2025/09/image-9-1024x576.png']),
                    figure:has(img[alt='Avoid the frustrating forms with Texas Tax Protest!'])
                    `,
                img_mobile_src: ASSETS.property_tax_made_easy_mobile,
                img_desktop_src: ASSETS.property_tax_made_easy_desktop,
            },
            {
                title: "Property Taxes Got You Down",
                selector: `
                    figure:has(img[src='https://content.texastaxprotest.com/media/uploads/2025/09/Texas-Tax-Protest-Can-Advocate-For-Your-Property0A-1024x576.png']),
                    figure:has(img[src='https://content.texastaxprotest.com/media/uploads/2025/09/Texas-Tax-Protest-Can-Advocate-For-Your-Property-1024x576.png']),
                    figure:has(img[src='https://content.texastaxprotest.com/media/uploads/2025/09/Texas-Tax-Protest-Takes-The-Hassle-Out-Of-Protesting-Property-Taxes-For-Texas-Owners.0A-1024x576.png']),
                    figure:has(img[src='https://content.texastaxprotest.com/media/uploads/2025/04/Control-Your-Property-Taxes-With-Texas-Tax-Protest-1024x576.png']),
                    figure:has(img[src='https://content.texastaxprotest.com/media/uploads/2025/04/Take-back-the-power-to-control-your-property-taxes-with-Texas-Tax-Protest-1024x576.png']),
                    figure:has(img[src='https://lh7-rt.googleusercontent.com/docsz/AD_4nXfl3S9vQMT-RjT9A2h9bh990iFjMYx245edjdEm7sIBJQpjJGs2VYCJQaLdTqmD7v2NRcYmh0GQjo17YwandDxA3uzc_UvfwURpT4UvCANFJfVaaO97vp5KYWxVTP57VRsIDUDbXw?key=SCoGXTTIIVQ2Yv4YAt5wn3sL']),
                    figure:has(img[src='https://lh7-rt.googleusercontent.com/docsz/AD_4nXcZhQhKYf5icWza0gRo3GWCsBVl3KfIhOLsu5gjBmdckqOwYFCNoKee_HINfS67cN-h7VNnFnv6hZ_5TJ_Z-Lf8DitCVWyj2JPJyQPqBTWglRx60M6lbnvtObgp615vcZnj_9Cs?key=tDELEuJPtZ5iYJYuSTSizLJM']),
                    figure:has(img[src='https://lh7-rt.googleusercontent.com/docsz/AD_4nXfwc7E2HTh5iUbbVS18UsaoRgK6-0KnVJkCgwz8aLqAUKICOC3PeXigDKJG9PDoHjxyyCQTqO0T49u90XPiCmp8LsckxKqNw8GXTC1gyqQtoiGZrm7P2MIIzFUPoCKgQ9DvcvoJkQ?key=NbhB4-YIZma4GHyWu2u2t0lc']),
                    figure:has(img[src='https://lh7-rt.googleusercontent.com/docsz/AD_4nXdASvpHNDucYQokgZ3qaM1rUtcIFw36CGGCb_6jtSE4dM6zxWMJuxu3lVhY30gXSnMHL55OeobLpmcVSVGgV-XHLusk39aPYO0nkhNsNjhUXqVhQXIAM1bPCviJUbiE6WQbv5b8dw?key=w0-FGGgPuB9LcPZbrFEQZOmd']),
                    figure:has(img[src='https://lh7-rt.googleusercontent.com/docsz/AD_4nXdj7oUMsLsX5CYkYgrrlJqBxguHD_hD4V25MM_H275-drk_bD2AoQVI9KWfdBPP9Rzoqer1JM2yv80q3MoKMIi7b1VrvOakM5Q84YTnkIyTH5VXT5ya_Psdpr2PF0jCkEohb2wEZg?key=uF9P6w0_IIgT4ph3q8y8Rk3t']),
                    figure:has(img[src='https://lh7-rt.googleusercontent.com/docsz/AD_4nXdasULqfq9TKQ1bqEzn6hXQMcN-OOVLEAZnMWpl_VTeW-N-OImgCMH_pm75k3P9j8eAv7t9ghLDQgPBzGJEhaCPbfRA_AIZn7IucVGXzM-bS9awGENZYvpsThZcq1HpvZCr6QMa?key=Vm9cjqtSgMPpb2aN7TVIa54k']),
                    figure:has(img[src='https://lh7-rt.googleusercontent.com/docsz/AD_4nXdSwufPRueULigctVq5rfgx6nM7Fys3nJImsPWpqatK6nG91ktfSPYp_GunpObBP8FmT7dkXs2QHadNR3XIUAGDBxkgNSfqFaOomPMseEfxE02DGut3ttDr8ei2c7k2RnWbid3Ryw?key=vsvIU9bb_sxpMPCUcfZfI-lr']),
                    figure:has(img[src='https://lh7-rt.googleusercontent.com/docsz/AD_4nXeplVfay6y2oIPtwr3hLtVaWvbSbfqMLARvxnLXgGSaRE7TK9jxnkYiEIjQak1cmsXZ6TTHWTY-DOD82_9-yZUTzKNjEMolg7LfeeTf2nNHOTXJqpPvEupPhlh9RjDJNnjT-FLN-Q?key=N_eaGQra_y2wPdkKUUPjjWBS']),
                    figure:has(img[src='https://lh7-rt.googleusercontent.com/docsz/AD_4nXewFV_-EdpKA0mArnin2vLMXQOI1p3hkdk5v-MK5vqb6aoeufT9wi8ARh1-xj_m3n2LkfYdGuEPVuszHFpd9uYj-AyubvspnblI47pLF0MlrGuZ43W46icsu2DMGB3wzf1THuMb?key=e4ji16n27uxOoTc24ynxgDqR']),
                    figure:has(img[src='https://lh7-rt.googleusercontent.com/docsz/AD_4nXdCr59xh4ZOfLiG0GgrW4A4O-YqmRi6L8-fYiOC0v7cWw1CjfX7z3S-pXKfAonjGA_nQrr7IHAkfQ_tJY_dV7EktxbmOB4PPx-B7emaCYh6-BOp9gDWXOyrGrrwFDIoG2RVAkBv?key=XIjZfff6CeTOMMYSAojmAmPs']),
                    figure:has(img[src='https://lh7-rt.googleusercontent.com/docsz/AD_4nXfQLcTX0pIdMALP6IeGoXx798w23JfkhuwwwotJoBErx_Ei5wZ37Zjlwdjdj4TSRuilw-j_sIw2ETNz7dnU83-GAm9_hdKmn1uBfVRxYwxQpUMUrkrHUCeK9jWIWm7rpEvuA5cYvw?key=68NIzFv0sEA0fHhKvhIHqysZ']),
                    figure:has(img[src='https://lh7-rt.googleusercontent.com/docsz/AD_4nXeVnqUAGZjvt9kyRDjgs-H1XeEJ10U-kEbbEKDEN_exJrEx_ww1mqnV4eS6YwX40sADAPe7BR4pWiydZKnrFAZ1333d5lR8FQ19H-xKrhaxXBiVX-3tlGx1X075NoBQ8urFZq3Afg?key=w4voegf-hMUZJQYldF5OkJb8']),
                    figure:has(img[src='https://lh7-rt.googleusercontent.com/docsz/AD_4nXdx-KtlDte8EPtCvprmHJzXJWkHg6kmtnjEoASWVwqbJpPjuR3V6WJR5HA0C2WBAaVzngPV14FMYpbgT5eMr8WEoYUtwBAOJp5IiH7bj0Xe49WBZkNr6NaY99ObGoz7ArTlmkqaIw?key=PpJjV_rOKp4rWM6iHlDrTyWU']),
                    figure:has(img[src='https://lh7-rt.googleusercontent.com/docsz/AD_4nXef7Vc5IwD64ofXYZqvy3y6ojXqO4Vmr8HY0l5K5E6nlL8_3jxNyGP9Ctp078-lDpTjjr8a6wfV1rI1IvWYMjCmJjwcSTo0mWQOhweA2kb-S9JpNdNRRFUeqJQ7nyW-QyCRm4Ezmg?key=qftPTFssOErz1hqXEPK7xluN']),
                    figure:has(img[src='https://content.texastaxprotest.com/media/uploads/2025/01/Property-Taxes-Deductibles-Alt-1024x576.png']),
                    figure:has(img[src='https://content.texastaxprotest.com/media/uploads/2025/02/Control-Your-Property-Taxes-1024x576.png']),
                    figure:has(img[src='https://content.texastaxprotest.com/media/uploads/2025/04/Control-Your-Property-Taxes-With-Texas-Tax-Protest-1024x576.png']),
                    figure:has(img[src='https://content.texastaxprotest.com/media/uploads/2025/02/Options-for-Paying-Overdue-Property-Taxes-1024x576.png']),
                    figure:has(img[src='https://content.texastaxprotest.com/media/uploads/2025/09/Texas-Tax-Protest-Can-Advocate-For-Your-Property-1-1024x576.png'])
                `,
                img_mobile_src: ASSETS.property_tax_got_you_down_mobile,
                img_desktop_src: ASSETS.property_tax_got_you_down_desktop,
            },
        ],
    };

    async function waitForElementAsync(predicate, timeout = 20000, frequency = 150) {
        const startTime = Date.now();

        return new Promise((resolve, reject) => {
            if (typeof predicate === "function" && predicate()) {
                return resolve(true);
            }

            const interval = setInterval(() => {
                const elapsed = Date.now() - startTime;

                if (elapsed >= timeout) {
                    clearInterval(interval);
                    return reject(new Error(`Timeout of ${timeout}ms reached while waiting for condition: ${predicate.toString()}`));
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

    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    function isSafari() {
        const userAgent = navigator.userAgent;
        return /Safari/.test(userAgent) && !/Chrome/.test(userAgent);
    }

    function isTouchEnabled() {
        return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    }

    let foundNodes;

    function clickFunction() {
        foundNodes.forEach((item) => {
            const linkItem = q(item, "a");

            linkItem.addEventListener("click", (e) => {
                e.preventDefault();
                const currentTarget = e.currentTarget;
                const href = currentTarget.getAttribute("href");
                const label = q(currentTarget, "img").getAttribute("alt") ?? "";
                fireGA4Event("TTP27_inlineAdClicks", label);
                window.open(href, "_blank", "noopener,noreferrer");
            });
        });
    }

    function isElementVisibleInViewport(el) {
        let top = el.getBoundingClientRect().top;
        let right = el.getBoundingClientRect().right;
        let bottom = el.getBoundingClientRect().bottom;
        let left = el.getBoundingClientRect().left;
        let innerWidth = window.innerWidth;
        let innerHeight = window.innerHeight;

        return ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) && ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth));
    }

    const debouncedGa4Event = debounce(() => {
        fireGA4Event("TTP27_ViewInLineAd");
    }, 250);

    function removeScrollHandler() {
        window.removeEventListener("scroll", handleScroll);
        foundNodes = null;
    }

    function handleScroll(e) {
        const isVisible = foundNodes.some((item) => isElementVisibleInViewport(item));
        if (isVisible) {
            debouncedGa4Event();
            removeScrollHandler();
        }
    }

    function scrollFunction() {
        if (foundNodes && foundNodes.length === 0) return;
        window.addEventListener("scroll", handleScroll);
    }

    function handleLocationChanges() {
        const pathname = window.location.pathname;
        const blogDetailPathRegex = /^\/blog\/[^/]+\/?$/;

        window[page_initials] = false;
        document.body.classList.remove(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);

        if (blogDetailPathRegex.test(pathname)) {
            init_TTP27();
        } else {
            removeScrollHandler();
        }
    }

    function urlObserver() {
        const debouncedChanges = debounce(handleLocationChanges, 150);

        const originalPushState = history.pushState;
        history.pushState = function () {
            originalPushState.apply(history, arguments);
            window.dispatchEvent(new Event("pushstate"));
        };

        // Listen for back/forward button clicks
        window.addEventListener("popstate", function (event) {
            debouncedChanges();
        });

        window.addEventListener("pushstate", function () {
            debouncedChanges();
        });
    }

    function checkForItems() {
        return !!(
            q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) &&
            DATA.layout_info.some((item) => q(item.selector)) &&
            document.readyState === "complete"
        );
    }

    async function init_TTP27() {
        if (window[page_initials] === true) return;

        try {
            await waitForElementAsync(checkForItems);

            window[page_initials] = true;
            q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);

            foundNodes = DATA["layout_info"].filter(({ selector }) => q(selector)).map(({ selector }) => q(selector));

            if (foundNodes && foundNodes.length === 0) return;

            clickFunction();
            scrollFunction();
        } catch (error) {
            return false;
        }
    }

    init_TTP27();
    urlObserver();
})();
