const stateBetslip = {
  state: {
    yourBets: [],
    betslips: [],
  },
  mutations: {
    saveYourBet(state: any, payload: any) {
      state.yourBets = payload;
    },
    saveBetslips(state: any, payload: any) {
      state.betslips = payload;
    },
  },
  actions: {},
  getters: {},
};

export default stateBetslip;
