export const calculateAveragePower = (powerstats: {
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
}): number => {
  const values = Object.values(powerstats);
  const total = values.reduce((sum, stat) => sum + stat, 0);
  return Math.round(total / values.length);
};
