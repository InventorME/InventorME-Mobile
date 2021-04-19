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
        "#4e148c",
        "#072ac8",
        "#1e96fc",
        "#a2d6f9",
        "#f5eb00",
        "#ffc600",
        "#e66063",
        "#bd1f21"
      ],
      objectsText: "#ffffff",
      fill: '#404040'
    };
    return color;
  }
  else {
    const color = {
      text: "#ffffff",
      accent: "#fffc40",
      background: "#ffffff",
      theme: "#001e38",
      button: "#4e148c",
      buttonText: "#ffffff",
      label: "#ffffff",
      icon: "#36244f",
      objects: [
        "#4e148c",
        "#072ac8",
        "#1e96fc",
        "#a2d6f9",
        "#f5eb00",
        "#ffc600",
        "#e66063",
        "#bd1f21"
      ],
      objectsText: "#ffffff",
      fill: '#e6e6e6'
    };
    return color;
  }
}

export const colors = colorGenerator();
