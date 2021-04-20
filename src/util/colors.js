import { Appearance } from "react-native";

function colorGenerator() {
  if (Appearance.getColorScheme() === "dark") {
    const color = {
      text: "#ffffff",
      accent: "#fffc40",
      background: "#333333",
      theme: "#001e38",
      navigator: "#001e38",
      title: "#ffffff",
      dock: "#001e38",
      dockBackground: "#333333",
      button: "#f4ebc1",
      buttonText: "#001e38",
      label: "#ffffff",
      icon: "#f2f7ff",
      iconBackless: "#f2f7ff",
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
      text: "#000000",
      accent: "#fffc40",
      background: "#ffffff",
      theme: "#001e38",
      navigator: "#001e38",
      title: "#f2f7ff",
      dock: "#001e38",
      dockBackground: "#333333",
      button: "#4e148c",
      buttonText: "#ffffff",
      label: "#000000",
      icon: "#f2f7ff",
      iconBackless: "#000000",
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
