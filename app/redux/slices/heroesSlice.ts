import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Hero = {
  id: number;
  name: string;
  slug: string;
  powerstats: {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  };
  appearance: {
    gender: string;
    race: string;
    height: Array<string>;
    weight: Array<string>;
    eyeColor: string;
    hairColor: string;
  };
  biography: {
    fullName: string;
    alterEgos: string;
    aliases: Array<string>;
    placeOfBirth: string;
    firstAppearance: string;
    publisher: string;
    alignment: string;
  };
  work: {
    occupation: string;
    base: string;
  };
  connections: {
    groupAffiliation: string;
    relatives: string;
  };
  images: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
};

interface HeroesState {
  heroes: Hero[];
}

const initialState: HeroesState = {
  heroes: [],
};

const heroesSlice = createSlice({
  name: "heroes",
  initialState,
  reducers: {
    setHeroes: (state, action: PayloadAction<Hero[]>) => {
      state.heroes = action.payload;
    },
  },
});

export const { setHeroes } = heroesSlice.actions;
export default heroesSlice.reducer;