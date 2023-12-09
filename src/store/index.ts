import { compareDates } from "@/utils/utils";
import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import stateAction from "./action";
import stateBetslip from "./betslip";

export default createStore({
  modules: {
    stateAction,
    stateBetslip,
  },
  state: {
    config: {},
    queryParams: {},
    gameMarket: [],
    gameSettings: {},
    accountSetting: {},
    nextDraws: [],
    lang: {},
    isLogin: false,
  },
  mutations: {
    SET_CONFIG(state, config) {
      state.config = config;
    },
    SET_QUERY_PARAMS(state, payload) {
      state.queryParams = payload;
    },
    SET_GAME_MARKET(state, payload) {
      state.gameMarket = payload;
    },
    SET_ACCOUNT_SETTINGS(state, payload) {
      state.accountSetting = payload;
    },
    SET_GAME_SETTINGS(state, payload) {
      state.gameSettings = payload;
    },
    SET_NEXT_DRAWS(state, payload) {
      state.nextDraws = payload;
    },
    SET_LANG(state, payload) {
      state.lang = payload;
    },
    SET_LOGIN(state, payload) {
      state.isLogin = payload;
    },
  },
  actions: {},
  getters: {
    drawDate: (state) => (gameSlug: string) => {
      if (state.nextDraws.length > 0) {
        const drawDatesAllowSlug: any = state.nextDraws.find(
          (x: any) => x.slug == gameSlug
        );
        if (drawDatesAllowSlug) {
          const listDraws = drawDatesAllowSlug.draws;
          const drawDate = listDraws.filter(
            (x: any) => compareDates(x.cutoff, new Date()) > 0
          );
          if (drawDate.length > 0) {
            return {
              eventId: drawDate[0].id,
              drawDate: drawDate[0].draw_date,
            };
          }
        }
      }
    },
    amountDefault: (state) => {
      const gameSettings: any = state.gameSettings;
      const betsAmount = JSON.parse(gameSettings.betAmounts);
      return betsAmount[0];
    },
  },
  plugins: [createPersistedState()],
});
