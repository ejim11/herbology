import { HerbItemType } from "@/types/herbItem";
import { HerbCat } from "@/types/herb-cat.eum";
import FLUXH360ANTIINFECTIONSYRUPIMG from "../assets/herbs/treatments/FLUXH360+ – ANTI-INFECTION SYRUP .jpeg";
import FLUXH360ANTIINFECTIONCAPSULES from "../assets/herbs/treatments/FLUXH360 – ANTI-INFECTION CAPSULES .jpeg";
import FLUXH360WOMENSSUPPOSITORYCAPSULESBORIC from "../assets/herbs/treatments/FLUXH360 – WOMEN’S SUPPOSITORY CAPSULES (BORIC)  .jpeg";
import FLUXH360DETOXHORMONALTEA from "../assets/herbs/treatments/FLUXH360 DETOX & HORMONAL TEA.jpeg";
import INTIMEDWomenSLusciousSweetenerElixir from "../assets/herbs/aphrodisiacs/INTIMED - Women's Luscious Sweetener Elixir .jpeg";
import INTIMEDWomenSLusciousSweetenerSyrup from "../assets/herbs/aphrodisiacs/INTIMED - Women's Luscious Sweetener Syrup .jpeg";
import INTIMEDPremiumACTIONMANSyrup from "../assets/herbs/aphrodisiacs/INTIMED - Premium ACTION MAN Syrup  .jpeg";
import INTIMEDAdvancedWomenSWetnessCapsules from "../assets/herbs/aphrodisiacs/INTIMED – Advanced Women’s Wetness Capsules .jpeg";
import RESTOREAdvancedPROBIOTICSGUMMIES from "../assets/herbs/intimate-care/RESTORE -Advanced PROBIOTICS GUMMIES  .jpeg";
import RESTOREWomenSContraceptiveTea from "../assets/herbs/intimate-care/RESTORE – Women’s Contraceptive Tea A Gentle, Natural Approach to Pregnancy Prevention   .jpeg";
import RESTORETHESOUNDWOMANTEA from "../assets/herbs/intimate-care/RESTORE -THE SOUND WOMAN TEA .jpeg";
import FLUXH360WOMENSINTIMATEWASH from "../assets/herbs/intimate-care/FLUXH360 – WOMEN’S INTIMATE WASH .jpeg";
import RESTORELuxuryYONIOIL from "../assets/herbs/intimate-care/RESTORE -Luxury YONI OIL .jpeg";
import RESTORELuxuryIntimateSCRUB from "../assets/herbs/intimate-care/RESTORE – Luxury Intimate SCRUB .jpeg";

