import "./About1.css";

const promises = [
  {
    title: "Seasonal ingredients",
    text: "Our kitchen favors fresh produce, balanced flavors, and ingredients that keep every plate lively and natural.",
  },
  {
    title: "Thoughtful atmosphere",
    text: "Lighting, music, plating, and service are designed to make each visit feel relaxed, polished, and memorable.",
  },
  {
    title: "Food worth returning for",
    text: "We focus on dishes guests genuinely want to order again, with consistency that builds trust over time.",
  },
];

const moments = [
  {
    value: "2014",
    label: "Welcoming guests with warm hospitality since day one",
  },
  {
    value: "40+",
    label: "Curated dishes across comfort food and signature specials",
  },
  {
    value: "4.9",
    label: "Dining experience designed to feel premium and personal",
  },
];

const About1 = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero__inner">
          <div className="about-hero__copy">
            <p className="about-kicker">About POLO</p>
            <h1>Where good food, elegant detail, and genuine hospitality meet.</h1>
            <p className="about-lead">
              POLO is built for people who want more than a meal. We create a
              restaurant experience that feels rich in flavor, welcoming in mood,
              and memorable from the first look to the last bite.
            </p>

            <div className="about-hero__note">
              <span>Signature dining</span>
              <p>
                Crafted with fresh ingredients, visual beauty, and service that
                feels calm, attentive, and real.
              </p>
            </div>
          </div>

          <div className="about-hero__visuals">
            <div className="hero-card hero-card--large">
              <img src="/images/img_7.jpg" alt="Restaurant dining table" />
            </div>
            <div className="hero-card hero-card--small top">
              <img src="/images/img_5.jpg" alt="Plated signature dish" />
            </div>
            <div className="hero-card hero-card--small bottom">
              <img src="/images/img_3.jpg" alt="Chef prepared dish" />
            </div>
          </div>
        </div>
      </section>

      <section className="about-story">
        <div className="about-story__grid">
          <div className="about-story__panel">
            <p className="section-tag">Our Story</p>
            <h2>A restaurant designed to feel beautiful, grounded, and full of life.</h2>
            <p>
              POLO began with a simple goal: create a place where the food looks
              exciting, tastes deeply satisfying, and the atmosphere makes people
              want to stay a little longer. We wanted elegance without stiffness
              and comfort without compromise.
            </p>
            <p>
              Today, our restaurant brings together colorful presentation,
              familiar warmth, and a steady standard of quality. From everyday
              dining to special celebrations, we aim to make each guest feel that
              their time here matters.
            </p>
          </div>

          <div className="about-story__stats">
            {moments.map((item) => (
              <article className="story-stat" key={item.value}>
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-gallery">
        <div className="about-gallery__header">
          <p className="section-tag">The Experience</p>
          <h2>Beautiful spaces, colorful plates, and a setting that feels special.</h2>
        </div>

        <div className="about-gallery__layout">
          <div className="gallery-tall">
            <img src="/images/img_8.jpg" alt="Special plated dish" />
          </div>
          <div className="gallery-stack">
            <img src="/images/img_2.jpg" alt="Fresh dish with garnish" />
            <img src="/images/img_6.jpg" alt="Healthy bowl presentation" />
          </div>
          <div className="gallery-copy">
            <h3>Dining that looks as good as it tastes.</h3>
            <p>
              Every detail at POLO is chosen to create a stronger feeling of
              quality, from vibrant plating and fresh textures to interiors that
              feel warm, polished, and inviting.
            </p>
            <p>
              We believe beautiful presentation should support the experience,
              not distract from it. That is why our food stays honest, flavorful,
              and thoughtfully composed.
            </p>
          </div>
        </div>
      </section>

      <section className="about-promise">
        <div className="about-promise__intro">
          <p className="section-tag">Why Guests Choose Us</p>
          <h2>We care about what people remember after they leave.</h2>
        </div>

        <div className="about-promise__cards">
          {promises.map((item) => (
            <article className="promise-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-banner">
        <div className="about-banner__content">
          <p className="section-tag section-tag--light">Our Philosophy</p>
          <h2>Serve thoughtfully. Present beautifully. Welcome people warmly.</h2>
          <p>
            That is the standard behind every table we prepare, every dish we
            plate, and every guest experience we create at POLO.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About1;
