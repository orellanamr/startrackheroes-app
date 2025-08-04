import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Hero } from "./heroesSlice";

interface Team {
  id: number;
  name: string;
  members: Hero[];
}

interface TeamsState {
  teams: Team[];
}

const initialState: TeamsState = {
  teams: [],
};

const teamsSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {
    createTeam: (state, action: PayloadAction<{ id: number; name: string }>) => {
      state.teams.push({ id: action.payload.id, name: action.payload.name, members: [] });
    },
    addHeroToTeam: (state, action: PayloadAction<{ teamId: number; hero: Hero }>) => {
      const team = state.teams.find((team) => team.id === action.payload.teamId);
      if (team) {
        team.members.push(action.payload.hero);
      }
    },
    removeHeroFromTeam: (state, action: PayloadAction<{ teamId: number; heroId: number }>) => {
      const team = state.teams.find((team) => team.id === action.payload.teamId);
      if (team) {
        team.members = team.members.filter((hero) => hero.id !== action.payload.heroId);
      }
    },
    deleteTeam: (state, action: PayloadAction<number>) => {
      state.teams = state.teams.filter((team) => team.id !== action.payload);
    },
  },
});

export const { createTeam, addHeroToTeam, removeHeroFromTeam, deleteTeam } = teamsSlice.actions;
export default teamsSlice.reducer;