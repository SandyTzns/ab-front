import React from "react";
import "../../styles/main.css";
import iconChat from "../../images/iconChat.png";
import iconMoney from "../../images/iconMoney.png";
import iconSecurity from "../../images/iconSecurity.png";

export default function HomeFeaturesIcon() {
  const data = [
    {
      title: "You are our #1 priority",
      image: iconChat,
      description:
        "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    },

    {
      title: "More savings means higher rates",
      image: iconMoney,
      description:
        "The more you save with us, the higher your interest rate will be!",
    },

    {
      title: "Security you can trust",
      image: iconSecurity,
      description:
        " We use top of the line encryption to make sure your data and money is always safe.",
    },
  ];

  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {data.map((feature) => {
        return (
          <div className="feature-item">
            <img
              key={feature.title}
              src={feature.image}
              alt={feature.title}
              className="feature-icon"
            />
            <h3 className="feature-item-title">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        );
      })}
    </section>
  );
}
