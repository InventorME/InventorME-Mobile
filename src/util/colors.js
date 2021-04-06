import { Appearance } from "react-native";

function colorGenerator() {
  if (Appearance.getColorScheme() === "dark") {
    const color = {
      text: "#ffffff",
      accent: "#fffc40",
      background: "#333333",
      theme: "#001e38",
      button: "#f4ebc1",
      buttonText: "#333333",
      label: "#ffffff",
      icon: "#f2f7ff",
      objects: [
        "#ffb5b9",
        "#b3b5ff",
        "#47ff72",
        "#aebffc",
        "#b3b5ff",
        "#b3b5ff",
        "#47ff72",
        "#aebffc",
      ],
      objectsText: "#ffffff",
    };
    return color;
  }

  const color = {
    text: "#000000",
    accent: "#fffc40",
    background: "#ffffff",
    theme: "#3f9388",
    button: "#f4ebc1",
    buttonText: "#ffffff",
    label: "#000000",
    icon: "#36244f",
    objects: [
      "#ffb5b9",
      "#b3b5ff",
      "#47ff72",
      "#aebffc",
      "#b3b5ff",
      "#b3b5ff",
      "#47ff72",
      "#aebffc",
    ],
    objectsText: "#ffffff",
  };
  return color;
}

export const colors = colorGenerator();
