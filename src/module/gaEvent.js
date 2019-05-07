// GA Button

export const ga_button = (category, type) => {
  if (window.ga) ga("send", "event", "XXXXX專案", category, type);
};