export const herbs: HerbItemType[] = [
  {
    image: FLUXH360ANTIINFECTIONSYRUPIMG,
    title: "FLUXH360+",
    name: "ANTI-INFECTION SYRUP",
    category: HerbCat.TREATMENT,
    description:
      "FLUXH360+ Premium Anti-Infection Syrup features a potent, handcrafted herbal formula designed for fast-acting relief from chronic and recurrent infections, including STIs, STDs, UTIs, PID, and PYI.",
    fullDescription: [
      "FLUXH360+ Premium Anti-Infection Syrup features a potent, handcrafted herbal formula designed for fast-acting relief from chronic and recurrent infections, including STIs, STDs, UTIs, PID, and PYI.",
      "Suitable for both genders, this syrup also supports male reproductive health by addressing weak erections and premature ejaculation caused by infections.",
    ],
    volumesPrices: [
      {
        volume: "500ml",
        price: 30000,
      },
      {
        volume: "1.5L",
        price: 180000,
      },
    ],
    slug: "FLUXH360-ANTI-INFECTION-SYRUP",
    recommendation: [
      "For enhanced effectiveness and treatment, we recommend using this syrup in conjunction with our Premium Anti-Infection Capsules",
    ],
  },
  {
    image: FLUXH360ANTIINFECTIONCAPSULES,
    title: "FLUXH360",
    name: "ANTI-INFECTION CAPSULES",
    category: HerbCat.TREATMENT,
    description:
      "FLUXH360 Premium Anti-Infection Capsules are premium, handcrafted herbal antibiotics specifically formulated to effectively combat common infections and diseases.  ",
    fullDescription: [
      "FLUXH360 Premium Anti-Infection Capsules are premium, handcrafted herbal antibiotics specifically formulated to effectively combat common infections and diseases. ",
      "This high-quality herbal product is suitable for both men and women, providing comprehensive support for faster recovery. ",
    ],
    price: 200000,
    slug: "FLUXH360-ANTI-INFECTION-CAPSULES",
    recommendation: [
      "For chronic or recurrent infections, we recommend using these capsules in combination with our Premium Anti-Infection Syrup to enhance overall effectiveness.",
    ],
  },
  {
    image: FLUXH360WOMENSSUPPOSITORYCAPSULESBORIC,
    title: "FLUXH360",
    name: "WOMEN’S SUPPOSITORY CAPSULES (BORIC)",
    category: HerbCat.TREATMENT,
    description:
      "Fluxh360 Women’s Intimate Suppository Capsules are specialized vaginal care products formulated with boric, a naturally occurring mineral that promotes optimal vaginal health.",
    fullDescription: [
      "Fluxh360 Women’s Intimate Suppository Capsules are specialized vaginal care products formulated with boric, a naturally occurring mineral that promotes optimal vaginal health.",
      "These capsules effectively restore pH balance and combat common vaginal irritations, including yeast infections and bacterial vaginosis, while alleviating abnormal discharge, odor, and discomfort.",
    ],
    slug: "FLUXH360-WOMENS-SUPPOSITORY-CAPSULES-BORIC",
    price: 200000,
  },
  {
    image: FLUXH360DETOXHORMONALTEA,
    title: "FLUXH360",
    name: "DETOX & HORMONAL TEA",
    category: HerbCat.TREATMENT,
    description:
      "Fluxh360 Detox & Hormonal Tea is a meticulously crafted blend of herbs, carefully selected to promote overall wellness and support the body's natural detoxification processes.",
    fullDescription: [
      "Fluxh360 Detox & Hormonal Tea is a meticulously crafted blend of herbs, carefully selected to promote overall wellness and support the body's natural detoxification processes.",
      "This powerful herbal infusion combines potent ingredients that work synergistically to cleanse and revitalize the body. ",
    ],
    slug: "FLUXH360-DETOX-HORMONAL-TEA",
    price: 200000,
    textList: {
      title: "KEY BENEFITS",
      list: [
        "Helps eliminate stagnant blood and flushes out toxins (including those from smoking).",
        "Balances Hormones to support optimal well-being",
        "Regulates Menstrual flow for a healthier cycle.",
      ],
    },
  },
  {
    image: INTIMEDWomenSLusciousSweetenerElixir,
    title: "INTIMED",
    name: "Women's Luscious Sweetener Elixir",
    category: HerbCat.APHRODISIACS,
    description:
      "Luscious Sweetener Elixir ( Powder) is a premium, luxurious blend designed to enhance intimacy and elevate sensual experiences.",
    fullDescription: [
      "Luscious Sweetener Elixir ( Powder) is a premium, luxurious blend designed to enhance intimacy and elevate sensual experiences.",
      "Crafted with high-quality ingredients, this elixir addresses common intimate concerns such as discomfort, low libido, and reduced sensitivity while ensuring smoother, more pleasurable exploration. Embrace the adventure.",
    ],
    slug: "INTIMED-Womens-Luscious-Sweetener-Elixir",
    price: 300000,
  },
  {
    image: INTIMEDWomenSLusciousSweetenerSyrup,
    title: "INTIMED",
    name: "Women's Luscious Sweetener Syrup",
    category: HerbCat.APHRODISIACS,
    description:
      "Discover a revolutionary formula designed to awaken your deepest desires and elevate your intimate moments. Luscious Sweetener Syrup is expertly crafted to enhance your sensual experience, boosting libido, stamina, and confidence like never before. ",
    fullDescription: [
      "Discover a revolutionary formula designed to awaken your deepest desires and elevate your intimate moments. Luscious Sweetener Syrup is expertly crafted to enhance your sensual experience, boosting libido, stamina, and confidence like never before.",
      " Each drop is powered by a blend of potent natural ingredients, scientifically proven to stimulate sexual vitality and promote heightened arousal.",
      "Whether you're seeking to rekindle the flames of passion or explore new heights of pleasure, this syrup empowers you to embrace your most passionate sel",
    ],
    slug: "INTIMED-Womens-Luscious-Sweetener-Syrup",
    price: 320000,
  },
  {
    image: INTIMEDPremiumACTIONMANSyrup,
    title: "INTIMED",
    name: "Premium ACTION MAN Syrup",
    category: HerbCat.APHRODISIACS,
    description:
      "Premium ACTION MAN Syrup is an all-natural formula designed to enhance male sexual health by addressing concerns such as premature ejaculation, weak erections, low sperm count, and reduced libido.",
    fullDescription: [
      "Premium ACTION MAN Syrup is an all-natural formula designed to enhance male sexual health by addressing concerns such as premature ejaculation, weak erections, low sperm count, and reduced libido.",
      "This premium syrup boosts stamina, improves libido, strengthens erections, and promotes reproductive health. Crafted with potent natural ingredients, it delivers optimal results while prioritizing your well-being.",
      "Take control of your intimate life and elevate your performance with this ACTION MAN Syrup, your ultimate partner in vitality and confidence",
    ],
    slug: "INTIMED-Premium-ACTION-MAN-Syrup",
    price: 210000,
  },
  {
    image: INTIMEDAdvancedWomenSWetnessCapsules,
    title: "INTIMED",
    name: "Advanced Women’s Wetness Capsules",
    category: HerbCat.APHRODISIACS,
    description:
      "Enhance intimacy and comfort with our Advanced Women’s Wetness Capsules, designed to support natural lubrication and relieve mild dryness.",
    fullDescription: [
      "Enhance intimacy and comfort with our Advanced Women’s Wetness Capsules, designed to support natural lubrication and relieve mild dryness.",
      "Formulated with high-quality, natural ingredients, these capsules promote hydration, balances hormones, and restores confidence for women at every stage of life. This product provides Easy daily solution for improved feminine wellness. It's Simple, safe, and effective.",
    ],
    slug: "INTIMED-Advanced-Womens-Wetness-Capsules",
    price: 250000,
  },
  {
    image: RESTOREAdvancedPROBIOTICSGUMMIES,
    title: "RESTORE",
    name: "Advanced PROBIOTICS GUMMIES",
    category: HerbCat.INTIMATECARE,
    description: `Our Women Natural Probiotics Gummies support overall health by enhancing immune function and gut health.`,
    fullDescription: [
      `Our Women Natural Probiotics Gummies support overall health by enhancing immune function and gut health.`,
      "They Restore beneficial bacteria after antibiotics use, prevent vaginal infections for women, enhance urinary tract and ovarian health, boost fertility for both genders and help manage PCOS symptoms.",
      "Each serving contains 50 billion CFUs for optimal potency. Experience a balanced gut microbiome with our Probiotics Gummies.",
    ],
    slug: "RESTORE-Advanced-PROBIOTICS-GUMMIES",
    textList: {
      list: [
        " ⁠Help prevent vaginal infections",
        "Enhance urinary tract and ovarian health",
        "Support fertility for both men and women",
        "Assist in managing PCOS symptoms",
      ],
    },
    price: 150000,
  },
  {
    image: RESTOREWomenSContraceptiveTea,
    title: "RESTORE",
    name: "Women’s Contraceptive Tea",
    category: HerbCat.INTIMATECARE,
    description: "A Gentle, Natural Approach to Pregnancy Prevention",
    fullDescription: [
      "A Gentle, Natural Approach to Pregnancy Prevention",
      "Embrace the wisdom of nature with RESTORE Women’s Contraceptive Tea, a carefully crafted herbal blend designed to support your reproductive wellness naturally.",
      "Made with time-honored botanicals traditionally used for their contraceptive properties, this tea offers a holistic alternative to synthetic methods.",
    ],
    slug: "RESTORE-Womens-Contraceptive-Tea",
    price: 230000,
    textList: {
      title: "Why Choose RESTORE?",
      list: [
        " Natural & Non-Invasive",
        "Supports Womb",
        "Cycle-Friendly",
        "Trusted Tradition",
      ],
    },
  },
  {
    image: RESTORETHESOUNDWOMANTEA,
    title: "RESTORE",
    name: "The Sound Woman Tea",
    category: HerbCat.INTIMATECARE,
    description: "Nature's Harmony for Feminine Wellness",
    fullDescription: [
      "Nature's Harmony for Feminine Wellness",
      "Discover the gentle power of Sound Woman Tea, a masterfully blended herbal sanctuary crafted to nurture the body's natural rhythms.",
      "Our premium formula combines time-honored botanicals with modern wellness science to offer comprehensive feminine care in every soothing cup",
    ],
    slug: "RESTORE-THE-SOUND-WOMAN-TEA",
    textList: {
      list: [
        "Cleanses and Nourishes: Formulated to cleanse the body and provide essential nourishment.",
        "Supports Reproductive Health: Designed to restore balance to the female reproductive system.",
        "Fights Infections: Helps combat yeast and urinary infections.",
        "Regulates Menstrual Cycle: Aids in regulating women period for improved consistency.",
        "Eases Menstrual Discomfort: Provides relief from menstrual cramps.",
        "Helps alleviate bloating for greater comfort.",
        "Offers support for conditions like PCOS and ovarian cysts.",
      ],
    },
    price: 200000,
  },
  {
    image: FLUXH360WOMENSINTIMATEWASH,
    title: "FLUXH360",
    name: "WOMEN’S INTIMATE WASH",
    category: HerbCat.INTIMATECARE,
    description:
      "FLUXH360 is a luxurious, mild, refreshing, and effective solution, handcrafted with a blend of natural ingredients to maintain optimal genital hygiene.",
    fullDescription: [
      "FLUXH360 is a luxurious, mild, refreshing, and effective solution, handcrafted with a blend of natural ingredients to maintain optimal genital hygiene.",
      "This specially formulated intimate wash helps eliminate unwanted odors while promoting a clean and invigorating feeling.",
      "This amazing product gently cleanses the intimate area without disrupting the skin’s natural balance. The minty infusion provides a cooling sensation, leaving you feeling fresh and confident all day long.",
    ],
    slug: "FLUXH360-WOMENS-INTIMATE-WASH",
    price: 250000,
  },
  {
    image: RESTORELuxuryYONIOIL,
    title: "RESTORE",
    name: "Luxury YONI OIL",
    category: HerbCat.INTIMATECARE,
    description:
      "Luxury Yoni Oil is expertly formulated from essential natural oils to enhance your intimate care routine. This premium oil effectively prevents dryness, chafing, bumps, and ingrown hairs while soothing irritation after shaving. ",
    fullDescription: [
      "Luxury Yoni Oil is expertly formulated from essential natural oils to enhance your intimate care routine. This premium oil effectively prevents dryness, chafing, bumps, and ingrown hairs while soothing irritation after shaving.",
      "It helps reduce swelling and redness, deeply moisturizes, and calms inflamed skin. Additionally, it provides lasting protection against odor, ensuring comfort and freshness throughout the day. Experience luxurious comfort for your most sensitive areas.",
    ],
    slug: "RESTORE-Luxury-YONI-OIL",
    price: 230000,
  },
  {
    image: RESTORELuxuryIntimateSCRUB,
    title: "RESTORE",
    name: "Luxury Intimate SCRUB",
    category: HerbCat.INTIMATECARE,
    description:
      "Experience the ultimate in skincare with our Premium Luxury Intimate Scrub, specially designed to target dark intimate areas, thighs, armpits, and chafing. This scrub effectively exfoliates the skin, removing bumps and rashes.",
    fullDescription: [
      "Experience the ultimate in skincare with our Premium Luxury Intimate Scrub, specially designed to target dark intimate areas, thighs, armpits, and chafing. This scrub effectively exfoliates the skin, removing bumps and rashes.",
      "Achieve smooth, fresh, and supple skin with each use, enhancing your confidence and comfort. Indulge in the luxury of rejuvenated intimate skin today!",
    ],
    slug: "RESTORE-Luxury-Intimate-SCRUB",
    price: 300000,
  },
];
